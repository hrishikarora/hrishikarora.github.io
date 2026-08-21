export interface Offer {
  slug: string
  cadence: string
  title: string
  description: string
  /** Rate charged from the fourth engagement onward. Shown struck through. */
  standardPrice: string
  /** Founding client rate, first three studios. */
  foundingPrice: string
  /** Rendered after the price, e.g. a per-month qualifier. */
  priceSuffix?: string
  /** Draws the accent border. Used for the offer worth steering people toward. */
  featured?: boolean
}

export const offers: Offer[] = [
  {
    slug: 'performance-audit',
    cadence: 'One week · fixed price',
    title: 'Mobile performance audit',
    description:
      'I profile your live Unity build on real low-end devices and hand back a ranked list of what is costing you frames, memory and battery, plus the fix for each one.',
    standardPrice: '₹65,000',
    foundingPrice: '₹30,000',
  },
  {
    slug: 'live-ops-sprint',
    cadence: 'Two weeks · fixed price',
    title: 'Live-ops feature sprint',
    description:
      'One agreed feature, built into your live game and shipped to store. The same kind of cycle I ran on Hexa Coin, just scoped and priced before day one.',
    standardPrice: '₹1,20,000',
    foundingPrice: '₹60,000',
  },
  {
    slug: 'live-ops-retainer',
    cadence: 'Monthly · ongoing',
    title: 'Live-ops retainer',
    description:
      'Reserved capacity for studios running a continuous update cycle. Events, retention systems, remote config and the performance work that keeps a live title stable. One month minimum, then rolling.',
    standardPrice: '₹2,00,000',
    foundingPrice: '₹1,10,000',
    priceSuffix: '/ month',
    featured: true,
  },
]
