"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  animate?: boolean;
}

export const AnimatedProgress: React.FC<AnimatedProgressProps> = ({
  value,
  max = 100,
  className = '',
  barClassName = '',
  showValue = true,
  formatValue = (v) => `${v}%`,
  animate = true,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn('w-full', className)}>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800">
        <motion.div
          initial={animate ? { width: 0 } : false}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={cn(
            'h-full rounded-full bg-gradient-to-r from-[#14F195] to-[#9945FF]',
            barClassName
          )}
        />
      </div>
      {showValue && (
        <motion.div
          initial={animate ? { opacity: 0, y: 5 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-2 text-sm text-gray-400"
        >
          {formatValue(percentage)}
        </motion.div>
      )}
    </div>
  );
}; 