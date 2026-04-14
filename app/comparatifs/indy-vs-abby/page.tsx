import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Indy vs Abby 2026 : lequel choisir pour votre micro-entreprise ?',
  description: 'Comparatif Indy vs Abby 2026 : fonctionnalites, tarifs, points forts et faibles. Tests complets et verdict pour choisir le meilleur logiciel auto-entrepreneur.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/indy-vs-abby' },
}

const faqItems = [
  {
    q: 'Indy est-il vraiment gratuit ?',
    a: 'Oui, Indy propose une version gratuite a vie qui inclut la facturation illimitee, le livre des recettes, les declarations URSSAF et la connexion bancaire de base. La version payante (a partir de 20EUR/mois) ajoute la comptabilite avancee, le bilan et la gestion de TVA.'
  },
  {
    q: 'Abby ou Indy : lequel est le mieux pour un auto-entrepreneur qui debute ?',
    a: "Pour un debutant, Abby est souvent plus accessible grace a son interface tres guidee et sa prise en main rapide. Indy convient mieux aux profils qui veulent automatiser rapidement leur comptabilite via connexion bancaire. Les deux proposent un essai gratuit, testez les deux !"
  },
  {
    q: "Peut-on changer de logiciel facilement en cours d'annee ?",
    a: "Oui, les deux logiciels permettent d'exporter vos donnees (factures, livre des recettes) en PDF ou CSV. La migration est possible a tout moment, meme en cours d'exercice fiscal. Il est conseille de faire la transition en debut de trimestre."
  },
  {
    q: 'Indy et Abby sont-ils conformes a la loi anti-fraude TVA ?',
    a: "Oui, les deux logiciels sont certifies et conformes a la legislation francaise, notamment la loi anti-fraude TVA 2018 et la future facturation electronique obligatoire. Ils generent des factures avec toutes les mentions legales requises."
  },
  {
    q: 'Quelle est la difference principale entre Indy et Abby ?',
    a: "Indy est davantage oriente comptabilite automatisee (connexion bancaire puissante, declarations integrees) et convient tres bien aux freelances BNC. Abby est plus complet pour la gestion quotidienne (devis, factures, paiement en ligne) et mieux adapte aux artisans et commercants."
  },
  {
    q: 'Les deux logiciels gerent-ils la facturation electronique obligatoire 2026 ?',
    a: "Oui, Indy et Abby sont tous les deux certifies Plateforme de Dematerialisation Partenaire (PDP) pour la facturation electronique obligatoire qui concerne progressivement toutes les entreprises francaises a partir de 2026."
  },
]

export default function IndyVsAbbyPage() {
  const tools = TOOLS.filter(t => ['indy', 'abby'].includes(t.slug))
  const indy = tools.find(t => t.slug === 'indy') ?? tools[0]
  const abby = tools.find(t => t.slug === 'abby') ?? tools[1]

  const criteria = [
    { label: 'Version gratuite',        a: 'Tres complete',      b: 'Disponible',            winner: 'indy' },
    { label: 'Connexion bancaire',       a: 'Automatique',        b: 'Disponible',            winner: 'indy' },
    { label: 'Declarations URSSAF',      a: 'Integrees',          b: 'Integrees',             winner: 'egal' },
    { label: 'Facturation electronique', a: 'Certifie PDP',       b: 'Certifie PDP',          winner: 'egal' },
    { label: 'Paiement en ligne',        a: 'Via plan payant',    b: 'Inclus',                winner: 'abby' },
    { label: 'Application mobile',       a: 'iOS + Android',      b: 'iOS + Android',         winner: 'egal' },
    { label: 'Support client',           a: '4 min de reponse',   b: 'Chat uniquement',       winner: 'indy' },
    { label: 'Prix depart',              a: 'Gratuit',            b: 'Gratuit / 5,40EUR/mois', winner: 'indy' },
    { label: 'Adapte artisans',          a: 'Moins adapte',       b: 'Bien adapte',           winner: 'abby' },
    { label: 'Rapport qualite-prix',     a: 'Excellent',          b: 'Excellent',             winner: 'egal' },
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
        { name: 'Indy vs Abby', url: 'https://www.outils-freelance.fr/comparatifs/indy-vs-abby' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="abby" toolName="Abby" toolUrl="https://c3po.link/QsNZwhTBgx" trialLabel="30 jours gratuits" bg="#00C48C" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>
          {' > '}Indy vs Abby
        </nav>

        <div className="badge-purple mb-3">Comparatif 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Indy vs Abby : lequel choisir en 2026 ?</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Indy et Abby sont les deux logiciels de facturation et comptabilite les plus populaires chez les auto-entrepreneurs francais.
          Tous deux proposent une version gratuite, une interface intuitive et la gestion des declarations URSSAF. Mais leurs points forts
          different sensiblement selon votre profil.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Nous avons teste les deux solutions en profondeur. Voici notre comparatif complet pour vous aider a faire le bon choix.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
          <div className="font-bold text-amber-900 mb-2">&#9888; Verdict rapide</div>
          <p className="text-sm text-amber-800">
            <strong>Choisissez Indy</strong> si vous etes freelance ou profession liberale et voulez automatiser votre comptabilite via connexion bancaire.
            <br />
            <strong>Choisissez Abby</strong> si vous etes artisan, commercant ou auto-entrepreneur cherchant un outil complet avec paiement en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[indy, abby].map((tool, i) => (
            <div key={tool.slug} className={`card p-6 ${i === 1 ? 'ring-2 ring-indigo-500' : ''}`}>
              {i === 1 && <div className="badge-purple mb-3">Notre choix n&#176;1</div>}
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

        <h2 className="text-2xl font-bold mb-4">Indy : la comptabilite automatisee pour freelances</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indy (anciennement Georges) est un logiciel de comptabilite et facturation lance en 2017 et utilise par plus de 300 000 independants en France.
          Son point fort majeur est la <strong>connexion bancaire automatique</strong> : en reliant votre compte bancaire, Indy categorise vos transactions,
          genere votre livre des recettes et prepare vos declarations URSSAF sans aucune saisie manuelle.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          La version gratuite d&apos;Indy est consideree comme la plus complete du marche : facturation illimitee, declarations de CA, livre des recettes,
          tableau de bord. Tout ce dont un micro-entrepreneur a besoin sans payer un centime. Le plan payant (a partir de 20EUR/mois) ajoute
          la gestion de TVA, le bilan et la liasse fiscale.
        </p>

        <h2 className="text-2xl font-bold mb-4">Abby : l&apos;outil tout-en-un pour auto-entrepreneurs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Abby est un logiciel de gestion lance en 2020 qui a conquis plus de 100 000 auto-entrepreneurs en moins de 4 ans.
          Son approche mise sur une interface tres guidee qui accompagne l&apos;utilisateur pas-a-pas dans sa gestion quotidienne.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Abby excelle dans la gestion commerciale : devis, factures, relances, paiement en ligne integre, suivi clients.
          Il est particulierement bien adapte aux artisans, commercants et auto-entrepreneurs avec une activite diverse.
          Son tarif de depart (5,40EUR/mois en annuel) en fait l&apos;un des outils les plus accessibles du marche.
        </p>

        <h2 className="text-2xl font-bold mb-5">Comparatif critere par critere</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="px-4 py-3">Critere</div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="indy" name="Indy" size="sm" /><span>Indy</span></div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="abby" name="Abby" size="sm" /><span>Abby</span></div>
            <div className="px-4 py-3">Gagnant</div>
          </div>
          {criteria.map((c, i) => (
            <div key={c.label} className={`grid grid-cols-4 border-b border-gray-50 text-sm ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
              <div className="px-4 py-3 font-medium text-gray-700">{c.label}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'indy' ? 'font-semibold text-indigo-700' : ''}`}>{c.a}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'abby' ? 'font-semibold text-emerald-700' : ''}`}>{c.b}</div>
              <div className="px-4 py-3">
                {c.winner === 'indy' && <span className="badge bg-indigo-100 text-indigo-700">Indy</span>}
                {c.winner === 'abby' && <span className="badge bg-emerald-100 text-emerald-700">Abby</span>}
                {c.winner === 'egal' && <span className="text-xs text-gray-400">Egalite</span>}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-5">Tarifs detailles 2026</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4"><ToolLogo slug="indy" name="Indy" size="sm" /><span className="font-bold">Tarifs Indy</span></div>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Gratuit', price: '0 EUR/mois', green: true },
                { label: 'Micro-entrepreneur', price: '20 EUR/mois' },
                { label: 'EI / EIRL', price: '40 EUR/mois' },
                { label: 'Societe (SASU, EURL)', price: '80 EUR/mois' },
              ].map((t, i, arr) => (
                <div key={t.label} className={`flex justify-between pb-2 ${i < arr.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <span className="text-gray-600">{t.label}</span>
                  <span className={`font-semibold ${t.green ? 'text-green-600' : ''}`}>{t.price}</span>
                </div>
              ))}
            </div>
            <a href={indy.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-secondary w-full justify-center mt-4 text-sm">
              Essayer Indy gratuit &rarr;
            </a>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4"><ToolLogo slug="abby" name="Abby" size="sm" /><span className="font-bold">Tarifs Abby</span></div>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Essai', price: '30 jours gratuits', green: true },
                { label: 'Starter (annuel)', price: '5,40 EUR/mois' },
                { label: 'Pro (annuel)', price: '11 EUR/mois' },
                { label: 'Sans engagement', price: 'a partir de 9 EUR/mois' },
              ].map((t, i, arr) => (
                <div key={t.label} className={`flex justify-between pb-2 ${i < arr.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <span className="text-gray-600">{t.label}</span>
                  <span className={`font-semibold ${t.green ? 'text-green-600' : ''}`}>{t.price}</span>
                </div>
              ))}
            </div>
            <a href={abby.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary w-full justify-center mt-4 text-sm">
              Tester Abby 30 jours &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="indy" name="Indy" size="sm" /><span className="font-bold">Choisissez Indy si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous voulez automatiser votre comptabilite via connexion bancaire</li>
              <li>&#10003; Vous etes freelance ou profession liberale BNC</li>
              <li>&#10003; Vous cherchez la version gratuite la plus complete du marche</li>
              <li>&#10003; Vous avez un fort volume de transactions a categoriser</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="abby" name="Abby" size="sm" /><span className="font-bold">Choisissez Abby si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous etes artisan, commercant ou auto-entrepreneur polyvalent</li>
              <li>&#10003; Vous voulez le paiement en ligne integre dans vos factures</li>
              <li>&#10003; Vous cherchez le meilleur rapport qualite-prix global</li>
              <li>&#10003; Vous debutez et preferez une interface tres guidee</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-12">
          <p className="text-sm text-gray-600 mb-4">Notre recommandation pour la majorite des auto-entrepreneurs : <strong>Abby</strong> — meilleur rapport qualite-prix et interface tres accessible.</p>
          <a href={abby.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary inline-flex">
            Tester Abby gratuitement &rarr;
          </a>
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
              { href: '/comparatifs/freebe-vs-abby', title: 'Freebe vs Abby' },
              { href: '/comparatifs/pennylane-vs-indy', title: 'Pennylane vs Indy' },
              { href: '/comparatifs/logiciels-facturation', title: 'Tous les logiciels' },
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
