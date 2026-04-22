export interface Tool {
  slug: string
  name: string
  logo: string
  logoUrl: string
  tagline: string
  category: 'facturation' | 'banque' | 'comptabilite' | 'mutuelle'
  rating: number
  reviewCount: number
  price: string
  priceDetail: string
  affiliateUrl: string
  freeTrial: string | null
  badge: string | null
  badgeColor: 'green' | 'blue' | 'purple' | null
  pros: string[]
  cons: string[]
  ideal: string
  features: string[]
  commission: string
  exclusiveOffer?: string
}

export const TOOLS: Tool[] = [
  {
    slug: 'indy',
    name: 'Indy',
    logo: '🟣',
    logoUrl: '/logos/indy.png',
    tagline: 'La comptabilité et facturation automatisées pour indépendants',
    category: 'facturation',
    rating: 4.7,
    reviewCount: 2840,
    price: 'Gratuit',
    priceDetail: 'puis à partir de 20€/mois',
    affiliateUrl: 'https://www.indy.fr/inscription?ae=1514',
    freeTrial: '1er mois offert',
    badge: 'Meilleur gratuit',
    badgeColor: 'purple',
    pros: [
      'Comptabilité 100% automatisée via connexion bancaire',
      'Déclarations URSSAF intégrées',
      'Interface très intuitive',
      'Version gratuite généreuse',
    ],
    cons: [
      'Facturation basique en version gratuite',
      'Moins adapté aux artisans',
    ],
    ideal: 'Freelances et professions libérales souhaitant automatiser leur comptabilité',
    features: ['Connexion bancaire', 'Déclarations URSSAF', 'Facturation électronique', 'Livre des recettes', 'Application mobile', 'Création de société'],
    commission: '+10€ inscription · +50€ abonnement Micro · +120€ abonnement EI · +250€ abonnement Société',
    exclusiveOffer: 'Via notre lien : 1er mois offert sur les plans payants',
  },
  {
    slug: 'freebe',
    name: 'Freebe',
    logo: '🔵',
    logoUrl: '/logos/freebe.png',
    tagline: 'La gestion complète pensée pour les freelances',
    category: 'facturation',
    rating: 4.6,
    reviewCount: 1920,
    price: 'À partir de 9,99€/mois',
    priceDetail: 'ou 7,99€/mois en annuel',
    affiliateUrl: 'https://link.freebe.me/Outils-Freelance',
    freeTrial: '2 mois offerts',
    badge: 'Meilleur freelance',
    badgeColor: 'blue',
    pros: [
      'Conçu spécifiquement pour les freelances',
      'Gestion du temps et de la rentabilité',
      'Suivi des missions de A à Z',
      'Relances automatiques élégantes',
    ],
    cons: [
      'Prix un peu élevé pour les petits volumes',
      'Moins adapté aux commerçants',
    ],
    ideal: 'Freelances en services : consultants, développeurs, designers, rédacteurs',
    features: ['Devis & factures', 'Suivi du temps', 'Suivi des missions', 'Déclaration CA', 'CRM simplifié'],
    commission: '50% du CA HT généré pendant la 1ère année',
    exclusiveOffer: 'Via notre lien : 2 mois offerts au lieu de 30 jours',
  },
  {
    slug: 'abby',
    name: 'Abby',
    logo: '🟢',
    logoUrl: '/logos/abby.png',
    tagline: 'Le logiciel tout-en-un pour auto-entrepreneurs',
    category: 'facturation',
    rating: 4.8,
    reviewCount: 3100,
    price: 'À partir de 5,40€/mois',
    priceDetail: 'Essai 30 jours gratuits',
    affiliateUrl: 'https://c3po.link/QsNZwhTBgx',
    freeTrial: '30 jours gratuits',
    badge: 'N°1 2026',
    badgeColor: 'green',
    pros: [
      'Très bon rapport qualité-prix',
      'Interface moderne et intuitive',
      'Gestion complète (facturation + compta)',
      '100 000 clients en 4 ans',
    ],
    cons: [
      'Uniquement pour micro-entreprises',
      'Pas adapté aux SARL/SAS',
    ],
    ideal: 'Auto-entrepreneurs souhaitant un outil complet et abordable',
    features: ['Facturation illimitée', 'Comptabilité', 'Déclarations', 'Paiement en ligne', 'Application mobile'],
    commission: 'Variable — forfait par client activé',
    exclusiveOffer: 'Via notre lien : 30 jours d\'essai gratuit sans CB',
  },
  {
    slug: 'qonto',
    name: 'Qonto',
    logo: '🔶',
    logoUrl: '/logos/qonto.png',
    tagline: 'La banque pro N°1 des indépendants en France',
    category: 'banque',
    rating: 4.6,
    reviewCount: 5200,
    price: 'À partir de 11€/mois HT',
    priceDetail: 'Pour freelances et micro-entreprises',
    affiliateUrl: 'https://qonto.com/fr/open-account?ref=outils-freelance',
    freeTrial: '30 jours gratuits',
    badge: 'Référence banque pro',
    badgeColor: 'blue',
    pros: [
      'Ouverture de compte en 10 minutes',
      'Facturation intégrée gratuite',
      'IBAN français dès le départ',
      'Dépôt d\'espèces via réseau PayCash (bureaux de tabac)',
      '500 000 clients — très fiable',
    ],
    cons: [
      'Pas le moins cher du marché',
      'Pas d\'agence physique — 100 % en ligne',
    ],
    ideal: 'Tous les indépendants cherchant une banque pro complète et reconnue',
    features: ['IBAN français', 'Carte Mastercard', 'Facturation incluse', 'Intégrations comptables', 'Support 7j/7'],
    commission: '80€ par client approuvé',
    exclusiveOffer: 'Via notre lien : 30 jours gratuits inclus',
  },
  {
    slug: 'shine',
    name: 'Shine',
    logo: '✨',
    logoUrl: '/logos/shine.jpg',
    tagline: 'Banque pro et gestion tout-en-un',
    category: 'banque',
    rating: 4.4,
    reviewCount: 2800,
    price: 'À partir de 7,90€/mois',
    priceDetail: 'Offre Basic sans engagement',
    affiliateUrl: 'https://www.shine.fr/?utm_source=affiliation&utm_medium=affiliae&utm_campaign=outils-freelance-fr&ae=1691',
    freeTrial: '30 jours gratuits',
    badge: null,
    badgeColor: null,
    pros: [
      'Moins cher que Qonto',
      'Interface très soignée',
      'Facturation et devis inclus',
      'Catégorisation automatique des dépenses',
    ],
    cons: [
      'Moins de fonctionnalités avancées que Qonto',
      'Support moins réactif',
    ],
    ideal: 'Freelances et auto-entrepreneurs cherchant une banque pro économique',
    features: ['IBAN français', 'Carte Visa', 'Facturation', 'Export comptable', 'Épargne pro'],
    commission: '50€ par client approuvé',
  },
  {
    slug: 'pennylane',
    name: 'Pennylane',
    logo: '🪙',
    logoUrl: '/logos/pennylane.png',
    tagline: 'Comptabilité et finances pour pros ambitieux',
    category: 'facturation',
    rating: 4.5,
    reviewCount: 840,
    price: 'À partir de 26€/mois',
    priceDetail: 'Sans engagement',
    affiliateUrl: 'https://www.pennylane.com/?ref=outils-freelance',
    freeTrial: '15 jours gratuits',
    badge: null,
    badgeColor: null,
    pros: [
      'Comptabilité temps réel très puissante',
      'Collaboration avec expert-comptable facilitée',
      'Reporting financier avancé',
      'Intégrations nombreuses',
    ],
    cons: [
      'Prix plus élevé',
      'Courbe d\'apprentissage plus longue',
    ],
    ideal: 'Freelances avec fort volume d\'activité souhaitant une vision financière complète',
    features: ['Comptabilité temps réel', 'Facturation', 'Trésorerie', 'TVA automatique', 'Collaboration comptable'],
    commission: '100€ par client activé',
  },

  // MUTUELLES
  {
    slug: 'alan',
    name: 'Alan',
    logo: '🔵',
    logoUrl: '/logos/alan.png',
    tagline: 'La mutuelle 100% digitale des indépendants',
    category: 'mutuelle',
    rating: 4.6,
    reviewCount: 412,
    price: 'À partir de 39€/mois',
    priceDetail: 'Selon âge et garanties',
    affiliateUrl: 'https://alan.com/?ref=outils-freelance',
    freeTrial: '30 jours satisfait ou remboursé',
    badge: 'Coup de cœur',
    badgeColor: 'blue',
    pros: ['Remboursements en 24h', 'App mobile très complète', 'Téléconsultation incluse', 'Sans papier'],
    cons: ['Pas le moins cher', 'Réseau de soins limité'],
    ideal: 'Freelances cherchant une mutuelle digitale avec remboursements rapides',
    features: ['Remboursements 24h', 'Téléconsultation', 'App mobile', 'Carte santé'],
    commission: 'Variable',
  },
  {
    slug: 'harmonie',
    name: 'Harmonie Mutuelle',
    logo: '🟢',
    logoUrl: '/logos/harmonie-mutelle.png',
    tagline: 'Le meilleur rapport qualité-prix pour indépendants',
    category: 'mutuelle',
    rating: 4.2,
    reviewCount: 268,
    price: 'À partir de 35€/mois',
    priceDetail: 'Offres spéciales indépendants',
    affiliateUrl: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance',
    freeTrial: null,
    badge: 'Meilleur prix',
    badgeColor: 'green',
    pros: ['Tarifs compétitifs', 'Offres spéciales indépendants', 'Bonne couverture hospitalière'],
    cons: ['Remboursements plus lents', 'Application mobile basique'],
    ideal: 'Auto-entrepreneurs cherchant une bonne couverture à prix raisonnable',
    features: ['Soins courants', 'Dentaire', 'Optique', 'Hospitalisation'],
    commission: 'Variable',
  },
  {
    slug: 'malakoff',
    name: 'Malakoff Humanis',
    logo: '🟤',
    logoUrl: '/logos/malakoff-humanis.png',
    tagline: 'L\'assurance mutuelle avec le réseau le plus large',
    category: 'mutuelle',
    rating: 4.3,
    reviewCount: 174,
    price: 'À partir de 45€/mois',
    priceDetail: 'Devis personnalisé',
    affiliateUrl: 'https://www.malakoffhumanis.com/?ref=outils-freelance',
    freeTrial: null,
    badge: null,
    badgeColor: null,
    pros: ['Réseau de soins étendu', 'Couverture dentaire et optique solide', 'Interlocuteur dédié'],
    cons: ['Interface moins moderne', 'Devis par téléphone uniquement'],
    ideal: 'Indépendants avec besoins importants en soins spécialisés',
    features: ['Réseau soins étendu', 'Dentaire renforcé', 'Optique', 'Prévoyance'],
    commission: 'Variable',
  },
]

export function getToolsByCategory(category: Tool['category']) {
  return TOOLS.filter(t => t.category === category)
}

export function getToolBySlug(slug: string) {
  return TOOLS.find(t => t.slug === slug)
}
