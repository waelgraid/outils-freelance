'use client'
import { useEffect } from 'react'
import { track } from '@vercel/analytics'

export function AffiliateTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a[rel~="sponsored"]')
      if (!target) return

      const href = (target as HTMLAnchorElement).href
      const toolName = (() => {
        if (href.includes('indy.fr')) return 'Indy'
        if (href.includes('freebe.me') || href.includes('freebe')) return 'Freebe'
        if (href.includes('c3po.link') || href.includes('abby')) return 'Abby'
        if (href.includes('qonto.com')) return 'Qonto'
        if (href.includes('shine.fr')) return 'Shine'
        if (href.includes('pennylane')) return 'Pennylane'
        if (href.includes('alan.com')) return 'Alan'
        if (href.includes('harmonie-mutuelle')) return 'Harmonie Mutuelle'
        if (href.includes('malakoffhumanis')) return 'Malakoff Humanis'
        return 'Unknown'
      })()

      const page = window.location.pathname

      track('affiliate_click', {
        tool: toolName,
        page,
        url: href.slice(0, 100),
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
