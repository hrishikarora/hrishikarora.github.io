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
      'Hexa Coin is a puzzle game built by BeachBum Games and published by VOODOO. I joined after launch and built the retention systems that bring a player back after they lose: Revive, Hint, Target and Quick Revive. I wired up Unity Addressables so content could ship without a store release, and VOODOO’s event tracking so the team could watch the in-game economy in real time. Eight-plus updates went out against a live player base that passed 100,000 downloads.',
    metrics: [
      { value: '100K+', label: 'downloads' },
      { value: '8+', label: 'live update cycles' },
      { value: '4', label: 'retention systems shipped' },
    ],
    tech: ['Unity', 'C#', 'Addressables', 'Live-ops', 'Event tracking'],
    video: '/video/hexa-coin.mp4',
    poster: '/images/hexa-coin-poster.jpg',
    caseStudy: {
      problem:
        'Hexa Coin was already live under VOODOO with real players when I joined. The retention layer hadn’t been built yet. A player who failed a level had no reason to stay, and the team had no way to see what was happening to the in-game economy as it happened, only delayed reports after the fact.',
      approach:
        'I built the systems that give a player a reason to reopen the app after a loss: Revive, Hint, Target and Quick Revive. Alongside those I set up Unity Addressables so content could ship without a full store release, and wired in VOODOO’s event tracking so the economy could be monitored live rather than reconstructed later.',
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
      'Song Beat is a rhythm game by Hungama Game Studio. I worked on performance across a wide spread of Android devices, plus animations, sound effects and UI polish. Most of the job was profiling and debugging until playback stayed stable on hardware well below flagship spec.',
    metrics: [],
    tech: ['Unity', 'C#', 'Profiler'],
    video: '/video/song-beat.mp4',
    poster: '/images/song-beat-poster.jpg',
    caseStudy: {
      problem:
        'Song Beat is a rhythm game, so the whole experience depends on staying responsive frame to frame. It had to run across a wide spread of Android hardware, most of it well below flagship spec, and on that kind of hardware performance problems show up immediately as missed beats and stuttering animation.',
      approach:
        'I profiled the build across that device range and worked through the optimizations that came out of it. Alongside the performance work, I integrated animations, sound effects and UI elements, and kept debugging and profiling through the cycle to catch regressions before they shipped.',
      result:
        'Playback held stable across the device tiers Hungama needed it to run on. This was the project where I built most of the profiling habits I still use today.',
    },
  },
  {
    slug: 'desibeats',
    title: 'Desibeats',
    publisher: 'Hungama Game Studio',
    platform: 'Android',
    role: 'Performance contributor',
    blurb:
      'Desibeats is Hungama’s second rhythm title. I contributed performance suggestions and helped integrate animations and audio, building on what I’d learned optimizing Song Beat.',
    metrics: [],
    tech: ['Unity', 'C#'],
    video: '/video/desibeats.mp4',
    poster: '/images/desibeats-poster.jpg',
    caseStudy: {
      problem:
        'Desibeats is Hungama’s second rhythm title, built on the same foundation as Song Beat but with its own asset load and its own set of target devices.',
      approach:
        'I carried over performance suggestions from what I’d learned on Song Beat and helped integrate animations and audio.',
      result:
        'A shorter engagement than Song Beat, but it’s where I found out the optimization approach held up past one game, not just the one it was built for.',
    },
  },
]

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
