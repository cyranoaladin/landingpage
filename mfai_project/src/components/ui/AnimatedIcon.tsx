"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  color?: string;
  hoverColor?: string;
  delay?: number;
}

export function AnimatedIcon({
  icon: Icon,
  className = "",
  size = 24,
  color = "#14F195",
  hoverColor = "#9945FF",
  delay = 0
}: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.1, color: hoverColor }}
      className={className}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
} 