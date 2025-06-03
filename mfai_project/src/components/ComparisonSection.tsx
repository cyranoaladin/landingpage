"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { CognitiveActivationProtocol } from "./GlossaryTooltip";

// Nouvelle structure de données pour la comparaison, en anglais et alignée sur la nouvelle narrative
const comparisonData = [
  {
    category: "Learning Approach",
    traditional: { value: "Passive content consumption", positive: false },
    platform: { value: "Interactive content engagement", positive: true },
    protocol: { value: "Cognitive mining of skills", positive: true }
  },
  {
    category: "Validation",
    traditional: { value: "Centralized certificates", positive: false },
    platform: { value: "Digital badges", positive: true },
    protocol: { value: "Proof-of-Skill Tokens™ (on-chain)", positive: true }
  },
  {
    category: "Monetization",
    traditional: { value: "For content creators only", positive: false },
    platform: { value: "Limited rewards system", positive: false },
    protocol: { value: "Full skill tokenization & capitalization", positive: true }
  },
  {
    category: "Ownership",
    traditional: { value: "Owned by company", positive: false },
    platform: { value: "Owned by platform", positive: false },
    protocol: { value: "Contributors own via Synaptic Governance™", positive: true }
  },
  {
    category: "Governance",
    traditional: { value: "Centralized", positive: false },
    platform: { value: "Partially open", positive: false },
    protocol: { value: "Synaptic Governance™", positive: true }
  },
  {
    category: "Outcomes",
    traditional: { value: "Certificate of completion", positive: true },
    platform: { value: "Skill badge", positive: true },
    protocol: { value: "Activated & tokenized cognitive capital", positive: true }
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 drop-shadow-[0_0_16px_#14F19566]"
          style={{ textShadow: "0 0 16px #9945FF44, 0 0 8px #14F19544" }}
        >
          How MFAI Redefines Cognitive Capital
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl font-poppins text-white/80 text-center mb-12 max-w-2xl mx-auto"
        >
          Money Factory AI is not a course, nor a platform — it is a <CognitiveActivationProtocol>
            Cognitive Activation Protocol™
          </CognitiveActivationProtocol> engineered to activate, validate, and tokenize your cognitive capital. Experience the future of skill acquisition, proof, and value creation — powered by Zyno AI and activated by Synaptic Governance™.
        </motion.p>

        {/* Tableau de comparaison */}
        <div className="relative overflow-x-auto">
          {/* Headers du tableau */}
          <div className="grid grid-cols-4 gap-4 mb-6 sticky top-0 z-10 bg-[#0B0B0F]/95 backdrop-blur-sm p-4 rounded-t-xl">
            <div className="font-orbitron text-lg text-white/80">Feature</div>
            <div className="font-orbitron text-lg text-center text-white/70">
              <span className="bg-gradient-to-r from-red-500/20 to-red-500/10 px-3 py-1 rounded-full text-red-200">Traditional Course</span>
            </div>
            <div className="font-orbitron text-lg text-center text-white/70">
              <span className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 px-3 py-1 rounded-full text-blue-200">Platform</span>
            </div>
            <div className="font-orbitron text-lg text-center">
              <span className="bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/10 px-3 py-1 rounded-full text-[#14F195]">MFAI Protocol</span>
            </div>
          </div>

          {/* Lignes du tableau */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {comparisonData.map((row) => (
              <motion.div
                key={row.category}
                variants={rowVariants}
                className="grid grid-cols-4 gap-4 py-3 border-b border-white/10 items-center"
              >
                <div className="font-poppins font-medium text-white">{row.category}</div>
                
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center">
                    {row.traditional.positive ? (
                      <CheckCircle2 className="text-green-400 w-4 h-4 mr-1" />
                    ) : (
                      <XCircle className="text-red-400 w-4 h-4 mr-1" />
                    )}
                  </div>
                  <span className="text-sm text-white/60 mt-1">{row.traditional.value}</span>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center">
                    {row.platform.positive ? (
                      <CheckCircle2 className="text-green-400 w-4 h-4 mr-1" />
                    ) : (
                      <XCircle className="text-red-400 w-4 h-4 mr-1" />
                    )}
                  </div>
                  <span className="text-sm text-white/60 mt-1">{row.platform.value}</span>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center">
                    {row.protocol.positive ? (
                      <CheckCircle2 className="text-[#14F195] w-5 h-5 mr-1" />
                    ) : (
                      <XCircle className="text-red-400 w-4 h-4 mr-1" />
                    )}
                  </div>
                  <span className="text-sm text-white/90 font-medium mt-1">{row.protocol.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Citation de clôture */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center italic text-lg font-poppins text-[#14F195] font-medium mt-12 max-w-2xl mx-auto border-l-4 border-[#14F195] pl-4"
        >
          <span>
            <span className="text-red-500">Don't enroll.</span> Activate. <span className="text-red-500">Don't pitch.</span> Prove.<br/>
            <span className="text-red-500">Don't wait.</span> Own your cognitive capital.
          </span>
        </motion.blockquote>
      </div>
    </section>
  );
} 