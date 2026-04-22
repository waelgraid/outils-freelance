'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Tool } from '@/lib/tools'

const BRAND: Record<string, { bg: string; text: string; initials: string; logo: string }> = {
  indy:       { bg: '#6C5CE7', text: '#fff', initials: 'In', logo: '/logos/indy.png' },
  freebe:     { bg: '#0061FF', text: '#fff', initials: 'Fb', logo: '/logos/freebe.png' },
  abby:       { bg: '#00C48C', text: '#fff', initials: 'Ab', logo: '/logos/abby.png' },
  qonto:      { bg: '#FF5A50', text: '#fff', initials: 'Qt', logo: '/logos/qonto.png' },
  shine:      { bg: '#1B4332', text: '#4ADE80', initials: 'Sh', logo: '/logos/shine.jpg' },
  pennylane:  { bg: '#1A1A2E', text: '#F4C430', initials: 'PL', logo: '/logos/pennylane.png' },
  alan:       { bg: '#00BCD4', text: '#fff', initials: 'Al', logo: '/logos/alan.png' },
  harmonie:   { bg: '#2E7D32', text: '#fff', initials: 'HM', logo: '/logos/harmonie-mutelle.png' },
  malakoff:   { bg: '#7B3F00', text: '#fff', initials: 'MH', logo: '/logos/malakoff-humanis.png' },
}

function BrandLogo({ slug, name, size }: { slug: string; name: string; size: 'sm' | 'lg' }) {
  const [error, setError] = useState(false)
  const brand = BRAND[slug]
  const dim = size === 'lg' ? 'w-14 h-14' : 'w-10 h-10'
  const px = size === 'lg' ? 56 : 40
  const radius = size === 'lg' ? 'rounded-2xl' : 'rounded-xl'

  if (!error && brand?.logo) {
    return (
      <div className={`${dim} ${radius} bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-1.5 shrink-0`}>
        <img
          src={brand.logo}
          alt={`Logo ${name}`}
          width={px}
          height={px}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      </div>
    )
  }

  return (
    <div className={`${dim} ${radius} flex items-center justify-center font-bold text-sm shrink-0`}
      style={{ background: brand?.bg ?? '#6366f1', color: brand?.text ?? '#fff' }}>
      {brand?.initials ?? name.slice(0, 2).toUpperCase()}
    </div>
  )
}

function Stars({ n, reviewCount }: { n: number; reviewCount?: number }) {
  const full = Math.floor(n)
  const half = n - full >= 0.5
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-px">
        {[1,2,3,4,5].map(i => (
          <span key={i} className={`text-xs ${i <= full ? 'text-amber-400' : i === full + 1 && half ? 'text-amber-300' : 'text-gray-200'}`}>★</span>
        ))}
      </div>
      <span className="text-xs text-gray-400">
        {n}/5{reviewCount ? ` · ${new Intl.NumberFormat('fr-FR').format(reviewCount)} avis` : ''}
      </span>
    </div>
  )
}

// Carte homepage
export function ToolCard({ tool, categoryLabel }: { tool: Tool; categoryLabel?: string }) {
  const brand = BRAND[tool.slug]
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col hover:shadow-md transition-all duration-200">
      {categoryLabel && (
        <span className="self-start text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
          {categoryLabel}
        </span>
      )}
      <div className="flex items-center gap-3 mb-4">
        <BrandLogo slug={tool.slug} name={tool.name} size="sm" />
        <div>
          <div className="font-bold text-gray-900 text-base">{tool.name}</div>
          <Stars n={tool.rating} reviewCount={tool.reviewCount} />
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{tool.tagline}</p>
      <div className="mb-5">
        <div className="font-semibold text-gray-900 text-sm">{tool.price}</div>
        {tool.freeTrial && (
          <div className="text-xs text-emerald-600 font-medium mt-0.5">✓ {tool.freeTrial}</div>
        )}
      </div>
      <ul className="space-y-1.5 mb-5">
        {tool.pros.slice(0, 3).map(p => (
          <li key={p} className="text-xs text-gray-500 flex items-start gap-1.5">
            <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>{p}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored"
          className="flex-1 text-center text-sm font-semibold py-2.5 rounded-xl transition-all text-white bg-indigo-600 hover:bg-indigo-700">
          Voir le site →
        </a>
        <Link href={`/outils/${tool.slug}`}
          className="px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-500 hover:border-indigo-200 hover:text-indigo-600 transition-all shrink-0">
          Avis
        </Link>
      </div>
      <p className="text-center text-xs text-gray-300 mt-2">Lien affilié · sans surcoût</p>
    </div>
  )
}

// Ligne comparatif
export function ToolRow({ tool, rank }: { tool: Tool; rank: number }) {
  const brand = BRAND[tool.slug]
  const badgeCls = tool.badgeColor === 'green' ? 'badge-green' : tool.badgeColor === 'blue' ? 'badge-blue' : 'badge-purple'

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="text-xl font-bold text-gray-200 w-7 shrink-0">{rank}</div>
      <BrandLogo slug={tool.slug} name={tool.name} size="lg" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span className="font-bold text-gray-900">{tool.name}</span>
          {tool.badge && <span className={badgeCls}>{tool.badge}</span>}
        </div>
        <p className="text-sm text-gray-500 mb-2">{tool.tagline}</p>
        <div className="flex items-center gap-3 flex-wrap">
          <Stars n={tool.rating} reviewCount={tool.reviewCount} />
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs font-medium text-gray-600">{tool.price}</span>
          {tool.freeTrial && (
            <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
              ✓ {tool.freeTrial}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5 shrink-0 w-full sm:w-auto">
        <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored"
          className="text-center text-sm font-semibold py-2.5 px-5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
          Voir le site →
        </a>
        <Link href={`/outils/${tool.slug}`} className="text-center text-xs text-gray-400 hover:text-indigo-600 py-1">
          Lire l&apos;avis complet
        </Link>
      </div>
    </div>
  )
}
