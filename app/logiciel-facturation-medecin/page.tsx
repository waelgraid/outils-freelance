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
  title: 'Meilleur logiciel de facturation médecin libéral 2026',
  description: 'Quel logiciel de facturation pour médecin libéral en 2026 ? Indy, Pennylane : comparatif adapté aux professions médicales indépendantes.',
  alternates: { canonical: 'https://www.outils-freelance.fr/logiciel-facturation-medecin' },
}

const toolSlugs = ["indy", "pennylane", "abby"]
const pageTools = toolSlugs.map(slug => TOOLS.find(t => t.slug === slug)!).filter(Boolean)

const faqItems = [
  {
    "q": "Un médecin remplaçant doit-il obligatoirement tenir une comptabilite ?",
    "a": "Oui, tout médecin libéral — y compris les remplaçants — est soumis au regime BNC et doit tenir un livre-journal des recettes et dépenses. Indy simplifie énormément cette obligation : le livre-journal est généré automatiquement des que vous connectez votre compte bancaire."
  },
  {
    "q": "Indy est-il conforme pour la déclaration 2035 des professions liberales ?",
    "a": "Oui, Indy est spécifiquement conçu pour les professions libérales BNC et genere la déclaration 2035 automatiquement. C'est l'une de ses forces différenciantes par rapport aux logiciels generalistes."
  },
  {
    "q": "Un médecin libéral a-t-il besoin d'un expert-comptable avec Indy ?",
    "a": "Indy peut remplacer un expert-comptable pour la gestion courante (livre-journal, déclaration 2035, declaration de revenus). Pour les medecins avec une structure complexe (SCM, societe civile, salaries...), un expert-comptable reste conseillé."
  },
  {
    "q": "Peut-on utiliser Indy pour plusieurs activites (liberale + salariee) ?",
    "a": "Oui, Indy permet de gerer plusieurs sources de revenus. Vous pouvez separer votre activite liberale de vos revenus salaries et obtenir une vision consolidee pour votre declaration de revenus annuelle."
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
        { name: 'Logiciel médecin libéral', url: 'https://www.outils-freelance.fr/logiciel-facturation-medecin' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="indy" toolName="Indy" toolUrl="https://www.indy.fr/inscription?ae=1514" trialLabel="Version gratuite disponible" bg="#6C5CE7" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs/logiciels-facturation" className="hover:text-indigo-600">Logiciels de facturation</Link>
          {' > '}Medecin liberal
        </nav>

        <div className="badge-purple mb-3">Mis à jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleur logiciel de facturation pour médecin libéral 2026</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">Médecin généraliste, spécialiste ou remplaçant, en tant que professionnel de santé libéral vous avez des obligations comptables spécifiques. Voici les logiciels les mieux adaptés pour gérer votre activité de cabinet libéral simplement.</p>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">Les professions médicales libérales (médecins, dentistes, kinésithérapeutes, orthophonistes...) relèvent du régime BNC (Bénéfices Non Commerciaux) et ont des obligations comptables propres : livre-journal des recettes et dépenses, registre des immobilisations. Un bon logiciel gère tout ça automatiquement.</p>

        {/* Bloc stats spécifique médecin libéral */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center" style={{background:'#F0FDFA',border:'1.5px solid #99F6E4'}}>
            <div className="text-2xl font-bold text-teal-600 mb-1">120 000</div>
            <div className="text-xs text-teal-800">médecins libéraux en activité en France (DREES 2024)</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'#F0FDFA',border:'1.5px solid #99F6E4'}}>
            <div className="text-2xl font-bold text-teal-600 mb-1">BNC</div>
            <div className="text-xs text-teal-800">régime fiscal spécifique aux professions libérales de santé</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'#F0FDFA',border:'1.5px solid #99F6E4'}}>
            <div className="text-2xl font-bold text-teal-600 mb-1">1 seul</div>
            <div className="text-xs text-teal-800">logiciel pour livre-journal, liasse fiscale 2035 et bilan</div>
          </div>
        </div>

        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ToolLogo slug="indy" name="Indy" size="lg" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Choix professions libérales BNC</span>
              <span className="font-bold text-gray-900 text-lg">Indy</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">La reference pour les professions libérales BNC : livre-journal automatise, déclarations 2035, connexion bancaire. Gratuit pour démarrer.</p>
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="text-amber-500 font-semibold">&#9733; 4.7/5</span>
              <span className="text-gray-500">Gratuit puis 20EUR/mois</span>
              <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; 1er mois offert</span>
            </div>
          </div>
          <a href="https://www.indy.fr/inscription?ae=1514" target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
            Essayer &rarr;
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Ce dont vous avez besoin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div key="Regime BNC adapte" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Regime BNC adapte</div>
            <p className="text-sm text-gray-600">Comptabilité de trésorerie specifique aux professions liberales, avec livre-journal et déclaration 2035.</p>
          </div>
          <div key="Connexion CPAM et se" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Connexion CPAM et secu</div>
            <p className="text-sm text-gray-600">Integration possible avec les flux de remboursements de l'Assurance Maladie pour un suivi automatise.</p>
          </div>
          <div key="Facturation des depa" className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Facturation des depassements</div>
            <p className="text-sm text-gray-600">Gestion des honoraires en secteur 1, 2 et 3, avec depassements et forfaits.</p>
          </div>
          <div key="Confidentialite des " className="card p-4">
            <div className="font-semibold text-gray-900 mb-1">Confidentialite des donnees</div>
            <p className="text-sm text-gray-600">Stockage securise et conforme RGPD des donnees financieres sensibles.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif 2026</h2>
        <div className="space-y-4 mb-12">
          {pageTools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
        </div>

        <ReviewCard name="Dr. Marc V." job="Médecin généraliste libéral, Toulouse" review="Indy gère ma compta BNC sans expert-comptable. Je gagne 4 heures par mois et ma déclaration 2035 est prête en 10 minutes à la fin de l'année." toolName="Indy" />
        <VerdictBox
          slug="indy" name="Indy"
          affiliateUrl="https://www.indy.fr/inscription?ae=1514"
          score={4.7}
          verdictShort="La solution N°1 pour les professions libérales BNC — gratuit pour démarrer."
          pros={["Déclaration 2035 (BNC) générée automatiquement","Connexion bancaire et livre-journal automatisé","Gestion du passage à la TVA incluse","Version gratuite très complète, sans engagement"]}
         
          trialLabel="Version gratuite disponible"
          bg="#6C5CE7"
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
            <Link key="/comparatifs/pennylane-vs-indy" href="/comparatifs/pennylane-vs-indy" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Pennylane vs Indy &rarr;</span>
            </Link>
            <Link key="/comparatifs/logiciels-comptabilite" href="/comparatifs/logiciels-comptabilite" className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">Logiciels de comptabilite &rarr;</span>
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
