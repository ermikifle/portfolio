import { motion, useDragControls } from 'framer-motion'

const MotionSection = motion.section

function DesktopWindow({
  title,
  children,
  onClose,
  onFocus,
  className = '',
  active = false,
  style,
  dragConstraints,
}) {
  const dragControls = useDragControls()

  return (
    <MotionSection
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragConstraints={dragConstraints}
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onMouseDown={onFocus}
      className={[
        'absolute min-h-[15rem] min-w-[18rem] resize overflow-auto rounded-3xl border bg-slate-950/70 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.95)] backdrop-blur-xl',
        active ? 'border-indigo-300/30' : 'border-white/15',
        className,
      ].join(' ')}
      style={style}
    >
      <div
        className="flex h-11 cursor-grab items-center justify-between border-b border-white/10 bg-white/5 px-4 active:cursor-grabbing"
        onPointerDown={(event) => dragControls.start(event)}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${title}`}
            className="h-2.5 w-2.5 rounded-full bg-red-400/90 transition-opacity hover:opacity-80"
          />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/85" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/85" />
        </div>
        <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{title}</span>
        <span className="w-8" aria-hidden="true" />
      </div>

      <div className="h-[calc(100%-2.75rem)]">{children}</div>
    </MotionSection>
  )
}

export default DesktopWindow
