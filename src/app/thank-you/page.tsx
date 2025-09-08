import Button from '@/components/ui/Button'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { siteConfig } from '@/config/site'
import { generateMetadata } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting Harmony Oak Studio. We have received your message and will get back to you soon.',
  url: '/thank-you',
  noIndex: true, // Don't index thank you pages
})

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card variant="elevated" className="text-center">
          <CardHeader>
            {/* Success Icon */}
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <CardTitle className="text-3xl text-neutral">Thank You!</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-neutral/80">
                We&apos;ve received your message and appreciate you reaching out to us.
              </p>
              
              <p className="text-neutral/70">
                Our team will review your inquiry and get back to you within 24 hours during business days.
              </p>
            </div>

            {/* Contact Info Reminder */}
            <div className="bg-primary/20 p-4 rounded-brand">
              <p className="text-sm text-neutral/80 mb-2">
                <strong>Need immediate assistance?</strong>
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-accent hover:text-accent/80">
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-accent hover:text-accent/80">
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/" className="block">
                <Button variant="primary" className="w-full">
                  Return to Homepage
                </Button>
              </Link>
              
              <Link href="/book" className="block">
                <Button variant="outline" className="w-full">
                  Book a Session
                </Button>
              </Link>
              
              <Link href="/services" className="block">
                <Button variant="secondary" className="w-full">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-secondary/20">
              <p className="text-sm text-neutral/70 mb-3">
                Follow us for updates and wellness tips:
              </p>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404h-1.297V6.287h1.297v1.297zm-1.297 2.448c-.875-.875-2.026-1.297-3.323-1.297s-2.448.422-3.323 1.297c-.928.875-1.418 2.026-1.418 3.323s.49 2.448 1.418 3.275c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.928-.827 1.418-1.978 1.418-3.275s-.49-2.448-1.418-3.323z"/>
                </svg>
                <span>@harmonyoakstudio</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}