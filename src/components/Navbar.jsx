import React, { useState } from 'react';
import { HiMenu, HiX, HiTerminal } from 'react-icons/hi';

export default function Navbar({ onOpenTerminal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '// about', href: '#about' },
    { name: '// projects', href: '#projects' },
    { name: '// skills', href: '#skills' },
    { name: '// education', href: '#education' },
    { name: '// contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo / Name with Gradient Color */}
        <a href="#" className="text-xl font-extrabold tracking-wider font-mono bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Jeevan Singh
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Interactive Terminal Launcher Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-950/50 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)]"
          >
            <HiTerminal className="w-4 h-4 text-cyan-400" />
            <span>Terminal</span>
          </button>
        </nav>

        {/* Mobile View Toggle Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-500/40 text-cyan-400"
          >
            <HiTerminal className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-cyan-400 hover:bg-slate-900"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-slate-950/95 border-b border-cyan-500/20 font-mono backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}