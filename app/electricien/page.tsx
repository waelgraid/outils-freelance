import type { Metadata } from 'next'
import { EDITORIAL } from '@/lib/author'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Électricien indépendant : décennale, TVA, devis et facturation',
  description: "Guide 2026 de l'électricien à son compte : qualification obligatoire, assurance décennale, TVA travaux, devis de chantier, RGE et outils de gestion adaptés.",
  alternates: { canonical: 'https://www.outils-freelance.fr/electricien/' },
  openGraph: {
    title: 'Électricien indépendant 2026 : le guide complet',
    description: "Qualification, décennale, TVA travaux, devis de chantier et RGE : le guide de l'électricien à son compte.",
    url: 'https://www.outils-freelance.fr/electricien/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const faqItems = [
  {
    q: 'Faut-il un diplôme pour s\u2019installer électricien ?',
    a: "Oui. L'électricité fait partie des activités du bâtiment réglementées par la loi du 5 juillet 1996 : l'exercice suppose un CAP, BEP ou diplôme équivalent dans le métier, ou une expérience professionnelle d'au moins trois ans acquise en qualité de dirigeant, salarié qualifié ou travailleur indépendant. À défaut, l'activité doit être exercée sous le contrôle effectif et permanent d'une personne qualifiée.",
  },
  {
    q: 'L\u2019assurance décennale est-elle obligatoire pour un électricien ?',
    a: "Oui, sans exception de statut. L'installation électrique relève de la garantie décennale car un défaut peut rendre le logement impropre à sa destination. L'assurance doit être souscrite avant l'ouverture du premier chantier, et ses références — assureur, numéro de contrat, couverture géographique — doivent figurer sur vos devis et vos factures.",
  },
  {
    q: 'Quel taux de TVA appliquer sur une rénovation électrique ?',
    a: "Généralement 10 % pour des travaux d'amélioration ou d'entretien dans un logement achevé depuis plus de deux ans. Le taux de 5,5 % s'applique aux travaux de rénovation énergétique et à ceux qui leur sont indissociablement liés. La construction neuve, les locaux professionnels et les logements de moins de deux ans restent à 20 %.",
  },
  {
    q: 'La qualification RGE est-elle nécessaire ?',
    a: "Elle n'est pas obligatoire pour exercer, mais elle conditionne l'accès aux aides publiques de vos clients : MaPrimeRénov', CEE, éco-prêt à taux zéro. Sur l'installation de bornes de recharge, de pompes à chaleur ou de panneaux photovoltaïques, son absence vous exclut d'une part importante du marché.",
  },
  {
    q: 'Qu\u2019est-ce que le consuel et qui le demande ?',
    a: "L'attestation de conformité, visée par le Consuel, est requise pour toute installation électrique neuve ou entièrement rénovée avant sa mise sous tension par le gestionnaire de réseau. C'est généralement l'installateur qui établit l'attestation, le maître d'ouvrage qui la transmet. Anticipez ce délai dans votre planning de chantier.",
  },
]

export default function ElectricienPage() {
  const outils = ['abby', 'indy', 'qonto'].map(s => TOOLS.find(t => t.slug === s)!).filter(Boolean)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Électricien indépendant', url: 'https://www.outils-freelance.fr/electricien/' },
      ]} />
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Électricien indépendant
        </nav>

        <div className="badge-purple mb-3">Mis à jour {EDITORIAL.lastUpdate}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Électricien indépendant : le guide complet 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          S&apos;installer électricien impose des obligations qu&apos;un freelance classique ne
          connaît pas : une qualification exigée par la loi, une assurance décennale sans laquelle
          vous ne pouvez pas ouvrir un chantier, et des règles de TVA propres aux travaux.
        </p>

        {/* Essentiel */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-14">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">À retenir</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Diplôme ou 3 ans d&apos;expérience</strong> exigés : l&apos;électricité est une activité réglementée</li>
            <li>• La <strong>décennale</strong> doit être souscrite avant l&apos;ouverture du premier chantier</li>
            <li>• Ses références sont <strong>obligatoires sur les devis et factures</strong></li>
            <li>• Un devis signé chez le client interdit tout <strong>encaissement avant 7 jours</strong></li>
          </ul>
        </div>

        {/* 1. S'installer */}
        <h2 className="text-2xl font-bold mb-2">1. Les conditions pour s&apos;installer</h2>
        <div className="space-y-3 mb-5">
          {[
            ['La qualification professionnelle', "L'électricité relève des activités du bâtiment réglementées par la loi du 5 juillet 1996. Il faut un CAP, un BEP ou un diplôme équivalent, ou trois ans d'expérience professionnelle dans le métier. Sans cela, l'activité doit être exercée sous le contrôle effectif et permanent d'une personne qualifiée."],
            ['L\u2019immatriculation', "Déclaration au guichet unique de l'INPI, avec immatriculation au répertoire des métiers. Le stage de préparation à l'installation n'est plus obligatoire, mais reste proposé par les chambres de métiers."],
            ['Le choix du statut', "La micro-entreprise convient pour démarrer, sous 83 600 € de chiffre d'affaires en prestation de services. Attention : l'achat de matériel n'y est pas déductible, ce qui pèse lourd sur un métier où les fournitures représentent une part importante du chantier."],
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

        {/* 2. Assurances */}
        <h2 className="text-2xl font-bold mb-2">2. Les assurances obligatoires</h2>
        <div className="border-l-4 border-indigo-600 bg-indigo-50/50 rounded-r-2xl p-6 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>La décennale n&apos;est pas négociable.</strong> Une installation électrique
            défectueuse peut rendre un logement impropre à sa destination : vous relevez donc de la
            garantie décennale au sens de l&apos;article 1792 du Code civil.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Elle doit être effective <strong>avant l&apos;ouverture du chantier</strong> — une
            souscription en cours ne couvre rien. Son absence est punie de six mois
            d&apos;emprisonnement et 75 000 € d&apos;amende, et vous laisse personnellement exposé
            pendant dix ans.
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Comptez généralement entre 700 et 1 300 € par an pour un électricien en micro-entreprise.
          Vérifiez que <strong>toutes vos activités réelles</strong> figurent au contrat : un
          électricien qui pose ponctuellement des bornes de recharge ou du photovoltaïque sans
          l&apos;avoir déclaré n&apos;est pas couvert sur ces travaux.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/assurance-decennale-auto-entrepreneur-prix" className="text-sm font-semibold text-indigo-600 hover:underline">Décennale : prix et mentions →</Link>
        </div>

        {/* 3. Devis et chantier */}
        <h2 className="text-2xl font-bold mb-2">3. Devis, acompte et règles du démarchage</h2>
        <div className="border-l-4 border-amber-500 bg-amber-50/60 rounded-r-2xl p-6 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>Le piège du devis signé chez le client.</strong> Dès lors que la signature a lieu
            ailleurs que dans vos locaux, il s&apos;agit d&apos;un contrat hors établissement. Le
            client dispose de <strong>14 jours de rétractation</strong>, et vous ne pouvez
            <strong> encaisser aucun paiement avant 7 jours</strong>.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Repartir avec le chèque d&apos;acompte le jour même est une infraction. Et si vous
            n&apos;avez pas mentionné le droit de rétractation sur le devis, le délai passe de 14
            jours à <strong>douze mois</strong>.
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Pour démarrer plus vite légalement, faites signer une demande écrite d&apos;exécution
          anticipée mentionnant que le client renonce à tout ou partie de son droit de rétractation.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/acompte-chantier-pourcentage-legal" className="text-sm font-semibold text-indigo-600 hover:underline">Acompte de chantier →</Link>
          <Link href="/blog/facture-situation-travaux" className="text-sm font-semibold text-indigo-600 hover:underline">Situation de travaux →</Link>
        </div>

        {/* 4. TVA */}
        <h2 className="text-2xl font-bold mb-2">4. Appliquer le bon taux de TVA</h2>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Taux</th>
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Cas typiques en électricité</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['5,5 %', 'Rénovation énergétique : régulation de chauffage, équipements liés à la performance énergétique'],
                ['10 %', 'Mise aux normes, remplacement de tableau, rénovation d\u2019installation dans un logement de plus de 2 ans'],
                ['20 %', 'Construction neuve, logement de moins de 2 ans, locaux professionnels, borne de recharge en extérieur selon les cas'],
              ].map(([t, d], i) => (
                <tr key={t} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 text-center font-bold text-indigo-700">{t}</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600 text-xs">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          <strong>Depuis février 2025, les attestations Cerfa 1300-SD et 1301-SD sont
          supprimées.</strong> Elles sont remplacées par une mention de certification portée sur le
          devis ou la facture, que vous conservez cinq ans. Beaucoup de guides en ligne demandent
          encore ces formulaires.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/tva-travaux-10-ou-20" className="text-sm font-semibold text-indigo-600 hover:underline">Le guide complet des taux →</Link>
          <Link href="/blog/autoliquidation-tva-sous-traitance-btp" className="text-sm font-semibold text-indigo-600 hover:underline">Sous-traitance et autoliquidation →</Link>
        </div>

        {/* Banque et protection */}
        <h2 className="text-2xl font-bold mb-2">5. Compte pro et protection sociale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Le compte professionnel</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Obligatoire au-delà de 10 000 € de CA pendant deux années consécutives. Pour un électricien, le critère décisif est souvent la possibilité de déposer des espèces et d&apos;encaisser des chèques, tous les acteurs ne le proposant pas.</p>
            <Link href="/comparatifs/banques-pro" className="text-xs font-semibold text-indigo-600 hover:underline">Comparatif des banques pro &rarr;</Link>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Mutuelle et prévoyance</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">En quittant le salariat, vous perdez la complémentaire d&apos;entreprise. La prévoyance est l&apos;angle mort du métier : un arrêt de travail sur un chantier signifie zéro facturation, et les indemnités des indépendants sont faibles.</p>
            <Link href="/comparatifs/mutuelles-freelance" className="text-xs font-semibold text-indigo-600 hover:underline">Comparatif des mutuelles &rarr;</Link>
          </div>
        </div>
        <div className="mb-14" />

        {/* 6. Outils */}
        <h2 className="text-2xl font-bold mb-2">6. Les outils adaptés</h2>
        <p className="text-sm text-gray-500 mb-5">
          Un électricien a besoin d&apos;éditer un devis sur chantier depuis son téléphone, de gérer
          plusieurs taux de TVA sur un même document et de suivre ses acomptes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
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
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/logiciel-facturation-electricien" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif détaillé des logiciels →</Link>
          <Link href="/artisan-btp" className="text-sm font-semibold text-indigo-600 hover:underline">Guide complet artisan du bâtiment →</Link>
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

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
          <div className="font-bold text-gray-900 mb-2">Combien vous reste-t-il après cotisations ?</div>
          <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
            Estimez vos cotisations sur votre chiffre d&apos;affaires de chantier, taux 2026.
          </p>
          <Link href="/calculateur-urssaf" className="btn-primary inline-flex text-sm">
            Calculateur URSSAF gratuit &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
