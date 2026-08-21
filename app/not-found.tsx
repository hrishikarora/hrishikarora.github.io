import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <span className="font-display text-sm font-semibold text-accent-text">404</span>
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          That page does not exist.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-ink/60">
          It may have moved, or it may never have been here. The work and the case studies are all
          on the home page.
        </p>
        <Link
          href="/"
          className="w-fit bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
        >
          Back to the work
        </Link>
      </div>
    </section>
  )
}
