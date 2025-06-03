"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  pattern?: 'dots' | 'grid' | 'waves';
  color?: string;
  opacity?: number;
  speed?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = '',
  pattern = 'dots',
  color = '#14F195',
  opacity = 0.1,
  speed = 20,
}) => {
  const getPattern = () => {
    switch (pattern) {
      case 'dots':
        return (
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill={color} fillOpacity={opacity} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        );
      case 'grid':
        return (
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke={color}
                  strokeWidth="0.5"
                  strokeOpacity={opacity}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        );
      case 'waves':
        return (
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} stopOpacity={opacity}>
                  <animate
                    attributeName="offset"
                    values="0;1"
                    dur={`${speed}s`}
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor={color} stopOpacity={opacity}>
                  <animate
                    attributeName="offset"
                    values="1;2"
                    dur={`${speed}s`}
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
            <path
              d="M0,50 C150,110 350,-10 500,50 C650,110 850,-10 1000,50 L1000,100 L0,100 Z"
              fill="url(#wave)"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn('relative overflow-hidden', className)}
    >
      {getPattern()}
    </motion.div>
  );
}; 