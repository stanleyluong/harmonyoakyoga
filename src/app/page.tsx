import AboutPreview from '@/components/home/AboutPreview'
import Hero from '@/components/home/Hero'
import ServicePreview from '@/components/home/ServicePreview'
import { generateMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Home',
  description: 'Welcome to Harmony Oak Studio - Creating a safe space for yoga, healing, and growth in Huntsville, Alabama. Discover private sessions, group classes, sound healing, and holistic ceremonies.',
  keywords: ['yoga Huntsville Alabama', 'yoga studio', 'private yoga', 'sound healing', 'holistic wellness', 'safe space'],
  url: '/',
})

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Preview */}
      <ServicePreview />
      
      {/* About Preview */}
      <AboutPreview />
    </div>
  )
}