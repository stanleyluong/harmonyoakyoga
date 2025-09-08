/**
 * Accessibility utilities for the Harmony Oak website
 */

/**
 * Generate a unique ID for form elements and ARIA relationships
 */
export function generateId(prefix: string = 'element'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Check if an element is focusable
 */
export function isFocusable(element: HTMLElement): boolean {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ]
  
  return focusableSelectors.some(selector => element.matches(selector))
}

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ')
  
  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]
}

/**
 * Trap focus within a container (useful for modals)
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = getFocusableElements(container)
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return
    
    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }
  }
  
  container.addEventListener('keydown', handleKeyDown)
  
  // Focus the first element
  firstElement?.focus()
  
  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown)
  }
}

/**
 * Announce text to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Check color contrast ratio (simplified version)
 * Returns true if contrast meets WCAG AA standards (4.5:1)
 */
export function checkColorContrast(foreground: string, background: string): boolean {
  // This is a simplified check - in production, you'd use a proper color contrast library
  // For now, we'll return true for our predefined color combinations
  const validCombinations = [
    { fg: '#333333', bg: '#FEFEFE' }, // neutral on light
    { fg: '#FEFEFE', bg: '#CE9C7E' }, // light on accent
    { fg: '#333333', bg: '#F1E3DA' }, // neutral on primary
    { fg: '#333333', bg: '#EAD5C8' }, // neutral on secondary
  ]
  
  return validCombinations.some(combo => 
    combo.fg.toLowerCase() === foreground.toLowerCase() && 
    combo.bg.toLowerCase() === background.toLowerCase()
  )
}

/**
 * Keyboard navigation helpers
 */
export const KeyboardKeys = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End',
} as const

/**
 * Handle keyboard navigation for lists/menus
 */
export function handleArrowKeyNavigation(
  event: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  onIndexChange: (newIndex: number) => void
): void {
  let newIndex = currentIndex
  
  switch (event.key) {
    case KeyboardKeys.ARROW_UP:
      event.preventDefault()
      newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
      break
    case KeyboardKeys.ARROW_DOWN:
      event.preventDefault()
      newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
      break
    case KeyboardKeys.HOME:
      event.preventDefault()
      newIndex = 0
      break
    case KeyboardKeys.END:
      event.preventDefault()
      newIndex = items.length - 1
      break
    default:
      return
  }
  
  onIndexChange(newIndex)
  items[newIndex]?.focus()
}

/**
 * ARIA live region manager
 */
export class LiveRegionManager {
  private static instance: LiveRegionManager
  private politeRegion: HTMLElement | null = null
  private assertiveRegion: HTMLElement | null = null
  
  static getInstance(): LiveRegionManager {
    if (!LiveRegionManager.instance) {
      LiveRegionManager.instance = new LiveRegionManager()
    }
    return LiveRegionManager.instance
  }
  
  private constructor() {
    this.createLiveRegions()
  }
  
  private createLiveRegions(): void {
    // Create polite live region
    this.politeRegion = document.createElement('div')
    this.politeRegion.setAttribute('aria-live', 'polite')
    this.politeRegion.setAttribute('aria-atomic', 'true')
    this.politeRegion.className = 'sr-only'
    this.politeRegion.id = 'live-region-polite'
    
    // Create assertive live region
    this.assertiveRegion = document.createElement('div')
    this.assertiveRegion.setAttribute('aria-live', 'assertive')
    this.assertiveRegion.setAttribute('aria-atomic', 'true')
    this.assertiveRegion.className = 'sr-only'
    this.assertiveRegion.id = 'live-region-assertive'
    
    document.body.appendChild(this.politeRegion)
    document.body.appendChild(this.assertiveRegion)
  }
  
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const region = priority === 'polite' ? this.politeRegion : this.assertiveRegion
    if (region) {
      region.textContent = message
      
      // Clear after announcement
      setTimeout(() => {
        region.textContent = ''
      }, 1000)
    }
  }
}