import { GameVideo } from './GameVideo'

/**
 * Fixes a layout problem: square video in a wide section leaves dead space
 * beside it. This bleeds a blurred, scaled copy of the clip's poster frame
 * across the section behind it so the space reads as atmosphere.
 *
 * The backdrop is a still image, not a second <video>. At blur-3xl and 25%
 * opacity motion is imperceptible, and the poster is already being fetched
 * for the foreground video's poster attribute, so this layer costs nothing.
 * An earlier version used a second autoplaying <video> here, which pulled
 * ~3MB eagerly on first paint (two of them below the fold) and ran four
 * decode pipelines at once.
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
      {poster && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[140%] w-[220%] -translate-x-1/2 -translate-y-1/2 scale-125 bg-cover bg-center opacity-25 blur-3xl"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      <GameVideo src={src} poster={poster} label={label} aspect={aspect} />
    </div>
  )
}
