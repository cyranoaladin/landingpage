 "use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Coins, Users, Rocket, ShieldCheck, Gift } from "lucide-react";

const utilities = [
  {
    title: "Cognitive Access",
    description: "Unlock premium AI features, advanced quests, and real-time mentorship with $MFAI.",
    icon: Brain,
    color: "from-[#9945FF]/30 to-[#14F195]/10",
    border: "border-[#9945FF]/40"
  },
  {
    title: "Protocol Rewards",
    description: "Earn $MFAI for every contribution, quest, proposal, or successful activation.",
    icon: Coins,
    color: "from-[#14F195]/30 to-[#9945FF]/10",
    border: "border-[#14F195]/40"
  },
  {
    title: "Governance Power",
    description: "Vote, propose, and shape the protocol’s evolution. Builders govern with $MFAI.",
    icon: Users,
    color: "from-[#9945FF]/30 to-[#14F195]/10",
    border: "border-[#9945FF]/40"
  },
  {
    title: "Builder Launchpad",
    description: "Access exclusive tools, grants, and launch support for your project.",
    icon: Rocket,
    color: "from-[#14F195]/30 to-[#9945FF]/10",
    border: "border-[#14F195]/40"
  },
  {
    title: "Staking Yield",
    description: "Stake $MFAI to earn yield and boost your cognitive access tier.",
    icon: ShieldCheck,
    color: "from-[#9945FF]/30 to-[#14F195]/10",
    border: "border-[#9945FF]/40"
  },
  {
    title: "Community Perks",
    description: "Get early access to events, drops, and exclusive builder experiences.",
    icon: Gift,
    color: "from-[#14F195]/30 to-[#9945FF]/10",
    border: "border-[#14F195]/40"
  }
];

export default function TokenUtility() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#191926]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#14F195]"
        >
          Utilities of $MFAI
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {utilities.map((util, idx) => (
            <motion.div
              key={util.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`bg-white/5 ${util.border} border rounded-xl p-8 flex flex-col gap-4 shadow-lg hover:scale-105 hover:border-[#14F195]/60 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-2">
                <util.icon className="w-8 h-8 text-[#14F195]" />
                <span className="font-bold text-white text-lg font-manrope">{util.title}</span>
              </div>
              <p className="text-white/70 font-poppins text-base">
                {util.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}