import Button from '@/components/ui/Button'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import MaterialIcon from '@/components/ui/MaterialIcon'
import { siteConfig } from '@/config/site'
import { generateMetadata } from '@/lib/seo'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PhoneIcon from '@mui/icons-material/Phone'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({
  title: 'Booking Confirmed',
  description: 'Your session has been successfully booked with Harmony Oak Studio. We look forward to seeing you!',
  url: '/book/confirmation',
  noIndex: true, // Don't index confirmation pages
})

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <AutoAwesomeIcon className="text-6xl text-accent" />
          </div>
          
          <Card variant="elevated" padding="lg" className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-4">
                Booking Confirmed!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-neutral/80">
                Thank you for booking your session with Harmony Oak Studio. 
                We&apos;re excited to be part of your wellness journey!
              </p>
              
              <div className="bg-secondary/20 rounded-brand p-4 my-6">
                <h3 className="font-semibold text-neutral mb-2">What happens next?</h3>
                <ul className="text-sm text-neutral/80 space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <EmailIcon className="text-accent mt-1 text-lg" />
                    <span>You&apos;ll receive a confirmation email with session details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <NotificationsIcon className="text-accent mt-1 text-lg" />
                    <span>We&apos;ll send you a reminder 24 hours before your session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <MaterialIcon name="yoga" className="text-accent" />
                    </span>
                    <span>Come as you are - we&apos;ll provide everything you need</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-secondary/20 pt-6">
                <h3 className="font-semibold text-neutral mb-3">Need to make changes?</h3>
                <p className="text-sm text-neutral/70 mb-4">
                  You can reschedule or cancel your appointment using the link in your confirmation email, 
                  or contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <span className="flex items-center gap-1">
                    <PhoneIcon className="text-accent text-sm" />
                    {siteConfig.contact.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <EmailIcon className="text-accent text-sm" />
                    {siteConfig.contact.email}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary">
                Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline">
                Explore Our Services
              </Button>
            </Link>
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-neutral/70 mb-4">
              Follow us on social media for wellness tips and studio updates
            </p>
            <a 
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-medium"
            >
              @harmonyoakstudio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}