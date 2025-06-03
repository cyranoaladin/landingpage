"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Lightbulb, CheckCircle2, Wallet, Users } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Propose",
    description: "Submit your ideas, features, and enhancements through Synaptic Governance™",
  },
  {
    icon: CheckCircle2,
    title: "Vote",
    description: "Cast your vote with $MFAI tokens to approve major protocol decisions",
  },
  {
    icon: Wallet,
    title: "Fund",
    description: "Allocate DAO treasury resources to incubated projects and protocol upgrades",
  },
  {
    icon: Users,
    title: "Govern",
    description: "Participate in quarterly strategic votes and shape the protocol's future",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DAOGovernance() {
  return (
    <section id="dao" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#0B0B0F]/80 to-[#0B0B0F] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
            Synaptic Governance™: Own the Protocol
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Participate in the decentralized governance of Money Factory AI and shape the future of the Cognitive Activation Protocol™
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeIn}
              className="relative group"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-8 h-full border border-[#2A2A2A] transition-all duration-300 hover:border-[#9945FF]/50 hover:shadow-[0_0_30px_rgba(153,69,255,0.1)]">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-12 h-12 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(153,69,255,0.3)]">
                    <feature.icon 
                      className="w-full h-full text-white transition-all duration-300 group-hover:text-[#9945FF]" 
                      aria-label={`Icon ${feature.title}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          variants={fadeIn}
          className="text-center mt-16"
        >
          <Link
            href="/dao"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300"
          >
            <Bot className="w-5 h-5" />
            Join the Synaptic Governance™
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 