import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Freebe vs Indy 2026 : quel logiciel choisir pour son activité freelance ?',
  description: 'Freebe ou Indy ? Comparatif complet 2026 : tarifs, fonctionnalités, suivi du temps, comptabilité. Notre verdict pour choisir le meilleur outil freelance.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/freebe-vs-indy' },
}

const faqItems = [
  {
    q: 'Indy est-il gratuit contrairement à Freebe ?',
    a: "Oui, Indy propose une version gratuite permanente très complète (facturation illimitée, connexion bancaire, déclarations URSSAF). Freebe ne propose pas de version gratuite permanente mais offre 2 mois d'abonnement en guise d'essai. Après ces 2 mois, Freebe est à 9,99€/mois."
  },
  {
    q: 'Freebe propose-t-il le suivi du temps contrairement à Indy ?',
    a: "Oui, c'est la différence clé entre les deux outils. Freebe intègre un module de suivi du temps par mission qui permet de pointer ses heures, mesurer la rentabilité par client et générer des factures basées sur le temps passé. Indy ne propose pas cette fonctionnalité."
  },
  {
    q: 'Lequel est le mieux pour un freelance développeur ?',
    a: "Freebe est généralement mieux adapté aux développeurs freelances qui travaillent en régie (facturation à la journée ou au temps passé) car le suivi du temps est intégré. Indy est idéal si vous êtes en forfait et que vous voulez automatiser votre comptabilité gratuitement."
  },
  {
    q: 'Peut-on gérer la déclaration 2035 avec Freebe ou Indy ?',
    a: "Indy gère nativement la déclaration 2035 pour les professions libérales BNC — c'est l'un de ses points forts. Freebe ne propose pas cette fonctionnalité : il est orienté gestion commerciale et facturation plutôt que comptabilité fiscale avancée."
  },
  {
    q: 'Freebe et Indy sont-ils compatibles avec la facturation électronique 2026 ?',
    a: "Oui, les deux logiciels sont conformes à la facturation électronique obligatoire. Freebe est certifié PDP (Plateforme de Dématérialisation Partenaire) et Indy gère également ce format. Vous n'aurez rien à faire lors de la transition obligatoire."
  },
]

export default function FreebeVsIndyPage() {
  const freebe = TOOLS.find(t => t.slug === 'freebe')!
  const indy = TOOLS.find(t => t.slug === 'indy')!

  const criteria = [
    { label: 'Version gratuite',         a: '2 mois offerts',        b: 'Gratuit a vie',          winner: 'indy' },
    { label: 'Prix de depart',           a: '9,99EUR/mois',          b: '0EUR/mois',               winner: 'indy' },
    { label: 'Suivi du temps',           a: 'Module complet',        b: 'Non disponible',          winner: 'freebe' },
    { label: 'Gestion des missions',     a: 'Complete',              b: 'Non disponible',          winner: 'freebe' },
    { label: 'Connexion bancaire',       a: 'Disponible',            b: 'Automatique',             winner: 'indy' },
    { label: 'Declarations URSSAF',      a: 'Intégrées',             b: 'Intégrées',               winner: 'egal' },
    { label: 'Declaration 2035 (BNC)',   a: 'Non disponible',        b: 'Incluse',                 winner: 'indy' },
    { label: 'Facturation electronique', a: 'Certifié PDP',          b: 'Certifié PDP',            winner: 'egal' },
    { label: 'Paiement en ligne',        a: 'Inclus',                b: 'Plan payant',             winner: 'freebe' },
    { label: 'CRM missions',             a: 'Intégré',               b: 'Non disponible',          winner: 'freebe' },
    { label: 'Application mobile',       a: 'iOS + Android',         b: 'iOS + Android',           winner: 'egal' },
    { label: 'Support client',           a: 'Reactif',               b: 'Excellent (4 min)',       winner: 'indy' },
    { label: 'Rapport qualite-prix',     a: 'Bon',                   b: 'Excellent',               winner: 'indy' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs' },
        { name: 'Freebe vs Indy', url: 'https://www.outils-freelance.fr/comparatifs/freebe-vs-indy' },
      ]} />
      <StickyBar toolSlug="freebe" toolName="Freebe" toolUrl="https://link.freebe.me/Outils-Freelance" trialLabel="2 mois offerts" bg="#0061FF" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>
          {' > '}Freebe vs Indy
        </nav>

        <div className="badge-purple mb-3">Comparatif 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Freebe vs Indy : lequel choisir en 2026 ?</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Freebe et Indy s&apos;adressent tous deux aux freelances et indépendants, mais avec des philosophies opposées.
          Indy mise sur l&apos;automatisation comptable et la gratuité. Freebe mise sur la gestion complète des missions et le suivi du temps.
          Voici comment choisir selon votre profil.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Si vous facturez au temps passé ou à la journée et voulez mesurer votre rentabilité mission par mission, Freebe n&apos;a pas d&apos;équivalent.
          Si vous voulez automatiser votre comptabilité gratuitement sans vous prendre la tête, Indy est imbattable.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
          <div className="font-bold text-amber-900 mb-2">&#9888; Verdict rapide</div>
          <p className="text-sm text-amber-800">
            <strong>Choisissez Freebe</strong> si vous facturez en régie (TJM), avez besoin de suivi du temps et de CRM missions — avec 2 mois d'essai offerts.
            <br />
            <strong>Choisissez Indy</strong> si vous voulez automatiser votre comptabilité gratuitement, surtout si vous êtes profession libérale BNC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[freebe, indy].map((tool, i) => (
            <div key={tool.slug} className={`card p-6 ${i === 0 ? 'ring-2 ring-blue-400' : ''}`}>
              {i === 0 && <div className="badge-blue mb-3">Meilleur pour la régie</div>}
              {i === 1 && <div className="badge-purple mb-3">Meilleur gratuit</div>}
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

        <h2 className="text-2xl font-bold mb-4">Freebe : la gestion de missions pour freelances en services</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Freebe est conçu pour les freelances qui ont besoin de plus qu&apos;un simple logiciel de facturation.
          Son module de <strong>suivi du temps</strong> permet de pointer ses heures par mission, calculer sa rentabilité horaire réelle
          et générer des factures basées sur le temps passé — essentiel pour les développeurs, consultants et designers qui travaillent en régie.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Freebe inclut aussi un <strong>CRM simplifié</strong> pour gérer vos prospects et clients, le suivi complet du cycle de vente
          (devis signé → bon de commande → facturation → relances), et des analytics de rentabilité par client et par mission.
          À 9,99€/mois, c&apos;est l&apos;outil le plus complet pour les freelances en services — avec 2 mois d'essai offerts.
        </p>

        <h2 className="text-2xl font-bold mb-4">Indy : la comptabilité automatisée gratuite pour indépendants</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indy (anciennement Georges) est la référence pour automatiser sa comptabilité sans payer. Sa version gratuite couvre
          la facturation illimitée, la connexion bancaire automatique, les déclarations URSSAF et le livre des recettes.
          Pour un micro-entrepreneur, c&apos;est largement suffisant.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Le point fort distinctif d&apos;Indy face à Freebe est la <strong>déclaration 2035 pour les professions libérales BNC</strong>
          (médecins, avocats, consultants en régime BNC). Indy automatise complètement ce processus complexe, ce que Freebe ne propose pas.
          La synchronisation bancaire d&apos;Indy est aussi plus puissante, avec catégorisation intelligente de toutes les transactions.
        </p>

        <h2 className="text-2xl font-bold mb-5">Comparatif critère par critère</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="px-4 py-3">Critère</div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="freebe" name="Freebe" size="sm" /><span>Freebe</span></div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="indy" name="Indy" size="sm" /><span>Indy</span></div>
            <div className="px-4 py-3">Gagnant</div>
          </div>
          {criteria.map((c, i) => (
            <div key={c.label} className={`grid grid-cols-4 border-b border-gray-50 text-sm ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
              <div className="px-4 py-3 font-medium text-gray-700">{c.label}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'freebe' ? 'font-semibold text-blue-700' : ''}`}>{c.a}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'indy' ? 'font-semibold text-indigo-700' : ''}`}>{c.b}</div>
              <div className="px-4 py-3">
                {c.winner === 'freebe' && <span className="badge bg-blue-100 text-blue-700">Freebe</span>}
                {c.winner === 'indy' && <span className="badge bg-indigo-100 text-indigo-700">Indy</span>}
                {c.winner === 'egal' && <span className="text-xs text-gray-400">Egalité</span>}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-5">Tarifs comparés 2026</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4"><ToolLogo slug="freebe" name="Freebe" size="sm" /><span className="font-bold">Tarifs Freebe</span></div>
            <div className="space-y-3 text-sm">
              {[
                { label: '2 mois d\'essai offerts', price: 'Puis 9,99€/mois', green: true },
                { label: 'Solo', price: '9,99 EUR/mois' },
                { label: 'Solo (annuel)', price: '7,99 EUR/mois' },
                { label: 'Pro', price: '16,99 EUR/mois' },
              ].map((t, i, arr) => (
                <div key={t.label} className={`flex justify-between pb-2 ${i < arr.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <span className="text-gray-600">{t.label}</span>
                  <span className={`font-semibold ${t.green ? 'text-green-600' : ''}`}>{t.price}</span>
                </div>
              ))}
            </div>
            <a href={freebe.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary w-full justify-center mt-4 text-sm">
              2 mois offerts sur Freebe &rarr;
            </a>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-4"><ToolLogo slug="indy" name="Indy" size="sm" /><span className="font-bold">Tarifs Indy</span></div>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Gratuit (a vie)', price: '0 EUR/mois', green: true },
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="freebe" name="Freebe" size="sm" /><span className="font-bold">Choisissez Freebe si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous facturez en régie (TJM à la journée ou au temps passé)</li>
              <li>&#10003; Vous voulez suivre la rentabilité de chaque mission et client</li>
              <li>&#10003; Vous avez besoin d&apos;un CRM pour gérer prospects et missions</li>
              <li>&#10003; Vous êtes développeur, designer, consultant ou rédacteur freelance</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="indy" name="Indy" size="sm" /><span className="font-bold">Choisissez Indy si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous voulez la version gratuite la plus complète du marché</li>
              <li>&#10003; Vous êtes profession libérale BNC (déclaration 2035 incluse)</li>
              <li>&#10003; Vous voulez la connexion bancaire la plus automatisée</li>
              <li>&#10003; Vous facturez au forfait et n&apos;avez pas besoin de suivi du temps</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-12">
          <p className="text-sm text-gray-600 mb-4">
            <strong>Freelance en régie</strong> : Freebe, avec suivi du temps et gestion des missions.
            <strong> Profession libérale ou forfait</strong> : Indy gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={freebe.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary inline-flex">
              2 mois offerts sur Freebe &rarr;
            </a>
            <a href={indy.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-secondary inline-flex">
              Essayer Indy gratuitement &rarr;
            </a>
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
              { href: '/comparatifs/freebe-vs-abby', title: 'Freebe vs Abby' },
              { href: '/comparatifs/indy-vs-abby', title: 'Indy vs Abby' },
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
