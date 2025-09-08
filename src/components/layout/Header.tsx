'use client'

import Button from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header 
      id="navigation"
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'bg-light/98 backdrop-blur-xl shadow-lg shadow-stone/10 border-b border-stone/15' 
          : 'bg-light/90 backdrop-blur-md'
      )}
      role="banner"
    >
      <div className="container-responsive">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo and Studio Name */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="Harmony Oak Yoga - Home"
          >
            <div className="flex h-10 w-auto sm:h-12 lg:h-14 items-center justify-center transition-transform group-hover:scale-105">
              <NextImage
                src="/images/harmonyoakyogalogonotext.png"
                alt="Harmony Oak Yoga Logo"
                width={200}
                height={64}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral">
                {siteConfig.name}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" role="navigation">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-300 hover:text-accent relative tracking-wide',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300',
                  'hover:after:w-full hover:tracking-wider',
                  pathname === item.href
                    ? 'text-accent after:w-full'
                    : 'text-neutral/80'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Link href="/book">
              <Button size="sm" className="will-change-transform">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-luxury text-neutral hover:bg-stone/20 transition-all duration-300 focus-visible-ring hover:scale-105"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-navigation"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-stone/20 bg-light/95 backdrop-blur-xl' 
              : 'max-h-0 opacity-0'
          )}
          aria-hidden={!isMenuOpen}
        >
          <nav className="py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  'block px-4 py-3 text-base font-medium transition-all duration-300 rounded-luxury',
                  'hover:bg-stone/20 hover:text-accent hover:translate-x-1',
                  pathname === item.href
                    ? 'text-accent bg-stone/15'
                    : 'text-neutral/80'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 px-3">
              <Link href="/book" onClick={closeMenu}>
                <Button className="w-full justify-center">
                  Book Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}