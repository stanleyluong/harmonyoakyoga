import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function StudioValues() {
  const values = [
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'We prioritize creating a physically and emotionally safe environment where everyone feels welcome and protected.'
    },
    {
      icon: '🤗',
      title: 'Inclusive Community',
      description: 'Our studio welcomes all bodies, all backgrounds, and all levels of experience. Diversity makes us stronger.'
    },
    {
      icon: '🌿',
      title: 'Mindful Practice',
      description: 'We emphasize presence over performance, encouraging students to listen to their bodies and honor their limits.'
    },
    {
      icon: '💝',
      title: 'Compassionate Guidance',
      description: 'Our teaching approach is rooted in kindness, patience, and understanding of each individual\'s unique journey.'
    },
    {
      icon: '🌱',
      title: 'Personal Growth',
      description: 'We support each student\'s personal development, both on and off the mat, fostering self-awareness and confidence.'
    },
    {
      icon: '🕊️',
      title: 'Healing Space',
      description: 'We recognize yoga as a powerful tool for healing and create space for transformation at your own pace.'
    }
  ]

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto max-w-content px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading text-neutral mb-4">
            Our Values & Approach
          </h2>
          <p className="text-xl font-accent text-accent max-w-3xl mx-auto mb-6">
            The principles that guide everything we do
          </p>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto leading-relaxed">
            At Harmony Oak Yoga, our values aren&apos;t just words on a wall—they&apos;re the foundation 
            of every interaction, every class, and every moment you spend with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => (
            <Card key={index} variant="elevated" className="text-center h-full">
              <CardHeader>
                <div className="text-4xl mb-4">{value.icon}</div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral/70 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Safe Space Commitment */}
        <Card variant="elevated" className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-accent/20">
          <div className="text-center">
            <div className="text-5xl mb-6">🏡</div>
            <h3 className="text-2xl font-heading text-neutral mb-4">
              Our Commitment to Creating Safe Spaces
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 text-neutral/80 leading-relaxed">
              <p>
                Creating a safe space means more than just physical safety—it&apos;s about fostering an 
                environment where you feel emotionally secure, respected, and free to be authentically yourself.
              </p>
              <p>
                We understand that many people come to yoga carrying stress, trauma, or simply the weight 
                of daily life. Our approach honors this reality by creating predictable, gentle experiences 
                that allow you to feel grounded and supported throughout your practice.
              </p>
              <p>
                This commitment extends to our language, our touch policies, our music choices, and even 
                the way we arrange our space. Every detail is considered through the lens of safety, 
                comfort, and respect for your individual needs and boundaries.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}