import { Github, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 bg-slate-950 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-sm sm:text-base text-center">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" aria-hidden="true" />
            <span>by the open source community</span>
          </div>

          <nav className="flex items-center gap-6" aria-label="Social links">
            <a
              href="https://github.com/utkarshupendra/devsheets"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="View DevSheets on GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github size={20} />
            </a>
            <a
              href="https://github.com/utkarshupendra"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Follow on Twitter"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter size={20} />
            </a>
          </nav>

          <div className="text-slate-500 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} DevSheets. MIT Licensed.
          </div>
        </div>
      </div>
    </footer>
  );
}
