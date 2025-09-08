
import NextImage from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <NextImage
          src="/images/instructor/IMG_1269.jpeg"
          alt="Jennifer Tostado practicing yoga at Harmony Oak Yoga"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-light mb-6 leading-tight drop-shadow-lg">
          About Harmony Oak Yoga
        </h1>
        
        <p className="text-xl sm:text-2xl font-accent text-light/90 mb-8 leading-relaxed drop-shadow-md">
          Creating a safe space for healing, growth, and connection
        </p>
        
        <p className="text-lg text-light/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Discover our story, meet our instructor, and learn about our commitment to providing 
          personalized yoga instruction in a nurturing environment.
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-light to-transparent" />
    </section>
  )
}