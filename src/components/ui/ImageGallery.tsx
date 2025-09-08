'use client'

import { createIntersectionObserver } from '@/lib/performance'
import { useCallback, useEffect, useRef, useState } from 'react'
import OptimizedImage from './OptimizedImage'

interface ImageItem {
  src: string
  alt: string
  width?: number
  height?: number
}

interface ImageGalleryProps {
  images: ImageItem[]
  columns?: {
    mobile: number
    tablet: number
    desktop: number
  }
  className?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto'
  lazy?: boolean
}

export default function ImageGallery({
  images,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  className = '',
  aspectRatio = 'auto',
  lazy = true,
}: ImageGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const galleryRef = useRef<HTMLDivElement>(null)

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!lazy) return

    const observer = createIntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          setLoadedImages(prev => new Set(Array.from(prev).concat(index)))
          observer?.unobserve(entry.target)
        }
      })
    })

    if (observer && galleryRef.current) {
      const imageElements = galleryRef.current.querySelectorAll('[data-index]')
      imageElements.forEach(el => observer.observe(el))
    }

    return () => observer?.disconnect()
  }, [lazy])

  const getAspectRatioClass = useCallback(() => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square'
      case 'portrait':
        return 'aspect-[3/4]'
      case 'landscape':
        return 'aspect-[4/3]'
      default:
        return ''
    }
  }, [aspectRatio])

  const getGridClass = useCallback(() => {
    return `grid grid-cols-${columns.mobile} sm:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`
  }, [columns])

  return (
    <div 
      ref={galleryRef}
      className={`${getGridClass()} gap-4 sm:gap-6 ${className}`}
    >
      {images.map((image, index) => {
        const shouldLoad = !lazy || loadedImages.has(index)
        
        return (
          <div
            key={index}
            data-index={index}
            className={`relative overflow-hidden rounded-brand bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 ${getAspectRatioClass()}`}
          >
            {shouldLoad ? (
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill={aspectRatio !== 'auto'}
                width={aspectRatio === 'auto' ? image.width : undefined}
                height={aspectRatio === 'auto' ? image.height : undefined}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={aspectRatio !== 'auto' ? 'object-cover' : ''}
                loading={index < 3 ? 'eager' : 'lazy'}
                priority={index < 3}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-neutral/40">
                  <div className="text-2xl mb-2">📸</div>
                  <p className="text-xs">Loading...</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}