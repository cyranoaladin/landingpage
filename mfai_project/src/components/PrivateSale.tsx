"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Flame, Scroll, Lock, Rocket, Unlock } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Synaptic Governance™ Early Access",
    text: "Get early rights to vote, propose, and co-govern the future of the protocol."
  },
  {
    icon: Flame,
    title: "Up to +20% Bonus",
    text: "Unlock bonus $MFAI based on your Proof Pass™ level. (Army +5%, Admiral +10%, Alpha +20%)"
  },
  {
    icon: Scroll,
    title: "Guaranteed Whitelist",
    text: "Phase 1 of the Public Activation Round™ is reserved for early buyers & pass holders."
  },
  {
    icon: Lock,
    title: "Locked-in Price",
    text: "This is the lowest price before the $MFAI token hits the market (Raydium, Jupiter)."
  },
  {
    icon: Rocket,
    title: "Proof-of-Vision Incubator™ Priority",
    text: "Get priority access to incubate, pitch, and fund your DAO-backed ventures."
  },
  {
    icon: Unlock,
    title: "Cognitive Lock™ Ready",
    text: "Be eligible for staking rewards, protocol activation, and contributor boosts."
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

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function PrivateSale() {
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
          The Private Activation Round™ is Live
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl font-poppins text-white/80 text-center mb-10 max-w-2xl mx-auto"
        >
          Get early access to the $MFAI token — the proof-token, fuel, and governance engine<br />
          of the Cognitive Activation Protocol™. Limited spots. Lifetime value.
        </motion.p>

        {/* Barre de progression */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-[#16161D] rounded-full h-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#9945FF] to-[#14F195]"
            />
          </div>
          <p className="text-center text-zinc-400 text-sm font-poppins mt-2">
            True Provers don't wait for the listing — they activate before the hype.
          </p>
        </div>

        {/* Cartes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="bg-[#16161D] rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-[0_0_40px_#14F19599] transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 mb-4">
                <card.icon className="w-8 h-8 text-[#14F195]" />
              </div>
              <h3 className="font-orbitron text-xl mt-2 mb-2">{card.title}</h3>
              <p className="font-poppins text-sm text-zinc-400">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="#activation-round" className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-105 hover:shadow-[0_0_24px_#14F19599] transition-all">
            Join the Activation Round
          </Link>
          <Link href="#proof-pass" className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-[#16161D] hover:scale-105 hover:shadow-[0_0_24px_#14F19599] transition-all ml-4">
            Learn More About Proof Pass Benefits
          </Link>
        </div>

        {/* Footnote */}
        <div className="mt-12 bg-[#11111A] border border-[#14F195]/30 rounded-lg px-6 py-5 inline-block max-w-xl mx-auto shadow-xl py-2" style={{ lineHeight: 1.7 }}>
          <p className="text-sm font-poppins text-white/80">
            🟢 $MFAI will only be tradable after the TGE<br />
            (TGE = Token Generation Event — Solana DEXs like Raydium & Jupiter)<br /><br />
            🛡️ Private Sale buyers secure their spot before public opens in 2 phases:<br />
            — Phase 1: Early Pass Holders<br />
            — Phase 2: FCFS for public<br /><br />
            🧾 All token vestings, allocations and emissions are on-chain,<br />
            via smart contracts deployed on Solana.
          </p>
        </div>
      </div>
    </section>
  );
} 