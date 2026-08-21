export interface CaseStudy {
  problem: string
  approach: string
  result: string
}

export interface Project {
  slug: string
  title: string
  publisher: string
  platform: string
  role: string
  blurb: string
  metrics: { value: string; label: string }[]
  tech: string[]
  video?: string
  poster?: string
  /** Full case study content. Only set for published, shipped titles. */
  caseStudy?: CaseStudy
}

/** Commercial, published titles. These carry the credibility, so they lead. */
export const shipped: Project[] = [
  {
    slug: 'hexa-coin',
    title: 'Hexa Coin',
    publisher: 'VOODOO',
    platform: 'Android',
    role: 'Live-service systems, live-ops',
    blurb:
      'Hexa Coin is a puzzle game built by BeachBum Games and published by VOODOO. I worked on it at Cympl Studios, cross-team with both. I built the systems that bring a player back after they lose instead of letting them churn: Revive, Hint, Target, Quick Revive and Juicy Number/Text. I also built content delivery so the team could push new content without shipping a whole new app version, and hooked up tracking so they could watch the in-game economy live and test changes to it rather than guess. Eight-plus updates went out against a player base that passed 100,000 downloads.',
    metrics: [
      { value: '100K+', label: 'downloads' },
      { value: '8+', label: 'live update cycles' },
      { value: '5', label: 'retention systems shipped' },
    ],
    tech: ['Unity', 'C#', 'Addressables', 'Live-ops', 'Event tracking'],
    video: '/video/hexa-coin.mp4',
    poster: '/images/hexa-coin-poster.jpg',
    caseStudy: {
      problem:
        'Hexa Coin was already live under VOODOO with real players when I joined. The retention layer hadn’t been built yet. A player who failed a level had no reason to stay, and the team had no way to see what was happening to the in-game economy as it happened, only delayed reports after the fact.',
      approach:
        'I built the systems that give a player a reason to reopen the app after a loss: Revive, Hint, Target, Quick Revive and Juicy Number/Text. I set up content delivery so the team could push new content live without pushing a whole new build through store review, which is what makes a weekly update cycle possible at all. Built on Unity Addressables. I also wired in VOODOO’s event tracking, so changes to the economy could be measured against real player behaviour instead of argued about.',
      result:
        'Eight or more update cycles went out after that, each shipped against a live player base, so every change had to be measured and safe to roll back. The game has passed 100,000 downloads over that time. This is the work I now do for other studios running live titles.',
    },
  },
  {
    slug: 'song-beat',
    title: 'Song Beat',
    publisher: 'Hungama Game Studio',
    platform: 'Android',
    role: 'Performance optimization',
    blurb:
      'Song Beat is a rhythm game by Hungama Game Studio, which I worked on at Gameshastra. I handled performance across a wide spread of Android devices, plus animations, sound effects and UI. Object pooling and the optimization work around it produced a 30% performance gain in testing.',
    metrics: [{ value: '30%', label: 'performance gain in testing' }],
    tech: ['Unity', 'C#', 'Profiler', 'Object pooling'],
    video: '/video/song-beat.mp4',
    poster: '/images/song-beat-poster.jpg',
    caseStudy: {
      problem:
        'Song Beat is a rhythm game, so the whole experience depends on staying responsive frame to frame. It had to run across a wide spread of Android hardware, most of it well below flagship spec, and on that kind of hardware performance problems show up immediately as missed beats and stuttering animation.',
      approach:
        'I profiled the build across that device range and worked through the optimizations that came out of it, object pooling among them, which cut the allocation churn that was causing hitches mid-track. Alongside the performance work I integrated animations, sound effects and UI elements, and kept profiling through the cycle to catch regressions before they shipped.',
      result:
        'A 30% performance gain in testing, and playback held stable across the device tiers Hungama needed it to run on. Hungama then had me carry the same approach onto Desibeats, their second rhythm title, which had a heavier asset load and a wider device range. That is where I found out the approach held up past the game it was built for, and it is where most of the profiling habits I still use came from.',
    },
  },
  {
    slug: 'desibeats',
    title: 'Desibeats',
    publisher: 'Hungama Game Studio',
    platform: 'Android',
    role: 'Performance contributor',
    blurb:
      'Hungama’s second rhythm title, also worked on at Gameshastra. A shorter engagement: I carried over the optimization approach from Song Beat onto a heavier asset load and a wider device range, and helped integrate animations and audio. Covered in more detail in the Song Beat case study.',
    metrics: [],
    tech: ['Unity', 'C#'],
    video: '/video/desibeats.mp4',
    poster: '/images/desibeats-poster.jpg',
  },
]

/**
 * Titles with a full written case study. Not every shipped title earns one:
 * a thin page sitting beside two detailed ones weakens both, so shorter
 * engagements stay as a card on the home page and are covered inside the
 * case study of the work they relate to.
 */
export const caseStudies = shipped.filter(
  (project): project is Project & { caseStudy: CaseStudy } => project.caseStudy !== undefined
)

/** Personal systems work. Supporting evidence, deliberately secondary. */
export const systems: Project[] = [
  {
    slug: 'delirium-odyssey',
    title: 'Delirium Odyssey',
    publisher: 'Personal',
    platform: 'PC',
    role: 'Networking',
    blurb:
      'A 3D multiplayer obstacle race with active ragdoll physics, built on Unity Netcode for GameObjects, Relay and Lobby.',
    metrics: [],
    tech: ['Netcode', 'Relay', 'Lobby'],
    video: '/video/multiplayer-race.mp4',
    poster: '/images/multiplayer-race-poster.jpg',
  },
  {
    slug: 'tpp-combat',
    title: 'TPP combat system',
    publisher: 'Personal',
    platform: 'PC',
    role: 'Gameplay systems',
    blurb:
      'Third-person melee combat with enemy AI, animation events, dodging, counters and finishers.',
    metrics: [],
    tech: ['Unity', 'C#'],
    video: '/video/tpp-combat.mp4',
    poster: '/images/tpp-combat-poster.jpg',
  },
  {
    slug: 'a-star',
    title: 'A* pathfinding',
    publisher: 'Personal',
    platform: 'PC',
    role: 'Algorithms',
    blurb:
      'I wrote A* pathfinding from scratch in C#. Building it myself meant understanding exactly what it costs, not just importing a package and hoping.',
    metrics: [],
    tech: ['Unity', 'C#'],
    video: '/video/a-star.mp4',
    poster: '/images/a-star-poster.jpg',
  },
  {
    slug: 'car-arcade',
    title: 'Car Arcade',
    publisher: 'Personal',
    platform: 'PC',
    role: 'Vehicle physics',
    blurb:
      'A toon-styled car park game with stunt jumps, bowling challenges, amusement rides and a destruction zone. Still in progress, built around physics-driven vehicle handling.',
    metrics: [],
    tech: ['Unity', 'C#'],
    video: '/video/car-arcade.mp4',
    poster: '/images/car-arcade-poster.jpg',
  },
]
