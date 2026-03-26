import { useEffect, useMemo, useRef, useState } from 'react'

const bootLines = [
  '$ whoami',
  'ermiyas_kifle',
  '$ stack --primary',
  'react, node, typescript, product strategy',
  '$ hint',
  'type "help" to list available commands',
]

function TerminalWindow() {
  const [lines, setLines] = useState(bootLines)
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  const commandMap = useMemo(
    () => ({
      help: [
        'Available commands:',
        'whoami, stack, projects, skills, contact, date, clear',
        'Easter eggs: matrix, sudo, coffee, 42, konami',
      ],
      whoami: ['ermiyas_kifle'],
      stack: ['react, node, typescript, django, postgresql, aws'],
      projects: ['2 project PDFs + standalone preview windows'],
      skills: ['python, java, c++, django, mysql, postgresql, aws ec2'],
      contact: ['ermiyas@ermi.ermi'],
      date: [new Date().toString()],
      matrix: ['Wake up, Ermi... The matrix has you.'],
      sudo: ['Nice try. Permission denied: user is already root-level curious.'],
      coffee: ['Brewing... done. +10 productivity, +2 debugging speed.'],
      '42': ['Answer to life, the universe, and everything.'],
      konami: ['Up Up Down Down Left Right Left Right B A -> unlocked.'],
    }),
    [],
  )

  const runCommand = (rawValue) => {
    const value = rawValue.trim()
    if (!value) return

    if (value === 'clear') {
      setLines([])
      return
    }

    const normalized = value.toLowerCase()
    const output = commandMap[normalized] || [`command not found: ${value}`, 'type "help"']

    setLines((prev) => [...prev, `$ ${value}`, ...output])
  }

  useEffect(() => {
    if (!outputRef.current) return
    outputRef.current.scrollTop = outputRef.current.scrollHeight
  }, [lines])

  return (
    <div
      className="flex h-full flex-col bg-slate-950/95 p-4 font-mono text-xs leading-6 text-emerald-300"
      onClick={() => inputRef.current?.focus()}
      role="presentation"
    >
      <div ref={outputRef} className="flex-1 overflow-y-auto pr-1">
        {lines.map((line, idx) => (
          <p key={`${line}-${idx}`}>{line}</p>
        ))}
      </div>

      <form
        className="mt-3 flex items-center gap-2 border-t border-emerald-300/20 pt-3"
        onSubmit={(event) => {
          event.preventDefault()
          runCommand(input)
          setInput('')
        }}
      >
        <span className="text-emerald-400">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder='Type "help"...'
          className="w-full bg-transparent text-emerald-200 outline-none placeholder:text-emerald-700"
          spellCheck={false}
        />
      </form>
    </div>
  )
}

export default TerminalWindow
