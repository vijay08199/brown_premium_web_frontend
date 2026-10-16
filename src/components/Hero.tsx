import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '../animation/easing';
import { ArrowRight, Play } from 'lucide-react';
import heroImg from '../assets/hero.png';
import Modal from './Modal';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2, ease },
    }),
  };

  // Subtle continuous background zoom (cinematic)
  const bgVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.02, 1],
      transition: { duration: 12, ease, repeat: Infinity },
    },
  };

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial={prefersReduced ? {} : { opacity: 0, scale: 1 }}
      animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
      variants={prefersReduced ? {} : bgVariants}
      transition={{ duration: 0.9, ease }}
    >
      <div className="absolute inset-0 bg-primaryDark bg-opacity-60" />
      <motion.div
        className="relative z-10 max-w-2xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-sm uppercase mb-2" variants={fadeUp} style={{ color: '#EDE0CF' }}>
          Luxury Real Estate
        </motion.p>
        <motion.h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4" style={{ color: '#F8F2E9' }} variants={fadeUp} custom={0}>
          <motion.span variants={fadeUp} custom={0}>A Better Tomorrow</motion.span>
          <br />
          <motion.span variants={fadeUp} custom={1}>Starts Here.</motion.span>
        </motion.h1>
        <motion.p className="mb-8 text-lg md:text-xl" variants={fadeUp} custom={2} style={{ color: '#EDE0CF' }}>
          Thoughtfully planned communities with modern infrastructure, clear titles and long‑term value.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={containerVariants}>
          <motion.button
            onClick={scrollToProjects}
            className="bg-terracotta hover:bg-warmCopper text-white font-medium py-3 px-6 rounded transition-colors flex items-center justify-center"
            whileHover={!prefersReduced ? { scale: 1.03 } : {}}
            whileTap={!prefersReduced ? { scale: 0.97 } : {}}
            variants={fadeUp}
            custom={3}
          >
            Explore Projects <ArrowRight className="ml-2" size={18} />
          </motion.button>
          <motion.button
            onClick={() => setVideoOpen(true)}
            className="bg-deepEspresso hover:bg-primaryDark text-white font-medium py-3 px-6 rounded transition-colors flex items-center justify-center"
            whileHover={!prefersReduced ? { scale: 1.03 } : {}}
            whileTap={!prefersReduced ? { scale: 0.97 } : {}}
            variants={fadeUp}
            custom={4}
          >
            <Play className="mr-2" size={18} /> Watch Video
          </motion.button>
        </motion.div>
        <motion.div className="mt-8 text-sm italic" variants={fadeUp} style={{ color: '#EDE0CF' }}>
          Sri Parinithee Infra Developers – Crafting tomorrow’s landmarks.
        </motion.div>
      </motion.div>
      {isVideoOpen && <Modal onClose={() => setVideoOpen(false)} />}
    </motion.section>
  );
}
