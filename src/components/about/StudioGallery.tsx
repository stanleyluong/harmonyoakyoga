'use client'

import NextImage from 'next/image'
import { useState } from 'react'

export default function StudioGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  // Placeholder gallery items - will be replaced with actual studio photos
  const galleryItems = [
    {
      id: 1,
      src: '/images/studio/IMG_1270.jpeg',
      alt: 'Peaceful yoga studio space with natural lighting',
      category: 'Studio Space'
    },
    {
      id: 2,
      src: '/images/studio/grdr 2025-09-07 143155.712.jpeg',
      alt: 'Yoga props and equipment arranged mindfully',
      category: 'Studio Space'
    },
    {
      id: 3,
      src: '/images/studio/grdr 2025-09-07 143232.349.jpeg',
      alt: 'Meditation corner with comfortable seating',
      category: 'Studio Space'
    },
    {
      id: 4,
      src: '/images/instructor/IMG_1260.jpeg',
      alt: 'Instructor demonstrating yoga pose',
      category: 'Instruction'
    },
    {
      id: 5,
      src: '/images/instructor/IMG_1261.jpeg',
      alt: 'Gentle yoga session in progress',
      category: 'Instruction'
    },
    {
      id: 6,
      src: '/images/instructor/IMG_1262.jpeg',
      alt: 'Peaceful meditation moment',
      category: 'Instruction'
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
      setSelectedImage((selectedImage + 1) % galleryItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto max-w-content px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading text-neutral mb-4">
            Studio Gallery
          </h2>
          <p className="text-xl font-accent text-accent max-w-2xl mx-auto">
            Take a glimpse into our peaceful sanctuary
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-brand shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[4/3] relative">
                <NextImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 transition-colors duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-light/90 text-neutral text-xs px-2 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gallery Description */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-neutral/70 leading-relaxed">
            Our studio space has been thoughtfully designed to create a sense of calm and tranquility. 
            From the soft lighting to the carefully chosen props and decor, every element works together 
            to support your practice and help you feel at ease.
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
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-light/90 hover:bg-light text-neutral rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-light/90 hover:bg-light text-neutral rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative max-w-4xl max-h-[80vh] rounded-brand overflow-hidden">
              <NextImage
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].alt}
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-light/90 text-neutral px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}