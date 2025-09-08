import { generateMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = generateMetadata({
  title: 'Book a Session',
  description: 'Schedule your yoga session, women&apos;s gathering, sound healing, or holistic ceremony with Harmony Oak Studio in Huntsville, Alabama.',
  keywords: ['yoga booking', 'schedule yoga session', 'Huntsville yoga appointments', 'private yoga booking', 'sound healing sessions'],
  url: '/book',
})

export default function BookPage() {
  redirect('/contact')
}