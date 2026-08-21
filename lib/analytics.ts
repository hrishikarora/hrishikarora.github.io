/**
 * GoatCounter site code, e.g. 'hrishikarora' for hrishikarora.goatcounter.com.
 * Left empty, the tracking script is not rendered at all.
 */
export const GOATCOUNTER_CODE = 'hrishikarora'

/** Booking link, shown as the secondary path next to email. */
export const CAL_URL = 'https://cal.com/hrishik-arora'

/** Formspree endpoint backing the contact form. */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpzjkqq'

interface GoatCounter {
  count: (vars: { path: string; title?: string; event: boolean }) => void
}

/**
 * Records a named event in GoatCounter. Page views alone say how many people
 * arrived; these say how many actually tried to get in touch, which is the
 * number worth watching. No-ops safely when the script is blocked or still
 * loading, so a tracking failure can never break a click.
 */
export function trackEvent(name: string) {
  if (typeof window === 'undefined') return
  const gc = (window as unknown as { goatcounter?: GoatCounter }).goatcounter
  if (!gc?.count) return
  try {
    gc.count({ path: name, title: name, event: true })
  } catch {
    // Analytics must never interrupt the user's action.
  }
}
