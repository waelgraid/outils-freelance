import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { articlesIndex } from '@/lib/articles'
import { ToolCard } from '@/components/ToolCard'
import { Quiz } from '@/components/Quiz'
import { Newsletter } from '@/components/Newsletter'
import { ToolLogo } from '@/components/ToolLogo'
import { THEMES, ThemeCard } from '@/components/ThemeCards'
import { MobileCarousel } from '@/components/MobileCarousel'
import { EDITORIAL } from '@/lib/author'

export const metadata: Metadata = {
  title: "Outils-Freelance.fr — Comparatifs pour freelances 2026",
  description: 'Comparatifs indépendants de logiciels de facturation, banques pro et mutuelles pour freelances et auto-entrepreneurs. Classement selon une grille publique, informations datées et sourcées.',
  alternates: { canonical: 'https://www.outils-freelance.fr/' },
  openGraph: {
    title: 'Outils-Freelance.fr — Comparatifs pour freelances 2026',
    description: 'Logiciels de facturation, banques pro, mutuelles : comparatifs indépendants pour freelances et auto-entrepreneurs. Notés selon une grille publique, datés et sourcés.',
    url: 'https://www.outils-freelance.fr/' ,
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const featured = [
  TOOLS.find(t => t.slug === 'abby')!,
  TOOLS.find(t => t.slug === 'qonto')!,
  TOOLS.find(t => t.slug === 'alan')!,
]


const trust = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Classement indépendant',
    desc: 'Une grille de notation publique, identique pour tous les outils. Aucun éditeur ne peut payer pour améliorer sa place.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
    title: 'Daté et sourcé',
    desc: 'Chaque page affiche sa date de vérification et renvoie aux textes officiels. Une information périmée est corrigée.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Gratuit pour vous',
    desc: 'Accès libre à tous nos comparatifs. Nous touchons une commission si vous souscrivez via nos liens, sans surcoût.',
  },
]


export default function HomePage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-100 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-white border border-indigo-100 shadow-sm px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse inline-block" />
            Mis à jour {EDITORIAL.lastUpdate}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
            Trouvez les meilleurs outils<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"> pour votre activité indépendante</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            Comparatifs indépendants de logiciels de gestion, banques pro et mutuelles — notés et comparés pour les freelances et auto-entrepreneurs.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-center gap-6 sm:gap-10 bg-white border border-gray-100 shadow-sm rounded-2xl px-6 sm:px-8 py-4 mb-8 sm:mb-10 flex-wrap justify-center">
            {[
              { value: '+50', label: 'outils étudiés' },
              { value: String(TOOLS.length), label: 'comparés en détail' },
              { value: String(articlesIndex.length), label: 'guides pratiques' },
              { value: '100%', label: 'gratuit' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold text-indigo-600">{s.value}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/comparatifs" className="btn-primary px-8 py-3.5 text-sm font-semibold">
              Voir les comparatifs →
            </Link>
            <Link href="/calculateur-urssaf" className="btn-secondary px-8 py-3.5 text-sm font-semibold">
              Calculateur URSSAF gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUIZ ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 py-14">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Quel outil est fait pour vous ?</h2>
            <p className="text-indigo-200 text-sm">3 questions · Recommandation personnalisée · Gratuit</p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* ── CATÉGORIES ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-50 py-10 sm:py-20">
        <div className="absolute inset-0 bg-dots pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2 text-balance">Comparer par thème</h2>
              <p className="text-gray-600 text-pretty max-w-xl">
                Chaque outil est noté selon la même grille publique. Tarifs vérifiés en {EDITORIAL.lastPricingCheck}.
              </p>
            </div>
            <Link href="/comparatifs"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              Tous les comparatifs <span aria-hidden="true">→</span>
            </Link>
          </div>
          <MobileCarousel label="Comparatifs par thème">
            {THEMES.map(t => <ThemeCard key={t.href} theme={t} />)}
          </MobileCarousel>
          <p className="text-xs text-gray-500 mt-6">
            Notes éditoriales sur 5, calculées selon{' '}
            <Link href="/methodologie" className="underline hover:text-indigo-600">notre grille de notation</Link>
            {' '}— pas des moyennes d&apos;avis clients.
          </p>
        </div>
      </section>

      {/* ── SÉLECTION 2026 ────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Notre sélection 2026</h2>
            <p className="text-gray-400 text-sm">Un outil phare par thème — rapport qualité-prix et fiabilité.</p>
          </div>
          <Link href="/comparatifs" className="text-sm text-indigo-600 hover:underline font-medium shrink-0">
            Tous les comparatifs →
          </Link>
        </div>
        <MobileCarousel label="Notre sélection">
          <ToolCard tool={featured[0]} categoryLabel="Facturation" />
          <ToolCard tool={featured[1]} categoryLabel="Banque pro" />
          <ToolCard tool={featured[2]} categoryLabel="Mutuelle" />
        </MobileCarousel>
      </section>

      {/* ── TRUST ────────────────────────────────────────── */}
      <section className="bg-gray-950 border-y border-gray-800 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {trust.map(t => (
              <div key={t.title} className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  {t.icon}
                </div>
                <div>
                  <div className="font-semibold text-white mb-1 text-sm">{t.title}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/methodologie"
            className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold text-indigo-300 hover:text-white transition-colors">
            Lire notre méthodologie <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Guides & ressources</h2>
            <p className="text-gray-400 text-sm mt-0.5">Tout ce qu&apos;il faut savoir pour gérer son activité en 2026</p>
          </div>
          <Link href="/blog" className="text-sm text-indigo-600 hover:underline font-medium">Voir tout →</Link>
        </div>
        <MobileCarousel label="Guides récents">
          {articlesIndex
            .filter(a => !a.tag.includes('Avis'))
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 6)
            .map(a => (
              <Link key={a.slug} href={`/blog/${a.slug}`}
                className="group border border-gray-100 rounded-2xl p-5 bg-white hover:border-indigo-200 hover:shadow-sm transition-all">
                <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full mb-3">{a.tag}</span>
                <h3 className="font-semibold text-gray-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors text-sm">{a.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">{new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="text-xs text-gray-400">{a.readTime}</span>
                </div>
              </Link>
            ))}
        </MobileCarousel>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 text-center shadow-lg">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Les nouveautés dans votre boîte mail</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Les nouveaux guides, les évolutions réglementaires et les changements de tarifs qui concernent les indépendants.
          </p>
          <Newsletter />
          <p className="text-xs text-gray-300 mt-4">Pas de spam · Désinscription en 1 clic</p>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl p-7 sm:p-10 text-center" style={{background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'}}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-3">Vous démarrez votre activité ?</h2>
            <p className="text-indigo-200 mb-8 text-sm leading-relaxed max-w-md mx-auto">
              Commencez par notre guide complet pour créer votre micro-entreprise, puis trouvez les outils adaptés à votre profil.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/blog/devenir-auto-entrepreneur"
                className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all shadow-md text-sm">
                Lire le guide →
              </Link>
              <Link href="/comparatifs"
                className="bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all text-sm border border-white/20">
                Comparer les outils
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
