'use client'



export default function BookingHero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/community/IMG_0245.jpeg"
          alt="Harmony Oak Yoga booking"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl lg:text-6xl font-bold text-neutral mb-6">
          Book Your Session
        </h1>
        <p className="text-lg lg:text-xl text-neutral/90 max-w-3xl mx-auto mb-8">
          Ready to begin your journey? Choose from our range of services and find a time that works for you. 
          We&apos;re here to create a safe space for your practice and growth.
        </p>

      </div>
    </section>
  )
}