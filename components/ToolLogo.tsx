'use client'
import { useState } from 'react'

const BRAND: Record<string, { bg: string; text: string; initials: string; logo: string }> = {
  indy:            { bg: '#6C5CE7', text: '#fff', initials: 'In', logo: '/logos/indy.png' },
  freebe:          { bg: '#0061FF', text: '#fff', initials: 'Fb', logo: '/logos/freebe.png' },
  abby:            { bg: '#00C48C', text: '#fff', initials: 'Ab', logo: '/logos/abby.png' },
  qonto:           { bg: '#FF5A50', text: '#fff', initials: 'Qt', logo: '/logos/qonto.png' },
  shine:           { bg: '#1B4332', text: '#4ADE80', initials: 'Sh', logo: '/logos/shine.jpg' },
  pennylane:       { bg: '#1A1A2E', text: '#F4C430', initials: 'PL', logo: '/logos/pennylane.png' },
  alan:            { bg: '#00BCD4', text: '#fff', initials: 'Al', logo: '/logos/alan.png' },
  malakoff:        { bg: '#7B3F00', text: '#fff', initials: 'MH', logo: '/logos/malakoff-humanis.png' },
  harmonie:        { bg: '#2E7D32', text: '#fff', initials: 'HM', logo: '/logos/harmonie-mutelle.png' },
}

interface ToolLogoProps {
  slug: string
  name: string
  size: 'xs' | 'sm' | 'lg'
  priority?: boolean
}

export function ToolLogo({ slug, name, size, priority = false }: ToolLogoProps) {
  const [error, setError] = useState(false)
  const brand = BRAND[slug]

  const dims = {
    xs: { cls: 'w-6 h-6 rounded-lg text-xs', px: 24 },
    sm: { cls: 'w-8 h-8 rounded-lg text-xs', px: 32 },
    lg: { cls: 'w-14 h-14 rounded-2xl text-sm', px: 56 },
  }[size]

  if (!error && brand?.logo) {
    return (
      <div className={`${dims.cls} bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-1 shrink-0`}>
        <img
          src={brand.logo}
          alt={`Logo ${name}`}
          width={dims.px}
          height={dims.px}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      </div>
    )
  }

  return (
    <div
      className={`${dims.cls} flex items-center justify-center font-bold shrink-0`}
      style={{ background: brand?.bg ?? '#6366f1', color: brand?.text ?? '#fff' }}
      aria-label={name}
    >
      {brand?.initials ?? name.slice(0, 2).toUpperCase()}
    </div>
  )
}
