import type { Metadata } from 'next'
import Script from 'next/script'
import { GOATCOUNTER_CODE } from '@/lib/analytics'
import { spaceGrotesk, publicSans } from './fonts'
import './globals.css'

const SITE_URL = 'https://hrishikarora.github.io'
const TITLE = 'Hrishik Arora, Unity live-ops and mobile performance'
const DESCRIPTION =
  'Unity developer for live-service mobile games. Retention systems, live-ops and low-end Android performance. Worked on titles published by VOODOO and Hungama Game Studio, including eight or more live update cycles on a title past 100,000 downloads.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // Served as a real .png from public/, not Next's extensionless generated
  // route: GitHub Pages types files by extension, and social crawlers reject
  // an image sent as application/octet-stream.
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: 'profile',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
}

/** Helps search engines connect the name, the role and the studios. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hrishik Arora',
  url: SITE_URL,
  jobTitle: 'Unity developer, live-ops and mobile performance',
  email: 'mailto:hrishik.arora@gmail.com',
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  sameAs: ['https://www.linkedin.com/in/hrishikarora/'],
  knowsAbout: [
    'Unity',
    'Mobile game performance optimization',
    'Live-ops',
    'Player retention systems',
    'Android',
    'C#',
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Medi-Caps University' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${publicSans.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {GOATCOUNTER_CODE && (
          <Script
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
        {/* Sticky so the contact CTA stays one click away. The page runs ten
            sections deep, and the form sits at the bottom of all of them. */}
        <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg/85 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-4 md:px-10">
            <span className="font-display text-sm font-semibold tracking-tight">Hrishik Arora</span>
            <nav className="flex items-center gap-5 text-sm text-ink/45 md:gap-6">
              <a href="#work" className="hidden transition hover:text-ink sm:inline">
                Work
              </a>
              <a href="#about" className="hidden transition hover:text-ink sm:inline">
                About
              </a>
              <a href="#offers" className="hidden transition hover:text-ink sm:inline">
                Offers
              </a>
              <a
                href="#contact"
                className="bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition hover:brightness-95"
              >
                Get in touch
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-ink/10 px-6 py-8 md:px-10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-ink/35">
            <span>© 2026 Hrishik Arora</span>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/hrishikarora/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
