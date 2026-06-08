import { experienceFiles } from '../data/experience'
import { projectFiles } from '../data/projects'
import { linkedInPosts } from '../data/posts'
import { LinkedInIcon, PostCard } from './PostCard'
import { NavLink, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'

const LINKEDIN_URL = 'https://www.linkedin.com/in/ermi-kifle-69443a195/'
const recipientEmail = 'ermimesfin@yahoo.com'

const navItems = [
  { to: '/', label: 'About', icon: 'home', end: true },
  { to: '/projects', label: 'Projects', icon: 'folder' },
  { to: '/experience', label: 'Experience', icon: 'briefcase' },
  { to: '/blog', label: 'Blog', icon: 'blog' },
  { to: '/skills', label: 'Skills', icon: 'spark' },
  { to: '/contact', label: 'Contact', icon: 'mail' },
]

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML / CSS', 'Bash'] },
  { label: 'Frameworks', items: ['Django', 'React', 'Vite', 'NumPy'] },
  { label: 'Cloud & Infra', items: ['AWS (EC2, RDS, S3)', 'Docker', 'CI/CD', 'Linux / Unix'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { label: 'AI & ML', items: ['OpenAI API', 'Claude API', 'RAG Pipelines', 'Prompt Engineering'] },
  { label: 'Design & Tools', items: ['Figma', 'Adobe XD', 'Git / GitHub', 'REST APIs', 'Cursor'] },
]

function NavIcon({ type, className = 'h-5 w-5' }) {
  const props = { className, fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', viewBox: '0 0 24 24' }

  if (type === 'home') {
    return (
      <svg {...props}>
        <path d="M3.5 10.5 12 3.5l8.5 7v9.5a1 1 0 0 1-1 1H15v-5h-6v5H4.5a1 1 0 0 1-1-1z" />
      </svg>
    )
  }
  if (type === 'folder') {
    return (
      <svg {...props}>
        <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5z" />
      </svg>
    )
  }
  if (type === 'briefcase') {
    return (
      <svg {...props}>
        <rect x="3.5" y="7.5" width="17" height="12" rx="2.5" />
        <path d="M8.5 7.5V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v1.5M3.5 12h17" />
      </svg>
    )
  }
  if (type === 'blog') {
    return (
      <svg {...props}>
        <path d="M7 3.5h7l4 4v13H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path d="M14 3.5V8h4M8 13h8M8 17h5" />
      </svg>
    )
  }
  if (type === 'spark') {
    return (
      <svg {...props}>
        <path d="M13 2 4.5 13.5H12L11 22l8.5-11.5H12z" />
      </svg>
    )
  }
  if (type === 'mail') {
    return (
      <svg {...props}>
        <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
        <path d="m4.5 8 7.5 5 7.5-5" />
      </svg>
    )
  }
  return null
}

function PageHeader({ eyebrow, title, count }) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p>
        <h2 className="mt-0.5 text-xl font-semibold tracking-tight text-white">{title}</h2>
      </div>
      {count !== undefined && (
        <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
          {count}
        </span>
      )}
    </div>
  )
}

function MobileShellLayout() {
  const location = useLocation()
  const current =
    navItems.find((item) => {
      if (item.end) return location.pathname === '/' || location.pathname === '/about'
      return location.pathname === item.to
    }) ?? navItems[0]

  return (
    <div className="min-h-screen bg-[#008080]">
      <header className="sticky top-0 z-30 flex h-12 items-center justify-between border-b border-black/20 bg-slate-900/95 px-4 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-teal-600 text-[10px] font-bold text-white">
            E
          </span>
          <span className="text-sm font-semibold text-slate-100">ErmiOS</span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
          {current?.label ?? 'Portfolio'}
        </p>
      </header>

      <main className="px-3 py-4 pb-[5.5rem]">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-black/25 bg-slate-900/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl">
        <div className="mx-auto grid max-w-lg grid-cols-6 px-1 pt-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'flex flex-col items-center gap-0.5 rounded-lg px-0.5 py-2 transition',
                  isActive ? 'text-teal-300' : 'text-slate-500',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={[
                      'flex h-7 w-7 items-center justify-center rounded-lg transition',
                      isActive ? 'bg-teal-500/20 text-teal-300' : 'text-slate-500',
                    ].join(' ')}
                  >
                    <NavIcon type={item.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[0.58rem] font-medium leading-none">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}

function MobileAboutContent() {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/20 bg-white shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)]">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-5 py-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Vienna, VA</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">Ermiyas Kifle</h1>
        <p className="mt-0.5 text-sm font-medium text-slate-300">Engineer &amp; Designer</p>
      </div>

      <div className="space-y-5 px-5 py-5">
        <p className="text-[14px] leading-7 text-slate-700">
          Engineer and designer with 3+ years of experience building scalable, user-centered
          systems. I work across software development, systems architecture, and UX — focused on
          creating tools that simplify workflows and hold up in the real world.
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-3.5 py-2 text-xs font-medium text-sky-700"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            href={`mailto:${recipientEmail}?subject=Hello Ermiyas`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-600"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </article>
  )
}

function EntryCard({ file, accent = 'indigo', defaultOpen = false }) {
  const badge =
    accent === 'amber'
      ? 'border-amber-300/25 bg-amber-500/15 text-amber-200'
      : 'border-indigo-300/25 bg-indigo-500/15 text-indigo-200'
  const dot = accent === 'amber' ? 'bg-amber-400/70' : 'bg-indigo-400/70'
  const chevron = accent === 'amber' ? 'text-amber-300/60' : 'text-indigo-300/60'

  return (
    <details
      open={defaultOpen}
      className="group overflow-hidden rounded-xl border border-white/12 bg-slate-900/80 backdrop-blur-sm"
    >
      <summary className="flex cursor-pointer list-none items-start gap-3 p-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-slate-100">{file.project}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${badge}`}>
              {file.role}
            </span>
            <span className="text-[10px] text-slate-500">{file.period}</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-500">{file.location}</p>
          <p className="mt-2 text-[11px] leading-5 text-slate-400 line-clamp-2 group-open:hidden">
            {file.details[0]}
          </p>
        </div>
        <svg
          className={`mt-1 h-4 w-4 shrink-0 transition group-open:rotate-90 ${chevron}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </summary>

      <ul className="space-y-2 border-t border-white/8 px-4 pb-4 pt-3">
        {file.details.map((detail) => (
          <li key={detail} className="flex gap-2.5 text-xs leading-5 text-slate-300">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            {detail}
          </li>
        ))}
      </ul>
    </details>
  )
}

function MobileProjectsContent() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Projects" count={`${projectFiles.length} entries`} />
      <div className="space-y-2.5">
        {projectFiles.map((file, index) => (
          <EntryCard key={file.id} file={file} accent="indigo" defaultOpen={index === 0} />
        ))}
      </div>
    </>
  )
}

function MobileExperienceContent() {
  return (
    <>
      <PageHeader eyebrow="Career" title="Experience" count={`${experienceFiles.length} roles`} />
      <div className="space-y-2.5">
        {experienceFiles.map((file, index) => (
          <EntryCard key={file.id} file={file} accent="amber" defaultOpen={index === 0} />
        ))}
      </div>
    </>
  )
}

function MobileSkillsContent() {
  return (
    <>
      <PageHeader eyebrow="Tech Stack" title="Skills" />
      <div className="space-y-4">
        {skillGroups.map((group) => (
          <section key={group.label} className="rounded-xl border border-white/12 bg-slate-900/80 p-4 backdrop-blur-sm">
            <p className="mb-2.5 text-[10px] uppercase tracking-[0.18em] text-emerald-400/80">{group.label}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-300/15 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-100/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-white/12 bg-slate-900/80 p-4 backdrop-blur-sm">
          <p className="mb-2.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">Education</p>
          <div className="space-y-2 text-xs text-slate-300">
            <div>
              <p className="font-medium text-slate-100">B.S. Computer Science — Software Engineering</p>
              <p className="text-slate-500">UMGC · GPA 3.7</p>
            </div>
            <div>
              <p className="font-medium text-slate-100">Computer Science</p>
              <p className="text-slate-500">Michigan State University · 2021 – 2024</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/12 bg-slate-900/80 p-4 backdrop-blur-sm">
          <p className="mb-2.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">Certifications</p>
          <div className="space-y-2 text-xs text-slate-300">
            <p>Google Professional IT Support Certificate · Feb 2024</p>
            <p>Certified Network Security Specialist · Jul 2020</p>
          </div>
        </section>
      </div>
    </>
  )
}

function MobileBlogContent() {
  return (
    <>
      <PageHeader eyebrow="Writing" title="Blog" count={`${linkedInPosts.length} posts`} />
      <div className="rounded-xl border border-white/12 bg-slate-900/80 p-3 backdrop-blur-sm">
        <div className="space-y-2">
          {linkedInPosts.map((post) => (
            <PostCard key={post.id} post={post} compact />
          ))}
        </div>
      </div>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-3 block rounded-xl border border-sky-400/20 bg-slate-900/80 py-2.5 text-center text-xs font-medium text-sky-200 backdrop-blur-sm"
      >
        View all on LinkedIn →
      </a>
    </>
  )
}

function ContactLink({ href, icon, title, subtitle, primary = false }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={[
        'group flex items-center gap-3 rounded-xl border p-4 transition',
        primary
          ? 'border-sky-400/25 bg-sky-500/10'
          : 'border-white/12 bg-slate-900/80 backdrop-blur-sm',
      ].join(' ')}
    >
      {icon}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-100">{title}</p>
        <p className="mt-0.5 truncate text-xs text-slate-400">{subtitle}</p>
      </div>
      <svg
        className={`h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 ${primary ? 'text-sky-400/70' : 'text-slate-600'}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  )
}

function MobileContactContent() {
  return (
    <>
      <PageHeader eyebrow="Get in Touch" title="Contact" />
      <div className="space-y-2.5">
        <ContactLink
          href={LINKEDIN_URL}
          primary
          title="LinkedIn"
          subtitle="linkedin.com/in/ermi-kifle-69443a195"
          icon={
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] shadow-[0_3px_12px_-3px_rgba(10,102,194,0.6)]">
              <LinkedInIcon className="h-4 w-4 text-white" />
            </span>
          }
        />
        <ContactLink
          href={`mailto:${recipientEmail}?subject=${encodeURIComponent('Hello Ermiyas')}`}
          title="Email"
          subtitle={recipientEmail}
          icon={
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
              <svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="m3 8 9 6 9-6" />
              </svg>
            </span>
          }
        />
        <p className="pt-1 text-center text-[11px] text-slate-400">Best way to reach me is via LinkedIn.</p>
      </div>
    </>
  )
}

function MobileLayout() {
  return (
    <Routes>
      <Route element={<MobileShellLayout />}>
        <Route index element={<MobileAboutContent />} />
        <Route path="about" element={<MobileAboutContent />} />
        <Route path="projects" element={<MobileProjectsContent />} />
        <Route path="experience" element={<MobileExperienceContent />} />
        <Route path="blog" element={<MobileBlogContent />} />
        <Route path="skills" element={<MobileSkillsContent />} />
        <Route path="contact" element={<MobileContactContent />} />
        <Route path="*" element={<MobileAboutContent />} />
      </Route>
    </Routes>
  )
}

export default MobileLayout
