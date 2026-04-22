import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'


const faqItems = [
  {
    q: 'Alan ou Harmonie Mutuelle : laquelle rembourse mieux les soins dentaires ?',
    a: "Harmonie Mutuelle offre generalement de meilleures garanties dentaires qu'Alan, notamment pour les protheses et les soins complexes. Alan se distingue plutot par la rapidite de remboursement (24h) et son experience digitale. Si les soins dentaires sont votre priorite, Harmonie est souvent plus avantageux."
  },
  {
    q: 'Alan est-il adapté aux familles avec enfants ?',
    a: "Oui, Alan propose des formules familiales avec des tarifs par enfant. L'application mobile permet de gérer toute la famille, de suivre les remboursements et d'acceder a la teleconsultation pour tous les membres. C'est une option interessante pour les freelances avec enfants."
  },
  {
    q: 'Peut-on deduire ses cotisations Alan ou Harmonie de ses revenus ?',
    a: "Oui, sous le regime Madelin (BNC ou BIC), vos cotisations de complementaire sante peuvent etre deduites de votre revenu imposable dans la limite de plafonds. Ce dispositif ne s'applique pas aux micro-entrepreneurs. Renseignez-vous aupres d'un expert-comptable pour optimiser votre situation."
  },
  {
    q: 'Quelle est la periode de carence avec Alan et Harmonie Mutuelle ?',
    a: 'La plupart des garanties prennent effet immediatement avec Alan et Harmonie. Certaines garanties specifiques (optique, dentaire) peuvent avoir une periode de carence de 3 a 6 mois selon la formule choisie. Verifiez les conditions generales avant de souscrire.'
  },
  {
    q: 'Alan propose-t-il la prevoyance en plus de la mutuelle sante ?',
    a: "Alan propose principalement la complementaire sante. Pour la prevoyance (arret maladie, invalidite, deces), vous devrez souscrire une assurance separee. C'est indispensable pour les freelances qui n'ont pas de couverture employeur en cas d'arret de travail prolonge."
  }
]
export const metadata: Metadata = {
  title: 'Alan vs Harmonie Mutuelle 2026 : quelle mutuelle choisir ?',
  description: 'Comparatif Alan vs Harmonie Mutuelle 2026 : tarifs, remboursements, garanties. Notre verdict pour les freelances et auto-entrepreneurs.',
  alternates: { canonical: 'https://www.outils-freelance.fr/comparatifs/alan-vs-harmonie' },
}

export default function AlanVsHarmoniePage() {
  const alan = TOOLS.find(t => t.slug === 'alan')!
  const harmonie = TOOLS.find(t => t.slug === 'harmonie')!

  const criteria = [
    { label: 'Prix de départ',        a: '39€/mois',               b: '35€/mois',              winner: 'harm' },
    { label: 'Remboursements',        a: '24h via app',            b: '5-10 jours',            winner: 'alan' },
    { label: 'Téléconsultation',      a: 'Incluse tous plans',     b: 'Selon formule',         winner: 'alan' },
    { label: 'Application mobile',    a: 'Excellente',             b: 'Correcte',              winner: 'alan' },
    { label: 'Réseau de soins',       a: 'Libre (sans réseau)',    b: 'Réseau étendu',         winner: 'harm' },
    { label: 'Couverture dentaire',   a: 'Bonne',                  b: 'Très bonne',            winner: 'harm' },
    { label: 'Couverture optique',    a: 'Bonne',                  b: 'Très bonne',            winner: 'harm' },
    { label: 'Contrat Madelin',       a: 'Oui',                    b: 'Oui',                   winner: 'egal' },
    { label: 'Interlocuteur humain',  a: '100% digital',           b: 'Conseiller dédié',      winner: 'harm' },
    { label: 'Expérience digitale',   a: 'Référence du marché',    b: 'Interface correcte',    winner: 'alan' },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Mutuelles freelance', url: 'https://www.outils-freelance.fr/comparatifs/mutuelles-freelance' },
        { name: 'Alan vs Harmonie Mutuelle', url: 'https://www.outils-freelance.fr/comparatifs/alan-vs-harmonie' },
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

      <StickyBar toolSlug="alan" toolName="Alan" toolUrl="https://alan.com/?ref=outils-freelance" trialLabel="30 jours satisfait ou remboursé" bg="#00BCD4" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' › '}
          <Link href="/comparatifs/mutuelles-freelance" className="hover:text-indigo-600">Mutuelles</Link>
          {' › '}Alan vs Harmonie
        </nav>

        <div className="badge-purple mb-3">Comparatif 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Alan vs Harmonie Mutuelle : laquelle choisir en 2026 ?</h1>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Alan et Harmonie Mutuelle sont nos deux recommandations pour les freelances et auto-entrepreneurs. Deux approches opposées : Alan mise sur le 100% digital et la rapidité, Harmonie sur le réseau de soins et le rapport qualité-prix.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {[alan, harmonie].map((tool, i) => (
            <div key={tool.slug} className={`card p-6 ${i === 0 ? 'ring-2 ring-cyan-400' : ''}`}>
              {i === 0 && <div className="badge-blue mb-3">Notre coup de coeur digital</div>}
              {i === 1 && <div className="badge-green mb-3">Meilleur prix</div>}
              <div className="flex items-center gap-3 mb-4">
                <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{tool.name}</div>
                  <div className="text-amber-500 text-sm">{'★'} {tool.rating}/5</div>
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

        <h2 className="text-2xl font-bold mb-5">Comparatif critère par critère</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <div className="px-4 py-3">Critère</div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="alan" name="Alan" size="sm" /><span>Alan</span></div>
            <div className="px-4 py-3 flex items-center gap-2"><ToolLogo slug="harmonie" name="Harmonie" size="sm" /><span>Harmonie</span></div>
            <div className="px-4 py-3">Gagnant</div>
          </div>
          {criteria.map((c, i) => (
            <div key={c.label} className={`grid grid-cols-4 border-b border-gray-50 text-sm ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
              <div className="px-4 py-3 font-medium text-gray-700">{c.label}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'alan' ? 'font-semibold text-cyan-700' : ''}`}>{c.a}</div>
              <div className={`px-4 py-3 text-gray-600 ${c.winner === 'harm' ? 'font-semibold text-emerald-700' : ''}`}>{c.b}</div>
              <div className="px-4 py-3">
                {c.winner === 'alan' && <span className="badge bg-cyan-100 text-cyan-700">Alan</span>}
                {c.winner === 'harm' && <span className="badge bg-emerald-100 text-emerald-700">Harmonie</span>}
                {c.winner === 'egal' && <span className="text-xs text-gray-400">Egalité</span>}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-5">Notre verdict</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="alan" name="Alan" size="sm" /><span className="font-bold">Choisissez Alan si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous voulez être remboursé en 24h via votre téléphone</li>
              <li>&#10003; Vous utilisez régulièrement la téléconsultation</li>
              <li>&#10003; Vous valorisez une application mobile de qualité</li>
              <li>&#10003; Vous préférez tout gérer sans paperasse ni conseiller</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3"><ToolLogo slug="harmonie" name="Harmonie" size="sm" /><span className="font-bold">Choisissez Harmonie si...</span></div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&#10003; Vous avez des dépenses importantes en optique ou dentaire</li>
              <li>&#10003; Votre budget est serré et vous voulez le meilleur prix</li>
              <li>&#10003; Vous préférez un interlocuteur humain dédié</li>
              <li>&#10003; Vous voulez profiter d un réseau de soins partenaires</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-10">
          <p className="text-sm text-gray-600 mb-4">
            Priorité à l expérience digitale et aux remboursements rapides : <strong>Alan</strong>.
            Priorité au prix et aux garanties dentaire/optique : <strong>Harmonie</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={alan.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary inline-flex">Visiter Alan &rarr;</a>
            <a href={harmonie.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-secondary inline-flex">Visiter Harmonie &rarr;</a>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/outils/alan', title: 'Avis Alan', tag: 'Avis' },
              { href: '/outils/harmonie', title: 'Avis Harmonie', tag: 'Avis' },
              { href: '/blog/mutuelle-auto-entrepreneur', title: 'Mutuelle auto-entrepreneur', tag: 'Article' },
              { href: '/comparatifs/mutuelles-freelance', title: 'Toutes les mutuelles', tag: 'Catégorie' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
                <span className="text-xs text-gray-400 shrink-0">{r.tag}</span>
                <span className="text-sm font-medium group-hover:text-indigo-600">{r.title} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
