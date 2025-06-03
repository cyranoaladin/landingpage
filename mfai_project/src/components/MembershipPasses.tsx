"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Coins, Users, Rocket, Gift, Star, Brain, Zap, Lock, Crown, Award } from "lucide-react";

const passes = [
  {
    name: "Army Rank (Gold)",
    label: "NFT Access Pass – Lifetime",
    img: "/images/nft/gold-pass.gif",
    border: "border-yellow-400/60",
    price: "200 USDT",
    supply: "900 available",
    perks: [
      { icon: ShieldCheck, text: "Protocol Access" },
      { icon: TrendingUp, text: "+5% Staking Bonus" },
      { icon: Coins, text: "Neuro-Dividends™ (base share)" },
      { icon: Users, text: "Synaptic Governance™ Observer Role" },
      { icon: Gift, text: "Private Mentoring (group format)" },
      { icon: Zap, text: "Early Zyno Activation Track" },
      { icon: Lock, text: "Guaranteed Whitelist Access" },
      { icon: Star, text: "Lifetime Protocol Access" }
    ]
  },
  {
    name: "Admiral Rank (Platinum)",
    label: "NFT Access Pass – Lifetime",
    img: "/images/nft/platinum-pass.gif",
    border: "border-blue-400/60",
    price: "400 USDT",
    supply: "600 available",
    perks: [
      { icon: ShieldCheck, text: "Priority Protocol Access" },
      { icon: TrendingUp, text: "+10% Staking Bonus" },
      { icon: Coins, text: "Neuro-Dividends™ (enhanced share)" },
      { icon: Users, text: "Synaptic Governance™ Contributor Role" },
      { icon: Gift, text: "Private Mentoring (1:1 on rotation)" },
      { icon: Zap, text: "Zyno SaaS Pro Access (Starter Tier)" },
      { icon: Rocket, text: "Access to the Proof-of-Vision Incubator™" },
      { icon: Lock, text: "Guaranteed Whitelist (Multiple Rounds)" },
      { icon: Star, text: "Voting Power Boost (Double Weight)" },
      { icon: Star, text: "Lifetime Protocol Access" }
    ]
  },
  {
    name: "Alpha Rank (Diamond)",
    label: "NFT Access Pass – Lifetime",
    img: "/images/nft/diamond-pass.gif",
    border: "border-purple-400/60",
    price: "600 USDT",
    supply: "300 available",
    perks: [
      { icon: ShieldCheck, text: "Full Protocol + Governance Access" },
      { icon: TrendingUp, text: "+20% Staking Bonus" },
      { icon: Coins, text: "Neuro-Dividends™ (maximum share)" },
      { icon: Brain, text: "Synaptic Governance™ Voting Rights (triple boost)" },
      { icon: Gift, text: "1:1 Strategy Mentoring from Core Builders" },
      { icon: Zap, text: "Dedicated AI Co-Founder Track via Zyno (full customization)" },
      { icon: Rocket, text: "Early Access to Protocol Feature Drops" },
      { icon: Lock, text: "Guaranteed Access to All Rounds (Presale + Launchpad)" },
      { icon: Crown, text: "Priority Access to Incubation & Grants" },
      { icon: Award, text: "Private Governance Channel (Strategist Only)" },
      { icon: Star, text: "Lifetime Activation Passport" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function MembershipPasses() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white">
      <div className="container mx-auto px-4">
        {/* Nouveau titre et sous-titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 drop-shadow-[0_0_16px_#14F19566]"
          style={{ textShadow: "0 0 16px #9945FF44, 0 0 8px #14F19544" }}
        >
          Unlock Your Proof Pass™ — Activate Your Journey with Power
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl font-poppins text-white/80 text-center mb-6 max-w-2xl mx-auto"
        >
          The Proof Pass™ is your early access card to the Cognitive Activation Protocol™.<br /><br />
          It proves you're a first believer and grants you activation power, reputation weight, strategic tools, and long-term protocol influence.<br /><br />
          Available only during the Private Activation Round — limited edition, lifetime validity.
        </motion.p>

        {/* Grille des tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {passes.map((pass) => (
            <div
              key={pass.name}
              className="relative group"
            >
              <motion.div
                variants={cardVariants}
                className={`group bg-[#16161D] border-2 ${pass.border} rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transition-transform hover:scale-105 hover:shadow-[0_0_40px_#14F19599] hover:border-[#14F195]/80`}
                style={{ boxShadow: '0 0 0 transparent', transition: 'box-shadow 0.3s' }}
              >
                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                  <Image src={pass.img} alt={pass.name} width={128} height={128} className="rounded-xl shadow-lg" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-orbitron text-2xl font-bold text-white drop-shadow-[0_0_8px_#14F19544]">{pass.name}</span>
                  <span className="text-xs font-poppins px-3 py-1 rounded-full bg-gradient-to-r from-[#9945FF]/80 to-[#14F195]/80 text-white ml-2 uppercase tracking-wide font-semibold">
                    {pass.label}
                  </span>
                </div>
                <div className="font-orbitron text-lg text-[#14F195] font-bold mb-2">{pass.price}</div>
                <div className="text-xs text-zinc-400 mb-2">{pass.supply}</div>
                <ul className="text-left space-y-3 mb-4 mt-2">
                  {pass.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center text-white/80 font-poppins">
                      <perk.icon className="w-5 h-5 text-[#14F195] mr-2 flex-shrink-0" />
                      <span>{perk.text}</span>
                    </li>
                  ))}
                </ul>
                <Link href="https://mfai.app/nft/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-6 py-2 rounded-full text-white font-poppins bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-110 hover:shadow-[0_0_24px_#14F19599] transition-all">
                  Join the Activation Round
                </Link>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Footnote */}
        <p className="text-center text-zinc-400 text-sm font-poppins mt-8 italic">
          *Proof Pass™ on Solana — Limited Edition — Lifetime Validity*<br />
          All Proof Passes are on-chain activators designed to unlock your capital, voice, and velocity inside the MFAI ecosystem.<br />
          No speculation. Pure cognitive capital.
        </p>
      </div>
    </section>
  );
} 