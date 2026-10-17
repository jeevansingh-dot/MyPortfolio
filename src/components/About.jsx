import React from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export default function Projects() {
  const projectList = [
    {
      title: 'SnapId / SnapAI',
      description: 'An AI-powered computer vision application where users can capture or upload pictures to instantly detect and get detailed information about objects like mountains, trees, and landmarks.',
      tags: ['Python', 'Computer Vision', 'React', 'AI/ML'],
      liveLink: '#',
      githubLink: 'https://github.com/jeevansingh-dot',
    },
    {
      title: 'Code Viva Generator (AI PDF Quiz)',
      description: 'An intelligent platform where users can upload PDFs or study notes to automatically generate viva questions and interactive evaluation systems for answers.',
      tags: ['React.js', 'Node.js', 'AI/LLM', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: 'https://github.com/jeevansingh-dot',
    },
    {
      title: 'Smart Campus Hub',
      description: 'A web-based campus platform for centralized campus information and services, featuring responsive React UIs, Node/Express backend, and an integrated AI Assistant.',
      tags: ['React.js', 'Node.js', 'Express.js', 'AI Assistant'],
      liveLink: '#',
      githubLink: 'https://github.com/jeevansingh-dot',
    },
    {
      title: 'HealthConnectAI',
      description: 'A full-stack healthcare platform for managing health information with robust RESTful APIs, secure backend operations, and MongoDB storage.',
      tags: ['MERN Stack', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: 'https://github.com/jeevansingh-dot',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Explore my major full-stack, AI, and computer vision projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={project.liveLink}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo <HiExternalLink className="ml-1 w-4 h-4" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:underline"
                >
                  GitHub <HiCode className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}