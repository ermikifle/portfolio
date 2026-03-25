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

  const status = useMemo(() => ['WIFI', 'BAT'], [])

  return (
    <MotionHeader
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto mt-4 flex h-12 w-[min(98%,96rem)] items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 shadow-[0_16px_36px_-24px_rgba(2,6,23,0.95)] backdrop-blur-2xl"
    >
      <div className="flex items-center gap-4 text-sm text-slate-200">
        <span className="font-semibold tracking-tight text-slate-100">ErmiOS</span>

        <div className="relative hidden items-center gap-1 text-slate-300 md:flex">
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
                  className="rounded-md px-2 py-1 transition hover:bg-white/15 hover:text-white"
                >
                  {item}
                </button>

                {openMenu === item && actions.length > 0 && (
                  <div
                    className="absolute left-0 top-9 z-50 min-w-44 rounded-xl border border-white/20 bg-slate-900/90 p-1 shadow-2xl backdrop-blur-xl"
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
                        className="block w-full rounded-lg px-3 py-2 text-left text-xs text-slate-200 transition hover:bg-white/10"
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

      <p className="hidden text-xs uppercase tracking-[0.18em] text-slate-300 sm:block">{activeTitle}</p>

      <div className="flex items-center gap-2 text-xs text-slate-200">
        {status.map((icon) => (
          <span key={icon} className="rounded-md bg-white/15 px-1.5 py-0.5 text-[0.6rem] tracking-wide">
            {icon}
          </span>
        ))}
        <span className="ml-1 text-sm text-slate-200">{time}</span>
      </div>
    </MotionHeader>
  )
}

export default TopBar
