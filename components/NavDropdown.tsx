'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export interface MetierLink {
  href: string
  label: string
  desc: string
}

export function NavDropdown({
  label,
  items,
  footerLink,
}: {
  label: string
  items: MetierLink[]
  footerLink?: { href: string; label: string }
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Fermeture au clic extérieur et à la touche Échap
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600 transition-colors py-2"
      >
        {label}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
          <div className="w-72 bg-white border border-gray-100 rounded-2xl shadow-lg p-2">
            {items.map(m => (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors group"
              >
                <div className="text-sm font-medium text-gray-800 group-hover:text-indigo-600">
                  {m.label}
                </div>
                <div className="text-xs text-gray-400 leading-snug mt-0.5">{m.desc}</div>
              </Link>
            ))}
            {footerLink && (
              <Link
                href={footerLink.href}
                onClick={() => setOpen(false)}
                className="block mt-1 pt-3 border-t border-gray-100 px-3 pb-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                {footerLink.label} &rarr;
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
