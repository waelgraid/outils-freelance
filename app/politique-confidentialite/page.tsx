import type { Metadata } from 'next'
import Link from 'next/link'
import { AUTHOR, EDITORIAL } from '@/lib/author'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Outils-Freelance.fr',
  description: "Quelles données sont collectées sur Outils-Freelance.fr, pourquoi, combien de temps elles sont conservées et comment exercer vos droits d'accès, de rectification et de suppression.",
  alternates: { canonical: 'https://www.outils-freelance.fr/politique-confidentialite/' },
  openGraph: {
    title: 'Politique de confidentialité — Outils-Freelance.fr',
    description: "Données collectées, finalités, durées de conservation et exercice de vos droits RGPD.",
    url: 'https://www.outils-freelance.fr/politique-confidentialite/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
  },
}

const traitements = [
  {
    finalite: 'Newsletter',
    donnees: 'Adresse email, et le cas échéant les réponses au questionnaire d\u2019orientation (profil, besoin, budget)',
    base: 'Consentement (art. 6.1.a du RGPD)',
    duree: '3 ans à compter du dernier contact, ou jusqu\u2019à désinscription',
    destinataire: 'Brevo (Sendinblue SAS), hébergement en Union européenne',
  },
  {
    finalite: 'Mesure d\u2019audience',
    donnees: 'Pages consultées, source de visite, type d\u2019appareil, pays. Aucune donnée directement identifiante',
    base: 'Intérêt légitime (art. 6.1.f du RGPD)',
    duree: '25 mois maximum',
    destinataire: 'Vercel Inc. — mesure sans cookie ni identifiant persistant',
  },
  {
    finalite: 'Hébergement et sécurité',
    donnees: 'Adresse IP, journaux techniques',
    base: 'Intérêt légitime (sécurité du service)',
    duree: 'Conservation courte, à des fins de prévention des abus',
    destinataire: 'Vercel Inc.',
  },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Politique de confidentialité', url: 'https://www.outils-freelance.fr/politique-confidentialite/' },
      ]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Politique de confidentialité
        </nav>

        <div className="badge-purple mb-3">Mis à jour {EDITORIAL.lastUpdate}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Politique de confidentialité</h1>
        <p className="text-gray-600 leading-relaxed mb-10">
          Cette page décrit les données personnelles collectées sur Outils-Freelance.fr, la raison
          pour laquelle elles le sont, leur durée de conservation, et la manière dont vous pouvez
          exercer vos droits.
        </p>

        <h2 className="text-xl font-bold mb-3">Responsable du traitement</h2>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-10 text-sm text-gray-700 leading-relaxed">
          L&apos;éditeur du site Outils-Freelance.fr.<br />
          Contact&nbsp;: <a href={`mailto:${AUTHOR.email}`} className="text-indigo-600 hover:underline">{AUTHOR.email}</a><br />
          Les coordonnées complètes de l&apos;éditeur figurent dans les{' '}
          <Link href="/mentions-legales" className="text-indigo-600 hover:underline">mentions légales</Link>.
        </div>

        <h2 className="text-xl font-bold mb-3">Données collectées et finalités</h2>
        <div className="space-y-4 mb-10">
          {traitements.map(t => (
            <div key={t.finalite} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-bold text-gray-900 mb-3">{t.finalite}</div>
              <dl className="space-y-2 text-sm">
                {[
                  ['Données', t.donnees],
                  ['Base légale', t.base],
                  ['Conservation', t.duree],
                  ['Destinataire', t.destinataire],
                ].map(([k, v]) => (
                  <div key={k} className="sm:flex gap-3">
                    <dt className="font-semibold text-gray-500 sm:w-32 shrink-0">{k}</dt>
                    <dd className="text-gray-600 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-3">Cookies</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Ce site <strong>ne dépose aucun cookie publicitaire ni de suivi comportemental</strong>.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-10">
          La mesure d&apos;audience utilisée fonctionne sans cookie et sans identifiant persistant :
          elle ne permet ni de vous reconnaître d&apos;une visite à l&apos;autre, ni de vous suivre
          sur d&apos;autres sites. C&apos;est la raison pour laquelle aucun bandeau de consentement
          ne vous est présenté. Si un outil nécessitant un consentement était ajouté à l&apos;avenir,
          un bandeau serait mis en place et cette page mise à jour.
        </p>

        <h2 className="text-xl font-bold mb-3">Liens vers des sites partenaires</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-10">
          Certains liens de ce site sont des liens affiliés, signalés comme tels. Lorsque vous
          cliquez sur l&apos;un d&apos;eux, vous quittez Outils-Freelance.fr et vous êtes soumis à la
          politique de confidentialité du site partenaire. Le programme d&apos;affiliation peut
          déposer un cookie de suivi permettant d&apos;attribuer votre visite. Nous n&apos;avons
          accès ni à votre identité, ni au détail de votre navigation sur ces sites — uniquement à
          des statistiques agrégées.{' '}
          <Link href="/politique-affiliation" className="text-indigo-600 hover:underline">
            En savoir plus sur notre politique d&apos;affiliation
          </Link>.
        </p>

        <h2 className="text-xl font-bold mb-3">Vos droits</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
          suivants sur vos données&nbsp;:
        </p>
        <ul className="space-y-2 text-sm text-gray-600 mb-5">
          <li>• <strong>Accès</strong> — obtenir une copie des données vous concernant</li>
          <li>• <strong>Rectification</strong> — corriger une donnée inexacte</li>
          <li>• <strong>Effacement</strong> — demander la suppression de vos données</li>
          <li>• <strong>Opposition</strong> — vous opposer à un traitement fondé sur l&apos;intérêt légitime</li>
          <li>• <strong>Limitation</strong> — demander le gel temporaire d&apos;un traitement</li>
          <li>• <strong>Portabilité</strong> — récupérer vos données dans un format réutilisable</li>
          <li>• <strong>Retrait du consentement</strong> — à tout moment, sans affecter la licéité du traitement antérieur</li>
        </ul>
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-5 mb-5 text-sm text-gray-700 leading-relaxed">
          Pour exercer ces droits, écrivez à{' '}
          <a href={`mailto:${AUTHOR.email}`} className="text-indigo-600 hover:underline font-semibold">{AUTHOR.email}</a>.
          Une réponse vous sera apportée dans un délai d&apos;un mois. Chaque email de la newsletter
          comporte par ailleurs un lien de désinscription en un clic.
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-10">
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
          pouvez introduire une réclamation auprès de la{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener" className="text-indigo-600 hover:underline">CNIL</a>.
        </p>

        <h2 className="text-xl font-bold mb-3">Transferts hors Union européenne</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-10">
          L&apos;hébergement et la mesure d&apos;audience sont assurés par Vercel Inc., société
          établie aux États-Unis. Ces transferts sont encadrés par les clauses contractuelles types
          de la Commission européenne. Les données de la newsletter sont hébergées dans l&apos;Union
          européenne par Brevo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: '/mentions-legales', title: 'Mentions légales' },
            { href: '/politique-affiliation', title: 'Politique d\u2019affiliation' },
            { href: '/methodologie', title: 'Notre méthodologie' },
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
