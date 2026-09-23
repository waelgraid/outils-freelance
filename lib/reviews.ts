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
    score: { note: 4.8, facilite: 4.8, prix: 5.0, support: 4.9, fonctions: 4.5 },
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
    score: { note: 4.5, facilite: 4.5, prix: 4.2, support: 4.5, fonctions: 4.8 },
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
      { q: 'Abby est-il conforme à la facturation électronique ?', a: "Oui. Abby génère vos factures au format Factur-X et s'interface avec une plateforme agréée. L'obligation de réception est en vigueur depuis le 1er septembre 2026, et l'émission au format structuré deviendra obligatoire au 1er septembre 2027 pour les micro-entreprises." },
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
    score: { note: 4.5, facilite: 4.7, prix: 4.2, support: 4.4, fonctions: 4.8 },
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
    score: { note: 4.5, facilite: 4.8, prix: 4.7, support: 4.3, fonctions: 4.2 },
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
    score: { note: 4.3, facilite: 4.2, prix: 3.8, support: 4.5, fonctions: 4.9 },
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
  vosfactures: {
    verdict: "VosFactures est un logiciel de facturation en ligne édité par Factuali, basé à Nice. Son atout principal en 2026 : il est lui-même plateforme agréée, immatriculé par la DGFiP le 15 avril 2026, et ce statut est inclus dans toutes ses formules sans surcoût. Il couvre l'essentiel de la facturation — devis, factures, bons de commande, avoirs, relances — avec une API ouverte et des intégrations e-commerce natives. Sa formule payante d'entrée à 5 € HT par mois est la moins chère de notre comparatif. En contrepartie, il ne tient pas de comptabilité, et sa formule gratuite, limitée à trois documents par mois, sert davantage d'essai que d'outil quotidien.",
    verdictShort: "Plateforme agréée native à petit prix — mais sans comptabilité.",
    score: { note: 4.4, facilite: 4.4, prix: 4.6, support: 4.0, fonctions: 4.3 },
    pricing: [
      { plan: 'Micro', price: 'Gratuit', features: ['3 documents par mois', 'Plateforme agréée incluse'] },
      { plan: 'Basique', price: '5 € HT/mois', features: ['Plateforme agréée incluse', 'Émission et réception électroniques'] },
      { plan: 'Formules supérieures', price: "Jusqu'à 60 € HT/mois", features: ['Volumes et fonctions étendus', "Détail sur le site de l'éditeur"] },
    ],
    faq: [
      { q: "VosFactures est-il une plateforme agréée ?", a: "Oui. VosFactures a été immatriculé comme plateforme agréée par la DGFiP le 15 avril 2026. Il peut donc émettre, recevoir et transmettre vos factures électroniques sans passer par un prestataire tiers, et ce statut est inclus dans toutes les formules, y compris la moins chère." },
      { q: "La formule gratuite est-elle utilisable au quotidien ?", a: "Rarement. Elle est limitée à trois documents par mois : un devis et deux factures suffisent à l'épuiser. Elle permet de tester l'outil ; pour une activité régulière, la formule Basique à 5 € HT par mois est plus réaliste." },
      { q: "VosFactures fait-il la comptabilité ?", a: "Non. C'est un logiciel de facturation : il couvre la pré-comptabilité et les exports, mais pas la tenue comptable, le bilan ni la liasse fiscale. En micro-entreprise, ce n'est généralement pas un problème ; au régime réel, il faudra un logiciel comptable ou un expert-comptable en complément." },
      { q: "Convient-il aux boutiques en ligne ?", a: "Oui, c'est un de ses points forts : il propose des intégrations avec WooCommerce, PrestaShop, Shopify et Wix, ainsi qu'une API ouverte pour automatiser la facturation des ventes." },
    ],
    bestFor: ["Auto-entrepreneurs qui veulent une plateforme agréée au plus petit prix", "Boutiques en ligne sous WooCommerce, PrestaShop, Shopify ou Wix", "Ceux qui veulent un outil de facturation simple, sans module comptable superflu"],
    notFor: ["Ceux qui cherchent une offre gratuite utilisable au quotidien (Indy est plus adapté)", "Indépendants au régime réel qui veulent la comptabilité intégrée (Indy ou Pennylane)", "Ceux qui gèrent tout depuis leur téléphone : l'application est moins complète que le web"],
    vsLinks: [{ slug: 'logiciels-facturation', label: 'Comparatif des logiciels de facturation' }],
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
    notFor: ["Budget très serré (Wemind est moins chère à partir de 22€/mois)", "Meilleures garanties dentaires recherchées (April Santé est plus performant)"],
    vsLinks: [{ slug: 'alan-vs-harmonie', label: 'Alan vs Wemind' }],
  },

  wemind: {
    verdict: `Wemind est notre recommandation pour les auto-entrepreneurs et freelances qui cherchent le meilleur rapport qualité-prix. Dès 22€/mois, c'est la mutuelle la moins chère du marché pour les indépendants, avec une couverture correcte sur les soins courants, le dentaire et l'optique. Sa communauté d'indépendants et son positionnement spécialisé freelances en font un choix cohérent pour ceux qui démarrent ou qui ont un budget limité. Sans engagement, vous pouvez résilier à tout moment si vos besoins évoluent.`,
    verdictShort: 'La mutuelle la moins chère du marché pour les freelances — dès 22€/mois, sans engagement.',
    score: { note: 4.5, facilite: 4.5, prix: 5.0, support: 4.0, fonctions: 4.2 },
    pricing: [
      { plan: 'Micro-entrepreneur', price: 'À partir de 22€/mois', features: ['Soins courants', 'Dentaire', 'Optique', 'Téléconsultation incluse'] },
      { plan: 'Freelance+', price: 'Sur devis', features: ['Tout Micro + prévoyance', 'RC Pro disponible', 'Hospitalisation renforcée'] },
    ],
    faq: [
      { q: 'Wemind est-elle une vraie mutuelle ?', a: "Oui, Wemind est un assureur santé agréé, spécialisé dans les offres pour freelances et micro-entrepreneurs. Elle propose une couverture complémentaire santé classique ainsi que des options prévoyance et RC Pro." },
      { q: 'Comment résilier une mutuelle Wemind ?', a: "Wemind se résilie sans engagement. Vous pouvez envoyer votre demande depuis l'espace client ou par email. Il n'y a pas de préavis de 2 mois contrairement aux mutuelles traditionnelles." },
      { q: 'Wemind propose-t-elle la téléconsultation ?', a: "Oui, Wemind inclut la téléconsultation médicale dans ses offres. Vous pouvez consulter un médecin à distance depuis l'application, 7j/7." },
    ],
    bestFor: ["Auto-entrepreneurs avec budget limité (dès 22€/mois)", "Freelances cherchant une mutuelle sans engagement", "Indépendants qui veulent rejoindre une communauté de freelances"],
    notFor: ["Ceux qui veulent les remboursements les plus rapides (Alan est plus rapide)", "Professions libérales cherchant un contrat Madelin optimisé (April est plus adapté)"],
    vsLinks: [{ slug: 'alan-vs-harmonie', label: 'Wemind vs Alan' }],
  },
  april: {
    verdict: "April conçoit des complémentaires santé pour travailleurs non salariés depuis plus de vingt-cinq ans, avec une gamme dédiée déclinée en trois lignes : Santé Pro Start (offre budget, cinq niveaux), Santé Pro (cœur de gamme, six niveaux) et Santé PRO Privilège (trois niveaux premium). C'est l'offre la plus large de notre comparatif, avec des garanties dentaires qui montent jusqu'à 550 % de la base de remboursement sur la gamme Santé Pro. Toutes les formules sont des contrats responsables éligibles à la déduction Madelin, ce qui en fait un choix cohérent pour un indépendant au régime réel. En contrepartie, aucun tarif n'est public : tout passe par un devis, et la multiplicité des niveaux demande un peu de temps pour choisir.",
    verdictShort: "La gamme TNS la plus complète du comparatif, éligible Madelin — mais uniquement sur devis.",
    score: { note: 4.2, facilite: 4.0, prix: 3.8, support: 3.8, fonctions: 4.9 },
    pricing: [
      { plan: 'Santé Pro Start', price: 'Sur devis', features: ['5 niveaux de garanties', 'Offre budget', 'Sans limite d\u2019âge à l\u2019adhésion'] },
      { plan: 'Santé Pro', price: 'Sur devis', features: ['6 niveaux de garanties', 'Dentaire jusqu\u2019à 550 % BR', 'Éligible Madelin'] },
      { plan: 'Santé PRO Privilège', price: 'Sur devis', features: ['3 niveaux premium', 'Réseau de soins Kalixia', 'Téléconsultation incluse'] },
    ],
    faq: [
      { q: "La mutuelle April est-elle déductible en micro-entreprise ?", a: "Non. La déduction Madelin est réservée aux travailleurs non salariés imposés au régime réel : entrepreneur individuel au réel, gérant d'EURL, gérant majoritaire de SARL. En micro-entreprise, l'abattement forfaitaire remplace toute déduction de charges, et le président d'une SASU, assimilé salarié, ne relève pas non plus de ce dispositif." },
      { q: "Peut-on souscrire April entièrement en ligne ?", a: "Oui. L'adhésion aux contrats santé TNS se fait en ligne, sans questionnaire médical, et sans délai de carence sur les garanties de base. Le tarif, en revanche, n'est affiché qu'après une demande de devis, car il dépend de l'âge, de la zone géographique et du niveau choisi." },
      { q: "À quoi sert la surcomplémentaire April ?", a: "Elle renforce les remboursements, notamment sur les dépassements d'honoraires. Attention : c'est un contrat non responsable, dont la cotisation n'est pas déductible au titre de la loi Madelin, contrairement au contrat principal." },
      { q: "Peut-on résilier sa mutuelle April ?", a: "Oui, à tout moment après la première année de contrat, comme pour toute complémentaire santé depuis la réforme de la résiliation infra-annuelle entrée en vigueur en décembre 2020." },
    ],
    bestFor: ["Indépendants au régime réel qui veulent déduire leurs cotisations via la loi Madelin", "Profils avec des besoins dentaires importants (prothèses, implants)", "Ceux qui veulent choisir finement leur niveau de garanties"],
    notFor: ["Micro-entrepreneurs qui cherchent le tarif d'entrée le plus bas (Wemind est plus adapté)", "Ceux qui veulent une expérience 100 % application et des remboursements en 24 h (Alan est plus adapté)", "Ceux qui veulent connaître le prix sans passer par un devis"],
    vsLinks: [{ slug: 'mutuelles-freelance', label: 'Comparatif des mutuelles' }],
  },

}
