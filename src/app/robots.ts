import { siteConfig } from '@/config/site'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/thank-you',
        '/book/confirmation',
        '/api/',
        '/_next/',
        '/admin/',
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}