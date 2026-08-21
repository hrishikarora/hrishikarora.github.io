import Image from 'next/image'
import Link from 'next/link'
import { GameVideo } from '@/components/GameVideo'
import { PhoneVideoBleed } from '@/components/PhoneVideoBleed'
import { shipped, systems, type Project } from '@/lib/projects'

/**
 * Steam-page logic: footage first, specifics second, proof third.
 * Nothing is hidden behind an interaction. Scrolling is the only verb.
 */

function ShippedBand({ project, index }: { project: Project; index: number }) {
  // Alternate which side the phone sits on so the scroll has rhythm.
  const flip = index % 2 === 1

  return (
    <section className="relative overflow-hidden border-t border-ink/10 py-16 md:py-24">
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
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/45">
              <span className="font-semibold text-ink/75">{project.publisher}</span>
              <span aria-hidden="true">·</span>
              <span>{project.platform}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
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
              Unity gameplay programmer, freelance. Three commercial titles shipped with{' '}
              <span className="font-semibold text-ink">VOODOO</span> and{' '}
              <span className="font-semibold text-ink">Hungama Game Studio</span>.
            </p>

            <div className="flex flex-wrap gap-x-12 gap-y-6 py-2">
              <div className="flex flex-col gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight text-accent-text">
                  100K+
                </span>
                <span className="text-sm text-ink/45">downloads</span>
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

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hrishik.arora@gmail.com"
                className="bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
              >
                Hire me
              </a>
              <a
                href="#work"
                className="border border-ink/20 px-6 py-3.5 text-sm text-ink/75 transition hover:border-ink/40 hover:text-ink"
              >
                See the work
              </a>
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
              I&rsquo;m a Unity developer with three years of experience shipping mobile games.
              I&rsquo;ve worked inside two different studio setups: on the team keeping Hexa Coin
              running under VOODOO, and contributing performance work to Hungama Game
              Studio&rsquo;s rhythm games.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink/60">
              Outside client work, I build systems on my own time: multiplayer netcode, combat,
              pathfinding. It&rsquo;s how I actually learn a new corner of the engine, not just
              read about it. Based in India, working with studios wherever they are.
            </p>
          </div>
        </div>
      </section>

      {/* ── Offers ───────────────────────────────────────────────────── */}
      <section id="offers" className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Ways to work with me
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 border border-ink/12 p-7">
              <span className="text-sm text-ink/45">One week · fixed price</span>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Mobile performance audit
              </h3>
              <p className="text-sm leading-relaxed text-ink/60">
                I profile your live Unity build on real low-end devices and hand back a ranked
                list of what is costing you frames, memory and battery, plus the fix for each one.
              </p>
              <span className="font-display pt-2 text-2xl font-semibold tracking-tight text-accent-text">
                ₹40,000
              </span>
            </div>
            <div className="flex flex-col gap-4 border border-ink/12 p-7">
              <span className="text-sm text-ink/45">Two weeks · fixed price</span>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Live-ops feature sprint
              </h3>
              <p className="text-sm leading-relaxed text-ink/60">
                One agreed feature, built into your live game and shipped to store. The same kind
                of cycle I ran on Hexa Coin, just scoped and priced before day one.
              </p>
              <span className="font-display pt-2 text-2xl font-semibold tracking-tight text-accent-text">
                ₹75,000
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <section id="contact" className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:px-10">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Got a Unity build that needs to run better?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Tell me the game, the devices it has to hold up on, and what is going wrong. I will
            tell you straight whether I am the right person for it.
          </p>
          <a
            href="mailto:hrishik.arora@gmail.com"
            className="bg-accent w-fit px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            hrishik.arora@gmail.com
          </a>
        </div>
      </section>
    </>
  )
}
