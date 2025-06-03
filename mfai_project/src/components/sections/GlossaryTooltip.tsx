"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

// Interface pour les props du composant
interface GlossaryTooltipProps {
  term: string;
  children: React.ReactNode;
}

// Dictionnaire des termes avec leurs définitions
const GLOSSARY_TERMS: Record<string, string> = {
  "Cognitive Activation Protocol™": "A decentralized system that transforms skills into tokenized assets, allowing users to monetize their expertise via a blockchain protocol.",
  "Skillchain Mining™": "Process by which users acquire skills that are validated and tokenized on the blockchain, creating real value from their knowledge.",
  "Proof-of-Skill Token™": "Non-fungible token (NFT) that certifies a user's acquired and validated skills, serving as verifiable proof of expertise on the blockchain.",
  "Neural Consensus™": "Advanced governance mechanism that uses neural networks to evaluate and weight community contributions.",
  "Sovereign Builder™": "Community member who actively contributes to the ecosystem's development and growth.",
  "Activation Loop™": "The complete cycle of learning, building, validating, and activating skills in the MFAI ecosystem.",
  "Zyno": "The native token of the MFAI protocol, used for governance, staking, and additional benefits in the ecosystem."
};

export default function GlossaryTooltip({ term, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Trouver la définition correspondante, ou fournir un message par défaut
  const definition = GLOSSARY_TERMS[term] || "Définition à venir";
  
  return (
    <span className="relative inline-flex items-center group">
      <span className="text-inherit">{children}</span>
      
      <button
        aria-label={`Plus d'informations sur ${term}`}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex ml-1 text-white/40 hover:text-[#14F195] focus:outline-none focus:ring-1 focus:ring-[#14F195] rounded-full"
      >
        <HelpCircle size={14} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-64 p-3 mt-2 bg-[#181825] border border-[#9945FF]/30 rounded-lg shadow-xl top-full left-1/2 -translate-x-1/2"
            style={{ 
              boxShadow: "0 10px 25px -5px rgba(153, 69, 255, 0.3), 0 8px 10px -6px rgba(20, 241, 149, 0.2)"
            }}
          >
            <div className="text-sm font-bold text-white mb-1 font-orbitron flex items-center">
              {term}
            </div>
            <p className="text-xs text-white/80 font-poppins">
              {definition}
            </p>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#181825] border-t border-l border-[#9945FF]/30 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// Composant d'enrobage pour faciliter l'implémentation avec le terme déjà défini
export function SkillchainMining({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Skillchain Mining™">
      {children}
    </GlossaryTooltip>
  );
}

export function ProofOfSkillToken({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Proof-of-Skill Token™">
      {children}
    </GlossaryTooltip>
  );
}

export function ProofOfVisionIncubator({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Proof-of-Vision Incubator™">
      {children}
    </GlossaryTooltip>
  );
}

export function CognitiveLock({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Cognitive Lock™">
      {children}
    </GlossaryTooltip>
  );
}

export function SynapticGovernance({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Synaptic Governance™">
      {children}
    </GlossaryTooltip>
  );
}

export function NeuroDividend({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Neuro-Dividend™">
      {children}
    </GlossaryTooltip>
  );
}

export function Zyno({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Zyno">
      {children}
    </GlossaryTooltip>
  );
}

export function CognitiveActivationProtocol({ children }: { children: React.ReactNode }) {
  return (
    <GlossaryTooltip term="Cognitive Activation Protocol™">
      {children}
    </GlossaryTooltip>
  );
} 