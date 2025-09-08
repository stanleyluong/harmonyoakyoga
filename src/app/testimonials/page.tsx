import CommunityGallery from '@/components/testimonials/CommunityGallery'
import TestimonialCard from '@/components/testimonials/TestimonialCard'
import Button from '@/components/ui/Button'
import { testimonials } from '@/config/testimonials'
import { generateMetadata } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({
  title: 'Client Testimonials',
  description: 'Read what our clients say about their transformative experiences with yoga, sound healing, and holistic ceremonies at Harmony Oak Studio in Huntsville, Alabama.',
  keywords: ['yoga testimonials', 'client reviews', 'yoga success stories', 'Huntsville yoga reviews', 'healing testimonials'],
  url: '/testimonials',
})

export default function TestimonialsPage() {

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/community/IMG_6854.jpeg"
            alt="Harmony Oak Yoga community"
            className="w-full h-full object-cover"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral mb-6">
            Client Stories
          </h1>
          <p className="text-xl md:text-2xl text-neutral/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hear from our community about their transformative journeys at Harmony Oak Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button variant="primary" size="lg" className="font-serif">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="font-serif">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">100+</div>
              <div className="text-neutral/70">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-neutral/70">Sessions Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">5★</div>
              <div className="text-neutral/70">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              Every story is unique, but they all share a common thread of transformation, 
              healing, and growth in our safe and nurturing space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <CommunityGallery />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Own Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community and experience the transformation that so many others have found 
            at Harmony Oak Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button variant="primary" size="lg" className="font-serif">
                Book Your First Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="font-serif">
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}