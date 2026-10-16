
import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '../animation/easing';


import aboutImg from '../assets/about.png';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: 'beforeChildren' },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function About() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="about" className="py-24 bg-softBeige relative">
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image */}
        <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={fadeUp}>
          <motion.img
            src={aboutImg}
            alt="About Sri Parinithee"
            className="rounded-lg shadow-lg"
            whileHover={!prefersReduced ? { scale: 1.02 } : {}}
            style={{ originX: 0.5, originY: 0.5 }}
          />
        </motion.div>
        {/* Text */}
        <motion.div className="md:w-1/2 md:pl-12" variants={fadeUp}>
          <h2 className="text-4xl font-serif text-primaryDark mb-4">About Sri Parinithee Infra</h2>
          <p className="text-darkText mb-4">
            Sri Parinithee Infra Developers Pvt. Ltd. is a premier real‑estate developer focused on creating thoughtfully planned, premium residential communities across India. Our projects blend modern infrastructure with timeless architectural elegance, delivering lasting value and a superior living experience.
          </p>
          <p className="text-darkText">
            With a commitment to clear titles, sustainable design, and community‑centric planning, we strive to build not just homes, but thriving neighborhoods that stand the test of time.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
