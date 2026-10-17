import React from 'react';
import { HiClock } from 'react-icons/hi';

export default function Journey() {
  const milestones = [
    { year: '2023', title: 'Started B.Tech CSE', desc: 'Began learning programming fundamentals, Java, and C at DBUU Dehradun.' },
    { year: '2024', title: 'Mastered Data Structures', desc: 'Solved complex DSA problems in Java and explored Object-Oriented Programming.' },
    { year: '2025', title: 'Full Stack MERN & Internships', desc: 'Built full-stack applications (HealthConnectAI, Smart Campus Hub) and completed Deloitte simulation.' },
    { year: '2026', title: 'AI & Computer Vision Projects', desc: 'Developed advanced AI systems like SnapId, Code Viva Generator, and preparing for final placements.' }
  ];

  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Journey Timeline</h2>
          <p className="text-slate-600 dark:text-slate-400">From writing my first line of code to building production AI apps.</p>
        </div>

        <div className="border-l-2 border-blue-500 pl-6 space-y-10 ml-4 sm:ml-20">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative">
              <span className="absolute --left-[31px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950"></span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                {item.year}
              </span>
              <h3 className="text-xl font-bold mt-2 text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}