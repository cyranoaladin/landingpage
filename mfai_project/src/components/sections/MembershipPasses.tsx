"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '../ui/AnimatedSection';

const membershipTiers = [
  {
    name: "Gold Pass",
    price: "200 USDT",
    features: [
      "Basic Neuro-Dividends™",
      "Access to Skillchain Mining™",
      "Synaptic Governance™ Observer Role",
      "Basic Cognitive Lock™ rewards"
    ],
    icon: "Gold"
  },
  {
    name: "Platinum Pass",
    price: "400 USDT",
    features: [
      "Enhanced Neuro-Dividends™",
      "Priority Skillchain Mining™",
      "Synaptic Governance™ Contributor Role",
      "Enhanced Cognitive Lock™ rewards",
      "Guaranteed Access to All Rounds"
    ],
    icon: "Platinum"
  },
  {
    name: "Diamond Pass",
    price: "600 USDT",
    features: [
      "Maximum Neuro-Dividends™",
      "VIP Skillchain Mining™",
      "Synaptic Governance™ Leader Role",
      "Maximum Cognitive Lock™ rewards",
      "Guaranteed Access to All Rounds",
      "Exclusive Mentoring Sessions"
    ],
    icon: "Diamond"
  }
];

export default function MembershipPasses() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#1C1C22] to-[#0B0B0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            Membership Passes
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose your level of access and benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`group bg-[#16161D] border-2 border-[#FFD700] rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#FFD70099]`}
            >
              <div className="w-32 h-32 mb-6 flex items-center justify-center">
                <Image 
                  src={`https://i.ibb.co/gMxfZGfr/${tier.icon}.gif`} 
                  alt={tier.name} 
                  width={128} 
                  height={128} 
                  className="rounded-xl shadow-lg object-contain" 
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-orbitron text-2xl font-bold text-white">{tier.name}</span>
              </div>
              <div className="font-orbitron text-lg text-[#14F195] font-bold mb-2">{tier.price}</div>
              <ul className="text-left list-disc list-inside space-y-2 mb-4 mt-2 max-w-xs mx-auto">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-white/80 font-poppins pl-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 