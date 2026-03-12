import { motion } from 'framer-motion';
import { Download, Github, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" aria-label="Hero section">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          <span>Open Source • Free Forever</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight px-4"
        >
          Spreadsheets
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            for Developers
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Analyze CSV, Excel, and JSON data with expression-based filters,
          <br className="hidden sm:block" />
          <span className="sm:inline"> </span>transparent pivots, and a visual transformation pipeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4 w-full sm:w-auto"
        >
          <a
            href="https://github.com/utkarshupendra/devsheets#installation"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 text-sm sm:text-base"
          >
            <Download size={18} />
            <span>Build from Source</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition-opacity -z-10"></div>
          </a>

          <a
            href="https://github.com/utkarshupendra/devsheets"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 text-sm sm:text-base"
          >
            <Github size={18} />
            <span>View on GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto px-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-slate-400">DevSheets</div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-left overflow-x-auto">
                <div className="col-span-2 sm:col-span-4 flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-slate-700">
                  <Zap className="text-blue-400 flex-shrink-0" size={16} />
                  <span className="text-slate-300 font-mono text-xs sm:text-sm truncate">stars &gt; 50000 && language == "TypeScript"</span>
                </div>
                <div className="text-slate-500 text-xs font-semibold">NAME</div>
                <div className="text-slate-500 text-xs font-semibold hidden sm:block">STARS</div>
                <div className="text-slate-500 text-xs font-semibold hidden sm:block">LANGUAGE</div>
                <div className="text-slate-500 text-xs font-semibold">UPDATED</div>
                
                <div className="text-slate-200 text-xs sm:text-sm">react</div>
                <div className="text-blue-400 text-xs sm:text-sm font-semibold hidden sm:block">218,000</div>
                <div className="text-slate-300 text-xs sm:text-sm hidden sm:block">TypeScript</div>
                <div className="text-slate-400 text-xs sm:text-sm">2024-03-10</div>
                
                <div className="text-slate-200 text-xs sm:text-sm">vue</div>
                <div className="text-blue-400 text-xs sm:text-sm font-semibold hidden sm:block">205,000</div>
                <div className="text-slate-300 text-xs sm:text-sm hidden sm:block">TypeScript</div>
                <div className="text-slate-400 text-xs sm:text-sm">2024-03-09</div>
                
                <div className="text-slate-200 text-xs sm:text-sm">angular</div>
                <div className="text-blue-400 text-xs sm:text-sm font-semibold hidden sm:block">93,000</div>
                <div className="text-slate-300 text-xs sm:text-sm hidden sm:block">TypeScript</div>
                <div className="text-slate-400 text-xs sm:text-sm">2024-03-11</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-400 text-xs sm:text-sm px-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>macOS • Windows • Linux</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <span>MIT Licensed</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
}
