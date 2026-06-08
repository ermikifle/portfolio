function LinkedInIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7A1.8 1.8 0 1 1 6.5 3a1.8 1.8 0 0 1 0 3.7zM20 19h-3v-5.6c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.6 1.3 3.6 4.1V19z" />
    </svg>
  )
}

function PostCard({ post, compact = false }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className={[
        'group block rounded-xl border border-white/10 bg-white/5 transition duration-150',
        'hover:border-sky-400/30 hover:bg-sky-500/10',
        compact ? 'p-3.5' : 'p-4',
      ].join(' ')}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-[0_2px_8px_-2px_rgba(10,102,194,0.55)]">
          <LinkedInIcon className="h-3.5 w-3.5" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="text-[12px] font-medium text-slate-200">{post.author}</span>
            <span className="text-[10px] text-slate-500">· {post.date}</span>
          </div>

          <h3 className="mt-1 text-[13px] font-semibold leading-snug text-slate-100 line-clamp-2">
            {post.title}
          </h3>

          <p className="mt-1.5 text-[11px] leading-5 text-slate-400 line-clamp-2">{post.excerpt}</p>

          <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-sky-300/80 transition group-hover:text-sky-200">
            Read on LinkedIn
            <svg className="h-3 w-3 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

export { LinkedInIcon, PostCard }
