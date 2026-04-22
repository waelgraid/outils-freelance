interface FAQ { q: string; a: string }

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ReviewSchema({ tool, rating, reviewCount, description, url, category, price }: {
  tool: string
  rating: number
  reviewCount: number
  description?: string
  url?: string
  category?: string
  price?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': category === 'banque' ? 'FinancialProduct' : category === 'mutuelle' ? 'InsuranceAgency' : 'SoftwareApplication',
    name: tool,
    description: description ?? `Logiciel ${tool} pour auto-entrepreneurs et freelances`,
    url: url ?? `https://www.outils-freelance.fr/outils/${tool.toLowerCase()}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      ...(price ? { price: price.replace(/[^0-9,.]/g, '').replace(',', '.') } : {}),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
      worstRating: 1
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rating,
        bestRating: 5,
      },
      author: {
        '@type': 'Organization',
        name: 'Outils-Freelance.fr'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Outils-Freelance.fr',
        url: 'https://www.outils-freelance.fr'
      }
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ArticleSchema({ title, description, date, updatedAt, url, image }: {
  title: string
  description: string
  date: string
  updatedAt?: string
  url: string
  image?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    dateModified: updatedAt ?? date,
    url,
    image: image ?? 'https://www.outils-freelance.fr/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'Outils-Freelance.fr',
      url: 'https://www.outils-freelance.fr'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Outils-Freelance.fr',
      url: 'https://www.outils-freelance.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.outils-freelance.fr/logo.svg'
      }
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Outils-Freelance.fr',
    url: 'https://www.outils-freelance.fr',
    description: 'Comparatifs indépendants d\'outils pour freelances et auto-entrepreneurs français.',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Outils-Freelance.fr',
    url: 'https://www.outils-freelance.fr',
    logo: 'https://www.outils-freelance.fr/logo.svg',
    description: 'Comparatifs indépendants d\'outils pour freelances et auto-entrepreneurs français.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@outils-freelance.fr',
      contactType: 'customer support',
      availableLanguage: 'French',
    },
    areaServed: 'FR',
    sameAs: [],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ComparisonSchema({ tool1, tool2, winner }: {
  tool1: { name: string; rating: number; url: string }
  tool2: { name: string; rating: number; url: string }
  winner: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${tool1.name} vs ${tool2.name} — Comparatif 2026`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: tool1.name,
        url: tool1.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: tool2.name,
        url: tool2.url,
      }
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
