import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

const faqItems = [
  {
    q: 'Alan ou Wemind : laquelle rembourse mieux les soins dentaires ?',
    a: "Wemind offre de meilleures garanties dentaires qu'Alan, notamment pour les prothèses et les soins complexes. Alan se distingue surtout par la rapidité de remboursement (24h) et son expérience digitale. Si les soins dentaires sont votre priorité, Wemind est souvent plus avantageux.",
  },
  {
    q: 'Alan ou Wemind : laquelle est la moins chère pour un freelance ?',
    a: "Wemind est clairement moins chère : à partir de 22€/mois pour les micro-entrepreneurs, contre 39€/mois pour Alan. Sur un an, la différence peut atteindre 200€. Cependant, Alan inclut la téléconsultation et des remboursements en 24h qui peuvent compenser pour certains profils.",
  },
  {
    q: 'Peut-on déduire ses cotisations Alan ou Wemind de ses revenus en micro-entreprise ?',
    a: "Non. En micro-entreprise, le régime fiscal forfaitaire ne permet pas de déduire les charges réelles, y compris les cotisations de mutuelle. La déduction via la loi Madelin est réservée aux TNS en régime réel (SASU, €L). Si vous êtes en SASU, Alan et Wemind proposent tous les deux des contrats compatibles.",
  },
  {
    q: 'Quelle est la période de carence avec Alan et Wemind ?',
    a: "La plupart des garanties prennent effet immédiatement avec les deux. Certaines garanties spécifiques (optique, dentaire) peuvent avoir une période de carence de 3 à 6 mois selon la formule choisie. Vérifiez les conditions générales avant de souscrire.",
  },
]

export const metadata: Metadata = {
  title: 'Alan vs Wemind 2026 : quelle mutuelle choisir ?',
  description: 'Comparatif Alan vs Wemind 2026 : tarifs, remboursements, garanties. Notre verdict pour les freelances et auto-entrepreneurs.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/alan-vs-harmonie' },
  openGraph: {
    title: 'Alan vs Wemind 2026 : quelle mutuelle choisir ?',
    description: 'Comparatif Alan vs Wemind 2026 : tarifs, remboursements, garanties. Notre verdict pour les freelances et auto-entrepreneurs.',
    url: 'https://www.outils-freelance.fr/comparatifs/alan-vs-harmonie',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

export default function AlanVsWemindPage() {
  const alan = TOOLS.find(t => t.slug === 'alan')!
  const wemind = TOOLS.find(t => t.slug === 'wemind')!

  const criteria = [
    { label: 'Prix de départ',         a: '39€/mois',               b: '22€/mois',           winner: 'wemind' },
    { label: 'Souscription en ligne',  a: '✅ 100% digital',         b: '✅ 100% digital',    winner: 'egal' },
    { label: 'Remboursements',         a: '✅ 24h',                  b: '⚡ Rapides',         winner: 'alan' },
    { label: 'Téléconsultation',       a: '✅ Incluse',              b: '✅ Incluse',          winner: 'egal' },
    { label: 'Couverture dentaire',    a: 'Bonne',                   b: 'Très bonne',         winner: 'wemind' },
    { label: 'Couverture optique',     a: 'Bonne',                   b: 'Très bonne',         winner: 'wemind' },
    { label: 'App mobile',             a: '✅ Excellente',           b: '✅ Bonne',           winner: 'alan' },
    { label: 'Communauté freelances',  a: '❌ Non',                  b: '✅ Oui',             winner: 'wemind' },
    { label: 'Résiliation',            a: 'Préavis 2 mois',          b: 'Sans engagement',    winner: 'wemind' },
  ]

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
        { name: 'Alan vs Wemind', url: 'https://www.outils-freelance.fr/comparatifs/alan-vs-harmonie' },
      ]} />
      <FAQSchema faqs={faqItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyBar toolSlug="alan" toolName="Alan" toolUrl="https://alan.com" trialLabel="30 jours satisfait ou remboursé" bg="#00BCD4" />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>{' › '}Alan vs Wemind
        </nav>

        <div className="badge-purple mb-3">Mis à jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Alan vs Wemind : quelle mutuelle choisir en 2026 ?</h1>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Alan et Wemind sont nos deux recommandations de mutuelles pour les freelances et auto-entrepreneurs.
          Deux approches différentes : Alan mise sur le 100% digital et la rapidité des remboursements,
          Wemind sur le prix le plus bas du marché et la communauté d&apos;indépendants.
        </p>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {[alan, wemind].map((tool) => (
            <div key={tool.slug} className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{tool.name}</div>
                  <div className="text-sm text-gray-500">{tool.price}</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">{tool.tagline}</p>
              <ul className="space-y-1.5 mb-5">
                {tool.pros.slice(0, 3).map(p => (
                  <li key={p} className="text-xs text-gray-500 flex items-start gap-1.5">
                    <span className="text-emerald-500 shrink-0">✓</span>{p}
                  </li>
                ))}
              </ul>
              <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored"
                className="btn-primary block text-center text-sm">
                Voir {tool.name} →
              </a>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Comparatif détaillé</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 border-b border-gray-200 font-semibold text-gray-700 w-1/3">Critère</th>
                  <th className="px-4 py-3 border-b border-gray-200 text-center">
                    <div className="flex items-center gap-2 justify-center"><ToolLogo slug="alan" name="Alan" size="xs" /><span>Alan</span></div>
                  </th>
                  <th className="px-4 py-3 border-b border-gray-200 text-center">
                    <div className="flex items-center gap-2 justify-center"><ToolLogo slug="wemind" name="Wemind" size="xs" /><span>Wemind</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c, i) => (
                  <tr key={c.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-700">{c.label}</td>
                    <td className={`px-4 py-3 border-b border-gray-100 text-center text-gray-600 ${c.winner === 'alan' ? 'font-semibold text-emerald-700' : ''}`}>
                      {c.a}
                      {c.winner === 'alan' && <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">✓</span>}
                    </td>
                    <td className={`px-4 py-3 border-b border-gray-100 text-center text-gray-600 ${c.winner === 'wemind' ? 'font-semibold text-emerald-700' : ''}`}>
                      {c.b}
                      {c.winner === 'wemind' && <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">✓</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verdict */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="alan" name="Alan" size="sm" /><span className="font-bold">Choisissez Alan si...</span></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Vous voulez les remboursements les plus rapides (24h)</li>
              <li>✓ Vous utilisez régulièrement la téléconsultation</li>
              <li>✓ Vous valorisez une application mobile de qualité</li>
              <li>✓ Vous préférez tout gérer sans paperasse</li>
            </ul>
          </div>
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="wemind" name="Wemind" size="sm" /><span className="font-bold">Choisissez Wemind si...</span></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Votre budget est serré (dès 22€/mois)</li>
              <li>✓ Vous voulez de meilleures garanties dentaires</li>
              <li>✓ Vous cherchez une mutuelle sans engagement</li>
              <li>✓ Vous voulez rejoindre une communauté de freelances</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-10">
          <p className="text-sm text-gray-600 mb-4">
            Priorité à l&apos;expérience digitale et aux remboursements rapides : <strong>Alan</strong>.
            Priorité au budget et aux garanties dentaires : <strong>Wemind</strong>.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href={alan.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary inline-flex">Voir Alan →</a>
            <a href={wemind.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-secondary inline-flex">Voir Wemind →</a>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4 mb-10">
          {faqItems.map((f, i) => (
            <div key={i} className="card p-5">
              <div className="font-semibold text-gray-900 mb-2">{f.q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/comparatifs/mutuelles-freelance', title: 'Comparatif mutuelles freelance' },
              { href: '/blog/alan-mutuelle-avis', title: 'Avis Alan 2026' },
              { href: '/comparatifs/banques-pro', title: 'Meilleures banques pro' },
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
