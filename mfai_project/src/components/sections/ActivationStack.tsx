"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Eye, Users, Gift, Lock, Bot,
  Book, Code, CheckCircle, Zap, ArrowUpRight, DollarSign
} from 'lucide-react';

const activationStack = [
  // ——— Les 6 items MFAI originaux ———
  {
    title: "Skillchain Mining™",
    description: "A new way to learn where every completed Skillchain™ Segment generates on-chain proof and earns $MFAI tokens — turning learning into a source of income.",
    icon: Brain,
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Sovereign Builders",
    description: "Join a community of active contributors who are building the future of the protocol — from developers to mentors and ecosystem builders.",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Neuro-Dividends™",
    description: "Rewards based on how much value you bring to the protocol — through content, mentoring, feedback, and more.",
    icon: Gift,
    color: "from-cyan-500 to-teal-500"
  },
  {
    title: "AI Co-Founder™",
    description: "Zyno guides your entire journey — from skill activation to token launch. It's not a chatbot. It's a strategic AI co-founder.",
    icon: Bot,
    color: "from-teal-500 to-emerald-500"
  },
  {
    title: "Cognitive Lock™",
    description: "Lock your tokens to earn yields and unlock additional protocol benefits — the longer you lock, the more you earn.",
    icon: Lock,
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Synaptic Governance™",
    description: "Participate in Synaptic Governance™ to drive protocol evolution and expand your impact — scaling both your project and earnings.",
    icon: Eye,
    color: "from-green-500 to-lime-500"
  },

  // ——— La boucle narrative MFAI ———
  {
    title: "Learn",
    description: "Acquire foundational skills on Money Factory AI and earn on-chain proof every time you complete a module — building your cognitive capital.",
    icon: Book,
    color: "#8C30F5"
  },
  {
    title: "Build",
    description: "Use your earned $MFAI tokens to bootstrap real projects on-chain, from smart contracts to decentralized apps.",
    icon: Code,
    color: "#2EA3F2"
  },
  {
    title: "Prove",
    description: "Showcase your achievements with verifiable on-chain credentials to gain reputation, community trust, and governance power.",
    icon: CheckCircle,
    color: "#3ECC85"
  },
  {
    title: "Activate",
    description: "Stake your $MFAI and cognitive proof to unlock advanced protocol features, exclusive grants, and Synaptic Governance™ roles.",
    icon: Zap,
    color: "#F2C12E"
  },
  {
    title: "Scale",
    description: "Participate in Synaptic Governance to drive protocol evolution and expand your impact — scaling both your project and earnings.",
    icon: ArrowUpRight,
    color: "#E85A4F"
  },
  {
    title: "Monetize",
    description: "Convert your skills into profit: withdraw, reinvest, or stake your $MFAI gains to fuel the next cycle of learning and building.",
    icon: DollarSign,
    color: "#4AB04A"
  }
];

export default function ActivationStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            Activation Stack
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            A comprehensive suite of tools and mechanisms designed to power the future of decentralized learning and building
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activationStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#14F195]/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/30 via-[#19AFFF]/30 to-[#14F195]/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon 
                  size={32} 
                  className="transition-colors duration-300"
                  style={{ color: item.color }} 
                />
              </div>
              <h3 className="text-xl font-orbitron text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9945FF] group-hover:to-[#14F195] transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
