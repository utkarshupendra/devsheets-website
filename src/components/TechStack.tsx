import { motion } from 'framer-motion';

const technologies = [
  { name: 'Electron 28', category: 'Desktop' },
  { name: 'React 18', category: 'UI Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Zustand', category: 'State Management' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Vite', category: 'Build Tool' },
  { name: '@dnd-kit', category: 'Drag & Drop' },
  { name: 'SheetJS', category: 'File Formats' },
];

export default function TechStack() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
            Modern Tech Stack
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built with cutting-edge technologies for maximum performance and developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 flex flex-col items-center gap-3 sm:gap-4 text-center"
            >
              <div className="text-sm text-slate-500 mb-2">{tech.category}</div>
              <div className="text-base sm:text-lg font-semibold text-white">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
