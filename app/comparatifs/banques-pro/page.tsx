import type { Metadata } from 'next'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { FilteredToolList } from '@/components/FilteredToolList'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'
import { ToolLogo } from '@/components/ToolLogo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meilleure banque pro freelance 2026 — Comparatif',
  description: 'Comparatif des meilleures banques pro en ligne pour freelances et auto-entrepreneurs 2026. Qonto vs Shine : tarifs, fonctionnalités et avis complets.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/banques-pro' },
  openGraph: {
    title: 'Meilleure banque pro freelance 2026 — Comparatif',
    description: 'Comparatif des meilleures banques pro en ligne pour freelances et auto-entrepreneurs 2026. Qonto vs Shine : tarifs, fonctionnalités et avis complets.',
    url: 'https://www.outils-freelance.fr/comparatifs/banques-pro',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const tools = TOOLS.filter(t => t.category === 'banque').sort((a, b) => b.rating - a.rating)
const topTool = tools[0]

const faqItems = [
  {
    q: "Un auto-entrepreneur est-il obligé d'ouvrir un compte bancaire pro ?",
    a: "Depuis 2022, un auto-entrepreneur n'est plus obligé d'ouvrir un compte bancaire dédié tant que son chiffre d'affaires n'a pas depasse 10 000€ pendant 2 annees consécutivives. Au-dela, un compte dédié devient obligatoire. Meme en dessous, séparer ses finances simplifie la comptabilite et les declarations URSSAF."
  },
  {
    q: "Quelle est la difference entre Qonto et Shine ?",
    a: "Qonto est le leader du marche avec 500 000 clients et une offre plus complete (à partir de 11€/mois HT). Shine est moins cher (à partir de 7,90€/mois) avec une interface tres soignee et des fonctionnalités similaires. Pour un freelance debutant, Shine est souvent suffisant. Pour une activite structuree ou une equipe, Qonto offre plus de garanties."
  },
  {
    q: "Une banque pro en ligne est-elle aussi securisee qu'une banque traditionnelle ?",
    a: "Oui, Qonto et Shine sont réglementés par l'ACPR (Autorite de Controle Prudentiel et de Resolution) et les fonds sont proteges jusqu'a 100 000€ par le Fonds de Garantie des Depots et de Resolution (FGDR), comme toute banque française."
  },
  {
    q: "Peut-on deposer des especes sur un compte Qonto ou Shine ?",
    a: "Non, les néobanques professionnelles comme Qonto et Shine ne permettent pas le depot d'especes. Si vous encaissez regulierement des paiements en cash (artisans, commercants...), privilegiez une banque traditionnelle ou complementez avec un compte en ligne pour les virements."
  },
  {
    q: "Faut-il un KBIS pour ouvrir un compte bancaire pro ?",
    a: "Pour les auto-entrepreneurs, un extrait d'immatriculation ou le certificat de l'URSSAF suffit. Pour les societes (SASU, €L), le Kbis est nécessaire. Qonto et Shine permettent d'ouvrir un compte en ligne en moins de 10 minutes avec ces documents."
  },
]

export default function BanquesProPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs' },
        { name: 'Banques pro', url: 'https://www.outils-freelance.fr/comparatifs/banques-pro' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="qonto" toolName="Qonto" toolUrl="https://lb.affilae.com/r/?p=5ce4f2a2b6302009e29d84f3&af=2630&lp=https%3A%2F%2Fqonto.com%2Ffr%3Futm_medium%3Daffilaefr%26utm_source%3Daffiliate%26utm_campaign%3Doutils-freelance-fr" trialLabel="30 jours gratuits" bg="#FF5A50" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>
          {' > '}Banques pro
        </nav>

        <div className="badge-blue mb-3">Mis à jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleure banque pro pour freelance et auto-entrepreneur (2026)</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Un compte bancaire professionnel n&apos;est pas obligatoire en dessous de 10 000€ de CA sur 2 ans consécutivifs, mais il est fortement recommande pour séparer vos finances personnelles et professionnelles.
          Cela simplifie votre comptabilite, vos declarations URSSAF et votre gestion au quotidien.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          En 2026, les néobanques professionnelles comme Qonto et Shine dominent le marche pour les indépendants : ouverture en ligne en 10 minutes, IBAN francais, carte Visa ou Mastercard, et facturation intégrée gratuite.
        </p>

        {topTool && (
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <ToolLogo slug={topTool.slug} name={topTool.name} size="lg" />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Notre choix n&#176;1</span>
                <span className="font-bold text-gray-900 text-lg">{topTool.name}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{topTool.tagline}</p>
              <div className="flex items-center gap-3 flex-wrap text-xs">
                <span className="text-amber-500 font-semibold">&#9733; {topTool.rating}/5</span>
                <span className="text-gray-500">{topTool.price}</span>
                {topTool.freeTrial && <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; {topTool.freeTrial}</span>}
              </div>
            </div>
            <a href={topTool.affiliateUrl} target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
              Visiter le site &rarr;
            </a>
          </div>
        )}

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-8 text-sm text-amber-800">
          <strong>Bon à savoir :</strong> Qonto et Shine proposent tous deux une <strong>facturation intégrée gratuite</strong> — ideal pour regrouper banque et gestion en un seul outil.
        </div>

        <h2 className="text-2xl font-bold mb-4">Pourquoi ouvrir un compte bancaire pro ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { title: 'Separation des finances', desc: 'Evitez de melanger depenses perso et pro — indispensable pour une comptabilite propre et en cas de controle.' },
            { title: 'Image professionnelle', desc: 'Un IBAN au nom de votre entreprise inspire confiance a vos clients et facilite les encaissements.' },
            { title: 'Gain de temps', desc: 'Exports comptables automatiques, catégorisation des depenses, facturation intégrée — tout en un.' },
          ].map(c => (
            <div key={c.title} className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold text-gray-900 mb-1">{c.title}</div>
              <div className="text-sm text-gray-600">{c.desc}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Tableau comparatif rapide</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Banque</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Prix/mois</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Essai gratuit</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Dépôt espèces</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Qonto', price: '11€ HT', trial: '30 jours', cash: '✅ Oui', note: '4.6/5' },
                { name: 'Shine', price: '7,90€', trial: '30 jours', cash: '❌ Non', note: '4.4/5' },
              ].map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 font-semibold text-indigo-700">{row.name}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center">{row.price}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-green-700">{row.trial}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center">{row.cash}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center font-semibold text-amber-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-2">Comparatif détaillé</h2>
        <p className="text-sm text-gray-500 mb-6">Les meilleures banques pro pour indépendants en 2026.</p>
        <FilteredToolList tools={tools} />

        <h2 className="text-2xl font-bold mb-6 mt-12">Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
          {faqItems.map((f, i) => (
            <div key={i} className="card p-5">
              <div className="font-semibold text-gray-900 mb-2">{f.q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Comparatifs et avis associés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/comparatifs/qonto-vs-shine', title: 'Qonto vs Shine' },
              { href: '/blog/qonto-avis', title: 'Avis Qonto 2026' },
              { href: '/blog/shine-avis', title: 'Avis Shine 2026' },
              { href: '/blog/meilleure-banque-pro-artisan', title: 'Banque pro artisan' },
              { href: '/blog/compte-pro-auto-entrepreneur-obligatoire', title: 'Compte pro obligatoire ?' },
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
