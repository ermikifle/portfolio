import { motion } from 'framer-motion'

const MotionButton = motion.button

function DesktopGlyph({ type }) {
  const baseProps = {
    className: 'h-7 w-7',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    viewBox: '0 0 24 24',
  }

  if (type === 'home') {
    return (
      <svg {...baseProps}>
        <path d="M3.5 10.5 12 3.5l8.5 7v9.5a1 1 0 0 1-1 1H15v-5h-6v5H4.5a1 1 0 0 1-1-1z" />
      </svg>
    )
  }

  if (type === 'folder') {
    return (
      <svg {...baseProps}>
        <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5z" />
      </svg>
    )
  }

  if (type === 'briefcase') {
    return (
      <svg {...baseProps}>
        <rect x="3.5" y="7.5" width="17" height="12" rx="2.5" />
        <path d="M8.5 7.5V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v1.5M3.5 12h17" />
      </svg>
    )
  }

  if (type === 'spark') {
    return (
      <svg {...baseProps}>
        <path d="M13 2 4.5 13.5H12L11 22l8.5-11.5H12z" />
      </svg>
    )
  }

  if (type === 'terminal') {
    return (
      <svg {...baseProps}>
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path d="m8 10 2 2-2 2m4 0h4" />
      </svg>
    )
  }

  if (type === 'mail') {
    return (
      <svg {...baseProps}>
        <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
        <path d="m4.5 8 7.5 5 7.5-5" />
      </svg>
    )
  }

  if (type === 'blog') {
    return (
      <svg {...baseProps}>
        <path d="M4 4h16v2H4zM4 9h10v2H4zM4 14h12v2H4zM4 19h8v2H4z" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  return (
    <svg {...baseProps}>
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M8 9h8M8 13h8" />
    </svg>
  )
}

function DesktopIcons({ openWindow }) {
  const items = [
    { id: 'home', label: 'About', type: 'home' },
    { id: 'projects', label: 'Projects', type: 'folder' },
    { id: 'experience', label: 'Experience', type: 'briefcase' },
    { id: 'blog', label: 'Blog', type: 'blog' },
    { id: 'skills', label: 'Skills', type: 'spark' },
    { id: 'terminal', label: 'Terminal', type: 'terminal' },
    { id: 'contact', label: 'Contact', type: 'mail' },
  ]

  return (
    <aside className="absolute right-4 top-8 z-10 hidden w-24 flex-col items-center gap-3 md:flex">
      {items.map((item, index) => (
        <MotionButton
          key={item.id}
          type="button"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.08 * index }}
          onClick={() => openWindow(item.id)}
          className="group flex w-full flex-col items-center rounded-xl p-1.5 transition hover:bg-white/10"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white shadow-[0_8px_20px_-10px_rgba(2,6,23,0.9)] backdrop-blur-lg">
            <DesktopGlyph type={item.type} />
          </span>
          <span className="mt-1 text-center text-[0.68rem] text-white/95 group-hover:text-white">{item.label}</span>
        </MotionButton>
      ))}
    </aside>
  )
}

export default DesktopIcons
