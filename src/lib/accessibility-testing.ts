/**
 * Accessibility testing utilities for development and testing
 */

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  rule: string
  message: string
  element?: HTMLElement
  selector?: string
}

/**
 * Basic accessibility checker for development
 * This is a simplified version - in production, use tools like axe-core
 */
export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = []

  /**
   * Run basic accessibility checks on the document
   */
  checkDocument(): AccessibilityIssue[] {
    this.issues = []
    
    this.checkImages()
    this.checkHeadings()
    this.checkForms()
    this.checkLinks()
    this.checkColorContrast()
    this.checkKeyboardNavigation()
    this.checkAriaLabels()
    
    return this.issues
  }

  /**
   * Check images for alt text
   */
  private checkImages(): void {
    const images = document.querySelectorAll('img')
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-hidden')) {
        this.addIssue({
          type: 'error',
          rule: 'img-alt',
          message: 'Image missing alt text',
          element: img,
          selector: `img:nth-child(${index + 1})`
        })
      }
      
      if (img.alt && img.alt.length > 125) {
        this.addIssue({
          type: 'warning',
          rule: 'img-alt-length',
          message: 'Alt text is too long (over 125 characters)',
          element: img
        })
      }
    })
  }

  /**
   * Check heading hierarchy
   */
  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let previousLevel = 0
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1))
      
      if (level > previousLevel + 1) {
        this.addIssue({
          type: 'warning',
          rule: 'heading-hierarchy',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading as HTMLElement
        })
      }
      
      previousLevel = level
    })
    
    // Check for h1
    const h1Count = document.querySelectorAll('h1').length
    if (h1Count === 0) {
      this.addIssue({
        type: 'error',
        rule: 'h1-required',
        message: 'Page should have exactly one h1 element'
      })
    } else if (h1Count > 1) {
      this.addIssue({
        type: 'warning',
        rule: 'multiple-h1',
        message: 'Page has multiple h1 elements'
      })
    }
  }

  /**
   * Check form accessibility
   */
  private checkForms(): void {
    const inputs = document.querySelectorAll('input, textarea, select')
    
    inputs.forEach((input) => {
      const element = input as HTMLInputElement
      
      // Check for labels
      const hasLabel = this.hasAssociatedLabel(element)
      if (!hasLabel && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        this.addIssue({
          type: 'error',
          rule: 'form-label',
          message: 'Form control missing label',
          element
        })
      }
      
      // Check required fields
      if (element.required && !element.getAttribute('aria-required')) {
        this.addIssue({
          type: 'info',
          rule: 'aria-required',
          message: 'Required field should have aria-required="true"',
          element
        })
      }
    })
  }

  /**
   * Check links
   */
  private checkLinks(): void {
    const links = document.querySelectorAll('a')
    
    links.forEach((link) => {
      // Check for href
      if (!link.href) {
        this.addIssue({
          type: 'warning',
          rule: 'link-href',
          message: 'Link missing href attribute',
          element: link
        })
      }
      
      // Check for descriptive text
      const linkText = link.textContent?.trim() || ''
      const vagueLinkTexts = ['click here', 'read more', 'more', 'here', 'link']
      
      if (vagueLinkTexts.includes(linkText.toLowerCase())) {
        this.addIssue({
          type: 'warning',
          rule: 'link-text',
          message: 'Link text should be more descriptive',
          element: link
        })
      }
      
      // Check external links
      if (link.target === '_blank' && !link.getAttribute('aria-label')?.includes('new window')) {
        this.addIssue({
          type: 'info',
          rule: 'external-link',
          message: 'External link should indicate it opens in new window',
          element: link
        })
      }
    })
  }

  /**
   * Basic color contrast check (simplified)
   */
  private checkColorContrast(): void {
    // This is a simplified check - in production, use a proper color contrast library
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button')
    
    textElements.forEach((element) => {
      const styles = window.getComputedStyle(element)
      const fontSize = parseFloat(styles.fontSize)
      const fontWeight = styles.fontWeight
      
      // Check if text is large (18pt+ or 14pt+ bold)
      const isLargeText = fontSize >= 18 || (fontSize >= 14 && (fontWeight === 'bold' || parseInt(fontWeight) >= 700))
      
      // This is a placeholder - in real implementation, you'd calculate actual contrast ratios
      if (!isLargeText && fontSize < 16) {
        this.addIssue({
          type: 'info',
          rule: 'color-contrast',
          message: 'Small text may not meet contrast requirements',
          element: element as HTMLElement
        })
      }
    })
  }

  /**
   * Check keyboard navigation
   */
  private checkKeyboardNavigation(): void {
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]')
    
    interactiveElements.forEach((element) => {
      const tabIndex = element.getAttribute('tabindex')
      
      if (tabIndex && parseInt(tabIndex) > 0) {
        this.addIssue({
          type: 'warning',
          rule: 'tabindex-positive',
          message: 'Avoid positive tabindex values',
          element: element as HTMLElement
        })
      }
    })
  }

  /**
   * Check ARIA labels and roles
   */
  private checkAriaLabels(): void {
    const elementsWithAriaLabelledby = document.querySelectorAll('[aria-labelledby]')
    
    elementsWithAriaLabelledby.forEach((element) => {
      const labelledbyId = element.getAttribute('aria-labelledby')
      if (labelledbyId && !document.getElementById(labelledbyId)) {
        this.addIssue({
          type: 'error',
          rule: 'aria-labelledby',
          message: `aria-labelledby references non-existent ID: ${labelledbyId}`,
          element: element as HTMLElement
        })
      }
    })
    
    const elementsWithAriaDescribedby = document.querySelectorAll('[aria-describedby]')
    
    elementsWithAriaDescribedby.forEach((element) => {
      const describedbyId = element.getAttribute('aria-describedby')
      if (describedbyId && !document.getElementById(describedbyId)) {
        this.addIssue({
          type: 'error',
          rule: 'aria-describedby',
          message: `aria-describedby references non-existent ID: ${describedbyId}`,
          element: element as HTMLElement
        })
      }
    })
  }

  /**
   * Check if an input has an associated label
   */
  private hasAssociatedLabel(input: HTMLInputElement): boolean {
    const id = input.id
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`)
      if (label) return true
    }
    
    // Check if input is inside a label
    const parentLabel = input.closest('label')
    return !!parentLabel
  }

  /**
   * Add an issue to the list
   */
  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue)
  }

  /**
   * Generate a report of accessibility issues
   */
  generateReport(): string {
    if (this.issues.length === 0) {
      return 'No accessibility issues found!'
    }
    
    const errorCount = this.issues.filter(issue => issue.type === 'error').length
    const warningCount = this.issues.filter(issue => issue.type === 'warning').length
    const infoCount = this.issues.filter(issue => issue.type === 'info').length
    
    let report = `Accessibility Report:\n`
    report += `Errors: ${errorCount}, Warnings: ${warningCount}, Info: ${infoCount}\n\n`
    
    this.issues.forEach((issue, index) => {
      report += `${index + 1}. [${issue.type.toUpperCase()}] ${issue.rule}: ${issue.message}\n`
      if (issue.selector) {
        report += `   Selector: ${issue.selector}\n`
      }
      report += '\n'
    })
    
    return report
  }
}

/**
 * Run accessibility check and log results (for development)
 */
export function runAccessibilityCheck(): void {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  
  const checker = new AccessibilityChecker()
  const issues = checker.checkDocument()
  
  if (issues.length > 0) {
    console.group('🔍 Accessibility Issues Found')
    console.log(checker.generateReport())
    console.groupEnd()
  } else {
    console.log('✅ No accessibility issues found!')
  }
}

/**
 * Keyboard navigation test helper
 */
export function testKeyboardNavigation(): void {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  
  console.log('🎹 Testing keyboard navigation...')
  console.log('Use Tab to navigate forward, Shift+Tab to navigate backward')
  console.log('Press Enter or Space on buttons and links')
  console.log('Use arrow keys in menus and lists')
  
  // Highlight focusable elements
  const focusableElements = document.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  
  focusableElements.forEach((element, index) => {
    const htmlElement = element as HTMLElement
    htmlElement.style.outline = '2px dashed #CE9C7E'
    htmlElement.title = `Focusable element ${index + 1}`
  })
  
  console.log(`Found ${focusableElements.length} focusable elements (highlighted with dashed outline)`)
}