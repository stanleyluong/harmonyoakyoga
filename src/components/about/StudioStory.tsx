import Card from '@/components/ui/Card'

export default function StudioStory() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto max-w-content px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading text-neutral mb-4">
                Our Story
              </h2>
              <p className="text-xl font-accent text-accent mb-6">
                A journey of healing and discovery
              </p>
            </div>
            
            <div className="space-y-4 text-neutral/80 leading-relaxed">
              <p>
                Harmony Oak Yoga was born from a deep understanding that healing happens when we feel 
                truly safe and supported. Our founder recognized the need for a yoga space that honors 
                each individual&apos;s unique journey, free from judgment or comparison.
              </p>
              
              <p>
                Located in the beautiful city of Huntsville, Alabama, our studio serves as a sanctuary 
                where ancient wisdom meets modern understanding. We believe that yoga is not about 
                perfection—it&apos;s about connection: to ourselves, to others, and to the present moment.
              </p>
              
              <p>
                Every aspect of our studio has been thoughtfully designed to create an atmosphere of 
                warmth and acceptance. From our gentle lighting to our carefully curated music, 
                everything works together to support your practice and your peace of mind.
              </p>
            </div>
          </div>
          
          {/* Philosophy Cards */}
          <div className="space-y-6">
            <Card variant="elevated" className="bg-primary/10">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-heading text-neutral mb-3">Our Philosophy</h3>
                <p className="text-neutral/70 leading-relaxed">
                  We believe that every body is a yoga body. Our practice is rooted in compassion, 
                  mindfulness, and the understanding that healing happens at your own pace.
                </p>
              </div>
            </Card>
            
            <Card variant="elevated" className="bg-secondary/10">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-heading text-neutral mb-3">Our Approach</h3>
                <p className="text-neutral/70 leading-relaxed">
                  We meet you exactly where you are, honoring your unique needs and creating 
                  personalized experiences that support your individual wellness journey.
                </p>
              </div>
            </Card>
            
            <Card variant="elevated" className="bg-accent/10">
              <div className="text-center">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-heading text-neutral mb-3">Our Promise</h3>
                <p className="text-neutral/70 leading-relaxed">
                  To provide a safe, welcoming space where you can explore, grow, and heal 
                  without pressure or judgment—just authentic support and guidance.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}