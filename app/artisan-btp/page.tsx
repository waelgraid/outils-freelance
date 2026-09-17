import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Artisan du bâtiment : gérer sa facturation et son administratif',
  description: "Devis, situation de travaux, TVA 5,5/10/20 %, retenue de garantie, compte pro : le guide complet de la gestion administrative pour artisans du BTP en 2026.",
  alternates: { canonical: 'https://www.outils-freelance.fr/artisan-btp/' },
  openGraph: {
    title: 'Artisan du bâtiment : facturation et administratif — le guide 2026',
    description: "Devis, situation de travaux, TVA travaux, retenue de garantie, logiciels et compte pro : tout ce qu'un artisan du BTP doit maîtriser pour se faire payer.",
    url: 'https://www.outils-freelance.fr/artisan-btp/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png/', width: 1200, height: 630 }],
  },
}

const parcours = [
  {
    etape: 'Le devis',
    resume: "Tout part de là. Un devis signé est le document contractuel qui sert de base à toutes vos situations de travaux. Détaillez poste par poste : c'est ce découpage qui vous permettra de facturer l'avancement.",
    points: ['Un poste = une ligne de situation', 'Mentionner la retenue de garantie si elle s\u2019applique', 'Porter la mention de certification TVA sur le devis'],
    liens: [
      { href: '/blog/mentions-obligatoires-facture-auto-entrepreneur', label: 'Les mentions obligatoires' },
      { href: '/blog/acompte-chantier-pourcentage-legal', label: 'Quel acompte demander' },
    ],
  },
  {
    etape: 'Le bon taux de TVA',
    resume: "5,5 %, 10 % ou 20 % selon la nature des travaux et l'ancienneté du logement. C'est l'erreur qui coûte le plus cher : en cas de contrôle, le rattrapage est à votre charge, pas à celle du client.",
    points: ['Logement de plus de 2 ans pour les taux réduits', 'Mention de certification sur devis/facture, conservée 5 ans', 'Plusieurs taux sur un chantier : détailler par taux'],
    liens: [{ href: '/blog/tva-travaux-10-ou-20', label: 'Quel taux appliquer' }],
  },
  {
    etape: 'La situation de travaux',
    resume: "Facturer l'avancement plutôt que d'attendre la fin du chantier. C'est l'outil de trésorerie central du BTP : sur trois mois de chantier, elle évite d'avancer matériaux et main-d'œuvre.",
    points: ['Facturer le cumul réalisé moins le cumul déjà facturé', 'Numérotation séquentielle avec vos autres factures', 'Toujours référencer le devis initial'],
    liens: [{ href: '/blog/facture-situation-travaux', label: 'Méthode et exemple chiffré' }],
  },
  {
    etape: 'La retenue de garantie',
    resume: "5 % du montant HT consignés pendant un an après la réception. Beaucoup d'artisans ne les récupèrent jamais, simplement faute d'avoir suivi le calendrier.",
    points: ['5 % du HT, jamais du TTC', 'Point de départ : le PV de réception signé', 'Substituable par une caution bancaire'],
    liens: [
      { href: '/blog/retenue-de-garantie-travaux', label: 'Calcul et restitution' },
      { href: '/blog/pv-reception-travaux-modele', label: 'Le PV de réception' },
    ],
  },
  {
    etape: 'Les assurances obligatoires',
    resume: "La décennale est obligatoire dès le premier chantier, sans exception de statut. Son absence est punie de six mois d'emprisonnement et 75 000 € d'amende — et vous laisse personnellement exposé sur dix ans.",
    points: ['Souscrire avant l\u2019ouverture du chantier', 'Références de l\u2019assureur obligatoires sur devis et factures', 'Sous-traitants : non soumis, mais responsables contractuellement'],
    liens: [{ href: '/blog/assurance-decennale-auto-entrepreneur-prix', label: 'Obligation, prix par métier et mentions' }],
  },
  {
    etape: 'Le compte professionnel',
    resume: "Obligatoire au-delà de 10 000 € de CA pendant deux années consécutives. Pour un artisan, le critère décisif est souvent la possibilité de déposer des espèces et d'encaisser des chèques.",
    points: ['Dépôt d\u2019espèces : Qonto via le réseau partenaire', 'Séparer perso et pro simplifie le suivi de CA', 'Connexion automatique au logiciel de facturation'],
    liens: [
      { href: '/blog/meilleure-banque-pro-artisan', label: 'Quel compte pro choisir' },
      { href: '/comparatifs/banques-pro', label: 'Comparatif des banques pro' },
    ],
  },
  {
    etape: 'La facturation électronique',
    resume: "Réception obligatoire depuis le 1er septembre 2026, émission au 1er septembre 2027 pour les micro-entreprises. Vos situations adressées à des clients professionnels devront transiter par une plateforme agréée.",
    points: ['Un PDF par email ne suffira plus en B2B', 'Le PPF public gratuit n\u2019existe plus', 'Les factures aux particuliers ne sont pas concernées'],
    liens: [{ href: '/blog/facturation-electronique-auto-entrepreneur', label: 'Ce qui change et quand' }],
  },
  {
    etape: 'La sous-traitance',
    resume: "Si vous intervenez pour une entreprise principale et non pour le maître d'ouvrage, vous facturez sans TVA : c'est le donneur d'ordre qui la déclare. Le mécanisme est obligatoire, pas optionnel.",
    points: ['Mention article 283-2 nonies du CGI obligatoire', 'Ne pas confondre avec la franchise en base', 'Déclarer l\u2019opération même sans TVA due'],
    liens: [{ href: '/blog/autoliquidation-tva-sous-traitance-btp', label: 'Autoliquidation : qui facture quoi' }],
  },
]

const besoinsBTP = [
  { besoin: 'Devis détaillé par poste', abby: '✅', indy: '✅', freebe: '⚠️ Basique' },
  { besoin: 'Situation de travaux avec cumuls', abby: '✅', indy: '⚠️ Manuel', freebe: '❌' },
  { besoin: 'Retenue de garantie', abby: '✅', indy: '⚠️ Manuel', freebe: '❌' },
  { besoin: 'TVA multi-taux sur un document', abby: '✅', indy: '✅', freebe: '✅' },
  { besoin: 'Devis depuis le chantier (mobile)', abby: '✅', indy: '✅', freebe: '✅' },
  { besoin: 'Acomptes et avenants', abby: '✅', indy: '✅', freebe: '⚠️' },
  { besoin: 'Déclaration URSSAF intégrée', abby: '✅', indy: '✅', freebe: '✅' },
  { besoin: 'Version gratuite', abby: '✅', indy: '✅', freebe: '❌' },
]

const metiers = [
  { href: '/logiciel-facturation-artisan', label: 'Artisan', desc: 'Tous corps de métier du bâtiment' },
  { href: '/logiciel-facturation-electricien', label: 'Électricien', desc: 'Devis chantier, catalogue matériel' },
  { href: '/logiciel-facturation-auto-entrepreneur', label: 'Auto-entrepreneur', desc: 'Micro-entreprise, plafonds, URSSAF' },
]

const faqItems = [
  {
    q: 'Un artisan auto-entrepreneur peut-il faire des situations de travaux ?',
    a: "Oui, sans restriction de statut. La seule vigilance porte sur le plafond de 83 600 € de chiffre d'affaires annuel en prestation de services, qui est vite atteint quand on cumule plusieurs chantiers. Au-delà de deux années consécutives de dépassement, vous basculez au régime réel.",
  },
  {
    q: 'Quel est le meilleur logiciel de facturation pour un artisan du bâtiment ?',
    a: "Abby est le plus complet sur les besoins spécifiques du BTP : situations de travaux liées au devis initial, cumuls automatiques, retenue de garantie ligne à ligne et TVA multi-taux sur un même document. Indy est excellent sur la comptabilité mais gère les situations de façon plus manuelle. Freebe est conçu pour les prestations intellectuelles, pas pour le chantier.",
  },
  {
    q: 'Faut-il une assurance décennale en auto-entreprise ?',
    a: "Oui. La garantie décennale est obligatoire pour tous les professionnels réalisant des travaux de construction touchant à la solidité de l'ouvrage ou à sa destination : maçons, couvreurs, charpentiers, électriciens, plombiers. Le statut d'auto-entrepreneur n'exonère de rien. L'attestation doit figurer sur vos devis et factures.",
  },
  {
    q: 'Quand puis-je appliquer la TVA à 10 % au lieu de 20 % ?',
    a: "Sur des travaux d'amélioration, de transformation, d'aménagement ou d'entretien réalisés dans un logement achevé depuis plus de deux ans. Le client certifie ces conditions par une mention portée sur le devis ou la facture — les attestations Cerfa ont été supprimées le 16 février 2025. Conservez le document cinq ans. Les travaux de rénovation énergétique relèvent du taux de 5,5 %, et la construction neuve reste à 20 %.",
  },
  {
    q: 'Comment se faire payer plus vite sur un chantier long ?',
    a: "Trois leviers : prévoir un acompte à la signature du devis, facturer par situations mensuelles plutôt qu'au solde, et remplacer la retenue de garantie par une caution bancaire de bonne exécution — ce qui vous permet d'encaisser 100 % de chaque situation. Ces trois points se négocient au devis, pas après.",
  },
]

export default function ArtisanBtpPage() {
  const outils = ['abby', 'indy', 'qonto'].map(s => TOOLS.find(t => t.slug === s)!).filter(Boolean)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Artisan BTP', url: 'https://www.outils-freelance.fr/artisan-btp/' },
      ]} />
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Artisan BTP
        </nav>

        <div className="badge-purple mb-3">Mis à jour septembre 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Artisan du bâtiment : le guide complet 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Le BTP a ses propres règles de facturation : situations de travaux, taux de TVA multiples,
          retenue de garantie, acomptes, réception de chantier. Aucune ne s&apos;improvise, et chacune
          conditionne le moment où vous êtes réellement payé.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Cette page rassemble tout ce qu&apos;un artisan doit maîtriser, du devis jusqu&apos;à la
          restitution de la retenue de garantie, avec les outils adaptés à chaque étape.
        </p>


        {/* Essentiel */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-14">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">À retenir</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• La <strong>décennale</strong> doit être souscrite avant l&apos;ouverture du premier chantier</li>
            <li>• Chaque situation facture le <strong>cumul réalisé moins le cumul déjà facturé</strong></li>
            <li>• La retenue de garantie est de <strong>5 % du HT</strong>, jamais du TTC</li>
            <li>• Depuis février 2025, les <strong>attestations Cerfa de TVA sont supprimées</strong></li>
          </ul>
        </div>

        {/* 1. S'installer */}
        <h2 className="text-2xl font-bold mb-2">1. S&apos;installer comme artisan</h2>
        <div className="space-y-3 mb-5">
          {[
            ['La qualification professionnelle', "La loi du 5 juillet 1996 réserve la plupart des métiers du bâtiment aux titulaires d'un CAP, BEP ou diplôme équivalent, ou justifiant de trois ans d'expérience professionnelle dans le métier. À défaut, l'activité doit être exercée sous le contrôle effectif et permanent d'une personne qualifiée."],
            ['L\u2019immatriculation', "Déclaration au guichet unique de l'INPI, avec immatriculation au répertoire des métiers. Le stage de préparation à l'installation n'est plus obligatoire."],
            ['Le choix du statut', "La micro-entreprise permet de démarrer simplement sous 83 600 € de CA en prestation de services. Sa limite est réelle dans le bâtiment : les matériaux ne sont pas déductibles, ce qui pèse lourd sur un chantier à forte proportion de fournitures."],
          ].map(([t, d]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 mb-1">{t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/devenir-auto-entrepreneur" className="text-sm font-semibold text-indigo-600 hover:underline">Créer sa micro-entreprise →</Link>
          <Link href="/blog/charges-auto-entrepreneur" className="text-sm font-semibold text-indigo-600 hover:underline">Les charges réelles →</Link>
        </div>

        {/* Parcours */}
        <h2 className="text-2xl font-bold mb-2">2. Le parcours administratif d&apos;un chantier</h2>
        <p className="text-sm text-gray-500 mb-6">Six étapes, dans l&apos;ordre où elles se présentent.</p>
        <div className="space-y-4 mb-14">
          {parcours.map((p, i) => (
            <div key={p.etape} className="border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-bold text-gray-900 text-lg">{p.etape}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.resume}</p>
              <ul className="space-y-1.5 mb-4">
                {p.points.map(pt => (
                  <li key={pt} className="text-xs text-gray-500 flex items-start gap-2">
                    <span className="text-indigo-500 shrink-0">→</span>{pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                {p.liens.map(l => (
                  <Link key={l.href} href={l.href}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
                    {l.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tableau besoins BTP */}
        <h2 className="text-2xl font-bold mb-2">3. Quel logiciel pour les besoins du BTP ?</h2>
        <p className="text-sm text-gray-500 mb-5">
          Les fonctionnalités qui comptent réellement sur un chantier, pas celles des pages marketing.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Besoin chantier</th>
                <th className="px-4 py-3 border border-gray-200 text-center">
                  <div className="flex items-center gap-2 justify-center"><ToolLogo slug="abby" name="Abby" size="xs" /><span>Abby</span></div>
                </th>
                <th className="px-4 py-3 border border-gray-200 text-center">
                  <div className="flex items-center gap-2 justify-center"><ToolLogo slug="indy" name="Indy" size="xs" /><span>Indy</span></div>
                </th>
                <th className="px-4 py-3 border border-gray-200 text-center">
                  <div className="flex items-center gap-2 justify-center"><ToolLogo slug="freebe" name="Freebe" size="xs" /><span>Freebe</span></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {besoinsBTP.map((r, i) => (
                <tr key={r.besoin} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{r.besoin}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-xs text-gray-600">{r.abby}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-xs text-gray-600">{r.indy}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-xs text-gray-600">{r.freebe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-12">
          Évaluation issue de nos tests sur comptes réels — voir <Link href="/methodologie" className="text-indigo-600 hover:underline">notre méthodologie</Link>.
        </p>

        {/* Outils recommandés */}
        <h2 className="text-2xl font-bold mb-5">4. Les outils adaptés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {outils.map(t => (
            <div key={t.slug} className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <ToolLogo slug={t.slug} name={t.name} size="lg" />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.price}</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{t.tagline}</p>
              <a href={t.affiliateUrl} target="_blank" rel="nofollow sponsored"
                className="btn-primary block text-center text-xs py-2.5">
                Voir {t.name} &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Par métier */}
        <h2 className="text-2xl font-bold mb-5">5. Par métier</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-14">
          {metiers.map(m => (
            <Link key={m.href} href={m.href}
              className="card p-4 hover:border-indigo-200 group">
              <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-indigo-600">{m.label} &rarr;</div>
              <div className="text-xs text-gray-400 leading-snug">{m.desc}</div>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
          {faqItems.map((f, i) => (
            <div key={i} className="card p-5">
              <div className="font-semibold text-gray-900 mb-2">{f.q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA calculateur */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="font-bold text-gray-900 mb-2">Combien vous reste-t-il après cotisations ?</div>
          <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
            Estimez vos cotisations URSSAF sur votre chiffre d&apos;affaires de chantier, taux 2026 officiels.
          </p>
          <Link href="/comparatifs/mutuelles-freelance" className="text-sm font-semibold text-indigo-600 hover:underline block mb-4">Mutuelle et prévoyance pour artisans &rarr;</Link>
          <Link href="/calculateur-urssaf" className="btn-primary inline-flex text-sm">
            Calculateur URSSAF gratuit &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
