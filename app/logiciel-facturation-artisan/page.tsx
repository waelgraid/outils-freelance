import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de facturation artisan 2026 — Comparatif',
  description: 'Quel logiciel de facturation pour artisan en 2026 ? Abby, Indy, Freebe : comparatif complet pour artisans et micro-entrepreneurs du batiment et artisanat.',
  alternates: { canonical: 'https://www.outils-freelance.fr/logiciel-facturation-artisan' },
}

const toolSlugs = ["abby", "indy", "freebe"]
const pageTools = TOOLS.filter(t => toolSlugs.includes(t.slug)).sort((a, b) => b.rating - a.rating)

const faqItems = [
  {
    "q": "Un artisan auto-entrepreneur a-t-il besoin d'un logiciel de facturation ?",
    "a": "Oui, c'est meme indispensable. En tant qu'artisan auto-entrepreneur, vous etes soumis a l'obligation de delivrer une facture pour tout service superieur a 25EUR HT et pour toute vente a un professionnel. Un logiciel garantit la conformite de vos factures et vous evite des amendes."
  },
  {
    "q": "Quel logiciel pour un artisan sans TVA (franchise en base) ?",
    "a": "Abby et Indy gerent parfaitement la franchise en base de TVA. Vos factures afficheront automatiquement la mention 'TVA non applicable - article 293 B du CGI'. Lorsque votre CA depassera le seuil, le logiciel s'adaptera."
  },
  {
    "q": "Peut-on utiliser Abby sur chantier depuis un telephone ?",
    "a": "Oui, Abby dispose d'une application mobile iOS et Android complete. Vous pouvez creer un devis, le faire signer par le client sur l'ecran, l'envoyer par email et suivre son statut — tout depuis votre smartphone sur le chantier."
  },
  {
    "q": "Quelle est la difference entre devis et situation de travaux ?",
    "a": "Le devis est etabli avant le chantier pour chiffrer la prestation. La situation de travaux est une facture d'avancement qui permet de facturer au fur et a mesure de l'avancement (ex: 30% a la commande, 40% a mi-chantier, 30% a la livraison). Abby gere les deux formats."
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
        { name: 'Logiciel artisan', url: 'https://www.outils-freelance.fr/logiciel-facturation-artisan' },
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
          {' > '}Artisan
        </nav>

        <div className="badge-purple mb-3">Mis a jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleur logiciel de facturation pour artisan 2026</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">Plombier, electricien, maçon, menuisier, peintre... les artisans ont des besoins specifiques en matiere de facturation : devis sur le terrain, situations de travaux, acomptes, TVA a taux reduit. Voici notre selection des meilleurs logiciels adaptes a votre metier.</p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">Contrairement aux freelances de services, les artisans facturent souvent des materiaux en plus de la main-d'oeuvre, travaillent avec des acomptes et des soldes, et peuvent appliquer differents taux de TVA (10%, 20%). Votre logiciel doit gerer tout ca facilement.</p>

        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ToolLogo slug="abby" name="Abby" size="lg" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Choix artisans 2026</span>
              <span className="font-bold text-gray-900 text-lg">Abby</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Interface simple, devis sur mobile, facturation des materiaux et de la main-d'oeuvre, gestion des acomptes. Le plus adapte aux artisans.</p>
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
          <div key="Devis et factures su" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Devis et factures sur le terrain</div>
            <p className="text-sm text-gray-600">Pouvoir creer un devis depuis votre smartphone chez le client, le faire signer electroniquement et le convertir en facture en un clic.</p>
          </div>
          <div key="Gestion des acomptes" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Gestion des acomptes</div>
            <p className="text-sm text-gray-600">Facturer un acompte a la commande, suivre les encaissements et editer la facture de solde automatiquement.</p>
          </div>
          <div key="TVA multi-taux" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">TVA multi-taux</div>
            <p className="text-sm text-gray-600">Appliquer facilement les taux de TVA 10% (renovation) et 20% (neuf) sur les memes factures.</p>
          </div>
          <div key="Catalogue produits/s" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Catalogue produits/services</div>
            <p className="text-sm text-gray-600">Creer un catalogue de vos materiaux et prestations pour facturer rapidement sans ressaisir.</p>
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
            <Link key="/comparatifs/indy-vs-abby" href="/comparatifs/indy-vs-abby" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Indy vs Abby &rarr;</span>
            </Link>
            <Link key="/logiciel-facturation-electricien" href="/logiciel-facturation-electricien" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Logiciel electricien &rarr;</span>
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
