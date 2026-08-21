export interface FaqItem {
  question: string
  answer: string
}

/** The questions that come up most before a first conversation. */
export const faq: FaqItem[] = [
  {
    question: 'What do you need from me to quote?',
    answer:
      'The game, the devices it has to hold up on, and what is going wrong. If there is a build I can run, that helps. I will come back with a fixed price and a scope in writing, usually within two days.',
  },
  {
    question: 'What exactly do I get from the audit?',
    answer:
      'A written report: the main things costing you frames, memory and battery, what is causing each one, and a prioritized list of fixes with effort estimates. Where it helps I include profiler captures and point at the specific systems worth opening. The report is yours whether I do the fixes or your team does.',
  },
  {
    question: 'Can you work inside our existing codebase and team?',
    answer:
      'That is most of what I have done. Hexa Coin was a live codebase I joined after launch, working cross-team with the developer and the publisher. I work in Git, follow whatever branching and review process you already have, and I would rather match your conventions than impose mine.',
  },
  {
    question: 'How quickly can you start?',
    answer:
      'I am freelancing full time and taking new work now, so usually within a week of the scope being agreed. Audits can often start sooner, since they need less setup on your side.',
  },
  {
    question: 'What happens after the audit?',
    answer:
      'You get the report and you own it. Nothing obliges you to hire me for the fixes. Some teams take the findings and do the work in-house, which is a perfectly good outcome. If you do want me to implement them, we scope that separately.',
  },
  {
    question: 'What if the work takes longer than scoped?',
    answer:
      'Fixed price means the number you approve is the number you pay. If I underestimate the work, I absorb the difference. The only thing that changes the price is you changing the scope, and we would agree that in writing first.',
  },
  {
    question: 'How does payment work?',
    answer:
      'Half up front, half on delivery for one-off work. Retainers are invoiced monthly in advance. I can invoice in INR or USD, whichever suits your finance team.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes, and I have worked under one before. Send yours over and I will sign it before we get into specifics. If the work cannot be written up publicly at all, say so early and I will price it accordingly.',
  },
  {
    question: 'How do we end an engagement?',
    answer:
      'Retainers are month to month with no lock-in, so you give notice and we wind down cleanly. Fixed-scope work is agreed before day one specifically so this rarely comes up mid-build, but if priorities change we find a stopping point and I hand over everything in a state your team can pick up.',
  },
  {
    question: 'Will the timezone be a problem?',
    answer:
      'I am on IST, but I do not expect you to work around that. I shift my hours to hold a few hours of genuine overlap with your day, wherever you are. For urgent production problems I will make myself available outside those hours where I reasonably can, though it is not a 24/7 on-call arrangement, and I would say so plainly if you needed one. Outside that I work async and send written updates.',
  },
  {
    question: 'Do you take work on games that have not launched yet?',
    answer:
      'Sometimes. My strongest work is on titles that are already live, where there is real player data to work against. If you are pre-launch and want the performance and live-ops groundwork done properly before you ship, that is worth a conversation.',
  },
]
