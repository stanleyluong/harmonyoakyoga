import NextImage from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <NextImage
          src="/images/studio/grdr 2025-09-07 143155.712.jpeg"
          alt="Harmony Oak Yoga Studio services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-neutral/90 max-w-3xl mx-auto leading-relaxed">
            Discover a range of yoga and wellness offerings designed to nurture your body, 
            mind, and spirit. Each service is crafted with intention to create a safe space 
            for your personal growth and healing journey.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 animate-pulse z-10">🪷</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-20 animate-pulse delay-1000 z-10">🧘🏽‍♀️</div>
      <div className="absolute top-1/2 left-20 text-2xl opacity-10 animate-pulse delay-500 z-10">✨</div>
    </section>
  )
}