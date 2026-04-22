import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'


const faqItems = [
  {
    q: "Freebe est-il moins cher qu'Abby ?",
    a: "Non, Abby est moins cher. Freebe demarre a 9,99EUR/mois (ou 7,99EUR en annuel), tandis qu'Abby propose un plan Starter a 5,40EUR/mois en annuel. Abby dispose aussi d'une version gratuite permanente, ce que Freebe n'offre pas (seulement 30 jours d'essai). En revanche, Freebe offre des fonctionnalites de suivi du temps absentes chez Abby."
  },
  {
    q: 'Freebe propose-t-il un suivi du temps intégré ?',
    a: "Oui, c'est l'une des grandes forces de Freebe. Vous pouvez pointer vos heures directement dans l'application, par mission ou par client, et génèrer une facture basee sur le temps pointe. C'est une fonctionnalite cle pour les freelances en services qui facturent au temps passe."
  },
  {
    q: 'Abby est-il adapté aux freelances creatifs (designers, redacteurs) ?',
    a: 'Oui, Abby convient bien aux freelances creatifs pour la facturation pure. En revanche, il ne propose pas de suivi du temps ni de gestion de missions, contrairement a Freebe. Si vous avez besoin de suivre vos heures par projet, Freebe est plus adapté.'
  },
  {
    q: 'Peut-on migrer de Freebe vers Abby (ou inversement) ?',
    a: "Oui, les deux logiciels permettent d'exporter vos donnees (factures, contacts) en PDF ou CSV. La migration est possible a tout moment. Il est conseille de migrer en debut d'exercice fiscal pour simplifier la comptabilite."
  },
  {
    q: 'Lequel de Freebe ou Abby est le plus adapté pour un artisan ?',
    a: "Abby est clairement plus adapté pour les artisans. Il gere les devis sur mobile, les taux de TVA multiples (10% et 20%), les acomptes et la facturation de materiaux. Freebe est concu pour les freelances en services et n'est pas optimise pour les metiers de l'artisanat."
  }
]
export const metadata: Metadata = {
  title: 'Freebe vs Abby 2026 : quel logiciel pour les freelances ?',
  description: 'Comparatif Freebe vs Abby 2026 : fonctionnalites, tarifs, avantages. Notre verdict pour choisir le meilleur outil de gestion pour freelances.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/freebe-vs-abby' },
}

export default function FreebeVsAbbyPage() {
  const tools = TOOLS.filter(t => ['freebe', 'abby'].includes(t.slug))
  const freebe = tools.find(t => t.slug === 'freebe') ?? tools[0]
  const abby = tools.find(t => t.slug === 'abby') ?? tools[1]

  const criteria = [
    { label: 'Offre decouverte',          a: '2 mois offerts',         b: 'Permanente',           winner: 'abby' },
    { label: 'Prix de depart',           a: '9,99EUR/mois',           b: '0EUR / 5,40EUR/mois',  winner: 'abby' },
    { label: 'Suivi du temps',           a: 'Intégré',                b: 'Non disponible',       winner: 'freebe' },
    { label: 'Gestion des missions',     a: 'Complete',               b: 'Basique',              winner: 'freebe' },
    { label: 'Facturation electronique', a: 'Certifié',               b: 'Certifié PA',          winner: 'abby' },
    { label: 'Connexion bancaire',       a: 'Disponible',             b: 'Disponible',           winner: 'egal' },
    { label: 'Declarations URSSAF',      a: 'Intégrées',              b: 'Intégrées',            winner: 'egal' },
    { label: 'Paiement en ligne',        a: 'Inclus',                 b: 'Sur plan payant',      winner: 'freebe' },
    { label: 'Adapté artisans',          a: 'Non',                    b: 'Oui',                  winner: 'abby' },
    { label: 'Rapport qualite-prix',     a: 'Bon',                    b: 'Excellent',            winner: 'abby' },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs' },
        { name: 'Freebe vs Abby', url: 'https://www.outils-freelance.fr/comparatifs/freebe-vs-abby' },
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

      <StickyBar toolSlug="freebe" toolName="Freebe" toolUrl="https://link.freebe.me/Outils-Freelance" trialLabel="2 mois offerts" bg="#0061FF" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>
          {' > '}Freebe vs Abby
        </nav>

        <div className="badge-purple mb-3">Comparatif 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Freebe vs Abby : quel logiciel pour les freelances en 2026 ?</h1>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Freebe mise sur la gestion des missions et le suivi du temps, Abby sur le rapport qualite-prix et la completude. Voici notre comparatif detaille.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[freebe, abby].map((tool, i) => (
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

        <h2 className="text-2xl font-bold mb-5">Comparatif critere par critere</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="px-4 py-3">Critere</div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="freebe" name="Freebe" size="sm" /><span>Freebe</span></div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="abby" name="Abby" size="sm" /><span>Abby</span></div>
            <div className="px-4 py-3">Gagnant</div>
          </div>
          {criteria.map((c, i) => (
            <div key={c.label} className={`grid grid-cols-4 border-b border-gray-50 text-sm ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
              <div className="px-4 py-3 font-medium text-gray-700">{c.label}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'freebe' ? 'font-semibold text-blue-700' : ''}`}>{c.a}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'abby' ? 'font-semibold text-emerald-700' : ''}`}>{c.b}</div>
              <div className="px-4 py-3">
                {c.winner === 'freebe' && <span className="badge bg-blue-100 text-blue-700">Freebe</span>}
                {c.winner === 'abby' && <span className="badge bg-emerald-100 text-emerald-700">Abby</span>}
                {c.winner === 'egal' && <span className="text-xs text-gray-400">Egalite</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="freebe" name="Freebe" size="sm" /><span className="font-bold">Choisissez Freebe si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous êtes freelance en services (dev, design, conseil)</li>
              <li>&#10003; Vous facturez au temps passe ou a la journee</li>
              <li>&#10003; Vous voulez suivre la rentabilite de chaque mission</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="abby" name="Abby" size="sm" /><span className="font-bold">Choisissez Abby si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous cherchez un outil 100% gratuit pour demarrer</li>
              <li>&#10003; Vous êtes artisan, commercant ou auto-entrepreneur polyvalent</li>
              <li>&#10003; Vous voulez la certification Plateforme Agreee</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-10">
          <p className="text-sm text-gray-600 mb-4"><strong>Freelance en services</strong> : Freebe. <strong>Auto-entrepreneur généraliste</strong> : Abby.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={freebe.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary inline-flex">2 mois offerts sur Freebe &rarr;</a>
            <a href={abby.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-secondary inline-flex">Tester Abby &rarr;</a>
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
          <h2 className="text-xl font-bold mb-4">Liens utiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/blog/abby-avis', title: 'Avis Abby 2026' },
              { href: '/blog/freebe-avis', title: 'Avis Freebe 2026' },
              { href: '/comparatifs/indy-vs-abby', title: 'Indy vs Abby' },
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
