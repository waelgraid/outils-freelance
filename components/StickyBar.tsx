'use client'
import { useEffect, useState } from 'react'
import { ToolLogo } from '@/components/ToolLogo'

interface StickyBarProps {
  toolSlug: string
  toolName: string
  toolUrl: string
  trialLabel: string
  bg: string
  exclusiveOffer?: string
}

export function StickyBar({ toolSlug, toolName, toolUrl, trialLabel, bg, exclusiveOffer }: StickyBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <ToolLogo slug={toolSlug} name={toolName} size="sm" />
            <div>
              <span className="text-sm font-semibold text-gray-900">Notre choix : {toolName}</span>
              {trialLabel && (
                <div className="text-xs text-emerald-600 hidden sm:block">✓ {trialLabel}</div>
              )}
            </div>
          </div>
          <a href={toolUrl} target="_blank" rel="nofollow sponsored"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shrink-0">
            Voir le site →
          </a>
        </div>
      </div>
    </div>
  )
}
