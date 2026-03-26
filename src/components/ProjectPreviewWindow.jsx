function ProjectPreviewWindow({ file }) {
  if (!file) {
    return (
      <div className="flex h-full items-center justify-center bg-[#5f6673] text-sm text-slate-200">
        Select a project PDF from the Projects folder.
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#4f5562]">
      <div className="border-b border-slate-500/50 bg-[#2a2c33] px-3 py-2">
        <div className="flex items-center gap-2 text-[11px] text-slate-300">
          <span className="rounded bg-slate-700 px-2 py-0.5">PDF</span>
          <span className="truncate">{file.fileName}</span>
          <span className="ml-auto rounded bg-slate-700 px-2 py-0.5">100%</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
          <span className="rounded bg-slate-800 px-2 py-0.5">Page 1 / 1</span>
          <span className="rounded bg-slate-800 px-2 py-0.5">Fit Width</span>
          <span className="rounded bg-slate-800 px-2 py-0.5">Search</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <article className="mx-auto max-w-2xl space-y-4 rounded-sm border border-slate-300 bg-white px-7 py-8 text-slate-800 shadow-[0_10px_26px_-16px_rgba(15,23,42,0.55)]">
          <h3 className="text-xl font-semibold">{file.project}</h3>
          <p className="text-sm text-slate-600">{file.location}</p>
          <p className="text-sm">
            <span className="font-semibold">{file.role}</span>
            <span className="text-slate-500"> - {file.period}</span>
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            {file.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="border-t border-slate-200 pt-3 text-xs text-slate-500">Last modified: {file.modified}</p>
        </article>
      </div>
    </div>
  )
}

export default ProjectPreviewWindow
