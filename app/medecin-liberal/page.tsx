import type { Metadata } from 'next'
import { EDITORIAL } from '@/lib/author'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Médecin libéral : comptabilité BNC, 2035 et AGA en 2026',
  description: "Guide 2026 du médecin libéral : déclaration 2035, fin de l'intérêt fiscal des AGA, secteur 1 ou 2, CARMF, protection sociale et logiciels de comptabilité BNC.",
  alternates: { canonical: 'https://www.outils-freelance.fr/medecin-liberal/' },
  openGraph: {
    title: 'Médecin libéral 2026 : comptabilité, 2035 et protection',
    description: "Déclaration 2035, fin de la majoration AGA, secteur conventionnel, CARMF et outils de comptabilité BNC pour médecins libéraux.",
    url: 'https://www.outils-freelance.fr/medecin-liberal/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const faqItems = [
  {
    q: 'Faut-il encore adhérer à une AGA en 2026 ?',
    a: "Plus pour des raisons fiscales. La majoration de 25 % du bénéfice imposable frappant les non-adhérents a été supprimée par la loi de finances 2021, de façon progressive puis totale à compter des revenus 2023. La réduction d'impôt pour frais de comptabilité et d'adhésion, plafonnée à 915 €, a elle aussi disparu. Enfin, l'agrément des organismes de gestion a été supprimé en février 2025, et de nombreuses AGA ont cessé leur activité. L'adhésion ne conserve d'intérêt que si vous valorisez concrètement le contrôle de cohérence et l'assistance proposés.",
  },
  {
    q: 'Un médecin peut-il exercer en micro-entreprise ?',
    a: "C'est possible en micro-BNC sous le plafond de 83 600 €, mais rarement pertinent pour une activité conventionnée installée. L'abattement forfaitaire de 34 % est généralement inférieur aux charges réelles d'un cabinet — loyer, personnel, matériel, assurances. La déclaration contrôlée avec 2035 permet de déduire ces charges au réel et se révèle presque toujours plus avantageuse dès qu'un cabinet existe.",
  },
  {
    q: 'Quelle différence entre secteur 1 et secteur 2 ?',
    a: "En secteur 1, vous appliquez les tarifs conventionnels sans dépassement, et l'Assurance maladie prend en charge une partie importante de vos cotisations sociales — c'est l'avantage principal. En secteur 2, vous pratiquez des honoraires libres avec tact et mesure, mais supportez l'intégralité de vos cotisations. Le choix se fait à l'installation et n'est pas librement réversible.",
  },
  {
    q: 'La comptabilité de trésorerie, qu\u2019est-ce que ça change ?',
    a: "Les BNC relèvent par défaut d'une comptabilité de trésorerie : vous enregistrez les recettes à leur encaissement et les dépenses à leur décaissement, et non à la date de facture. Concrètement, un acte réalisé en décembre mais payé en janvier se rattache à l'exercice suivant. C'est plus simple qu'une comptabilité d'engagement, et cela permet un pilotage de fin d'année.",
  },
  {
    q: 'Quelles cotisations retraite pour un médecin libéral ?',
    a: "La CARMF gère la retraite des médecins libéraux, avec un régime de base, un régime complémentaire et le régime des allocations supplémentaires de vieillesse pour les conventionnés. Les cotisations sont appelées sur la base des revenus de l'avant-dernière année, avec régularisation — ce décalage explique les appels parfois déstabilisants en début et en fin d'activité.",
  },
]

export default function MedecinLiberalPage() {
  const outils = ['indy', 'pennylane', 'qonto'].map(s => TOOLS.find(t => t.slug === s)!).filter(Boolean)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Médecin libéral', url: 'https://www.outils-freelance.fr/medecin-liberal/' },
      ]} />
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Médecin libéral
        </nav>

        <div className="badge-purple mb-3">Mis à jour {EDITORIAL.lastUpdate}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Médecin libéral : le guide complet 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          La gestion d&apos;un cabinet libéral repose sur quelques mécanismes précis : comptabilité
          de trésorerie, déclaration 2035, cotisations CARMF appelées avec deux ans de décalage. Et
          sur une règle qui vient de changer en profondeur.
        </p>

        {/* Essentiel */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-14">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">À retenir</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• L&apos;adhésion à une <strong>AGA n&apos;a plus aucun intérêt fiscal</strong> depuis les revenus 2023</li>
            <li>• La <strong>déclaration contrôlée avec 2035</strong> est presque toujours préférable au micro-BNC dès qu&apos;un cabinet existe</li>
            <li>• Les BNC suivent une <strong>comptabilité de trésorerie</strong> : encaissements et décaissements, pas dates de facture</li>
            <li>• Les cotisations CARMF sont appelées sur les revenus de <strong>l&apos;avant-dernière année</strong></li>
          </ul>
        </div>

        {/* 1. S'installer */}
        <h2 className="text-2xl font-bold mb-2">1. S&apos;installer en libéral</h2>
        <div className="space-y-3 mb-5">
          {[
            ['Les formalités', "Inscription au tableau de l'Ordre départemental, puis enregistrement auprès de la CPAM qui déclenche l'affiliation URSSAF et CARMF. L'immatriculation se fait ensuite au guichet unique de l'INPI. Comptez plusieurs semaines entre la première démarche et la première facturation."],
            ['Le secteur conventionnel', "En secteur 1, vous appliquez les tarifs conventionnels et l'Assurance maladie prend en charge une part importante de vos cotisations. En secteur 2, vous pratiquez des honoraires libres avec tact et mesure, mais supportez l'intégralité des charges. Le choix se fait à l'installation et n'est pas librement réversible."],
            ['Le mode d\u2019exercice', "Exercice individuel, collaboration libérale, SCM pour mutualiser les moyens, SELARL ou SELAS pour exercer en société. Le choix influence la fiscalité, la protection du patrimoine et les modalités de transmission du cabinet."],
          ].map(([t, d]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 mb-1">{t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mb-14" />

        {/* 2. AGA */}
        <h2 className="text-2xl font-bold mb-2">2. Ce qui a changé avec les AGA</h2>
        <p className="text-sm text-gray-500 mb-5">
          Une part importante des contenus encore en ligne recommande d&apos;adhérer à une
          association de gestion agréée pour éviter la majoration de 25 %. Cette recommandation
          n&apos;a plus lieu d&apos;être.
        </p>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Revenus de l&apos;année</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Majoration si non-adhérent</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Jusqu\u2019à 2019', '25 %'],
                ['2020', '20 %'],
                ['2021', '15 %'],
                ['2022', '10 %'],
                ['2023 et après', '0 % — supprimée'],
              ].map(([a, b], i) => (
                <tr key={a} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{a}</td>
                  <td className={`px-4 py-3 border border-gray-200 text-center ${b.includes('0 %') ? 'font-semibold text-emerald-700' : 'text-gray-600'}`}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Deux évolutions complètent le tableau. La <strong>réduction d&apos;impôt pour frais de
          comptabilité et d&apos;adhésion</strong>, plafonnée à 915 €, a disparu. Et l&apos;
          <strong>agrément des organismes de gestion a été supprimé en février 2025</strong>,
          conduisant de nombreuses AGA à cesser leur activité.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-14">
          L&apos;adhésion reste défendable si vous utilisez réellement le contrôle de cohérence de
          votre déclaration ou l&apos;assistance fiscale. Elle n&apos;a plus de justification
          purement fiscale. Si vous cotisez encore par habitude, la question mérite d&apos;être
          reposée.
        </p>

        {/* 2. Régime fiscal */}
        <h2 className="text-2xl font-bold mb-2">3. Micro-BNC ou déclaration contrôlée</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-bold text-gray-900 mb-1">Micro-BNC</div>
            <div className="text-xs text-indigo-600 mb-3">Remplacement, début d&apos;activité, faible volume</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Abattement forfaitaire de 34 % sur les recettes, sous le plafond de 83 600 €. Aucune
              charge réelle déductible. Comptabilité réduite à un livre des recettes.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-bold text-gray-900 mb-1">Déclaration contrôlée (2035)</div>
            <div className="text-xs text-indigo-600 mb-3">Cabinet installé, charges significatives</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Déduction des charges réelles : loyer, personnel, matériel, assurances, formation,
              véhicule. Comptabilité complète avec registre des immobilisations et amortissements.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-14">
          <strong>La règle pratique</strong> : dès que vos charges réelles dépassent 34 % de vos
          recettes — ce qui est le cas de la quasi-totalité des cabinets installés — la déclaration
          contrôlée est plus favorable. Le micro-BNC garde son intérêt pour une activité de
          remplacement ou un début d&apos;installation sans local.
        </p>

        {/* 4. Facturation */}
        <h2 className="text-2xl font-bold mb-2">4. Recettes et justificatifs</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          En libéral conventionné, l&apos;essentiel des recettes provient des télétransmissions, mais
          la tenue du registre reste votre obligation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {[
            ['Le livre-journal des recettes', "Obligatoire, avec le détail des sommes encaissées, leur date et leur mode de règlement. C'est le premier document vérifié en contrôle."],
            ['Les honoraires hors nomenclature', "Actes non remboursables, expertises, certificats : ils suivent les règles de facturation classiques et doivent porter les mentions obligatoires."],
            ['Le registre des immobilisations', "En déclaration contrôlée, chaque bien durable du cabinet y figure avec son plan d'amortissement."],
          ].map(([t, d]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 text-sm mb-1">{t}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/conservation-factures-duree" className="text-sm font-semibold text-indigo-600 hover:underline">Durée de conservation →</Link>
          <Link href="/blog/mentions-obligatoires-facture-auto-entrepreneur" className="text-sm font-semibold text-indigo-600 hover:underline">Mentions obligatoires →</Link>
        </div>

        {/* 5. Cotisations */}
        <h2 className="text-2xl font-bold mb-2">5. Cotisations et protection sociale</h2>
        <div className="space-y-3 mb-5">
          {[
            ['URSSAF', "Cotisations maladie, allocations familiales et CSG-CRDS. En secteur 1, l'Assurance maladie prend en charge une part importante de ces cotisations — c'est la contrepartie du respect des tarifs conventionnels."],
            ['CARMF', "Retraite de base, complémentaire et allocations supplémentaires de vieillesse. Les appels sont calculés sur les revenus de l'avant-dernière année, puis régularisés. Ce décalage crée des à-coups de trésorerie en début et en fin de carrière."],
            ['Prévoyance', "La CARMF prévoit des indemnités journalières après un délai de carence de 90 jours. C'est long. Une prévoyance complémentaire couvrant les trois premiers mois est la protection la plus souvent négligée."],
            ['RCP', "La responsabilité civile professionnelle est obligatoire pour tout professionnel de santé libéral. Le montant varie fortement selon la spécialité, les disciplines interventionnelles étant les plus exposées."],
          ].map(([t, d]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 mb-1">{t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/comparatifs/mutuelles-freelance" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif des mutuelles →</Link>
          <Link href="/comparatifs/banques-pro" className="text-sm font-semibold text-indigo-600 hover:underline">Compte professionnel →</Link>
        </div>

        {/* 4. Outils */}
        <h2 className="text-2xl font-bold mb-2">6. Les outils adaptés</h2>
        <p className="text-sm text-gray-500 mb-5">
          Avec la disparition de l&apos;avantage fiscal des AGA, un logiciel qui gère nativement la
          comptabilité BNC et génère la 2035 remplace l&apos;essentiel de leur apport pratique.
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
        <p className="text-xs text-gray-400 mb-4">
          Pour un cabinet avec salariés ou une structure de groupe, un expert-comptable reste
          nécessaire — ces outils réduisent ses honoraires, ils ne le remplacent pas.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/logiciel-facturation-medecin" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif détaillé des logiciels →</Link>
          <Link href="/comparatifs/logiciels-facturation" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif facturation et comptabilité →</Link>
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

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center mb-5">
          <div className="font-bold text-gray-900 mb-2">Estimer ses cotisations</div>
          <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
            Simulation sur la base des taux 2026 officiels, ACRE incluse.
          </p>
          <Link href="/calculateur-urssaf" className="btn-primary inline-flex text-sm">
            Calculateur URSSAF gratuit &rarr;
          </Link>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed">
          Cette page donne des informations générales. La situation d&apos;un cabinet — mode
          d&apos;exercice, structure, personnel, patrimoine — appelle un conseil personnalisé auprès
          d&apos;un expert-comptable.
        </div>
      </div>
    </>
  )
}
