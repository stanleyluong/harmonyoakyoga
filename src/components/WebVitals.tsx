'use client'

import { reportWebVitals } from '@/lib/performance'
import { useReportWebVitals } from 'next/web-vitals'

export default function WebVitals() {
  useReportWebVitals(reportWebVitals)
  
  return null
}