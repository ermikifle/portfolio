function ProjectPreviewWindow({ file }) {
  if (!file) {
    return (
      <div className="flex h-full items-center justify-center bg-[#111827] text-sm text-slate-500">
        Select an entry to preview.
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col bg-[#0d1117]">
      {/* Toolbar */}
      <div className="flex items-center gap-2 border-b border-white/8 bg-[#111827] px-4 py-2.5">
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-400">Preview</span>
        <span className="truncate text-[11px] text-slate-500">{file.fileName}</span>
        <span className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-500">100%</span>
      </div>

      {/* Content — paper card */}
      <div className="flex-1 overflow-y-auto bg-[#e8eaed] p-5">
        <article className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.4)]">
          {/* Header band */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-7 py-6">
            <h3 className="text-xl font-bold text-white">{file.project}</h3>
            <p className="mt-0.5 text-sm text-slate-300">{file.location}</p>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 bg-slate-50 px-7 py-3.5">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-100">
              {file.role}
            </span>
            <span className="text-xs text-slate-500">{file.period}</span>
          </div>

          {/* Bullet details */}
          <div className="px-7 py-6">
            <ul className="space-y-3">
              {file.details.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-100 bg-slate-50 px-7 py-3">
            <p className="text-[11px] text-slate-400">Last modified: {file.modified}</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ProjectPreviewWindow
