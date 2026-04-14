import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Blog — Guides pour freelances et auto-entrepreneurs',
  description: 'Guides pratiques, conseils et actualités pour les freelances et auto-entrepreneurs français.',
  alternates: { canonical: 'https://www.outils-freelance.fr/blog' },
}

export default function BlogPage() {
  const articleList = Object.entries(articles).map(([slug, a]) => ({ slug, ...a }))

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Blog Outils-Freelance.fr</h1>
        <p className="text-gray-600">Guides pratiques et conseils pour les freelances et auto-entrepreneurs français.</p>
        <p className="text-sm text-gray-400 mt-1">{articleList.length} articles</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articleList.map(a => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="card p-5 group flex flex-col">
            <span className="badge-purple mb-3 self-start">{a.tag}</span>
            <h2 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug flex-1">{a.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{a.description}</p>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
              <span>{a.date}</span>
              <span>·</span>
              <span>{a.readTime} de lecture</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
