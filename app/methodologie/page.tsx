import type { Metadata } from 'next'
import Link from 'next/link'
import { AUTHOR, EDITORIAL } from '@/lib/author'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Notre méthodologie — comment nous vérifions nos informations',
  description: "Sources officielles, dates de vérification affichées, corrections publiques : comment Outils-Freelance.fr produit des guides réglementaires à jour pour les indépendants.",
  alternates: { canonical: 'https://www.outils-freelance.fr/methodologie/' },
  openGraph: {
    title: 'Notre méthodologie — Outils-Freelance.fr',
    description: "Sources officielles, dates de vérification affichées et corrections publiques : notre méthode pour produire des guides réglementaires fiables.",
    url: 'https://www.outils-freelance.fr/methodologie/',
    type: 'article',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const sources = [
  {
    nom: 'Legifrance et les codes',
    detail: "Code général des impôts, Code de commerce, Code de la consommation, Code des assurances. Nous citons l'article applicable plutôt que de paraphraser une règle de mémoire.",
  },
  {
    nom: 'BOFiP et impots.gouv.fr',
    detail: "La doctrine fiscale publiée fait foi sur les questions de TVA, de seuils et de régimes. C'est notre référence sur tout ce qui touche à la fiscalité.",
  },
  {
    nom: 'URSSAF et service-public.fr',
    detail: "Taux de cotisations, plafonds, obligations déclaratives. Les taux affichés sur ce site proviennent des barèmes officiels, jamais d'un autre site de conseil.",
  },
  {
    nom: 'Grilles tarifaires des éditeurs',
    detail: "Chaque prix indiqué est relevé sur la page tarifaire publique de l'éditeur concerné, pas sur un comparatif tiers ni sur un dossier de presse.",
  },
]

const engagements = [
  {
    t: 'Chaque page porte sa date',
    d: "La date affichée est celle de la dernière vérification du contenu, pas une date de publication figée. En matière réglementaire, un guide sans date est inutilisable.",
  },
  {
    t: "L'article de loi est cité",
    d: "Quand une règle est énoncée, sa base légale est indiquée. Vous pouvez la vérifier vous-même, et c'est aussi ce qui nous oblige à être précis.",
  },
  {
    t: 'Les corrections sont assumées',
    d: "Quand une information publiée ici s'avère fausse ou périmée, elle est corrigée et la date de la page est mise à jour. Nous ne laissons pas un contenu obsolète en ligne parce qu'il apporte du trafic.",
  },
  {
    t: 'Les limites sont écrites',
    d: "Chaque fiche outil comporte une section « inconvénients » et une liste « pour qui ce n'est pas adapté ». Un outil qui convient à un artisan ne convient pas à un médecin libéral.",
  },
]

const faqItems = [
  {
    q: "Pourquoi insister autant sur les dates de vérification ?",
    a: "Parce que la réglementation applicable aux indépendants change vite, et qu'une large part du contenu en ligne n'a pas suivi. Trois exemples rencontrés en 2026 : les attestations Cerfa de TVA travaux, supprimées depuis février 2025 mais encore demandées partout ; le calendrier de la facturation électronique, souvent annoncé pour 2028 alors que l'émission concerne les micro-entreprises dès septembre 2027 ; le Portail Public de Facturation présenté comme une alternative gratuite alors que ce service a été abandonné fin 2024. Un guide sans date de vérification ne permet pas de savoir s'il relève de cette catégorie.",
  },
  {
    q: 'Êtes-vous payés par les éditeurs que vous recommandez ?',
    a: "Oui, sur certains d'entre eux, et c'est signalé sur chaque lien. Quand vous souscrivez via un lien affilié, nous touchons une commission, sans surcoût pour vous. À ce jour, une partie seulement des outils recommandés ici nous rémunère : plusieurs de nos recommandations, notamment sur les mutuelles, ne rapportent rien au site. Nous les maintenons parce qu'elles sont pertinentes.",
  },
  {
    q: 'Un éditeur peut-il payer pour améliorer sa position ?',
    a: "Non. Nous n'acceptons ni article sponsorisé, ni placement payant, ni échange de lien contre visibilité. Les taux de commission varient fortement d'un programme à l'autre et n'entrent pas dans l'évaluation. Si cela devait changer, ce serait signalé explicitement sur les pages concernées.",
  },
  {
    q: 'Publiez-vous des avis clients ?',
    a: "Non. Aucun témoignage d'utilisateur n'est affiché sur ce site, parce que nous n'avons pas de dispositif de collecte et de vérification permettant d'en garantir l'authenticité. Les notes portées sur nos fiches sont des appréciations éditoriales, identifiées comme telles : ce ne sont pas des moyennes d'avis clients.",
  },
  {
    q: "Sur quoi reposent vos comparatifs d'outils ?",
    a: "Sur les grilles tarifaires publiques des éditeurs, leur documentation fonctionnelle, leurs conditions générales, et l'usage des versions gratuites et d'essai. Nous ne disposons pas d'un abonnement payant annuel sur chacun des outils comparés : certaines fonctionnalités avancées sont donc évaluées sur documentation plutôt qu'en usage prolongé. Nous préférons l'écrire plutôt que de laisser entendre le contraire.",
  },
  {
    q: 'Comment signaler une erreur ?',
    a: `Par email à ${AUTHOR.email}. Les corrections factuelles sont traitées en priorité : si un tarif, un taux ou une règle a changé, la page est corrigée et sa date mise à jour.`,
  },
]

export default function MethodologiePage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Outils-Freelance.fr',
    url: 'https://www.outils-freelance.fr/',
    description: AUTHOR.bio,
    email: AUTHOR.email,
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Méthodologie', url: 'https://www.outils-freelance.fr/methodologie/' },
      ]} />
      <FAQSchema faqs={faqItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Méthodologie
        </nav>

        <div className="badge-purple mb-3">Mis à jour {EDITORIAL.lastUpdate}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Comment nous vérifions ce que nous publions
        </h1>
        <p className="text-gray-600 leading-relaxed mb-10">
          La règle qui s&apos;applique à un indépendant en 2026 n&apos;est pas celle de 2023, et une
          large part du contenu disponible en ligne n&apos;a pas suivi. Notre engagement tient en une
          phrase&nbsp;: remonter à la source officielle, afficher la date de vérification, et
          corriger quand c&apos;est faux.
        </p>

        {/* Auteur */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
              OF
            </div>
            <div>
              <div className="font-bold text-gray-900">{AUTHOR.name}</div>
              <div className="text-xs text-indigo-600 font-medium mb-2">{AUTHOR.role}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{AUTHOR.bio}</p>
            </div>
          </div>
        </div>

        {/* Exemple concret */}
        <div className="border-l-4 border-indigo-600 bg-indigo-50/50 rounded-r-2xl p-6 mb-12">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">
            Un exemple concret
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Jusqu&apos;en février 2025, un artisan devait faire remplir à son client une attestation
            Cerfa 1300-SD ou 1301-SD pour appliquer la TVA à 10&nbsp;% sur des travaux de rénovation.
            L&apos;article 41 de la loi de finances 2025 a supprimé ces deux formulaires, remplacés
            par une mention portée sur le devis ou la facture.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Plus d&apos;un an après, une grande partie des guides en ligne demande encore cette
            attestation, et propose même de la télécharger. Un artisan qui suit ces conseils applique
            une procédure abolie et ne détient pas le justificatif qui le protégerait en contrôle.
            C&apos;est exactement l&apos;écart que ce site cherche à éviter.
          </p>
        </div>

        {/* Sources */}
        <h2 className="text-2xl font-bold mb-2">D&apos;où viennent nos informations</h2>
        <p className="text-sm text-gray-500 mb-6">
          Par ordre de priorité. Nous ne sourçons jamais une règle depuis un autre site de conseil.
        </p>
        <div className="space-y-3 mb-12">
          {sources.map((s, i) => (
            <div key={s.nom} className="flex gap-4 border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{s.nom}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grille de notation */}
        <h2 className="text-2xl font-bold mb-2">Comment nous notons</h2>
        <p className="text-sm text-gray-500 mb-5">
          Chaque outil est évalué sur quatre axes notés de 0 à 5. La note globale affichée sur nos
          fiches est leur <strong>moyenne pondérée</strong>, arrondie au dixième. Deux outils ayant
          les mêmes sous-notes obtiennent donc exactement la même note globale.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Poids</th>
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Critère</th>
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Ce qu&apos;il mesure</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['30 %', 'Rapport fonctionnalités / prix', "Ce que l'outil fait réellement pour ce qu'il coûte. Une version gratuite couvrant l'essentiel vaut mieux qu'un abonnement dont on n'utilise qu'un quart."],
                ['30 %', 'Fonctionnalités', "Couverture des besoins réels : devis, relances, déclarations, conformité réglementaire, exports, intégrations."],
                ['25 %', 'Prise en main', "Temps nécessaire pour émettre une première facture conforme depuis l'inscription."],
                ['15 %', 'Support', "Canaux disponibles, réactivité annoncée, documentation et ressources d'aide."],
              ].map(([p, n, d], i) => (
                <tr key={n} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 text-center font-bold text-indigo-700">{p}</td>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{n}</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600 text-xs">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-3">
          <div className="text-sm font-semibold text-gray-900 mb-2">Exemple de calcul</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Un outil noté 5,0 en prix, 4,5 en fonctionnalités, 4,8 en prise en main et 4,9 en
            support obtient&nbsp;:<br />
            <span className="font-mono text-xs">(5,0 × 0,30) + (4,5 × 0,30) + (4,8 × 0,25) + (4,9 × 0,15) = 4,8</span>
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-12">
          Ces notes sont des <strong>appréciations éditoriales</strong>. Ce ne sont pas des moyennes
          d&apos;avis clients, et elles ne sont pas comparables à une note Trustpilot ou Google.
          Quand nous citons une note externe, sa source est indiquée explicitement.
        </p>

        {/* Engagements */}
        <h2 className="text-2xl font-bold mb-5">Nos quatre engagements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {engagements.map(e => (
            <div key={e.t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 mb-2">{e.t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{e.d}</p>
            </div>
          ))}
        </div>

        {/* Ce qu'on ne fait pas */}
        <h2 className="text-2xl font-bold mb-4">Ce que nous ne faisons pas</h2>
        <div className="border-l-2 border-gray-200 pl-5 space-y-4 mb-12">
          {[
            ['Nous ne publions pas de faux avis.', "Aucun témoignage d'utilisateur n'est affiché ici, parce que nous n'avons aucun moyen d'en garantir l'authenticité. Les notes sont éditoriales et signalées comme telles."],
            ['Nous ne classons pas selon la commission.', "Les taux de rémunération varient beaucoup d'un programme à l'autre. Ils n'entrent pas dans l'évaluation."],
            ['Nous ne recommandons pas un outil pour chaque situation.', "Sur plusieurs de nos comparatifs, la bonne réponse est « la version gratuite suffit » ou « restez sur votre solution actuelle ». Nous l'écrivons."],
            ['Nous ne faisons pas de conseil personnalisé.', "Ce site donne des informations générales. Pour une situation fiscale ou juridique particulière, consultez un expert-comptable ou un avocat."],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-semibold text-gray-900 text-sm mb-1">{t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        {/* Limites */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Les limites de ce site</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Par honnêteté, voici ce qu&apos;il faut savoir avant de nous lire&nbsp;:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Ce site est un projet éditorial indépendant. Ce n&apos;est ni un média de presse, ni un cabinet de conseil.</li>
            <li>• Nous couvrons <strong>{EDITORIAL.toolsReviewed} outils</strong> sélectionnés parmi une cinquantaine identifiés. Ce n&apos;est pas un panorama exhaustif du marché.</li>
            <li>• Nos comparatifs reposent sur la documentation publique, les grilles tarifaires et les versions gratuites ou d&apos;essai, pas sur un abonnement payant annuel à chaque outil.</li>
            <li>• Les tarifs SaaS évoluent vite. Malgré nos relevés, un prix peut être périmé&nbsp;: vérifiez sur le site de l&apos;éditeur avant de souscrire.</li>
            <li>• Nous ne sommes ni expert-comptable, ni avocat. Nos contenus n&apos;ont pas valeur de conseil professionnel.</li>
          </ul>
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: '/politique-affiliation', title: 'Politique d\u2019affiliation' },
            { href: '/a-propos', title: 'À propos du site' },
            { href: '/comparatifs', title: 'Voir les comparatifs' },
          ].map(r => (
            <Link key={r.href} href={r.href} className="card p-3.5 flex items-center gap-2 hover:border-indigo-200 group">
              <span className="text-sm font-medium group-hover:text-indigo-600">{r.title} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
