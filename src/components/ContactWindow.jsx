import { useState } from 'react'

const recipientEmail = 'ermiyas@ermi.ermi'

function ContactWindow() {
  const [from, setFrom] = useState('')
  const [subject, setSubject] = useState('Hello Ermiyas')
  const [message, setMessage] = useState('')

  const handleSend = (event) => {
    event.preventDefault()

    const body = [
      from ? `From: ${from}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#1b1f29]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#151923] px-4 py-2 text-xs text-slate-300">
        <span className="font-medium tracking-[0.12em] text-slate-200">Mail</span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-[11px]">Compose</span>
      </div>

      <form onSubmit={handleSend} className="flex h-full flex-col">
        <div className="space-y-2 border-b border-white/10 bg-[#202533] p-4 text-sm text-slate-200">
          <div className="grid grid-cols-[4.5rem_1fr] items-center gap-2">
            <label htmlFor="to" className="text-slate-400">
              To:
            </label>
            <input
              id="to"
              value={recipientEmail}
              disabled
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-300"
            />
          </div>
          <div className="grid grid-cols-[4.5rem_1fr] items-center gap-2">
            <label htmlFor="from" className="text-slate-400">
              From:
            </label>
            <input
              id="from"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              placeholder="your@email.com"
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-pink-300/40 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-[4.5rem_1fr] items-center gap-2">
            <label htmlFor="subject" className="text-slate-400">
              Subject:
            </label>
            <input
              id="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-pink-300/40 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1 p-4">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write your message..."
            className="h-full w-full resize-none rounded-lg border border-white/10 bg-[#0f1320] px-4 py-3 text-sm leading-6 text-slate-100 placeholder:text-slate-500 focus:border-pink-300/40 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-[#151923] px-4 py-3">
          <p className="text-xs text-slate-400">This opens your default email app.</p>
          <button
            type="submit"
            className="rounded-lg border border-pink-300/35 bg-pink-500/30 px-4 py-2 text-sm font-medium text-pink-100 transition hover:bg-pink-500/45"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactWindow
