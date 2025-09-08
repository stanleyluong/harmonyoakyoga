import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto max-w-content px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading text-neutral mb-4">
                Welcome to Our Studio
              </h2>
              <p className="text-xl font-heading text-accent mb-6">
                Creating a safe space for healing and growth
              </p>
            </div>
            
            <div className="space-y-4 text-neutral/80 leading-relaxed">
              <p>
                At Harmony Oak Yoga, we believe that yoga is more than just physical movement—it&apos;s a journey 
                of self-discovery, healing, and connection. Our mission is to create a safe, welcoming space 
                where individuals can explore their practice without judgment or pressure.
              </p>
              
              <p>
                Whether you&apos;re new to yoga or have been practicing for years, our personalized approach ensures 
                that each session meets you exactly where you are. We honor the wisdom of traditional yoga while 
                making it accessible and relevant for modern life.
              </p>
              
              <p>
                Located in the heart of Huntsville, Alabama, our studio offers a sanctuary from the busy world—a 
                place where you can reconnect with yourself, find balance, and cultivate inner peace.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/about">
                <Button size="lg" className="w-full sm:w-auto font-serif">
                  Our Story
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-serif">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Studio Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-brand shadow-lg overflow-hidden">
              <img
                src="/images/studio/IMG_1270.jpeg"
                alt="Harmony Oak Yoga Studio interior"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}