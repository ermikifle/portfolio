function HeroWindow() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-300/80 bg-slate-50 px-4 py-2 text-xs text-slate-600">
        File Edit View Insert Format Tools
      </div>

      <div className="flex items-center justify-end gap-2 border-b border-slate-300/80 bg-slate-100 px-4 py-2 text-[11px] text-slate-500">
        <span className="rounded bg-white/80 px-2 py-0.5">100%</span>
        <span className="rounded bg-white/80 px-2 py-0.5">A</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <article className="mx-auto max-w-2xl space-y-5 rounded-sm border border-slate-200 bg-white px-8 py-10 text-left shadow-[0_12px_30px_-18px_rgba(15,23,42,0.45)] sm:px-10">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-800">About me</h1>
          <p className="text-[15px] leading-8 text-slate-700">
            I've always been curious about how the systems around us work, and more importantly, how they
            could work better for people. Living in a world where technology shapes so much of our daily
            lives, I'm motivated by the idea that thoughtful tools and ideas can make complicated things
            simpler and more accessible.
          </p>
          <p className="text-[15px] leading-8 text-slate-700">
            My journey through school, work, and different environments has shown me how powerful problem
            solving, empathy, and persistence can be when combined. I'm someone who enjoys building,
            learning, and questioning the way things are done, with the hope of contributing to a future
            where technology supports people's growth, opportunities, and understanding rather than making
            life more overwhelming.
          </p>
          <a
            href="https://www.linkedin.com/in/ermi-kifle-69443a195/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-sky-300/55 bg-sky-500/20 px-3 py-1.5 text-sm font-medium text-sky-800 transition hover:bg-sky-500/30"
          >
            View LinkedIn Profile
          </a>
        </article>
      </div>
    </div>
  )
}

export default HeroWindow
