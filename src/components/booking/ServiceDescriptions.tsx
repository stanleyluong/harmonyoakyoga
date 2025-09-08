'use client'

import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { services } from '@/config/services'

export default function ServiceDescriptions() {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-neutral mb-4">
            Choose Your Experience
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            Each service is designed to meet you where you are in your journey. 
            Select the option that resonates with you and book your session below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} variant="elevated" className="h-full">
              <CardHeader>
                <div className="text-3xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral/80">
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.pricing && (
                  <div className="text-accent font-semibold text-sm">
                    {service.pricing}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-neutral/70 mb-4">
            Not sure which service is right for you? 
          </p>
          <a 
            href="/contact" 
            className="text-accent hover:text-accent/80 font-medium underline"
          >
            Contact us for a consultation
          </a>
        </div>
      </div>
    </section>
  )
}