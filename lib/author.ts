import { TOOLS } from './tools'

// Identité éditoriale du site — signature collective, sans donnée personnelle.
// Google attend un auteur identifiable sur du contenu commercial (E-E-A-T).
// Adapte librement ces champs : ils alimentent les articles, la page
// méthodologie et le balisage Schema.org Person.

export const AUTHOR = {
  name: "L'équipe Outils-Freelance",
  role: 'Rédaction',
  // Une ou deux phrases sur ta légitimité à parler du sujet.
  bio: "Outils-Freelance.fr est un site éditorial indépendant consacré aux outils et aux obligations des indépendants. La règle applicable à un freelance change souvent, et beaucoup de guides en ligne n'ont pas suivi : notre travail consiste à remonter au texte officiel, à dater ce que nous publions, et à corriger quand c'est périmé.",
  // Laisse une chaîne vide pour masquer un lien.
  linkedin: '',
  email: 'contact@outils-freelance.fr',
  url: 'https://www.outils-freelance.fr/methodologie',
}

export const EDITORIAL = {
  // Date de dernière vérification : à changer ici seulement, elle se propage
  // à toutes les pages (badges « Mis à jour », tarifs vérifiés).
  lastUpdate: 'septembre 2026',
  lastPricingCheck: 'septembre 2026',
  // Calculé automatiquement depuis la liste des outils.
  toolsReviewed: TOOLS.length,
  toolsScreened: 50,
}
