import Button from '@/components/ui/Button'
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { services } from '@/config/services'
import Link from 'next/link'

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
                <div className="mb-2">
                  <service.icon className="text-4xl text-accent" />
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription className="text-accent font-medium">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral/70 leading-relaxed">
                  {service.description}
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