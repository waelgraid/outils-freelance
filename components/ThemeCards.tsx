import Link from 'next/link'
import type { ReactNode } from 'react'
import { TOOLS, toolsOf, type Tool } from '@/lib/tools'
import { REVIEWS } from '@/lib/reviews'
import { ToolLogo } from '@/components/ToolLogo'

// Source unique des thèmes comparés : utilisée par l'accueil et par /comparatifs.
// Les notes affichées viennent de la grille publiée (reviews.ts) ; un outil sans
// fiche de notation est affiché « non noté ».

type Accent = 'violet' | 'sky' | 'rose'

// Classes écrites en toutes lettres pour que Tailwind les conserve au build.
const ACCENTS: Record<Accent, { chip: string; bar: string; ring: string; grad: string; shadow: string; cta: string }> = {
  violet: {
    chip: 'bg-violet-100 text-violet-700',
    bar: 'bg-violet-500',
    ring: 'hover:ring-violet-300',
    grad: 'from-violet-50',
    shadow: 'hover:shadow-[0_20px_44px_-22px_rgba(124,58,237,0.45)]',
    cta: 'text-violet-700',
  },
  sky: {
    chip: 'bg-sky-100 text-sky-700',
    bar: 'bg-sky-500',
    ring: 'hover:ring-sky-300',
    grad: 'from-sky-50',
    shadow: 'hover:shadow-[0_20px_44px_-22px_rgba(2,132,199,0.45)]',
    cta: 'text-sky-700',
  },
  rose: {
    chip: 'bg-rose-100 text-rose-700',
    bar: 'bg-rose-500',
    ring: 'hover:ring-rose-300',
    grad: 'from-rose-50',
    shadow: 'hover:shadow-[0_20px_44px_-22px_rgba(225,29,72,0.4)]',
    cta: 'text-rose-700',
  },
}

const icon = (d: ReactNode) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)

export interface Theme {
  href: string
  label: string
  desc: string
  category: Tool['category']
  accent: Accent
  icon: ReactNode
}

export const THEMES: Theme[] = [
  {
    href: '/comparatifs/logiciels-facturation',
    label: 'Facturation et comptabilité',
    desc: 'Factures conformes, livre des recettes, déclaration URSSAF, comptabilité au réel.',
    category: 'facturation',
    accent: 'violet',
    icon: icon(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>),
  },
  {
    href: '/comparatifs/banques-pro',
    label: 'Banques pro',
    desc: 'Séparer finances perso et pro : obligatoire au-delà de 10 000 € de CA deux années de suite.',
    category: 'banque',
    accent: 'sky',
    icon: icon(<><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>),
  },
  {
    href: '/comparatifs/mutuelles-freelance',
    label: 'Mutuelles',
    desc: 'Remboursements, prévoyance et budget : la protection que le salariat ne fournit plus.',
    category: 'mutuelle',
    accent: 'rose',
    icon: icon(<path d="M22 12h-4l-3 9L9 3l-3 9H2" />),
  },
]

export const noteOf = (slug: string): number | null => REVIEWS[slug]?.score.note ?? null
export const fr = (n: number) => n.toFixed(1).replace('.', ',')

function NoteBar({ slug, bar }: { slug: string; bar: string }) {
  const tool = TOOLS.find(t => t.slug === slug)
  if (!tool) return null
  const note = noteOf(slug)
  return (
    <div className="flex items-center gap-3">
      <ToolLogo slug={slug} name={tool.name} size="sm" />
      <span className="w-24 shrink-0 truncate text-sm font-medium text-gray-800">{tool.name}</span>
      {note !== null ? (
        <>
          <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div className={`h-full rounded-full ${bar}`} style={{ width: `${(note / 5) * 100}%` }} />
          </div>
          <span className="w-7 text-right text-sm font-semibold text-gray-900 tabular-nums">{fr(note)}</span>
        </>
      ) : (
        <span className="flex-1 text-xs text-gray-400 italic">non noté</span>
      )}
    </div>
  )
}

export function ThemeCard({ theme, featured = false }: { theme: Theme; featured?: boolean }) {
  const a = ACCENTS[theme.accent]
  const slugs = toolsOf(theme.category).map(t => t.slug)
  const sorted = [...slugs].sort((x, y) => (noteOf(y) ?? 0) - (noteOf(x) ?? 0))
  return (
    <Link href={theme.href}
      className={`group relative flex flex-col rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${a.grad} to-white to-40%
        ring-1 ring-gray-200/80 ${a.ring} ${a.shadow}
        hover:-translate-y-1 active:scale-[0.99] transition-all duration-300
        ${featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}>
      <div className="flex items-center justify-between mb-5">
        <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.chip}`}>{theme.icon}</span>
        <span className="shrink-0 whitespace-nowrap text-xs font-medium text-gray-500 tabular-nums">
          {slugs.length} outils comparés
        </span>
      </div>

      <h3 className={`font-bold text-gray-900 tracking-tight mb-2 text-balance ${featured ? 'text-2xl' : 'text-xl'}`}>
        {theme.label}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-6 text-pretty">{theme.desc}</p>

      <div className="space-y-3 mb-6">
        {sorted.map(s => <NoteBar key={s} slug={s} bar={a.bar} />)}
      </div>

      <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold ${a.cta}`}>
        Voir le comparatif
        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
      </span>
    </Link>
  )
}
