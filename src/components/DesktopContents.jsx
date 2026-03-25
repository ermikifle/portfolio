import { motion } from 'framer-motion'

const MotionButton = motion.button

const shortcuts = [
  { id: 'about', label: 'About', icon: 'AB', tint: 'from-violet-300 to-fuchsia-500' },
  { id: 'terminal', label: 'Terminal', icon: 'TM', tint: 'from-emerald-300 to-teal-500' },
  { id: 'experience', label: 'Experience', icon: 'XP', tint: 'from-amber-300 to-orange-500' },
]

function DesktopContents({ openWindow }) {
  return (
    <aside className="pointer-events-auto absolute left-2 top-4 z-10 hidden space-y-3 sm:block">
      {shortcuts.map((item, index) => (
        <MotionButton
          key={item.id}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
          onClick={() => openWindow(item.id)}
          className="flex w-24 flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-2 text-slate-200 shadow-[0_14px_24px_-18px_rgba(2,6,23,0.9)] backdrop-blur-md transition hover:bg-white/20"
          type="button"
        >
          <span
            className={[
              'flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-[0.62rem] font-bold tracking-[0.14em] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_8px_16px_-10px_rgba(2,6,23,0.9)]',
              item.tint,
            ].join(' ')}
          >
            {item.icon}
          </span>
          <span className="text-[0.72rem] text-slate-100">{item.label}</span>
        </MotionButton>
      ))}
    </aside>
  )
}

export default DesktopContents
