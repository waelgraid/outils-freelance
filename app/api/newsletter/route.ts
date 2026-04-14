import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 500 })
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
    }),
  })

  if (res.status === 204 || res.status === 201 || res.status === 200) {
    return NextResponse.json({ ok: true })
  }

  const data = await res.json()
  // Contact déjà existant = succès pour l'utilisateur
  if (data.code === 'duplicate_parameter') {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Inscription impossible, réessayez.' }, { status: 500 })
}
