import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de comptabilite freelance 2026 : comparatif complet',
  description: 'Quel logiciel de comptabilite choisir en 2026 pour freelance ou auto-entrepreneur ? Indy, Pennylane, Abby : comparatif tarifs, fonctionnalites et avis.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/logiciels-comptabilite' },
}

const faqItems = [
  {
    q: 'Quel est le meilleur logiciel de comptabilite gratuit pour auto-entrepreneur ?',
    a: "Indy est le meilleur logiciel de comptabilite gratuit pour auto-entrepreneurs en 2026. Sa version gratuite inclut la facturation illimitee, le livre des recettes, les declarations URSSAF et la connexion bancaire automatique. C'est la version gratuite la plus complete du marche."
  },
  {
    q: 'Un auto-entrepreneur a-t-il besoin d\'un logiciel de comptabilite ?',
    a: "En tant qu'auto-entrepreneur, vous n'etes pas soumis a l'obligation de tenir une comptabilite complete, mais vous devez tenir un livre des recettes et un registre des achats. Un logiciel de comptabilite simplifie enormement cette gestion et vous evite des erreurs qui peuvent couter cher lors d'un controle URSSAF."
  },
  {
    q: 'Quelle est la difference entre un logiciel de facturation et un logiciel de comptabilite ?',
    a: "Un logiciel de facturation vous permet de creer des devis et factures professionnels. Un logiciel de comptabilite va plus loin : il suit vos recettes et depenses, genere votre livre des recettes, calcule vos charges et peut preparer vos declarations fiscales. Les meilleurs outils comme Indy ou Abby combinent les deux."
  },
  {
    q: 'Les logiciels de comptabilite sont-ils conformes aux obligations legales francaises ?',
    a: "Oui, les logiciels references sur notre site sont tous conformes a la legislation francaise : loi anti-fraude TVA 2018, futures obligations de facturation electronique, et format FEC (Fichier des Ecritures Comptables) pour les controles fiscaux. Verifiez toujours la mention NF 203 ou l'attestation de conformite."
  },
  {
    q: 'Faut-il un expert-comptable si on utilise un logiciel de comptabilite ?',
    a: "Pour un micro-entrepreneur, un bon logiciel comme Indy suffit generalement pour gerer sa comptabilite au quotidien. Pour une societe (SASU, EURL) ou en cas de TVA, un expert-comptable reste recommande — mais les logiciels modernes comme Pennylane facilitent la collaboration et reduisent les honoraires."
  },
]

export default function LogicielsComptabilitePage() {
  const comptaTools = TOOLS.filter(t => ['indy', 'pennylane', 'abby', 'freebe'].includes(t.slug))
    .sort((a, b) => b.rating - a.rating)

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
        { name: 'Logiciels de comptabilite', url: 'https://www.outils-freelance.fr/comparatifs/logiciels-comptabilite' },
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
          {' > '}Logiciels de comptabilite
        </nav>

        <div className="badge-purple mb-3">Mis a jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meilleur logiciel de comptabilite pour freelance et auto-entrepreneur 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Gerer sa comptabilite quand on est independant est une obligation legale, mais ca ne doit pas etre une corvee.
          Les logiciels de comptabilite modernes automatisent la saisie, preparent vos declarations et vous donnent une
          vision claire de votre activite — en quelques minutes par semaine.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Notre selection 2026 des meilleurs logiciels de comptabilite pour freelances et auto-entrepreneurs, testes et compares
          sur les criteres qui comptent vraiment : prix, facilite, automatisation et conformite legale.
        </p>

        {/* Top pick */}
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ToolLogo slug="indy" name="Indy" size="lg" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">N&#176;1 comptabilite auto-entrepreneurs 2026</span>
              <span className="font-bold text-gray-900 text-lg">Indy</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">La comptabilite 100% automatisee via connexion bancaire. Version gratuite tres complete, declarations URSSAF incluses.</p>
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="text-amber-500 font-semibold">&#9733; 4.7/5 (2 840 avis)</span>
              <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; Gratuit a vie</span>
            </div>
          </div>
          <a href="https://www.indy.fr/?ae=1514" target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
            Essayer gratuitement &rarr;
          </a>
        </div>

        {/* Pourquoi utiliser un logiciel */}
        <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser un logiciel de comptabilite ?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          En France, tout auto-entrepreneur est tenu de conserver un <strong>livre des recettes chronologique</strong> et,
          pour les activites d&apos;achat-revente, un registre des achats. En cas de controle URSSAF ou fiscal, vous devrez
          presenter ces documents sous peine de sanctions.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Au-dela de l&apos;obligation legale, un bon logiciel vous aide a piloter votre activite : suivre vos encaissements en temps reel,
          anticiper vos charges URSSAF, facturer plus vite et relancer les impayés automatiquement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { title: 'Obligation legale', desc: 'Livre des recettes conforme, FEC disponible pour controle fiscal', icon: '&#9878;' },
            { title: 'Gain de temps', desc: 'Automatisation via connexion bancaire, declarations en 1 clic', icon: '&#9200;' },
            { title: 'Vision financiere', desc: 'CA en temps reel, prevision des charges URSSAF, tresorerie', icon: '&#128200;' },
          ].map(c => (
            <div key={c.title} className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: c.icon }} />
              <div className="font-semibold text-gray-900 mb-1">{c.title}</div>
              <div className="text-sm text-gray-600">{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Criteres de choix */}
        <h2 className="text-2xl font-bold mb-4">Comment choisir votre logiciel de comptabilite ?</h2>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-10">
          <div className="space-y-4">
            {[
              { n: '1', t: 'Votre statut juridique', d: "Micro-entrepreneur ? Indy gratuit ou Abby suffisent. SASU ou EURL avec TVA ? Pensez a Pennylane ou Indy payant pour une comptabilite complete." },
              { n: '2', t: 'Le volume de transactions', d: "Moins de 50 transactions par mois : la plupart des solutions gratuites conviennent. Au-dela, la connexion bancaire automatique d'Indy ou Pennylane devient indispensable." },
              { n: '3', t: 'Le besoin de collaboration', d: "Si vous avez un expert-comptable, privilegiez Pennylane qui offre une interface de collaboration dediee. Pour gerer seul, Indy ou Abby sont parfaits." },
              { n: '4', t: 'Le budget', d: "De 0EUR/mois (Indy gratuit) a 26EUR/mois (Pennylane). Pour un auto-entrepreneur debutant, commencez gratuit avec Indy — vous pourrez upgrader si besoin." },
            ].map(c => (
              <div key={c.n} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{c.n}</div>
                <div><span className="font-semibold text-gray-900">{c.t} : </span><span className="text-sm text-gray-600">{c.d}</span></div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif des meilleurs logiciels 2026</h2>
        <div className="space-y-4 mb-12">
          {comptaTools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
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
          <h2 className="text-xl font-bold mb-4">Comparatifs detailles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/comparatifs/indy-vs-abby', title: 'Indy vs Abby' },
              { href: '/comparatifs/pennylane-vs-indy', title: 'Pennylane vs Indy' },
              { href: '/comparatifs/logiciels-facturation', title: 'Logiciels de facturation' },
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
