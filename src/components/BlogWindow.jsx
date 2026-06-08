import { linkedInPosts } from '../data/posts'
import { PostCard } from './PostCard'

const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/ermi-kifle-69443a195/'

function BlogWindow() {
  return (
    <div className="flex h-full flex-col bg-[#111827]">
      <div className="flex items-center justify-between border-b border-white/8 bg-[#0d1117] px-5 py-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Writing</p>
          <p className="text-base font-semibold tracking-tight text-slate-100">Blog</p>
        </div>
        <span className="rounded-full border border-sky-400/25 bg-sky-500/15 px-2.5 py-0.5 text-[11px] font-medium text-sky-200">
          {linkedInPosts.length} posts
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {linkedInPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="border-t border-white/8 bg-[#0d1117] px-4 py-2.5">
        <a
          href={LINKEDIN_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-sky-300/80 transition hover:text-sky-200"
        >
          View all on LinkedIn →
        </a>
      </div>
    </div>
  )
}

export default BlogWindow
