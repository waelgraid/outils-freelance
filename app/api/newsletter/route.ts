import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter (resets on cold start)
const rateMap = new Map<string, { count: number; ts: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const window = 60_000 // 1 minute
  const limit = 5       // 5 requests per minute per IP

  const entry = rateMap.get(ip)
  if (!entry || now - entry.ts > window) {
    rateMap.set(ip, { count: 1, ts: now })
    return false
  }
  if (entry.count >= limit) return true
  entry.count++
  return false
}

function sanitize(str: string): string {
  return str.replace(/[<>'"]/g, '').trim().slice(0, 200)
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Trop de requêtes.' }, { status: 429 })
  }

  let body: { email?: string; source?: string; answers?: string[] }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const { email, source, answers } = body

  // Validate email
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email requis.' }, { status: 400 })
  }
  const cleanEmail = sanitize(email).toLowerCase()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
    return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 500 })
  }

  const attributes: Record<string, string> = {}
  if (source && typeof source === 'string') attributes['SOURCE'] = sanitize(source)
  if (answers && Array.isArray(answers)) {
    attributes['QUIZ_PROFIL'] = sanitize(String(answers[0] ?? ''))
    attributes['QUIZ_BESOIN'] = sanitize(String(answers[1] ?? ''))
    attributes['QUIZ_BUDGET'] = sanitize(String(answers[2] ?? ''))
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email: cleanEmail,
      listIds: [Number(process.env.BREVO_LIST_ID ?? 5)],
      updateEnabled: true,
      attributes,
    }),
  })

  if (res.status === 204 || res.status === 201 || res.status === 200) {
    return NextResponse.json({ ok: true })
  }

  const data = await res.json().catch(() => ({}))
  if (data.code === 'duplicate_parameter') {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Inscription impossible, réessayez.' }, { status: 500 })
}
