import { useEffect, useRef, useState } from 'react'

const EMAIL = 'jeevansingh20510@gmail.com'
const GITHUB_URL = 'https://github.com/jeevansingh-dot'
const LINKEDIN_URL = 'https://linkedin.com/in/jeevan-s-063460290'
const RESUME_URL = '/Jeevan-Singh-Resume.pdf'

const COMMANDS = [
  'help',
  'about',
  'skills',
  'projects',
  'contact',
  'resume',
  'github',
  'linkedin',
  'whoami',
  'ls',
  'date',
  'clear',
  'exit',
]

const WELCOME = [
  {
    type: 'output',
    lines: [
      "Welcome to Jeevan Singh's Interactive Terminal v1.1.0",
      'Type "help" to see available commands. Tab completes, arrow keys show history.',
    ],
  },
]

// Returns the lines to print. Commands with side effects are handled in run().
function getOutput(name) {
  switch (name) {
    case 'help':
      return [
        'Available commands:',
        '  about      who I am',
        '  skills     my tech stack',
        '  projects   things I have built',
        '  contact    how to reach me',
        '  resume     open my resume (PDF)',
        '  github     open my GitHub',
        '  linkedin   open my LinkedIn',
        '  clear      clear the screen',
        '  exit       close the terminal',
      ]
    case 'about':
      return ['Final-year B.Tech CSE student at DBUU Dehradun, MERN stack & Java developer.']
    case 'skills':
      return [
        'Frontend  : React, Tailwind',
        'Backend   : Node.js, Express, MongoDB',
        'Languages : Java, Python',
      ]
    case 'projects':
      return [
        '1. SnapId / SnapAI',
        '2. Code Viva Generator',
        '3. Smart Campus Hub',
        '4. HealthConnectAI',
        'Details are in the Projects section.',
      ]
    case 'contact':
      return [`Email: ${EMAIL}`, `GitHub: ${GITHUB_URL}`, `LinkedIn: ${LINKEDIN_URL}`]
    case 'whoami':
      return ['jeevan - full stack developer']
    case 'ls':
      return ['about  skills  projects  contact  resume']
    case 'date':
      return [new Date().toLocaleString()]
    case 'sudo':
      return ['Nice try. This portfolio is read-only :)']
    default:
      return null
  }
}

export default function TerminalMode({ onClose }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState(WELCOME)

  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const pastCommands = useRef([])
  const cursor = useRef(0)

  // Always call the latest onClose without re-running the effect below
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })

  // Lock page scroll, close on Escape, give focus back to the page when closing
  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onCloseRef.current()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus()
    }
  }, [])

  // Keep the newest line visible
  useEffect(() => {
    const el = outputRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history])

  const run = (raw) => {
    const trimmed = raw.trim()
    const echo = { type: 'input', lines: [`$ ${raw}`] }

    if (!trimmed) {
      setHistory((prev) => [...prev, echo])
      return
    }

    pastCommands.current.push(trimmed)
    const name = trimmed.toLowerCase().split(/\s+/)[0]

    if (name === 'clear') {
      setHistory([])
      return
    }
    if (name === 'exit') {
      onCloseRef.current()
      return
    }

    let lines = getOutput(name)

    if (name === 'resume') {
      window.open(RESUME_URL, '_blank', 'noopener')
      lines = ['Opening resume...']
    } else if (name === 'github') {
      window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')
      lines = ['Opening GitHub...']
    } else if (name === 'linkedin') {
      window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')
      lines = ['Opening LinkedIn...']
    }

    if (!lines) lines = [`command not found: ${name}. Type "help" for commands.`]

    setHistory((prev) => [...prev, echo, { type: 'output', lines }])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(input)
      cursor.current = pastCommands.current.length
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cursor.current > 0) {
        cursor.current -= 1
        setInput(pastCommands.current[cursor.current])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (cursor.current < pastCommands.current.length - 1) {
        cursor.current += 1
        setInput(pastCommands.current[cursor.current])
      } else {
        cursor.current = pastCommands.current.length
        setInput('')
      }
    } else if (e.key === 'Tab') {
      // Tab completes the command instead of moving focus out of the terminal
      e.preventDefault()
      const typed = input.trim().toLowerCase()
      const matches = COMMANDS.filter((c) => c.startsWith(typed))
      if (typed && matches.length === 1) setInput(matches[0])
    }
  }

  const focusInput = () => {
    // do not steal focus while the visitor is selecting text
    if (window.getSelection().toString()) return
    inputRef.current?.focus()
  }

  return (
    <div
      className="terminal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Interactive terminal"
        className="terminal-window"
      >
        <div className="terminal-bar">
          <span className="terminal-title">bash - jeevan@portfolio:~</span>
          <button type="button" onClick={onClose} className="terminal-close">
            Close [Esc]
          </button>
        </div>

        <div
          ref={outputRef}
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
          onClick={focusInput}
          className="terminal-output"
        >
          {history.map((item, i) => (
            <div
              key={i}
              className={item.type === 'input' ? 'terminal-line-input' : 'terminal-line-output'}
            >
              {item.lines.map((line, j) => (
                <div key={j} className="terminal-text">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="terminal-input-row">
          <span aria-hidden="true" className="terminal-prompt">
            $
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a command (try "help")'
            aria-label="Terminal command"
            autoFocus
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            spellCheck={false}
            className="terminal-input"
          />
        </div>
      </div>
    </div>
  )
}