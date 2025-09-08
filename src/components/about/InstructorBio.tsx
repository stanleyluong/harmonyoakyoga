import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import NextImage from 'next/image'
import Link from 'next/link'

export default function InstructorBio() {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto max-w-content px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading text-neutral mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-xl font-accent text-accent max-w-2xl mx-auto">
            Dedicated to creating transformative experiences through mindful movement
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Instructor Photo */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] rounded-brand shadow-lg overflow-hidden">
              <NextImage
                src="/images/instructor/Tezza-5551.jpeg"
                alt="Jennifer Tostado, Yoga Instructor at Harmony Oak Yoga"
                width={400}
                height={533}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-heading text-neutral mb-2">
                Jennifer Tostado
              </h3>
              <p className="text-lg text-accent font-accent mb-4">
                Certified Yoga Instructor, Sound Healer & Somatic Healing Practitioner
              </p>
            </div>
            
            <div className="space-y-4 text-neutral/80 leading-relaxed">
              <p>
                I am a certified yoga instructor, sound healer, and somatic healing practitioner with training in trauma-informed and therapeutic practices, as well as other holistic wellness modalities. My own healing journey began over 15 years ago, and through that experience I developed a deep passion for helping others find balance, peace, and renewal.
              </p>
              
              <p>
                I offer individualized sessions depending on what each client is looking for. My focus is on creating a safe, supportive environment where you can relax, heal, and reconnect with yourself. Each service is designed to meet you exactly where you are.
              </p>
              
              <p>
                I completed my teacher training in Indonesia and expanded my studies in India, the birthplace of yoga. Over the past year, I've been working with private clients in Huntsville and online worldwide, tailoring sessions to fit their unique needs.
              </p>
            </div>
            
            {/* Certifications & Training */}
            <Card variant="outlined" className="mt-8">
              <h4 className="text-lg font-heading text-neutral mb-4">Services Offered</h4>
              <div className="space-y-4 text-sm text-neutral/70">
                <div>
                  <h5 className="font-semibold text-neutral mb-2">Private Yoga</h5>
                  <p>Personalized sessions to strengthen the body, improve flexibility, and calm the mind. I work with students of all ages and levels, from beginners to advanced, but I am especially passionate about supporting seniors and beginners. I create gentle, accessible practices that focus on mobility, balance, and overall well-being.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-neutral mb-2">Somatic Healing</h5>
                  <p>Gentle, body-based techniques to release stored tension and restore mind-body connection.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-neutral mb-2">Sound Therapy</h5>
                  <p>The use of crystal bowls and healing instruments to create deep states of rest and inner peace.</p>
                </div>
              </div>
            </Card>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book a Session
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}