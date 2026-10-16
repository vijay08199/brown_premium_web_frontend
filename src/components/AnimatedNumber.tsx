import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedNumberProps {
  value: string; // may include commas and suffixes like '+' or '%'
}

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    // Extract numeric part and suffix
    const suffix = value.replace(/[0-9.,]/g, '');
    const numeric = Number(value.replace(/[^0-9.]/g, '').replace(/,/g, ''));
    if (prefersReduced) {
      setDisplay(`${numeric.toLocaleString()}${suffix}`);
      return;
    }
    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(start + (numeric - start) * progress);
      setDisplay(`${current.toLocaleString()}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, prefersReduced]);

  return <motion.span>{display}</motion.span>;
}
