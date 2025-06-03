"use client";

import React from 'react';
import { AnimatedIcon } from '../ui/AnimatedIcon';
import { AnimationControls, MotionValue, motion } from 'framer-motion';
import { StepConfig } from './constants';

interface OrbitalStepProps {
  step: StepConfig;
  controls: AnimationControls;
  index: number;
  counterRotation: MotionValue<number>;
}

export default function OrbitalStep({ step, controls, index, counterRotation }: OrbitalStepProps) {
  return (
    <motion.div
      animate={controls}
      custom={step.title}
      style={{ rotate: counterRotation }}
      className="relative"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 mb-4 mx-auto">
        <AnimatedIcon
          icon={step.icon}
          size={32}
          color={step.color}
          hoverColor="#9945FF"
          delay={0.1 * index}
        />
      </div>
      <h2 className="text-lg font-orbitron text-white mb-2">
        {step.title}
      </h2>
      <p className="text-sm text-white/60 max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
}

