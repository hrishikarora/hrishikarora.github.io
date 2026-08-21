'use client'

import { trackEvent } from '@/lib/analytics'

interface TrackedLinkProps {
  href: string
  event: string
  className?: string
  external?: boolean
  children: React.ReactNode
}

/**
 * An anchor that records a GoatCounter event before navigating. Tracking is
 * fire-and-forget: it never blocks or delays the navigation, and a blocked
 * analytics script leaves the link working normally.
 */
export function TrackedLink({ href, event, className, external, children }: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={() => trackEvent(event)}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
