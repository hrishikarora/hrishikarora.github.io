import { Space_Grotesk, Public_Sans } from 'next/font/google'

// Self-hosted via next/font. No runtime font CDN request, zero layout shift.
// Space Grotesk carries the technical character (headlines, numbers);
// Public Sans stays out of the way for body copy.

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})
