'use client'

import { useState } from 'react'
import { FORMSPREE_ENDPOINT, trackEvent } from '@/lib/analytics'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const FIELD_CLASS =
  'w-full border border-ink/15 bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-accent focus:outline-none'

/**
 * Submits to Formspree over fetch rather than a plain form POST, so the
 * visitor stays on the page instead of being bounced to a third-party
 * thank-you screen. Falls back to a visible error with the email address
 * if the request fails, so a broken form never costs an enquiry.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault()
    const form = formEvent.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)

      setStatus('sent')
      trackEvent('contact-form-sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col gap-3 border border-accent/40 bg-bg-raised/40 p-7">
        <h3 className="font-display text-xl font-semibold tracking-tight">Got it.</h3>
        <p className="text-sm leading-relaxed text-ink/60">
          I will read this properly and reply within 24 hours, including if it is not something I
          should take on.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-ink/45">
            Your name
          </label>
          <input id="name" name="name" type="text" required className={FIELD_CLASS} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-ink/45">
            Email
          </label>
          <input id="email" name="email" type="email" required className={FIELD_CLASS} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="game" className="text-sm text-ink/45">
          The game, and what it runs on
        </label>
        <input
          id="game"
          name="game"
          type="text"
          placeholder="Store link or name, and the devices it has to hold up on"
          className={FIELD_CLASS}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-ink/45">
          What is going wrong
        </label>
        <textarea id="message" name="message" required rows={5} className={FIELD_CLASS} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send it over'}
        </button>
        <span className="text-sm text-ink/45">I reply within 24 hours.</span>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-ink/70">
          That did not send. Email me directly at{' '}
          <a href="mailto:hrishik.arora@gmail.com" className="text-accent-text underline">
            hrishik.arora@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  )
}
