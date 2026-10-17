import React from 'react';
import { HiDesktopComputer, HiSparkles } from 'react-icons/hi';

export default function FunFactsUses() {
  const usesItems = [
    { category: 'Editor & Theme', desc: 'VS Code with One Dark Pro theme & Fira Code font.' },
    { category: 'Tech Stack', desc: 'MERN Stack, Java (DSA), Python & Tailwind CSS.' },
    { category: 'Terminal & Tools', desc: 'Git, GitHub, Postman, and Thunder Client.' },
  ];

  const funFacts = [
    'Powered by endless cups of Chai and late-night debugging sessions.',
    'Obsessed with writing clean code and solving complex DSA logic.',
    'Always curious about integrating AI and Machine Learning into web apps.',
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Uses & Fun Facts</h2>
          <p className="text-slate-600 dark:text-slate-400">
            My development setup and a little bit about who I am beyond code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Uses / Setup Box */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400">
                <HiDesktopComputer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">My Uses (Dev Setup)</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {usesItems.map((item, idx) => (
                <li key={idx} className="border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0">
                  <strong className="text-slate-900 dark:text-slate-100 block">{item.category}</strong>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun Facts Box */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400">
                <HiSparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Fun Facts About Me</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {funFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}