import { MetadataRoute } from 'next'
import { TOOLS } from '@/lib/tools'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.outils-freelance.fr'
  const now = new Date()

  const staticPages = [
    { url: `${base}/`, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/comparatifs/logiciels-facturation/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/logiciels-comptabilite/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/logiciels-gestion/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/banques-pro/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/mutuelles-freelance/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-artisan/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-freelance-developpeur/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-consultant/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-medecin/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-graphiste/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-electricien/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-auto-entrepreneur/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/indy-vs-abby/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/qonto-vs-shine/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/freebe-vs-indy/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/freebe-vs-abby/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/pennylane-vs-indy/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/alan-vs-harmonie/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/calculateur-urssaf/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/blog/`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${base}/electricien/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/consultant-freelance/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/graphiste/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/medecin-liberal/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/developpeur-freelance/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/artisan-btp/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/methodologie/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/a-propos/`, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/politique-confidentialite/`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/contact/`, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${base}/mentions-legales/`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/politique-affiliation/`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const toolPages = TOOLS.map(t => ({
    url: `${base}/outils/${t.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: now,
  }))

  // Pages à fort potentiel SEO : crawl plus fréquent et priorité relevée
  const priorityArticles = new Set([
    'facture-situation-travaux',
    'tva-travaux-10-ou-20',
    'retenue-de-garantie-travaux',
    'autoliquidation-tva-sous-traitance-btp',
    'facture-acompte-modele',
    'facture-impayee-recouvrement',
    'penalites-de-retard-facture',
    'delai-paiement-legal-b2b',
    'facturer-client-etranger-auto-entrepreneur',
    'acompte-chantier-pourcentage-legal',
    'assurance-decennale-auto-entrepreneur-prix',
    'pv-reception-travaux-modele',
    'facturation-electronique-auto-entrepreneur',
    'mutuelle-auto-entrepreneur',
    'alan-mutuelle-avis',
    'meilleure-banque-pro-artisan',
    'tjm-developpeur-freelance',
  ])

  const articlePages = Object.entries(articles).map(([slug, a]) => ({
    url: `${base}/blog/${slug}/`,
    changeFrequency: (priorityArticles.has(slug) ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: priorityArticles.has(slug) ? 0.9 : 0.7,
    lastModified: new Date(a.date),
  }))

  return [...staticPages.map(p => ({ ...p, lastModified: now })), ...toolPages, ...articlePages]
}
