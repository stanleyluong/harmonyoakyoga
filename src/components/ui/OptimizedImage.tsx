'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  quality?: number
  loading?: 'lazy' | 'eager'
}

// Generate responsive sizes based on common breakpoints
const generateResponsiveSizes = (maxWidth?: number): string => {
  if (!maxWidth) {
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  }
  
  return `(max-width: 640px) 100vw, (max-width: 1024px) ${Math.min(maxWidth, 768)}px, ${maxWidth}px`
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  placeholder = 'blur',
  blurDataURL,
  quality = 85,
  loading = 'lazy',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || generateResponsiveSizes(width)

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center ${className}`}>
        <div className="text-center text-neutral/40">
          <div className="text-4xl mb-2">📸</div>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={responsiveSizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-all duration-500 ease-out ${
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        } ${fill ? 'object-cover' : ''}`}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse flex items-center justify-center">
          <div className="text-center text-neutral/40">
            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mb-2"></div>
            <p className="text-xs">Loading...</p>
          </div>
        </div>
      )}
    </div>
  )
}