"use client";

import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function AnimatedCounter({ value, prefix = '', suffix = '', delay = 0 }: AnimatedCounterProps) {
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      spring.set(value);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [value, spring, delay]);

  const displayValue = useTransform(spring, (latest) => {
    return `${prefix}${Math.round(latest)}${suffix}`;
  });

  return (
    <motion.span>
      {displayValue}
    </motion.span>
  );
}

export { AnimatedCounter };
export default AnimatedCounter; 