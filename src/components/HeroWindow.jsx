const actions = [
  { label: 'View Projects', style: 'secondary' },
  { label: 'Resume', style: 'primary' },
  { label: 'Contact', style: 'secondary' },
]

function HeroWindow() {
  return (
    <div className="grid h-full gap-8 p-6 sm:p-10 md:grid-cols-[14rem_1fr] md:gap-10">
      <div className="flex items-start justify-center md:items-center">
        <div className="relative h-36 w-36 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-indigo-500/25 via-slate-700 to-slate-900 shadow-[0_16px_40px_-26px_rgba(99,102,241,0.85)] sm:h-44 sm:w-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.28),transparent_42%)]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/45 to-transparent" />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium tracking-[0.22em] text-slate-200">
            EK
          </span>
        </div>
      </div>

      <div className="space-y-5 text-left">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Ermiyas Kifle
          </h1>
          <p className="text-lg text-slate-200/90">
            Software Engineer building thoughtful digital products.
          </p>
          <p className="max-w-prose text-sm leading-relaxed text-slate-400 sm:text-base">
            Focused on product design, full-stack development, and startup execution.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              className={[
                'rounded-xl border px-4 py-2.5 text-sm font-medium transition duration-200',
                action.style === 'primary'
                  ? 'border-indigo-300/35 bg-indigo-500/30 text-indigo-100 shadow-[0_10px_20px_-14px_rgba(129,140,248,0.95)] hover:bg-indigo-500/40'
                  : 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10',
              ].join(' ')}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroWindow
