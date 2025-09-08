import Button from '@/components/ui/Button'
import MaterialIcon from '@/components/ui/MaterialIcon'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'

export default function BookingCTA() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-secondary via-primary to-secondary">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-neutral/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards creating more peace, strength, and balance in your life. 
            Book your session today and experience the transformative power of yoga.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/book">
              <Button variant="primary" size="lg" className="min-w-48">
                Book Your Session
              </Button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-luxury font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md h-13 px-8 text-lg min-w-48 bg-white text-neutral border-2 border-neutral hover:bg-neutral hover:text-white">
                Ask Questions
              </button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <MaterialIcon name="handshake" size="large" className="text-accent" />
              </div>
              <h3 className="font-semibold text-neutral mb-2">Personalized Approach</h3>
              <p className="text-sm text-neutral/70">
                Every session is tailored to your unique needs and goals
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <HomeIcon className="text-3xl text-accent" />
              </div>
              <h3 className="font-semibold text-neutral mb-2">Safe Space</h3>
              <p className="text-sm text-neutral/70">
                A welcoming environment where you can explore and grow
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <MaterialIcon name="growth" size="large" className="text-accent" />
              </div>
              <h3 className="font-semibold text-neutral mb-2">Holistic Wellness</h3>
              <p className="text-sm text-neutral/70">
                Supporting your mind, body, and spirit on your wellness journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}