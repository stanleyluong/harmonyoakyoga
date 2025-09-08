'use client'

import NextImage from 'next/image'
import { useState } from 'react'

export default function CommunityGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const communityImages = [
    {
      id: 1,
      src: '/images/community/IMG_0245.jpeg',
      alt: 'Women\'s circle gathering at Harmony Oak Studio'
    },
    {
      id: 2,
      src: '/images/community/IMG_1271.jpeg',
      alt: 'Community yoga session with multiple participants'
    },
    {
      id: 3,
      src: '/images/community/IMG_2049.jpeg',
      alt: 'Group meditation and mindfulness practice'
    },
    {
      id: 4,
      src: '/images/community/IMG_2070.jpeg',
      alt: 'Healing circle with community members'
    },
    {
      id: 5,
      src: '/images/community/IMG_2584.jpeg',
      alt: 'Joyful community gathering and connection'
    },
    {
      id: 6,
      src: '/images/community/IMG_4284.jpeg',
      alt: 'Sacred women\'s ceremony and ritual'
    },
    {
      id: 7,
      src: '/images/community/IMG_6632.jpeg',
      alt: 'Community celebration and sisterhood'
    },
    {
      id: 8,
      src: '/images/community/IMG_6854.jpeg',
      alt: 'Group healing and transformation session'
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % communityImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? communityImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral mb-4">
            Our Community
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            See the beautiful connections and transformative moments shared in our sacred space
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {communityImages.map((image, index) => (
            <div 
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-brand shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square relative">
                <NextImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-neutral px-3 py-1 rounded-full text-sm font-medium">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-neutral/70 leading-relaxed">
            These moments capture the essence of what we create together - a community of support, 
            growth, and authentic connection. Every gathering is unique, but all are filled with 
            the same spirit of love and transformation.
          </p>
        </div>
      </div>
      
      {/* Modal for full-size images */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-neutral/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-light/90 hover:bg-light text-neutral rounded-full p-2 transition-colors"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-light/90 hover:bg-light text-neutral rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-light/90 hover:bg-light text-neutral rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative max-w-4xl max-h-[80vh] rounded-brand overflow-hidden">
              <NextImage
                src={communityImages[selectedImage].src}
                alt={communityImages[selectedImage].alt}
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-light/90 text-neutral px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {communityImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}