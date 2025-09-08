'use client'

import { AccessibilityChecker, testKeyboardNavigation } from '@/lib/accessibility-testing'
import { useEffect, useState } from 'react'

interface AccessibilityTesterProps {
  enabled?: boolean
}

export default function AccessibilityTester({ enabled = process.env.NODE_ENV === 'development' }: AccessibilityTesterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [issues, setIssues] = useState<any[]>([])
  
  useEffect(() => {
    if (!enabled) return
    
    // Add keyboard shortcut to toggle accessibility tester
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault()
        setIsVisible(prev => !prev)
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [enabled])
  
  const runCheck = () => {
    const checker = new AccessibilityChecker()
    const foundIssues = checker.checkDocument()
    setIssues(foundIssues)
    console.log(checker.generateReport())
  }
  
  const highlightFocusableElements = () => {
    testKeyboardNavigation()
  }
  
  const clearHighlights = () => {
    const elements = document.querySelectorAll('[style*="outline"]')
    elements.forEach(element => {
      const htmlElement = element as HTMLElement
      htmlElement.style.outline = ''
      htmlElement.removeAttribute('title')
    })
  }
  
  if (!enabled || !isVisible) {
    return null
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-white border-2 border-accent rounded-brand shadow-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading text-sm font-semibold text-neutral">
          Accessibility Tester
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral/60 hover:text-neutral text-sm"
          aria-label="Close accessibility tester"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={runCheck}
          className="w-full px-3 py-2 bg-accent text-white text-sm rounded-brand hover:bg-accent/90 transition-colors"
        >
          Run A11y Check
        </button>
        
        <button
          onClick={highlightFocusableElements}
          className="w-full px-3 py-2 bg-secondary text-neutral text-sm rounded-brand hover:bg-secondary/90 transition-colors"
        >
          Highlight Focusable
        </button>
        
        <button
          onClick={clearHighlights}
          className="w-full px-3 py-2 bg-primary text-neutral text-sm rounded-brand hover:bg-primary/90 transition-colors"
        >
          Clear Highlights
        </button>
      </div>
      
      {issues.length > 0 && (
        <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-brand">
          <p className="text-xs text-red-800 font-medium">
            {issues.length} issue(s) found
          </p>
          <p className="text-xs text-red-600 mt-1">
            Check console for details
          </p>
        </div>
      )}
      
      <p className="text-xs text-neutral/60 mt-3">
        Press Ctrl+Shift+A to toggle
      </p>
    </div>
  )
}