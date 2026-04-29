import type { Metadata } from 'next'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meilleure mutuelle freelance auto-entrepreneur 2026 — Comparatif',
  description: 'Comparatif des meilleures mutuelles pour freelances en 2026. Alan, Wemind, April Santé : remboursements, tarifs et avis complets pour indépendants.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/mutuelles-freelance' },
  openGraph: {
    title: 'Meilleure mutuelle freelance auto-entrepreneur 2026 — Comparatif',
    description: 'Comparatif des meilleures mutuelles pour freelances en 2026. Alan, Wemind, April Santé : remboursements, tarifs et avis complets pour indépendants.',
    url: 'https://www.outils-freelance.fr/comparatifs/mutuelles-freelance',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const tools = TOOLS
  .filter(t => ['alan', 'wemind', 'april'].includes(t.slug))
  .sort((a, b) => ['alan', 'wemind', 'april'].indexOf(a.slug) - ['alan', 'wemind', 'april'].indexOf(b.slug))

const faqItems = [
  {
    q: 'Un auto-entrepreneur est-il obligé de prendre une mutuelle ?',
    a: "Non, la mutuelle n'est pas obligatoire pour les auto-entrepreneurs. Contrairement aux salariés dont l'employeur finance au moins 50% de la complémentaire santé, vous êtes libre de choisir ou non. Cependant, sans complémentaire, vous supportez l'intégralité des dépassements d'honoraires, frais optiques et dentaires. Une hospitalisation non couverte peut vite dépasser 1 000€.",
  },
  {
    q: 'Quelle est la différence entre Alan, Wemind et April ?',
    a: "Alan est la néo-mutuelle digitale : remboursements en 24h, tout depuis l'application, téléconsultation incluse — idéal pour les freelances qui veulent une expérience 100% en ligne. Wemind est spécialisée freelances avec le tarif le plus compétitif du marché (dès 22€/mois) et une communauté d'indépendants. April Santé est le spécialiste TNS avec les meilleures garanties dentaire et hospitalisation — recommandé si vous êtes en SASU/€L et souhaitez bénéficier de la loi Madelin.",
  },
  {
    q: 'Les cotisations de mutuelle sont-elles déductibles pour un freelance ?',
    a: "En micro-entreprise, la déduction n'est pas possible — le régime micro applique un abattement forfaitaire qui remplace toute déduction de charges. La déduction via la loi Madelin est uniquement disponible pour les TNS en régime réel (EI au réel, €L, SASU). Dans ce cas, April Santé propose des contrats Madelin adaptés. Renseignez-vous auprès d'un expert-comptable.",
  },
  {
    q: 'Alan rembourse-t-il bien les soins dentaires et optiques ?',
    a: "Alan propose des garanties variables selon le forfait. Ses remboursements dentaire et optique sont corrects mais pas les plus élevés — Alan se distingue surtout par sa rapidité (24h) et son expérience digitale. Pour les meilleures garanties dentaires, April Santé (jusqu'à 500% de la base Sécu) ou Wemind sont plus adaptés.",
  },
  {
    q: 'À quel moment souscrire une mutuelle quand on se lance en freelance ?',
    a: "Dès que vous créez votre auto-entreprise et que vous n'êtes plus couvert par la mutuelle d'un employeur. Si vous quittez un emploi salarié, vous bénéficiez de la portabilité pendant 12 mois maximum. Au-delà, souscrivez une nouvelle complémentaire. Alan et Wemind permettent une souscription en ligne en quelques minutes.",
  },
]

export default function MutuellesPage() {
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
        { name: 'Mutuelles freelance', url: 'https://www.outils-freelance.fr/comparatifs/mutuelles-freelance' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyBar toolSlug="alan" toolName="Alan" toolUrl="https://alan.com" trialLabel="30 jours satisfait ou remboursé" bg="#00BCD4" />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>{' > '}Mutuelles freelance
        </nav>

        <div className="badge-purple mb-3">Mis à jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleure mutuelle pour freelance et auto-entrepreneur (2026)</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          En tant qu&apos;indépendant, vous n&apos;êtes pas couvert par la mutuelle d&apos;un employeur.
          Choisir une bonne complémentaire santé est essentiel pour être bien protégé sans exploser votre budget.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Notre sélection 2026 des 3 meilleures mutuelles pour freelances et auto-entrepreneurs, testées et comparées
          sur les remboursements réels, les tarifs et la qualité du service.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center bg-indigo-50 border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600 mb-1">3</div>
            <div className="text-xs text-indigo-700">mutuelles comparées</div>
          </div>
          <div className="rounded-2xl p-4 text-center bg-indigo-50 border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600 mb-1">22€</div>
            <div className="text-xs text-indigo-700">à partir de (Wemind)</div>
          </div>
          <div className="rounded-2xl p-4 text-center bg-indigo-50 border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600 mb-1">24h</div>
            <div className="text-xs text-indigo-700">remboursements Alan</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif 2026</h2>
        <div className="space-y-4 mb-12">
          {tools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
        </div>

        {/* Tableau comparatif */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-5">Tableau comparatif détaillé</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Critère</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold text-cyan-700">Alan</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold text-purple-700">Wemind</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold text-rose-700">April Santé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { crit: 'Prix de départ', alan: '39€/mois', wemind: '22€/mois', april: 'Sur devis' },
                  { crit: 'Souscription en ligne', alan: '✅ 100%', wemind: '✅ 100%', april: '⚠️ Partielle' },
                  { crit: 'Remboursements', alan: '✅ 24h', wemind: '✅ Rapides', april: '⚠️ Standard' },
                  { crit: 'Téléconsultation', alan: '✅ Incluse', wemind: '✅ Incluse', april: '⚠️ Option' },
                  { crit: 'Garanties dentaire', alan: '⚠️ Correct', wemind: '✅ Bon', april: '✅ Excellentes (500%)' },
                  { crit: 'Loi Madelin (SASU/€L)', alan: '❌ Non', wemind: '❌ Non', april: '✅ Oui' },
                  { crit: 'Prévoyance incluse', alan: '⚠️ Option', wemind: '✅ Disponible', april: '✅ Disponible' },
                  { crit: 'App mobile', alan: '✅ Excellente', wemind: '✅ Bonne', april: '⚠️ Basique' },
                  { crit: 'Spécialisée freelances', alan: '✅ Oui', wemind: '✅ Oui', april: '✅ TNS/libéral' },
                ].map((r, i) => (
                  <tr key={r.crit} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{r.crit}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center text-gray-600 text-xs">{r.alan}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center text-gray-600 text-xs">{r.wemind}</td>
                    <td className="px-4 py-3 border border-gray-200 text-center text-gray-600 text-xs">{r.april}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pour qui */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Quelle mutuelle selon votre profil ?</h2>
          <div className="space-y-3">
            {[
              { profil: 'Je veux les remboursements les plus rapides et une app mobile top', choix: 'Alan', raison: 'Remboursements en 24h, téléconsultation incluse, tout 100% en ligne' },
              { profil: 'Je démarre et je cherche le meilleur prix', choix: 'Wemind', raison: 'Dès 22€/mois, spécialisée micro-entrepreneurs, communauté freelances' },
              { profil: 'Je suis en SASU/€L ou professions libérale réglementée', choix: 'April Santé', raison: 'Contrats Madelin, meilleures garanties dentaire/hospitalisation du marché' },
              { profil: 'Je veux aussi une RC Pro pour mon activité', choix: 'Wemind ou Orus', raison: 'Wemind propose RC Pro + mutuelle · Orus se spécialise en assurance pro freelance' },
            ].map(r => (
              <div key={r.profil} className="flex items-start gap-3 py-2.5 border-b border-gray-200 last:border-0">
                <div className="flex-1 text-sm text-gray-600">{r.profil}</div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-bold text-indigo-600">{r.choix}</div>
                  <div className="text-xs text-gray-400 max-w-[200px] text-right leading-snug">{r.raison}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
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
              { href: '/blog/alan-mutuelle-avis', title: 'Avis Alan 2026' },
              { href: '/comparatifs/banques-pro', title: 'Meilleures banques pro' },
              { href: '/comparatifs/logiciels-facturation', title: 'Logiciels de facturation' },
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
