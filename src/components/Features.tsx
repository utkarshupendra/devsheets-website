import { motion } from 'framer-motion';
import { Filter, ArrowUpDown, PieChart, Code2, Layers, Undo2, Copy, Palette, Terminal, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Expression-Based Filters',
    description: 'Write filters using familiar syntax: `stars > 50000 && language == "TypeScript"`. Natural for developers.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Filter,
    title: '15 Filter Operators',
    description: 'Equals, contains, regex, in lists, is_empty, and more. Query your data like a database.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: ArrowUpDown,
    title: 'Visual Sort Chips',
    description: 'See exactly which columns are sorted and in what order. Multi-column support with clear priorities.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: PieChart,
    title: 'Transparent Pivots',
    description: 'Drag-and-drop pivot builder with live preview. Every aggregation is visible and editable.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Layers,
    title: 'Data Pipeline View',
    description: 'Visualize transformations as a composable pipeline. Chain operations like Unix pipes.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Undo2,
    title: '50-Step Undo/Redo',
    description: 'Full history per sheet with ⌘Z / ⌘⇧Z. Experiment freely without fear.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Copy,
    title: 'Universal Clipboard',
    description: 'Copy/paste data between DevSheets, Excel, Google Sheets, and any spreadsheet tool.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Palette,
    title: 'Dark & Light Themes',
    description: 'Toggle instantly, persisted across sessions. Designed for long analysis sessions.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Terminal,
    title: 'Command Palette',
    description: '⌘K to access any action. Keyboard-first workflow optimized for speed.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with React 18, Zustand, and Vite. Handles large datasets smoothly.',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24 md:py-32 bg-slate-950" aria-labelledby="features-heading" role="region">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-4">
            Features Built for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Developers</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Analyze data from CSV, Excel, and JSON files with tools that match your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{feature.description}</p>
              
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
