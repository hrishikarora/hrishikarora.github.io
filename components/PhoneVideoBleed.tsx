import { GameVideo } from './GameVideo'

/**
 * Fixes a real layout problem, not a style one: square/portrait video in a
 * wide section leaves dead space beside it. This bleeds a blurred, scaled
 * copy of the same clip across the full section behind it (the Apple
 * product-page trick) so the space reads as intentional atmosphere instead
 * of empty margin. Falls back to a plain dark field when there's no src yet.
 */

type Aspect = 'portrait' | 'landscape' | 'square'

interface PhoneVideoBleedProps {
  src?: string
  poster?: string
  label: string
  aspect?: Aspect
}

export function PhoneVideoBleed({ src, poster, label, aspect = 'square' }: PhoneVideoBleedProps) {
  return (
    <div className="relative w-full max-w-[320px] shrink-0 self-center lg:max-w-[360px]">
      {src && (
        // Purely decorative backdrop. Loads and autoplays immediately since
        // it's small (compressed clips run under 1.5MB) and always above the
        // fold when its foreground sibling is. autoPlay is the only way this
        // layer ever paints; preload="none" here would leave it blank forever.
        <video
          src={src}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[140%] w-[220%] -translate-x-1/2 -translate-y-1/2 scale-125 object-cover opacity-25 blur-3xl"
        />
      )}
      <GameVideo src={src} poster={poster} label={label} aspect={aspect} />
    </div>
  )
}
