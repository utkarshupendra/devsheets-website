import { motion } from 'framer-motion';
import { Terminal, Package, Play, Download } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Clone & Install',
    command: 'git clone https://github.com/utkarshupendra/devsheets.git\ncd devsheets\nnpm install',
  },
  {
    icon: Play,
    title: 'Run Development',
    command: 'npm run dev',
  },
  {
    icon: Terminal,
    title: 'Build Desktop App',
    command: 'npm run electron:build',
  },
];

export default function QuickStart() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
            Get Started in Minutes
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Download pre-built binaries for your platform or build from source.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 border border-slate-700 backdrop-blur-sm"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Download Binary</h3>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Get the latest pre-built version for macOS, Windows, or Linux.
            </p>
            <a
              href="https://github.com/utkarshupendra/devsheets/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors text-sm sm:text-base"
            >
              <Download size={16} />
              <span>Download Latest Release</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 border border-slate-700 backdrop-blur-sm"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Build from Source</h3>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 overflow-x-auto">
              <code className="text-blue-300 text-sm">
                git clone https://github.com/utkarshupendra/devsheets.git<br />
                cd devsheets<br />
                npm install<br />
                npm run electron:dev
              </code>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-slate-800/50 border border-slate-700 text-slate-400 rounded-lg text-center">
            <span className="text-sm sm:text-base font-medium">Supports CSV, TSV, JSON, Excel (XLSX, XLS)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
