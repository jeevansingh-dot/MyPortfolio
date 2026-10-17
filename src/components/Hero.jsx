import { lazy, Suspense, useState } from 'react'
import Typewriter from 'typewriter-effect'
import { HiArrowRight, HiDownload, HiBriefcase, HiTerminal } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

// Load the 3D scene separately so the text and buttons show up first
const Hero3D = lazy(() => import('./Hero3D'))

const GITHUB_URL = 'https://github.com/jeevansingh-dot'
const LINKEDIN_URL = 'https://linkedin.com/in/jeevan-s-063460290'
const RESUME_URL = '/Jeevan-Singh-Resume.pdf'

// Yahan aapke roles ek ke baad ek type aur delete honge
const TYPED_LINES = [
  'Full Stack Developer',
  'DSA Problem Solver',
  'Backend & API Engineer',
  'Computer Science Student'
]

const TECH = ['React.js', 'Node.js', 'Express', 'MongoDB', 'Java', 'Python']

export default function Hero() {
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  return (
    <section id="home" className="relative overflow-hidden py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Profile Side (7 columns) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status & Available for Work Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-500/20 font-mono">
                <HiTerminal className="w-3.5 h-3.5" /> B.Tech CSE Final Year
              </span>
              
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <HiBriefcase className="w-3.5 h-3.5" /> Available for Work
              </span>
            </div>

            {/* Profile Photo + Heading Layout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-75"></div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900 border border-blue-500/30 overflow-hidden flex items-center justify-center shadow-xl">
                 <img 
  src="/Jeevanphoto.png_page-0001.jpg" 
  alt="Jeevan Singh" 
  className="w-full h-full object-cover"
/>
                </div>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Jeevan Singh
                  </span>
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono flex items-center gap-1">
                  📍 Haldwani, Uttarakhand
                </p>
              </div>
            </div>

            {/* Typewriter Effect Line (Ek ke baad ek role type aur delete hoga) */}
            <div className="pt-2">
              <p className="sr-only">
                Full stack developer, DSA problem solver, and backend engineer.
              </p>
              <div
                aria-hidden="true"
                className="flex min-h-[2.5rem] items-center text-xl sm:text-2xl font-semibold text-blue-400 dark:text-blue-400 font-mono"
              >
                <span className="mr-2 text-slate-500">&gt;</span>
                {reduceMotion ? (
                  TYPED_LINES[0]
                ) : (
                  <Typewriter
                    options={{
                      strings: TYPED_LINES,
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                )}
              </div>
            </div>

            <p className="max-w-xl text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Crafting scalable web systems with the MERN stack, Java and AI-driven solutions.
            </p>

            {/* Tech Stack Pills */}
            <ul className="flex flex-wrap gap-2">
              {TECH.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300 font-mono"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Action Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700"
              >
                View Projects <HiArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center justify-center rounded-xl bg-slate-200 px-6 py-3 font-medium text-slate-800 transition-all hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Resume <HiDownload className="ml-2 h-5 w-5" />
              </a>

              <div className="flex items-center justify-center gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-xl p-3 text-slate-700 transition-colors hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-700/30"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-xl p-3 text-slate-700 transition-colors hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-700/30"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 3D Side (5 columns) */}
          <div className="lg:col-span-5">
            <Suspense fallback={<div className="h-80 w-full sm:h-[26rem]" aria-hidden="true" />}>
              <Hero3D />
            </Suspense>
          </div>

        </div>
      </div>
    </section>
  )
}