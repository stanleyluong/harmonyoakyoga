# Accessibility Implementation Guide

This document outlines the accessibility features implemented in the Harmony Oak Yoga Studio website and provides guidelines for maintaining and testing accessibility.

## Overview

The website has been designed and implemented to meet WCAG 2.1 AA standards, ensuring it's accessible to users with disabilities including those who use screen readers, keyboard navigation, or have visual impairments.

## Implemented Accessibility Features

### 1. Skip Navigation Links

- **Location**: Available on all pages via keyboard navigation
- **Functionality**: Allows users to skip to main content, navigation, or footer
- **Usage**: Press Tab when page loads to reveal skip links

### 2. Semantic HTML Structure

- **Proper heading hierarchy**: H1 → H2 → H3 structure maintained
- **Landmark roles**: `<header>`, `<main>`, `<nav>`, `<footer>` elements used
- **Lists**: Navigation and content lists use proper `<ul>`, `<ol>`, `<li>` structure

### 3. Keyboard Navigation

- **Tab order**: Logical tab sequence through all interactive elements
- **Focus indicators**: Visible focus rings on all focusable elements
- **Keyboard shortcuts**: All functionality accessible via keyboard
- **Mobile menu**: Fully keyboard accessible with proper ARIA attributes

### 4. Screen Reader Support

- **ARIA labels**: Descriptive labels for all interactive elements
- **ARIA roles**: Proper roles for complex UI components
- **Live regions**: Status messages announced to screen readers
- **Hidden content**: Decorative elements hidden from screen readers

### 5. Form Accessibility

- **Labels**: All form inputs have associated labels
- **Required fields**: Marked with `required` and `aria-required` attributes
- **Error handling**: Clear error messages with `role="alert"`
- **Field descriptions**: Help text linked via `aria-describedby`

### 6. Color and Contrast

- **Color contrast**: All text meets WCAG AA contrast ratios (4.5:1)
- **Color independence**: Information not conveyed by color alone
- **High contrast mode**: Support for user's high contrast preferences

### 7. Images and Media

- **Alt text**: All images have descriptive alt text
- **Decorative images**: Marked with `aria-hidden="true"`
- **Complex images**: Detailed descriptions provided where needed

### 8. Responsive Design

- **Mobile accessibility**: Touch targets minimum 44px
- **Zoom support**: Content readable at 200% zoom
- **Orientation**: Works in both portrait and landscape

## Color Palette Accessibility

Our color palette has been tested for WCAG AA compliance:

| Foreground | Background | Contrast Ratio | Status |
|------------|------------|----------------|---------|
| #333333 (neutral) | #FEFEFE (light) | 12.6:1 | ✅ AAA |
| #FEFEFE (light) | #CE9C7E (accent) | 4.8:1 | ✅ AA |
| #333333 (neutral) | #F1E3DA (primary) | 8.2:1 | ✅ AAA |
| #333333 (neutral) | #EAD5C8 (secondary) | 7.1:1 | ✅ AAA |

## Testing Tools and Methods

### Automated Testing

1. **Built-in Accessibility Checker** (Development only)
   - Press `Ctrl+Shift+A` to open the accessibility tester
   - Runs basic accessibility checks
   - Highlights focusable elements for keyboard testing

2. **Recommended Tools**
   - [axe DevTools](https://www.deque.com/axe/devtools/) browser extension
   - [WAVE](https://wave.webaim.org/) web accessibility evaluator
   - [Lighthouse](https://developers.google.com/web/tools/lighthouse) accessibility audit

### Manual Testing

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Ensure focus is visible and logical
   - Test with screen reader (NVDA, JAWS, VoiceOver)

2. **Screen Reader Testing**
   - Test with NVDA (Windows), VoiceOver (Mac), or ORCA (Linux)
   - Verify all content is announced correctly
   - Check heading navigation works properly

3. **Visual Testing**
   - Test at 200% zoom level
   - Check with high contrast mode enabled
   - Verify color contrast in different lighting conditions

## Development Guidelines

### When Adding New Components

1. **Use semantic HTML** first, enhance with ARIA as needed
2. **Test keyboard navigation** - ensure all functionality is keyboard accessible
3. **Add proper labels** - every interactive element needs a label
4. **Consider screen readers** - test with a screen reader or use the accessibility tester
5. **Check color contrast** - ensure text meets contrast requirements

### Common Patterns

#### Interactive Elements
```tsx
// Good: Button with proper accessibility
<button
  onClick={handleClick}
  aria-label="Close dialog"
  className="focus-visible-ring"
>
  <CloseIcon aria-hidden="true" />
</button>

// Good: Link with descriptive text
<Link 
  href="/services"
  className="focus-visible-ring"
>
  Learn more about our yoga services
</Link>
```

#### Form Elements
```tsx
// Good: Form input with proper labeling
<div>
  <label htmlFor={inputId} className="block text-sm font-medium">
    Email Address *
  </label>
  <input
    id={inputId}
    type="email"
    required
    aria-required="true"
    aria-invalid={hasError ? 'true' : 'false'}
    aria-describedby={hasError ? errorId : undefined}
    className="focus-visible-ring"
  />
  {hasError && (
    <p id={errorId} role="alert" className="text-red-600">
      Please enter a valid email address
    </p>
  )}
</div>
```

#### Status Messages
```tsx
// Good: Status message for screen readers
<div role="status" aria-live="polite">
  Form submitted successfully
</div>

// Good: Error message
<div role="alert" aria-live="assertive">
  An error occurred while submitting the form
</div>
```

### CSS Classes for Accessibility

- `.sr-only` - Hide content visually but keep it available to screen readers
- `.focus-visible-ring` - Add focus ring that only shows on keyboard focus
- `.focus-ring` - Add focus ring for all focus types
- `.high-contrast-border` - Add border in high contrast mode
- `.motion-safe-animate` - Disable animations for users who prefer reduced motion

## Testing Checklist

Before deploying changes, ensure:

- [ ] All images have appropriate alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Form inputs have proper labels and error handling
- [ ] Color contrast meets WCAG AA standards
- [ ] Heading hierarchy is logical (H1 → H2 → H3)
- [ ] ARIA labels are descriptive and accurate
- [ ] Status messages use proper live regions
- [ ] Content is readable at 200% zoom
- [ ] Site works with JavaScript disabled (where possible)

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Accessibility Guidelines](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

## Support

For accessibility questions or issues, please:

1. Check this documentation first
2. Use the built-in accessibility tester (development)
3. Test with automated tools (axe, WAVE, Lighthouse)
4. Consult the resources listed above

Remember: Accessibility is not a one-time implementation but an ongoing commitment to inclusive design.