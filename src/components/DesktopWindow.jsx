import { motion, useDragControls } from 'framer-motion'

const MotionSection = motion.section

function DesktopWindow({
  title,
  children,
  onClose,
  onMinimize,
  onFocus,
  className = '',
  active = false,
  theme = 'default',
  style,
  dragConstraints,
}) {
  const dragControls = useDragControls()
  const isDocumentTheme = theme === 'document'

  return (
    <MotionSection
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      drag
      dragConstraints={dragConstraints}
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onMouseDown={onFocus}
      className={[
        'absolute min-h-[15rem] min-w-[18rem] resize overflow-auto rounded-3xl border shadow-[0_28px_80px_-42px_rgba(15,23,42,0.95)]',
        isDocumentTheme ? 'bg-[#d7dbe1]' : 'bg-slate-950/70 backdrop-blur-xl',
        active ? 'border-indigo-300/30' : 'border-white/15',
        className,
      ].join(' ')}
      style={style}
    >
      <div
        className={[
          'flex h-11 cursor-grab items-center justify-between px-4 active:cursor-grabbing',
          isDocumentTheme ? 'border-b border-slate-300/90 bg-slate-100' : 'border-b border-white/10 bg-white/5',
        ].join(' ')}
        onPointerDown={(event) => dragControls.start(event)}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${title}`}
            className="h-2.5 w-2.5 rounded-full bg-red-400/90 transition-opacity hover:opacity-80"
          />
          <button
            type="button"
            onClick={onMinimize}
            aria-label={`Minimize ${title}`}
            className="h-2.5 w-2.5 rounded-full bg-amber-300/85 transition-opacity hover:opacity-80"
          />
          <button
            type="button"
            aria-label={`Maximize ${title}`}
            className="h-2.5 w-2.5 cursor-default rounded-full bg-emerald-400/85 opacity-90"
          />
        </div>
        <span
          className={[
            'text-xs uppercase tracking-[0.18em]',
            isDocumentTheme ? 'text-slate-600' : 'text-slate-400',
          ].join(' ')}
        >
          {title}
        </span>
        <span className="w-8" aria-hidden="true" />
      </div>

      <div className="h-[calc(100%-2.75rem)]">{children}</div>
    </MotionSection>
  )
}

export default DesktopWindow
