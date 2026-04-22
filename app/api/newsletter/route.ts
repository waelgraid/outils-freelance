import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, source, answers } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 500 })
  }

  const attributes: Record<string, string> = {}
  if (source) attributes['SOURCE'] = source
  if (answers && Array.isArray(answers)) {
    attributes['QUIZ_PROFIL'] = answers[0] ?? ''
    attributes['QUIZ_BESOIN'] = answers[1] ?? ''
    attributes['QUIZ_BUDGET'] = answers[2] ?? ''
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [Number(process.env.BREVO_LIST_ID ?? 2)],
      updateEnabled: true,
      attributes,
    }),
  })

  if (res.status === 204 || res.status === 201 || res.status === 200) {
    return NextResponse.json({ ok: true })
  }

  const data = await res.json()
  if (data.code === 'duplicate_parameter') {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Inscription impossible, réessayez.' }, { status: 500 })
}
