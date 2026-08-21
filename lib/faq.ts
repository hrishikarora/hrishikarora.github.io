export interface FaqItem {
  question: string
  answer: string
}

/** Answers the objections that otherwise stall a first email. */
export const faq: FaqItem[] = [
  {
    question: 'What do you need from me to quote?',
    answer:
      'The game, the devices it has to hold up on, and what is going wrong. If there is a build I can run, that helps. I will come back with a fixed price and a scope in writing, usually within two days.',
  },
  {
    question: 'What if the work takes longer than scoped?',
    answer:
      'That is my problem, not yours. Fixed price means the number you approve is the number you pay. If I underestimated, I absorb it. The only thing that changes the price is you changing the scope, and we would agree that in writing first.',
  },
  {
    question: 'How does payment work?',
    answer:
      'Half up front, half on delivery for one-off work. Retainers are invoiced monthly in advance. I can invoice in INR or USD, whichever suits your finance team.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes, and I have worked under one before. Send yours over and I will sign it before we get into specifics. If you cannot have the work written up publicly, tell me and I will quote it outside the founding client offer.',
  },
  {
    question: 'What if it is not working out?',
    answer:
      'I would rather hear that early than let it run. Retainers are month to month with no lock-in. On fixed-scope work, the scope is agreed before day one specifically so this rarely comes up mid-build, but if priorities change we find a clean stopping point.',
  },
  {
    question: 'Will the timezone be a problem?',
    answer:
      'I am on IST. That overlaps most of the European working day and early US mornings. Outside that I work async and send written updates, so you are not waiting on a standup to find out where something stands.',
  },
  {
    question: 'Do you take work on games that have not launched yet?',
    answer:
      'Sometimes. My strongest work is on titles that are already live, where there is real player data to work against. If you are pre-launch and want the performance and live-ops groundwork done properly before you ship, that is worth a conversation.',
  },
]
