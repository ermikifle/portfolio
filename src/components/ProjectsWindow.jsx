import { useState } from 'react'

export const projectFiles = [
  {
    id: 'degreecycle',
    fileName: 'DegreeCycle-Technologies.pdf',
    modified: 'Mar 2026',
    size: '248 KB',
    project: 'DegreeCycle Technologies',
    location: 'Vienna, VA',
    role: 'Co-founder and Software Engineer',
    period: 'Jun 2024 - Present',
    details: [
      'Built and deployed a production-ready full-stack platform using Python (Django), React, PostgreSQL, and AWS, owning system architecture, APIs, database design, and cloud deployment.',
      'Implemented graduation-planning and academic workflow logic based on course prerequisites, term availability, and credit constraints, supporting both student and advisor experiences.',
      'Integrated AI-assisted features to improve planning clarity, recommendation quality, and advisor/student decision support.',
    ],
  },
  {
    id: 'griotbot',
    fileName: 'Griotbot-Consulting.pdf',
    modified: 'Mar 2026',
    size: '192 KB',
    project: 'Griotbot',
    location: 'Vienna, VA',
    role: 'Project Consultant',
    period: 'Consulting Engagement',
    details: [
      'Provided strategic and technical guidance during planning and early development phases of the Griotbot project.',
      'Advised on workflow structure, feature scope, and a practical SDLC approach to keep delivery focused.',
      'Supported the team with development, deployment, documentation, and product decisions to keep execution organized.',
    ],
  },
]

function PdfIcon() {
  return (
    <div className="relative h-16 w-12 rounded-md bg-gradient-to-b from-rose-400 to-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_16px_-10px_rgba(2,6,23,0.95)]">
      <div className="absolute right-0 top-0 h-4 w-4 rounded-bl-md bg-red-300/80" />
      <span className="absolute inset-x-0 bottom-2 text-center text-[10px] font-bold tracking-[0.12em] text-white">
        PDF
      </span>
    </div>
  )
}

function ProjectsWindow({ onOpenPreview }) {
  const [activeFileId, setActiveFileId] = useState(projectFiles[0].id)

  return (
    <div className="h-full overflow-y-auto bg-[#171d23] px-5 py-4 text-slate-100">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <p className="text-2xl font-semibold tracking-tight text-slate-200">Projects</p>
        <p className="text-sm text-slate-400">Projects</p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-7 pt-5 sm:grid-cols-3 lg:grid-cols-4">
        {projectFiles.map((file) => (
          <button
            key={file.id}
            type="button"
            onClick={() => {
              setActiveFileId(file.id)
              onOpenPreview?.(file)
            }}
            className={[
              'group flex flex-col items-center gap-3 rounded-xl p-2 text-center transition',
              activeFileId === file.id ? 'bg-indigo-500/20 ring-1 ring-indigo-300/35' : 'hover:bg-white/5',
            ].join(' ')}
          >
            <PdfIcon />
            <div className="space-y-0.5">
              <p className="line-clamp-2 text-base font-medium leading-tight text-slate-100">{file.project}</p>
              <p className="text-xs text-slate-400">{file.fileName}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProjectsWindow
