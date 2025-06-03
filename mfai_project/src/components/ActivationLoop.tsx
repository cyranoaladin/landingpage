"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Wrench, CheckCircle, Rocket, Globe } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    title: "Learn",
    text: "Start your Skillchain Mining™ journey with Zyno. Acquire high-value skills across Web2, Web3, and AI. Get instantly rewarded with Proof-of-Skill Tokens™ and unlock your first capital layer."
  },
  {
    icon: Wrench,
    title: "Build",
    text: "Launch your idea using guided canvases and DAO-powered templates. Collaborate, prototype, and publish your Proof-of-Vision profile. Build what you want to own."
  },
  {
    icon: CheckCircle,
    title: "Prove",
    text: "Validate your impact by mentoring, completing quests, or solving real challenges. Your skills are minted on-chain. Your growth earns you eligibility for Synaptic Governance™."
  },
  {
    icon: Rocket,
    title: "Activate",
    text: "Submit your project to the Proof-of-Vision Incubator™. Get DAO support, Zyno optimization, and capital injection via $MFAI. Your proof becomes value."
  },
  {
    icon: Globe,
    title: "Scale",
    text: "Stake, earn, and vote through Cognitive Lock™. Join the governance layer. Shape the evolution of the protocol with your long-term influence."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function ActivationLoop() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white">
      <div className="container mx-auto px-4">
        {/* Titre et sous-titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 drop-shadow-[0_0_16px_#14F19566]"
          style={{ textShadow: "0 0 16px #9945FF44, 0 0 8px #14F19544" }}
        >
          Your Activation Journey — From Skillchain to Sovereignty™
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl font-poppins text-white/80 text-center mb-10 max-w-2xl mx-auto"
        >
          MFAI is not a platform — it's your launch protocol.<br />
          Every action — learning, proving, mentoring, contributing —<br />
          adds on-chain value to your identity and unlocks new opportunities.<br /><br />
          Here's how you grow through the Activation Loop™:
        </motion.p>

        {/* Layout circulaire dynamique */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex flex-wrap justify-center gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              className="bg-[#16161D] rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-[0_0_40px_#14F19599] transition-all flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 mb-4">
                <step.icon className="w-8 h-8 text-[#14F195]" />
              </div>
              <h3 className="font-orbitron text-xl mt-2 mb-2">{index + 1}. {step.title}</h3>
              <p className="font-poppins text-sm text-zinc-400">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton central */}
        <div className="mt-12 text-center">
          <Link href="/onboarding" className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-105 hover:shadow-[0_0_24px_#14F19599] transition-all">
            Start Your Activation
          </Link>
        </div>

        {/* Footnote */}
        <p className="text-center text-zinc-400 text-sm font-poppins mt-8 italic">
          "You don't pitch. You prove.<br />
          And your proof becomes capital."
        </p>
      </div>
    </section>
  );
} 