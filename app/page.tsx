import Image from 'next/image'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { GameVideo } from '@/components/GameVideo'
import { PhoneVideoBleed } from '@/components/PhoneVideoBleed'
import { TrackedLink } from '@/components/TrackedLink'
import { CAL_URL } from '@/lib/analytics'
import { education, roles, stack } from '@/lib/experience'
import { faq } from '@/lib/faq'
import { offers } from '@/lib/offers'
import { process } from '@/lib/process'
import { shipped, systems, type Project } from '@/lib/projects'
import { testimonials } from '@/lib/testimonials'

/**
 * Footage first, specifics second, detail last. Nothing is hidden behind
 * an interaction; scrolling is the only thing a visitor has to do.
 */

function ShippedBand({ project, index }: { project: Project; index: number }) {
  // Alternate which side the phone sits on so the scroll has rhythm.
  const flip = index % 2 === 1

  return (
    <section
      className={`relative overflow-hidden border-t py-16 md:py-24 ${
        project.featured ? 'border-accent/30 bg-bg-raised/30' : 'border-ink/10'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10 lg:gap-16 ${
          flip ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } lg:items-center`}
      >
        <PhoneVideoBleed
          src={project.video}
          poster={project.poster}
          label={`${project.title}, gameplay`}
          aspect="square"
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            {project.featuredLabel && (
              <span className="w-fit bg-accent px-2 py-0.5 text-[11px] font-semibold tracking-wide text-accent-ink">
                {project.featuredLabel.toUpperCase()}
              </span>
            )}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/45">
              <span className="font-semibold text-ink/75">{project.publisher}</span>
              <span aria-hidden="true">·</span>
              <span>{project.platform}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
            </div>
            <h3
              className={`font-display font-semibold tracking-tight ${
                project.featured ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'
              }`}
            >
              {project.title}
            </h3>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">{project.blurb}</p>

          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1">
                  <span className="font-display text-3xl font-semibold tracking-tight text-accent-text md:text-4xl">
                    {metric.value}
                  </span>
                  <span className="text-sm text-ink/45">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <span key={tech} className="border border-ink/10 px-2.5 py-1 text-xs text-ink/45">
                {tech}
              </span>
            ))}
          </div>

          {project.caseStudy && (
            <Link
              href={`/case-studies/${project.slug}`}
              className="pt-2 text-sm font-semibold text-accent-text transition hover:brightness-90"
            >
              Read the case study
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── Skim layer: everything answered before a scroll ───────────── */}
      <section className="relative overflow-hidden px-6 pt-14 pb-16 md:px-10 md:pt-20 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex flex-col gap-7">
            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-tight text-balance md:text-6xl lg:text-7xl">
              I ship, optimize, and maintain live mobile games.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink/60">
              I build the retention and live-ops systems that keep live-service titles earning,
              and I make them run on low-end Android. All of it without putting another full-time
              engineer on your payroll. I&rsquo;ve worked on titles published by{' '}
              <span className="font-semibold text-ink">VOODOO</span> and{' '}
              <span className="font-semibold text-ink">Hungama Game Studio</span>.
            </p>

            <div className="flex flex-wrap gap-x-12 gap-y-6 py-2">
              <div className="flex flex-col gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight text-accent-text">
                  100K+
                </span>
                <span className="text-sm text-ink/45">downloads on Hexa Coin</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight text-accent-text">
                  8+
                </span>
                <span className="text-sm text-ink/45">post-launch updates</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight text-accent-text">
                  3
                </span>
                <span className="text-sm text-ink/45">titles shipped</span>
              </div>
            </div>

            <p className="max-w-xl border-l-2 border-ink/15 pl-4 text-base leading-relaxed text-ink/50">
              Most of what I do sits after launch, where the game is already earning and a bad
              change costs real money. For studios with a live Unity title and no spare engineer
              to put on it.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <TrackedLink
                  href="#contact"
                  event="hero-cta"
                  className="bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
                >
                  Tell me what is going wrong
                </TrackedLink>
                <a
                  href="#work"
                  className="border border-ink/20 px-6 py-3.5 text-sm text-ink/75 transition hover:border-ink/40 hover:text-ink"
                >
                  See the work
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/45">
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full bg-accent"
                  />
                  Taking new work now
                </span>
                <span aria-hidden="true" className="text-ink/20">
                  ·
                </span>
                <span>I reply within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Hero footage: the game already playing, not a screenshot. */}
          <PhoneVideoBleed
            src={shipped[0]?.video}
            poster={shipped[0]?.poster}
            label="Hero reel, Hexa Coin gameplay"
            aspect="square"
          />
        </div>
      </section>

      {/* ── Detail layer ─────────────────────────────────────────────── */}
      <div id="work">
        {shipped.map((project, i) => (
          <ShippedBand key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* ── Testimonial, straight after the work it refers to ────────── */}
      <section className="border-t border-ink/10 bg-bg-raised/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col gap-6">
              <blockquote className="font-display text-xl leading-relaxed tracking-tight text-ink/85 md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col gap-1 border-l-2 border-accent pl-4">
                {t.url ? (
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.name} on LinkedIn`}
                    className="group flex w-fit items-center gap-2 font-semibold underline decoration-ink/25 underline-offset-4 transition hover:text-accent-text hover:decoration-accent"
                  >
                    {t.name}
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 fill-ink/40 transition group-hover:fill-accent-text"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                    </svg>
                  </a>
                ) : (
                  <span className="font-semibold">{t.name}</span>
                )}
                <span className="text-sm text-ink/50">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Secondary evidence ───────────────────────────────────────── */}
      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Systems work
            </h2>
            <p className="max-w-xl text-base text-ink/55">
              Built on my own time, to go deeper on the engineering than client work usually
              allows.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {systems.map((project) => (
              <div key={project.slug} className="flex flex-col gap-4">
                <GameVideo
                  src={project.video}
                  poster={project.poster}
                  label={`${project.title}, clip`}
                  aspect="square"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/55">{project.blurb}</p>
                  <span className="text-xs text-ink/35">{project.tech.join(' · ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section id="about" className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10 md:flex-row md:items-start">
          <div className="h-[180px] w-[180px] shrink-0 overflow-hidden border border-ink/10">
            <Image
              src="/images/hrishik-arora.jpg"
              alt="Hrishik Arora"
              width={180}
              height={180}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              About me
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink/60">
              I&rsquo;m a Unity developer with two-plus years on live mobile titles, across three
              studios, freelancing since the start of 2026. I kept Hexa Coin running under VOODOO,
              did the performance work on Hungama Game Studio&rsquo;s rhythm games, and built
              real-time multiplayer and secure transaction systems for a card game under NDA.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink/60">
              Outside client work, I build systems on my own time: multiplayer netcode, combat,
              pathfinding. It&rsquo;s how I actually learn a new corner of the engine, not just
              read about it.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink/60">
              I&rsquo;m based in India (IST) and work with studios wherever they are. I shift my
              hours to hold a real overlap with your working day, and for urgent production
              problems I will make myself available outside those hours where I reasonably can.
              The rest of the time I work async, with written updates so nobody has to chase me
              for status.
            </p>
          </div>
        </div>
      </section>

      {/* ── Studio experience ────────────────────────────────────────── */}
      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Studio experience
          </h2>

          <div className="flex flex-col">
            {roles.map((role) => (
              <div
                key={role.company}
                className="flex flex-col gap-2 border-t border-ink/10 py-6 md:flex-row md:gap-10"
              >
                <div className="flex shrink-0 flex-col gap-1 md:w-64">
                  <span className="font-display font-semibold tracking-tight">{role.company}</span>
                  <span className="text-sm text-ink/45">
                    {role.title} · {role.location}
                  </span>
                  <span className="text-sm text-ink/35">{role.period}</span>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-ink/60">{role.summary}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 border-t border-ink/10 pt-8 md:flex-row md:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink/45">Stack</span>
              <div className="flex max-w-2xl flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="border border-ink/10 px-2.5 py-1 text-xs text-ink/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <span className="text-sm text-ink/45">Education</span>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-ink/70">{education.degree}</span>
                <span className="text-sm text-ink/45">
                  {education.institution}, {education.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            How it works
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="flex flex-col gap-3 border-t border-ink/15 pt-4">
                <span className="font-display text-sm font-semibold text-accent-text">
                  {item.step}
                </span>
                <h3 className="font-display font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/55">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who this suits, placed before the offers ─────────────────── */}
      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              A good fit if
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                'Your game is already live, or close to it',
                'It is built in Unity, shipping on Android',
                'Performance on low-end devices actually costs you players',
                'You need updates shipped and are short on engineering capacity',
                'You would rather not carry another full-time salary to get it done',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-ink/60">
                  <span aria-hidden="true" className="text-accent-text">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Probably not a fit if
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                'You want a game built from nothing, start to finish',
                'You are looking for art, design or audio rather than engineering',
                'You need someone on site, or in your timezone full time',
                'The main thing you are comparing is hourly rate',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-ink/45">
                  <span aria-hidden="true" className="text-ink/30">
                    &minus;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Offers ───────────────────────────────────────────────────── */}
      <section id="offers" className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Ways to work with me
          </h2>
          <p className="max-w-xl text-base text-ink/55">
            Most studios start with the audit or a single sprint, then move onto a retainer once
            the update cycle becomes continuous. Every engagement is fixed price and scoped before
            it starts.
          </p>

          {/* Terms of the founding client offer, set apart from the cards so
              the conditions attached to it are not missed. */}
          <div className="flex max-w-3xl flex-col gap-4 border-l-2 border-accent bg-bg-raised/40 py-6 pl-6 pr-6">
            <span className="font-display text-base font-semibold tracking-tight text-accent-text">
              Founding client rate, first three studios
            </span>
            <p className="text-sm leading-relaxed text-ink/70">
              I&rsquo;m opening this to my first three independent studio clients at a reduced
              rate, in exchange for permission to write the work up as a case study, anonymised if
              your publisher needs it. The engineering and the deliverables are the same either
              way.
            </p>
            <p className="text-sm leading-relaxed text-ink/70">
              The founding rate covers the first engagement and any follow-on work agreed within
              sixty days of it finishing.
            </p>
            <p className="text-sm leading-relaxed text-ink/70">
              Everything is fixed price, agreed in writing before any work starts, so the number
              you approve is the number you pay. Tell me the game and what is going wrong and
              I will send a quote. If the project cannot be written about at all, say so and I
              will quote it normally.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.slug}
                className={`flex flex-col gap-4 border p-7 ${
                  offer.featured ? 'border-accent/40' : 'border-ink/12'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm text-ink/45">{offer.cadence}</span>
                  <span className="bg-accent px-2 py-0.5 text-[11px] font-semibold tracking-wide text-accent-ink">
                    FIRST 3 STUDIOS
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold tracking-tight">{offer.title}</h3>

                <p className="text-sm leading-relaxed text-ink/60">{offer.description}</p>

                <div className="mt-auto flex flex-col gap-3 pt-4">
                  <span className="border-l-2 border-ink/15 pl-3 text-sm leading-relaxed text-ink/50">
                    {offer.deliverable}
                  </span>
                  <TrackedLink
                    href="#contact"
                    event={`offer-quote-${offer.slug}`}
                    className="text-sm font-semibold text-accent-text transition hover:brightness-90"
                  >
                    Ask for a quote
                  </TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact prompt, directly after the offers ────────────────── */}
      <section className="border-t border-ink/10 bg-bg-raised/30 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              Know which one you need?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-ink/55">
              Send me the game and the problem and I will come back with a fixed scope and price.
            </p>
          </div>
          <TrackedLink
            href="#contact"
            event="midpage-cta"
            className="w-fit shrink-0 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            Ask for a quote
          </TrackedLink>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Before you hire me
          </h2>
          <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.question} className="flex max-w-xl flex-col gap-2">
                <h3 className="font-display font-semibold tracking-tight">{item.question}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <section id="contact" className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Running a live title that needs work?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink/60">
              Tell me the game, the devices it has to hold up on, and what is going wrong. I will
              tell you straight whether I am the right person for it.
            </p>

            <div className="flex flex-col gap-4 border-t border-ink/10 pt-6">
              <span className="text-sm text-ink/45">Rather not use a form?</span>
              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href={CAL_URL}
                  event="contact-book-call"
                  external
                  className="border border-ink/20 px-5 py-3 text-sm font-semibold text-ink/80 transition hover:border-accent hover:text-ink"
                >
                  Book a call
                </TrackedLink>
                <TrackedLink
                  href="mailto:hrishik.arora@gmail.com?subject=Unity%20game%20problem"
                  event="contact-email"
                  className="border border-ink/20 px-5 py-3 text-sm font-semibold text-ink/80 transition hover:border-accent hover:text-ink"
                >
                  Email me directly
                </TrackedLink>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
