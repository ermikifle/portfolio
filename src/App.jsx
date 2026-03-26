import { useMemo, useRef, useState } from 'react'
import TopBar from './components/TopBar'
import HeroWindow from './components/HeroWindow'
import ProjectsWindow, { projectFiles } from './components/ProjectsWindow'
import ExperienceWindow, { experienceFiles } from './components/ExperienceWindow'
import ProjectPreviewWindow from './components/ProjectPreviewWindow'
import SkillsWindow from './components/SkillsWindow'
import ContactWindow from './components/ContactWindow'
import WelcomeWindow from './components/WelcomeWindow'
import TerminalWindow from './components/TerminalWindow'
import DesktopWindow from './components/DesktopWindow'
import DesktopIcons from './components/DesktopIcons'
import natureWallpaper from './assets/nature-wallpaper.svg'

const previewWindowIds = projectFiles.map((file) => `projectPreview-${file.id}`)
const experiencePreviewWindowIds = experienceFiles.map((file) => `experiencePreview-${file.id}`)
const coreWindowIds = ['home', 'welcome', 'projects', 'terminal', 'experience', 'skills', 'contact']

const windowConfig = {
  home: {
    title: 'home',
    icon: 'home',
    tint: 'from-sky-300 to-blue-500',
    className:
      'left-1/2 top-[50%] h-[36rem] w-[min(92%,60rem)] min-h-[30rem] max-h-[calc(100%-7rem)] min-w-[20rem] max-w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2',
  },
  welcome: {
    title: 'welcome',
    icon: 'home',
    tint: 'from-violet-300 to-fuchsia-500',
    className: 'left-[8%] top-[16%] h-[17rem] w-[min(30rem,90vw)] min-w-[22rem]',
  },
  projects: {
    title: 'projects',
    icon: 'folder',
    tint: 'from-indigo-300 to-violet-500',
    className: 'left-[5%] top-[12%] h-[34rem] w-[min(48rem,94vw)] min-w-[36rem]',
  },
  terminal: {
    title: 'terminal',
    icon: 'terminal',
    tint: 'from-emerald-300 to-teal-500',
    className: 'right-[5%] top-[12%] h-[34rem] w-[min(44rem,92vw)] min-w-[32rem]',
  },
  experience: {
    title: 'experience',
    icon: 'briefcase',
    tint: 'from-amber-300 to-orange-500',
    className: 'right-[5%] top-[10%] h-[34rem] w-[min(44rem,92vw)] min-w-[34rem]',
  },
  skills: {
    title: 'skills',
    icon: 'spark',
    tint: 'from-cyan-300 to-sky-500',
    className: 'left-[12%] top-[14%] h-[32rem] w-[min(42rem,92vw)] min-w-[30rem]',
  },
  contact: {
    title: 'contact',
    icon: 'mail',
    tint: 'from-pink-300 to-rose-500',
    className: 'right-[4%] top-[10%] h-[34rem] w-[min(44rem,92vw)] min-w-[32rem]',
  },
}

const initialOpenState = {
  home: true,
  welcome: true,
  projects: false,
  terminal: false,
  experience: false,
  skills: false,
  contact: false,
  ...Object.fromEntries(previewWindowIds.map((id) => [id, false])),
  ...Object.fromEntries(experiencePreviewWindowIds.map((id) => [id, false])),
}

const initialMinimizedState = {
  home: false,
  welcome: false,
  projects: false,
  terminal: false,
  experience: false,
  skills: false,
  contact: false,
  ...Object.fromEntries(previewWindowIds.map((id) => [id, false])),
  ...Object.fromEntries(experiencePreviewWindowIds.map((id) => [id, false])),
}

const initialOrder = [
  'projects',
  ...previewWindowIds,
  'terminal',
  'experience',
  ...experiencePreviewWindowIds,
  'skills',
  'contact',
  'home',
  'welcome',
]

function App() {
  const desktopRef = useRef(null)
  const [isOpen, setIsOpen] = useState(initialOpenState)
  const [isMinimized, setIsMinimized] = useState(initialMinimizedState)
  const [zOrder, setZOrder] = useState(initialOrder)
  const bringToFront = (id) => {
    setZOrder((prev) => [...prev.filter((item) => item !== id), id])
  }

  const openWindow = (id) => {
    setIsOpen((prev) => ({ ...prev, [id]: true }))
    setIsMinimized((prev) => ({ ...prev, [id]: false }))
    bringToFront(id)
  }

  const closeWindow = (id) => {
    setIsOpen((prev) => ({ ...prev, [id]: false }))
    setIsMinimized((prev) => ({ ...prev, [id]: false }))
  }

  const toggleMinimize = (id) => {
    setIsMinimized((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const closeAll = () => {
    setIsOpen(initialOpenState)
    setIsMinimized(initialMinimizedState)
    bringToFront('welcome')
  }

  const openAll = () => {
    setIsOpen(
      Object.keys(initialOpenState).reduce((acc, key) => {
        acc[key] = coreWindowIds.includes(key)
        return acc
      }, {}),
    )
    setIsMinimized(initialMinimizedState)
  }

  const focusedWindowId = zOrder[zOrder.length - 1]
  const getWindowMeta = (id) => {
    if (windowConfig[id]) return windowConfig[id]
    if (id.startsWith('projectPreview-')) {
      return {
        title: 'preview',
        icon: 'folder',
        tint: 'from-violet-300 to-fuchsia-500',
        className: 'left-[18%] top-[16%] h-[32rem] w-[min(44rem,90vw)] min-w-[30rem]',
      }
    }
    if (id.startsWith('experiencePreview-')) {
      return {
        title: 'preview',
        icon: 'briefcase',
        tint: 'from-amber-300 to-orange-500',
        className: 'left-[20%] top-[14%] h-[32rem] w-[min(44rem,90vw)] min-w-[30rem]',
      }
    }
    return null
  }

  const focusedMeta = getWindowMeta(focusedWindowId)
  const activeTitle =
    focusedMeta && isOpen[focusedWindowId] && !isMinimized[focusedWindowId]
      ? `/${focusedMeta.title}`
      : 'Desktop'

  const openProjectPreview = (file) => {
    const previewId = `projectPreview-${file.id}`
    setIsOpen((prev) => ({ ...prev, [previewId]: true }))
    setIsMinimized((prev) => ({ ...prev, [previewId]: false }))
    bringToFront(previewId)
  }

  const openExperiencePreview = (file) => {
    const previewId = `experiencePreview-${file.id}`
    setIsOpen((prev) => ({ ...prev, [previewId]: true }))
    setIsMinimized((prev) => ({ ...prev, [previewId]: false }))
    bringToFront(previewId)
  }

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
        src={natureWallpaper}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.14)_0%,rgba(2,6,23,0.28)_62%,rgba(2,6,23,0.4)_100%)]" />

      <div className="relative z-10 flex min-h-screen flex-col px-3 pb-28 sm:px-4">
        <TopBar activeTitle={activeTitle} menuActions={menuActions} onMenuAction={handleMenuAction} />

        <main ref={desktopRef} className="relative flex w-full flex-1 items-center justify-center py-8 sm:py-12">
          <DesktopIcons openWindow={openWindow} />

          {zOrder.map((id, index) => {
            if (!isOpen[id] || isMinimized[id]) return null
            const windowMeta = getWindowMeta(id)
            if (!windowMeta) return null
            const previewFile = id.startsWith('projectPreview-')
              ? projectFiles.find((file) => `projectPreview-${file.id}` === id)
              : null
            const experiencePreviewFile = id.startsWith('experiencePreview-')
              ? experienceFiles.find((file) => `experiencePreview-${file.id}` === id)
              : null

            return (
              <DesktopWindow
                key={id}
                title={previewFile ? previewFile.fileName : experiencePreviewFile ? experiencePreviewFile.fileName : windowMeta.title}
                className={[
                  windowMeta.className,
                  id !== 'home' ? 'hidden md:block' : '',
                ].join(' ')}
                style={{ zIndex: 20 + index }}
                active={id === focusedWindowId}
                theme={id === 'home' ? 'document' : 'default'}
                onClose={() => closeWindow(id)}
                onMinimize={() => toggleMinimize(id)}
                onFocus={() => bringToFront(id)}
                dragConstraints={desktopRef}
              >
                {id === 'home' && <HeroWindow />}

                {id === 'welcome' && <WelcomeWindow />}

                {id === 'projects' && (
                  <ProjectsWindow onOpenPreview={openProjectPreview} />
                )}

                {id.startsWith('projectPreview-') && previewFile && (
                  <ProjectPreviewWindow file={previewFile} />
                )}

                {id === 'terminal' && (
                  <TerminalWindow />
                )}

                {id === 'experience' && (
                  <ExperienceWindow onOpenPreview={openExperiencePreview} />
                )}

                {id.startsWith('experiencePreview-') && experiencePreviewFile && (
                  <ProjectPreviewWindow file={experiencePreviewFile} />
                )}

                {id === 'skills' && (
                  <SkillsWindow />
                )}

                {id === 'contact' && (
                  <ContactWindow />
                )}
              </DesktopWindow>
            )
          })}
        </main>

      </div>
    </div>
  )
}

export default App
