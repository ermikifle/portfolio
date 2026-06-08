function ContactWindow() {
  return (
    <div className="flex h-full flex-col bg-[#111827]">
      <div className="flex items-center justify-between border-b border-white/8 bg-[#0d1117] px-5 py-3.5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Get in Touch</p>
          <p className="text-lg font-semibold tracking-tight text-slate-100">Contact</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* LinkedIn card — primary */}
        <a
          href="https://www.linkedin.com/in/ermi-kifle-69443a195/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-5 transition hover:bg-sky-500/20 hover:border-sky-400/35"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] shadow-[0_4px_14px_-4px_rgba(10,102,194,0.6)]">
            <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
              <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7A1.8 1.8 0 1 1 6.5 3a1.8 1.8 0 0 1 0 3.7zM20 19h-3v-5.6c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.6 1.3 3.6 4.1V19z"/>
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-100">LinkedIn</p>
            <p className="text-xs text-slate-400 mt-0.5">linkedin.com/in/ermi-kifle-69443a195</p>
            <p className="text-xs text-slate-500 mt-1">Ermiyas Kifle · Engineer &amp; Designer</p>
          </div>
          <svg className="h-4 w-4 shrink-0 text-sky-400/60 transition group-hover:text-sky-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>

        {/* Email card — secondary */}
        <a
          href="mailto:ermimesfin@yahoo.com?subject=Hello Ermiyas"
          className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 hover:border-white/20"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
            <svg className="h-5 w-5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m3 8 9 6 9-6" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-100">Email</p>
            <p className="text-xs text-slate-400 mt-0.5">ermimesfin@yahoo.com</p>
          </div>
          <svg className="h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-slate-400 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>

        <p className="text-center text-[11px] text-slate-600 pt-1">
          Best way to reach me is via LinkedIn.
        </p>
      </div>
    </div>
  )
}

export default ContactWindow
