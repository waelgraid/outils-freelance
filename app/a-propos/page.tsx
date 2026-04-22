import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'À propos — Outils-Freelance.fr',
  description: 'Qui sommes-nous ? Découvrez notre méthode d\'évaluation des outils pour freelances, notre politique d\'indépendance éditoriale et comment nous finançons ce site.',
  alternates: { canonical: 'https://www.outils-freelance.fr/a-propos' },
}

const outils = [
  { name: 'Abby', tested: 'Compte actif, testé sur 3 mois', rating: '4.8/5' },
  { name: 'Indy', tested: 'Compte actif, version gratuite et premium testées', rating: '4.7/5' },
  { name: 'Freebe', tested: 'Compte actif, testé sur 2 mois', rating: '4.6/5' },
  { name: 'Qonto', tested: 'Compte ouvert et utilisé activement', rating: '4.6/5' },
  { name: 'Shine', tested: 'Compte ouvert, testé sur 1 mois', rating: '4.4/5' },
  { name: 'Pennylane', tested: 'Version de démonstration + retours utilisateurs', rating: '4.5/5' },
  { name: 'Alan', tested: 'Devis réels obtenus, retours utilisateurs collectés', rating: '4.6/5' },
]

export default function AProposPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'À propos', url: 'https://www.outils-freelance.fr/a-propos' },
      ]} />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="mb-12">
          <div className="badge-purple mb-4">Notre histoire</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Outils-Freelance.fr — des comparatifs honnêtes, sans bullshit
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ce site est né d'une frustration simple : trouver un logiciel de facturation ou une banque pro en tant que freelance, c'est un parcours du combattant entre publicités déguisées, articles sponsorisés et comparatifs orientés. On a voulu faire différemment.
          </p>
        </div>

        {/* Qui sommes-nous */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
          <div className="card p-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              En 2023, j'ai passé trois semaines à comparer des logiciels de facturation avant de lancer mon activité de consultant IT. Trois semaines à lire des articles sponsorisés, des avis invérifiables et des comparatifs orientés. J'ai fini par ouvrir cinq comptes moi-même, tester chaque outil en conditions réelles, et choisir Abby.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Outils-Freelance.fr est né de cette frustration. Chaque comparatif publié ici repose sur des tests réels — comptes ouverts, fonctionnalités utilisées, support contacté, tarifs vérifiés. Je mets à jour mes évaluations chaque trimestre. Si un outil déçoit, je le dis.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Mon seul objectif : vous faire gagner les trois semaines que j'ai perdues.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-indigo-50 rounded-xl p-4">
                <div className="text-sm font-semibold text-gray-900 mb-1">📍 Lyon, Rhône-Alpes</div>
                <div className="text-xs text-gray-500">Consultant IT indépendant — Infrastructure, Azure, M365</div>
              </div>
              <div className="flex-1 bg-indigo-50 rounded-xl p-4">
                <div className="text-sm font-semibold text-gray-900 mb-1">✉️ Une question ?</div>
                <a href="mailto:contact@outils-freelance.fr" className="text-xs text-indigo-600 hover:underline">contact@outils-freelance.fr</a>
                <div className="text-xs text-gray-400 mt-0.5">Réponse sous 48h</div>
              </div>
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Notre méthode d'évaluation</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Chaque outil est évalué selon 5 critères pondérés, testés en conditions réelles d'utilisation par un indépendant en activité :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Facilité de prise en main', desc: 'Temps nécessaire pour émettre une première facture conforme' },
              { label: 'Complétude des fonctionnalités', desc: 'Facturation, comptabilité, URSSAF, mobile, intégrations' },
              { label: 'Rapport qualité-prix', desc: 'Fonctionnalités incluses vs coût mensuel réel' },
              { label: 'Fiabilité et conformité légale', desc: 'Mentions obligatoires, facturation électronique, loi anti-fraude' },
              { label: 'Service client', desc: 'Réactivité testée par messages réels en heure de bureau et hors horaires' },
            ].map(c => (
              <div key={c.label} className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold text-gray-900 text-sm mb-1">✓ {c.label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">Outils testés</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2.5 text-gray-700 font-semibold border border-gray-200">Outil</th>
                  <th className="text-left px-4 py-2.5 text-gray-700 font-semibold border border-gray-200">Méthode de test</th>
                  <th className="text-center px-4 py-2.5 text-gray-700 font-semibold border border-gray-200">Note</th>
                </tr>
              </thead>
              <tbody>
                {outils.map((o, i) => (
                  <tr key={o.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 border border-gray-200 font-medium text-gray-900">{o.name}</td>
                    <td className="px-4 py-2.5 border border-gray-200 text-gray-600">{o.tested}</td>
                    <td className="px-4 py-2.5 border border-gray-200 text-center text-amber-600 font-semibold">★ {o.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Dernière mise à jour des évaluations : avril 2026</p>
        </section>

        {/* Indépendance éditoriale */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Notre indépendance éditoriale</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4">
            <div className="font-bold text-amber-900 mb-2">⚖️ Déclaration d'indépendance</div>
            <p className="text-sm text-amber-800 leading-relaxed">
              Outils-Freelance.fr participe à des programmes d'affiliation. Lorsque vous cliquez sur un lien et souscrivez à un outil, nous pouvons percevoir une commission — sans surcoût pour vous. Cette rémunération ne détermine <strong>jamais</strong> nos recommandations ni nos notes.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nos principes non négociables :
          </p>
          <ul className="space-y-2 mb-4">
            {[
              'Aucun outil ne peut payer pour être mis en avant ou obtenir une meilleure note',
              'Les notes sont établies avant toute démarche de partenariat affilié',
              'Un outil peut être partenaire affilié et recevoir une note négative ou ne pas être recommandé',
              'Toutes nos commissions sont déclarées sur notre page politique d\'affiliation',
              'Nous ne publions pas d\'articles sponsorisés ni de publi-rédactionnels',
            ].map(p => (
              <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            Pour en savoir plus sur nos partenariats et commissions : <Link href="/politique-affiliation" className="text-indigo-600 hover:underline">Politique d'affiliation →</Link>
          </p>
        </section>

        {/* Fréquence de mise à jour */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mises à jour et rigueur</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les tarifs, fonctionnalités et conditions des outils SaaS évoluent régulièrement. Nous nous engageons à :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { freq: 'Mensuelle', desc: 'Vérification des tarifs affichés et des offres d\'essai' },
              { freq: 'Trimestrielle', desc: 'Mise à jour des comparatifs et des notes selon les évolutions produit' },
              { freq: 'Annuelle', desc: 'Réévaluation complète de chaque outil avec de nouveaux tests' },
            ].map(f => (
              <div key={f.freq} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="font-bold text-indigo-600 mb-1">{f.freq}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Une question ? Une erreur à signaler ?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Si vous constatez une information incorrecte, un tarif obsolète ou souhaitez suggérer un outil à tester, n'hésitez pas à nous contacter. Nous répondons généralement sous 48h ouvrées.
          </p>
          <a href="mailto:contact@outils-freelance.fr"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
            contact@outils-freelance.fr →
          </a>
        </section>

      </div>
    </>
  )
}
