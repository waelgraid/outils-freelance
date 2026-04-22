import type { Metadata } from 'next'
import Link from 'next/link'
import { CalculateurURSSAF } from '@/components/CalculateurURSSAF'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Calculateur de cotisations URSSAF auto-entrepreneur 2026 — Gratuit',
  description: 'Calculez vos cotisations URSSAF en temps réel selon votre chiffre d\'affaires et votre activité. Résultat instantané, gratuit, mis à jour 2026.',
  alternates: { canonical: 'https://www.outils-freelance.fr/calculateur-urssaf' },
  openGraph: {
    title: 'Calculateur URSSAF auto-entrepreneur 2026 — Gratuit',
    description: 'Estimez vos cotisations sociales en 30 secondes. Taux 2026 officiels, résultat immédiat.',
    url: 'https://www.outils-freelance.fr/calculateur-urssaf',
    type: 'website',
  },
}

const faqItems = [
  {
    q: 'Quels sont les taux de cotisations URSSAF en 2026 pour un auto-entrepreneur ?',
    a: 'En 2026, les taux de cotisations sociales pour les auto-entrepreneurs sont : 12,3% pour la vente de marchandises (BIC achat-revente), 21,2% pour les prestations de services commerciales et artisanales (BIC), 23,2% pour les professions libérales relevant de la CIPAV, et 25,6% pour les professions libérales non réglementées relevant du régime général (SSI). Ces taux incluent la contribution à la formation professionnelle (CFP).',
  },
  {
    q: 'Comment calculer ses cotisations URSSAF en auto-entreprise ?',
    a: 'Le calcul est simple : cotisations = chiffre d\'affaires encaissé × taux applicable à votre activité. Le taux varie selon la nature de votre activité (vente, services, libéral). Contrairement au régime réel, vous ne déduisez pas vos charges — le régime micro applique un abattement forfaitaire pour le calcul de l\'impôt sur le revenu.',
  },
  {
    q: 'L\'ACRE change-t-il le calcul des cotisations ?',
    a: 'Oui. Avec l\'ACRE (Aide à la Création et à la Reprise d\'Entreprise), les cotisations sont réduites de 50% pendant les 12 premiers mois d\'activité. Le calculateur prend en compte l\'ACRE si vous l\'activez.',
  },
  {
    q: 'Le versement libératoire est-il inclus dans ces cotisations ?',
    a: 'Non. Le versement libératoire de l\'impôt sur le revenu est une option séparée des cotisations sociales URSSAF. Si vous y avez opté, vous payez en plus 1% (vente), 1,7% (services BIC) ou 2,2% (libéral) de votre CA. Le calculateur vous permet d\'inclure cette option.',
  },
]

export default function CalculateurPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Calculateur URSSAF', url: 'https://www.outils-freelance.fr/calculateur-urssaf' },
      ]} />
      <FAQSchema faqs={faqItems} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' › '}Calculateur URSSAF
        </nav>

        <div className="badge-purple mb-4">Taux 2026 officiels</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Calculateur de cotisations URSSAF<br />auto-entrepreneur 2026
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Estimez vos cotisations sociales en temps réel selon votre chiffre d&apos;affaires et votre type d&apos;activité. Gratuit, sans inscription.
        </p>

        {/* Calculateur interactif */}
        <CalculateurURSSAF />

        {/* Explications */}
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Les taux de cotisations 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Type d&apos;activité</th>
                    <th className="text-center px-4 py-3 border border-gray-200 font-semibold text-gray-700">Taux normal</th>
                    <th className="text-center px-4 py-3 border border-gray-200 font-semibold text-gray-700">Avec ACRE</th>
                    <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Exemples</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Vente de marchandises (BIC)', taux: '12,3%', acre: '6,15%', ex: 'E-commerce, commerce, restauration' },
                    { type: 'Artisan / Services commerciaux (BIC)', taux: '21,2%', acre: '10,6%', ex: 'Plombier, électricien, coiffeur, agent immobilier' },
                    { type: 'Libéral non réglementé — BNC (SSI)', taux: '25,6%', acre: '12,8%', ex: 'Développeur, consultant, graphiste, coach, rédacteur' },
                    { type: 'Libéral réglementé — BNC (CIPAV)', taux: '23,2%', acre: '11,6%', ex: 'Architecte, psychologue, ostéopathe, moniteur de ski' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 border border-gray-200 font-medium text-gray-800">{r.type}</td>
                      <td className="px-4 py-3 border border-gray-200 text-center font-semibold text-indigo-600">{r.taux}</td>
                      <td className="px-4 py-3 border border-gray-200 text-center text-emerald-600">{r.acre}</td>
                      <td className="px-4 py-3 border border-gray-200 text-gray-500 text-xs">{r.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Sources : urssaf.fr — taux applicables au 1er janvier 2026</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Comment déclarer et payer ses cotisations ?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              En auto-entreprise, vous déclarez votre chiffre d&apos;affaires chaque mois ou chaque trimestre sur <strong>autoentrepreneur.urssaf.fr</strong>. Les cotisations sont calculées automatiquement sur la base du CA déclaré et prélevées immédiatement ou sous quelques jours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Déclarez votre CA', desc: 'Mensuel ou trimestriel, même si le CA est nul' },
                { step: '2', title: 'Paiement automatique', desc: 'L\'URSSAF calcule et prélève vos cotisations' },
                { step: '3', title: 'Provisionnez', desc: 'Mettez de côté le % correspondant dès chaque encaissement' },
              ].map(s => (
                <div key={s.step} className="bg-gray-50 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mb-2">{s.step}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{s.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqItems.map((f, i) => (
                <div key={i} className="card p-5">
                  <div className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-50 rounded-2xl p-6">
            <h2 className="text-base font-bold text-gray-900 mb-2">Gérez vos cotisations automatiquement</h2>
            <p className="text-sm text-gray-600 mb-4">
              Abby et Indy calculent vos cotisations en temps réel sur chaque facture encaissée et vous alertent avant chaque échéance URSSAF. Plus besoin de calculer à la main.
            </p>
            <div className="flex gap-3">
              <Link href="/blog/abby-avis"
                className="text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Voir Abby →
              </Link>
              <Link href="/blog/indy-avis"
                className="text-sm font-semibold px-4 py-2 border border-indigo-200 text-indigo-600 rounded-lg hover:bg-white transition-colors">
                Voir Indy →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
