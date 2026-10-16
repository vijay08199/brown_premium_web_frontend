import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '../animation/easing';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

export default function Gallery() {
  const prefersReduced = useReducedMotion();
  const images = [
    '/images/gallery/gallery-villa-1.png',
    '/images/gallery/gallery-villa-2.png',
    '/images/gallery/gallery-aerial-1.png',
  ];

  return (
    <section id="gallery" className="py-16 bg-softBeige">
      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        animate={prefersReduced ? {} : 'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-serif text-primaryDark mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div key={i} className="overflow-hidden rounded-lg" variants={item}>
              <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
