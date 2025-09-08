'use client'

import Button from '@/components/ui/Button'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import MaterialIcon from '@/components/ui/MaterialIcon'
import { siteConfig } from '@/config/site'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class BookingErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Booking page error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card variant="elevated" padding="lg" className="text-center">
                <CardHeader>
                  <div className="mb-4">
                    <MaterialIcon name="warning" size="large" className="text-accent" />
                  </div>
                  <CardTitle className="text-2xl">
                    Something went wrong
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral/70">
                    We&apos;re having trouble loading the booking page. Please try one of the options below.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => window.location.reload()}
                      variant="primary"
                    >
                      Refresh Page
                    </Button>
                    <Button 
                      onClick={() => window.location.href = '/contact'}
                      variant="outline"
                    >
                      Contact Us
                    </Button>
                  </div>
                  
                  <div className="border-t border-secondary/20 pt-4 mt-6">
                    <p className="text-sm text-neutral/60 mb-2">
                      You can also contact us directly:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm justify-center">
                      <span className="flex items-center gap-1 justify-center">
                        <PhoneIcon className="text-accent text-sm" />
                        {siteConfig.contact.phone}
                      </span>
                      <span className="flex items-center gap-1 justify-center">
                        <EmailIcon className="text-accent text-sm" />
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}