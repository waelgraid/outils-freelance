import type { Metadata } from 'next'
import { TOOLS } from '@/lib/tools'
import { FilteredToolList } from '@/components/FilteredToolList'
import { FAQSchema } from '@/components/Schema'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'
import { ToolLogo } from '@/components/ToolLogo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de facturation et comptabilité 2026 — Comparatif',
  description: 'Comparatif des meilleurs logiciels de facturation et comptabilité pour freelances et auto-entrepreneurs en 2026. Indy, Freebe, Abby, Pennylane : avis et tarifs.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/logiciels-facturation' },
}

const tools = TOOLS.filter(t => t.category === 'facturation').sort((a, b) => b.rating - a.rating)
const topTool = tools.find(t => t.slug === 'abby') ?? tools[0]

const faq = [
  { q: 'Quel logiciel de facturation et comptabilité choisir en 2026 ?', a: 'Abby est le meilleur rapport qualité-prix pour les auto-entrepreneurs avec une offre complète à partir de 5,40€/mois. Freebe est idéal pour les freelances en services, Indy pour automatiser la comptabilité gratuitement, et Pennylane pour les profils avec fort volume.' },
  { q: 'Existe-t-il un logiciel gratuit pour auto-entrepreneur ?', a: 'Oui, Indy propose une version gratuite très complète : facturation illimitée, connexion bancaire et déclarations URSSAF. Abby propose également une version basique gratuite. Les offres payantes démarrent à 5€/mois.' },
  { q: 'La facturation électronique est-elle obligatoire en 2026 ?', a: "À partir de septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques. L'émission devient obligatoire pour les PME en 2027. Abby et Indy sont déjà certifiés Plateforme Agréée." },
  { q: 'Quelle est la différence entre facturation et comptabilité ?', a: 'Un logiciel de facturation gère la création de devis et factures, le suivi des paiements et les relances. La comptabilité va plus loin : connexion bancaire, livre des recettes, déclarations URSSAF, TVA. Indy, Abby et Pennylane combinent les deux.' },
  { q: 'Quel est le prix moyen pour un auto-entrepreneur ?', a: "Les tarifs vont de gratuit (Indy, version de base d'Abby) à 26€/mois pour Pennylane. Pour la majorité des auto-entrepreneurs, 5 à 10€/mois suffit." },
]

export default function LogicielsFacturationPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs' },
        { name: 'Logiciels de facturation', url: 'https://www.outils-freelance.fr/comparatifs/logiciels-facturation' },
      ]} />
      <FAQSchema faqs={faq} />
      <StickyBar toolSlug="abby" toolName="Abby" toolUrl="https://c3po.link/QsNZwhTBgx" trialLabel="30 jours gratuits" bg="#00C48C" />
      <div className="max-w-5xl mx-auto px-4 py-10">

        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link> › <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link> › Facturation & Comptabilité
        </nav>

        <div className="mb-6">
          <div className="badge-purple mb-3">Mis à jour avril 2026</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Meilleur logiciel de facturation et comptabilité (2026)</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Nous avons testé les meilleurs outils de gestion pour freelances et auto-entrepreneurs : facturation, comptabilité automatisée, déclarations URSSAF. Tous en un seul comparatif.
          </p>
        </div>

        {topTool && (
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <ToolLogo slug={topTool.slug} name={topTool.name} size="lg" />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Notre choix n°1</span>
                <span className="font-bold text-gray-900 text-lg">{topTool.name}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{topTool.tagline}</p>
              <div className="flex items-center gap-3 flex-wrap text-xs">
                <span className="text-amber-500 font-semibold">★ {topTool.rating}/5</span>
                <span className="text-gray-500">{topTool.price}</span>
                {topTool.freeTrial && <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">✓ {topTool.freeTrial}</span>}
              </div>
            </div>
            <a href={topTool.affiliateUrl} target="_blank" rel="nofollow sponsored"
              className="shrink-0 bg-indigo-600 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all">
              Visiter le site →
            </a>
          </div>
        )}

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-8 text-sm text-amber-800">
          <strong>Bon à savoir :</strong> Abby et Indy sont certifiés Plateforme Agréée pour la facturation électronique B2B, obligatoire dès 2027 pour les PME.
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-2">Comparatif détaillé</h2>
          <p className="text-sm text-gray-500 mb-6">Filtrez selon votre profil pour voir les outils les plus adaptés.</p>
          <FilteredToolList tools={tools} />
        </div>

        <div className="prose-content max-w-none mb-12">
          <h2>Comment choisir son logiciel en 2026 ?</h2>
          <h3>Facturation seule ou comptabilité intégrée ?</h3>
          <p>Si vous avez besoin uniquement de créer des devis et factures, <strong>Freebe</strong> ou <strong>Abby</strong> suffisent. Si vous voulez aussi automatiser votre comptabilité (connexion bancaire, déclarations URSSAF), <strong>Indy</strong> est gratuit et très complet. Pour une comptabilité avancée, <strong>Pennylane</strong> est la référence.</p>
          <h3>Le prix</h3>
          <p>De gratuit (Indy, Abby basique) à 26€/mois (Pennylane). Pour la majorité des auto-entrepreneurs, <strong>5 à 10€/mois</strong> suffit largement.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map(f => (
              <div key={f.q} className="card p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Comparatifs detailles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/comparatifs/indy-vs-abby', title: 'Indy vs Abby' },
              { href: '/comparatifs/pennylane-vs-indy', title: 'Pennylane vs Indy' },
              { href: '/comparatifs/freebe-vs-abby', title: 'Freebe vs Abby' },
              { href: '/comparatifs/freebe-vs-indy', title: 'Freebe vs Indy' },
              { href: '/comparatifs/logiciels-comptabilite', title: 'Logiciels comptabilite' },
              { href: '/comparatifs/banques-pro', title: 'Banques pro' },
              { href: '/comparatifs/mutuelles-freelance', title: 'Mutuelles freelance' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
                <span className="text-sm font-medium group-hover:text-indigo-600">{r.title} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
