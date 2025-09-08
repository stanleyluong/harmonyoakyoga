import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import SkipNavigation from '@/components/ui/SkipNavigation'
import { siteConfig } from '@/config/site'
import { generateLocalBusinessStructuredData, generateMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Dancing_Script, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Optimized font loading with display swap
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  preload: false, // Less critical font
})

// Dynamically import Web Vitals for performance monitoring
const WebVitals = dynamic(() => import('@/components/WebVitals'), {
  ssr: false,
})

// Conditionally import Accessibility Tester for development
const AccessibilityTester = process.env.NODE_ENV === 'development' 
  ? dynamic(() => import('@/components/dev/AccessibilityTester'), {
      ssr: false,
      loading: () => null,
    })
  : () => null

export const metadata: Metadata = {
  ...generateMetadata({
    title: 'Harmony Oak Studio',
    description: 'Professional yoga studio in Huntsville, Alabama offering private sessions, small groups, online classes, women\'s gatherings, holistic ceremonies, and sound healing. Creating a safe space for healing and growth.',
    keywords: ['yoga studio Huntsville', 'Alabama yoga', 'private yoga sessions', 'sound healing', 'women\'s gatherings'],
  }),
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessData = generateLocalBusinessStructuredData()

  const skipNavLinks = [
    { href: '#main-content', label: 'Skip to main content' },
    { href: '#navigation', label: 'Skip to navigation' },
    { href: '#footer', label: 'Skip to footer' },
  ]

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://calendly.com" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#CE9C7E" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-body antialiased`}
        suppressHydrationWarning={true}
      >
        <SkipNavigation links={skipNavLinks} />
        <div className="flex flex-col min-h-screen bg-light">
          <Header />
          <main id="main-content" className="flex-1 relative" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Web Vitals monitoring in production */}
        {process.env.NODE_ENV === 'production' && <WebVitals />}
        
        {/* Accessibility Tester in development */}
        {process.env.NODE_ENV === 'development' && (
          <AccessibilityTester />
        )}
      </body>
    </html>
  )
}