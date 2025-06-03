"use client";

import React from "react";
import { Brain, Bot, Layers3, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { ProprietaryTerm } from "../ui/ProprietaryTerm";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Skillchain Mining™",
    description: "Earn as you learn. Every skill is validated and tokenized.",
    color: "from-[#9945FF] to-[#19AFFF]"
  },
  {
    icon: Bot,
    title: "AI Co-Founder™",
    description: "Zyno guides your journey. Not a chatbot. A real AI partner.",
    color: "from-[#19AFFF] to-[#14F195]"
  },
  {
    icon: Layers3,
    title: "Proof-of-Skill Tokens™",
    description: "Get credentials that prove your expertise. Unlock new opportunities.",
    color: "from-[#14F195] to-[#9945FF]"
  },
  {
    icon: ShieldCheck,
    title: "Proof-of-Vision Incubator™",
    description: "Launch your venture with community support and funding.",
    color: "from-[#9945FF] to-[#19AFFF]"
  },
  {
    icon: TrendingUp,
    title: "Neuro-Dividends™",
    description: "Earn rewards for growing the ecosystem.",
    color: "from-[#19AFFF] to-[#14F195]"
  },
  {
    icon: Zap,
    title: "Synaptic Governance™",
    description: "Shape the protocol. Vote. Build. Own.",
    color: "from-[#14F195] to-[#9945FF]"
  }
];

export default function FeaturesSection() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-b from-[#0B0B0F] to-[#181825]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4 drop-shadow-[0_0_16px_#14F19544]">
            The MFAI Ecosystem
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Discover the core pillars of the protocol. Learn. Prove. Build. Earn. Govern.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group p-8 rounded-2xl bg-[#181825] border border-white/10 shadow-xl hover:shadow-[0_0_40px_#14F19555] hover:border-[#14F195]/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"
                   style={{ backgroundImage: `linear-gradient(to right, ${feature.color})` }} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r mb-5 flex items-center justify-center shadow-lg"
                     style={{ backgroundImage: `linear-gradient(to right, ${feature.color})` }}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 