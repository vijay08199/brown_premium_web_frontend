
import { motion } from 'framer-motion';
import { ease } from '../animation/easing';
import { CheckCircle } from 'lucide-react';

const reasons = [
  { title: 'Trusted Developer', desc: 'Clear titles and transparent ownership' },
  { title: 'Premium Quality', desc: 'World‑class construction standards' },
  { title: 'Strategic Locations', desc: 'Growth corridors with excellent connectivity' },
  { title: 'Sustainable Design', desc: 'Eco‑friendly, future‑ready infrastructure' },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function WhyChooseUs() {

  return (
    <motion.section
      id="why-us"
      className="py-16 bg-cream"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-primaryDark mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div key={i} className="flex items-start space-x-4" variants={item}>
              <CheckCircle className="text-terracotta" size={32} />
              <div>
                <h3 className="font-serif text-primaryDark text-xl mb-1">{r.title}</h3>
                <p className="text-darkText">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
