"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { THEME } from '@/lib/themes';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  via?: string;
  thickness?: number;
}

export const GradientBorder: React.FC<GradientBorderProps> = ({
  children,
  className = '',
  from = THEME.colors.primary.green,
  via,
  to = THEME.colors.primary.violet,
  thickness = 1,
}) => {
  const gradientClass = via
    ? `bg-gradient-to-r from-[${from}] via-[${via}] to-[${to}]`
    : `bg-gradient-to-r from-[${from}] to-[${to}]`;

  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'absolute inset-0 rounded-lg',
          gradientClass
        )}
        style={{ padding: thickness }}
      />
      <div className="relative bg-background rounded-lg">
        {children}
      </div>
    </div>
  );
}; 