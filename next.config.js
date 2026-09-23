/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.google.com' },
      { protocol: 'https', hostname: 'logo.clearbit.com' },
    ],
  },
  // Fusion des comparatifs facturation / comptabilité / gestion (mêmes outils comparés)
  async redirects() {
    return [
      { source: '/comparatifs/logiciels-comptabilite', destination: '/comparatifs/logiciels-facturation/', permanent: true },
      { source: '/comparatifs/logiciels-gestion', destination: '/comparatifs/logiciels-facturation/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
        ],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|svg|webp)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}
module.exports = nextConfig
