import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Spreadsheet Built for Developers, Not Accountants',
    excerpt: 'Why we built DevSheets and how it solves the hidden state problem in traditional spreadsheets.',
    readTime: '5 min read',
    link: 'https://github.com/utkarshupendra/devsheets#readme',
  },
  {
    title: 'Expression-Based Filtering: Type Code, Not Click Menus',
    excerpt: 'Learn how to filter data with code expressions instead of clicking through endless menus.',
    readTime: '4 min read',
    link: 'https://github.com/utkarshupendra/devsheets#features',
  },
  {
    title: 'Visual Data Pipeline: See Every Transformation',
    excerpt: 'Understand your data transformations with a transparent, editable pipeline view.',
    readTime: '6 min read',
    link: 'https://github.com/utkarshupendra/devsheets#readme',
  },
];

export default function Blog() {
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
            Learn More About DevSheets
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Dive deeper into features, use cases, and the philosophy behind DevSheets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <BookOpen className="text-blue-400" size={20} />
                </div>
                <span className="text-xs sm:text-sm text-slate-500">{post.readTime}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                <span>Read More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
