import type { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/projects'

export const dynamic = 'force-static'

const SITE_URL = 'https://hrishikarora.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    ...caseStudies.map((project) => ({
      url: `${SITE_URL}/case-studies/${project.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
