"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { THEME } from '@/lib/themes';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  via?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  from = THEME.colors.primary.green,
  via,
  to = THEME.colors.primary.violet,
}) => {
  const gradientClass = via
    ? `bg-gradient-to-r from-[${from}] via-[${via}] to-[${to}]`
    : `bg-gradient-to-r from-[${from}] to-[${to}]`;

  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        gradientClass,
        className
      )}
    >
      {children}
    </span>
  );
}; 