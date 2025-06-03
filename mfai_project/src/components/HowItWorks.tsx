"use client";

import { motion } from "framer-motion";
import { Wallet, Layers, BadgeCheck, Rocket, Users } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Layers,
    title: "Learn",
    desc: "Start your Skillchain Mining™ journey and acquire high-value Web2, AI, and Web3 skills."
  },
  {
    icon: Rocket,
    title: "Build",
    desc: "Launch your own project or join a DAO-powered venture. Collaborate, create, and activate your vision."
  },
  {
    icon: BadgeCheck,
    title: "Prove",
    desc: "Earn Proof-of-Skill Tokens™ as on-chain credentials that validate your expertise and unlock new opportunities."
  },
  {
    icon: Wallet,
    title: "Activate",
    desc: "Transform your proven skills into capital and fuel your journey with $MFAI — the protocol's activation engine."
  },
  {
    icon: Users,
    title: "Scale",
    desc: "Shape the future through Synaptic Governance™. Vote, propose, and co-own the protocol as a DAO contributor."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white">
      <div className="container mx-auto px-4">
        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 drop-shadow-[0_0_16px_#14F19566]"
          style={{ textShadow: "0 0 16px #9945FF44, 0 0 8px #14F19544" }}
        >
          Your Activation Journey — From Prover to Activator to Scaler
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl font-poppins text-white/80 text-center mb-12 max-w-2xl mx-auto"
        >
          MFAI is not a platform — it's your launch protocol.<br/>
          Every action — learning, proving, mentoring, contributing —<br/>
          adds on-chain value to your identity and unlocks new opportunities.<br/>
          Here's how you rise through the Activation Stack.
        </motion.p>

        {/* Animated steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-6 justify-center mb-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="group flex-1 bg-[#16161D] rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/10 hover:border-[#14F195] transition-transform hover:scale-105 hover:shadow-[0_0_32px_#14F19555]"
            >
              <motion.div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#9945FF] to-[#14F195] group-hover:shadow-[0_0_24px_#14F19588]"
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-orbitron font-bold text-white drop-shadow-[0_0_8px_#14F19544]">{i + 1}</span>
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-2 text-white">
                {step.title}
              </h3>
              <p className="font-poppins text-white/70 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Narrative bonus */}
        <blockquote className="text-center text-lg md:text-xl font-poppins text-[#14F195] font-semibold italic max-w-2xl mx-auto mb-10 border-l-4 border-[#14F195] pl-4">
          "You don't pitch. You prove. And your proof becomes capital."
        </blockquote>

        {/* Final CTA */}
        <div className="flex justify-center">
          <Link href="#activation" className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-105 transition-all font-poppins text-lg">
            Start Your Activation
          </Link>
        </div>
      </div>
    </section>
  );
} 