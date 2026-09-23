import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/Schema'
import { TOOLS } from '@/lib/tools'
import { EDITORIAL } from '@/lib/author'
import { metierLinks } from '@/lib/metiers'
import { ToolLogo } from '@/components/ToolLogo'
import { THEMES, ThemeCard, noteOf, fr } from '@/components/ThemeCards'

export const metadata: Metadata = {
  title: "Comparatifs d'outils pour freelances 2026",
  description: 'Tous nos comparatifs indépendants : logiciels de facturation, comptabilité, banques pro et mutuelles pour freelances et auto-entrepreneurs, notés selon une grille publique.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/' },
  openGraph: {
    title: "Comparatifs d'outils pour freelances 2026",
    description: 'Logiciels de facturation, comptabilité, banques pro et mutuelles : comparatifs indépendants notés selon une grille publique.',
    url: 'https://www.outils-freelance.fr/comparatifs/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const toolOf = (slug: string) => TOOLS.find(t => t.slug === slug)


const secondaires: { href: string; label: string; desc: string }[] = []

const duels = [
  { href: '/comparatifs/indy-vs-abby', a: 'indy', b: 'abby', enjeu: 'Comptabilité libérale automatisée, ou devis et facturation orientés artisans' },
  { href: '/comparatifs/freebe-vs-abby', a: 'freebe', b: 'abby', enjeu: 'Suivi du temps par mission, ou facturation polyvalente' },
  { href: '/comparatifs/freebe-vs-indy', a: 'freebe', b: 'indy', enjeu: 'Pilotage des missions, ou comptabilité en pilote automatique' },
  { href: '/comparatifs/pennylane-vs-indy', a: 'pennylane', b: 'indy', enjeu: 'Régime réel avec expert-comptable, ou micro-entreprise' },
  { href: '/comparatifs/qonto-vs-shine', a: 'qonto', b: 'shine', enjeu: "Dépôt d'espèces et équipe, ou simplicité et petit budget" },
  { href: '/comparatifs/alan-vs-harmonie', a: 'alan', b: 'wemind', enjeu: 'Remboursement en 24 h, ou tarif d\u2019entrée plus bas' },
]

const grille = [
  { critere: 'Prix', poids: 30 },
  { critere: 'Fonctionnalités', poids: 30 },
  { critere: 'Prise en main', poids: 25 },
  { critere: 'Support', poids: 15 },
]


export default function ComparatifsPage() {
  const nbComparatifs = THEMES.length + secondaires.length + duels.length
  const nbNotes = TOOLS.filter(t => noteOf(t.slug) !== null).length

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs/' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-dots pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14">
          <nav className="text-sm text-gray-400 mb-10">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Accueil</Link> › Comparatifs
          </nav>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <p className="text-sm font-medium text-indigo-600 mb-4">
                Tarifs vérifiés en {EDITORIAL.lastPricingCheck}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-5 text-balance">
                Comparer avant de s&apos;abonner.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl text-pretty">
                Logiciels, banques pro, mutuelles : chaque outil est noté selon la même grille publique,
                et chaque comparatif dit aussi pour qui l&apos;outil n&apos;est pas fait.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-px bg-gray-200/70 rounded-2xl overflow-hidden border border-gray-200/70">
              {[
                { v: nbComparatifs, l: 'comparatifs' },
                { v: nbNotes, l: 'outils notés' },
                { v: grille.length, l: 'critères pondérés' },
              ].map(s => (
                <div key={s.l} className="bg-white/90 backdrop-blur px-4 py-5">
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="text-3xl font-bold text-gray-900 tabular-nums tracking-tight">{s.v}</dd>
                  <dd className="text-xs text-gray-500 mt-1">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Par thème : grille asymétrique ── */}
        <section className="pt-14 pb-16">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Par thème</h2>
            <Link href="/methodologie" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              Comment on note →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {THEMES.map((t, i) => <ThemeCard key={t.href} theme={t} featured={i === 0} />)}

            {secondaires.map(s => (
              <Link key={s.href} href={s.href}
                className="group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 bg-gray-50
                  hover:bg-indigo-50/60 active:scale-[0.99] transition-all duration-300">
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">{s.label}</div>
                  <div className="text-sm text-gray-500">{s.desc}</div>
                </div>
                <span className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Les duels ── */}
        <section className="pb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Les duels</h2>
            <p className="text-sm text-gray-500 mt-1">Deux outils face à face. Le gagnant dépend de votre profil, pas de la note.</p>
            <p className="text-xs text-gray-400 mt-1 sm:hidden">Faites défiler →</p>
          </div>

          <div className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0">
            {duels.map(d => {
              const A = toolOf(d.a), B = toolOf(d.b)
              if (!A || !B) return null
              const nA = noteOf(d.a), nB = noteOf(d.b)
              return (
                <Link key={d.href} href={d.href}
                  className="group shrink-0 w-[82%] snap-center sm:w-auto rounded-2xl p-5 bg-white ring-1 ring-gray-200/80 hover:ring-indigo-200
                    hover:-translate-y-0.5 active:scale-[0.99]
                    hover:shadow-[0_14px_32px_-18px_rgba(79,70,229,0.35)] transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col items-center gap-1.5 w-20">
                      <ToolLogo slug={d.a} name={A.name} size="lg" />
                      <span className="text-sm font-semibold text-gray-900">{A.name}</span>
                      <span className="text-xs text-gray-500 tabular-nums">{nA !== null ? `${fr(nA)}/5` : '—'}</span>
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-gray-400 bg-gray-100 rounded-md px-2 py-1
                      group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      VS
                    </span>
                    <div className="flex flex-col items-center gap-1.5 w-20">
                      <ToolLogo slug={d.b} name={B.name} size="lg" />
                      <span className="text-sm font-semibold text-gray-900">{B.name}</span>
                      <span className="text-xs text-gray-500 tabular-nums">{nB !== null ? `${fr(nB)}/5` : '—'}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 text-pretty">
                    <span className="font-semibold text-gray-800">Ça se joue sur : </span>{d.enjeu}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Grille + métiers ── */}
        <section className="pb-6 grid lg:grid-cols-2 gap-4">
          <div className="rounded-3xl p-6 sm:p-7 bg-gray-50">
            <h2 className="text-lg font-bold text-gray-900 mb-1">La grille, en clair</h2>
            <p className="text-sm text-gray-600 mb-5 text-pretty">
              La note affichée est la moyenne pondérée de quatre critères. Mêmes données, même note.
            </p>
            <div className="space-y-3 mb-5">
              {grille.map(g => (
                <div key={g.critere} className="flex items-center gap-3">
                  <span className="w-32 shrink-0 text-sm text-gray-700">{g.critere}</span>
                  <div className="flex-1 h-2 rounded-full bg-white overflow-hidden ring-1 ring-gray-200/60">
                    <div className="h-full rounded-full bg-indigo-500" style={{ width: `${g.poids / 30 * 100}%` }} />
                  </div>
                  <span className="w-10 text-right text-sm font-semibold text-gray-900 tabular-nums">{g.poids} %</span>
                </div>
              ))}
            </div>
            <Link href="/methodologie" className="text-sm font-semibold text-indigo-600 hover:underline">
              Lire la méthodologie →
            </Link>
          </div>

          <div className="rounded-3xl p-6 sm:p-7 bg-gray-50">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Par métier</h2>
            <p className="text-sm text-gray-600 mb-5 text-pretty">
              Statut, obligations, facturation et outils adaptés : un guide complet par profession.
            </p>
            <div className="flex flex-wrap gap-2">
              {metierLinks.map(m => (
                <Link key={m.href} href={m.href}
                  className="text-sm px-3.5 py-2 rounded-xl bg-white ring-1 ring-gray-200/80 text-gray-700
                    hover:ring-indigo-300 hover:text-indigo-700 active:scale-[0.98] transition-all">
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
