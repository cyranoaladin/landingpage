"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle, Loader2, Eye, BookOpen, Rocket, Globe, Users, Wallet, 
  Star, UserCheck, Layers, Award, Smartphone, Brain, Shield, 
  Crown, FileText, Download, Sparkles, Zap, Trophy, Target
} from "lucide-react";
import CustomTooltip from "./tooltip";

type RoadmapState = 'done' | 'progress' | 'soon';
type PhaseStatus = RoadmapState;

const phases = [
  {
    phase: 0,
    title: "Genesis of the Activation Protocol",
    subtitle: "Building the Foundation",
    status: 'done' as PhaseStatus,
    icon: Brain,
    blocks: [
      { state: 'done' as RoadmapState, icon: BookOpen, text: "Genesis of Money Factory AI" },
      { state: 'done' as RoadmapState, icon: Users, text: "Core team formation (AI, blockchain, edu, design)" },
      { state: 'done' as RoadmapState, icon: Wallet, text: "Tokenomics, Synaptic Governance™ & NFT model" },
      { state: 'done' as RoadmapState, icon: Star, text: "Zyno AI ideation & prototyping" },
      { state: 'done' as RoadmapState, icon: FileText, text: "Whitepaper & technical documentation" }
    ]
  },
  {
    phase: 1,
    title: "Proving the Stack",
    subtitle: "From Concept to Reality",
    status: 'progress' as PhaseStatus,
    icon: Shield,
    blocks: [
      { state: 'progress' as RoadmapState, icon: Layers, text: "MVP frontend & smart contract integration" },
      { state: 'done' as RoadmapState, icon: Award, text: "Hackathon showcase (April 2025)" },
      { state: 'done' as RoadmapState, icon: Globe, text: "Presence @ Paris Blockchain Week" },
      { state: 'progress' as RoadmapState, icon: Wallet, text: "Finalization of Private Sale + NFT sale" },
      { state: 'progress' as RoadmapState, icon: UserCheck, text: "Bounty campaign (Zealy) pre-launch" },
      { state: 'progress' as RoadmapState, icon: Target, text: "Smart contract audits & security checks" }
    ]
  },
  {
    phase: 2,
    title: "Early Believers Activation",
    subtitle: "From Early Access to Synaptic Governance™ Power",
    status: 'soon' as PhaseStatus,
    icon: Crown,
    blocks: [
      { state: 'soon' as RoadmapState, icon: Wallet, text: "Private Sale of $MFAI (May)" },
      { state: 'soon' as RoadmapState, icon: Users, text: "Mint of Army, Admiral, Alpha access passes" },
      { state: 'soon' as RoadmapState, icon: Award, text: "Presale (2 Phases: whitelist ➜ FCFS)" },
      { state: 'soon' as RoadmapState, icon: Star, text: "Beta test Zyno + Academy" },
      { state: 'soon' as RoadmapState, icon: CheckCircle, text: "Synaptic Governance™ Light (snapshot) + voting" },
      { state: 'soon' as RoadmapState, icon: UserCheck, text: "Ambassador bounty program launch" },
      { state: 'soon' as RoadmapState, icon: Trophy, text: "Early contributor rewards distribution" }
    ]
  },
  {
    phase: 3,
    title: "Token Launch & Ownership Expansion",
    subtitle: "Live & Tokenized",
    status: 'soon' as PhaseStatus,
    icon: Zap,
    blocks: [
      { state: 'soon' as RoadmapState, icon: Rocket, text: "TGE (Post-Presale): listing on Raydium, Jupiter" },
      { state: 'soon' as RoadmapState, icon: Wallet, text: "$MFAI dashboard + staking activation" },
      { state: 'soon' as RoadmapState, icon: BookOpen, text: "Expanded learning tracks: Web2 Business Mastery, AI & Automation Engine, Web3 Business Architecture, Startup Launch System" },
      { state: 'soon' as RoadmapState, icon: Rocket, text: "Launchpad + Synaptic Governance™ funding system" },
      { state: 'soon' as RoadmapState, icon: Globe, text: "Strategic partnerships (EdTech, Layer2s, CEX)" },
      { state: 'soon' as RoadmapState, icon: Sparkles, text: "Enhanced Zyno AI features & integrations" }
    ]
  },
  {
    phase: 4,
    title: "Global Synaptic Governance™ Scale",
    subtitle: "Governed by You",
    status: 'soon' as PhaseStatus,
    icon: Globe,
    blocks: [
      { state: 'soon' as RoadmapState, icon: Smartphone, text: "Mobile App onboarding" },
      { state: 'soon' as RoadmapState, icon: Users, text: "Global ambassador program" },
      { state: 'soon' as RoadmapState, icon: CheckCircle, text: "Full Synaptic Governance™ (onchain)" },
      { state: 'soon' as RoadmapState, icon: Globe, text: "Synaptic Governance™-funded regional hubs" },
      { state: 'soon' as RoadmapState, icon: Rocket, text: "Layer2/Appchain R&D" },
      { state: 'soon' as RoadmapState, icon: Crown, text: "Advanced NFT membership tiers" }
    ]
  }
];

const stateBadge = {
  done: { icon: <CheckCircle className="w-5 h-5 text-[#14F195]" />, label: "Accomplished", description: "This milestone has been completed" },
  progress: { icon: <Loader2 className="w-5 h-5 text-[#9945FF] animate-spin" />, label: "In Progress", description: "Currently being worked on" },
  soon: { icon: <Eye className="w-5 h-5 text-zinc-400" />, label: "Coming Soon", description: "Planned for future implementation" }
};

const phaseStatus: Record<PhaseStatus, string> = {
  done: "✅",
  progress: "⚙️",
  soon: "🔮"
};

export default function Roadmap() {
  return (
    <section className="py-24 bg-[#0B0B0F] text-white" id="roadmap" aria-label="Project Roadmap">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 drop-shadow-[0_0_16px_#14F19566]"
        >
          The Activation Roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl font-poppins text-white/80 text-center mb-12 max-w-2xl mx-auto"
        >
          From Genesis to Global Synaptic Governance™ — Proof, Capital, Ownership.
        </motion.p>

        {/* Progress Indicator */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-[#14F195]/30 transition-all duration-300"
                style={{
                  backgroundColor: phase.status === 'done' ? '#14F195' : phase.status === 'progress' ? '#9945FF' : '#14F19530'
                }}
              />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#14F195]/30 ml-4 md:ml-12">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="mb-16 pl-8 relative"
            >
              {/* Phase marker */}
              <div 
                className="absolute -left-7 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195] flex items-center justify-center font-orbitron text-lg font-bold text-white shadow-lg border-2 border-[#0B0B0F]"
                role="presentation"
              >
                {phase.phase}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <phase.icon className="w-8 h-8 text-[#14F195]" />
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white flex items-center gap-2">
                  {phase.title}
                  <span className="text-2xl">{phaseStatus[phase.status]}</span>
                </h3>
              </div>
              <div className="text-[#14F195] font-poppins mb-4 pl-11">{phase.subtitle}</div>
              {/* Blocs de la phase */}
              <div className="flex flex-col gap-4 md:gap-6">
                {phase.blocks.map((block, j) => (
                  <motion.div
                    key={block.text}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: j * 0.1 }}
                    className="flex items-center gap-4 bg-[#181825] rounded-xl p-5 shadow-lg border border-white/10 hover:border-[#14F195] transition-all hover:scale-[1.03]"
                    role="article"
                  >
                    <CustomTooltip content={stateBadge[block.state].description}>
                      <div className="flex flex-col items-center gap-1 min-w-[40px] cursor-help">
                        {stateBadge[block.state].icon}
                        <block.icon className="w-6 h-6 text-[#9945FF]" aria-hidden="true" />
                      </div>
                    </CustomTooltip>
                    <div className="flex-1 text-left">
                      <div className="font-orbitron text-base md:text-lg text-white font-bold mb-1 flex items-center gap-2">
                        {block.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
          <Link 
            href="#whitepaper" 
            className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-105 transition-all font-poppins text-lg"
            aria-label="Read the whitepaper"
          >
            Explore Whitepaper
          </Link>
          <Link 
            href="/roadmap.pdf" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-[#181825] hover:bg-[#1f1f2e] transition-all font-poppins text-lg border border-white/10"
            aria-label="Download Strategic Roadmap"
          >
            <Download className="w-5 h-5" />
            Download Roadmap
          </Link>
        </div>
      </div>
    </section>
  );
} 