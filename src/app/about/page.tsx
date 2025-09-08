import AboutHero from '@/components/about/AboutHero'
import InstructorBio from '@/components/about/InstructorBio'
import StudioGallery from '@/components/about/StudioGallery'
import StudioStory from '@/components/about/StudioStory'
import StudioValues from '@/components/about/StudioValues'
import { generateMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about our yoga studio philosophy, meet our instructor, and discover our commitment to creating a safe space for healing and growth in Huntsville, Alabama.',
  keywords: ['yoga instructor', 'studio philosophy', 'safe space', 'healing environment', 'Huntsville yoga teacher'],
  url: '/about',
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Studio Story */}
      <StudioStory />
      
      {/* Instructor Bio */}
      <InstructorBio />
      
      {/* Studio Values */}
      <StudioValues />
      
      {/* Studio Gallery */}
      <StudioGallery />
    </div>
  )
}