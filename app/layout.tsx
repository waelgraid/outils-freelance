import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import MobileNav from '@/components/MobileNav'
import { NavDropdown } from '@/components/NavDropdown'
import { metierLinks } from '@/lib/metiers'
import { Analytics } from '@vercel/analytics/react'
import { WebSiteSchema, OrganizationSchema } from '@/components/Schema'
import { AffiliateTracker } from '@/components/AffiliateTracker'

export const metadata: Metadata = {
  title: { default: 'Outils-Freelance.fr — Les meilleurs outils pour freelances et auto-entrepreneurs', template: '%s | Outils-Freelance.fr' },
  description: 'Comparatifs indépendants de logiciels de facturation, banques pro, comptabilité et mutuelles. Trouvez l\'outil idéal pour votre micro-entreprise.',
  keywords: ['logiciel auto-entrepreneur', 'comparatif freelance', 'facturation micro-entreprise', 'banque pro freelance'],
  openGraph: {
    siteName: 'Outils-Freelance.fr',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://www.outils-freelance.fr/og-image.png', width: 1200, height: 630, alt: 'Outils-Freelance.fr — Comparatifs pour freelances' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@OutilsFreelance',
    images: ['https://www.outils-freelance.fr/og-image.png'],
  },
  metadataBase: new URL('https://www.outils-freelance.fr'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo.svg',
  },
  verification: {
    google: 'WVv0e-DByjZAc2DGPsHRhiJGJlpHmrEWuoTkIcljTQI',
    // bing: 'BING_VERIFICATION_CODE_ICI',  // À remplacer après inscription sur Bing Webmaster Tools
  },
}


const navLinks = [
  { href: '/comparatifs', label: 'Comparatifs' },
  { href: '/blog', label: 'Guides' },
  { href: '/calculateur-urssaf', label: 'Calculateur URSSAF' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      </head>
      <body className="bg-white min-h-screen flex flex-col">
        {/* NAV */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            <Link href="/" className="font-bold text-lg tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">outils</span><span className="text-gray-800">-freelance</span><span className="text-gray-300">.fr</span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(l => (
                <Link key={l.href} href={l.href}
                  className="text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-all font-medium">
                  {l.label}
                </Link>
              ))}
              <div className="px-3">
                <NavDropdown label="Par métier" items={metierLinks} />
              </div>
            </div>
            <MobileNav links={navLinks} metiers={metierLinks} />
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-950 mt-12 sm:mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="font-bold text-lg mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">outils</span><span className="text-white">-freelance</span><span className="text-gray-600">.fr</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Comparatifs indépendants d'outils pour freelances et auto-entrepreneurs français.</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Comparatifs</div>
              <Link href="/comparatifs" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Tous les comparatifs</Link>
              <Link href="/logiciel-facturation-auto-entrepreneur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Logiciels auto-entrepreneur</Link>
              <Link href="/comparatifs/logiciels-facturation" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Logiciels de facturation</Link>
              <Link href="/comparatifs/banques-pro" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Banques pro</Link>
              <Link href="/comparatifs/mutuelles-freelance" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Mutuelles freelance</Link>
              <Link href="/calculateur-urssaf" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Calculateur URSSAF</Link>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Blog & Guides</div>
              <Link href="/blog" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Blog</Link>
              <Link href="/artisan-btp" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Guide artisan du bâtiment</Link>
              <Link href="/blog/devenir-auto-entrepreneur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Guide auto-entrepreneur</Link>
              <Link href="/blog/plafond-micro-entreprise" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Plafonds micro-entreprise 2026</Link>
              <Link href="/blog/acre-auto-entrepreneur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">ACRE auto-entrepreneur</Link>
              <Link href="/blog/note-frais-auto-entrepreneur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Note de frais AE</Link>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Par métier</div>
              
              {metierLinks.map(m => (
                <Link key={m.href} href={m.href} className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">{m.label}</Link>
              ))}
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Légal</div>
              <Link href="/a-propos" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">À propos</Link>
              <Link href="/mentions-legales" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Mentions légales</Link>
              <Link href="/methodologie" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Notre méthodologie</Link>
              <Link href="/contact" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Contact</Link>
              <Link href="/politique-confidentialite" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Confidentialité</Link>
              <Link href="/politique-affiliation" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Politique d'affiliation</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center text-xs text-gray-600 py-5">
            © 2026 Outils-Freelance.fr · Comparatifs indépendants · <span className="text-indigo-500">Certains liens sont affiliés</span>
          </div>
        </footer>
        <WebSiteSchema />
        <OrganizationSchema />
        <Analytics />
        <AffiliateTracker />
      </body>
    </html>
  )
}
