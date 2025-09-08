import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  keywords = [],
  image = '/images/og-default.jpg',
  url = siteConfig.url,
  type = 'website',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.tagline}`
  const fullUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  const defaultKeywords = [
    'yoga studio',
    'Huntsville Alabama',
    'private yoga sessions',
    'small group yoga',
    'online yoga classes',
    'women\'s gatherings',
    'holistic ceremonies',
    'sound healing',
    'meditation',
    'wellness',
    'safe space',
    'yoga instructor',
    'mindfulness',
    'healing',
    'spiritual wellness'
  ]

  const allKeywords = [...defaultKeywords, ...keywords].join(', ')

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    
    // Open Graph
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: 'en_US',
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@harmonyoakstudio', // Update with actual Twitter handle
    },

    // Additional meta tags
    other: {
      'theme-color': '#F1E3DA',
      'color-scheme': 'light',
      'format-detection': 'telephone=yes',
    },

    // Verification tags (to be updated with actual values)
    verification: {
      google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
    },

    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Local Business Structured Data
export function generateLocalBusinessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'YogaStudio',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Huntsville',
      addressRegion: 'AL',
      addressCountry: 'US',
      streetAddress: siteConfig.contact.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '34.7304', // Huntsville, AL coordinates
      longitude: '-86.5861',
    },
    openingHours: [
      'Mo-Sa 08:00-21:00',
      'Su 08:00-12:00',
    ],
    priceRange: '$$',
    image: `${siteConfig.url}/images/studio/studio-hero.jpg`,
    sameAs: [
      siteConfig.contact.instagram,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Yoga Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Private Yoga Sessions',
            description: 'One-on-one personalized yoga instruction tailored to your needs and goals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Small Group Classes',
            description: 'Intimate group yoga sessions with personalized attention in a supportive environment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Online Yoga Sessions',
            description: 'Virtual yoga classes from the comfort of your own home.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Women\'s Gatherings',
            description: 'Sacred circles and gatherings designed specifically for women\'s wellness and empowerment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sound Healing',
            description: 'Therapeutic sound experiences using singing bowls, gongs, and other healing instruments.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Holistic Ceremonies',
            description: 'Sacred ceremonies and rituals for healing, transformation, and spiritual growth.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// Service-specific structured data
export function generateServiceStructuredData(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'YogaStudio',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Huntsville',
      addressRegion: 'AL',
      addressCountry: 'US',
    },
    serviceType: 'Yoga Instruction',
    category: 'Health and Wellness',
  }
}