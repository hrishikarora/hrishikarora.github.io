import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hrishik Arora, Unity live-ops and mobile performance',
    short_name: 'Hrishik Arora',
    description:
      'Unity developer for live-service mobile games. Retention systems, live-ops and low-end Android performance.',
    start_url: '/',
    display: 'browser',
    background_color: '#0b0d10',
    theme_color: '#0b0d10',
    icons: [{ src: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  }
}
