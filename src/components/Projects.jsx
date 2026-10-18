import React from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export default function Projects() {
  const projectList = [
    {
      title: 'Smart Campus Hub',
      description: 'A centralized web platform for campus information and services utilizing React.js, Node.js, Express.js, and an integrated AI assistant.',
      tags: ['React.js', 'Node.js', 'Express.js', 'AI Assistant'],
      liveLink: 'https://smart-campus-managementt.vercel.app',
      githubLink: 'https://github.com/jeevansingh-dot/smart-campus-management',
    },
    {
      title: 'HealthConnectAI',
      description: 'A full-stack healthcare platform built with React.js, Node.js, Express.js, and MongoDB featuring RESTful APIs for managing user and health-related data.',
      tags: ['MERN Stack', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
      liveLink: 'https://health-connect-ai-dusky.vercel.app',
      githubLink: 'https://github.com/jeevansingh-dot/HealthConnectAI',
    },
    {
      title: 'SnapId / SnapAI',
      description: 'An AI-powered computer vision application where users can capture or upload pictures to instantly detect and get detailed information about objects and landmarks.',
      tags: ['Python', 'Computer Vision', 'React', 'AI/ML'],
      liveLink: 'https://snap-ai-1.vercel.app',
      githubLink: 'https://github.com/jeevansingh-dot/SnapAI1',
    },
    {
      title: 'Code Viva Generator (AI PDF Quiz)',
      description: 'An intelligent platform where users can upload PDFs or study notes to automatically generate viva questions and interactive evaluation systems.',
      tags: ['React.js', 'Node.js', 'AI/LLM', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: 'https://github.com/jeevansingh-dot',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-2 neon-text font-mono">
            &gt; featured_projects.exe
          </h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl mx-auto">
            System modules and full-stack applications deployed in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/80 rounded-xl p-6 cyber-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono">[ACTIVE]</span>
                </div>
                <p className="text-slate-400 text-xs font-mono leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links: Live Preview & GitHub Repo */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800 font-mono text-xs">
                {project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    &gt; live_demo <HiExternalLink className="ml-1 w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  &gt; git_repo <HiCode className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
