import Button from '@/components/ui/Button'
import { generateMetadata } from '@/lib/seo'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found. Return to Harmony Oak Studio homepage to explore our yoga services and wellness offerings.',
  noIndex: true,
})

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl mb-4">🧘🏽‍♀️</div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-neutral/80 mb-8">
            The page you&apos;re looking for seems to have wandered off the path. 
            Let&apos;s guide you back to your wellness journey.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/" className="block">
            <Button variant="primary" className="w-full">
              Return Home
            </Button>
          </Link>
          
          <Link href="/services" className="block">
            <Button variant="outline" className="w-full">
              Explore Services
            </Button>
          </Link>
          
          <Link href="/book" className="block">
            <Button variant="secondary" className="w-full">
              Book a Session
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral/60 mb-4">
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <Link href="/contact" className="text-accent hover:text-accent/80 font-medium">
            Contact us for help
          </Link>
        </div>
      </div>
    </div>
  )
}