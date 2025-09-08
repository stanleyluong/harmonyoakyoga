import BookingCTA from '@/components/services/BookingCTA'
import ServiceCategories from '@/components/services/ServiceCategories'
import ServicesHero from '@/components/services/ServicesHero'
import { generateMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Services',
  description: 'Discover our comprehensive yoga offerings: private sessions, small groups, online classes, women\'s gatherings, holistic ceremonies, and sound healing in Huntsville, Alabama.',
  keywords: ['yoga services', 'private yoga sessions', 'group yoga classes', 'online yoga', 'sound healing', 'women\'s gatherings', 'holistic ceremonies'],
  url: '/services',
})

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServiceCategories />
      <BookingCTA />
    </div>
  )
}