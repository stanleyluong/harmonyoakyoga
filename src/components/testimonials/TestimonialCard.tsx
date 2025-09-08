import Card, { CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import { Testimonial } from '@/config/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card variant="elevated" className="h-full flex flex-col hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">
                {testimonial.anonymous ? '🌸' : testimonial.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-neutral">
                {testimonial.name}
              </h3>
              {testimonial.service && (
                <p className="text-sm text-accent font-medium">
                  {testimonial.service}
                </p>
              )}
            </div>
          </div>
          <div className="text-4xl text-secondary/30">
            &ldquo;
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <blockquote className="text-neutral/80 leading-relaxed italic">
          {testimonial.text}
        </blockquote>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-secondary/10">
        <div className="flex items-center justify-between w-full">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent text-lg">
                ⭐
              </span>
            ))}
          </div>
          {testimonial.anonymous && (
            <span className="text-xs text-neutral/50 bg-secondary/20 px-2 py-1 rounded-full">
              Anonymous Review
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}