import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolRow } from '@/components/ToolCard'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { BreadcrumbSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de facturation freelance developpeur 2026',
  description: 'Quel logiciel de facturation choisir quand on est developpeur freelance ? Comparatif Freebe, Indy, Abby : suivi du temps, missions en regie, tarifs 2026.',
  alternates: { canonical: 'https://www.outils-freelance.fr/logiciel-facturation-freelance-developpeur' },
}

const devTools = TOOLS.filter(t => ['freebe', 'indy', 'abby'].includes(t.slug)).sort((a, b) => b.rating - a.rating)

const faqItems = [
  {
    q: "Comment facturer une mission en regie en tant que developpeur freelance ?",
    a: "En regie, vous facturez a un taux journalier (TJM) pour les jours travailles. Chaque mois ou semaine, vous creez une facture mentionnant le nombre de jours travailles x votre TJM. Freebe simplifie ce processus avec son module de suivi du temps : vous pointez vos jours, et la facture est generee automatiquement."
  },
  {
    q: "Faut-il un logiciel de facturation si on est developpeur en portage salarial ?",
    a: "Non, en portage salarial c'est la societe de portage qui etablit les factures a votre place. Vous n'avez pas besoin d'un logiciel de facturation. Un outil de suivi du temps peut cependant etre utile pour remettre des comptes-rendus d'activite a votre societe de portage."
  },
  {
    q: "Quelle est la difference entre facturation au forfait et facturation a la regie ?",
    a: "En forfait, vous facturez un montant fixe pour la livraison d'un projet (ex: 5 000EUR pour un site web), independamment du temps passe. En regie, vous facturez le temps effectivement passe (TJM x nombre de jours). Le forfait offre plus de visibilite au client, la regie protege le developpeur contre les depassements."
  },
  {
    q: "Freebe permet-il d'envoyer des bons de commande a ses clients ?",
    a: "Oui, Freebe integre la gestion des bons de commande et des contrats. Vous pouvez creer un bon de commande, le faire signer electroniquement par votre client et le conserver dans le logiciel. C'est une protection importante en cas de litige sur le perimetre d'une mission."
  },
  {
    q: "Quel TJM moyen pour un developpeur freelance en France en 2026 ?",
    a: "Selon les specialites et l'experience, le TJM d'un developpeur freelance varie entre 300EUR et 900EUR par jour en France. Les profils full-stack senior, les experts cloud et les architectes se situent entre 600 et 900EUR/jour. Les junior debutent generalement entre 300 et 450EUR/jour."
  },
]

export default function LogicielFacturationDeveloppeurPage() {
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
        { name: 'Logiciels de facturation', url: 'https://www.outils-freelance.fr/comparatifs/logiciels-facturation' },
        { name: 'Logiciel developpeur', url: 'https://www.outils-freelance.fr/logiciel-facturation-freelance-developpeur' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyBar toolSlug="freebe" toolName="Freebe" toolUrl="https://link.freebe.me/Outils-Freelance" trialLabel="2 mois offerts" bg="#4F46E5" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          {' > '}
          <Link href="/comparatifs/logiciels-facturation" className="hover:text-indigo-600">Logiciels de facturation</Link>
          {' > '}Freelance developpeur
        </nav>

        <div className="badge-purple mb-3">Mis a jour avril 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meilleur logiciel de facturation pour freelance developpeur 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          En tant que developpeur freelance, vous avez des besoins specifiques : missions en regie avec suivi du temps, facturation au TJM, gestion des bons de commande et, souvent, un seul client a la fois sur plusieurs mois.
          Votre logiciel doit gerer tout ca simplement.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Contrairement aux artisans qui ont besoin de catalogues de materiaux, les developpeurs freelances ont besoin d&apos;un <strong>suivi du temps precis</strong>, d&apos;une facturation mensuelle automatique et d&apos;un historique des missions propre. Voici les trois meilleurs outils.
        </p>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <ToolLogo slug="freebe" name="Freebe" size="lg" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">Choix developpeurs freelance 2026</span>
              <span className="font-bold text-gray-900 text-lg">Freebe</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Suivi du temps integre, gestion des missions, facturation a la journee ou au forfait. Concu specifiquement pour les freelances en services.</p>
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="text-amber-500 font-semibold">&#9733; 4.6/5</span>
              <span className="text-gray-500">A partir de 9,99EUR/mois</span>
              <span className="text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">&#10003; 2 mois offerts</span>
            </div>
          </div>
          <a href="https://link.freebe.me/Outils-Freelance" target="_blank" rel="nofollow sponsored" className="shrink-0 btn-primary text-sm">
            Essayer &rarr;
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Ce dont un developpeur freelance a besoin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { t: 'Suivi du temps par mission', d: 'Pointer ses heures ou ses jours par projet pour facturer exactement le temps travaille et mesurer sa rentabilite.' },
            { t: 'Facturation regie et forfait', d: 'Generer des factures mensuelles en regie (TJM x jours) et des factures de jalons pour les projets au forfait.' },
            { t: 'Bons de commande', d: 'Creer et faire signer electroniquement les bons de commande avant de demarrer une mission pour se proteger.' },
            { t: 'Tableau de bord rentabilite', d: 'Visualiser son TJM moyen, ses meilleures periodes et les clients les plus rentables sur l\'annee.' },
          ].map(c => (
            <div key={c.t} className="card p-4">
              <div className="font-semibold text-gray-900 mb-1">{c.t}</div>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8 text-sm text-indigo-900">
          <strong>Conseil portage salarial :</strong> En portage salarial, c&apos;est la societe de portage qui facture a votre place. Vous n&apos;avez pas besoin de logiciel de facturation — un simple outil de suivi du temps suffit.
        </div>

        <h2 className="text-2xl font-bold mb-5">Comparatif 2026</h2>
        <div className="space-y-4 mb-12">
          {devTools.map((tool, i) => <ToolRow key={tool.slug} tool={tool} rank={i + 1} />)}
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
          <h2 className="text-xl font-bold mb-4">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/logiciel-facturation-consultant', title: 'Logiciel consultant' },
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
