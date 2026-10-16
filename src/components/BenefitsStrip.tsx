
import { motion, useReducedMotion } from 'framer-motion';
import { Star, ShieldCheck, LayoutPanelTop, Home, Users } from 'lucide-react';

const benefits = [
  { icon: <Star size={24} />, title: 'Premium Quality', description: 'World‑class construction standards' },
  { icon: <ShieldCheck size={24} />, title: 'Clear Titles', description: 'Transparent ownership documentation' },
  { icon: <LayoutPanelTop size={24} />, title: 'Modern Infrastructure', description: 'All utilities and smart‑city ready' },
  { icon: <Home size={24} />, title: 'Prime Locations', description: 'Strategically placed in growth corridors' },
  { icon: <Users size={24} />, title: 'Community Living', description: "Thoughtfully planned neighborhoods" },
];

export default function BenefitsStrip() {
  const prefersReduced = useReducedMotion();
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="bg-cream py-12">
      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        animate={prefersReduced ? {} : "visible"}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-4 bg-softBeige rounded-lg shadow-sm"
              variants={item}
              initial="hidden"
              animate={prefersReduced ? {} : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={!prefersReduced ? { scale: 1.04 } : {}}
            >
              <motion.div
                className="text-primaryDark mb-2"
                whileHover={!prefersReduced ? { scale: 1.08 } : {}}
                style={{ display: "inline-block" }}
              >
                {b.icon}
              </motion.div>
              <h3 className="font-serif text-primaryDark text-lg mb-1">{b.title}</h3>
              <p className="text-darkText text-sm">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
