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
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404h-1.297V6.287h1.297v1.297zm-1.297 2.448c-.875-.875-2.026-1.297-3.323-1.297s-2.448.422-3.323 1.297c-.928.875-1.418 2.026-1.418 3.323s.49 2.448 1.418 3.275c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.928-.827 1.418-1.978 1.418-3.275s-.49-2.448-1.418-3.323z"/>
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
                @harmonyoakstudio
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