"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, BookOpen, BadgeCheck, Users, Bot } from "lucide-react";

const steps = [
  {
    title: "Onboarding",
    description: "Connect, claim your NFT Pass, and meet Zyno AI — your protocol co-founder.",
    icon: Bot,
    color: "from-[#9945FF] to-[#14F195]"
  },
  {
    title: "Skill Mining",
    description: "Complete Academy Quests and earn Proof-of-Skill NFTs.",
    icon: BookOpen,
    color: "from-[#14F195] to-[#9945FF]"
  },
  {
    title: "NFT Mint",
    description: "Tokenize your skills and achievements on-chain.",
    icon: BadgeCheck,
    color: "from-[#9945FF] to-[#14F195]"
  },
  {
    title: "Project Launch",
    description: "Activate your business idea with Launchpad tools and community support.",
    icon: Rocket,
    color: "from-[#14F195] to-[#9945FF]"
  },
  {
    title: "DAO Governance",
    description: "Shape the protocol. Vote, propose, and co-own what you build.",
    icon: Users,
    color: "from-[#9945FF] to-[#14F195]"
  }
];

export default function CognitiveJourney() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1A1A22]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#14F195]"
        >
          Cognitive Activation Journey
        </motion.h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 md:gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:border-[#14F195]/60 transition-all duration-300`}
            >
              <div className={`bg-gradient-to-br ${step.color} p-4 rounded-full mb-3`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2 font-manrope text-center">{step.title}</h3>
              <p className="text-white/70 text-center text-base font-poppins">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block w-2 h-16 bg-gradient-to-b from-[#9945FF] to-[#14F195] mx-auto my-2 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
