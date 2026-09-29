import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS, toolsOf } from '@/lib/tools'
import { REVIEWS } from '@/lib/reviews'
import { EDITORIAL } from '@/lib/author'
import { FilteredToolList } from '@/components/FilteredToolList'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'
import { StickyBar } from '@/components/StickyBar'
import { ToolLogo } from '@/components/ToolLogo'

// Page unique : facturation, comptabilité et gestion comparent les mêmes outils.
// Les anciennes URL /logiciels-comptabilite et /logiciels-gestion redirigent ici (301).

export const metadata: Metadata = {
  title: 'Logiciel de facturation et comptabilité 2026 : comparatif',
  description: "Abby, Indy, Freebe, VosFactures, Pennylane : comparatif des logiciels de facturation et de comptabilité pour freelances, micro-entreprise ou régime réel. Notes, tarifs et profils.",
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/logiciels-facturation/' },
  openGraph: {
    title: 'Logiciel de facturation et comptabilité 2026 : comparatif',
    description: "Abby, Indy, Freebe, Pennylane : lequel choisir selon votre statut, micro-entreprise ou régime réel.",
    url: 'https://www.outils-freelance.fr/comparatifs/logiciels-facturation/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const tools = [...toolsOf('facturation')]
  .sort((a, b) => (REVIEWS[b.slug]?.score.note ?? 0) - (REVIEWS[a.slug]?.score.note ?? 0))
const fr = (n: number) => n.toFixed(1).replace('.', ',')
const t = (s: string) => TOOLS.find(x => x.slug === s)!

const besoins = [
  {
    statut: 'Micro-entreprise',
    obligation: 'Pas de comptabilité complète : un livre des recettes, un registre des achats si vous vendez des marchandises, et des factures conformes.',
    besoin: 'Facturer, suivre ses encaissements, déclarer son chiffre d\u2019affaires à l\u2019URSSAF.',
    outils: ['abby', 'indy', 'freebe', 'vosfactures'],
  },
  {
    statut: 'Régime réel (EI au réel, EURL, SASU)',
    obligation: 'Comptabilité complète : écritures, bilan, liasse fiscale ou déclaration 2035, TVA, fichier des écritures comptables.',
    besoin: 'Automatiser la saisie, préparer les déclarations, travailler avec un expert-comptable.',
    outils: ['indy', 'pennylane'],
  },
]

const profils = [
  { profil: 'Vous démarrez en micro-entreprise', slug: 'abby', raison: 'Interface guidée, devis et factures en quelques minutes, déclaration URSSAF intégrée' },
  { profil: 'Vous vendez du temps : conseil, développement, graphisme', slug: 'freebe', raison: 'Suivi du temps et rentabilité par mission, relances automatiques' },
  { profil: 'Vous êtes en profession libérale (BNC)', slug: 'indy', raison: 'Comptabilité automatisée par connexion bancaire, déclaration 2035' },
  { profil: 'Vous vendez en ligne (e-commerce)', slug: 'vosfactures', raison: 'Intégrations WooCommerce, PrestaShop, Shopify et Wix, plateforme agréée incluse dès 5 € HT/mois' },
  { profil: 'Vous êtes en société ou avec un expert-comptable', slug: 'pennylane', raison: 'Comptabilité en temps réel et collaboration directe avec le cabinet' },
]

const faq = [
  {
    q: 'Quelle différence entre logiciel de facturation, de comptabilité et de gestion ?',
    a: "Un logiciel de facturation crée devis et factures et suit les paiements. Un logiciel de comptabilité enregistre recettes et dépenses, produit les états comptables et prépare les déclarations. « Logiciel de gestion » désigne en pratique un outil qui fait les deux. Les solutions pour indépendants couvrent aujourd'hui l'ensemble, avec des points forts différents : c'est pourquoi nous les comparons sur une seule page.",
  },
  {
    q: 'Un auto-entrepreneur a-t-il besoin d\u2019un logiciel de comptabilité ?',
    a: "Pas au sens strict : en micro-entreprise, vous n'êtes pas tenu à une comptabilité complète. Vous devez en revanche tenir un livre des recettes, un registre des achats si vous vendez des marchandises, et émettre des factures conformes. Un logiciel de facturation qui tient automatiquement le livre des recettes suffit à couvrir ces obligations.",
  },
  {
    q: 'Existe-t-il une offre gratuite ?',
    a: `Indy affiche une offre de départ gratuite. Les autres proposent une période d'essai : Abby (${t('abby').freeTrial}), Freebe (${t('freebe').freeTrial}), Pennylane (${t('pennylane').freeTrial}). Vérifiez toujours le périmètre de l'offre gratuite ou de l'essai sur le site de l'éditeur : certaines fonctions, comme la connexion bancaire, sont réservées aux formules payantes.`,
  },
  {
    q: 'Ces logiciels gèrent-ils la facturation électronique ?',
    a: "Depuis le 1er septembre 2026, toute entreprise assujettie à la TVA doit pouvoir recevoir des factures électroniques via une plateforme agréée. L'émission devient obligatoire au 1er septembre 2027 pour les micro-entreprises. Avant de choisir, vérifiez que l'outil est raccordé à une plateforme agréée : la liste officielle est publiée sur impots.gouv.fr.",
  },
  {
    q: 'Un logiciel remplace-t-il un expert-comptable ?',
    a: "En micro-entreprise, généralement oui : un bon logiciel couvre les obligations courantes. Au régime réel, et a fortiori en société, un expert-comptable reste recommandé pour le bilan et la liasse fiscale. Les logiciels réduisent alors ses honoraires en automatisant la saisie, sans le remplacer.",
  },
]

export default function LogicielsFacturationPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Comparatifs', url: 'https://www.outils-freelance.fr/comparatifs/' },
        { name: 'Logiciels de facturation et comptabilité', url: 'https://www.outils-freelance.fr/comparatifs/logiciels-facturation/' },
      ]} />
      <FAQSchema faqs={faq} />
      <StickyBar toolSlug="abby" toolName="Abby" toolUrl={t('abby').affiliateUrl} trialLabel={t('abby').freeTrial ?? ''} bg="#00C48C" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link> ›{' '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link> › Facturation et comptabilité
        </nav>

        <p className="text-sm font-medium text-indigo-600 mb-3">Tarifs vérifiés en {EDITORIAL.lastPricingCheck}</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4 text-balance">
          Logiciels de facturation et de comptabilité : le comparatif 2026
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl mb-3 text-pretty">
          Facturer, tenir ses comptes, déclarer à l&apos;URSSAF : les outils pour indépendants font
          aujourd&apos;hui tout cela à la fois. La vraie question n&apos;est pas « facturation ou
          comptabilité », mais ce que votre statut vous impose.
        </p>
        <p className="text-xs text-gray-500 mb-10">
          Classement établi selon{' '}
          <Link href="/methodologie" className="text-indigo-600 hover:underline">notre grille de notation</Link>
          {' '}— notes éditoriales, pas des moyennes d&apos;avis clients.
        </p>

        {/* ── Micro ou réel ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-5">Micro-entreprise ou régime réel : deux besoins différents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {besoins.map(b => (
              <div key={b.statut} className="rounded-3xl p-6 bg-gray-50">
                <div className="font-bold text-gray-900 text-lg mb-3">{b.statut}</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2"><span className="font-semibold text-gray-800">Ce que la loi impose : </span>{b.obligation}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4"><span className="font-semibold text-gray-800">Ce dont vous avez besoin : </span>{b.besoin}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-gray-500">Outils adaptés :</span>
                  {b.outils.map(s => (
                    <Link key={s} href={`/outils/${s}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-white ring-1 ring-gray-200 rounded-lg pl-1 pr-2.5 py-1 hover:ring-indigo-300 transition-all">
                      <ToolLogo slug={s} name={t(s).name} size="xs" />{t(s).name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tableau rapide (données issues de la fiche de chaque outil) ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-5">Le comparatif en un coup d&apos;œil</h2>
          <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Logiciel</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Note</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Prix</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Essai</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                {tools.map(tool => {
                  const note = REVIEWS[tool.slug]?.score.note
                  return (
                    <tr key={tool.slug} className="border-t border-gray-100">
                      <td className="px-4 py-3">
                        <Link href={`/outils/${tool.slug}`} className="flex items-center gap-2.5 font-semibold text-gray-900 hover:text-indigo-600">
                          <ToolLogo slug={tool.slug} name={tool.name} size="sm" />{tool.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 font-semibold tabular-nums">{note ? `${fr(note)}/5` : '—'}</td>
                      <td className="px-4 py-3 text-gray-700">{tool.price}{tool.priceDetail && <div className="text-xs text-gray-400">{tool.priceDetail}</div>}</td>
                      <td className="px-4 py-3 text-gray-600">{tool.freeTrial ?? '—'}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs leading-relaxed">{tool.ideal}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Selon le profil ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-5">Lequel choisir selon votre profil</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {profils.map(p => (
              <Link key={p.profil} href={`/outils/${p.slug}`}
                className="group flex gap-4 items-start rounded-2xl p-5 bg-white ring-1 ring-gray-200/80 hover:ring-indigo-200 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300">
                <ToolLogo slug={p.slug} name={t(p.slug).name} size="lg" />
                <div>
                  <div className="text-sm text-gray-500">{p.profil}</div>
                  <div className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{t(p.slug).name}</div>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">{p.raison}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Détail ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Comparatif détaillé</h2>
          <p className="text-sm text-gray-500 mb-6">Filtrez selon votre profil.</p>
          <FilteredToolList tools={tools} />
        </section>

        {/* ── FAQ ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map(f => (
              <div key={f.q} className="card p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Duels ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Les duels</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: '/comparatifs/indy-vs-abby', title: 'Indy vs Abby' },
              { href: '/comparatifs/freebe-vs-abby', title: 'Freebe vs Abby' },
              { href: '/comparatifs/freebe-vs-indy', title: 'Freebe vs Indy' },
              { href: '/comparatifs/pennylane-vs-indy', title: 'Pennylane vs Indy' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card p-3.5 text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 transition-colors">
                {r.title} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
