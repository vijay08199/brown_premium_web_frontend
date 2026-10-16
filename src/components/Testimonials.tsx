
import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '../animation/easing';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';


const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Testimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="testimonials" className="py-16 bg-softBeige">
      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-serif text-primaryDark mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div key={t.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center" variants={card} whileHover={!prefersReduced ? { scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' } : {}}>
              <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <p className="text-darkText italic mb-4">\"{t.text}\"</p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? 'text-terracotta' : 'text-softBeige'}
                  />
                ))}
              </div>
              <p className="font-serif text-primaryDark text-lg">{t.name}</p>
              <p className="text-darkText text-sm">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
