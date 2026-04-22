import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de gestion pour auto-entrepreneur 2026 — Comparatif',
  description: 'Quel logiciel de gestion pour auto-entrepreneur en 2026 ? Facturation, comptabilité, banque pro : notre sélection complète pour gérer votre activité indépendante.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/logiciels-gestion' },
}

const tools = TOOLS.filter(t => ['abby', 'indy', 'freebe', 'pennylane'].includes(t.slug))
  .sort((a, b) => b.rating - a.rating)

const faqItems = [
  {
    q: 'Quel logiciel de gestion pour débuter en auto-entreprise ?',
    a: 'Pour débuter, Abby est le choix idéal : version gratuite permanente, facturation illimitée, déclarations URSSAF intégrées. Son interface très guidée convient parfaitement aux débutants. Indy est une excellente alternative si vous souhaitez aussi automatiser votre comptabilité dès le départ via la connexion bancaire.',
  },
  {
    q: 'Un logiciel de gestion remplace-t-il un expert-comptable ?',
    a: 'Pour les micro-entrepreneurs, un bon logiciel comme Indy ou Abby suffit pour la gestion courante : facturation, livre des recettes, déclarations URSSAF. Pour les structures soumises à l\'IS (SASU, EURL) ou en cas de TVA complexe, un expert-comptable reste recommandé — mais les logiciels modernes comme Pennylane réduisent significativement ses honoraires.',
  },
  {
    q: 'Quelle est la différence entre logiciel de facturation et logiciel de gestion ?',
    a: 'Un logiciel de facturation se concentre sur la création de devis et factures. Un logiciel de gestion va plus loin : facturation + comptabilité + déclarations URSSAF + trésorerie + connexion bancaire. Les outils de cette sélection combinent les deux pour une gestion complète de votre activité.',
  },
  {
    q: 'Les logiciels de gestion sont-ils conformes à la facturation électronique 2026 ?',
    a: 'Oui, Abby et Indy sont déjà certifiés Plateforme De Dématérialisation Partenaire (PDP). Vos factures sont générées au format Factur-X, conforme à la réforme de la facturation électronique obligatoire qui s\'applique progressivement jusqu\'en 2027. Pennylane et Freebe sont également conformes.',
  },
]

export default function LogicielsGestionPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs' },
        { name: 'Logiciels de gestion', url: 'https://www.outils-freelance.fr/comparatifs/logiciels-gestion' },
      ]} />
      <FAQSchema faqs={faqItems} />
      <StickyBar toolSlug="abby" toolName="Abby" toolUrl="https://c3po.link/QsNZwhTBgx" trialLabel="30 jours gratuits" bg="#00C48C" />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>
          {' > '}Logiciels de gestion
        </nav>

        <div className="badge-purple mb-3">Mis à jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleur logiciel de gestion pour auto-entrepreneur (2026)</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Gérer votre activité d'indépendant ne devrait pas vous prendre plus d'une heure par mois. Les meilleurs logiciels de gestion pour auto-entrepreneurs combinent facturation, comptabilité et déclarations URSSAF dans une seule interface, à partir de quelques euros par mois — voire gratuitement.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Notre sélection 2026 des outils les mieux adaptés aux freelances et auto-entrepreneurs français, testés en conditions réelles.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center bg-indigo-50 border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600 mb-1">4</div>
            <div className="text-xs text-indigo-700">outils testés et comparés</div>
          </div>
          <div className="rounded-2xl p-4 text-center bg-indigo-50 border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600 mb-1">0€</div>
            <div className="text-xs text-indigo-700">pour démarrer avec Abby ou Indy</div>
          </div>
          <div className="rounded-2xl p-4 text-center bg-indigo-50 border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600 mb-1">30 min</div>
            <div className="text-xs text-indigo-700">d'admin par mois avec un bon outil</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif 2026</h2>
        <div className="space-y-4 mb-12">
          {tools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
        </div>

        {/* Guide rapide */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">Comment choisir selon votre profil</h2>
          <div className="space-y-3">
            {[
              { profil: 'Auto-entrepreneur débutant', choix: 'Abby', raison: 'Interface guidée, gratuit, certifié facturation électronique' },
              { profil: 'Freelance en services (dev, conseil, graphisme)', choix: 'Freebe', raison: 'Suivi du temps, gestion des missions, relances automatiques' },
              { profil: 'Indépendant qui veut automatiser sa comptabilité', choix: 'Indy', raison: 'Connexion bancaire, déclarations auto, version gratuite généreuse' },
              { profil: 'Consultant avec fort CA ou SASU', choix: 'Pennylane', raison: 'Comptabilité temps réel, collaboration expert-comptable, reporting avancé' },
            ].map(r => (
              <div key={r.profil} className="flex items-start gap-3 py-2 border-b border-gray-200 last:border-0">
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-700">{r.profil}</span>
                  <span className="text-sm text-gray-400"> → </span>
                  <span className="text-sm font-bold text-indigo-600">{r.choix}</span>
                </div>
                <span className="text-xs text-gray-500 max-w-xs">{r.raison}</span>
              </div>
            ))}
          </div>
        </div>

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
            {[
              { href: '/comparatifs/logiciels-facturation', title: 'Comparatif facturation' },
              { href: '/comparatifs/logiciels-comptabilite', title: 'Comparatif comptabilité' },
              { href: '/comparatifs/banques-pro', title: 'Meilleures banques pro' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
                <span className="text-sm font-medium group-hover:text-indigo-600">{r.title} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
