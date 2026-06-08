import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const menuItems = ['File', 'Edit', 'View', 'Window', 'Help']
const MotionHeader = motion.header

function TopBar({ activeTitle = 'Desktop', menuActions = {}, onMenuAction }) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
  )
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }))
    }, 30000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!openMenu) return undefined
    const close = () => setOpenMenu(null)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [openMenu])

  const statusIcons = useMemo(
    () => [
      {
        key: 'wifi',
        svg: (
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M5 12.5a9.5 9.5 0 0 1 14 0M1.5 8.5a15 15 0 0 1 21 0M8.5 16.5a5 5 0 0 1 7 0M12 20.5h.01" />
          </svg>
        ),
      },
      {
        key: 'battery',
        svg: (
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="1" y="7" width="18" height="10" rx="2" />
            <path d="M19 10.5v3" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="3" y="9" width="11" height="6" rx="1" fill="currentColor" stroke="none" />
          </svg>
        ),
      },
    ],
    [],
  )

  return (
    <MotionHeader
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex h-11 w-full items-center justify-between border-b border-black/25 bg-slate-900/95 px-4 backdrop-blur-xl"
    >
      {/* Left: brand + menu */}
      <div className="flex items-center gap-3 text-sm">
        {/* Logo mark */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-teal-600 text-[10px] font-bold text-white shadow-[0_0_8px_rgba(20,184,166,0.5)]">
            E
          </span>
          <span className="font-semibold tracking-tight text-slate-100 text-[13px]">ErmiOS</span>
        </div>

        <span className="text-slate-700 select-none">|</span>

        {/* Menu items */}
        <div className="relative flex items-center gap-0.5 text-[13px] text-slate-400">
          {menuItems.map((item) => {
            const actions = menuActions[item] || []
            return (
              <div key={item} className="relative">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    setOpenMenu((prev) => (prev === item ? null : item))
                  }}
                  className={[
                    'rounded-md px-2.5 py-1 transition text-[13px]',
                    openMenu === item
                      ? 'bg-white/15 text-white'
                      : 'hover:bg-white/10 hover:text-slate-200',
                  ].join(' ')}
                >
                  {item}
                </button>

                {openMenu === item && actions.length > 0 && (
                  <div
                    className="absolute left-0 top-8 z-50 min-w-48 rounded-xl border border-white/15 bg-slate-900/95 p-1 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {actions.map((action) => (
                      <button
                        key={action.id}
                        type="button"
                        onClick={() => {
                          onMenuAction?.(action.id)
                          setOpenMenu(null)
                        }}
                        className="block w-full rounded-lg px-3 py-2 text-left text-[12px] text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Center: active window breadcrumb */}
      <p className="absolute left-1/2 -translate-x-1/2 hidden text-[11px] tracking-[0.14em] text-slate-500 sm:block select-none">
        {activeTitle}
      </p>

      {/* Right: status + clock */}
      <div className="flex items-center gap-2 text-slate-400">
        {statusIcons.map(({ key, svg }) => (
          <span key={key} className="opacity-60">
            {svg}
          </span>
        ))}
        <span className="ml-1 text-[13px] font-medium text-slate-200 tabular-nums">{time}</span>
      </div>
    </MotionHeader>
  )
}

export default TopBar
