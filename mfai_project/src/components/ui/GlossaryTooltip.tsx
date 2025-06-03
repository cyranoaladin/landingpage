// GlossaryTooltip.tsx - Composant amélioré
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlossaryTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export default function GlossaryTooltip({ term, definition, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="border-b border-dashed border-primary cursor-help">
        {children}
      </span>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 rounded-lg bg-background-light/95 backdrop-blur-md border border-primary/30 shadow-glow-primary"
          >
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-orbitron font-bold text-primary">{term}</h4>
              <p className="text-xs font-poppins text-white/80">{definition}</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-background-light border-r border-b border-primary/30"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
