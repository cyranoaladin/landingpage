"use client";

import React from 'react';
import { Brain, Flame, Shield, Rocket, LucideIcon, Lock, Users, Wallet } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { AnimatedCard } from '../ui/AnimatedCard';
import { AnimatedIcon } from '../ui/AnimatedIcon';

interface Utility {
  icon: LucideIcon;
  title: string;
  description: string;
}

const tokenUtilities: Utility[] = [
  {
    icon: Lock,
    title: "Cognitive Lock™",
    description: "Lock your $MFAI tokens to earn Neuro-Dividends™ and participate in Synaptic Governance™"
  },
  {
    icon: Users,
    title: "Synaptic Governance™",
    description: "Vote on protocol decisions and shape the future of MFAI"
  },
  {
    icon: Rocket,
    title: "Proof-of-Vision Incubator™",
    description: "Launch your ventures with community support and funding"
  },
  {
    icon: Wallet,
    title: "Neuro-Dividends™",
    description: "Earn rewards based on your contributions to the ecosystem"
  }
];

export default function TokenUtility() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            Token Utility
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover the benefits and use cases of the MFAI token
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenUtilities.map((utility, index) => (
            <AnimatedCard
              key={utility.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#14F195]/50 transition-all duration-300"
              delay={0.1 * index}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 mb-4">
                  <AnimatedIcon
                    icon={utility.icon}
                    size={32}
                    color="#14F195"
                    hoverColor="#9945FF"
                    delay={0.1 * (index + 1)}
                  />
                </div>
                <h3 className="font-orbitron text-xl mt-2 mb-2">{utility.title}</h3>
                <p className="font-poppins text-sm text-zinc-400">{utility.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 