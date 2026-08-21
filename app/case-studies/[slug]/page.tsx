import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PhoneVideoBleed } from '@/components/PhoneVideoBleed'
import { shipped } from '@/lib/projects'

export const dynamicParams = false

export function generateStaticParams() {
  return shipped.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = shipped.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: `${project.title}, case study`,
    description: project.blurb,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const index = shipped.findIndex((p) => p.slug === slug)
  const project = shipped[index]

  if (!project || !project.caseStudy) notFound()

  // `shipped` is a fixed, non-empty array declared in lib/projects.ts.
  const next = shipped[(index + 1) % shipped.length]!

  return (
    <>
      <section className="px-6 pt-10 pb-12 md:px-10 md:pt-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <Link href="/#work" className="text-sm text-ink/45 transition hover:text-ink">
            Back to work
          </Link>

          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/45">
                <span className="font-semibold text-ink/75">{project.publisher}</span>
                <span aria-hidden="true">·</span>
                <span>{project.platform}</span>
                <span aria-hidden="true">·</span>
                <span>{project.role}</span>
              </div>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-ink/60">{project.blurb}</p>
            </div>

            <PhoneVideoBleed
              src={project.video}
              poster={project.poster}
              label={`${project.title}, gameplay`}
              aspect="square"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10 lg:flex-row">
          <div className="flex flex-1 flex-col gap-14">
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink/45">The problem</span>
              <p className="max-w-2xl text-base leading-relaxed text-ink/70">
                {project.caseStudy.problem}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink/45">What I built</span>
              <p className="max-w-2xl text-base leading-relaxed text-ink/70">
                {project.caseStudy.approach}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink/45">Result</span>
              <p className="max-w-2xl text-base leading-relaxed text-ink/70">
                {project.caseStudy.result}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 lg:w-72 lg:shrink-0">
            {project.metrics.length > 0 && (
              <div className="flex flex-col gap-5 border border-ink/10 p-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1">
                    <span className="font-display text-2xl font-semibold tracking-tight text-accent-text">
                      {metric.value}
                    </span>
                    <span className="text-sm text-ink/45">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="border border-ink/10 px-2.5 py-1 text-xs text-ink/45">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 border border-ink/12 p-6">
              <p className="text-sm leading-relaxed text-ink/60">
                Have a live game that needs this kind of work?
              </p>
              <a
                href="mailto:hrishik.arora@gmail.com"
                className="w-fit bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
          <span className="text-sm text-ink/45">Next case study</span>
          <Link
            href={`/case-studies/${next.slug}`}
            className="font-display text-xl font-semibold tracking-tight transition hover:text-accent-text"
          >
            {next.title}
          </Link>
        </div>
      </section>
    </>
  )
}
