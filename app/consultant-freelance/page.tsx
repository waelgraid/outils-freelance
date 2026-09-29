import type { Metadata } from 'next'
import { EDITORIAL } from '@/lib/author'
import Link from 'next/link'
import { TOOLS } from '@/lib/tools'
import { ToolLogo } from '@/components/ToolLogo'
import { BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export const metadata: Metadata = {
  title: 'Consultant freelance : statut, TJM, formation et facturation',
  description: "Guide 2026 du consultant indépendant : choix du statut, portage ou freelance, déclaration d'activité de formateur, TVA sur la formation, facturation et protection sociale.",
  alternates: { canonical: 'https://www.outils-freelance.fr/consultant-freelance/' },
  openGraph: {
    title: 'Consultant freelance 2026 : le guide complet',
    description: "Statut, TJM, activité de formation, facturation et protection sociale : le guide du consultant indépendant.",
    url: 'https://www.outils-freelance.fr/consultant-freelance/',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Outils-Freelance.fr',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630 }],
  },
}

const faqItems = [
  {
    q: 'Faut-il un numéro de déclaration d\u2019activité pour former ?',
    a: "Oui, dès que vous dispensez une action de formation professionnelle à titre onéreux. La déclaration d'activité se fait auprès de la DREETS de votre région dans les trois mois suivant la première convention. Elle vous attribue un numéro de déclaration d'activité — souvent appelé NDA — à faire figurer sur vos conventions. Ce n'est pas un agrément : c'est une formalité déclarative, mais elle est obligatoire et conditionne la suite.",
  },
  {
    q: 'La formation est-elle soumise à la TVA ?',
    a: "Elle peut être exonérée au titre de l'article 261-4-4° du CGI, mais cette exonération n'est pas automatique. Elle suppose d'être déclaré comme organisme de formation et d'obtenir une attestation auprès de l'administration fiscale. Sans cette démarche, vos formations restent soumises à la TVA dans les conditions de droit commun.",
  },
  {
    q: 'Qualiopi est-il obligatoire ?',
    a: "Non en soi. La certification Qualiopi conditionne l'accès aux financements publics et mutualisés : OPCO, France Travail, CPF. Si vos clients financent directement sur leur budget, elle n'est pas nécessaire. Si vous visez le marché financé, elle devient indispensable — et représente un investissement en temps et en coût qu'il faut anticiper.",
  },
  {
    q: 'Portage salarial ou freelance : lequel choisir ?',
    a: "Le portage prélève environ la moitié du chiffre d'affaires en charges et frais de gestion, mais donne le statut de salarié, l'accès au chômage et zéro administratif. Le freelance en micro-entreprise conserve une part bien plus large du CA mais supporte la gestion et une protection sociale plus faible. Le portage se justifie surtout pour accéder à des clients qui ne contractent qu'avec des structures salariales, ou pour une mission ponctuelle sans volonté de créer une entreprise.",
  },
  {
    q: 'Comment éviter la requalification en salariat ?',
    a: "Le risque existe sur des missions longues chez un client unique, avec horaires imposés et intégration dans l'organisation. Les critères examinés sont le lien de subordination, l'autonomie dans les méthodes, la pluralité de clients et la fourniture des moyens de travail. Conservez plusieurs clients quand c'est possible, gardez la maîtrise de vos horaires et de vos méthodes, et évitez de figurer dans l'organigramme du client.",
  },
]

export default function ConsultantFreelancePage() {
  const outils = ['freebe', 'indy', 'qonto'].map(s => TOOLS.find(t => t.slug === s)!).filter(Boolean)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr/' },
        { name: 'Consultant freelance', url: 'https://www.outils-freelance.fr/consultant-freelance/' },
      ]} />
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>{' › '}Consultant freelance
        </nav>

        <div className="badge-purple mb-3">Mis à jour {EDITORIAL.lastUpdate}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Consultant freelance : le guide complet 2026
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          Le conseil indépendant a deux particularités que les autres métiers freelance ne
          rencontrent pas : la tentation permanente du portage salarial, et le basculement vers la
          formation, qui fait entrer dans un cadre réglementaire à part.
        </p>

        {/* Essentiel */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 mb-14">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">À retenir</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Dès la première formation facturée, une <strong>déclaration d&apos;activité</strong> auprès de la DREETS est obligatoire</li>
            <li>• L&apos;exonération de TVA sur la formation <strong>n&apos;est pas automatique</strong> : elle se demande</li>
            <li>• Le portage coûte environ <strong>la moitié du CA</strong>, en échange du statut salarié</li>
            <li>• Une mission longue chez un client unique expose à la <strong>requalification en salariat</strong></li>
          </ul>
        </div>

        {/* 1. Statut */}
        <h2 className="text-2xl font-bold mb-2">1. Freelance ou portage salarial</h2>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Critère</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Micro-entreprise</th>
                <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Portage salarial</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Prélèvements sur le CA', 'Environ 25 %', 'Environ 50 %'],
                ['Statut social', 'Indépendant', 'Salarié'],
                ['Droit au chômage', 'Non', 'Oui'],
                ['Gestion administrative', 'À votre charge', 'Déléguée'],
                ['Plafond de CA', '83 600 €', 'Aucun'],
                ['Accès aux grands comptes', 'Variable', 'Facilité'],
                ['Charges déductibles', 'Non', 'Frais professionnels'],
              ].map(([c, m, p], i) => (
                <tr key={c} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{c}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-xs text-gray-600">{m}</td>
                  <td className="px-4 py-3 border border-gray-200 text-center text-xs text-gray-600">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          L&apos;écart de prélèvement est considérable, mais il achète une chose précise : la
          sécurité. Le portage se justifie principalement pour accéder à des donneurs d&apos;ordre qui
          ne contractent qu&apos;avec des sociétés, ou pour tester une activité sans créer de
          structure.
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/portage-salarial-vs-freelance" className="text-sm font-semibold text-indigo-600 hover:underline">Le calcul détaillé →</Link>
          <Link href="/blog/micro-entreprise-vs-sasu" className="text-sm font-semibold text-indigo-600 hover:underline">Micro ou SASU ? →</Link>
        </div>

        {/* 2. Formation */}
        <h2 className="text-2xl font-bold mb-2">2. Quand vous basculez vers la formation</h2>
        <p className="text-sm text-gray-500 mb-5">
          Beaucoup de consultants glissent naturellement vers l&apos;animation de sessions. Ce
          glissement fait entrer dans un cadre réglementaire distinct, souvent découvert trop tard.
        </p>
        <div className="space-y-3 mb-5">
          {[
            ['La déclaration d\u2019activité', "Obligatoire dès la première action de formation facturée, à déposer auprès de la DREETS dans les trois mois suivant la première convention. Elle attribue un numéro de déclaration d'activité, à faire figurer sur vos documents. C'est une formalité déclarative, pas un agrément — mais son absence est une irrégularité."],
            ['Le bilan pédagogique et financier', "Une fois déclaré, vous devez transmettre chaque année un bilan pédagogique et financier. Son absence répétée entraîne la caducité de votre déclaration."],
            ['L\u2019exonération de TVA', "Possible au titre de l'article 261-4-4° du CGI, mais elle suppose une demande d'attestation auprès de l'administration fiscale. Elle n'est jamais automatique du seul fait d'être déclaré."],
            ['Qualiopi', "Nécessaire uniquement pour accéder aux financements mutualisés et publics : OPCO, CPF, France Travail. Inutile si vos clients paient directement sur leur budget."],
          ].map(([t, d]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 mb-1">{t}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mb-14" />

        {/* 3. Requalification */}
        <h2 className="text-2xl font-bold mb-2">3. Le risque de requalification</h2>
        <div className="border-l-4 border-amber-500 bg-amber-50/60 rounded-r-2xl p-6 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Une mission de longue durée chez un client unique, avec des horaires imposés et une
            intégration dans les équipes, peut être requalifiée en contrat de travail. Les
            conséquences portent sur le client — rappel de cotisations, indemnités — mais elles
            détruisent la relation commerciale et peuvent vous exposer.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Les indices examinés sont le <strong>lien de subordination</strong>, l&apos;autonomie
            dans l&apos;organisation du travail, la <strong>pluralité de clients</strong>, et la
            fourniture des moyens de travail.
          </p>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-14">
          En pratique : gardez la maîtrise de vos méthodes et de vos horaires, évitez de figurer
          dans l&apos;organigramme, facturez des livrables plutôt que de la présence quand
          c&apos;est possible, et maintenez au moins un second client actif.
        </p>

        {/* 4. Facturation */}
        <h2 className="text-2xl font-bold mb-2">4. Facturer et suivre sa rentabilité</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          La spécificité du conseil est le décalage entre le temps vendu et le temps réellement
          passé. Sans suivi, la rentabilité d&apos;une mission au forfait se dégrade sans qu&apos;on
          s&apos;en aperçoive.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {[
            ['Suivre le temps par mission', "Même au forfait. C'est la seule façon de savoir si votre tarification tient."],
            ['Jalonner les paiements', "Sur une mission de plusieurs mois, facturez mensuellement plutôt qu'à la livraison."],
            ['Cadrer le périmètre', "Écrivez ce qui est inclus et ce qui ne l'est pas. Les demandes hors périmètre se facturent."],
          ].map(([t, d]) => (
            <div key={t} className="border border-gray-100 rounded-2xl p-5 bg-white">
              <div className="font-semibold text-gray-900 text-sm mb-1">{t}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/blog/facture-acompte-modele" className="text-sm font-semibold text-indigo-600 hover:underline">Facture d&apos;acompte →</Link>
          <Link href="/blog/delai-paiement-legal-b2b" className="text-sm font-semibold text-indigo-600 hover:underline">Délais de paiement B2B →</Link>
        </div>

        {/* Banque et protection */}
        <h2 className="text-2xl font-bold mb-2">5. Compte pro et protection sociale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Le compte professionnel</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Obligatoire au-delà de 10 000 € de CA pendant deux années consécutives. Pour un consultant, les critères utiles sont les virements internationaux si vous facturez hors de France, et la connexion automatique à votre logiciel de comptabilité.</p>
            <Link href="/comparatifs/banques-pro" className="text-xs font-semibold text-indigo-600 hover:underline">Comparatif des banques pro &rarr;</Link>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 bg-white">
            <div className="font-semibold text-gray-900 mb-2">Mutuelle et prévoyance</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">La portabilité de votre ancienne mutuelle d&apos;entreprise vous couvre douze mois maximum, à condition de la demander dans le mois suivant la fin du contrat. Au-delà, il faut souscrire.</p>
            <Link href="/comparatifs/mutuelles-freelance" className="text-xs font-semibold text-indigo-600 hover:underline">Comparatif des mutuelles &rarr;</Link>
          </div>
        </div>
        <div className="mb-14" />

        {/* 6. Outils */}
        <h2 className="text-2xl font-bold mb-2">6. Les outils adaptés</h2>
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
          <Link href="/logiciel-facturation-consultant" className="text-sm font-semibold text-indigo-600 hover:underline">Comparatif détaillé des logiciels →</Link>
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
