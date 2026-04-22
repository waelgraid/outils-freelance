import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'
import { VerdictBox } from '@/components/VerdictBox'
import { ReviewCard } from '@/components/ReviewCard'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de facturation graphiste freelance 2026',
  description: 'Quel logiciel de facturation pour graphiste freelance en 2026 ? Freebe, Indy, Abby : comparatif adapte aux createurs et designers independants.',
  alternates: { canonical: 'https://www.outils-freelance.fr/logiciel-facturation-graphiste' },
}

const toolSlugs = ["freebe", "indy", "abby"]
const pageTools = toolSlugs.map(slug => TOOLS.find(t => t.slug === slug)!).filter(Boolean)

const faqItems = [
  {
    "q": "Un graphiste freelance doit-il facturer la TVA ?",
    "a": "Cela depend de votre CA. En dessous de 37 500 € de CA annuel, vous beneficiez de la franchise en base de TVA. Au-dessus, vous facturez la TVA a 20% sur vos prestations. Certaines prestations artistiques peuvent beneficier du taux reduit — renseignez-vous aupres d'un comptable."
  },
  {
    "q": "Freebe est-il adapte aux graphistes qui debutent ?",
    "a": "Freebe est ideal des le debut de votre activite. Son interface simple guide la creation de devis et factures pas-a-pas. A 9,99EUR/mois, c'est un investissement vite rentabilise si ca vous evite un seul impaye grace aux relances automatiques."
  },
  {
    "q": "Comment facturer des droits de cession en tant que graphiste ?",
    "a": "Les droits de cession de droits d'auteur peuvent etre inclus dans vos factures de prestation ou factures separement. Avec Freebe ou Indy, vous pouvez creer des lignes de facturation personnalisees pour les droits de cession avec les mentions legales appropriees."
  },
  {
    "q": "Peut-on avoir un CRM simple integre au logiciel de facturation ?",
    "a": "Freebe propose un CRM simplifie pour suivre vos prospects et clients. Vous pouvez noter vos echanges, suivre le statut de chaque mission et voir l'historique complet de votre relation avec chaque client. C'est une fonctionnalite particulierement utile pour les graphistes avec de nombreux clients."
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
        { name: 'Logiciel graphiste', url: 'https://www.outils-freelance.fr/logiciel-facturation-graphiste' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="freebe" toolName="Freebe" toolUrl="https://link.freebe.me/Outils-Freelance" trialLabel="2 mois offerts" bg="#0061FF" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs/logiciels-facturation" className="hover:text-indigo-600">Logiciels de facturation</Link>
          {' > '}Graphiste
        </nav>

        <div className="badge-purple mb-3">Mis à jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleur logiciel de facturation pour graphiste freelance 2026</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">Graphiste, illustrateur, directeur artistique, motion designer... les créatifs freelances ont des besoins spécifiques : suivi du temps passé par projet, facturation au forfait ou au taux horaire, gestion des droits de cession et relances élégantes. Voici notre sélection.</p>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">En tant que graphiste indépendant, vous jonglez souvent entre plusieurs clients et projets en même temps. Votre logiciel de facturation doit vous permettre de suivre le temps passé, de générer des factures professionnelles qui valorisent votre travail et de ne jamais perdre de vue les paiements en attente.</p>

        {/* Bloc stats spécifique graphiste */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center" style={{background:'#FAF5FF',border:'1.5px solid #E9D5FF'}}>
            <div className="text-2xl font-bold text-purple-600 mb-1">45–75 €</div>
            <div className="text-xs text-purple-800">taux horaire médian d'un graphiste freelance en France</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'#FAF5FF',border:'1.5px solid #E9D5FF'}}>
            <div className="text-2xl font-bold text-purple-600 mb-1">4 clients</div>
            <div className="text-xs text-purple-800">en moyenne gérés simultanément par un créatif indépendant</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'#FAF5FF',border:'1.5px solid #E9D5FF'}}>
            <div className="text-2xl font-bold text-purple-600 mb-1">2 mois</div>
            <div className="text-xs text-purple-800">offerts sur Freebe, conçu pour les créatifs et graphistes</div>
          </div>
        </div>

        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ToolLogo slug="freebe" name="Freebe" size="lg" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Choix graphistes 2026</span>
              <span className="font-bold text-gray-900 text-lg">Freebe</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Concu specifiquement pour les freelances creatifs : suivi du temps, gestion de missions, devis elegants et relances automatiques.</p>
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="text-amber-500 font-semibold">&#9733; 4.6/5</span>
              <span className="text-gray-500">A partir de 9,99EUR/mois</span>
              <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; 2 mois offerts</span>
            </div>
          </div>
          <a href="https://link.freebe.me/Outils-Freelance" target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
            Essayer &rarr;
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Ce dont vous avez besoin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div key="Suivi du temps par p" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Suivi du temps par projet</div>
            <p className="text-sm text-gray-600">Mesurer le temps passe sur chaque mission pour s'assurer de la rentabilite et facturer au temps passe si necessaire.</p>
          </div>
          <div key="Devis et factures el" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Devis et factures elegants</div>
            <p className="text-sm text-gray-600">Des documents a l'image de votre activite creative : propres, personnalisables, professionnels.</p>
          </div>
          <div key="Gestion des acomptes" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Gestion des acomptes et soldes</div>
            <p className="text-sm text-gray-600">Facturer 30-50% a la commande et le solde a la livraison, avec suivi automatique.</p>
          </div>
          <div key="Relances automatique" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Relances automatiques</div>
            <p className="text-sm text-gray-600">Programmer des relances pour les impayés sans avoir a y penser — indispensable pour maintenir sa tresorerie.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif 2026</h2>
        <div className="space-y-4 mb-12">
          {pageTools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
        </div>

        <ReviewCard name="Camille R." job="Graphiste freelance, Nantes" review="Grâce au suivi du temps, j'ai réalisé que je sous-facturais 30 % de mon travail réel. En 3 mois j'ai réajusté mes tarifs et augmenté mon revenu net de 800 € par mois." toolName="Freebe" />
        <VerdictBox
          slug="freebe" name="Freebe"
          affiliateUrl="https://link.freebe.me/Outils-Freelance"
          score={4.6}
          verdictShort="L'outil conçu pour les créatifs qui facturent au temps passé et gèrent plusieurs clients."
          pros={["Suivi du temps par projet et par client","Vision claire de votre rentabilité réelle par mission","Relances automatiques professionnelles et élégantes","Signature électronique des devis intégrée"]}
         
          trialLabel="2 mois offerts"
          bg="#0061FF"
        />
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
            <Link key="/blog/mentions-obligatoires-facture-auto-entrepreneur" href="/blog/mentions-obligatoires-facture-auto-entrepreneur" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Mentions obligatoires facture &rarr;</span>
            </Link>
            <Link key="/logiciel-facturation-consultant" href="/logiciel-facturation-consultant" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Logiciel consultant &rarr;</span>
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
