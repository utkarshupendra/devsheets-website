import { motion } from 'framer-motion';
import { Code2, Eye, Workflow, Keyboard, Palette, Lock } from 'lucide-react';

const benefits = [
  {
    icon: Code2,
    title: 'Code-Like Expressions',
    description: 'Write filters like `stars > 50000 && language == "TypeScript"` — natural for developers.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Every transformation is visible. No hidden state, no surprises. See exactly what happens to your data.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Workflow,
    title: 'Composable Pipeline',
    description: 'Chain filters, sorts, and pivots together. Each step builds on the last, just like Unix pipes.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Keyboard,
    title: 'Keyboard-First',
    description: 'Command palette (⌘K), shortcuts for everything, and autocomplete. Mouse optional.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'Developer Experience',
    description: 'Dark mode, monospace fonts where it matters, and a UI that feels like your favorite IDE.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Lock,
    title: 'Privacy & Control',
    description: 'Open source, runs locally, no cloud required. Your data never leaves your machine.',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export default function Comparison() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
            Built for Developer Workflows
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            When you're analyzing data from APIs, logs, or databases, you need tools that match how you think.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{benefit.description}</p>
              
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
