import MaterialIcon from '@/components/ui/MaterialIcon'
import { siteConfig } from '@/config/site'
import NextImage from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-secondary/10 border-t border-secondary/20 mt-auto" role="contentinfo">
      <div className="container-responsive py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Studio Info */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 overflow-hidden">
                <NextImage
                  src="/images/harmonyoakyogalogonotext.png"
                  alt="Harmony Oak Yoga Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-sm text-neutral/70 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="font-accent text-accent text-sm flex items-center gap-2">
              <MaterialIcon name="self_care" size="sm" />
              {siteConfig.tagline}
              <MaterialIcon name="spa" size="sm" />
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-heading text-base font-semibold text-neutral">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2" aria-label="Footer navigation">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-neutral/70 hover:text-accent transition-colors py-1 focus-visible-ring rounded-brand"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-heading text-base font-semibold text-neutral">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-neutral/70">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="leading-relaxed">{siteConfig.contact.address}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-accent transition-colors focus-visible-ring rounded-brand"
                  aria-label={`Send email to ${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-accent transition-colors focus-visible-ring rounded-brand"
                  aria-label={`Call ${siteConfig.contact.phone}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-200 hover:scale-105"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-secondary/20 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-xs text-neutral/60 text-center sm:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-neutral/60 text-center sm:text-right flex items-center justify-center sm:justify-end gap-1">
            Made with <MaterialIcon name="favorite" size="xs" className="text-accent" /> in Huntsville, Alabama
          </p>
        </div>
      </div>
    </footer>
  )
}