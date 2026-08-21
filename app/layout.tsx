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
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: ['/images/hexa-coin-poster.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/hexa-coin-poster.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${publicSans.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-ink antialiased">
        {GOATCOUNTER_CODE && (
          <Script
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
        <header className="flex items-center justify-between px-6 py-5 md:px-10">
          <span className="font-display text-sm font-semibold tracking-tight">Hrishik Arora</span>
          <nav className="flex items-center gap-6 text-sm text-ink/45">
            <a href="#work" className="transition hover:text-ink">
              Work
            </a>
            <a href="#about" className="transition hover:text-ink">
              About
            </a>
            <a href="#offers" className="transition hover:text-ink">
              Offers
            </a>
            <a href="#contact" className="transition hover:text-ink">
              Contact
            </a>
          </nav>
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
