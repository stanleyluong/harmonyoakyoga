import Button from '@/components/ui/Button'
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'

const services = [
  {
    id: 'private-sessions',
    name: 'Private Sessions',
    description: 'One-on-one personalized yoga practice',
    details: 'Experience personalized attention and customized sequences designed specifically for your body, goals, and experience level.',
    icon: '🧘🏽‍♀️'
  },
  {
    id: 'small-groups',
    name: 'Small Group Classes',
    description: 'Intimate classes with friends',
    details: 'Share the yoga experience with a small group of friends in a supportive, non-intimidating environment.',
    icon: '👥'
  },
  {
    id: 'online-sessions',
    name: 'Online Sessions',
    description: 'Practice from anywhere',
    details: 'Join our virtual classes and maintain your practice from the comfort of your home with live instruction.',
    icon: '💻'
  },
  {
    id: 'womens-gatherings',
    name: "Women's Gatherings",
    description: 'Sacred circles for connection',
    details: 'Monthly gatherings focused on community, healing, and empowerment in a safe, supportive space.',
    icon: '🌸'
  },
  {
    id: 'holistic-ceremonies',
    name: 'Holistic Ceremonies',
    description: 'Transformative healing experiences',
    details: 'Ceremonial practices combining movement, breathwork, and mindfulness for deep healing and transformation.',
    icon: '🌿'
  },
  {
    id: 'sound-healing',
    name: 'Sound Healing',
    description: 'Therapeutic sound experiences',
    details: 'Immersive sound baths using singing bowls, chimes, and other instruments to promote deep relaxation.',
    icon: '🎵'
  }
]

export default function ServicePreview() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto max-w-content px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading text-neutral mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            Discover our range of yoga and wellness offerings designed to meet you wherever you are on your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} variant="elevated" className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="text-3xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription className="text-accent font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral/70 leading-relaxed">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/services">
            <Button size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}