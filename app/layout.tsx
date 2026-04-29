import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import MobileNav from '@/components/MobileNav'
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
  { href: '/calculateur-urssaf', label: 'Calculateur URSSAF' },
  { href: '/blog', label: 'Blog' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
            </div>
            <MobileNav links={navLinks} />
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-950 mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="font-bold text-lg mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">outils</span><span className="text-white">-freelance</span><span className="text-gray-600">.fr</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Comparatifs indépendants d'outils pour freelances et auto-entrepreneurs français.</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Comparatifs</div>
              <Link href="/comparatifs" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Tous les comparatifs</Link>
              <Link href="/comparatifs/logiciels-facturation" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Logiciels de facturation</Link>
              <Link href="/comparatifs/banques-pro" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Banques pro</Link>
              <Link href="/comparatifs/mutuelles-freelance" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Mutuelles freelance</Link>
              <Link href="/calculateur-urssaf" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Calculateur URSSAF</Link>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Blog & Guides</div>
              <Link href="/blog" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Blog</Link>
              <Link href="/blog/devenir-auto-entrepreneur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Guide auto-entrepreneur</Link>
              <Link href="/blog/plafond-micro-entreprise" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Plafonds micro-entreprise 2026</Link>
              <Link href="/blog/acre-auto-entrepreneur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">ACRE auto-entrepreneur</Link>
              <Link href="/blog/note-frais-auto-entrepreneur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Note de frais AE</Link>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Par métier</div>
              <Link href="/logiciel-facturation-artisan" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Artisan & BTP</Link>
              <Link href="/logiciel-facturation-electricien" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Électricien</Link>
              <Link href="/logiciel-facturation-freelance-developpeur" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Développeur freelance</Link>
              <Link href="/logiciel-facturation-consultant" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Consultant indépendant</Link>
              <Link href="/logiciel-facturation-medecin" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Médecin libéral</Link>
              <Link href="/logiciel-facturation-graphiste" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Graphiste freelance</Link>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Légal</div>
              <Link href="/a-propos" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">À propos</Link>
              <Link href="/mentions-legales" className="block text-sm text-gray-500 hover:text-indigo-400 mb-2.5 transition-colors">Mentions légales</Link>
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
