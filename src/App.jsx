import { useMemo, useRef, useState } from 'react'
import TopBar from './components/TopBar'
import HeroWindow from './components/HeroWindow'
import FloatingWindow from './components/FloatingWindow'
import Dock from './components/Dock'
import DesktopWindow from './components/DesktopWindow'
import DesktopIcons from './components/DesktopIcons'
import wallpaper from './assets/desktop-wallpaper.png'

const windowConfig = {
  home: {
    title: 'home',
    icon: 'home',
    tint: 'from-sky-300 to-blue-500',
    className: 'left-1/2 top-[50%] h-[30rem] w-[min(92%,60rem)] -translate-x-1/2 -translate-y-1/2',
  },
  projects: {
    title: 'projects',
    icon: 'folder',
    tint: 'from-indigo-300 to-violet-500',
    className: 'left-[6%] top-[18%] h-72 w-[min(25rem,90vw)]',
  },
  terminal: {
    title: 'terminal',
    icon: 'terminal',
    tint: 'from-emerald-300 to-teal-500',
    className: 'right-[6%] top-[16%] h-72 w-[min(26rem,90vw)]',
  },
  experience: {
    title: 'experience',
    icon: 'briefcase',
    tint: 'from-amber-300 to-orange-500',
    className: 'right-[16%] top-[54%] h-64 w-[min(25rem,90vw)]',
  },
  skills: {
    title: 'skills',
    icon: 'spark',
    tint: 'from-cyan-300 to-sky-500',
    className: 'left-[14%] top-[56%] h-56 w-[min(22rem,88vw)]',
  },
  contact: {
    title: 'contact',
    icon: 'mail',
    tint: 'from-pink-300 to-rose-500',
    className: 'right-[2%] top-[34%] h-56 w-[min(22rem,88vw)]',
  },
}

const initialOpenState = {
  home: true,
  projects: false,
  terminal: false,
  experience: false,
  skills: false,
  contact: false,
}

const initialOrder = ['projects', 'terminal', 'experience', 'skills', 'contact', 'home']

function App() {
  const desktopRef = useRef(null)
  const [isOpen, setIsOpen] = useState(initialOpenState)
  const [zOrder, setZOrder] = useState(initialOrder)

  const bringToFront = (id) => {
    setZOrder((prev) => [...prev.filter((item) => item !== id), id])
  }

  const openWindow = (id) => {
    setIsOpen((prev) => ({ ...prev, [id]: true }))
    bringToFront(id)
  }

  const closeWindow = (id) => {
    setIsOpen((prev) => ({ ...prev, [id]: false }))
  }

  const closeAll = () => {
    setIsOpen(initialOpenState)
    bringToFront('home')
  }

  const openAll = () => {
    setIsOpen(
      Object.keys(windowConfig).reduce((acc, key) => {
        acc[key] = true
        return acc
      }, {}),
    )
  }

  const focusedWindowId = zOrder[zOrder.length - 1]
  const activeTitle = isOpen[focusedWindowId] ? `/${windowConfig[focusedWindowId].title}` : 'Desktop'

  const dockApps = useMemo(
    () =>
      Object.entries(windowConfig).map(([id, config]) => ({
        id,
        title: config.title,
        icon: config.icon,
        tint: config.tint,
        isOpen: isOpen[id],
      })),
    [isOpen],
  )

  const menuActions = useMemo(
    () => ({
      File: [
        { id: 'open-all', label: 'Open All Windows' },
        { id: 'close-all', label: 'Close Extra Windows' },
      ],
      Edit: [{ id: 'focus-home', label: 'Focus Home' }],
      View: [
        { id: 'open-terminal', label: 'Open Terminal' },
        { id: 'open-projects', label: 'Open Projects' },
      ],
      Window: [
        { id: 'toggle-experience', label: isOpen.experience ? 'Close Experience' : 'Open Experience' },
        { id: 'toggle-skills', label: isOpen.skills ? 'Close Skills' : 'Open Skills' },
        { id: 'toggle-contact', label: isOpen.contact ? 'Close Contact' : 'Open Contact' },
      ],
      Help: [{ id: 'open-contact', label: 'Contact Ermiyas' }],
    }),
    [isOpen.experience, isOpen.skills, isOpen.contact],
  )

  const handleMenuAction = (actionId) => {
    if (actionId === 'open-all') openAll()
    if (actionId === 'close-all') closeAll()
    if (actionId === 'focus-home') openWindow('home')
    if (actionId === 'open-terminal') openWindow('terminal')
    if (actionId === 'open-projects') openWindow('projects')
    if (actionId === 'open-contact') openWindow('contact')
    if (actionId === 'toggle-experience')
      isOpen.experience ? closeWindow('experience') : openWindow('experience')
    if (actionId === 'toggle-skills') isOpen.skills ? closeWindow('skills') : openWindow('skills')
    if (actionId === 'toggle-contact') isOpen.contact ? closeWindow('contact') : openWindow('contact')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <img
        src={wallpaper}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover blur-[2px] brightness-[0.82] saturate-90"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.45)_0%,rgba(2,6,23,0.62)_55%,rgba(2,6,23,0.7)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,rgba(134,239,172,0.17),transparent_35%),radial-gradient(circle_at_88%_22%,rgba(125,211,252,0.18),transparent_34%)]" />

      <div className="relative z-10 flex min-h-screen flex-col px-3 pb-28 sm:px-4">
        <TopBar activeTitle={activeTitle} menuActions={menuActions} onMenuAction={handleMenuAction} />

        <main ref={desktopRef} className="relative flex w-full flex-1 items-center justify-center py-8 sm:py-12">
          <DesktopIcons openWindow={openWindow} />

          {!isOpen.projects && (
            <FloatingWindow
              title="/projects"
              delay={0.2}
              className="left-[4%] top-[14%] h-44 w-56 rotate-[-7deg] opacity-35"
            />
          )}
          {!isOpen.terminal && (
            <FloatingWindow
              title="/terminal"
              delay={0.28}
              className="right-[6%] top-[18%] h-52 w-64 rotate-[6deg] opacity-35"
            />
          )}
          {!isOpen.experience && (
            <FloatingWindow
              title="/experience"
              delay={0.36}
              className="bottom-[8%] right-[20%] h-40 w-52 rotate-[-4deg] opacity-30"
            />
          )}

          {zOrder.map((id, index) => {
            if (!isOpen[id]) return null

            return (
              <DesktopWindow
                key={id}
                title={windowConfig[id].title}
                className={[
                  windowConfig[id].className,
                  id !== 'home' ? 'hidden md:block' : '',
                  id === 'home' ? 'min-h-[24rem]' : '',
                ].join(' ')}
                style={{ zIndex: 20 + index }}
                active={id === focusedWindowId}
                onClose={() => closeWindow(id)}
                onFocus={() => bringToFront(id)}
                dragConstraints={desktopRef}
              >
                {id === 'home' && <HeroWindow />}

                {id === 'projects' && (
                  <div className="space-y-3 p-5 text-sm text-slate-300">
                    <p className="text-slate-100">Projects</p>
                    <p>ErmiOS Portfolio, SaaS dashboard, and startup MVPs.</p>
                    <p className="text-slate-400">Focused on clean UX, performance, and speed to ship.</p>
                  </div>
                )}

                {id === 'terminal' && (
                  <div className="h-full bg-slate-950/95 p-5 font-mono text-xs leading-6 text-emerald-300">
                    <p>$ whoami</p>
                    <p>ermiyas_kifle</p>
                    <p className="pt-2">$ stack --primary</p>
                    <p>react, node, typescript, product strategy</p>
                    <p className="pt-2">$ open projects</p>
                    <p>3 featured products loaded</p>
                  </div>
                )}

                {id === 'experience' && (
                  <div className="space-y-3 p-5 text-sm text-slate-300">
                    <p className="text-slate-100">Experience</p>
                    <p>Building startups and thoughtful digital products end-to-end.</p>
                    <p className="text-slate-400">From prototype to production quality.</p>
                  </div>
                )}

                {id === 'skills' && (
                  <div className="space-y-3 p-5 text-sm text-slate-300">
                    <p className="text-slate-100">Skills</p>
                    <p>Frontend architecture, backend APIs, product design, and growth loops.</p>
                    <p className="text-slate-400">React, TypeScript, Node.js, PostgreSQL, Framer Motion.</p>
                  </div>
                )}

                {id === 'contact' && (
                  <div className="space-y-3 p-5 text-sm text-slate-300">
                    <p className="text-slate-100">Contact</p>
                    <p>Email: ermiyas@example.com</p>
                    <p>LinkedIn: linkedin.com/in/ermiyas-kifle</p>
                    <p className="text-slate-400">Open to product-focused engineering roles and startup work.</p>
                  </div>
                )}
              </DesktopWindow>
            )
          })}
        </main>

        <Dock apps={dockApps} openWindow={openWindow} focusedWindowId={focusedWindowId} />
      </div>
    </div>
  )
}

export default App
