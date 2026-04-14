'use client'
import { useEffect, useState } from 'react'
import { ToolLogo } from '@/components/ToolLogo'

interface StickyBarProps {
  toolSlug: string
  toolName: string
  toolUrl: string
  trialLabel: string
  bg: string
}

export function StickyBar({ toolSlug, toolName, toolUrl, trialLabel, bg }: StickyBarProps) {
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
              <span className="text-sm text-gray-400 ml-2 hidden sm:inline">{trialLabel}</span>
            </div>
          </div>
          <a href={toolUrl} target="_blank" rel="nofollow sponsored"
            className="text-sm font-semibold px-5 py-2 rounded-lg text-white shrink-0 transition-opacity hover:opacity-90"
            style={{ background: bg }}>
            Visiter le site →
          </a>
        </div>
      </div>
    </div>
  )
}
