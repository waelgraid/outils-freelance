import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mentions légales & Politique d\'affiliation' }

export default function MentionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Éditeur du site</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Outils-Freelance.fr est un site comparatif indépendant édité par un entrepreneur individuel. Pour tout contact : contact@outils-freelance.fr
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Hébergement</h2>
        <p className="text-sm text-gray-700">Vercel Inc. — 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-indigo-700">Politique d'affiliation</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 leading-relaxed">
          <p className="font-semibold mb-2">🔗 Transparence sur les liens affiliés</p>
          <p>Outils-Freelance.fr participe à des programmes d'affiliation. Certains liens présents sur ce site sont des liens affiliés, identifiés par la mention <em>rel="sponsored"</em> ou signalés explicitement.</p>
          <p className="mt-3">Lorsque vous cliquez sur un lien affilié et souscrivez à un service, nous percevons une commission de la part de l'éditeur du logiciel ou service concerné. Cette commission est versée par l'éditeur et <strong>n'engendre aucun surcoût pour vous</strong>.</p>
          <p className="mt-3">La présence de liens affiliés n'influence pas nos avis, nos classements ou nos recommandations. Nous sélectionnons et classons les outils en fonction de leur qualité réelle, de leur rapport qualité-prix et des retours utilisateurs.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Données personnelles (RGPD)</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Outils-Freelance.fr collecte des données de navigation via des outils d'analyse anonymisés (Vercel Analytics, sans cookies de tracking). Aucune donnée personnelle n'est vendue à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant contact@outils-freelance.fr.
        </p>
      </section>
    </div>
  )
}
