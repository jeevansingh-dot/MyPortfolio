import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap'],
    },
    {
      category: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    },
    {
      category: 'Languages & Tools',
      skills: ['Java (DSA)', 'TypeScript', 'Python', 'Git & GitHub', 'Postman', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Technologies and tools I work with to build robust software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}