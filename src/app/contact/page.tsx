import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { generateMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Contact',
  description: 'Get in touch with Harmony Oak Studio. Contact us for questions about yoga sessions, bookings, or to learn more about our services in Huntsville, Alabama.',
  keywords: ['contact yoga studio', 'Huntsville yoga contact', 'yoga questions', 'studio location', 'yoga inquiry'],
  url: '/contact',
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-light">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-neutral/80 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out with any questions about our services, 
            or to learn more about creating your safe space for wellness and growth.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInfo />
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}