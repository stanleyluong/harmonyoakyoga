import BookingErrorBoundary from '@/components/booking/BookingErrorBoundary'
import BookingHero from '@/components/booking/BookingHero'
import ServiceDescriptions from '@/components/booking/ServiceDescriptions'
import { siteConfig } from '@/config/site'
import { generateMetadata } from '@/lib/seo'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Book a Session',
  description: 'Schedule your yoga session, women&apos;s gathering, sound healing, or holistic ceremony with Harmony Oak Studio in Huntsville, Alabama.',
  keywords: ['yoga booking', 'schedule yoga session', 'Huntsville yoga appointments', 'private yoga booking', 'sound healing sessions'],
  url: '/book',
})

export default function BookPage() {
  return (
    <BookingErrorBoundary>
      <div className="min-h-screen">
        {/* Hero Section */}
        <BookingHero />
        
        {/* Service Descriptions */}
        <ServiceDescriptions />
        
        {/* Contact Information for Booking */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading text-neutral mb-6">Ready to Book Your Session?</h2>
            <p className="text-lg text-neutral/80 mb-8 max-w-2xl mx-auto">
              Contact us directly to schedule your personalized yoga session. We&apos;ll work with you to find the perfect time and customize your experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <EmailIcon className="text-accent text-lg" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-accent hover:text-accent/80 font-medium">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-accent text-lg" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-accent hover:text-accent/80 font-medium">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BookingErrorBoundary>
  )
}