// HeroSection.tsx
"use client";

import React from 'react';
import { Button } from '../ui/button';
import { ShieldCheck } from 'lucide-react';
import { ProprietaryTerm } from '../ui/ProprietaryTerm';

const heroContent = {
  title: "The First Cognitive Activation Protocol™",
  subtitle: "Transform your skills into capital with MFAI",
  description: "Not a course. Not a launchpad. A protocol that turns proof into capital, where learners become Sovereign Builders, and where contribution unlocks Neuro-Dividends™.",
  cta: {
    primary: "Start Skillchain Mining™",
    secondary: "Join Private Sale"
  },
  features: [
    "AI Co-Founder™ powered by Zyno",
    "Proof-of-Skill Tokens™",
    "Synaptic Governance™",
    "Neuro-Dividends™"
  ]
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-[#0B0B0F]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#181825] to-[#0B0B0F] opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
              Money Factory AI
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-300">
              {heroContent.title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              {heroContent.description}
            </p>

            {/* Key points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#16161D] p-6 rounded-xl border border-[#2A2A2A]">
                <ShieldCheck className="w-8 h-8 text-[#14F195] mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure</h3>
                <p className="text-gray-400">Built on Solana's secure infrastructure</p>
              </div>
              <div className="bg-[#16161D] p-6 rounded-xl border border-[#2A2A2A]">
                <ShieldCheck className="w-8 h-8 text-[#14F195] mb-4" />
                <h3 className="text-xl font-bold mb-2">Scalable</h3>
                <p className="text-gray-400">Designed for mass adoption</p>
              </div>
              <div className="bg-[#16161D] p-6 rounded-xl border border-[#2A2A2A]">
                <ShieldCheck className="w-8 h-8 text-[#14F195] mb-4" />
                <h3 className="text-xl font-bold mb-2">Sustainable</h3>
                <p className="text-gray-400">Long-term value creation</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold px-8 py-6 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              {heroContent.cta.primary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
