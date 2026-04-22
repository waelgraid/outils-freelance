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
    label: 'Logiciels de facturation & comptabilité',
    desc: "Créez des factures conformes, automatisez votre comptabilité et déclarez à l'URSSAF — tout en un seul outil.",
    count: 4,
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
    label: 'Mutuelles pour indépendants',
    desc: 'Trouvez la meilleure complémentaire santé pour indépendants, adaptée à votre budget et vos besoins.',
    count: 3,
    topTools: ['alan', 'harmonie', 'malakoff'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
]

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

      <div className="space-y-4">
        {categories.map(c => {
          const topTools = c.topTools.map(slug => TOOLS.find(t => t.slug === slug)).filter(Boolean)
          return (
            <Link key={c.href} href={c.href}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:border-indigo-200 hover:shadow-sm transition-all">

              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600">
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
                    <div className="flex items-center gap-2">
                      {topTools.map(tool => (
                        tool?.logoUrl ? (
                          <div key={tool.slug} className="w-6 h-6 rounded-md bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-0.5 shrink-0">
                            <img
                              src={tool.logoUrl}
                              alt={tool.name}
                              width={20}
                              height={20}
                              loading="lazy"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div key={tool?.slug} className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                            {tool?.name.slice(0, 1)}
                          </div>
                        )
                      ))}
                      <span className="text-xs text-gray-500">
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

      {/* Comparatifs détaillés */}
      <div className="mt-10">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Comparatifs détaillés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: '/comparatifs/indy-vs-abby', label: 'Indy vs Abby' },
            { href: '/comparatifs/freebe-vs-abby', label: 'Freebe vs Abby' },
            { href: '/comparatifs/freebe-vs-indy', label: 'Freebe vs Indy' },
            { href: '/comparatifs/pennylane-vs-indy', label: 'Pennylane vs Indy' },
            { href: '/comparatifs/qonto-vs-shine', label: 'Qonto vs Shine' },
            { href: '/comparatifs/alan-vs-harmonie', label: 'Alan vs Harmonie Mutuelle' },
          ].map(r => (
            <Link key={r.href} href={r.href}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-100 bg-white hover:border-indigo-200 hover:bg-indigo-50 transition-all group">
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600">{r.label}</span>
              <span className="text-gray-300 group-hover:text-indigo-400 text-sm">→</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 bg-gray-50 border border-gray-100 rounded-2xl text-center">
        <p className="text-sm text-gray-500 mb-1">Vous démarrez votre activité et ne savez pas par où commencer ?</p>
        <Link href="/blog/devenir-auto-entrepreneur" className="text-sm font-semibold text-indigo-600 hover:underline">
          Lire notre guide complet pour devenir auto-entrepreneur →
        </Link>
      </div>
    </div>
  )
}
