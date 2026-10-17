import React, { useState, useEffect } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const links = [
    { name: 'Go to About', href: '#about' },
    { name: 'Go to Projects', href: '#projects' },
    { name: 'Go to Skills', href: '#skills' },
    { name: 'Go to Education', href: '#education' },
    { name: 'Go to Contact', href: '#contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-400">
            <HiSearch className="w-5 h-5" />
            <span className="text-sm font-medium">Quick Command Navigation</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
            <HiX className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-3 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}