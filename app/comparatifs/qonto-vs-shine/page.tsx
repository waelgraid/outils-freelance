import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'


const faqItems = [
  {
    q: 'Qonto ou Shine : lequel est le moins cher pour un freelance ?',
    a: "Shine est moins cher avec un plan Basic a 7,90EUR/mois, contre 11EUR HT/mois pour Qonto. Sur un an, la difference est d'environ 37EUR. Cependant, Qonto offre plus de fonctionnalites (depot d'especes, integrations comptables avancees) qui peuvent justifier la difference de prix selon votre activite."
  },
  {
    q: 'Peut-on ouvrir un compte Qonto ou Shine sans KBIS ?',
    a: "Pour les auto-entrepreneurs, un numero SIRET et une piece d'identite suffisent pour ouvrir un compte. Pas besoin de Kbis (qui n'existe que pour les societes). L'ouverture se fait en ligne en moins de 10 minutes chez Qonto comme chez Shine."
  },
  {
    q: 'Qonto ou Shine proposent-ils des cartes virtuelles ?',
    a: "Oui, les deux proposent des cartes virtuelles pour les achats en ligne. Qonto offre plus d'options (cartes virtuelles illimitees sur certains plans). Shine propose une carte virtuelle liee a votre compte physique. Tres utile pour securiser vos achats en ligne et suivre vos depenses par categorie."
  },
  {
    q: 'Qonto integre-t-il les logiciels de comptabilite comme Pennylane ou Indy ?',
    a: "Oui, Qonto s'integre nativement avec Pennylane, Indy, Abby et la plupart des logiciels comptables du marche. L'integration synchronise automatiquement vos transactions bancaires avec votre logiciel de comptabilite, eliminant la saisie manuelle."
  },
  {
    q: 'Peut-on deposer des cheques avec Qonto ou Shine ?',
    a: "Qonto permet le depot de cheques via son service postal (envoi par courrier). Shine propose egalement le depot de cheques par voie postale. Les delais sont generalement de 3 a 5 jours ouvrés. Ce n'est pas aussi pratique qu'une banque traditionnelle, mais ca reste possible."
  }
]
export const metadata: Metadata = {
  title: 'Qonto vs Shine 2026 : quelle banque pro choisir ?',
  description: 'Comparatif Qonto vs Shine 2026 : tarifs, fonctionnalites, avantages. Notre verdict pour choisir la meilleure banque pro freelance.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/qonto-vs-shine' },
}

export default function QontoVsShinePage() {
  const tools = TOOLS.filter(t => ['qonto', 'shine'].includes(t.slug))
  const qonto = tools.find(t => t.slug === 'qonto') ?? tools[0]
  const shine = tools.find(t => t.slug === 'shine') ?? tools[1]

  const criteria = [
    { label: 'IBAN francais',        a: 'Oui',                    b: 'Oui',                  winner: 'egal' },
    { label: 'Prix mensuel',         a: 'A partir de 11EUR HT',   b: 'A partir de 7,90EUR',  winner: 'shine' },
    { label: 'Carte Visa',           a: 'Incluse',                b: 'Incluse',              winner: 'egal' },
    { label: 'Facturation integree', a: 'Gratuite',               b: 'Gratuite',             winner: 'egal' },
    { label: 'Depot especes',        a: 'Oui (bureau tabac)',     b: 'Non',                  winner: 'qonto' },
    { label: 'Integrations compta',  a: 'Nombreuses',             b: 'Bonnes',               winner: 'qonto' },
    { label: 'Interface mobile',     a: 'Tres complete',          b: 'Excellente',           winner: 'shine' },
    { label: 'Nombre de clients',    a: '+500 000',               b: '+100 000',             winner: 'qonto' },
    { label: 'Support',              a: 'Chat + email',           b: 'Chat + accompagnement',winner: 'shine' },
    { label: 'Essai gratuit',        a: '30 jours',               b: '30 jours',             winner: 'egal' },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Banques pro', url: 'https://www.outils-freelance.fr/comparatifs/banques-pro' },
        { name: 'Qonto vs Shine', url: 'https://www.outils-freelance.fr/comparatifs/qonto-vs-shine' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        }) }}
      />

      <StickyBar toolSlug="qonto" toolName="Qonto" toolUrl="https://qonto.com/fr/?ref=outils-freelance" trialLabel="30 jours gratuits" bg="#FF5A50" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs/banques-pro" className="hover:text-indigo-600">Banques pro</Link>
          {' > '}Qonto vs Shine
        </nav>

        <div className="badge-blue mb-3">Comparatif 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Qonto vs Shine : quelle banque pro choisir en 2026 ?</h1>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Qonto et Shine dominent le marche des banques pro pour independants en France. IBAN francais, carte Visa, facturation integree : les deux cochent les cases essentielles. Mais laquelle vous convient le mieux ?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[qonto, shine].map((tool, i) => (
            <div key={tool.slug} className={`card p-6 ${i === 0 ? 'ring-2 ring-indigo-500' : ''}`}>
              {i === 0 && <div className="badge-purple mb-3">Notre choix n&#176;1</div>}
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

        <h2 className="text-2xl font-bold mb-5">Comparatif critere par critere</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="px-4 py-3">Critere</div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="qonto" name="Qonto" size="sm" /><span>Qonto</span></div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="shine" name="Shine" size="sm" /><span>Shine</span></div>
            <div className="px-4 py-3">Gagnant</div>
          </div>
          {criteria.map((c, i) => (
            <div key={c.label} className={`grid grid-cols-4 border-b border-gray-50 text-sm ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
              <div className="px-4 py-3 font-medium text-gray-700">{c.label}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'qonto' ? 'font-semibold text-red-600' : ''}`}>{c.a}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'shine' ? 'font-semibold text-emerald-700' : ''}`}>{c.b}</div>
              <div className="px-4 py-3">
                {c.winner === 'qonto' && <span className="badge bg-red-100 text-red-700">Qonto</span>}
                {c.winner === 'shine' && <span className="badge bg-emerald-100 text-emerald-700">Shine</span>}
                {c.winner === 'egal' && <span className="text-xs text-gray-400">Egalite</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="qonto" name="Qonto" size="sm" /><span className="font-bold">Choisissez Qonto si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous avez besoin de deposer des especes</li>
              <li>&#10003; Vous voulez les meilleures integrations comptables</li>
              <li>&#10003; Votre activite est structuree avec plusieurs collaborateurs</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="shine" name="Shine" size="sm" /><span className="font-bold">Choisissez Shine si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous demarrez votre activite et cherchez le meilleur prix</li>
              <li>&#10003; Vous gerez tout depuis votre smartphone</li>
              <li>&#10003; Pas besoin de depot d especes</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-10">
          <p className="text-sm text-gray-600 mb-4">Pour un freelance debutant : <strong>Shine</strong> pour le prix. Pour une activite etablie : <strong>Qonto</strong> pour la completude.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={qonto.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary inline-flex">Tester Qonto &rarr;</a>
            <a href={shine.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-secondary inline-flex">Tester Shine &rarr;</a>
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
              { href: '/outils/qonto', title: 'Avis Qonto' },
              { href: '/outils/shine', title: 'Avis Shine' },
              { href: '/comparatifs/banques-pro', title: 'Toutes les banques pro' },
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
