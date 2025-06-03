"use client";

import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  feature: string;
  mfai: boolean;
  web3: boolean;
  traditional: boolean;
}

const features: ComparisonFeature[] = [
  {
    feature: "On-chain Proof of Skills",
    mfai: true,
    web3: true,
    traditional: false
  },
  {
    feature: "AI-Powered Guidance",
    mfai: true,
    web3: false,
    traditional: false
  },
  {
    feature: "Direct Access to Funding",
    mfai: true,
    web3: true,
    traditional: false
  },
  {
    feature: "Community Governance",
    mfai: true,
    web3: true,
    traditional: false
  },
  {
    feature: "Tokenized Rewards",
    mfai: true,
    web3: true,
    traditional: false
  },
  {
    feature: "Decentralized Platform",
    mfai: true,
    web3: true,
    traditional: false
  },
  {
    feature: "Open Source",
    mfai: true,
    web3: true,
    traditional: false
  },
  {
    feature: "Personalized Learning",
    mfai: true,
    web3: false,
    traditional: true
  },
  {
    feature: "Basic Support",
    mfai: true,
    web3: true,
    traditional: true
  }
];

const comparisonPoints = [
  {
    feature: "Learning Approach",
    mfai: { value: "Skillchain Mining™", positive: true },
    traditional: { value: "Centralized courses", positive: false }
  },
  {
    feature: "Proof of Skills",
    mfai: { value: "Proof-of-Skill Tokens™", positive: true },
    traditional: { value: "Centralized certificates", positive: false }
  },
  {
    feature: "Governance",
    mfai: { value: "Synaptic Governance™", positive: true },
    traditional: { value: "Centralized control", positive: false }
  },
  {
    feature: "Rewards",
    mfai: { value: "Neuro-Dividends™", positive: true },
    traditional: { value: "Certificate of completion", positive: true }
  },
  {
    feature: "Support",
    mfai: { value: "AI Co-Founder™ (Zyno)", positive: true },
    traditional: { value: "Basic support", positive: false }
  }
];

export default function ComparisonSection() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            Why Choose MFAI?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Compare MFAI with traditional learning and funding platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-orbitron text-white mb-4">Features</h3>
            </AnimatedCard>
          </div>
          <div className="col-span-1">
            <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
                MFAI Protocol
              </h3>
            </AnimatedCard>
          </div>
          <div className="col-span-1">
            <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#19AFFF] to-[#14F195] mb-4">
                Web3 Platform
              </h3>
            </AnimatedCard>
          </div>
          <div className="col-span-1">
            <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-orbitron text-white mb-4">
                Traditional Platforms
              </h3>
            </AnimatedCard>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {features.map((feature) => (
            <div key={feature.feature} className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-white">{feature.feature}</p>
              </AnimatedCard>
              <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center justify-center">
                {feature.mfai ? (
                  <Check className="w-6 h-6 text-[#14F195]" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </AnimatedCard>
              <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center justify-center">
                {feature.web3 ? (
                  <Check className="w-6 h-6 text-[#19AFFF]" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </AnimatedCard>
              <AnimatedCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center justify-center">
                {feature.traditional ? (
                  <Check className="w-6 h-6 text-[#FFD700]" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 