import { HiCode, HiExternalLink } from 'react-icons/hi'

const GITHUB_PROFILE = 'https://github.com/jeevansingh-dot'

/*
  Optional fields for each project:
  - status:   'Completed' or 'In Progress'  (shows a small badge)
  - liveLink: add the deployed URL to show a "Live Demo" button
  - learned:  one honest line about what you learned or achieved
*/
const PROJECTS = [
  {
    title: 'SnapId / SnapAI',
    description:
      'An AI-powered computer vision application where users can capture or upload pictures to instantly detect and get detailed information about objects like mountains, trees, and landmarks.',
    tags: ['Python', 'Computer Vision', 'React', 'AI/ML'],
    githubLink: GITHUB_PROFILE, // TODO: replace with the repo link
    liveLink: '',
    status: '',
    learned: '',
  },
  {
    title: 'Code Viva Generator (AI PDF Quiz)',
    description:
      'An intelligent platform where users can upload PDFs or study notes to automatically generate viva questions and interactive evaluation systems for answers.',
    tags: ['React.js', 'Node.js', 'AI/LLM', 'Tailwind CSS'],
    githubLink: GITHUB_PROFILE, // TODO: replace with the repo link
    liveLink: '',
    status: '',
    learned: '',
  },
  {
    title: 'Smart Campus Hub',
    description:
      'A web-based campus platform for centralized campus information and services, featuring responsive React UIs, Node/Express backend, and an integrated AI Assistant.',
    tags: ['React.js', 'Node.js', 'Express.js', 'AI Assistant'],
    githubLink: GITHUB_PROFILE, // TODO: replace with the repo link
    liveLink: '',
    status: '',
    learned: '',
  },
  {
    title: 'HealthConnectAI',
    description:
      'A full-stack healthcare platform for managing health information with robust RESTful APIs, secure backend operations, and MongoDB storage.',
    tags: ['MERN Stack', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    githubLink: GITHUB_PROFILE, // TODO: replace with the repo link
    liveLink: '',
    status: '',
    learned: '',
  },
]

const STATUS_STYLES = {
  Completed:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'In Progress':
    'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
}

const linkClass =
  'inline-flex items-center rounded-md text-sm font-medium text-blue-700 transition-colors hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-cyan-400 dark:hover:text-cyan-300'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 py-20 dark:bg-slate-950/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-mono text-3xl font-extrabold text-blue-700 sm:text-4xl dark:text-cyan-400">
            &gt; featured_projects
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-600 dark:text-slate-400">
            Projects I have built while learning full stack development and AI.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-cyan-500/60"
            >
              <div>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-cyan-300">
                    {project.title}
                  </h3>

                  {STATUS_STYLES[project.status] && (
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[project.status]}`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {project.learned && (
                  <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">Learned: </span>
                    {project.learned}
                  </p>
                )}

                <ul className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-blue-200 bg-blue-50 px-2.5 py-1 font-mono text-xs text-blue-700 dark:border-cyan-500/30 dark:bg-cyan-950/60 dark:text-cyan-400"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-5 border-t border-slate-200 pt-4 dark:border-slate-800">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className={linkClass}
                >
                  Source code <HiCode className="ml-1 h-4 w-4" />
                </a>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className={linkClass}
                  >
                    Live demo <HiExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}