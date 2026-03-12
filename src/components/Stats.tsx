import { motion } from 'framer-motion';
import { Users, Star, Download, Code } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: 'Open Source',
    label: 'MIT Licensed',
  },
  {
    icon: Download,
    value: 'Cross-Platform',
    label: 'macOS, Windows, Linux',
  },
  {
    icon: Code,
    value: '15+',
    label: 'Filter Operators',
  },
  {
    icon: Users,
    value: 'Free Forever',
    label: 'No Subscriptions',
  },
];

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4">
                <stat.icon className="text-blue-400" size={32} />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
