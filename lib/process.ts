export interface ProcessStep {
  step: string
  title: string
  detail: string
}

/** Removes the "what actually happens if I email him" uncertainty. */
export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell me what is wrong',
    detail:
      'The game, the devices it has to hold up on, and the problem. A build I can run helps but is not required.',
  },
  {
    step: '02',
    title: 'I scope it',
    detail:
      'You get a fixed scope and a fixed price in writing, usually within two days. Nothing starts until you approve it.',
  },
  {
    step: '03',
    title: 'I do the work',
    detail:
      'In your repo, on your branching and review process, alongside whoever is already on the team. Written updates as I go.',
  },
  {
    step: '04',
    title: 'You get the result',
    detail:
      'A report you own, a feature merged and shipped, or booked capacity each month, depending on what we agreed.',
  },
]
