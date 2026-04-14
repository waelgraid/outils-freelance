import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de facturation electricien 2026 — Comparatif',
  description: 'Quel logiciel de facturation pour electricien auto-entrepreneur en 2026 ? Abby, Indy : comparatif adapte aux electriciens independants.',
  alternates: { canonical: 'https://www.outils-freelance.fr/logiciel-facturation-electricien' },
}

const toolSlugs = ["abby", "indy", "freebe"]
const pageTools = TOOLS.filter(t => toolSlugs.includes(t.slug)).sort((a, b) => b.rating - a.rating)

const faqItems = [
  {
    "q": "Quelles mentions sont obligatoires sur une facture d'electricien ?",
    "a": "Votre facture doit mentionner : votre nom/raison sociale, adresse, SIRET, numero de facture, date, description des travaux, prix unitaire HT, taux de TVA applique, total TTC. Si vous etes en franchise de TVA, la mention 'TVA non applicable art. 293 B CGI' est obligatoire. Abby et Indy generent automatiquement toutes ces mentions."
  },
  {
    "q": "Un electricien auto-entrepreneur doit-il avoir un compte bancaire pro ?",
    "a": "Ce n'est pas une obligation legale pour un auto-entrepreneur, mais c'est fortement recommande. Un compte dedie facilite le suivi de votre activite et est exige si votre CA depasse 10 000EUR sur 2 annees consecutives. Qonto et Shine proposent des comptes pro adaptes a partir de 7,90EUR/mois."
  },
  {
    "q": "Comment gerer les garanties decennale et biennale dans ses factures ?",
    "a": "Il est recommande de mentionner votre assurance responsabilite civile professionnelle et decennale sur vos devis et factures. Vous pouvez ajouter ces informations dans le pied de page de vos documents avec Abby ou Indy."
  },
  {
    "q": "Peut-on facturer en ligne pour un electricien ?",
    "a": "Oui, Abby permet d'inclure un lien de paiement en ligne directement dans vos factures. Vos clients peuvent regler par carte bancaire sans avoir a vous faire un virement manuel — particulierement pratique pour les petites interventions de depannage."
  }
]

export default function Page() {
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
        { name: 'Logiciels de facturation', url: 'https://www.outils-freelance.fr/comparatifs/logiciels-facturation' },
        { name: 'Logiciel electricien', url: 'https://www.outils-freelance.fr/logiciel-facturation-electricien' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="abby" toolName="Abby" toolUrl="https://c3po.link/QsNZwhTBgx" trialLabel="30 jours gratuits" bg="#4F46E5" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs/logiciels-facturation" className="hover:text-indigo-600">Logiciels de facturation</Link>
          {' > '}Electricien
        </nav>

        <div className="badge-purple mb-3">Mis a jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleur logiciel de facturation pour electricien auto-entrepreneur 2026</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">Electricien independant, installateur ou depanneur, vous avez besoin d'un logiciel de facturation qui s'utilise facilement sur le terrain, gere vos fournitures, vos acomptes et votre TVA. Voici notre selection 2026.</p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">En tant qu'electricien auto-entrepreneur, votre temps sur chantier est precieux. Votre logiciel de facturation doit vous permettre de creer un devis en quelques minutes depuis votre telephone, de suivre vos paiements et de gerer votre comptabilite sans y passer des soirees entieres.</p>

        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ToolLogo slug="abby" name="Abby" size="lg" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Choix electriciens 2026</span>
              <span className="font-bold text-gray-900 text-lg">Abby</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Le plus adapte aux artisans : devis sur mobile, gestion des materiaux, TVA a 10% et 20%, acomptes. Simple et complet.</p>
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="text-amber-500 font-semibold">&#9733; 4.8/5</span>
              <span className="text-gray-500">A partir de 5,40EUR/mois</span>
              <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; 30 jours gratuits</span>
            </div>
          </div>
          <a href="https://c3po.link/QsNZwhTBgx" target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
            Essayer &rarr;
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Ce dont vous avez besoin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div key="Creation de devis su" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Creation de devis sur smartphone</div>
            <p className="text-sm text-gray-600">Etablir un devis sur place chez le client, integrer les fournitures et la main-d'oeuvre, et envoyer par email immediatement.</p>
          </div>
          <div key="Gestion des taux de " className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Gestion des taux de TVA</div>
            <p className="text-sm text-gray-600">Facturer 10% TVA pour les travaux de renovation et 20% pour les installations neuves sur la meme facture.</p>
          </div>
          <div key="Catalogue materiaux" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Catalogue materiaux</div>
            <p className="text-sm text-gray-600">Enregistrer vos references de fournitures electriques avec prix unitaires pour les ajouter en un clic a vos devis.</p>
          </div>
          <div key="Suivi des impayés" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Suivi des impayés</div>
            <p className="text-sm text-gray-600">Visualiser en temps reel les factures en attente de paiement et envoyer des relances.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif 2026</h2>
        <div className="space-y-4 mb-12">
          {pageTools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
        </div>

        <h2 className="text-2xl font-bold mb-6">Questions frequentes</h2>
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
            <Link key="/logiciel-facturation-artisan" href="/logiciel-facturation-artisan" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Logiciel artisan &rarr;</span>
            </Link>
            <Link key="/comparatifs/indy-vs-abby" href="/comparatifs/indy-vs-abby" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Indy vs Abby &rarr;</span>
            </Link>
            <Link key="/comparatifs/logiciels-facturation" href="/comparatifs/logiciels-facturation" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Tous les logiciels &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
