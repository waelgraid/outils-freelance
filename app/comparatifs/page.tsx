import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Tous nos comparatifs — Outils pour freelances et auto-entrepreneurs',
  description: 'Retrouvez tous nos comparatifs indépendants : logiciels de facturation, banques pro, comptabilité et mutuelles pour freelances et auto-entrepreneurs.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs' },
}

const categories = [
  {
    href: '/comparatifs/logiciels-facturation',
    label: 'Facturation & Comptabilité',
    desc: "Créez factures conformes, automatisez votre comptabilité, déclarez à l'URSSAF. Tout en un seul outil.",
    count: 4,
    color: 'border-violet-200 bg-violet-50',
    iconColor: 'text-violet-600 bg-violet-100',
    topTools: ['abby', 'freebe', 'indy', 'pennylane'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    href: '/comparatifs/banques-pro',
    label: 'Banques pro en ligne',
    desc: 'Ouvrez un compte bancaire professionnel en 10 minutes. Séparez vos finances personnelles et professionnelles.',
    count: 2,
    color: 'border-blue-200 bg-blue-50',
    iconColor: 'text-blue-600 bg-blue-100',
    topTools: ['qonto', 'shine'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    href: '/comparatifs/mutuelles-freelance',
    label: 'Mutuelles freelance',
    desc: 'Trouvez la meilleure complémentaire santé pour indépendants, adaptée à votre budget et vos besoins.',
    count: 3,
    color: 'border-rose-200 bg-rose-50',
    iconColor: 'text-rose-600 bg-rose-100',
    topTools: ['alan', 'harmonie', 'malakoff'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
]

const BRAND_COLORS: Record<string, { bg: string; text: string; initials: string }> = {
  indy:      { bg: '#6C5CE7', text: '#fff', initials: 'In' },
  freebe:    { bg: '#0061FF', text: '#fff', initials: 'Fb' },
  abby:      { bg: '#00C48C', text: '#fff', initials: 'Ab' },
  qonto:     { bg: '#FF5A50', text: '#fff', initials: 'Qt' },
  shine:     { bg: '#4F46E5', text: '#fff', initials: 'Sh' },
  pennylane: { bg: '#1A1A2E', text: '#F4C430', initials: 'PL' },
}

export default function ComparatifsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-indigo-600">Accueil</Link> › Comparatifs
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Tous nos comparatifs</h1>
        <p className="text-gray-500">Des comparatifs indépendants, mis à jour chaque mois, pour choisir les meilleurs outils de votre activité indépendante.</p>
      </div>

      <div className="space-y-5">
        {categories.map(c => {
          const topTools = c.topTools.map(slug => TOOLS.find(t => t.slug === slug)).filter(Boolean)
          return (
            <Link key={c.href} href={c.href}
              className={`group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border transition-all hover:shadow-md ${c.color}`}>

              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${c.iconColor}`}>
                {c.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="font-bold text-gray-900 text-base group-hover:text-indigo-600 transition-colors">{c.label}</span>
                  <span className="text-xs text-gray-400 font-medium">{c.count} outils comparés</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{c.desc}</p>

                {topTools.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Top :</span>
                    <div className="flex items-center gap-1.5">
                      {topTools.map(tool => {
                        const brand = BRAND_COLORS[tool!.slug]
                        return (
                          <div key={tool!.slug}
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                            style={{ background: brand?.bg, color: brand?.text }}>
                            {brand?.initials.slice(0, 1)}
                          </div>
                        )
                      })}
                      <span className="text-xs text-gray-500 ml-1">
                        {topTools.map(t => t!.name).join(', ')}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="shrink-0 text-sm font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                Voir →
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-2xl text-center">
        <p className="text-sm text-gray-500 mb-1">Vous démarrez votre activité et ne savez pas par où commencer ?</p>
        <Link href="/blog/devenir-auto-entrepreneur" className="text-sm font-semibold text-indigo-600 hover:underline">
          Lire notre guide complet pour devenir auto-entrepreneur →
        </Link>
      </div>
    </div>
  )
}
