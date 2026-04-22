export interface ToolReview {
  verdict: string
  verdictShort: string
  score: { note: number; facilite: number; prix: number; support: number; fonctions: number }
  pricing: { plan: string; price: string; features: string[] }[]
  faq: { q: string; a: string }[]
  bestFor: string[]
  notFor: string[]
  vsLinks: { slug: string; label: string }[]
}

export const REVIEWS: Record<string, ToolReview> = {

  indy: {
    verdict: `Indy est notre recommandation pour tous les indépendants qui veulent automatiser leur comptabilité sans effort. Sa version gratuite est la plus généreuse du marché : facturation illimitée, connexion bancaire, déclarations URSSAF intégrées. Le service client est particulièrement réactif — difficile de faire mieux.

Son principal avantage concurrentiel : la synchronisation bancaire automatique. Chaque transaction est catégorisée intelligemment, ce qui réduit le temps de comptabilité mensuel à quelques minutes. Pour les freelances et professions libérales qui veulent oublier la comptabilité, c'est l'outil idéal.`,
    verdictShort: "La comptabilité automatisée la plus complète en version gratuite.",
    score: { note: 4.7, facilite: 4.8, prix: 5.0, support: 4.9, fonctions: 4.5 },
    pricing: [
      { plan: 'Gratuit', price: '0€/mois', features: ['Facturation illimitée', 'Connexion bancaire', 'Livre des recettes', 'Déclarations URSSAF', 'Application mobile'] },
      { plan: 'Premium', price: 'À partir de 20€/mois', features: ['Tout le gratuit', 'Déclaration 2035 (BNC)', 'Gestion de la TVA', 'FEC comptable', 'Support prioritaire'] },
    ],
    faq: [
      { q: 'Indy est-il vraiment gratuit ?', a: "Oui, la version gratuite d'Indy est permanente et inclut la facturation illimitée, la connexion bancaire et les déclarations URSSAF. Les fonctionnalités avancées (déclaration 2035, TVA) sont payantes à partir de 20€/mois." },
      { q: 'Indy fonctionne-t-il pour les professions libérales ?', a: "Oui, Indy est spécialement conçu pour les professions libérales BNC. Il gère la déclaration 2035, le livre des recettes et les spécificités comptables des libéraux." },
      { q: 'Quelle banque peut-on connecter à Indy ?', a: "Indy se connecte à la quasi-totalité des banques françaises : BNP, Société Générale, Crédit Agricole, Qonto, Shine, Boursorama, etc. La synchronisation est automatique et quotidienne." },
    ],
    bestFor: ["Freelances cherchant la version gratuite la plus complète", "Professions libérales BNC (médecins, avocats, consultants)", "Indépendants qui veulent automatiser leur comptabilité", "Utilisateurs qui valorisent un support client ultra-réactif"],
    notFor: ["Artisans avec besoins de facturation complexe (acomptes, situations)", "Sociétés à l'IS (SASU, EURL) — préférez Pennylane", "Ceux qui ont besoin d'un suivi du temps par mission"],
    vsLinks: [{ slug: 'indy-vs-abby', label: 'Indy vs Abby' }, { slug: 'freebe-vs-indy', label: 'Indy vs Freebe' }, { slug: 'freebe-vs-abby', label: 'Freebe vs Abby' }],
  },

  freebe: {
    verdict: `Freebe est la référence pour les freelances en services : développeurs, designers, consultants, rédacteurs. Ce qui le distingue de tous les autres outils, c'est la gestion complète de la mission — du devis signé à la facture finale en passant par le suivi du temps passé et la rentabilité par client.

C'est le seul logiciel de notre sélection qui vous donne une vision claire de combien vous gagnez réellement par heure et par client, en tenant compte du temps administratif. Pour les freelances qui veulent optimiser leur activité et pas seulement la gérer, c'est indispensable.`,
    verdictShort: "Le meilleur outil pour les freelances en services qui facturent au temps passé.",
    score: { note: 4.6, facilite: 4.5, prix: 4.2, support: 4.5, fonctions: 4.8 },
    pricing: [
      { plan: 'Solo', price: '9,99€/mois', features: ['Facturation illimitée', 'Suivi du temps', 'Gestion des missions', 'Connexion bancaire', 'Déclarations URSSAF'] },
      { plan: 'Pro', price: '16,99€/mois', features: ['Tout Solo', 'Multi-entreprises', 'Analytics avancés', 'Paiement en ligne', 'Signature électronique'] },
    ],
    faq: [
      { q: 'Freebe est-il adapté aux auto-entrepreneurs ?', a: "Oui, Freebe est conçu pour les auto-entrepreneurs et micro-entrepreneurs en services. Il gère les spécificités du régime micro (livre des recettes, déclarations URSSAF) tout en offrant des fonctionnalités avancées de suivi des missions." },
      { q: 'Quelle est l\'offre de découverte Freebe ?', a: "Via le lien Outils-Freelance.fr, vous bénéficiez de 2 mois d\'abonnement offerts sans engagement. Après la période d\'essai, le plan Solo est à 9,99€/mois. Il n\'y a pas de version gratuite permanente contrairement à Indy ou Abby." },
      { q: 'Peut-on facturer en devises étrangères avec Freebe ?', a: "Oui, Freebe permet de créer des factures en euros et en devises étrangères, ce qui est pratique pour les freelances avec des clients internationaux." },
    ],
    bestFor: ["Freelances qui facturent au temps passé ou à la journée", "Consultants avec plusieurs clients actifs simultanément", "Indépendants qui veulent analyser la rentabilité de leurs missions", "Ceux qui ont besoin de contrats et bons de commande intégrés"],
    notFor: ["Auto-entrepreneurs avec peu de factures par mois (Abby ou Indy suffit)", "Artisans et commerçants (moins adapté au BTP/commerce)", "Budget serré — la version payante est obligatoire après 30 jours"],
    vsLinks: [{ slug: 'freebe-vs-abby', label: 'Freebe vs Abby' }, { slug: 'freebe-vs-indy', label: 'Freebe vs Indy' }, { slug: 'indy-vs-abby', label: 'Indy vs Abby' }],
  },

  abby: {
    verdict: `Abby est notre choix n°1 pour les auto-entrepreneurs en 2026. Sa version gratuite permanente inclut la facturation illimitée, les déclarations URSSAF et la certification Plateforme Agréée pour la facturation électronique — sans débourser un centime. C'est l'offre gratuite la plus complète du marché.

Ce qui distingue Abby de ses concurrents, c'est sa polyvalence : que vous soyez artisan, commerçant, freelance ou consultant, l'outil s'adapte. La facturation électronique certifiée PA est un vrai avantage concurrentiel — vos clients grands comptes peuvent déjà intégrer vos factures dans leurs systèmes.`,
    verdictShort: "Le meilleur rapport qualité-prix, n°1 toutes catégories confondues.",
    score: { note: 4.8, facilite: 4.9, prix: 5.0, support: 4.4, fonctions: 4.7 },
    pricing: [
      { plan: 'Gratuit', price: '0€/mois', features: ['Facturation illimitée', 'Facturation électronique certifiée', 'Déclarations URSSAF', 'Livre des recettes', 'Devis et acomptes'] },
      { plan: 'Start', price: '5,40€/mois', features: ['Tout le gratuit', 'Connexion bancaire', 'Paiement en ligne', 'E-signature des devis'] },
      { plan: 'Pro', price: '13,50€/mois', features: ['Tout Start', 'Gestion de la TVA', 'Analytique avancée', 'Support prioritaire'] },
    ],
    faq: [
      { q: 'Abby est-il vraiment certifié Plateforme Agréée ?', a: "Oui, Abby est certifié Plateforme De Dématérialisation Partenaire (PDP) par l'État français. Vos factures sont générées au format Factur-X conforme à la réforme de la facturation électronique qui s'applique progressivement jusqu'en 2027." },
      { q: "La version gratuite d'Abby est-elle vraiment illimitée ?", a: "Oui, la version gratuite d'Abby permet de créer un nombre illimité de factures et devis, de gérer vos déclarations URSSAF et d'accéder à la facturation électronique certifiée. La connexion bancaire et le paiement en ligne nécessitent un plan payant." },
      { q: 'Abby est-il adapté aux artisans du BTP ?', a: "Oui, Abby est particulièrement bien adapté aux artisans. Il gère les devis avec conditions de paiement, les acomptes, les situations de travaux et la facturation électronique obligatoire dans le secteur du BTP." },
    ],
    bestFor: ["Tous les auto-entrepreneurs cherchant le meilleur gratuit", "Artisans, commerçants et prestataires polyvalents", "Ceux qui ont besoin de facturation électronique certifiée maintenant", "Budget limité qui veut quand même un outil professionnel"],
    notFor: ["Freelances qui ont besoin de suivi du temps (préférez Freebe)", "Professions libérales avec déclaration 2035 complexe (préférez Indy)", "Grandes structures à l'IS (préférez Pennylane)"],
    vsLinks: [{ slug: 'indy-vs-abby', label: 'Abby vs Indy' }, { slug: 'freebe-vs-abby', label: 'Abby vs Freebe' }],
  },

  qonto: {
    verdict: `Qonto est la banque pro de référence en France pour les indépendants et TPE. Avec 500 000 clients et un IBAN français, elle offre la solidité et la complétude que les néobanques européennes ne peuvent pas égaler. L'ouverture de compte en 10 minutes, la facturation intégrée gratuite et le dépôt d'espèces via le réseau Nickel en font la solution la plus polyvalente.

Pour un artisan qui encaisse du cash, un commerçant qui reçoit des chèques, ou un consultant qui veut tout gérer depuis son smartphone — Qonto répond à tous les cas d'usage. Son seul vrai défaut : le prix, légèrement au-dessus de Shine. Mais les fonctionnalités supplémentaires justifient souvent la différence.`,
    verdictShort: "La banque pro la plus complète et la plus fiable du marché français.",
    score: { note: 4.6, facilite: 4.7, prix: 4.2, support: 4.4, fonctions: 4.8 },
    pricing: [
      { plan: 'Solo', price: '11€ HT/mois', features: ['IBAN français', 'Carte Visa Business', 'Virements illimités', 'Facturation intégrée gratuite', 'Dépôt d\'espèces'] },
      { plan: 'Standard', price: '19€ HT/mois', features: ['Tout Solo', '2 cartes incluses', '2 utilisateurs', 'Intégrations comptables avancées'] },
    ],
    faq: [
      { q: 'Qonto est-il une vraie banque ?', a: "Qonto est un établissement de paiement agréé par l'ACPR (Autorité de Contrôle Prudentiel et de Résolution), pas une banque au sens strict. Vos fonds sont protégés jusqu'à 100 000€ via la garantie des dépôts." },
      { q: 'Peut-on déposer des espèces avec Qonto ?', a: "Oui, Qonto permet de déposer des espèces via le réseau de bureaux de tabac Nickel présents dans toute la France. C'est un avantage majeur par rapport à Shine qui ne propose pas cette fonctionnalité." },
      { q: 'Qonto accepte-t-il les chèques ?', a: "Oui, Qonto accepte les chèques par courrier ou via des partenaires agréés. C'est l'une des rares néobanques à proposer cette fonctionnalité essentielle pour certains artisans et commerçants." },
    ],
    bestFor: ["Artisans et commerçants qui encaissent espèces ou chèques", "Freelances qui veulent regrouper banque et facturation", "Indépendants qui prévoient de passer en société", "Ceux qui ont besoin des meilleures intégrations comptables"],
    notFor: ["Budget très serré (Shine est moins cher)", "Activité uniquement en ligne sans besoin de cash"],
    vsLinks: [{ slug: 'qonto-vs-shine', label: 'Qonto vs Shine' }],
  },

  shine: {
    verdict: `Shine est la banque pro idéale pour les freelances et auto-entrepreneurs qui démarrent leur activité ou qui ont un budget serré. À 7,90€/mois, elle propose tout l'essentiel : IBAN français, carte Visa, virements illimités et facturation intégrée. Son application mobile est régulièrement citée comme l'une des meilleures du secteur.

Ce qui distingue Shine, c'est son approche "accompagnement" : guides, conseils, notifications proactives pour vos obligations (déclarations URSSAF, TVA...). Pour un indépendant qui démarre, c'est rassurant.`,
    verdictShort: "La banque pro la plus accessible, idéale pour les freelances débutants.",
    score: { note: 4.4, facilite: 4.8, prix: 4.7, support: 4.3, fonctions: 4.2 },
    pricing: [
      { plan: 'Shine Business', price: '7,90€/mois', features: ['IBAN français', 'Carte Visa', 'Virements illimités', 'Facturation intégrée', 'Notifications URSSAF'] },
      { plan: 'Shine Plus', price: '14,90€/mois', features: ['Tout Business', '2 cartes', 'Sous-comptes', 'Accès multi-utilisateurs'] },
    ],
    faq: [
      { q: 'Shine propose-t-elle le dépôt d\'espèces ?', a: "Non, Shine ne permet pas de déposer des espèces. Si vous encaissez régulièrement du cash (artisans, commerçants), préférez Qonto qui propose cette fonctionnalité via le réseau Nickel." },
      { q: 'Shine est-elle sécurisée ?', a: "Oui, Shine est agréée par l'ACPR et les fonds sont protégés via la garantie des dépôts jusqu'à 100 000€. La carte Visa est gérée par Mastercard avec toutes les protections habituelles." },
      { q: 'Peut-on ouvrir un compte Shine en SASU ou EURL ?', a: "Oui, Shine propose des comptes pour les micro-entrepreneurs mais aussi pour les sociétés (SASU, EURL, SAS). L'ouverture se fait en ligne en quelques minutes." },
    ],
    bestFor: ["Freelances débutants qui veulent minimiser leurs charges", "Activités 100% digitales sans besoin de dépôts cash", "Indépendants qui valorisent l'accompagnement et les conseils", "Ceux qui veulent la meilleure expérience mobile"],
    notFor: ["Artisans qui encaissent des espèces (prenez Qonto)", "Commerçants qui reçoivent beaucoup de chèques"],
    vsLinks: [{ slug: 'qonto-vs-shine', label: 'Shine vs Qonto' }],
  },

  pennylane: {
    verdict: `Pennylane est la référence pour les freelances et dirigeants qui veulent une vision financière complète en temps réel. Là où Indy ou Abby automatisent la comptabilité basique, Pennylane va plus loin : tableaux de bord financiers avancés, collaboration avec expert-comptable, gestion de la TVA, prévisionnels de trésorerie.

C'est l'outil idéal pour passer d'une gestion réactive à une gestion proactive de ses finances. Pour un consultant ou freelance qui génère plus de 50 000€ de CA annuel, l'investissement de 26€/mois est très rentable comparé aux heures passées avec un expert-comptable.`,
    verdictShort: "La comptabilité temps réel pour les freelances qui veulent voir loin.",
    score: { note: 4.5, facilite: 4.2, prix: 3.8, support: 4.5, fonctions: 4.9 },
    pricing: [
      { plan: 'Essentiel', price: '26€/mois', features: ['Comptabilité temps réel', 'Facturation', 'Connexion bancaire', 'Déclarations TVA', 'Exports FEC'] },
      { plan: 'Business', price: '59€/mois', features: ['Tout Essentiel', 'Multi-entités', 'Analytique avancée', 'API ouverte', 'Accompagnement dédié'] },
    ],
    faq: [
      { q: 'Pennylane est-il adapté aux micro-entrepreneurs ?', a: "Pennylane est techniquement utilisable en micro-entreprise, mais son prix (26€/mois) est élevé pour ce régime. Pour un micro-entrepreneur, Indy ou Abby offrent un meilleur rapport qualité-prix. Pennylane est plus adapté aux sociétés (SASU, EURL) ou aux freelances avec un fort volume d'activité." },
      { q: 'Pennylane permet-il de collaborer avec un expert-comptable ?', a: "C'est l'une des forces majeures de Pennylane. Votre expert-comptable peut accéder directement à votre dossier, passer des écritures, préparer la liasse fiscale et communiquer avec vous en temps réel depuis la plateforme." },
      { q: 'Pennylane gère-t-il la TVA ?', a: "Oui, Pennylane gère la TVA de manière automatisée : calcul, déclaration CA3/CA12, préparation des acomptes. C'est particulièrement utile pour les freelances qui dépassent les seuils de franchise de TVA." },
    ],
    bestFor: ["Freelances avec fort CA (>50 000€) qui veulent une vraie visibilité financière", "Consultants qui travaillent avec un expert-comptable", "SASU et EURL cherchant la meilleure comptabilité automatisée", "Indépendants qui veulent anticiper leur trésorerie"],
    notFor: ["Micro-entrepreneurs avec peu d'opérations (trop cher)", "Débutants — la courbe d'apprentissage est plus longue"],
    vsLinks: [{ slug: 'pennylane-vs-indy', label: 'Pennylane vs Indy' }],
  },

  alan: {
    verdict: `Alan est la mutuelle que nous recommandons à tous les freelances et auto-entrepreneurs en 2026. Conçue dès le départ pour les indépendants, elle offre ce qu'aucune mutuelle traditionnelle ne propose : remboursements en 24h, téléconsultation incluse dans tous les forfaits, et une application mobile qui rend la santé aussi simple qu'une application bancaire.

En 8 ans, Alan a convaincu plus de 500 000 membres et obtient régulièrement les meilleures notes de satisfaction du secteur. Pour un indépendant qui veut oublier les formulaires papier et être remboursé rapidement, c'est le choix évident.`,
    verdictShort: "La mutuelle 100% digitale la plus recommandée pour les indépendants.",
    score: { note: 4.6, facilite: 5.0, prix: 4.0, support: 4.7, fonctions: 4.8 },
    pricing: [
      { plan: 'Alan Vital', price: 'À partir de 39€/mois', features: ['Remboursements 24h', 'Téléconsultation incluse', 'Tiers payant automatique', 'App mobile', 'Carte santé digitale'] },
      { plan: 'Alan Serein', price: 'À partir de 55€/mois', features: ['Tout Vital', 'Meilleure couverture optique', 'Dentaire renforcé', 'Médecines douces'] },
      { plan: 'Alan Premium', price: 'À partir de 75€/mois', features: ['Tout Serein', 'Couverture maximale', 'Prévoyance incluse', 'Conciergerie santé'] },
    ],
    faq: [
      { q: 'Alan rembourse-t-il vraiment en 24h ?', a: "Dans 90% des cas, oui. Il suffit de photographier votre feuille de soins dans l'application. Le remboursement est traité automatiquement et vire sur votre compte le lendemain. Pour les soins plus complexes, le délai peut être de 48-72h." },
      { q: 'Alan est-il compatible avec le régime Madelin ?', a: "Oui, Alan propose des contrats compatibles avec le régime Madelin pour les travailleurs non-salariés (TNS) en BIC ou BNC. Vos cotisations sont déductibles de votre revenu imposable, ce qui peut représenter une économie significative." },
      { q: 'Puis-je garder mon médecin avec Alan ?', a: "Oui, Alan n'impose pas de réseau de soins fermé. Vous pouvez consulter n'importe quel médecin en France. Alan fonctionne en tiers payant automatique chez la majorité des professionnels de santé." },
    ],
    bestFor: ["Freelances qui veulent la meilleure expérience digitale", "Indépendants qui valorisent la réactivité des remboursements", "Ceux qui utilisent régulièrement la téléconsultation", "TNS qui veulent optimiser avec le régime Madelin"],
    notFor: ["Budget très serré (Harmonie Mutuelle est moins chère)", "Besoins dentaires très importants (autres mutuelles plus couvrantes sur ce poste)"],
    vsLinks: [{ slug: 'alan-vs-harmonie', label: 'Alan vs Harmonie' }],
  },

  harmonie: {
    verdict: `Harmonie Mutuelle est notre recommandation pour les auto-entrepreneurs qui cherchent le meilleur rapport qualité-prix. Avec des formules à partir de 35€/mois spécialement conçues pour les travailleurs indépendants, elle offre une couverture solide sur les postes essentiels : hospitalisation, dentaire et optique.

Son réseau de soins partenaires permet d'obtenir des remises importantes chez de nombreux opticiens et dentistes. Si vous avez des dépenses importantes dans ces deux domaines, Harmonie peut s'avérer plus économique qu'Alan sur l'année.`,
    verdictShort: "Le meilleur rapport qualité-prix pour les auto-entrepreneurs soucieux de leur budget.",
    score: { note: 4.2, facilite: 3.8, prix: 4.8, support: 4.0, fonctions: 4.1 },
    pricing: [
      { plan: 'Indépendants Essentiel', price: 'À partir de 35€/mois', features: ['Soins courants', 'Hospitalisation', 'Optique', 'Dentaire de base', 'Réseau de soins'] },
      { plan: 'Indépendants Confort', price: 'À partir de 50€/mois', features: ['Tout Essentiel', 'Dentaire renforcé', 'Optique premium', 'Médecines douces', 'Prévoyance incluse'] },
    ],
    faq: [
      { q: 'Harmonie Mutuelle est-elle compatible Madelin ?', a: "Oui, Harmonie Mutuelle propose des contrats Madelin déductibles pour les travailleurs non-salariés. C'est un avantage fiscal important qui peut réduire significativement le coût réel de la mutuelle." },
      { q: 'Comment fonctionne le réseau de soins Harmonie ?', a: "Harmonie Mutuelle dispose d'un réseau de professionnels partenaires (opticiens, dentistes, audioprothésistes) où vous bénéficiez de remises supplémentaires. Ces remises peuvent représenter des centaines d'euros d'économies annuelles sur l'optique et le dentaire." },
      { q: 'Peut-on adhérer à Harmonie Mutuelle en ligne ?', a: "Oui, Harmonie Mutuelle propose une adhésion en ligne pour les travailleurs indépendants. Un conseiller peut également vous rappeler pour personnaliser votre couverture selon vos besoins spécifiques." },
    ],
    bestFor: ["Indépendants qui veulent minimiser leurs cotisations mutuelle", "Ceux avec des dépenses importantes en optique ou dentaire", "TNS qui veulent optimiser avec le contrat Madelin", "Ceux qui préfèrent un interlocuteur humain"],
    notFor: ["Ceux qui valorisent l'expérience 100% digitale (préférez Alan)", "Indépendants qui veulent des remboursements ultra-rapides"],
    vsLinks: [{ slug: 'alan-vs-harmonie', label: 'Harmonie vs Alan' }],
  },

  malakoff: {
    verdict: `Malakoff Humanis est l'acteur historique de la protection sociale des travailleurs indépendants en France. Fort de millions d'assurés, il offre le réseau de soins le plus étendu et les garanties les plus solides sur les gros postes (hospitalisation, dentaire lourd, prothèses auditives).

C'est le choix idéal pour les indépendants qui ont des besoins importants en soins spécialisés ou qui veulent un interlocuteur institutionnel reconnu. L'expérience digitale est moins moderne qu'Alan, mais la solidité et la couverture sont sans égal.`,
    verdictShort: "La couverture la plus complète avec le réseau de soins le plus large.",
    score: { note: 4.3, facilite: 3.5, prix: 4.0, support: 4.2, fonctions: 4.4 },
    pricing: [
      { plan: 'TNS Essentiel', price: 'À partir de 45€/mois', features: ['Hospitalisation complète', 'Réseau de soins étendu', 'Dentaire', 'Optique', 'Prévoyance optionnelle'] },
      { plan: 'TNS Confort', price: 'Sur devis', features: ['Tout Essentiel', 'Dentaire renforcé', 'Prothèses auditives', 'Médecines douces', 'Interlocuteur dédié'] },
    ],
    faq: [
      { q: 'Malakoff Humanis est-il adapté aux auto-entrepreneurs ?', a: "Oui, Malakoff Humanis propose des offres spécifiques pour les travailleurs non-salariés (TNS) et auto-entrepreneurs. Les contrats sont compatibles Madelin et peuvent être souscrits en ligne ou via un conseiller." },
      { q: 'Comment obtenir un devis Malakoff Humanis ?', a: "Le devis s'obtient directement sur leur site ou en contactant un conseiller par téléphone. Malakoff Humanis personnalise davantage ses offres que ses concurrents en tenant compte de votre situation spécifique." },
      { q: "Malakoff Humanis rembourse-t-il vite ?", a: "Les délais de remboursement sont plus longs qu'Alan (5 à 10 jours en moyenne contre 24h pour Alan). En contrepartie, les garanties sont souvent plus importantes sur les soins coûteux." },
    ],
    bestFor: ["Indépendants avec besoins importants en dentaire ou hospitalisation", "Professions à risque qui ont besoin d'une couverture maximale", "Ceux qui veulent un interlocuteur humain dédié", "TNS qui valorisent la solidité d'un grand groupe"],
    notFor: ["Indépendants qui veulent une expérience 100% digitale", "Ceux qui valorisent la rapidité des remboursements"],
    vsLinks: [{ slug: 'alan-vs-harmonie', label: 'Voir comparatif mutuelles' }],
  },
}
