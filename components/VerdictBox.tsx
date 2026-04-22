import { ToolLogo } from '@/components/ToolLogo'

interface VerdictBoxProps {
  slug: string
  name: string
  affiliateUrl: string
  score: number
  verdictShort: string
  pros: string[]
  exclusiveOffer?: string
  trialLabel: string
  bg?: string
}

const BRAND_BG: Record<string, string> = {
  abby: '#00C48C',
  indy: '#6C5CE7',
  freebe: '#0061FF',
  qonto: '#FF5A50',
  shine: '#1B4332',
  pennylane: '#1A1A2E',
  alan: '#00BCD4',
  harmonie: '#2E7D32',
}

export function VerdictBox({
  slug, name, affiliateUrl, score, verdictShort, pros, exclusiveOffer, trialLabel, bg
}: VerdictBoxProps) {
  const brandBg = bg ?? BRAND_BG[slug] ?? '#4F46E5'

  return (
    <div className="my-10 rounded-2xl border border-gray-200 overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-100">
        <ToolLogo slug={slug} name={name} size="sm" />
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-gray-900">Notre avis : {name}</span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
              {score}/5
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5">{verdictShort}</p>
        </div>
      </div>

      <div className="px-6 py-5">
        {/* Note */}
        <div className="flex items-center gap-1 mb-5">
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} className={`text-lg ${i <= Math.round(score) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
          ))}
          <span className="ml-2 text-sm text-gray-600">{score}/5 — notre évaluation</span>
        </div>

        {/* Points forts */}
        <ul className="space-y-2 mb-6">
          {pros.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
              {p}
            </li>
          ))}
        </ul>

        {/* Offre d'essai — discret */}
        {trialLabel && (
          <div className="text-sm text-gray-500 mb-5">
            ✓ <span className="text-emerald-600 font-medium">{trialLabel}</span> disponible
          </div>
        )}

        {/* CTA */}
        <a
          href={affiliateUrl}
          target="_blank"
          rel="nofollow sponsored"
          className="block w-full text-center font-semibold text-sm py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors mb-2"
        >
          Découvrir {name} →
        </a>
        <p className="text-center text-xs text-gray-300">Lien affilié · même prix qu&apos;en direct</p>
      </div>
    </div>
  )
}

// Version compacte pour les articles de blog
export function VerdictBoxCompact({
  slug, name, affiliateUrl, tagline, trialLabel, bg
}: {
  slug: string
  name: string
  affiliateUrl: string
  tagline: string
  trialLabel: string
  bg?: string
}) {
  const brandBg = bg ?? BRAND_BG[slug] ?? '#4F46E5'

  return (
    <div className="my-8 bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
      <ToolLogo slug={slug} name={name} size="sm" />
      <div className="flex-1 text-center sm:text-left">
        <div className="font-semibold text-gray-900 mb-0.5">Notre recommandation : {name}</div>
        <p className="text-sm text-gray-500">{tagline}</p>
        {trialLabel && (
          <p className="text-xs text-emerald-600 mt-1">✓ {trialLabel}</p>
        )}
      </div>
      <a
        href={affiliateUrl}
        target="_blank"
        rel="nofollow sponsored"
        className="shrink-0 font-semibold text-sm px-5 py-2.5 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
      >
        Voir le site →
      </a>
    </div>
  )
}
