import type { Metadata } from 'next'
import { TOOLS } from '@/lib/tools'
import { FilteredToolList } from '@/components/FilteredToolList'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'
import { ToolLogo } from '@/components/ToolLogo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meilleure mutuelle freelance auto-entrepreneur 2026 — Comparatif',
  description: 'Comparatif des meilleures mutuelles pour freelances et auto-entrepreneurs en 2026. Alan, Harmonie, Malakoff Humanis : remboursements, tarifs et avis complets.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/mutuelles-freelance' },
}

const tools = TOOLS.filter(t => t.category === 'mutuelle').sort((a, b) => b.rating - a.rating)
const topTool = tools[0]

const faqItems = [
  {
    q: "Un auto-entrepreneur est-il oblige de prendre une mutuelle ?",
    a: "Non, la mutuelle n'est pas obligatoire pour les auto-entrepreneurs. Contrairement aux salaries dont l'employeur finance au moins 50% de la complementaire sante, vous etes libre de choisir ou non une mutuelle. Cependant, sans complementaire, vous supportez l'integralite des depassements d'honoraires, frais optiques et dentaires non rembourses par la Secu."
  },
  {
    q: "Les cotisations de mutuelle sont-elles deductibles pour un freelance ?",
    a: "Oui, sous certaines conditions. Si vous etes en BNC ou BIC (non-micro), vous pouvez deduire vos cotisations de mutuelle sous le regime Madelin dans la limite de plafonds fiscaux. En micro-entreprise, la deduction n'est pas applicable mais le cout reste modeste. Renseignez-vous aupres d'un expert-comptable."
  },
  {
    q: "Quelle est la difference entre mutuelle et prevoyance pour un freelance ?",
    a: "La mutuelle complementaire sante couvre les frais medicaux (medecin, hopital, optique, dentaire) que la Secu ne rembourse pas. La prevoyance couvre les risques de perte de revenus (arret maladie, invalidite, deces). Les deux sont distinctes et complementaires. Un freelance sans prevoyance n'est pas couvert en cas d'arret de travail prolonge."
  },
  {
    q: "Alan rembourse-t-il bien les soins dentaires et optiques ?",
    a: "Alan propose des niveaux de garantie variables selon le forfait choisi. Les remboursements dentaire et optique sont corrects mais pas les plus eleves du marche — Alan se distingue surtout par sa rapidite (remboursements en 24h) et son experience digitale. Pour une couverture dentaire renforcee, Harmonie Mutuelle ou Malakoff Humanis peuvent etre plus adaptes."
  },
  {
    q: "A quel moment souscrire une mutuelle quand on se lance en freelance ?",
    a: "Des que vous creez votre auto-entreprise et que vous n'etes plus couvert par la mutuelle d'un employeur. Si vous quittez un emploi salarie, vous beneficiez de la portabilite de votre mutuelle pendant 12 mois maximum. Au-dela, souscrivez une nouvelle complementaire. Alan permet une souscription en ligne en quelques minutes."
  },
]

export default function MutuellesPage() {
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
        { name: 'Mutuelles freelance', url: 'https://www.outils-freelance.fr/comparatifs/mutuelles-freelance' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="alan" toolName="Alan" toolUrl="https://alan.com/?ref=outils-freelance" trialLabel="30 jours satisfait ou rembourse" bg="#00BCD4" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs" className="hover:text-indigo-600">Comparatifs</Link>
          {' > '}Mutuelles freelance
        </nav>

        <div className="badge-purple mb-3">Mis a jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meilleure mutuelle pour freelance et auto-entrepreneur (2026)</h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          En tant qu&apos;independant, vous n&apos;etes pas couvert par la mutuelle d&apos;un employeur. Choisir une bonne complementaire sante est essentiel
          pour etre bien protege sans exploser votre budget — surtout si vous avez des frais dentaires, optiques ou des enfants a charge.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Notre comparatif des meilleures mutuelles pour independants en 2026, avec une attention particuliere aux remboursements reels,
          aux tarifs et a la qualite du service client.
        </p>

        {topTool && (
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <ToolLogo slug={topTool.slug} name={topTool.name} size="lg" />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">Notre choix n&#176;1</span>
                <span className="font-bold text-gray-900 text-lg">{topTool.name}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{topTool.tagline}</p>
              <div className="flex items-center gap-3 flex-wrap text-xs">
                <span className="text-amber-500 font-semibold">&#9733; {topTool.rating}/5</span>
                <span className="text-gray-500">{topTool.price}</span>
                {topTool.freeTrial && <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; {topTool.freeTrial}</span>}
              </div>
            </div>
            <a href={topTool.affiliateUrl} target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
              Visiter le site &rarr;
            </a>
          </div>
        )}

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-8 text-sm text-amber-800">
          <strong>Bon a savoir :</strong> Les cotisations de mutuelle sont deductibles de votre revenu imposable sous le regime Madelin (BNC ou BIC). Renseignez-vous aupres d&apos;un expert-comptable.
        </div>

        <h2 className="text-2xl font-bold mb-4">Comment choisir sa mutuelle quand on est freelance ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { t: 'Taux de remboursement', d: 'Verifiez les garanties optique et dentaire en euros reels, pas seulement en % de la base Secu — la difference peut etre enorme.' },
            { t: 'Telemedecine incluse', d: 'Alan inclut la teleconsultation dans tous ses forfaits. Pratique pour eviter les deplacements pour des consultations simples.' },
            { t: 'Delai de remboursement', d: 'Alan rembourse en 24h via son app. Les mutuelles traditionnelles peuvent prendre plusieurs jours.' },
            { t: 'Rapport qualite-prix', d: 'Harmonie Mutuelle offre d\'excellentes garanties a partir de 35EUR/mois — le meilleur rapport qualite-prix du comparatif.' },
          ].map(c => (
            <div key={c.t} className="card p-4">
              <div className="font-semibold text-gray-900 mb-1">{c.t}</div>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-2">Comparatif detaille</h2>
        <p className="text-sm text-gray-500 mb-6">Les meilleures mutuelles pour independants en 2026.</p>
        <FilteredToolList tools={tools} />

        <h2 className="text-2xl font-bold mb-6 mt-12">Questions frequentes</h2>
        <div className="space-y-4 mb-12">
          {faqItems.map((f, i) => (
            <div key={i} className="card p-5">
              <div className="font-semibold text-gray-900 mb-2">{f.q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Comparatifs associes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/comparatifs/alan-vs-harmonie', title: 'Alan vs Harmonie' },
              { href: '/comparatifs/banques-pro', title: 'Banques pro' },
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
