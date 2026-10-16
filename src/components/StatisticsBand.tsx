import { motion } from 'framer-motion';
import { ease } from '../animation/easing';
import AnimatedNumber from './AnimatedNumber';

const stats = [
  { label: 'Projects Completed', value: '45' },
  { label: 'Acres Developed', value: '120' },
  { label: 'Happy Owners', value: '3,200+' },
  { label: 'Years of Experience', value: '20' },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function StatisticsBand() {

  return (
    <motion.section
      className="bg-primaryDark text-white py-12"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" variants={item}>
          {stats.map((s, i) => (
            <motion.div key={i} variants={item}>
              <p className="text-3xl font-bold mb-1">
                <AnimatedNumber value={s.value} />
              </p>
              <p className="text-sm uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
