import { services } from '@/config/services'
import ServiceCard from './ServiceCard'

export default function ServiceCategories() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral mb-4">
            Choose Your Path to Wellness
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            Each offering is thoughtfully designed to meet you where you are on your journey, 
            providing the support and guidance you need to flourish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}