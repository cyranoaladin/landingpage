"use client";

import { motion } from "framer-motion";
import { Bot, BookOpen, BadgeCheck, Rocket, Coins, Users } from "lucide-react";

const stackItems = [
  {
    title: "Zyno AI Co-Founder",
    description: "Get real-time guidance, monetization tips, and project audits with your personal AI mentor.",
    icon: Bot,
    color: "from-[#9945FF]/20 to-[#14F195]/5",
    borderColor: "border-[#9945FF]/30"
  },
  {
    title: "Academy Quests – Gamified Learning",
    description: "Level up Web2 & Web3 skills through immersive quests and micro-challenges.",
    icon: BookOpen,
    color: "from-[#14F195]/20 to-[#9945FF]/5",
    borderColor: "border-[#14F195]/30"
  },
  {
    title: "Skill Credentials – On-Chain Proof",
    description: "Mint dynamic credentials as NFTs. Showcase what you know, not just what you studied.",
    icon: BadgeCheck,
    color: "from-[#9945FF]/20 to-[#14F195]/5",
    borderColor: "border-[#9945FF]/30"
  },
  {
    title: "Launchpad Access – From Idea to MVP",
    description: "Bring your project to life with DAO support, builder grants, and mentorship.",
    icon: Rocket,
    color: "from-[#14F195]/20 to-[#9945FF]/5",
    borderColor: "border-[#14F195]/30"
  },
  {
    title: "$MFAI Rewards – Earn as You Grow",
    description: "Every mission, answer, and milestone brings token rewards and cognitive access upgrades.",
    icon: Coins,
    color: "from-[#9945FF]/20 to-[#14F195]/5",
    borderColor: "border-[#9945FF]/30"
  },
  {
    title: "DAO Loop – Own What You Build",
    description: "Vote, propose, fund and govern. MFAI is owned and shaped by its community.",
    icon: Users,
    color: "from-[#14F195]/20 to-[#9945FF]/5",
    borderColor: "border-[#14F195]/30"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Experience() {
  return (
    <section className="relative py-24 bg-[#0C0C12] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white leading-snug mb-4">
            The Activation Stack
          </h2>
          <p className="text-lg md:text-xl font-poppins text-white/70 mb-2">
            From Skillchains to Sovereignty — The Activation Stack of MFAI
          </p>
          <p className="text-xl md:text-2xl font-poppins text-white/80">
            From Cognitive Activation to On-Chain Capital — Powered by the Protocol
          </p>
        </motion.div>

        {/* Stack component grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -8 }}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className={`bg-gradient-to-b ${item.color} backdrop-blur-sm border ${item.borderColor} rounded-2xl p-8 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(153,69,255,0.2)]`}>
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      boxShadow: "0 0 20px rgba(153, 69, 255, 0.5), 0 0 40px rgba(20, 241, 149, 0.3)"
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold font-orbitron text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-poppins">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 