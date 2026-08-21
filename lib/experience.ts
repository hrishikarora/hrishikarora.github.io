export interface Role {
  company: string
  location: string
  title: string
  period: string
  summary: string
}

/**
 * Studio employment history. The video case studies cover the published
 * titles; this covers the roles behind work that has no public footage.
 */
export const roles: Role[] = [
  {
    company: 'Freelance',
    location: 'Remote',
    title: 'Unity developer',
    period: 'Jan 2026 – present',
    summary:
      'Live-ops, retention systems and mobile performance work for studios running shipped titles. Available for new engagements now.',
  },
  {
    company: 'Cympl Studios',
    location: 'Pune',
    title: 'Game Programmer',
    period: 'Jun 2025 – Dec 2025',
    summary:
      'Live-ops on Hexa Coin, working cross-team with BeachBum and VOODOO. Shipped the retention systems, Unity Addressables for dynamic asset loading, and VOODOO event tracking for A/B testing of economy features.',
  },
  {
    company: 'Webmobril Gaming Studioz',
    location: 'Indore',
    title: 'Junior Game Developer',
    period: 'Jul 2024 – Oct 2024',
    summary:
      'Full-stack work on a multiplayer card game under NDA: gameplay mechanics, real-time player interaction, and RESTful APIs for live data sync and secure transactions, built to regulated-market standards.',
  },
  {
    company: 'Gameshastra',
    location: 'Hyderabad',
    title: 'Junior Game Developer',
    period: 'Jul 2023 – Jul 2024',
    summary:
      'Core gameplay, systems and optimization on Song Beat and Desibeats. Cut server-related bugs by 20% through better data synchronization, and mentored four interns.',
  },
]

export const education = {
  degree: 'B.Tech, Computer Science',
  institution: 'Medi-Caps University, Indore',
  year: '2023',
}

export const stack = [
  'Unity',
  'C#',
  'C++',
  'Python',
  'Unity Profiler',
  'Addressables',
  'Netcode',
  'REST APIs',
  'ASP.NET',
  'Object pooling',
  'Design patterns',
  'Git',
]
