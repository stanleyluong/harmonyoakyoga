import { siteConfig } from '@/config/site'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Harmony Oak',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F1E3DA',
    theme_color: '#F1E3DA',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
    categories: ['health', 'fitness', 'lifestyle', 'wellness'],
    lang: 'en',
    dir: 'ltr',
  }
}