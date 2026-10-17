import React from 'react';
import { HiCode } from 'react-icons/hi';

export default function GitHubStats() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Coding & GitHub Activity</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          My daily contributions and open-source development activity.
        </p>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center overflow-x-auto">
          {/* GitHub Streak / Contribution Card Image from github-readme-stats */}
          <img 
            src="https://github-readme-stats.vercel.app/api?username=jeevansingh-dot&show_icons=true&theme=radical&hide_border=true" 
            alt="Jeevan's GitHub Stats" 
            className="mb-4 max-w-full"
          />
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jeevansingh-dot&layout=compact&theme=radical&hide_border=true" 
            alt="Top Languages" 
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}