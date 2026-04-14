import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique d\'affiliation — Outils-Freelance.fr',
  description: 'Transparence sur notre politique d\'affiliation : comment nous gagnons des commissions et comment cela influence nos recommandations.',
}

export default function PolitiqueAffiliationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-indigo-600">Accueil</Link>
        {' > '}Politique d&apos;affiliation
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique d&apos;affiliation</h1>

      <div className="prose-content space-y-8">

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 text-sm text-indigo-800">
          <strong>En résumé :</strong> certains liens sur Outils-Freelance.fr sont des liens affiliés. Si vous souscrivez via nos liens, nous percevons une commission — sans aucun surcoût pour vous. Nos recommandations restent indépendantes.
        </div>

        <section>
          <h2>Qu&apos;est-ce qu&apos;un lien affilié ?</h2>
          <p>Un lien affilié est un lien de partenariat entre Outils-Freelance.fr et certains éditeurs de logiciels ou services. Lorsque vous cliquez sur un tel lien et souscrivez à un abonnement ou ouvrez un compte, nous percevons une commission versée par l&apos;éditeur concerné.</p>
          <p>Cette commission ne génère <strong>aucun surcoût pour vous</strong> : le prix que vous payez est strictement identique à celui affiché sur le site officiel de l&apos;outil.</p>
        </section>

        <section>
          <h2>Nos partenaires affiliés actifs</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Outil</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Offre exclusive</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Commission</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tool: 'Abby', offer: '30 jours d\'essai gratuit', commission: '30 jours offerts à nos lecteurs' },
                  { tool: 'Indy', offer: '1er mois offert', commission: 'Variable selon le plan souscrit' },
                  { tool: 'Freebe', offer: '2 mois offerts', commission: '50% du CA HT généré sur la 1ère année' },
                  { tool: 'Qonto', offer: '2 mois offerts', commission: 'Forfait par client approuvé' },
                  { tool: 'Shine', offer: '2 mois offerts', commission: 'Forfait par client approuvé' },
                  { tool: 'Pennylane', offer: '15 jours gratuits', commission: 'Forfait par client activé' },
                  { tool: 'Alan', offer: '30 jours satisfait ou remboursé', commission: 'Variable' },
                  { tool: 'Harmonie Mutuelle', offer: 'Devis personnalisé', commission: 'Variable' },
                ].map((r, i) => (
                  <tr key={r.tool} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900">{r.tool}</td>
                    <td className="px-4 py-3 text-gray-600">{r.offer}</td>
                    <td className="px-4 py-3 text-gray-600">{r.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Comment cela influence-t-il nos recommandations ?</h2>
          <p>Nos recommandations sont basées sur des critères objectifs : fonctionnalités, tarifs, qualité du support, retours utilisateurs et adéquation avec les profils concernés. Le montant des commissions ne détermine pas le classement des outils.</p>
          <p>Nous indiquons systématiquement sur nos pages la mention <strong>"Lien affilié"</strong> ou <strong>"rel=nofollow sponsored"</strong> sur les liens concernés, conformément aux bonnes pratiques et aux recommandations de Google.</p>
          <p>Si un outil que nous recommandons ne propose pas de programme d&apos;affiliation, nous le recommandons quand même s&apos;il est le meilleur pour nos lecteurs.</p>
        </section>

        <section>
          <h2>Vos droits</h2>
          <p>Vous pouvez à tout moment accéder aux sites officiels des outils sans passer par nos liens affiliés. Aucune donnée personnelle vous concernant n&apos;est transmise aux éditeurs via nos liens affiliés, au-delà de ce que votre navigation normale transmettrait.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Pour toute question sur notre politique d&apos;affiliation, contactez-nous via la page <Link href="/mentions-legales" className="text-indigo-600 hover:underline">Mentions légales</Link>.</p>
        </section>

      </div>
    </div>
  )
}
