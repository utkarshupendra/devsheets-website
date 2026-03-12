import { motion } from 'framer-motion';
import { Star, GitFork, Users, TrendingUp } from 'lucide-react';

const metrics = [
  {
    icon: Star,
    label: 'Open Source',
    value: 'MIT Licensed',
    description: 'Free forever',
  },
  {
    icon: GitFork,
    label: 'Cross-Platform',
    value: 'Desktop App',
    description: 'macOS, Windows, Linux',
  },
  {
    icon: Users,
    label: 'Built For',
    value: 'Developers',
    description: 'Not accountants',
  },
  {
    icon: TrendingUp,
    label: 'Performance',
    value: '100k+ Rows',
    description: 'Smooth at 60fps',
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700 backdrop-blur-sm"
            >
              <div className="inline-flex p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-4">
                <metric.icon className="text-blue-400" size={24} />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base text-slate-400 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500">
                {metric.description}
              </div>
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
          <p className="text-slate-400 text-sm sm:text-base">
            A spreadsheet for developers who are tired of fighting Excel's hidden filters and menu diving
          </p>
        </motion.div>
      </div>
    </section>
  );
}
