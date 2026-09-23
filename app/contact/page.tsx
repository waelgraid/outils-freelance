import type { Metadata } from 'next'
import Link from 'next/link'
import { AUTHOR } from '@/lib/author'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Contact — signaler une erreur ou nous écrire',
  description: "Contacter Outils-Freelance.fr : signaler une information périmée, corriger un tarif, proposer un outil ou poser une question sur nos comparatifs.",
  alternates: { canonical: 'https://www.outils-freelance.fr/contact/' },
  openGraph: {
    title: 'Contact — Outils-Freelance.fr',
    description: "Signaler une erreur, corriger un tarif, proposer un outil ou poser une question.",
    url: 'https://www.outils-freelance.fr/contact/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
  },
}

const motifs = [
  {
    titre: 'Signaler une information périmée',
    detail: "C'est la demande la plus utile. La réglementation applicable aux indépendants change vite, et un tarif peut évoluer sans préavis. Indiquez l'URL concernée et ce qui a changé — les corrections factuelles sont traitées en priorité, et la date de la page est mise à jour.",
    priorite: true,
  },
  {
    titre: 'Proposer un outil',
    detail: "Nous couvrons une sélection d'outils, pas l'exhaustivité du marché. Si un outil manque et que vous pensez qu'il a sa place, dites-nous lequel et pourquoi. Aucune contrepartie financière n'est acceptée pour une inclusion.",
  },
  {
    titre: 'Question sur un comparatif',
    detail: "Une notation qui vous semble injustifiée, un critère qui manque, un cas d'usage non couvert : la remarque est utile, même critique.",
  },
  {
    titre: 'Éditeurs et partenariats',
    detail: "Nous n'acceptons ni article sponsorisé, ni placement payant, ni échange de lien contre visibilité. Pour signaler une erreur concernant votre produit ou nous transmettre une évolution tarifaire, écrivez-nous : ces corrections sont les bienvenues.",
  },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Contact', url: 'https://www.outils-freelance.fr/contact/' },
      ]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Contact
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nous écrire</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Les messages sont lus et reçoivent une réponse, même si le délai peut atteindre quelques
          jours.
        </p>

        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-12 text-center">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Adresse de contact</div>
          <a href={`mailto:${AUTHOR.email}`}
            className="text-xl font-bold text-indigo-700 hover:text-indigo-900 transition-colors break-all">
            {AUTHOR.email}
          </a>
          <div className="text-sm text-gray-500 mt-3">{AUTHOR.name}</div>
        </div>

        <h2 className="text-xl font-bold mb-5">Motifs de contact</h2>
        <div className="space-y-3 mb-12">
          {motifs.map(m => (
            <div key={m.titre}
              className={`rounded-2xl p-5 border ${m.priorite ? 'border-indigo-200 bg-indigo-50/30' : 'border-gray-100 bg-white'}`}>
              <div className="font-semibold text-gray-900 mb-1">
                {m.titre}
                {m.priorite && <span className="ml-2 text-xs font-bold text-indigo-600 uppercase tracking-wide">Prioritaire</span>}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-3">Ce que nous ne faisons pas</h2>
        <ul className="space-y-2 text-sm text-gray-600 mb-12">
          <li>• Nous ne donnons pas de <strong>conseil personnalisé</strong>. Pour une situation fiscale, sociale ou juridique particulière, consultez un expert-comptable ou un avocat.</li>
          <li>• Nous n&apos;intervenons pas dans votre relation avec un éditeur. En cas de litige, adressez-vous directement au service client concerné.</li>
          <li>• Nous ne publions pas d&apos;article sponsorisé et ne vendons pas de lien.</li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: '/methodologie', title: 'Notre méthodologie' },
            { href: '/politique-affiliation', title: 'Politique d\u2019affiliation' },
            { href: '/mentions-legales', title: 'Mentions légales' },
          ].map(r => (
            <Link key={r.href} href={r.href} className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">{r.title} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
