import { Metadata } from 'next'
import { TOOLS } from '@/lib/tools'
import { REVIEWS } from '@/lib/reviews'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ToolLogo } from '@/components/ToolLogo'
import { StickyBar } from '@/components/StickyBar'
import { ReviewSchema, BreadcrumbSchema, FAQSchema } from '@/components/Schema'

export async function generateStaticParams() {
  return TOOLS.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = TOOLS.find(t => t.slug === params.slug)
  if (!tool) return {}
  return {
    title: `Avis ${tool.name} 2026 — Test complet, tarifs et verdict`,
    description: `Notre avis complet sur ${tool.name} en 2026 : fonctionnalités, tarifs, points forts et faibles. ${tool.tagline}`,
  }
}

function Stars({ n, size = 'md' }: { n: number; size?: 'sm' | 'md' | 'lg' }) {
  const sz = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-sm' : 'text-xl'
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1,2,3,4,5].map(i => (
          <span key={i} className={`${sz} ${i <= Math.floor(n) ? 'text-amber-400' : i === Math.floor(n)+1 && n-Math.floor(n) >= 0.5 ? 'text-amber-300' : 'text-gray-200'}`}>★</span>
        ))}
      </div>
      <span className={`font-bold ${size === 'lg' ? 'text-xl' : 'text-base'} text-gray-900`}>{n}/5</span>
    </div>
  )
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  const pct = (value / 5) * 100
  const color = value >= 4.5 ? 'bg-emerald-500' : value >= 4 ? 'bg-indigo-500' : 'bg-amber-500'
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="font-semibold text-gray-900">{value}/5</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

const TOOL_BG: Record<string, string> = {
  qonto: '#FF5A50', shine: '#1B4332', alan: '#00BCD4',
  pennylane: '#1A1A2E', freebe: '#0061FF', indy: '#6C5CE7',
  abby: '#00C48C', harmonie: '#2E7D32', malakoff: '#7B3F00',
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = TOOLS.find(t => t.slug === params.slug)
  if (!tool) notFound()

  const review = REVIEWS[tool.slug]
  const others = TOOLS.filter(t => t.slug !== tool.slug && t.category === tool.category).slice(0, 3)
  const badgeCls = tool.badgeColor === 'green' ? 'badge-green' : tool.badgeColor === 'blue' ? 'badge-blue' : 'badge-purple'
  const comparatifHref = tool.category === 'banque' ? '/comparatifs/banques-pro' : tool.category === 'mutuelle' ? '/comparatifs/mutuelles-freelance' : '/comparatifs/logiciels-facturation'

  return (
    <>
      <ReviewSchema
        tool={tool.name}
        rating={tool.rating}
        reviewCount={tool.reviewCount}
        description={tool.tagline}
        url={`https://www.outils-freelance.fr/outils/${tool.slug}`}
        category={tool.category}
      />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://www.outils-freelance.fr' },
        { name: tool.category === 'banque' ? 'Banques pro' : tool.category === 'mutuelle' ? 'Mutuelles' : 'Logiciels de facturation', url: `https://www.outils-freelance.fr${comparatifHref}` },
        { name: `Avis ${tool.name}`, url: `https://www.outils-freelance.fr/outils/${tool.slug}` },
      ]} />
      {review?.faq && <FAQSchema faqs={review.faq} />}
      <StickyBar toolSlug={tool.slug} toolName={tool.name} toolUrl={tool.affiliateUrl} trialLabel={tool.freeTrial ?? ''} bg={TOOL_BG[tool.slug] ?? '#4F46E5'} />
      <div className="max-w-4xl mx-auto px-4 py-10">

        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link> &rsaquo;{' '}
          <Link href={comparatifHref} className="hover:text-indigo-600">Comparatifs</Link> &rsaquo; Avis {tool.name}
        </nav>

        <div className="card p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Avis {tool.name} 2026</h1>
                {tool.badge && <span className={badgeCls}>{tool.badge}</span>}
              </div>
              <p className="text-gray-500 mb-4 text-lg">{tool.tagline}</p>
              <Stars n={tool.rating} size="lg" />
              {review && <p className="text-sm text-gray-500 mt-3 italic">&ldquo;{review.verdictShort}&rdquo;</p>}
            </div>
            <div className="shrink-0 text-center sm:text-right">
              <div className="text-2xl font-bold text-gray-900 mb-1">{tool.price}</div>
              <div className="text-sm text-gray-400 mb-3">{tool.priceDetail}</div>
              {tool.freeTrial && <div className="text-xs text-emerald-600 font-semibold mb-4 bg-emerald-50 px-3 py-1.5 rounded-full inline-block">&#10003; {tool.freeTrial}</div>}
              <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary block text-center">
                Visiter le site &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {review && (
              <div className="card p-6">
                <h2 className="font-bold text-lg mb-5">Notre notation</h2>
                <div className="space-y-4">
                  <ScoreBar label="Facilité d'utilisation" value={review.score.facilite} />
                  <ScoreBar label="Rapport qualité-prix" value={review.score.prix} />
                  <ScoreBar label="Fonctionnalités" value={review.score.fonctions} />
                  <ScoreBar label="Support client" value={review.score.support} />
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Note globale</span>
                  <Stars n={review.score.note} />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="card p-5">
                <div className="font-bold text-emerald-700 mb-3">Points forts</div>
                <ul className="space-y-2.5">
                  {tool.pros.map(p => <li key={p} className="text-sm text-gray-700 flex gap-2 items-start"><span className="text-emerald-500 shrink-0">&#10003;</span>{p}</li>)}
                </ul>
              </div>
              <div className="card p-5">
                <div className="font-bold text-red-600 mb-3">Points faibles</div>
                <ul className="space-y-2.5">
                  {tool.cons.map(c => <li key={c} className="text-sm text-gray-700 flex gap-2 items-start"><span className="text-red-400 shrink-0">&ndash;</span>{c}</li>)}
                </ul>
              </div>
            </div>

            {review?.pricing && (
              <div className="card p-6">
                <h2 className="font-bold text-lg mb-5">Tarifs 2026</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {review.pricing.map((plan, i) => (
                    <div key={plan.plan} className={`rounded-xl p-5 border-2 ${i === 0 ? 'border-gray-100 bg-gray-50' : 'border-indigo-200 bg-indigo-50'}`}>
                      {i === 1 && <div className="badge-purple mb-2">Recommandé</div>}
                      <div className="font-bold text-gray-900 mb-1">{plan.plan}</div>
                      <div className="text-xl font-bold text-indigo-600 mb-3">{plan.price}</div>
                      <ul className="space-y-1.5">
                        {plan.features.map(f => <li key={f} className="text-xs text-gray-600 flex gap-2"><span className="text-indigo-400">&#10003;</span>{f}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary w-full justify-center mt-5">
                  Visiter le site &rarr;
                </a>
              </div>
            )}

            {review && (
              <div className="card p-6">
                <h2 className="font-bold text-lg mb-4">Notre verdict</h2>
                {review.verdict.split('\n\n').map((p, i) => (
                  <p key={i} className="text-sm text-gray-700 leading-relaxed mb-3">{p.trim()}</p>
                ))}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Idéal pour</div>
                    <ul className="space-y-1.5">
                      {review.bestFor.map(b => <li key={b} className="text-xs text-gray-600 flex gap-2"><span className="text-emerald-500">&#10003;</span>{b}</li>)}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Moins adapté si</div>
                    <ul className="space-y-1.5">
                      {review.notFor.map(n => <li key={n} className="text-xs text-gray-600 flex gap-2"><span className="text-red-400">&ndash;</span>{n}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="card p-6">
              <h2 className="font-bold text-lg mb-4">Fonctionnalités</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tool.features.map(f => (
                  <div key={f} className="text-sm text-gray-700 flex items-center gap-2.5 p-2.5 rounded-lg bg-gray-50">
                    <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 text-xs flex items-center justify-center shrink-0">&#10003;</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {review?.faq && (
              <div className="card p-6">
                <h2 className="font-bold text-lg mb-5">Questions fréquentes</h2>
                <div className="space-y-4">
                  {review.faq.map(f => (
                    <div key={f.q} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="font-semibold text-gray-900 mb-1.5 text-sm">{f.q}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          <aside className="space-y-5">
            <div className="card p-5 bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-100">
              <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
              <div className="font-bold text-gray-900 mt-3 mb-1">{tool.name}</div>
              <Stars n={tool.rating} size="sm" />
              <div className="text-sm font-semibold text-gray-900 mt-2">{tool.price}</div>
              {tool.freeTrial && <div className="text-xs text-emerald-600 mt-1 mb-3">&#10003; {tool.freeTrial}</div>}
              <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-primary w-full justify-center mt-3">
                Visiter le site &rarr;
              </a>
            </div>

            {review?.vsLinks && review.vsLinks.length > 0 && (
              <div className="card p-5">
                <div className="font-bold text-gray-900 mb-3 text-sm">Comparatifs directs</div>
                <div className="space-y-2">
                  {review.vsLinks.map(v => (
                    <Link key={v.slug} href={`/comparatifs/${v.slug}`} className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 py-1.5">
                      <span>&#9889;</span>{v.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {others.length > 0 && (
              <div className="card p-5 sticky top-20">
                <div className="font-bold text-gray-900 mb-3 text-sm">Alternatives</div>
                <div className="space-y-3">
                  {others.map(t => (
                    <Link key={t.slug} href={`/outils/${t.slug}`} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 transition-all group">
                      <ToolLogo slug={t.slug} name={t.name} size="sm" />
                      <div>
                        <div className="font-semibold text-sm group-hover:text-indigo-600">{t.name}</div>
                        <div className="text-xs text-gray-400">&#9733; {t.rating} &middot; {t.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  )
}
