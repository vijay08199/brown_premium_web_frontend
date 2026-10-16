
import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '../animation/easing';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

// Container variant for staggered reveal
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: 'beforeChildren' },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Projects() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="projects" className="py-16 bg-cream">
      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-serif text-primaryDark mb-8 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden" variants={card} whileHover={!prefersReduced ? { scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' } : {}}>
              <motion.img src={p.image} alt={p.title} className="w-full h-48 object-cover" whileHover={!prefersReduced ? { scale: 1.04 } : {}} />
              <div className="p-4">
                <h3 className="font-serif text-primaryDark text-xl mb-2">{p.title}</h3>
                <p className="text-darkText text-sm mb-1"><strong>Location:</strong> {p.location}</p>
                <p className="text-darkText text-sm mb-1"><strong>Price:</strong> {p.price}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="bg-softBeige text-primaryDark text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <motion.button className="flex items-center text-terracotta hover:text-warmCopper transition-colors" whileHover={!prefersReduced ? { scale: 1.05 } : {}} whileTap={!prefersReduced ? { scale: 0.97 } : {}}>
                  View Details <ArrowRight size={16} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
