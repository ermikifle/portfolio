import { useState } from 'react'

export const experienceFiles = [
  {
    id: 'apple',
    fileName: 'Apple-Tysons-Corner.pdf',
    modified: 'Mar 2026',
    size: '226 KB',
    project: 'Apple Tysons Corner',
    location: 'Vienna, VA',
    role: 'Technical Specialist',
    period: 'Oct 2024 - Present',
    details: [
      'Diagnosed and resolved complex software and hardware issues across iOS, macOS, and Apple ecosystems.',
      'Delivered expert technical support and personalized product setup for Apple devices, restoring functionality and ensuring a seamless user experience in high-pressure customer-facing environments.',
      'Repaired and strengthened customer relationships by resolving complex issues with empathy, clear communication, and proactive follow-up.',
    ],
  },
  {
    id: 'msu',
    fileName: 'MSU-Global-IDEAS-Database-Manager.pdf',
    modified: 'Mar 2026',
    size: '214 KB',
    project: 'Michigan State University Global IDEAS',
    location: 'East Lansing, MI',
    role: 'Database Manager',
    period: 'May 2022 - Jan 2024',
    details: [
      'Managed a database server of over 1,600 faculty members and updated the funding resource database, ensuring faculty had access to the latest research resources and resulting in over 40% more up-to-date information.',
      'Leveraged Python and MySQL to automate data entry workflows, improving institute efficiency by 30%, and built web scraping tools to extract USAID data for university research projects.',
    ],
  },
  {
    id: 'autoowners',
    fileName: 'Auto-Owners-Allied-Universal.pdf',
    modified: 'Mar 2026',
    size: '207 KB',
    project: 'Auto Owners Insurance HQ / Allied Universal',
    location: 'Lansing, MI',
    role: 'Corporate Security Specialist',
    period: 'Jan 2024 - Aug 2024',
    details: [
      'Controlled emergency technologies through regular alarm system audits and security assessments, resolving vulnerabilities.',
      'Applied advanced security technologies and systems to monitor and protect 236,500 square feet of company property.',
      'Achieved 100% loss prevention with no major security tool failures, resulting in high client satisfaction.',
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
