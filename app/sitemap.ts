import { MetadataRoute } from 'next'
import { TOOLS } from '@/lib/tools'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.outils-freelance.fr'
  const now = new Date()

  const staticPages = [
    { url: base, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/comparatifs/logiciels-facturation`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/logiciels-comptabilite`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/banques-pro`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/comparatifs/mutuelles-freelance`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-artisan`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-freelance-developpeur`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-consultant`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/indy-vs-abby`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/qonto-vs-shine`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/freebe-vs-indy`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/freebe-vs-abby`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/pennylane-vs-indy`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/comparatifs/alan-vs-harmonie`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-medecin`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-graphiste`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-electricien`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/logiciel-facturation-auto-entrepreneur`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: 'daily' as const, priority: 0.8 },
  ]

  const toolPages = TOOLS.map(t => ({
    url: `${base}/outils/${t.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: now,
  }))

  const articlePages = Object.keys(articles).map(slug => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: now,
  }))

  return [...staticPages.map(p => ({ ...p, lastModified: now })), ...toolPages, ...articlePages]
}
