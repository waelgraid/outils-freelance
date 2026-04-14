import { Metadata } from 'next'
import { articles } from '@/lib/articles'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TOOLS } from '@/lib/tools'
import { ToolCard } from '@/components/ToolCard'
import { ArticleSchema, BreadcrumbSchema } from '@/components/Schema'
import { ToolLogo } from '@/components/ToolLogo'


function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return iso }
}

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug]
  if (!article) return {}
  return { title: article.title, description: article.description }
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let tableRows: string[][] = []
  let inTable = false
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) { if (inTable) { inTable = false; tableRows = [] }; continue }

    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold mt-10 mb-4 text-gray-900">{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-lg font-semibold mt-6 mb-2 text-gray-800">{line.slice(4)}</h3>)
    } else if (line.startsWith('- ')) {
      const items = [line.slice(2)]
      while (i + 1 < lines.length && lines[i+1].trim().startsWith('- ')) {
        i++; items.push(lines[i].trim().slice(2))
      }
      elements.push(
        <ul key={key++} className="list-disc pl-6 mb-4 space-y-1.5">
          {items.map((item, j) => <li key={j} className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
        </ul>
      )
    } else if (line.startsWith('|')) {
      const cells = line.split('|').filter(c => c.trim() && !c.trim().match(/^[-:]+$/))
      if (cells.length > 0) {
        if (!inTable) {
          inTable = true
          tableRows = [cells.map(c => c.trim())]
        } else if (!line.match(/^\|[-| :]+\|$/)) {
          tableRows.push(cells.map(c => c.trim()))
        }
        if (lines[i+1] === undefined || !lines[i+1].trim().startsWith('|')) {
          elements.push(
            <div key={key++} className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>{tableRows[0].map((h,j) => <th key={j} className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-700 border border-gray-200">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {tableRows.slice(1).map((row, ri) => (
                    <tr key={ri} className="hover:bg-gray-50">
                      {row.map((cell, ci) => <td key={ci} className="px-4 py-2 border border-gray-200 text-gray-700">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          inTable = false; tableRows = []
        }
      }
    } else {
      elements.push(
        <p key={key++} className="text-gray-700 mb-4 leading-relaxed text-sm"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
      )
    }
  }
  return <>{elements}</>
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) notFound()

  const isMutuelle = /mutuelle|assurance|santé|prévoyance|alan|harmonie/.test(
    `${article.tag} ${params.slug} ${article.title}`.toLowerCase()
  )

  const comparatifLink = (() => {
    const text = `${article.tag} ${params.slug} ${article.title}`.toLowerCase()
    if (text.match(/banque|compte.pro|bancaire/)) return '/comparatifs/banques-pro'
    if (text.match(/mutuelle|assurance|alan|harmonie/)) return '/comparatifs/mutuelles-freelance'
    if (text.match(/comptab|urssaf|cotisation|déclaration/)) return '/comparatifs/logiciels-comptabilite'
    return '/comparatifs/logiciels-facturation'
  })()

  const relatedTools = (() => {
    const text = `${article.tag} ${params.slug} ${article.title}`.toLowerCase()
    if (isMutuelle) return []
    if (text.match(/banque|compte.pro|bancaire|qonto|shine/))
      return TOOLS.filter(t => ['qonto', 'shine'].includes(t.slug))
    if (text.match(/comptab|urssaf|cotisation|charge|impôt|tva|fiscal|déclaration|pennylane/))
      return TOOLS.filter(t => ['indy', 'pennylane', 'abby'].includes(t.slug))
    if (text.match(/facturation|facture|devis|freebe|abby/))
      return TOOLS.filter(t => ['abby', 'freebe', 'indy'].includes(t.slug))
    if (text.match(/micro.entreprise|auto.entrepreneur|sasu|créer|lancer|démarrer|arrêter/))
      return TOOLS.filter(t => ['abby', 'indy', 'shine'].includes(t.slug))
    if (text.match(/revenu|optimis|tarif|augmenter|conseil/))
      return TOOLS.filter(t => ['freebe', 'indy', 'qonto'].includes(t.slug))
    if (text.match(/juridique|structure|statut/))
      return TOOLS.filter(t => ['abby', 'pennylane', 'indy'].includes(t.slug))
    if (text.match(/avis.indy|indy-avis/))
      return TOOLS.filter(t => ['abby', 'freebe', 'pennylane'].includes(t.slug))
    if (text.match(/avis.abby|abby-avis/))
      return TOOLS.filter(t => ['indy', 'freebe', 'qonto'].includes(t.slug))
    return TOOLS.filter(t => ['abby', 'indy', 'freebe'].includes(t.slug))
  })()

  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.description}
        date={article.date}
        url={`https://www.outils-freelance.fr/blog/${params.slug}`}
      />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: 'Blog', url: 'https://www.outils-freelance.fr/blog' },
        { name: article.title.slice(0, 60), url: `https://www.outils-freelance.fr/blog/${params.slug}` },
      ]} />
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-indigo-600">Accueil</Link> ›{' '}
        <Link href="/blog" className="hover:text-indigo-600">Blog</Link> ›{' '}
        <span className="text-gray-600">{article.title.slice(0, 40)}…</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ARTICLE */}
        <div className="lg:col-span-2">
          <span className="badge-purple mb-4 inline-block">{article.tag}</span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-8 pb-6 border-b border-gray-100">
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readTime} de lecture</span>
            <span>·</span>
            <span>Équipe Outils-Freelance.fr</span>
          </div>
          <div className="article-content">
            {renderContent(article.content)}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-5">
          <div className="card p-5 sticky top-20">
            <div className="font-bold text-gray-900 mb-4">Nos recommandations</div>
            {isMutuelle ? (
              <div>
                <p className="text-sm text-gray-500 mb-4">Vous cherchez la meilleure mutuelle pour indépendant ? Consultez notre comparatif dédié.</p>
                {[
                  { name: 'Alan', desc: 'La mutuelle 100% digitale', prix: 'À partir de 39€/mois', slug: 'alan', url: 'https://alan.com/?ref=outils-freelance' },
                  { name: 'Harmonie Mutuelle', desc: 'Meilleur rapport qualité-prix', prix: 'À partir de 35€/mois', slug: 'harmonie', url: 'https://www.harmonie-mutuelle.fr/?ref=outils-freelance' },
                ].map(m => (
                  <a key={m.name} href={m.url} target="_blank" rel="nofollow sponsored"
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group mb-2">
                    <ToolLogo slug={m.slug} name={m.name} size="sm" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm group-hover:text-indigo-600">{m.name}</div>
                      <div className="text-xs text-gray-500">{m.prix}</div>
                    </div>
                    <span className="text-xs text-indigo-500 font-medium shrink-0">Visiter →</span>
                  </a>
                ))}
                <Link href="/comparatifs/mutuelles-freelance" className="btn-primary w-full justify-center mt-3 text-xs py-2">
                  Voir le comparatif →
                </Link>
              </div>
            ) : (
              <div>
                <div className="space-y-3">
                  {relatedTools.map(tool => (
                    <a key={tool.slug} href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored"
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group">
                      <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm group-hover:text-indigo-600">{tool.name}</div>
                        <div className="text-xs text-gray-500">{tool.price}</div>
                        {tool.freeTrial && <div className="text-xs text-green-600 font-medium">✓ {tool.freeTrial}</div>}
                      </div>
                    </a>
                  ))}
                </div>
                <Link href={comparatifLink} className="btn-primary w-full justify-center mt-4 text-xs py-2">
                  Voir tous les comparatifs →
                </Link>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* RELATED ARTICLES */}
      <div className="mt-14 border-t border-gray-100 pt-10">
        <h2 className="text-xl font-bold mb-6">Articles liés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {Object.entries(articles).filter(([s]) => s !== params.slug).slice(0,3).map(([slug, a]) => (
            <Link key={slug} href={`/blog/${slug}`} className="card p-5 group">
              <span className="badge-purple mb-2 inline-block">{a.tag}</span>
              <h3 className="font-semibold text-sm text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">{a.title}</h3>
              <div className="text-xs text-gray-400 mt-3">{a.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
