"use client";

import React from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ProprietaryTerm } from "../ui/ProprietaryTerm";
import { Users, Wallet, CheckCircle, Loader2, Eye, BookOpen, Rocket, Globe, Star, Zap, Check, Clock, Hourglass } from "lucide-react";
import { motion } from "framer-motion";

const roadmapPhases = [
  {
    title: "Genesis",
    subtitle: "Kickoff & Foundations",
    items: [
      { state: 'done', icon: Users, text: "Core team formation (AI, blockchain, edu, design)" },
      { state: 'done', icon: Wallet, text: "Tokenomics, Synaptic Governance™ & NFT model" },
      { state: 'done', icon: CheckCircle, text: "Smart contract development & security audits" },
      { state: 'done', icon: Loader2, text: "Private sale preparation" },
      { state: 'progress', icon: Eye, text: "Community building & early access program" },
      { state: 'soon', icon: BookOpen, text: "Skillchain Mining™ platform development" },
      { state: 'soon', icon: Rocket, text: "Proof-of-Vision Incubator™ launch" },
      { state: 'soon', icon: Globe, text: "Global ambassador program" }
    ]
  },
  {
    title: "Activation",
    subtitle: "Launch & Growth",
    items: [
      { state: 'soon', icon: Wallet, text: "$MFAI dashboard + Cognitive Lock™ activation" },
      { state: 'soon', icon: Rocket, text: "Launchpad + Synaptic Governance™ funding system" },
      { state: 'soon', icon: Users, text: "Mint of Army, Admiral, Alpha access passes" },
      { state: 'soon', icon: Globe, text: "Global ambassador program" },
      { state: 'soon', icon: CheckCircle, text: "Public presale & TGE" },
      { state: 'soon', icon: Loader2, text: "Exchange listings & liquidity pools" },
      { state: 'soon', icon: Eye, text: "Partnership announcements" },
      { state: 'soon', icon: BookOpen, text: "Advanced Skillchain Mining™ features" },
      { state: 'soon', icon: Rocket, text: "Protocol-aligned venture accelerator" },
      { state: 'soon', icon: Globe, text: "PBW2025 (Paris Blockchain Week)" },
      { state: 'soon', icon: CheckCircle, text: "Hackathon showcase (April 2025)" }
    ]
  },
  {
    title: "Protocol Evolution",
    subtitle: "Scaling & Innovation",
    items: [
      { state: 'soon', icon: Globe, text: "Global Synaptic Governance™ Scale" },
      { state: 'soon', icon: CheckCircle, text: "Full Synaptic Governance™ (onchain)" },
      { state: 'soon', icon: Loader2, text: "Synaptic Governance™-funded regional hubs" },
      { state: 'soon', icon: Eye, text: "Advanced AI Co-Founder™ features" },
      { state: 'soon', icon: BookOpen, text: "Cross-chain Skillchain Mining™" },
      { state: 'soon', icon: Rocket, text: "Protocol-aligned venture accelerator" },
      { state: 'soon', icon: Users, text: "Global builder community expansion" },
      { state: 'soon', icon: Wallet, text: "Advanced Neuro-Dividends™ system" }
    ]
  }
];

const phaseIcons = [Star, Rocket, Zap];
const statusIcons = { done: Check, progress: Clock, soon: Hourglass };

export default function RoadmapSection() {
  return (
    <AnimatedSection className="py-24 bg-[#0B0B0F]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4 drop-shadow-[0_0_16px_#14F19544]">
            Protocol Evolution
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Our journey to revolutionize skill development and project creation through the <ProprietaryTerm term="Cognitive Activation Protocol™" />
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          {/* Ligne centrale animée */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-[#9945FF] via-[#19AFFF] to-[#14F195] opacity-40 z-0 animate-pulse" style={{ minHeight: '100%' }} />
          {roadmapPhases.map((phase, index) => {
            const Icon = phaseIcons[index] || Star;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 48, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.18 }}
                className="relative w-full max-w-xl mx-auto mb-20 last:mb-0 flex flex-col items-center"
              >
                {/* Halo/glow derrière la carte */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-radial from-[#14F19555] to-transparent rounded-full blur-2xl opacity-70 z-0" />
                {/* Badge de phase avec icône */}
                <div className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full text-xl font-bold text-white shadow-2xl uppercase tracking-wide mb-6 z-10 border-2 border-white/10">
                  <Icon className="w-7 h-7 text-white drop-shadow-[0_0_8px_#14F19599] animate-bounce" />
                  {phase.title}
                </div>
                <div className="relative z-10 w-full bg-white/10 backdrop-blur-2xl rounded-3xl border border-[#14F195]/30 shadow-2xl p-10 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold font-orbitron text-white mb-2 tracking-tight">
                    {phase.subtitle}
                  </h3>
                  <ul className="space-y-6 mt-8 w-full">
                    {phase.items.map((item, itemIndex) => {
                      const StatusIcon = statusIcons[item.state as 'done' | 'progress' | 'soon'] || Check;
                      return (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.07 }}
                          className="flex items-center gap-5 w-full group"
                        >
                          {/* Icone avec cercle gradient + effet pulse */}
                          <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#9945FF]/40 to-[#14F195]/40 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_24px_#14F19599] transition-all duration-300 animate-pulse">
                            <item.icon className="w-7 h-7 text-[#14F195]" />
                          </span>
                          {/* Texte + badge de statut */}
                          <span className="flex-1 text-left text-white/90 font-poppins text-lg">
                            {item.text}
                          </span>
                          <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ml-2
                            ${item.state === 'done' ? 'bg-[#14F195]/20 text-[#14F195]' : ''}
                            ${item.state === 'progress' ? 'bg-[#FFD93D]/20 text-[#FFD93D]' : ''}
                            ${item.state === 'soon' ? 'bg-white/10 text-white/60' : ''}
                          `}>
                            <StatusIcon className="w-4 h-4" />
                            {item.state === 'done' && 'Done'}
                            {item.state === 'progress' && 'In Progress'}
                            {item.state === 'soon' && 'Soon'}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
                {/* Point lumineux entre les phases */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-6 bg-gradient-radial from-[#14F195] to-transparent rounded-full blur-md opacity-80 z-20 animate-pulse" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
} 