import { useState } from 'react'
import { experienceFiles } from '../data/experience'

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

function ExperienceWindow({ onOpenPreview }) {
  const [activeFileId, setActiveFileId] = useState(experienceFiles[0].id)

  return (
    <div className="h-full overflow-y-auto bg-[#171d23] px-5 py-4 text-slate-100">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <p className="text-2xl font-semibold tracking-tight text-slate-200">Experience</p>
        <p className="text-sm text-slate-400">Experience</p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-7 pt-5 sm:grid-cols-3 lg:grid-cols-4">
        {experienceFiles.map((file) => (
          <button
            key={file.id}
            type="button"
            onClick={() => {
              setActiveFileId(file.id)
              onOpenPreview?.(file)
            }}
            className={[
              'group flex flex-col items-center gap-3 rounded-xl p-2 text-center transition',
              activeFileId === file.id ? 'bg-amber-500/20 ring-1 ring-amber-300/35' : 'hover:bg-white/5',
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

export default ExperienceWindow
