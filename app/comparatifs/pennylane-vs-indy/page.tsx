import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Pennylane vs Indy 2026 : quel logiciel de comptabilite choisir ?',
  description: 'Pennylane ou Indy ? Comparatif detaille 2026 : tarifs, fonctionnalites, points forts. Verdict clair pour freelances, auto-entrepreneurs et societes.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/pennylane-vs-indy' },
}

const faqItems = [
  {
    q: 'Pennylane est-il fait pour les auto-entrepreneurs ?',
    a: "Pennylane peut etre utilise par des auto-entrepreneurs, mais son prix de depart (26EUR/mois) est difficile a justifier face a Indy gratuit ou Abby a 5,40EUR/mois. Pennylane prend tout son sens pour les SASU, EURL et entreprises avec un CA superieur a 50 000EUR par an."
  },
  {
    q: "Indy peut-il remplacer un expert-comptable ?",
    a: "Pour un micro-entrepreneur, Indy en version gratuite ou payante remplace efficacement un expert-comptable pour la gestion courante (declarations, livre des recettes, factures). Pour une societe avec TVA, bilan et IS, un expert-comptable reste recommande — mais Indy et Pennylane facilitent la collaboration."
  },
  {
    q: "Pennylane et Indy s'integrent-ils avec les banques pro ?",
    a: "Oui, les deux logiciels s'integrent avec les principales banques pro francaises (Qonto, Shine, BNP, Credit Agricole...). La connexion bancaire synchronise automatiquement vos transactions pour eviter la saisie manuelle."
  },
  {
    q: "Peut-on migrer d'Indy vers Pennylane facilement ?",
    a: "La migration est possible via export de vos donnees (FEC, CSV). Pennylane propose un service d'onboarding pour accompagner la transition. Il est conseille de migrer en debut d'exercice fiscal pour simplifier la reprise de l'historique comptable."
  },
  {
    q: "Quel logiciel est le mieux note par ses utilisateurs ?",
    a: "Indy est note 4,7/5 avec plus de 2 800 avis, principalement salue pour sa simplicite et sa version gratuite. Pennylane obtient 4,5/5 avec 1 600 avis, reconnu pour sa puissance et ses fonctionnalites avancees. Les deux logiciels ont une excellente reputation."
  },
]

export default function PennylaneVsIndyPage() {
  const tools = TOOLS.filter(t => ['pennylane', 'indy'].includes(t.slug))
  const pennylane = tools.find(t => t.slug === 'pennylane') ?? tools[0]
  const indy = tools.find(t => t.slug === 'indy') ?? tools[1]

  const criteria = [
    { label: 'Version gratuite',          a: 'Non',                    b: 'Tres complete',        winner: 'indy' },
    { label: 'Prix de depart',            a: '26EUR/mois',             b: '0EUR/mois',            winner: 'indy' },
    { label: 'Connexion bancaire',         a: 'Automatique',            b: 'Automatique',          winner: 'egal' },
    { label: 'Comptabilite IS (societe)', a: 'Complete',               b: 'Via Indy Pro',         winner: 'pennylane' },
    { label: 'Tableau de bord financier', a: 'Tres avance',            b: 'Basique',              winner: 'pennylane' },
    { label: 'Collaboration comptable',   a: 'Interface dediee',       b: 'Export uniquement',    winner: 'pennylane' },
    { label: 'Declarations URSSAF',       a: 'Incluses',               b: 'Incluses',             winner: 'egal' },
    { label: 'Gestion de la TVA',         a: 'Automatisee',            b: 'Sur plan payant',      winner: 'egal' },
    { label: 'Adapte micro-entrepreneur', a: 'Trop cher',              b: 'Ideal',                winner: 'indy' },
    { label: 'Support client',            a: 'Reactif',                b: 'Excellent (4 min)',    winner: 'indy' },
  ]

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
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs' },
        { name: 'Pennylane vs Indy', url: 'https://www.outils-freelance.fr/comparatifs/pennylane-vs-indy' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="indy" toolName="Indy" toolUrl="https://www.indy.fr/?ae=1514" trialLabel="Gratuit a vie" bg="#6C5CE7" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>
          {' > '}Pennylane vs Indy
        </nav>

        <div className="badge-purple mb-3">Comparatif 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pennylane vs Indy : quel logiciel choisir en 2026 ?</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Pennylane et Indy sont deux references de la comptabilite automatisee pour independants, mais ils ne s&apos;adressent pas au meme profil.
          Indy brille par sa gratuité et sa simplicite, Pennylane par sa puissance et ses fonctionnalites avancees pour les structures plus importantes.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Ce comparatif detaille vous aidera a identifier lequel correspond vraiment a votre situation, que vous soyez micro-entrepreneur ou dirigeant d&apos;une SASU.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
          <div className="font-bold text-amber-900 mb-2">&#9888; Verdict rapide</div>
          <p className="text-sm text-amber-800">
            <strong>Indy</strong> est imbattable pour les micro-entrepreneurs et auto-entrepreneurs : gratuit, complet, facile.
            <br />
            <strong>Pennylane</strong> prend tout son sens pour les SASU, EURL et entreprises avec fort CA qui ont besoin d&apos;une vraie vision financiere et d&apos;une collaboration avec un expert-comptable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[pennylane, indy].map((tool, i) => (
            <div key={tool.slug} className={`card p-6 ${i === 1 ? 'ring-2 ring-indigo-500' : ''}`}>
              {i === 1 && <div className="badge-purple mb-3">Meilleur pour la majorite</div>}
              <div className="flex items-center gap-3 mb-4">
                <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{tool.name}</div>
                  <div className="text-amber-500 text-sm">&#9733; {tool.rating}/5</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">{tool.tagline}</p>
              <div className="text-sm font-semibold text-gray-900 mb-1">{tool.price}</div>
              {tool.freeTrial && <div className="text-xs text-green-600 mb-4">&#10003; {tool.freeTrial}</div>}
              <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary w-full justify-center">
                Visiter le site &rarr;
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Indy : la reference gratuite pour micro-entrepreneurs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indy est aujourd&apos;hui le logiciel de comptabilite le plus utilise par les freelances et auto-entrepreneurs en France avec plus de 300 000 utilisateurs.
          Sa version gratuite couvre l&apos;essentiel : facturation illimitee, livre des recettes, declarations de CA a l&apos;URSSAF et connexion bancaire automatique.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          La force d&apos;Indy est son <strong>automatisation via la connexion bancaire</strong> : une fois votre compte relie, Indy categorise vos transactions automatiquement
          et remplit votre comptabilite sans saisie. Pour un micro-entrepreneur avec quelques dizaines de transactions par mois, c&apos;est largement suffisant.
          Les plans payants (de 20 a 80EUR/mois selon statut) ajoutent TVA, bilan et liasse fiscale.
        </p>

        <h2 className="text-2xl font-bold mb-4">Pennylane : la comptabilite de haut niveau pour structures ambitieuses</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Pennylane s&apos;est impose comme la reference pour les entreprises qui ont besoin d&apos;une visibilite financiere avancee.
          La plateforme synchronise en temps reel vos donnees bancaires, vos factures clients et fournisseurs pour donner une image precise
          de votre tresorerie, de votre rentabilite et de vos obligations fiscales.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Son point fort distinctif est la <strong>collaboration avec expert-comptable</strong> : Pennylane propose une interface dediee qui permet
          a votre comptable d&apos;intervenir directement sur votre dossier, de valider les ecritures et de preparer votre bilan sans echange de fichiers.
          A 26EUR/mois minimum, il s&apos;adresse surtout aux SASU, EURL et EI avec CA superieur a 50 000EUR.
        </p>

        <h2 className="text-2xl font-bold mb-5">Comparatif critere par critere</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="px-4 py-3">Critere</div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="pennylane" name="Pennylane" size="sm" /><span>Pennylane</span></div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="indy" name="Indy" size="sm" /><span>Indy</span></div>
            <div className="px-4 py-3">Gagnant</div>
          </div>
          {criteria.map((c, i) => (
            <div key={c.label} className={`grid grid-cols-4 border-b border-gray-50 text-sm ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
              <div className="px-4 py-3 font-medium text-gray-700">{c.label}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'pennylane' ? 'font-semibold text-yellow-700' : ''}`}>{c.a}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'indy' ? 'font-semibold text-indigo-700' : ''}`}>{c.b}</div>
              <div className="px-4 py-3">
                {c.winner === 'pennylane' && <span className="badge bg-yellow-100 text-yellow-800">Pennylane</span>}
                {c.winner === 'indy' && <span className="badge bg-indigo-100 text-indigo-700">Indy</span>}
                {c.winner === 'egal' && <span className="text-xs text-gray-400">Egalite</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="pennylane" name="Pennylane" size="sm" /><span className="font-bold">Choisissez Pennylane si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous dirigez une SASU ou EURL</li>
              <li>&#10003; Vous avez un expert-comptable et voulez collaborer en temps reel</li>
              <li>&#10003; Votre CA depasse 50 000EUR et vous avez besoin d&apos;une visibilite financiere complete</li>
              <li>&#10003; Vous avez des employes et gerez la paie</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="indy" name="Indy" size="sm" /><span className="font-bold">Choisissez Indy si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous etes auto-entrepreneur ou micro-entrepreneur</li>
              <li>&#10003; Vous cherchez la solution la plus complete en gratuit</li>
              <li>&#10003; Vous voulez automatiser sans payer plus de 20EUR/mois</li>
              <li>&#10003; Vous etes freelance BNC (consultant, developpeur, designer...)</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-12">
          <p className="text-sm text-gray-600 mb-4"><strong>Pour 80% des auto-entrepreneurs</strong> : Indy gratuit suffit. <strong>Pour une societe ou un fort CA</strong> : Pennylane prend tout son sens.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={pennylane.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-secondary inline-flex">Tester Pennylane &rarr;</a>
            <a href={indy.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary inline-flex">Commencer avec Indy &rarr;</a>
          </div>
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
          <h2 className="text-xl font-bold mb-4">Liens utiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/comparatifs/indy-vs-abby', title: 'Indy vs Abby' },
              { href: '/comparatifs/logiciels-comptabilite', title: 'Tous les logiciels compta' },
              { href: '/comparatifs/logiciels-facturation', title: 'Tous les logiciels factu' },
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
