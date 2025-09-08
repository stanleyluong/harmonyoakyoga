import Button from '@/components/ui/Button'
import Card, { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Service } from '@/config/services'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
  priority?: boolean
}

export default function ServiceCard({ service, priority = false }: ServiceCardProps) {
  return (
    <Card 
      variant="elevated" 
      className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform group"
    >
      <CardHeader className="text-center pb-4 sm:pb-6">
        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
          <service.icon className="text-4xl sm:text-5xl text-accent" />
        </div>
        <CardTitle className="text-xl sm:text-2xl mb-2 leading-tight">
          {service.name}
        </CardTitle>
        <p className="text-neutral/70 text-sm font-medium leading-relaxed">
          {service.shortDescription}
        </p>
      </CardHeader>
      
      <CardContent className="flex-1 px-4 sm:px-6">
        <p className="text-neutral/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          {service.description}
        </p>
        
        <div className="mb-4 sm:mb-6">
          <h4 className="font-semibold text-neutral mb-3 text-sm sm:text-base">
            What&apos;s Included:
          </h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm text-neutral/80">
                <span className="text-accent mr-2 mt-0.5 flex-shrink-0">•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {service.pricing && (
          <div className="bg-primary/30 rounded-brand p-3 sm:p-4 mb-4">
            <p className="text-xs sm:text-sm font-medium text-neutral/70 mb-1">
              Investment:
            </p>
            <p className="text-base sm:text-lg font-semibold text-accent">
              {service.pricing}
            </p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-4 sm:pt-6 px-4 sm:px-6">
        <Link href={`/contact?service=${service.id}`} className="w-full">
          <Button 
            variant="primary" 
            className="w-full text-sm sm:text-base py-2.5 sm:py-3 will-change-transform font-serif"
            aria-label={`Book ${service.name} session`}
          >
            Book {service.name}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}