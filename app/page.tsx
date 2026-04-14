import Link from 'next/link'

import { TOOLS } from '@/lib/tools'
import { ToolCard } from '@/components/ToolCard'
import { Quiz } from '@/components/Quiz'
import { Newsletter } from '@/components/Newsletter'
import { ToolLogo } from '@/components/ToolLogo'

const featured = [
  TOOLS.find(t => t.slug === 'abby')!,
  TOOLS.find(t => t.slug === 'qonto')!,
  TOOLS.find(t => t.slug === 'alan')!,
]

const categories = [
  {
    href: '/comparatifs/logiciels-facturation',
    label: 'Facturation & Comptabilité',
    count: '4 outils',
    desc: "Créez factures conformes, automatisez votre comptabilité, déclarez à l'URSSAF en quelques clics.",
    topSlugs: ['abby', 'freebe', 'indy', 'pennylane'],
    color: 'border-violet-200 bg-violet-50 hover:border-violet-300',
    iconColor: 'text-violet-600 bg-violet-100',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
  {
    href: '/comparatifs/banques-pro',
    label: 'Banque pro',
    count: '2 outils',
    desc: 'Ouvrez un compte professionnel en 10 minutes. Séparez finances perso et pro.',
    topSlugs: ['qonto', 'shine'],
    color: 'border-blue-200 bg-blue-50 hover:border-blue-300',
    iconColor: 'text-blue-600 bg-blue-100',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  },
  {
    href: '/comparatifs/mutuelles-freelance',
    label: 'Mutuelle',
    count: '3 outils',
    desc: 'Trouvez la meilleure complémentaire santé pour indépendants, sans surpayer.',
    topSlugs: ['alan', 'harmonie', 'malakoff'],
    color: 'border-rose-200 bg-rose-50 hover:border-rose-300',
    iconColor: 'text-rose-600 bg-rose-100',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
]

const trust = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Tests indépendants',
    desc: 'Chaque outil est testé en conditions réelles. Aucune rémunération pour améliorer un classement.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
    title: 'Mis à jour chaque mois',
    desc: 'Tarifs et fonctionnalités changent souvent. Nos comparatifs sont vérifiés et corrigés régulièrement.',
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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-100 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-white border border-indigo-100 shadow-sm px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse inline-block" />
            Mis à jour avril 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
            Trouvez les meilleurs outils<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"> pour votre activité indépendante</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-3">
            Comparatifs indépendants de logiciels de gestion, banques pro et mutuelles pour indépendants.
          </p>
          <p className="text-sm text-gray-400 mb-6">Gratuit · Sans inscription · Les meilleurs sélectionnés parmi +50 outils testés</p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <Link key={c.href} href={c.href}
              className={`group border-2 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${c.color}`}>
              <div className="flex items-start justify-between mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.iconColor}`}>{c.icon}</div>
                <span className="text-xs font-semibold text-gray-400 bg-white/60 px-2.5 py-1 rounded-full">{c.count}</span>
              </div>
              <div className="font-bold text-gray-900 text-xl mb-2 group-hover:text-indigo-600 transition-colors">{c.label}</div>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{c.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <div className="flex items-center gap-1.5">
                  {c.topSlugs.map(slug => {
                    const tool = TOOLS.find(t => t.slug === slug)
                    return <ToolLogo key={slug} slug={slug} name={tool?.name ?? slug} size="xs" />
                  })}
                </div>
                <span className="text-sm font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform inline-block">Voir →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUIZ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 py-16">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Quel outil est fait pour vous ?</h2>
            <p className="text-indigo-200 text-sm">Répondez à 3 questions, on vous recommande l'outil idéal.</p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Notre sélection 2026</h2>
              <p className="text-gray-400 text-sm">Un outil phare par thème — rapport qualité-prix et fiabilité.</p>
            </div>
            <Link href="/comparatifs" className="text-sm text-indigo-600 hover:underline font-medium shrink-0">
              Tous les comparatifs →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ToolCard tool={featured[0]} categoryLabel="Facturation" />
            <ToolCard tool={featured[1]} categoryLabel="Banque pro" />
            <ToolCard tool={featured[2]} categoryLabel="Mutuelle" />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-950 border-y border-gray-800 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* ARTICLES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-2xl font-bold text-gray-900">Guides & ressources</h2>
          <Link href="/blog" className="text-sm text-indigo-600 hover:underline font-medium">Voir tout</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { href: '/blog/devenir-auto-entrepreneur', tag: 'Guide', title: 'Devenir auto-entrepreneur en 2026 : le guide complet', date: '15 avril 2026' },
            { href: '/blog/plafond-micro-entreprise', tag: 'Fiscalité', title: 'Plafonds micro-entreprise 2026 : nouveaux seuils', date: '10 avril 2026' },
            { href: '/blog/meilleur-logiciel-facturation-freelance', tag: 'Comparatif', title: 'Quel logiciel de facturation choisir en 2026 ?', date: '5 avril 2026' },
            { href: '/blog/cotisations-sociales-freelance', tag: 'Fiscalité', title: 'Cotisations sociales 2026 : taux et calcul', date: '3 avril 2026' },
            { href: '/blog/mutuelle-auto-entrepreneur', tag: 'Mutuelle', title: 'Mutuelle auto-entrepreneur : comment bien choisir', date: '1 avril 2026' },
            { href: '/blog/compte-pro-auto-entrepreneur-obligatoire', tag: 'Banque', title: 'Compte pro auto-entrepreneur : obligatoire ?', date: '28 mars 2026' },
          ].map(a => (
            <Link key={a.href} href={a.href}
              className="group border border-gray-100 rounded-2xl p-5 bg-white hover:border-indigo-200 hover:shadow-sm transition-all">
              <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full mb-3">{a.tag}</span>
              <h3 className="font-semibold text-gray-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors text-sm">{a.title}</h3>
              <span className="text-xs text-gray-300">{a.date}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center shadow-lg">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">La sélection du mois, dans votre boîte mail</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Chaque mois, les meilleurs outils, les nouvelles offres et les guides pratiques pour gérer votre activité indépendante.
          </p>
          <Newsletter />
          <p className="text-xs text-gray-300 mt-4">Pas de spam. Désinscription en 1 clic.</p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl p-10 text-center" style={{background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'}}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-3">Vous démarrez votre activité ?</h2>
            <p className="text-indigo-200 mb-8 text-sm leading-relaxed max-w-md mx-auto">
              Commencez par notre guide complet pour créer votre micro-entreprise, puis trouvez les outils adaptés.
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
