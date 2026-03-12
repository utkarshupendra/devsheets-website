import { motion } from 'framer-motion';
import { Download, Github, Star } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-blue-950 via-slate-950 to-purple-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            Ready to Level Up
            <br />
            Your Data Analysis?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Analyze CSV, Excel, and JSON data with code-like expressions and full transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 w-full sm:w-auto">
            <motion.a
              href="https://github.com/utkarshupendra/devsheets#installation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg"
            >
              <Download size={24} />
              <span>Build from Source</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition-opacity -z-10"></div>
            </motion.a>

            <motion.a
              href="https://github.com/utkarshupendra/devsheets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/5 backdrop-blur-sm text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg"
            >
              <Github size={24} />
              <span>Star on GitHub</span>
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500" />
              <span>MIT Licensed</span>
            </div>
            <div className="w-px h-4 bg-slate-700"></div>
            <div>No Account Required</div>
            <div className="w-px h-4 bg-slate-700"></div>
            <div>Cross-Platform</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
