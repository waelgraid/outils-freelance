import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Développeur freelance : statut, TJM, facturation et protection',
  description: "Le guide complet du développeur freelance en 2026 : choix du statut, TJM, propriété du code, facturation en régie ou au forfait, banque pro, mutuelle et obligations légales.",
  alternates: { canonical: 'https://www.outils-freelance.fr/developpeur-freelance/' },
  openGraph: {
    title: 'Développeur freelance 2026 : le guide complet',
    description: "Statut, TJM, propriété du code, facturation, banque pro, protection sociale : tout ce qu'un développeur doit maîtriser pour se lancer et durer en freelance.",
    url: 'https://www.outils-freelance.fr/developpeur-freelance/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png/', width: 1200, height: 630 }],
  },
}

const statuts = [
  {
    nom: 'Micro-entreprise',
    pour: 'Démarrer, tester, activité jusqu\u2019à 83 600 € de CA',
    plus: ['Création en 20 minutes', 'Comptabilité minimale', 'Charges proportionnelles au CA'],
    moins: ['Aucune charge déductible', 'Plafond de CA', 'Crédibilité moindre auprès des grands comptes'],
  },
  {
    nom: 'EURL',
    pour: 'Activité stable, volonté de déduire ses charges',
    plus: ['Charges réelles déductibles', 'Pas de plafond', 'Patrimoine protégé'],
    moins: ['Comptabilité complète', 'Coût de gestion annuel', 'Cotisations TNS sur le résultat'],
  },
  {
    nom: 'SASU',
    pour: 'CA élevé, optimisation dividendes, grands comptes',
    plus: ['Régime assimilé salarié', 'Arbitrage salaire/dividendes', 'Image solide'],
    moins: ['Charges sociales élevées sur salaire', 'Expert-comptable quasi indispensable'],
  },
  {
    nom: 'Portage salarial',
    pour: 'Missions en ESN, sécurité maximale, zéro administratif',
    plus: ['Statut salarié, chômage inclus', 'Aucune gestion', 'Accès aux clients grands comptes'],
    moins: ['Environ 50 % de charges sur le CA', 'Frais de gestion de la société de portage'],
  },
]

const faqItems = [
  {
    q: 'Quel code APE pour un développeur freelance ?',
    a: "Le code 62.01Z « Programmation informatique » couvre la très grande majorité des activités de développement. Il est attribué automatiquement par l'INSEE à partir de la description d'activité fournie lors de l'immatriculation. Ce code n'a pas de valeur juridique contraignante : il sert au classement statistique et conditionne parfois la convention collective applicable en portage.",
  },
  {
    q: 'À quelle caisse de retraite un développeur est-il affilié ?',
    a: "Depuis 2018, les professions libérales non réglementées créées après cette date relèvent de la Sécurité sociale des indépendants (SSI), et non de la CIPAV. La CIPAV est réservée à une liste limitative de professions qui n'inclut pas les métiers du développement. Cela change le taux de cotisation applicable : vérifiez lequel s'applique à votre situation avec notre calculateur.",
  },
  {
    q: 'Qui est propriétaire du code que je livre ?',
    a: "Vous, par défaut. L'article L111-1 du Code de la propriété intellectuelle attribue les droits à l'auteur. Contrairement au salarié, dont les droits sur un logiciel sont automatiquement dévolus à l'employeur (article L113-9), le freelance conserve ses droits tant qu'il ne les a pas cédés. La cession doit être écrite et préciser les droits cédés, leur étendue, leur durée et leur destination (article L131-3). Sans clause de cession dans votre contrat, le client n'a acquis aucun droit patrimonial sur le code.",
  },
  {
    q: 'Quelle différence entre régie et forfait ?',
    a: "En régie, vous vendez du temps : vous facturez des jours travaillés, avec une obligation de moyens. Au forfait, vous vendez un résultat : vous facturez une livraison définie, avec une obligation de résultat et le risque de dépassement à votre charge. La régie sécurise votre revenu mais plafonne votre marge ; le forfait permet de facturer la valeur plutôt que le temps, avec un risque assumé.",
  },
  {
    q: 'Une RC Pro est-elle obligatoire pour un développeur ?',
    a: "Non, elle n'est pas obligatoire pour les métiers du développement, qui ne sont pas des professions réglementées. Elle est en revanche fortement recommandée, et de plus en plus exigée contractuellement par les grands comptes et les ESN. Elle couvre les dommages causés au client dans le cadre de la mission : bug entraînant une perte d'exploitation, fuite de données, retard préjudiciable.",
  },
  {
    q: 'À partir de quel CA faut-il facturer la TVA ?',
    a: "Le seuil de franchise en base pour les prestations de services est de 37 500 €, avec une tolérance à 41 250 €. Au-delà, vous facturez la TVA et pouvez la récupérer sur vos achats professionnels — matériel, logiciels, abonnements cloud. Pour un développeur qui travaille en B2B, sortir de la franchise est souvent neutre pour le client et avantageux pour vous.",
  },
]

export default function DeveloppeurFreelancePage() {
  const outils = ['freebe', 'indy', 'qonto'].map(s => TOOLS.find(t => t.slug === s)!).filter(Boolean)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Développeur freelance', url: 'https://www.outils-freelance.fr/developpeur-freelance/' },
      ]} />
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Développeur freelance
        </nav>

        <div className="badge-purple mb-3">Mis à jour septembre 2026</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Développeur freelance : le guide complet 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
          Se mettre à son compte comme développeur soulève des questions que peu de ressources
          traitent ensemble : quel statut choisir, comment fixer son TJM, à qui appartient le code
          livré, comment facturer une régie, et quelle protection sociale quand on n&apos;est plus
          salarié.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Ce guide couvre le parcours complet, de la création à la protection, avec les textes
          applicables et les outils adaptés à chaque étape.
        </p>


        {/* Essentiel */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-14">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">À retenir</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Le <strong>code que vous livrez vous appartient</strong> tant qu&apos;une clause de cession écrite ne l&apos;a pas transféré</li>
            <li>• Comptez <strong>170 jours facturables par an</strong>, pas 220, pour calculer votre TJM</li>
            <li>• Depuis 2018, les libéraux non réglementés relèvent de la <strong>SSI, pas de la CIPAV</strong></li>
            <li>• Une régie longue chez un client unique expose à la <strong>requalification en salariat</strong></li>
          </ul>
        </div>

        {/* ── 1. STATUT ── */}
        <h2 className="text-2xl font-bold mb-2">1. Choisir son statut</h2>
        <p className="text-sm text-gray-500 mb-6">
          C&apos;est la décision qui conditionne tout le reste : fiscalité, protection sociale,
          crédibilité commerciale.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {statuts.map(s => (
            <div key={s.nom} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-bold text-gray-900 mb-1">{s.nom}</div>
              <div className="text-xs text-indigo-600 mb-3">{s.pour}</div>
              <ul className="space-y-1 mb-3">
                {s.plus.map(p => (
                  <li key={p} className="text-xs text-gray-600 flex items-start gap-1.5">
                    <span className="text-emerald-500 shrink-0">+</span>{p}
                  </li>
                ))}
              </ul>
              <ul className="space-y-1">
                {s.moins.map(m => (
                  <li key={m} className="text-xs text-gray-500 flex items-start gap-1.5">
                    <span className="text-rose-400 shrink-0">−</span>{m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          <strong>En pratique</strong> : la micro-entreprise reste le point de départ le plus
          fréquent. Elle devient limitante autour de 60 000 à 70 000 € de chiffre d&apos;affaires,
          moment où l&apos;impossibilité de déduire matériel, logiciels et frais commence à peser
          réellement.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/devenir-auto-entrepreneur" className="text-sm font-semibold text-indigo-600 hover:underline">Créer sa micro-entreprise →</Link>
          <Link href="/blog/micro-entreprise-vs-sasu" className="text-sm font-semibold text-indigo-600 hover:underline">Micro ou SASU ? →</Link>
          <Link href="/blog/portage-salarial-vs-freelance" className="text-sm font-semibold text-indigo-600 hover:underline">Portage ou freelance ? →</Link>
        </div>

        {/* ── 2. TJM ── */}
        <h2 className="text-2xl font-bold mb-2">2. Fixer son TJM</h2>
        <p className="text-sm text-gray-500 mb-5">
          L&apos;erreur la plus coûteuse au démarrage est de raisonner en salaire mensuel divisé par
          vingt.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-5">
          <div className="font-semibold text-gray-900 mb-3">Le calcul réel</div>
          <ol className="space-y-2 text-sm text-gray-600">
            <li>1. Partez du <strong>revenu net mensuel souhaité</strong></li>
            <li>2. Ajoutez les cotisations sociales selon votre statut</li>
            <li>3. Retenez <strong>170 jours facturables par an</strong>, pas 220 : congés, prospection, administratif et intercontrat</li>
            <li>4. Divisez le CA annuel nécessaire par ces 170 jours</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Le TJM varie fortement selon la spécialité, l&apos;ancienneté et le canal. Une mission
          décrochée en direct se facture généralement 10 à 20 % de plus qu&apos;via une ESN ou une
          plateforme, la commission d&apos;intermédiation en moins.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/tjm-developpeur-freelance" className="text-sm font-semibold text-indigo-600 hover:underline">Grilles de TJM par spécialité →</Link>
          <Link href="/calculateur-urssaf" className="text-sm font-semibold text-indigo-600 hover:underline">Calculer mes cotisations →</Link>
        </div>

        {/* ── 3. PROPRIÉTÉ DU CODE ── */}
        <h2 className="text-2xl font-bold mb-2">3. À qui appartient le code livré</h2>
        <p className="text-sm text-gray-500 mb-5">
          Le point juridique le plus mal maîtrisé du métier, et celui qui provoque le plus de
          litiges.
        </p>
        <div className="border-l-4 border-indigo-600 bg-indigo-50/50 rounded-r-2xl p-6 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>Par défaut, le code vous appartient.</strong> L&apos;article L111-1 du Code de la
            propriété intellectuelle attribue les droits à l&apos;auteur du seul fait de la création.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            La différence avec le salariat est fondamentale : l&apos;article L113-9 prévoit une
            dévolution automatique des droits sur un logiciel à l&apos;employeur. <strong>Cette dévolution ne s&apos;applique pas au freelance.</strong> Sans clause de cession écrite, votre client n&apos;a
            acquis aucun droit patrimonial, même après vous avoir payé.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            L&apos;article L131-3 impose que la cession délimite précisément les droits cédés, leur
            étendue, leur destination, leur durée et leur territoire. Une mention vague du type
            « le client devient propriétaire des livrables » est juridiquement fragile.
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-14">
          <strong>Ce que ça implique concrètement</strong> : votre contrat de prestation doit
          contenir une clause de cession explicite. Elle protège le client, mais elle vous protège
          aussi — en délimitant ce que vous cédez, vous conservez le droit de réutiliser vos
          composants génériques, vos bibliothèques internes et votre savoir-faire sur d&apos;autres
          missions.
        </p>

        {/* ── 4. FACTURATION ── */}
        <h2 className="text-2xl font-bold mb-2">4. Facturer : régie ou forfait</h2>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Critère</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Régie</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Forfait</th>
              </tr>
            </thead>
            <tbody>
              {[
                { c: 'Ce que vous vendez', r: 'Du temps', f: 'Un résultat' },
                { c: 'Obligation', r: 'De moyens', f: 'De résultat' },
                { c: 'Risque de dépassement', r: 'Porté par le client', f: 'Porté par vous' },
                { c: 'Plafond de marge', r: 'Limité au TJM', f: 'Illimité si vous êtes efficace' },
                { c: 'Facturation', r: 'Mensuelle sur jours travaillés', f: 'Par jalons ou à la livraison' },
                { c: 'Acompte', r: 'Rare', f: 'Recommandé (30 à 50 %)' },
              ].map((r, i) => (
                <tr key={r.c} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{r.c}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-gray-600 text-xs">{r.r}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-gray-600 text-xs">{r.f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          <strong>Point de vigilance en régie longue</strong> : une mission de plusieurs mois chez un
          client unique, avec des horaires imposés et un lien de subordination de fait, expose à une
          requalification en contrat de travail. Conservez de l&apos;autonomie sur vos méthodes et vos
          horaires, et évitez d&apos;apparaître dans l&apos;organigramme du client.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/facture-acompte-modele" className="text-sm font-semibold text-indigo-600 hover:underline">Facture d&apos;acompte →</Link>
          <Link href="/blog/facturer-client-etranger-auto-entrepreneur" className="text-sm font-semibold text-indigo-600 hover:underline">Facturer à l&apos;étranger →</Link>
          <Link href="/blog/facture-impayee-recouvrement" className="text-sm font-semibold text-indigo-600 hover:underline">Facture impayée →</Link>
        </div>

        {/* ── 5. BANQUE ── */}
        <h2 className="text-2xl font-bold mb-2">5. Le compte professionnel</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Un compte dédié devient obligatoire au-delà de 10 000 € de chiffre d&apos;affaires pendant
          deux années consécutives. En dessous, un simple second compte courant suffit légalement.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Pour un développeur, les critères qui comptent réellement diffèrent de ceux d&apos;un
          artisan : pas de dépôt d&apos;espèces, mais des <strong>virements internationaux</strong> si
          vous facturez hors de France, une <strong>carte adaptée aux abonnements récurrents</strong>
          (cloud, licences, SaaS), et une <strong>connexion à votre logiciel de comptabilité</strong>.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/comparatifs/banques-pro" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif des banques pro →</Link>
          <Link href="/blog/compte-pro-auto-entrepreneur-obligatoire" className="text-sm font-semibold text-indigo-600 hover:underline">Compte pro : obligatoire ou pas ? →</Link>
        </div>

        {/* ── 6. PROTECTION ── */}
        <h2 className="text-2xl font-bold mb-2">6. Protection sociale et assurances</h2>
        <div className="space-y-3 mb-5">
          {[
            ['Mutuelle santé', "En quittant le salariat, vous perdez la complémentaire d'entreprise. La portabilité vous couvre 12 mois maximum, à condition de la demander dans le mois suivant la fin du contrat. Au-delà, il faut souscrire.", '/comparatifs/mutuelles-freelance'],
            ['Prévoyance', "C'est l'angle mort du freelance. En arrêt de travail, vous ne facturez plus. Les indemnités journalières des indépendants sont faibles et soumises à délai de carence. Une prévoyance compense une partie du revenu.", ''],
            ['RC Professionnelle', "Non obligatoire pour un développeur, mais de plus en plus exigée contractuellement. Elle couvre un bug entraînant une perte d'exploitation, une fuite de données, un retard préjudiciable.", '/blog/assurance-auto-entrepreneur'],
            ['Retraite', "En micro-entreprise, la validation de trimestres dépend du chiffre d'affaires réalisé, pas du temps travaillé. Un CA faible peut ne valider qu'un ou deux trimestres sur l'année.", ''],
          ].map(([t, d, href]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 mb-1">{t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              {href && (
                <Link href={href} className="text-xs font-semibold text-indigo-600 hover:underline mt-2 inline-block">
                  En savoir plus &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mb-14" />

        {/* ── 7. OUTILS ── */}
        <h2 className="text-2xl font-bold mb-2">7. Les outils adaptés</h2>
        <p className="text-sm text-gray-500 mb-5">
          Un développeur a des besoins spécifiques : suivi de missions longues, facturation
          récurrente, rentabilité par client.
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
          <Link href="/logiciel-facturation-freelance-developpeur" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif détaillé des logiciels →</Link>
        </div>

        {/* ── FAQ ── */}
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
          <div className="font-bold text-gray-900 mb-2">Combien vous reste-t-il sur votre TJM ?</div>
          <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
            Estimez vos cotisations et votre revenu net réel, taux 2026 officiels.
          </p>
          <Link href="/calculateur-urssaf" className="btn-primary inline-flex text-sm">
            Calculateur URSSAF gratuit &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
