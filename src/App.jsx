import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import FunFactsUses from './components/FunFactsUses';
import GitHubStats from './components/GitHubStats';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import TerminalMode from './components/TerminalMode';
import AIChatbot from './components/AIChatbot';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen font-mono selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Global 3D Particle Space Background */}
      <InteractiveBackground />

      <CustomCursor />
      <CommandPalette />
      
      {/* Terminal Modal */}
      {isTerminalOpen && <TerminalMode onClose={() => setIsTerminalOpen(false)} />}

      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <FunFactsUses />
        <GitHubStats />
        <Education />
        <Contact />
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;