import { experienceFiles } from '../data/experience'
import { projectFiles } from '../data/projects'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

const recipientEmail = 'ermiyas@ermi.ermi'
const navItems = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

function MobileCard({ title, subtitle, children }) {
  return (
    <section className="rounded-2xl border border-white/15 bg-slate-900/75 p-4 shadow-[0_24px_50px_-34px_rgba(2,6,23,0.95)] backdrop-blur-md">
      <div className="mb-3 border-b border-white/10 pb-2">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{subtitle}</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-100">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function MobileShell({ title, subtitle, children }) {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/95 px-4 py-3 backdrop-blur-xl">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
        <h1 className="text-lg font-semibold text-slate-100">Ermiyas Kifle</h1>
      </header>

      <main className="px-3 py-4 pb-24">
        <MobileCard title={title} subtitle={subtitle}>
          {children}
        </MobileCard>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 px-2 py-2 backdrop-blur-xl">
        <div className="mx-auto grid max-w-xl grid-cols-5 gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-1 py-2 text-center text-[0.64rem] font-medium transition',
                  isActive ? 'bg-indigo-500/35 text-indigo-100' : 'text-slate-400',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

function MobileAboutPage() {
  return (
    <MobileShell title="About me" subtitle="Profile">
      <div className="space-y-3 text-sm leading-7 text-slate-300">
        <p>Welcome to my portfolio. This mobile version gives you quick access to my background and work.</p>
        <p>
          Use the navigation bar to explore key sections: Projects, Experience, Skills, and Contact.
        </p>
        <p>
          I enjoy building thoughtful products that make complex problems easier to understand and solve.
          My focus is on creating tools that are useful, simple to use, and reliable in the real world.
        </p>
        <a
          href="https://www.linkedin.com/in/ermi-kifle-69443a195/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg border border-sky-300/35 bg-sky-500/25 px-3 py-1.5 text-xs font-medium text-sky-100 transition hover:bg-sky-500/40"
        >
          View LinkedIn Profile
        </a>
      </div>
    </MobileShell>
  )
}

function MobileProjectsPage() {
  return (
    <MobileShell title="Projects" subtitle="Work">
      <div className="space-y-3">
        {projectFiles.map((file) => (
          <details key={file.id} className="group rounded-xl border border-white/10 bg-white/5 p-3">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
              <span>
                <h3 className="text-sm font-semibold text-slate-100">{file.project}</h3>
                <p className="mt-1 text-xs text-slate-400">
                  {file.role} · {file.location}
                </p>
                <p className="mt-1 text-xs text-slate-500">{file.period}</p>
              </span>
              <span className="mt-0.5 text-xs text-indigo-200/90 transition group-open:rotate-180">v</span>
            </summary>

            <ul className="mt-3 space-y-1 border-t border-white/10 pt-3 text-xs leading-5 text-slate-300">
              {file.details.map((detail) => (
                <li key={detail}>- {detail}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </MobileShell>
  )
}

function MobileExperiencePage() {
  return (
    <MobileShell title="Experience" subtitle="Career">
      <div className="space-y-3">
        {experienceFiles.map((file) => (
          <details key={file.id} className="group rounded-xl border border-white/10 bg-white/5 p-3">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
              <span>
                <h3 className="text-sm font-semibold text-slate-100">{file.project}</h3>
                <p className="mt-1 text-xs text-slate-400">
                  {file.role} · {file.location}
                </p>
                <p className="mt-1 text-xs text-slate-500">{file.period}</p>
              </span>
              <span className="mt-0.5 text-xs text-amber-200/90 transition group-open:rotate-180">v</span>
            </summary>

            <ul className="mt-3 space-y-1 border-t border-white/10 pt-3 text-xs leading-5 text-slate-300">
              {file.details.map((detail) => (
                <li key={detail}>- {detail}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </MobileShell>
  )
}

function MobileSkillsPage() {
  return (
    <MobileShell title="Skills" subtitle="Tech Stack">
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
        {[
          'Python',
          'Java',
          'C++',
          'JavaScript',
          'HTML5 / CSS',
          'Django',
          'PostgreSQL',
          'MySQL',
          'Firebase',
          'AWS EC2',
          'Git',
          'Agile / Scrum',
        ].map((skill) => (
          <span key={skill} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5">
            {skill}
          </span>
        ))}
      </div>
    </MobileShell>
  )
}

function MobileContactPage() {
  return (
    <MobileShell title="Contact" subtitle="Get in Touch">
      <div className="space-y-3 text-sm text-slate-300">
        <p>Want to collaborate or say hello? Send me an email.</p>
        <a
          href={`mailto:${recipientEmail}?subject=${encodeURIComponent('Hello Ermiyas')}`}
          className="inline-flex rounded-lg border border-pink-300/35 bg-pink-500/30 px-4 py-2 text-sm font-medium text-pink-100 transition hover:bg-pink-500/45"
        >
          Email Me
        </a>
        <p className="text-xs text-slate-500">{recipientEmail}</p>
      </div>
    </MobileShell>
  )
}

function MobileLayout() {
  return (
    <div className="md:hidden">
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<MobileAboutPage />} />
        <Route path="/projects" element={<MobileProjectsPage />} />
        <Route path="/experience" element={<MobileExperiencePage />} />
        <Route path="/skills" element={<MobileSkillsPage />} />
        <Route path="/contact" element={<MobileContactPage />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </div>
  )
}

export default MobileLayout
