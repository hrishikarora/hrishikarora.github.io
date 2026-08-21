export interface Offer {
  slug: string
  cadence: string
  title: string
  description: string
  /** What the studio actually walks away with. Keeps the card concrete now
      that no price is shown. */
  deliverable: string
  /** Draws the accent border. */
  featured?: boolean
}

/**
 * Every engagement is scoped and priced per enquiry, since the work involved
 * varies a lot by codebase, platform target and how much is already known
 * about the problem.
 */
export const offers: Offer[] = [
  {
    slug: 'performance-audit',
    cadence: 'One week',
    title: 'Mobile performance audit',
    description:
      'I profile your live Unity build on real low-end devices and hand back a ranked list of what is costing you frames, memory and battery, plus the fix for each one.',
    deliverable: 'Written report, ranked by impact, with effort estimates per fix',
  },
  {
    slug: 'live-ops-sprint',
    cadence: 'Two weeks',
    title: 'Live-ops feature sprint',
    description:
      'One agreed feature, built into your live game and shipped to store. The same kind of cycle I ran on Hexa Coin, just scoped before day one.',
    deliverable: 'One feature, merged and shipped, scope agreed before we start',
  },
  {
    slug: 'live-ops-retainer',
    cadence: 'Monthly, rolling',
    title: 'Live-ops retainer',
    description:
      'A block of my week reserved for you each month, for studios running a continuous update cycle. Events, retention systems, remote config and the performance work that keeps a live title stable. We agree what the month covers before it starts, and you get priority on anything urgent.',
    deliverable: 'An agreed number of days per month, one month minimum, then rolling',
    featured: true,
  },
]
