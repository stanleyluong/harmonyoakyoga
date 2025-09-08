import Button from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import NextImage from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative hero-mobile sm:hero-tablet lg:hero-desktop flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <NextImage
          src="/images/instructor/IMG_7455.jpeg"
          alt="Jennifer Tostado teaching yoga at Harmony Oak Studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center container-responsive pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-responsive-2xl sm:text-4xl lg:text-6xl font-heading text-neutral mb-4 sm:mb-6 leading-tight will-change-transform">
            {siteConfig.name}
          </h1>
          
          <p className="text-responsive-lg sm:text-2xl lg:text-3xl font-heading mb-6 sm:mb-8 leading-relaxed font-medium text-center" style={{ color: '#333333 !important' }}>
            {siteConfig.tagline}
          </p>
          
          <p className="text-responsive-base sm:text-xl text-neutral/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience personalized yoga classes in a supportive and nurturing space, thoughtfully designed to guide your wellness journey. 
            Offered both online and in-person, from private sessions to group classes, we hold space for healing, balance, and growth through yoga, sound healing, and somatic practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto mb-24 sm:mb-32">
            <Link href="/book" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] will-change-transform font-serif"
                aria-label="Book your yoga session"
              >
                Book Your Session
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] bg-light/90 backdrop-blur-sm will-change-transform font-serif"
                aria-label="Learn more about our studio"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Hidden on mobile for better UX */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-neutral/70 font-medium">Scroll to explore</span>
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 text-accent/80" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  )
}