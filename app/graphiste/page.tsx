import type { Metadata } from 'next'
import { EDITORIAL } from '@/lib/author'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Graphiste freelance : artiste-auteur ou micro-entreprise ?',
  description: "Guide 2026 du graphiste freelance : choisir entre régime artiste-auteur et micro-entreprise, cession de droits d'auteur, facturation, protection sociale et outils adaptés.",
  alternates: { canonical: 'https://www.outils-freelance.fr/graphiste/' },
  openGraph: {
    title: 'Graphiste freelance 2026 : le guide complet',
    description: "Artiste-auteur ou micro-entreprise, cession de droits, facturation et protection sociale : le guide du graphiste indépendant.",
    url: 'https://www.outils-freelance.fr/graphiste/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const faqItems = [
  {
    q: 'Un graphiste est-il artiste-auteur ou micro-entrepreneur ?',
    a: "Cela dépend de ce que vous facturez, pas de votre intitulé. La création d'un logo ou d'une charte graphique relève de l'œuvre originale, donc du régime artiste-auteur. L'intégration d'un site, la retouche technique ou l'impression sont des prestations de services classiques, qui relèvent de la micro-entreprise. Un même graphiste peut donc cumuler les deux régimes, avec deux numéros SIRET distincts.",
  },
  {
    q: 'La Maison des Artistes gère-t-elle encore ma sécurité sociale ?',
    a: "Non, et c'est une confusion fréquente. Depuis le 1er janvier 2019, la MDA et l'AGESSA ont perdu leur rôle de gestion de la sécurité sociale des artistes-auteurs. C'est l'URSSAF Limousin qui gère désormais l'affiliation et les cotisations de l'ensemble des artistes-auteurs. La MDA subsiste comme association d'accompagnement, sans rôle administratif obligatoire.",
  },
  {
    q: 'Mon client devient-il propriétaire de mon logo une fois payé ?',
    a: "Non, pas automatiquement. Le paiement de la prestation ne vaut pas cession des droits d'auteur. L'article L131-3 du Code de la propriété intellectuelle impose que la cession soit écrite et précise les droits cédés, leur étendue, leur destination, leur durée et leur territoire. Sans clause de cession détaillée, le client a payé la création mais n'a acquis aucun droit d'exploitation.",
  },
  {
    q: 'Faut-il facturer la cession de droits séparément ?',
    a: "C'est la pratique recommandée, et elle est à votre avantage. Distinguer sur la facture la création d'une part et la cession de droits d'autre part permet de valoriser l'usage réel : une identité visuelle utilisée en national pendant dix ans ne se cède pas au même prix qu'un visuel pour une campagne locale de trois mois.",
  },
  {
    q: 'Quel seuil de chiffre d\u2019affaires en micro-entreprise ?',
    a: "Pour une activité libérale relevant des BNC, le plafond est de 83 600 € de chiffre d'affaires annuel en 2026. Le seuil de franchise de TVA est distinct et plus bas : 37 500 €, avec une tolérance à 41 250 €. Ces deux seuils sont souvent confondus.",
  },
]

const criteres = [
  { activite: 'Création de logo, charte graphique', regime: 'Artiste-auteur', note: 'Œuvre originale protégée' },
  { activite: 'Illustration, direction artistique', regime: 'Artiste-auteur', note: 'Création de l\u2019esprit' },
  { activite: 'Intégration web, développement', regime: 'Micro-entreprise', note: 'Prestation technique' },
  { activite: 'Retouche photo simple, exécution', regime: 'Micro-entreprise', note: 'Pas d\u2019originalité' },
  { activite: 'Formation, atelier, conférence', regime: 'Micro-entreprise', note: 'Sauf revenus accessoires' },
  { activite: 'Vente de templates, merchandising', regime: 'Micro-entreprise', note: 'Activité commerciale' },
]

export default function GraphistePage() {
  const outils = ['freebe', 'abby', 'qonto'].map(s => TOOLS.find(t => t.slug === s)!).filter(Boolean)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Graphiste freelance', url: 'https://www.outils-freelance.fr/graphiste/' },
      ]} />
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Graphiste freelance
        </nav>

        <div className="badge-purple mb-3">Mis à jour {EDITORIAL.lastUpdate}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Graphiste freelance : le guide complet 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          Le métier de graphiste pose une question que peu d&apos;autres indépendants rencontrent :
          selon ce que vous facturez, vous ne relevez pas du même régime social. Se tromper coûte
          cher, dans les deux sens.
        </p>

        {/* Essentiel */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-14">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">À retenir</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Le régime <strong>artiste-auteur</strong> cotise autour de 16 à 17 % du revenu, contre environ 26 % en micro-BNC</li>
            <li>• Une activité relevant de l&apos;artiste-auteur <strong>ne peut pas</strong> être facturée en micro-entreprise</li>
            <li>• Les deux régimes se <strong>cumulent</strong>, avec deux SIRET, quand vos revenus sont de nature mixte</li>
            <li>• Le paiement d&apos;une création <strong>n&apos;emporte pas cession</strong> des droits d&apos;auteur</li>
          </ul>
        </div>

        {/* 1. Régime */}
        <h2 className="text-2xl font-bold mb-2">1. Artiste-auteur ou micro-entreprise ?</h2>
        <p className="text-sm text-gray-500 mb-5">
          L&apos;arbitrage se fait ligne par ligne, selon la nature de ce que vous vendez — pas selon
          votre intitulé professionnel.
        </p>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Ce que vous facturez</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Régime</th>
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Pourquoi</th>
              </tr>
            </thead>
            <tbody>
              {criteres.map((r, i) => (
                <tr key={r.activite} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{r.activite}</td>
                  <td className={`px-4 py-3 border border-gray-200 text-center text-xs font-semibold ${r.regime === 'Artiste-auteur' ? 'text-violet-700' : 'text-indigo-700'}`}>{r.regime}</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-14">
          <strong>Le point souvent ignoré</strong> : le Code de la sécurité sociale exclut les
          activités relevant du régime artiste-auteur du champ de la micro-entreprise. Déclarer une
          création de logo en micro n&apos;est donc pas un simple choix de commodité — c&apos;est une
          erreur d&apos;affiliation, régularisable mais coûteuse.
        </p>

        {/* 2. URSSAF Limousin */}
        <h2 className="text-2xl font-bold mb-2">2. Qui gère votre protection sociale</h2>
        <div className="border-l-4 border-indigo-600 bg-indigo-50/50 rounded-r-2xl p-6 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>Depuis le 1er janvier 2019, ce n&apos;est plus la Maison des Artistes.</strong> La
            MDA et l&apos;AGESSA ont perdu leur rôle de gestion de la sécurité sociale des
            artistes-auteurs, transféré à l&apos;<strong>URSSAF Limousin</strong>.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Elle gère l&apos;affiliation, le calcul et le prélèvement des cotisations, sur la base des
            revenus artistiques déclarés. Les versements sont trimestriels, avec régularisation
            annuelle. La MDA subsiste comme association d&apos;accompagnement, mais l&apos;adhésion
            n&apos;est plus une formalité obligatoire.
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-14">
          En contrepartie d&apos;un taux de cotisation nettement plus faible, la couverture retraite
          de base est plus limitée qu&apos;en régime indépendant classique. C&apos;est l&apos;arbitrage
          central du statut : moins de charges aujourd&apos;hui, moins de droits demain. Une
          complémentaire retraite compense en partie.
        </p>

        {/* 3. Droits d'auteur */}
        <h2 className="text-2xl font-bold mb-2">3. La cession de droits, votre vraie valeur</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          C&apos;est le point qui distingue le plus votre métier des autres prestations
          intellectuelles, et celui qui est le plus souvent bradé.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Ce que dit la loi</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              L&apos;article L131-3 du CPI exige que la cession mentionne <strong>les droits cédés,
              leur étendue, leur destination, leur durée et leur territoire</strong>. Une formule
              vague du type « le client devient propriétaire » est juridiquement inopérante.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Ce que ça change pour vous</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Facturez la création et la cession en <strong>deux lignes distinctes</strong>. Un
              logo diffusé en national pendant dix ans ne vaut pas le même prix qu&apos;un visuel
              local de trois mois. Cette distinction justifie vos tarifs bien mieux qu&apos;un
              forfait global.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-14">
          Le droit moral, lui, est <strong>incessible</strong> : vous restez l&apos;auteur, vous
          conservez le droit à la paternité de l&apos;œuvre et au respect de son intégrité, quelles
          que soient les cessions consenties.
        </p>

        {/* 4. Facturation */}
        <h2 className="text-2xl font-bold mb-2">4. Facturer et se faire payer</h2>
        <div className="space-y-3 mb-5">
          {[
            ['Demandez un acompte', "30 à 50 % à la commande. Sur de la création sur mesure, c'est la norme du secteur et personne ne s'en offusque. C'est aussi votre seule protection réelle contre l'abandon de projet en cours de route.", '/blog/facture-acompte-modele'],
            ['Cadrez les allers-retours', "Précisez au devis le nombre de propositions et de séries de modifications incluses. Au-delà, facturez. C'est la première cause de perte de rentabilité sur un projet créatif."],
            ['Relancez tôt', "Une facture relancée le lendemain de l'échéance se récupère presque toujours. Passé trois mois, beaucoup moins.", '/blog/facture-impayee-recouvrement'],
          ].map(([t, d, href]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 mb-1">{t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              {href && <Link href={href} className="text-xs font-semibold text-indigo-600 hover:underline mt-2 inline-block">En savoir plus &rarr;</Link>}
            </div>
          ))}
        </div>
        <div className="mb-14" />

        {/* Banque et protection */}
        <h2 className="text-2xl font-bold mb-2">5. Compte pro et protection sociale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Le compte professionnel</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Obligatoire au-delà de 10 000 € de CA pendant deux années consécutives. Si vous cumulez artiste-auteur et micro-entreprise, séparer les flux dès le départ simplifie considérablement les deux déclarations.</p>
            <Link href="/comparatifs/banques-pro" className="text-xs font-semibold text-indigo-600 hover:underline">Comparatif des banques pro &rarr;</Link>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Mutuelle et prévoyance</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">En régime artiste-auteur, la couverture maladie relève de la CPAM. La retraite de base étant plus faible qu&apos;en régime indépendant classique, une complémentaire mérite d&apos;être envisagée tôt.</p>
            <Link href="/comparatifs/mutuelles-freelance" className="text-xs font-semibold text-indigo-600 hover:underline">Comparatif des mutuelles &rarr;</Link>
          </div>
        </div>
        <div className="mb-14" />

        {/* 6. Outils */}
        <h2 className="text-2xl font-bold mb-2">6. Les outils adaptés</h2>
        <p className="text-sm text-gray-500 mb-5">
          Attention&nbsp;: si vous exercez <strong>uniquement</strong> en artiste-auteur, les
          logiciels de facturation généralistes ne couvrent pas le circuit URSSAF Limousin. Ils sont
          en revanche pertinents dès que vous avez une activité en micro-entreprise, seule ou en
          complément.
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
          <Link href="/logiciel-facturation-graphiste" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif détaillé des logiciels →</Link>
          <Link href="/comparatifs/mutuelles-freelance" className="text-sm font-semibold text-indigo-600 hover:underline">Mutuelles pour indépendants →</Link>
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
            Estimez vos cotisations en micro-entreprise, taux 2026 officiels.
          </p>
          <Link href="/calculateur-urssaf" className="btn-primary inline-flex text-sm">
            Calculateur URSSAF gratuit &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
