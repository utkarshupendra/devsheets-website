import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <a href="/" className="flex items-center gap-2" aria-label="DevSheets home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="white" opacity="0.9"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="white" opacity="0.6"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="white" opacity="0.6"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-black text-white">
              Dev<span className="text-blue-400">Sheets</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8" role="menubar">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium" role="menuitem">
              Features
            </a>
            <a href="https://github.com/utkarshupendra/devsheets#readme" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium" role="menuitem" rel="noopener noreferrer" target="_blank">
              Docs
            </a>
            <a href="https://github.com/utkarshupendra/devsheets" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium" role="menuitem" rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/utkarshupendra/devsheets"
              className="hidden sm:block p-2 text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="View DevSheets on GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github size={20} />
            </a>
            <a
              href="https://github.com/utkarshupendra/devsheets#installation"
              className="px-3 sm:px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Download size={14} className="sm:w-4 sm:h-4" aria-hidden="true" />
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
