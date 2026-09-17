'use client'
import { useState } from 'react'
import Link from 'next/link'

interface NavLink { href: string; label: string }
interface MetierLink { href: string; label: string; desc: string }

export default function MobileNav({ links, metiers = [], metiersFooter }: { links: NavLink[]; metiers?: MetierLink[]; metiersFooter?: { href: string; label: string } }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
        aria-label="Menu">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-14 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 px-4 py-3">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600 py-3 border-b border-gray-50 transition-colors">
              {l.label}
            </Link>
          ))}

          {metiers.length > 0 && (
            <div className="pt-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Par métier
              </div>
              {metiers.map(m => (
                <Link key={m.href} href={m.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 border-b border-gray-50 last:border-0 group">
                  <span className="block text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                    {m.label}
                  </span>
                  <span className="block text-xs text-gray-400 leading-snug">{m.desc}</span>
                </Link>
              ))}
              {metiersFooter && (
                <Link href={metiersFooter.href} onClick={() => setOpen(false)}
                  className="block pt-3 mt-1 border-t border-gray-100 text-sm font-semibold text-indigo-600">
                  {metiersFooter.label} &rarr;
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
