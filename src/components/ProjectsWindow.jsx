import { projectFiles } from '../data/projects'

function ProjectCard({ file, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(file)}
      className="group w-full text-left rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-150 hover:bg-indigo-500/10 hover:border-indigo-300/30 focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-300/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-[15px] font-semibold text-slate-100 truncate">{file.project}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="rounded-full border border-indigo-300/25 bg-indigo-500/15 px-2.5 py-0.5 text-[11px] font-medium text-indigo-200">
              {file.role}
            </span>
            <span className="text-[11px] text-slate-400">{file.period}</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">{file.location}</p>
          <p className="text-[12px] leading-5 text-slate-400 line-clamp-2">{file.details[0]}</p>
        </div>
        <span className="mt-1 shrink-0 text-slate-600 transition group-hover:text-indigo-300 group-hover:translate-x-0.5 duration-150">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
      </div>
    </button>
  )
}

function ProjectsWindow({ onOpenPreview }) {
  return (
    <div className="flex h-full flex-col bg-[#111827]">
      <div className="flex items-center justify-between border-b border-white/8 bg-[#0d1117] px-5 py-3.5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
          <p className="text-lg font-semibold tracking-tight text-slate-100">Projects</p>
        </div>
        <span className="rounded-full border border-indigo-300/25 bg-indigo-500/15 px-2.5 py-1 text-xs font-medium text-indigo-200">
          {projectFiles.length} entries
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {projectFiles.map((file) => (
          <ProjectCard key={file.id} file={file} onOpen={onOpenPreview} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsWindow
