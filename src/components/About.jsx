import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-cyan-400 font-mono mb-2">
            &gt; about_me.sys
          </h2>
          <p className="text-slate-400 text-sm font-mono">
            Background, core philosophy, and technical expertise.
          </p>
        </div>

        <div className="bg-slate-900/80 rounded-xl p-6 sm:p-8 cyber-card font-mono text-sm leading-relaxed text-slate-300 space-y-4">
          <p>
            <span className="text-cyan-400">&gt;</span> I am a final-year B.Tech Computer Science student specializing in full-stack web development and robust backend architectures.
          </p>
          <p>
            <span className="text-cyan-400">&gt;</span> Passionate about building scalable applications using the MERN stack, crafting high-performance RESTful APIs, and solving Data Structures & Algorithms problems in Java.
          </p>
          <p>
            <span className="text-cyan-400">&gt;</span> Dedicated to integrating intelligent AI assistants and computer vision models into real-world software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
