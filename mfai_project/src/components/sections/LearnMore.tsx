"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Brain, Rocket, Coins } from 'lucide-react';

const sections = [
  {
    title: "What is MFAI?",
    description: "Money Factory AI is the first Cognitive Activation Protocol™ that transforms your skills into capital. It's a Web3-native, AI-powered system that turns proof into capital and community contributions into value.",
    icon: Brain
  },
  {
    title: "Skillchain Mining™",
    description: "Learn and earn simultaneously. Our protocol rewards you for developing and proving your skills through a unique mining mechanism that creates value from your cognitive contributions.",
    icon: BookOpen
  },
  {
    title: "Proof-of-Skill Tokens™",
    description: "Earn verifiable credentials that represent your skills and contributions. These tokens serve as proof of your expertise and can be used within the ecosystem.",
    icon: Coins
  },
  {
    title: "Synaptic Governance™",
    description: "Participate in protocol decisions through a reputation-based voting system. Your contributions and expertise give you voting power in shaping the future of MFAI.",
    icon: Users
  },
  {
    title: "Neuro-Dividends™",
    description: "Earn rewards based on your contributions to the ecosystem. The more you contribute, the more you earn through our innovative reward mechanism.",
    icon: Rocket
  }
];

export default function LearnMore() {
  return (
    <section className="py-24 px-4 bg-[#0B0B0F]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">
            Learn More About MFAI
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover how MFAI is revolutionizing the future of work and value creation through our innovative protocol.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-[#181825] rounded-2xl p-8 border border-white/10 hover:border-[#14F195]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#14F195]/10 rounded-xl">
                  <section.icon className="w-6 h-6 text-[#14F195]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-white/60">{section.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/whitepaper.pdf"
            className="inline-flex items-center gap-2 text-[#14F195] hover:text-[#9945FF] transition-colors"
          >
            Read the full whitepaper
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 