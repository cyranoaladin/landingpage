"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomTooltip from "./tooltip";
import { Shield } from "lucide-react";

const poweredBy = [
  {
    name: "Solana",
    logo: "/images/partners/solana.svg",
    description: "SPL token protocol",
    tooltip: "Building on Solana's high-performance blockchain"
  },
  {
    name: "Metaplex",
    logo: "/images/partners/metaplex.png",
    description: "NFT pass infrastructure",
    tooltip: "Leveraging Metaplex for NFT membership passes"
  },
  {
    name: "Google Cloud",
    logo: "/images/partners/google-cloud.webp",
    description: "Zyno AI backend & APIs",
    tooltip: "Powered by Google Cloud's AI infrastructure"
  },
  {
    name: "Solana Pay",
    logo: "/images/partners/solana-pay.svg",
    description: "Web3 payment integration",
    tooltip: "Seamless NFT checkout experience"
  },
  {
    name: "Zealy",
    logo: "/images/partners/zealy.jpeg",
    description: "Community engagement & quests",
    tooltip: "Gamified community growth on Zealy"
  }
];

const integratedWith = [
  {
    name: "Jupiter",
    logo: "/images/partners/jupiter.jpg",
    description: "DEX aggregator",
    tooltip: "Planned integration post-TGE"
  },
  {
    name: "Raydium",
    logo: "/images/partners/raydium.svg",
    description: "Targeted for listing",
    tooltip: "Planned listing post-token launch"
  },
  {
    name: "Blink",
    logo: "/images/partners/blinksonsolana.png",
    description: "Solana checkout integration",
    tooltip: "Streamlined payment processing"
  },
  {
    name: "Rainbow",
    logo: "/images/partners/rainbow.png",
    description: "Wallet integration",
    tooltip: "Seamless on-chain wallet experience"
  },
  {
    name: "DexTools",
    logo: "/images/partners/dextool.png",
    description: "Real-time market analytics",
    tooltip: "Token charts and liquidity data on DEXTools"
  },
  {
    name: "CoinGecko",
    logo: "/images/partners/coingecko.png",
    description: "Token tracking",
    tooltip: "Real-time token data via CoinGecko API"
  }
];

const recognizedBy = [
  {
    name: "Superteam France",
    logo: "/images/partners/superteam_france.jpeg",
    description: "Grant recipient",
    tooltip: "Supported via grant program by Superteam France"
  },
  {
    name: "Colosseum",
    logo: "/images/partners/colesseum.webp",
    description: "Hackathon participation",
    tooltip: "Active participant in Solana hackathons"
  },
  {
    name: "Bizthon Hackathon",
    logo: "/images/partners/bizthon.png",
    description: "Solana Track - Hackathon PBW 2025",
    tooltip: "Participated in Bizthon's Solana hackathon during PBW (6-7 April 2025)"
  },
  {
    name: "PBW 2025",
    logo: "/images/partners/pbw.jpg",
    description: "Paris Blockchain Week (8-10 April)",
    tooltip: "Invited as Pro Devs to PBW 2025 — ecosystem showcase & networking"
  },
  {
    name: "Codigo",
    logo: "/images/partners/codigo_logo.svg",
    description: "Beta testing & workshop",
    tooltip: "Beta tester access via workshop"
  }
];

const tscopPartner = {
  name: "T-Scop",
  logo: "/images/partners/tscop.png",
  description: "Ensuring protocol security, smart contract audits, regulatory compliance, and legal framework alignment for the MFAI ecosystem. Your trusted partner for blockchain security and compliance.",
  tooltip: "Smart contract audit, blockchain compliance & legal monitoring"
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function BackersAndPartners() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0B0B0F] to-[#181825]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-center mb-4 drop-shadow-[0_0_16px_#14F19566]"
        >
          Infrastructure & Ecosystem Support
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="my-20 flex justify-center"
        >
          <CustomTooltip content={tscopPartner.tooltip}>
            <div className="flex flex-col items-center bg-gradient-to-b from-[#14F195]/10 to-transparent border border-[#14F195]/40 rounded-2xl p-10 shadow-lg hover:shadow-[0_0_30px_rgba(20,241,149,0.2)] transition-all duration-300 group max-w-md">
              <div className="relative">
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#14F195] text-black text-xs font-bold py-1 px-3 rounded-full flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Official Security Partner
                </span>
                <div className="w-48 h-48 relative mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={tscopPartner.logo} 
                    alt={tscopPartner.name} 
                    fill
                    className="object-contain drop-shadow-[0_0_12px_rgba(20,241,149,0.3)]" 
                  />
                </div>
              </div>
              <div className="font-bold text-white text-lg md:text-xl mb-2 text-center">{tscopPartner.name}</div>
              <div className="text-sm md:text-base text-center text-white/80 font-medium max-w-sm mx-auto">{tscopPartner.description}</div>
            </div>
          </CustomTooltip>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold text-center mb-2"
        >
          Powered by Proven Infrastructure
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mt-10 mb-16"
        >
          {poweredBy.map((partner, index) => (
            <CustomTooltip key={partner.name} content={partner.tooltip}>
              <motion.div 
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 bg-[#181825]/40 rounded-xl p-5 border border-white/5 group-hover:border-[#14F195]/30 transition-all duration-300">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={160} 
                    height={160} 
                    className="object-contain filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(20,241,149,0.5)] transition-all duration-300" 
                  />
                </div>
                <div className="font-bold text-white text-lg md:text-xl">{partner.name}</div>
                <div className="text-sm md:text-base text-white/60">{partner.description}</div>
              </motion.div>
            </CustomTooltip>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold text-center mb-2"
        >
          Integrated with the Web3 Ecosystem
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-10 mb-16"
        >
          {integratedWith.map((partner, index) => (
            <CustomTooltip key={partner.name} content={partner.tooltip}>
              <motion.div 
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mb-4 bg-[#181825]/40 rounded-xl p-5 border border-white/5 group-hover:border-[#9945FF]/30 transition-all duration-300">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={140} 
                    height={140} 
                    className="object-contain filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(153,69,255,0.5)] transition-all duration-300" 
                  />
                </div>
                <div className="font-bold text-white text-lg md:text-xl">{partner.name}</div>
                <div className="text-sm md:text-base text-white/60">{partner.description}</div>
              </motion.div>
            </CustomTooltip>
          ))}
        </motion.div>

        <div className="mt-16 md:mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold text-center mb-2"
          >
            Recognized by the Community
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-white/80 text-center mb-8 md:mb-12 max-w-2xl mx-auto font-poppins"
          >
            From grants and hackathons to token tracking — our journey is supported by respected players in the ecosystem.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            {recognizedBy.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center group"
              >
                <CustomTooltip content={item.tooltip}>
                  <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mb-4 bg-[#181825]/40 rounded-xl p-5 border border-white/5 group-hover:border-white/20 transition-all duration-300">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="object-contain filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
                    />
                  </div>
                </CustomTooltip>
                <div className="font-bold text-white text-lg md:text-xl">{item.name}</div>
                <p className="text-sm md:text-base text-white/60 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 