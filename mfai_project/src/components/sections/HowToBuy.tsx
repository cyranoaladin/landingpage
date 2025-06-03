"use client";

import React from 'react';
import Link from "next/link";
import { ArrowRight, Wallet, Coins, Lock, Rocket, Zap, Brain } from "lucide-react";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedText } from "../ui/AnimatedText";
import { AnimatedCard } from "../ui/AnimatedCard";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Connect your Solana wallet to get started"
  },
  {
    icon: Coins,
    title: "Buy Tokens",
    description: "Purchase MFAI tokens during the private sale"
  },
  {
    icon: Lock,
    title: "Stake Tokens",
    description: "Stake your tokens to earn rewards"
  },
  {
    icon: Rocket,
    title: "Start Building",
    description: "Use your tokens to access platform features"
  }
];

const features = [
  {
    icon: Zap,
    title: "Fast & Secure",
    description: "Built on Solana for lightning-fast transactions and maximum security."
  },
  {
    icon: Brain,
    title: "Smart Contracts",
    description: "Audited smart contracts ensure the safety of your investment."
  }
];

export default function HowToBuy() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white relative overflow-hidden">
      <AnimatedBackground pattern="dots" opacity={0.1} speed={0.5} />
      
      <div className="container mx-auto px-4">
        <AnimatedSection
          direction="up"
          distance={50}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 drop-shadow-[0_0_16px_#14F19566]">
            <AnimatedText
              text="How to Buy"
              className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent"
              delay={0.2}
            />
          </h2>
          <p className="text-lg md:text-xl font-poppins text-white/80 max-w-2xl mx-auto">
            Follow these simple steps to participate in the Cognitive Activation Protocol™
            private sale and secure your $MFAI tokens.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <AnimatedCard
              key={step.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#14F195]/50 transition-all duration-300"
              delay={0.1 * index}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 mb-4">
                  <AnimatedIcon
                    icon={step.icon}
                    size={32}
                    color="#14F195"
                    hoverColor="#9945FF"
                    delay={0.1 * (index + 1)}
                  />
                </div>
                <h3 className="font-orbitron text-xl mt-2 mb-2">{step.title}</h3>
                <p className="font-poppins text-sm text-zinc-400">{step.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <AnimatedCard
              key={feature.title}
              className="bg-[#16161D]/50 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              delay={0.1 * (index + 4)}
              hoverScale={1.02}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20">
                  <AnimatedIcon
                    icon={feature.icon}
                    size={24}
                    color="#14F195"
                    hoverColor="#9945FF"
                    delay={0.1 * (index + 5)}
                  />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl mb-2">{feature.title}</h3>
                  <p className="font-poppins text-sm text-zinc-400">{feature.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedSection
          direction="up"
          distance={30}
          delay={0.8}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#activation-round"
              className="group inline-flex items-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-105 hover:shadow-[0_0_24px_#14F19599] transition-all"
            >
              Start Buying Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#proof-of-skill-economics"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#14F195] text-black font-semibold rounded-xl hover:bg-[#14F195]/90 transition-all duration-300"
              >
                View Proof-of-Skill Economics
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Roadmap
              </a>
            </div>
          </div>
          <p className="text-sm text-zinc-400 mt-4">
            Need help? Join our community on Discord or Telegram for support.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
} 