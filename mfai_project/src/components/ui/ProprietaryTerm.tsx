"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProprietaryTermProps {
  term: string;
  className?: string;
}

export function ProprietaryTerm({ term, className = "" }: ProprietaryTermProps) {
  return (
    <motion.span
      className={`inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {term}
    </motion.span>
  );
} 