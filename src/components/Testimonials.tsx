import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Finally, a spreadsheet that speaks my language. Expression-based filters are a game changer for analyzing API responses.",
    author: "Sarah Chen",
    role: "Backend Engineer",
  },
  {
    quote: "The pipeline view makes it so easy to understand what transformations I've applied. No more hidden state!",
    author: "Marcus Rodriguez",
    role: "Data Analyst",
  },
  {
    quote: "I use it alongside Excel. Copy data from Excel, filter with regex in DevSheets, paste back. Perfect workflow.",
    author: "Priya Sharma",
    role: "QA Engineer",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Loved by Developers
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See what developers are saying about their data analysis workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 backdrop-blur-sm"
            >
              <Quote className="text-blue-400 mb-4" size={32} />
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
