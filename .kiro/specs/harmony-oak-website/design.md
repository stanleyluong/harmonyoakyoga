# Design Document

## Overview

The Harmony Oak Yoga Studio website will be a modern, responsive static website built with Next.js and deployed on Netlify. The design emphasizes simplicity, tranquility, and ease of use, reflecting the studio's mission of creating a safe space. The site will integrate seamlessly with Calendly for booking and use Netlify Forms for contact functionality.

## Architecture

### Technology Stack
- **Frontend Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS for utility-first styling
- **Deployment**: Netlify with automatic deployments from Git
- **Forms**: Netlify Forms for contact form handling
- **Booking**: Calendly embedded widget
- **Images**: Next.js Image optimization with WebP support
- **Typography**: Google Fonts (likely Inter for body text, a serif font for headings)

### Site Structure
```
/
├── / (Homepage)
├── /about (About page)
├── /services (Services overview)
├── /book (Booking with Calendly)
├── /contact (Contact information and form)
├── /testimonials (Reviews and testimonials)
└── /thank-you (Form submission confirmation)
```

## Components and Interfaces

### Core Components

#### 1. Layout Components
- **Header**: Navigation bar with logo and menu items
- **Footer**: Contact info, social links, copyright
- **Navigation**: Mobile-responsive menu with smooth transitions

#### 2. Content Components
- **Hero Section**: Large banner with studio name, tagline, and call-to-action
- **Service Cards**: Grid layout showcasing different yoga offerings
- **Testimonial Cards**: Client reviews with optional photos
- **Contact Form**: Simple form with name, email, message fields
- **Calendly Widget**: Embedded booking interface

#### 3. UI Components
- **Button**: Consistent styling for CTAs and navigation
- **Card**: Reusable container for services, testimonials
- **Modal**: For expanded service descriptions (optional)
- **Loading States**: For form submissions and Calendly loading

### Page Layouts

#### Homepage Layout
```
- Header/Navigation
- Hero Section (full-width image, studio name, tagline)
- Services Preview (3-4 key services with icons)
- About Preview (brief intro with photo)
- Testimonials Carousel (2-3 featured reviews)
- Call-to-Action (Book Now button)
- Footer
```

#### About Page Layout
```
- Header/Navigation
- Hero Image (studio or instructor photo)
- Studio Story (mission, philosophy)
- Instructor Bio (background, certifications)
- Studio Photos Gallery
- Values/Approach section
- Footer
```

#### Services Page Layout
```
- Header/Navigation
- Services Hero
- Service Categories:
  - Private Sessions
  - Small Group Classes
  - Online Sessions
  - Women's Gatherings
  - Holistic Ceremonies
  - Sound Healing
- Pricing Information
- Book Now CTA
- Footer
```

## Data Models

### Static Content Structure
Since this is a static site, content will be managed through:

#### Site Configuration
```typescript
interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    instagram: string;
  };
  calendlyUrl: string;
}
```

#### Service Data
```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing?: string;
}
```

#### Testimonial Data
```typescript
interface Testimonial {
  id: string;
  name: string;
  text: string;
  service?: string;
  anonymous?: boolean;
}
```

## Error Handling

### Form Validation
- Client-side validation for required fields
- Email format validation
- Character limits for message fields
- Clear error messages with helpful guidance

### Calendly Integration
- Fallback link if embed fails to load
- Loading states while Calendly initializes
- Error message if Calendly is unavailable

### General Error Handling
- 404 page with navigation back to homepage
- Graceful degradation for JavaScript-disabled browsers
- Offline message for network issues

## Testing Strategy

### Automated Testing
- **Unit Tests**: Component rendering and functionality
- **Integration Tests**: Form submissions and navigation
- **E2E Tests**: Critical user journeys (booking flow, contact form)
- **Accessibility Tests**: WCAG compliance testing

### Manual Testing
- **Cross-browser Testing**: Chrome, Firefox, Safari, Edge
- **Device Testing**: Desktop, tablet, mobile responsiveness
- **Performance Testing**: Lighthouse scores for speed and SEO
- **User Testing**: Navigation flow and booking process

### Testing Tools
- Jest and React Testing Library for unit tests
- Playwright for E2E testing
- Lighthouse CI for performance monitoring
- axe-core for accessibility testing

## Design System

### Color Palette
Warm, earthy tones inspired by natural elements:
- **Primary**: Warm peach (#F1E3DA) - soft, welcoming
- **Secondary**: Dusty rose (#EAD5C8) - calming, nurturing
- **Accent**: Terracotta (#CE9C7E) - grounding, earthy
- **Neutral**: Charcoal (#333333) - readable text
- **Light**: Off-white (#FEFEFE) - clean backgrounds

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean, readable sans-serif)
- **Accent**: Dancing Script (for decorative elements)

### Spacing and Layout
- 8px grid system for consistent spacing
- Maximum content width: 1200px
- Mobile-first responsive breakpoints:
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+

### Visual Elements
- Rounded corners (8px radius) for modern feel
- Subtle shadows for depth
- Nature-inspired imagery (plants, natural light)
- Minimal icons (Feather or Heroicons)

## Performance Considerations

### Optimization Strategies
- Next.js Image component for automatic optimization
- Static generation for all pages
- Minimal JavaScript bundle size
- Critical CSS inlining
- WebP image format with fallbacks

### Loading Performance
- Target Lighthouse score: 90+ for all metrics
- First Contentful Paint: <2 seconds
- Largest Contentful Paint: <2.5 seconds
- Cumulative Layout Shift: <0.1

## SEO Strategy

### Technical SEO
- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data for local business
- XML sitemap generation
- Robots.txt configuration

### Content SEO
- Location-based keywords (Huntsville, Alabama yoga)
- Service-specific landing pages
- Alt text for all images
- Descriptive page titles and meta descriptions

## Accessibility

### WCAG Compliance
- Level AA compliance target
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios 4.5:1 minimum
- Focus indicators for interactive elements

### Implementation
- Semantic HTML elements
- ARIA labels where needed
- Skip navigation links
- Descriptive link text
- Form labels and error messages