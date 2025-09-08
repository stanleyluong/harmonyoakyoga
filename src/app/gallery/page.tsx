import { Metadata } from 'next'
import NextImage from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery | Harmony Oak Yoga',
  description: 'Explore our yoga studio, community, and instructor photos at Harmony Oak Yoga in Huntsville, Alabama.',
}

interface ImageData {
  src: string
  alt: string
  category: string
}

const galleryImages: ImageData[] = [
  // Community Images
  { src: '/images/community/IMG_0245.jpeg', alt: 'Community yoga practice', category: 'Community' },
  { src: '/images/community/IMG_1271.jpeg', alt: 'Yoga community gathering', category: 'Community' },
  { src: '/images/community/IMG_2049.jpeg', alt: 'Group yoga session', category: 'Community' },
  { src: '/images/community/IMG_2070.jpeg', alt: 'Community yoga class', category: 'Community' },

  { src: '/images/community/IMG_4284.jpeg', alt: 'Community yoga event', category: 'Community' },

  { src: '/images/community/IMG_6854.jpeg', alt: 'Yoga community celebration', category: 'Community' },
  
  // Instructor Images
  { src: '/images/instructor/IMG_0261.jpeg', alt: 'Yoga instructor demonstration', category: 'Instructor' },
  { src: '/images/instructor/IMG_1260.jpeg', alt: 'Instructor teaching pose', category: 'Instructor' },
  { src: '/images/instructor/IMG_1261.jpeg', alt: 'Yoga instruction session', category: 'Instructor' },
  { src: '/images/instructor/IMG_1262.jpeg', alt: 'Instructor guiding practice', category: 'Instructor' },
  { src: '/images/instructor/IMG_1265.jpeg', alt: 'Yoga pose demonstration', category: 'Instructor' },
  { src: '/images/instructor/IMG_1268.jpeg', alt: 'Instructor in meditation', category: 'Instructor' },
  { src: '/images/instructor/IMG_1269.jpeg', alt: 'Teaching yoga techniques', category: 'Instructor' },

  { src: '/images/instructor/IMG_1379.jpeg', alt: 'Yoga instructor portrait', category: 'Instructor' },
  { src: '/images/instructor/IMG_2193.jpeg', alt: 'Instructor demonstration', category: 'Instructor' },
  { src: '/images/instructor/IMG_2197.jpeg', alt: 'Yoga teaching moment', category: 'Instructor' },

  { src: '/images/instructor/IMG_5234.jpeg', alt: 'Yoga instructor practice', category: 'Instructor' },
  { src: '/images/instructor/IMG_6325.jpeg', alt: 'Instructor yoga pose', category: 'Instructor' },
  { src: '/images/instructor/IMG_7149.jpeg', alt: 'Teaching yoga class', category: 'Instructor' },
  { src: '/images/instructor/IMG_7455.jpeg', alt: 'Instructor meditation', category: 'Instructor' },
  { src: '/images/instructor/IMG_8673.jpeg', alt: 'Yoga instructor session', category: 'Instructor' },
  { src: '/images/instructor/Tezza-4892.jpeg', alt: 'Professional instructor photo', category: 'Instructor' },
  { src: '/images/instructor/Tezza-5551.jpeg', alt: 'Instructor portrait', category: 'Instructor' },
  
  // Studio Images
  { src: '/images/studio/grdr 2025-09-07 143155.712.jpeg', alt: 'Yoga studio space', category: 'Studio' },
  { src: '/images/studio/grdr 2025-09-07 143232.349.jpeg', alt: 'Studio interior view', category: 'Studio' },
  { src: '/images/studio/IMG_1270.jpeg', alt: 'Studio practice area', category: 'Studio' },
  { src: '/images/studio/IMG_2256.jpg.png', alt: 'Studio environment and atmosphere', category: 'Studio' },
]

const categories = ['All', 'Community', 'Instructor', 'Studio']

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral mb-6">
              Gallery
            </h1>
            <p className="text-lg sm:text-xl text-neutral/80 max-w-3xl mx-auto">
              Explore moments from our yoga community, instructor sessions, and beautiful studio space at Harmony Oak Yoga.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Sections */}
          {categories.slice(1).map((category) => {
            const categoryImages = galleryImages.filter(img => img.category === category)
            
            return (
              <div key={category} className="mb-16">
                <h2 className="text-3xl font-bold text-neutral mb-8 text-center">
                  {category}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryImages.map((image, index) => (
                    <div 
                      key={`${category}-${index}`}
                      className="group relative aspect-square overflow-hidden rounded-lg bg-neutral/5 hover:shadow-lg transition-all duration-300"
                    >
                      <NextImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}