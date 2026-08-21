import { ImageResponse } from 'next/og'

// Required under `output: 'export'`, which has no server to render on demand.
export const dynamic = 'force-static'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Hrishik Arora, Unity live-ops and mobile performance'

/**
 * Generated at build time so the link preview is a proper 1200x630 card
 * rather than a square gameplay frame that social platforms crop badly.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0d10',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', fontSize: 28, color: '#c8ff4d', letterSpacing: '0.04em' }}>
            Unity live-ops and mobile performance
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 700,
              color: '#f2f4f7',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: '900px',
            }}
          >
            I ship, optimize, and maintain live mobile games.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '64px' }}>
            {[
              ['100K+', 'downloads'],
              ['8+', 'live updates'],
              ['3', 'titles shipped'],
            ].map(([value, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', fontSize: 52, fontWeight: 700, color: '#c8ff4d' }}>
                  {value}
                </div>
                <div style={{ display: 'flex', fontSize: 24, color: '#8b929c' }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 600, color: '#f2f4f7' }}>
            Hrishik Arora
          </div>
        </div>
      </div>
    ),
    size
  )
}
