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
  title: 'Meilleur logiciel de facturation consultant freelance 2026',
  description: 'Quel logiciel de facturation choisir pour un consultant independant ? Comparatif Pennylane, Freebe, Indy avec avis et tarifs 2026.',
  alternates: { canonical: 'https://www.outils-freelance.fr/logiciel-facturation-consultant' },
}

const toolSlugs = ["pennylane", "freebe", "indy"]
const pageTools = toolSlugs.map(slug => TOOLS.find(t => t.slug === slug)!).filter(Boolean)

const faqItems = [
  {
    "q": "Quel logiciel de facturation pour un consultant en portage salarial ?",
    "a": "En portage salarial, c'est votre societe de portage qui facture a votre place. Vous n'avez pas besoin d'un logiciel de facturation, mais un outil comme Freebe peut vous aider a suivre vos missions et calculer votre rentabilite."
  },
  {
    "q": "Un consultant freelance doit-il obligatoirement facturer la TVA ?",
    "a": "Pas nécessairement. Si votre CA annuel est inférieur à 37 500 € pour les prestations de services, vous beneficiez de la franchise en base de TVA. Au-dessus, vous devez facturer la TVA a 20% et la declarer. Indy et Pennylane gerent automatiquement la TVA des que vous etes assujetti."
  },
  {
    "q": "Comment automatiser ses relances de factures impayees ?",
    "a": "Freebe et Abby proposent des relances automatiques par email aux clients en retard de paiement. Vous configurez les delais (J+7, J+15, J+30) et le logiciel envoie les rappels a votre place. Un gain de temps precieux pour maintenir votre tresorerie."
  },
  {
    "q": "Pennylane est-il adapte aux consultants en debut d'activite ?",
    "a": "Pennylane est tres complet mais son prix (26EUR/mois minimum) peut sembler eleve au demarrage. Pour les consultants debutants, Indy gratuit ou Freebe a 9,99EUR/mois sont de meilleures options. Migrez vers Pennylane quand votre CA depasse 50 000EUR et que votre comptabilite se complexifie."
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
        { name: 'Logiciel consultant', url: 'https://www.outils-freelance.fr/logiciel-facturation-consultant' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="pennylane" toolName="Pennylane" toolUrl="https://www.pennylane.com/?ref=outils-freelance" trialLabel="15 jours gratuits" bg="#1A1A2E" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs/logiciels-facturation" className="hover:text-indigo-600">Logiciels de facturation</Link>
          {' > '}Consultant
        </nav>

        <div className="badge-purple mb-3">Mis à jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleur logiciel de facturation pour consultant freelance 2026</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">En tant que consultant indépendant (management, marketing, RH, finance, IT...), vous facturerez souvent de gros montants à des clients grands comptes qui exigent des factures conformes et un suivi rigoureux. Voici les outils les mieux adaptés.</p>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">Le choix du bon logiciel de facturation est crucial pour un consultant : il conditionne votre image professionnelle auprès de vos clients, la rapidité de vos encaissements et la qualité de votre suivi comptable. Un outil adapté peut faire gagner plusieurs heures par mois.</p>

        {/* Bloc stats spécifique consultant */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center" style={{background:'#EFF6FF',border:'1.5px solid #BFDBFE'}}>
            <div className="text-2xl font-bold text-blue-600 mb-1">750 €</div>
            <div className="text-xs text-blue-800">TJM médian d'un consultant freelance senior en France</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'#EFF6FF',border:'1.5px solid #BFDBFE'}}>
            <div className="text-2xl font-bold text-blue-600 mb-1">30 j</div>
            <div className="text-xs text-blue-800">délai de paiement légal B2B à surveiller et relancer</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'#EFF6FF',border:'1.5px solid #BFDBFE'}}>
            <div className="text-2xl font-bold text-blue-600 mb-1">3 h</div>
            <div className="text-xs text-blue-800">d'admin comptable économisées par mois en moyenne</div>
          </div>
        </div>

        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ToolLogo slug="pennylane" name="Pennylane" size="lg" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Choix consultants</span>
              <span className="font-bold text-gray-900 text-lg">Pennylane</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Comptabilite en temps reel, collaboration avec expert-comptable, ideal pour les consultants avec un fort volume d'activite.</p>
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="text-amber-500 font-semibold">&#9733; 4.5/5</span>
              <span className="text-gray-500">A partir de 26EUR/mois</span>
              <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; 15 jours gratuits</span>
            </div>
          </div>
          <a href="https://www.pennylane.com/?ref=outils-freelance" target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
            Essayer &rarr;
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Ce dont vous avez besoin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div key="Factures grands comp" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Factures grands comptes conformes et professionnelles</div>
            <p className="text-sm text-gray-600">Vos clients entreprises exigent des factures avec mentions légales complètes, numéro de TVA intracommunautaire et format normé.</p>
          </div>
          <div key="Gestion multi-client" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Gestion multi-clients et multi-projets</div>
            <p className="text-sm text-gray-600">Suivre plusieurs missions simultanément avec statut des paiements et historique par client.</p>
          </div>
          <div key="Collaboration avec e" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Collaboration avec expert-comptable</div>
            <p className="text-sm text-gray-600">Interface permettant a votre comptable d'acceder directement a vos donnees sans echange de fichiers.</p>
          </div>
          <div key="Tableaux de bord fin" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Tableaux de bord financiers</div>
            <p className="text-sm text-gray-600">Vision en temps reel de votre CA, de vos encaissements en attente et de votre tresorerie previsionnelle.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif 2026</h2>
        <div className="space-y-4 mb-12">
          {pageTools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
        </div>

        <ReviewCard name="Sophie D." job="Consultante RH indépendante, Paris" review="Pennylane a transformé ma relation avec mon comptable. Tout est synchronisé en temps réel, je gagne 2 heures par semaine sur l'administration." toolName="Pennylane" />
        <VerdictBox
          slug="pennylane" name="Pennylane"
          affiliateUrl="https://www.pennylane.com/?ref=outils-freelance"
          score={4.5}
          verdictShort="La référence pour les consultants avec fort volume d'activité et clients grands comptes."
          pros={["Vision financière temps réel de toute votre activité","Collaboration simplifiée avec votre expert-comptable","Suivi des factures et relances automatiques","Reporting avancé pour piloter votre rentabilité"]}
         
          trialLabel="15 jours gratuits"
          bg="#1A1A2E"
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
            <Link key="/comparatifs/pennylane-vs-indy" href="/comparatifs/pennylane-vs-indy" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Pennylane vs Indy &rarr;</span>
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
