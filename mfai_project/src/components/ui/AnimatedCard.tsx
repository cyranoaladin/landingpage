"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
  hoverRotate?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.02,
  hoverRotate = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.2 },
      }}
      className={cn(
        'p-6 rounded-xl bg-background/20 backdrop-blur-sm border border-gray-800',
        'hover:border-[#14F195] hover:shadow-[0_0_20px_rgba(20,241,149,0.2)]',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}; 