import { motion } from 'framer-motion';
import { Terminal, Package, Play } from 'lucide-react';

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
            Build from source or download pre-built binaries for your platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <step.icon className="text-blue-400" size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{step.title}</h3>
                </div>
                <pre className="p-3 sm:p-4 rounded-lg bg-slate-950 border border-slate-800 overflow-x-auto">
                  <code className="text-xs sm:text-sm text-slate-300 font-mono whitespace-pre">{step.command}</code>
                </pre>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-slate-800/50 border border-slate-700 text-slate-400 rounded-lg text-center">
            <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded text-xs font-semibold">COMING SOON</span>
            <span className="text-sm sm:text-base font-medium">Pre-built binaries for macOS, Windows & Linux</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
