import { motion } from 'framer-motion';
import { Database, FileJson, BarChart3, GitBranch, Bug, FileSpreadsheet } from 'lucide-react';

const useCases = [
  {
    icon: Database,
    title: 'API Response Analysis',
    description: 'Export JSON from your API, open it in DevSheets, and filter/sort with expressions. Perfect for debugging and exploration.',
    example: 'status == 200 && response_time > 1000',
  },
  {
    icon: FileJson,
    title: 'Log File Processing',
    description: 'Convert logs to CSV, then slice and dice with regex filters and multi-column sorts.',
    example: 'level == "error" && message ~ "timeout"',
  },
  {
    icon: BarChart3,
    title: 'Data Exploration',
    description: 'Load datasets from CSV or Excel, build pivot tables, and visualize patterns with transparent aggregations.',
    example: 'GROUP BY category, SUM(revenue)',
  },
  {
    icon: GitBranch,
    title: 'GitHub Analytics',
    description: 'Export repository data, analyze stars/forks/issues with composable filters and sorts.',
    example: 'stars > 1000 && language in ("Go", "Rust")',
  },
  {
    icon: Bug,
    title: 'QA & Testing Data',
    description: 'Import test results, filter by status, sort by priority, and track patterns across test runs.',
    example: 'status == "failed" && priority == "high"',
  },
  {
    icon: FileSpreadsheet,
    title: 'CSV/Excel Enhancement',
    description: 'Open existing spreadsheets and enhance them with developer-friendly filters and transparent transformations.',
    example: 'Open any .csv, .xlsx, .tsv, or .json file',
  },
];

export default function UseCases() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
            Perfect for Your Workflow
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Whether you're debugging APIs, analyzing logs, or exploring datasets, DevSheets adapts to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <useCase.icon className="text-blue-400" size={24} />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{useCase.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4">{useCase.description}</p>
              
              <div className="px-3 sm:px-4 py-2 rounded-lg bg-slate-950/50 border border-slate-700 font-mono text-xs sm:text-sm text-blue-300 overflow-x-auto">
                {useCase.example}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
