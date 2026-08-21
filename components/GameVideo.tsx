'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * A gameplay video that behaves itself.
 *
 * The box reserves the exact aspect ratio before anything loads, so dropping
 * real footage in later causes zero layout shift. Until a `src` exists it
 * renders a placeholder at the same size, with the capture spec written on it.
 *
 * Playback rules, which matter on a site selling mobile performance:
 *  - `preload="none"` so nothing downloads until the clip is actually near
 *  - plays only while on screen, pauses the moment it leaves
 *  - muted + playsInline, the only combination iOS will autoplay
 *  - prefers-reduced-motion holds on the poster frame and never autoplays
 */

type Aspect = 'portrait' | 'landscape' | 'square'

const ASPECT_CLASS: Record<Aspect, string> = {
  portrait: 'aspect-[9/16]',
  landscape: 'aspect-video',
  square: 'aspect-square',
}

const SPEC: Record<Aspect, string> = {
  portrait: '1080 × 1920 · mp4/webm · 15–30s loop',
  landscape: '1920 × 1080 · mp4/webm · 15–30s loop',
  // Actual capture format for the shipped titles: screen-recorded square, not phone-shaped.
  square: '1080 × 1080 · mp4 · loop',
}

interface GameVideoProps {
  /** Omit while you still need to capture the footage. */
  src?: string
  poster?: string
  label: string
  aspect?: Aspect
  className?: string
}

export function GameVideo({
  src,
  poster,
  label,
  aspect = 'square',
  className = '',
}: GameVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          // Autoplay can still be refused (low power mode, data saver);
          // the poster stays up in that case rather than showing a dead frame.
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )
    io.observe(video)
    return () => io.disconnect()
  }, [src])

  const box = `relative overflow-hidden bg-bg-raised ${ASPECT_CLASS[aspect]} ${className}`

  if (!src || failed) {
    return (
      <div className={`${box} border border-dashed border-ink/15`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="text-sm font-medium text-ink/45">{label}</span>
          <span className="font-mono text-[10px] text-ink/25">{SPEC[aspect]}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`${box} border border-ink/10`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        onError={() => setFailed(true)}
        aria-label={label}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
