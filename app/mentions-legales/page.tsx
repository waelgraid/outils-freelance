import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Outils-Freelance.fr',
  description: 'Mentions légales, politique de confidentialité et gestion des données personnelles du site Outils-Freelance.fr.',
  alternates: { canonical: 'https://www.outils-freelance.fr/mentions-legales' },
}

export default function MentionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Mentions légales</h1>
      <p className="text-sm text-gray-400 mb-10">Dernière mise à jour : avril 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">1. Éditeur du site</h2>
        <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed space-y-1">
          <p><strong>Nom du site :</strong> Outils-Freelance.fr</p>
          <p><strong>URL :</strong> https://www.outils-freelance.fr</p>
          <p><strong>Éditeur :</strong> Entrepreneur individuel</p>
          <p><strong>Région :</strong> Auvergne-Rhône-Alpes, France</p>
          <p><strong>Contact :</strong> contact@outils-freelance.fr</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">2. Hébergement</h2>
        <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
          <p><strong>Hébergeur :</strong> Vercel Inc.</p>
          <p>340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">3. Affiliation et transparence éditoriale</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 leading-relaxed space-y-3">
          <p className="font-semibold">🔗 Liens affiliés</p>
          <p>Outils-Freelance.fr participe à des programmes d&apos;affiliation. Les liens affiliés sont identifiés par l&apos;attribut <code>rel=&quot;sponsored&quot;</code>. Lorsque vous souscrivez via un lien affilié, nous percevons une commission — sans surcoût pour vous. Nos notes et classements restent indépendants de ces partenariats.</p>
          <p>Détail complet : <a href="/politique-affiliation" className="underline font-semibold">politique d&apos;affiliation →</a></p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">4. Propriété intellectuelle</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Le contenu éditorial du site (textes, comparatifs, guides) est protégé par le droit d&apos;auteur. Toute reproduction sans autorisation écrite préalable est interdite. Les logos et marques des outils présentés sont la propriété de leurs éditeurs respectifs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">5. Données personnelles et RGPD</h2>

        <h3 className="text-base font-semibold mb-2 mt-4">Données collectées</h3>
        <ul className="text-sm text-gray-700 space-y-1 mb-4 ml-4 list-disc">
          <li><strong>Adresses email</strong> : uniquement sur inscription volontaire à la newsletter</li>
          <li><strong>Données de navigation anonymisées</strong> : via Vercel Analytics, sans cookies de tracking</li>
        </ul>

        <h3 className="text-base font-semibold mb-2">Sous-traitants</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border border-gray-200 font-semibold">Service</th>
                <th className="text-left px-3 py-2 border border-gray-200 font-semibold">Usage</th>
                <th className="text-left px-3 py-2 border border-gray-200 font-semibold">Données</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border border-gray-200">Brevo</td>
                <td className="px-3 py-2 border border-gray-200">Newsletter</td>
                <td className="px-3 py-2 border border-gray-200">Email</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 border border-gray-200">Vercel Analytics</td>
                <td className="px-3 py-2 border border-gray-200">Statistiques</td>
                <td className="px-3 py-2 border border-gray-200">Anonymisées, sans cookies</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold mb-2">Vos droits (RGPD)</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-2">
          Accès, rectification, effacement, opposition, portabilité : contactez-nous à <a href="mailto:contact@outils-freelance.fr" className="text-indigo-600 hover:underline">contact@outils-freelance.fr</a>. Réponse sous 30 jours. Recours possible auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener" className="text-indigo-600 hover:underline">CNIL</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">6. Cookies</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Ce site n&apos;utilise <strong>aucun cookie de tracking ou publicitaire</strong>. Vercel Analytics fonctionne sans cookies, en conformité avec le RGPD. Des cookies techniques strictement nécessaires au fonctionnement peuvent être déposés.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">7. Limitation de responsabilité</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Les informations publiées ont un caractère informatif et sont mises à jour régulièrement. Elles peuvent ne pas refléter en temps réel les évolutions tarifaires des outils. Vérifiez toujours les informations directement auprès des éditeurs avant toute décision d&apos;achat. Outils-Freelance.fr ne peut être tenu responsable des décisions prises sur la base du contenu de ce site.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">8. Droit applicable</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Ce site est soumis au droit français. En cas de litige, les tribunaux français sont compétents.
        </p>
      </section>
    </div>
  )
}
