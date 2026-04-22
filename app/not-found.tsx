import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-8xl font-bold text-gray-100 mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Page introuvable</h1>
      <p className="text-gray-500 mb-10">Cette page n'existe pas ou a été déplacée.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-8">
        {[
          { href: '/comparatifs/logiciels-facturation', label: 'Facturation' },
          { href: '/comparatifs/banques-pro', label: 'Banque pro' },
          { href: '/comparatifs/logiciels-comptabilite', label: 'Comptabilité' },
          { href: '/comparatifs/mutuelles-freelance', label: 'Mutuelle' },
        ].map(l => (
          <Link key={l.href} href={l.href}
            className="border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-all">
            {l.label}
          </Link>
        ))}
      </div>
      <Link href="/" className="text-sm text-indigo-600 hover:underline font-medium">
        ← Retour à l'accueil
      </Link>
    </div>
  )
}
