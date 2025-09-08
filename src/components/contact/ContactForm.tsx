'use client'

import Button from '@/components/ui/Button'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useState } from 'react'

// Generate unique ID helper
function generateId(prefix: string = 'element'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  // Generate unique IDs for form elements
  const nameId = generateId('name')
  const emailId = generateId('email')
  const phoneId = generateId('phone')
  const subjectId = generateId('subject')
  const messageId = generateId('message')
  const nameErrorId = generateId('name-error')
  const emailErrorId = generateId('email-error')
  const messageErrorId = generateId('message-error')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using Formspree for form handling
      const response = await fetch('https://formspree.io/f/xblaqzwk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div>
            <label htmlFor={nameId} className="block text-sm font-medium text-neutral mb-2">
              Name *
            </label>
            <input
              type="text"
              id={nameId}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-brand focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                errors.name ? 'border-red-500' : 'border-secondary/30'
              }`}
              placeholder="Your full name"
              required
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? nameErrorId : undefined}
            />
            {errors.name && (
              <p id={nameErrorId} className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor={emailId} className="block text-sm font-medium text-neutral mb-2">
              Email *
            </label>
            <input
              type="email"
              id={emailId}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-brand focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                errors.email ? 'border-red-500' : 'border-secondary/30'
              }`}
              placeholder="your.email@example.com"
              required
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? emailErrorId : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <p id={emailErrorId} className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor={phoneId} className="block text-sm font-medium text-neutral mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id={phoneId}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-secondary/30 rounded-brand focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              placeholder="256-555-5555"
              autoComplete="tel"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor={subjectId} className="block text-sm font-medium text-neutral mb-2">
              Subject
            </label>
            <select
              id={subjectId}
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-secondary/30 rounded-brand focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="private-sessions">Private Yoga Sessions</option>
              <option value="group-classes">Small Group Classes</option>
              <option value="online-sessions">Online Sessions</option>
              <option value="womens-gatherings">Women&apos;s Gatherings</option>
              <option value="holistic-ceremonies">Holistic Ceremonies</option>
              <option value="sound-healing">Sound Healing</option>
              <option value="booking">Booking Question</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor={messageId} className="block text-sm font-medium text-neutral mb-2">
              Message *
            </label>
            <textarea
              id={messageId}
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-brand focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-vertical ${
                errors.message ? 'border-red-500' : 'border-secondary/30'
              }`}
              placeholder="Tell us how we can help you on your wellness journey..."
              required
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? messageErrorId : undefined}
              maxLength={1000}
            />
            <div className="flex justify-between mt-1">
              {errors.message && (
                <p id={messageErrorId} className="text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
              <p className="text-sm text-neutral/60 ml-auto" aria-live="polite">
                {formData.message.length}/1000 characters
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-brand" role="status" aria-live="polite">
              <p className="text-green-800 text-sm">
                Thank you for your message! We&apos;ll get back to you soon. Redirecting to confirmation page...
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-brand" role="alert" aria-live="assertive">
              <p className="text-red-800 text-sm">
                Sorry, there was an error sending your message. Please try again or contact us directly at{' '}
                <a href="mailto:jentostado@gmail.com" className="underline focus-visible-ring rounded-brand">
                  jentostado@gmail.com
                </a>
              </p>
            </div>
          )}
        </form>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-primary/20 rounded-brand">
          <p className="text-sm text-neutral/80">
            <strong>Response Time:</strong> We typically respond within 24 hours during business days. 
            For urgent matters, please call us directly.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}