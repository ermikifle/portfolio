function HeroWindow() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-300/80 bg-slate-50 px-4 py-2 text-xs text-slate-500">
        File &nbsp;·&nbsp; Edit &nbsp;·&nbsp; View &nbsp;·&nbsp; Format
      </div>

      <div className="flex-1 overflow-y-auto bg-[#e8eaed] p-4 sm:p-6">
        <article className="mx-auto max-w-xl rounded-xl border border-slate-200/80 bg-white shadow-[0_12px_40px_-18px_rgba(15,23,42,0.35)] overflow-hidden">

          {/* Header band */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-7">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-400 mb-1">Vienna, VA</p>
            <h1 className="text-3xl font-bold tracking-tight text-white">Ermiyas Kifle</h1>
            <p className="mt-1 text-sm font-medium text-slate-300">Engineer &amp; Designer</p>
          </div>

          {/* Body */}
          <div className="px-8 py-7 space-y-6">
            <p className="text-[15px] leading-[1.85] text-slate-700">
              Engineer and designer with 3+ years of experience building scalable, user-centered
              systems. I work across software development, systems architecture, and UX — focused on
              creating tools that simplify workflows and hold up in the real world.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/ermi-kifle-69443a195/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7A1.8 1.8 0 1 1 6.5 3a1.8 1.8 0 0 1 0 3.7zM20 19h-3v-5.6c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.6 1.3 3.6 4.1V19z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:ermimesfin@yahoo.com?subject=Hello Ermiyas"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default HeroWindow
