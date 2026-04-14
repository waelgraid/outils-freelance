'use client'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
      } else {
        setErrorMsg(data.error ?? 'Une erreur est survenue.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Une erreur est survenue, réessayez.')
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-2">
        <div className="text-emerald-600 font-semibold text-sm mb-1">Inscription confirmée</div>
        <p className="text-xs text-gray-400">Vous recevrez notre sélection chaque mois.</p>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="votre@email.fr"
          required
          className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all"
        />
        <button type="submit" disabled={loading}
          className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60 shrink-0">
          {loading ? 'Inscription…' : "S'inscrire →"}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-red-500 mt-2 text-center">{errorMsg}</p>
      )}
    </div>
  )
}
