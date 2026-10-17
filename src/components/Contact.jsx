import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          I'm actively looking for new opportunities and full-time roles. Feel free to reach out!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <HiMail className="w-5 h-5 text-blue-500" />
            <span>jeevansingh20510@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <HiPhone className="w-5 h-5 text-blue-500" />
            <span>6397816186</span>
          </div>
          <div className="flex items-center gap-2">
            <HiLocationMarker className="w-5 h-5 text-blue-500" />
            <span>Haldwani, Uttarakhand</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:jeevansingh20510@gmail.com"
            className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/25 transition-all"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/jeevan-s-063460290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium transition-all"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}