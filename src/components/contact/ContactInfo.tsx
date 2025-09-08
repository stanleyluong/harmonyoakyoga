import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { siteConfig } from '@/config/site'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="text-2xl">Studio Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 mt-1">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-neutral mb-1">Location</h3>
              <p className="text-neutral/80">{siteConfig.contact.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 mt-1">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-neutral mb-1">Phone</h3>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 mt-1">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-neutral mb-1">Email</h3>
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-6 h-6 mt-1">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-neutral mb-1">Follow Us</h3>
              <a 
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                @harmonyoakyoga
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Studio Hours */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="text-2xl">Studio Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-neutral/80">Monday - Saturday</span>
              <span className="text-neutral">8:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral/80">Sunday</span>
              <span className="text-neutral">8:00 AM - 12:00 PM</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-primary/30 rounded-brand">
            <p className="text-sm text-neutral/80">
              Sessions are by appointment. Please contact us to schedule 
              your personalized yoga experience during these hours.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}