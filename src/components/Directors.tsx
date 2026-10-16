import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '../animation/easing';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const heading = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Directors() {
  const prefersReduced = useReducedMotion();

  const directors = [
    {
      name: 'John Doe',
      role: 'Chief Executive Officer',
      bio: 'Placeholder biography for the CEO. This profile is a sample and should be replaced with actual information.',
      img: '/images/sample-director-1.png',
    },
    {
      name: 'Jane Smith',
      role: 'Chief Operating Officer',
      bio: 'Placeholder biography for the COO. This profile is a sample and should be replaced with actual information.',
      img: '/images/sample-director-2.png',
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Design',
      bio: 'Placeholder biography for the Head of Design. This profile is a sample and should be replaced with actual information.',
      img: '/images/sample-director-3.png',
    },
  ];

  return (
    <section id="directors" className="py-16 bg-softBeige">
        <motion.div
          className="container mx-auto px-4"
          variants={container}
          initial="hidden"
          animate={prefersReduced ? {} : "visible"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-serif text-primaryDark mb-8 text-center"
            variants={heading}
          >
            Our Directors
          </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directors.map((d, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
              variants={card}
              whileHover={!prefersReduced ? { scale: 1.02, boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' } : {}}
            >
              <motion.img
                src={d.img}
                alt={d.name}
                className="w-40 h-40 rounded-full mb-4 object-cover"
                whileHover={!prefersReduced ? { scale: 1.05 } : {}}
                style={{ display: 'block' }}
              />
              <h3 className="font-serif text-primaryDark text-xl mb-1">{d.name}</h3>
              <p className="text-terracotta mb-2">{d.role}</p>
              <p className="text-darkText text-sm text-center">{d.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
