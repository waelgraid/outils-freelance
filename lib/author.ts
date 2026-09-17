// Identité éditoriale du site.
// Google attend un auteur identifiable sur du contenu commercial (E-E-A-T).
// Adapte librement ces champs : ils alimentent les articles, la page
// méthodologie et le balisage Schema.org Person.

export const AUTHOR = {
  name: 'Wael Graid',
  role: 'Fondateur et rédacteur',
  // Une ou deux phrases sur ta légitimité à parler du sujet.
  bio: "Je travaille dans les systèmes d'information depuis plus de dix ans et j'édite Outils-Freelance.fr en indépendant. La règle applicable à un freelance change souvent, et beaucoup de guides en ligne n'ont pas suivi. Mon travail consiste à remonter au texte officiel, à dater ce que je publie, et à corriger quand c'est périmé.",
  // Laisse une chaîne vide pour masquer un lien.
  linkedin: '',
  email: 'contact@outils-freelance.fr',
  url: 'https://www.outils-freelance.fr/methodologie',
} as const

export const EDITORIAL = {
  // Date du dernier relevé tarifaire global, affichée sur les comparatifs.
  lastPricingCheck: 'septembre 2026',
  toolsReviewed: 9,
  toolsScreened: 50,
} as const
