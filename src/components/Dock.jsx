import { motion } from 'framer-motion'

const MotionNav = motion.nav
const MotionButton = motion.button

function AppGlyph({ type }) {
  const baseProps = {
    className: 'h-4.5 w-4.5',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    viewBox: '0 0 24 24',
  }

  if (type === 'home') {
    return (
      <svg {...baseProps}>
        <path d="M3.5 10.5 12 3.5l8.5 7v9a1 1 0 0 1-1 1h-5.5V13h-4v7.5H4.5a1 1 0 0 1-1-1v-9Z" />
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

  if (type === 'briefcase') {
    return (
      <svg {...baseProps}>
        <rect x="3.5" y="7.5" width="17" height="12" rx="2.5" />
        <path d="M8.5 7.5V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v1.5M3.5 12h17" />
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

  if (type === 'mail') {
    return (
      <svg {...baseProps}>
        <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
        <path d="m4.5 8 7.5 5 7.5-5" />
      </svg>
    )
  }

  if (type === 'spark') {
    return (
      <svg {...baseProps}>
        <path d="m12 4 1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7z" />
      </svg>
    )
  }

  return (
    <svg {...baseProps}>
      <circle cx="12" cy="8.5" r="3.2" />
      <path d="M5 19c0-3.5 2.8-5 7-5s7 1.5 7 5" />
    </svg>
  )
}

function Dock({ apps, openWindow, focusedWindowId }) {
  return (
    <MotionNav
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.3 }}
      className="fixed inset-x-0 bottom-6 z-40 mx-auto flex w-fit items-center gap-3 rounded-3xl border border-white/20 bg-slate-900/45 px-4 py-3 shadow-[0_24px_55px_-32px_rgba(2,6,23,0.95)] backdrop-blur-2xl"
      aria-label="Dock"
    >
      {apps.map((app) => (
        <MotionButton
          key={app.id}
          type="button"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => openWindow(app.id)}
          className={[
            'group relative flex h-12 w-12 items-center justify-center rounded-2xl border transition duration-200',
            focusedWindowId === app.id
              ? 'border-white/30 bg-white/25'
              : 'border-white/10 bg-white/10 hover:bg-white/20',
          ].join(' ')}
          title={`Open ${app.title}`}
          aria-label={`Open ${app.title}`}
        >
          <span
            className={[
              'flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_7px_14px_-8px_rgba(2,6,23,0.9)] transition group-hover:scale-105',
              app.tint,
            ].join(' ')}
          >
            <AppGlyph type={app.icon} />
          </span>
          {app.isOpen && (
            <span className="absolute -bottom-1.5 h-1 w-4 rounded-full bg-white/90" aria-hidden="true" />
          )}
        </MotionButton>
      ))}
    </MotionNav>
  )
}

export default Dock
