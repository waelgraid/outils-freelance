'use client'
import { useState } from 'react'
import Link from 'next/link'

interface NavLink { href: string; label: string }
interface MetierLink { href: string; label: string; desc: string }

export default function MobileNav({ links, metiers = [], metiersFooter }: { links: NavLink[]; metiers?: MetierLink[]; metiersFooter?: { href: string; label: string } }) {
  const [open, setOpen] = useState(false)
  // « Par métier » replié par défaut : le menu reste court à l'ouverture
  const [metiersOpen, setMetiersOpen] = useState(false)

  const close = () => { setOpen(false); setMetiersOpen(false) }

  return (
    <div className="md:hidden">
      <button
        onClick={() => (open ? close() : setOpen(true))}
        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}>
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
        <div className="absolute top-14 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 px-4 py-3 max-h-[calc(100dvh-3.5rem)] overflow-y-auto">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={close}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600 py-3 border-b border-gray-50 transition-colors">
              {l.label}
            </Link>
          ))}

          {metiers.length > 0 && (
            <div>
              <button
                onClick={() => setMetiersOpen(v => !v)}
                aria-expanded={metiersOpen}
                aria-controls="menu-metiers"
                className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:text-indigo-600 py-3 transition-colors">
                Par métier
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className={`text-gray-400 transition-transform duration-200 ${metiersOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {metiersOpen && (
                <div id="menu-metiers" className="pl-3 pb-2 border-l-2 border-indigo-100 ml-1">
                  {metiers.map(m => (
                    <Link key={m.href} href={m.href}
                      onClick={close}
                      className="block py-2.5 group">
                      <span className="block text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                        {m.label}
                      </span>
                      <span className="block text-xs text-gray-400 leading-snug">{m.desc}</span>
                    </Link>
                  ))}
                  {metiersFooter && (
                    <Link href={metiersFooter.href} onClick={close}
                      className="block pt-2 text-sm font-semibold text-indigo-600">
                      {metiersFooter.label} &rarr;
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
