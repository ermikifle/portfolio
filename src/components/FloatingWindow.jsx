import { motion } from 'framer-motion'

const MotionArticle = motion.article

function FloatingWindow({ title, className = '', delay = 0 }) {
  return (
    <MotionArticle
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={[
        'pointer-events-none absolute hidden rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-slate-400 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.95)] backdrop-blur-sm md:block',
        className,
      ].join(' ')}
      aria-hidden="true"
    >
      <div className="mb-3 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
        <span>{title}</span>
        <span>~</span>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-4/5 rounded-full bg-white/10" />
        <div className="h-2 w-3/5 rounded-full bg-white/10" />
        <div className="h-2 w-2/3 rounded-full bg-white/10" />
      </div>
    </MotionArticle>
  )
}

export default FloatingWindow
