'use client'
import { useState } from 'react'

const MUTUELLE_BRANDS: Record<string, { bg: string; text: string; initials: string; logo: string }> = {
  'Alan':              { bg: '#00BCD4', text: '#fff', initials: 'Al', logo: '/logos/alan.png' },
  'Malakoff Humanis':  { bg: '#7B3F00', text: '#fff', initials: 'MH', logo: '/logos/malakoff-humanis.png' },
  'Harmonie Mutuelle': { bg: '#2E7D32', text: '#fff', initials: 'HM', logo: '/logos/harmonie-mutelle.png' },
  'April':             { bg: '#1565C0', text: '#fff', initials: 'Ap', logo: '' },
}

export function MutuelleLogo({ name }: { name: string }) {
  const [error, setError] = useState(false)
  const brand = MUTUELLE_BRANDS[name]

  if (!error && brand?.logo) {
    return (
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-1 shrink-0">
        <img src={brand.logo} alt={name} className="w-full h-full object-contain" onError={() => setError(true)} />
      </div>
    )
  }

  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
      style={{ background: brand?.bg ?? '#6366f1', color: brand?.text ?? '#fff' }}>
      {brand?.initials ?? name.slice(0, 2).toUpperCase()}
    </div>
  )
}

