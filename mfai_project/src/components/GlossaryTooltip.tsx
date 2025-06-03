"use client";

import { ReactNode } from "react";

// Interface pour les props du composant
interface GlossaryTooltipProps {
  term: string;
  children: ReactNode;
}

// Dictionnaire des termes avec leurs définitions
const glossaryTerms: Record<string, string> = {
  "Cognitive Activation Protocol™": "A revolutionary protocol that transforms skills into capital through blockchain technology.",
  "Skillchain Mining™": "Processus par lequel les utilisateurs acquièrent des compétences qui sont validées et tokenisées sur la blockchain, créant ainsi de la valeur réelle à partir de leur savoir.",
  "Proof-of-Skill Token™": "A unique token that represents and validates user skills and contributions within the ecosystem.",
  "Proof-of-Vision Incubator™": "An innovative platform that helps users transform their ideas into successful projects through community validation and support.",
  "Cognitive Lock™": "A staking mechanism that allows users to lock their $MFAI tokens to earn yields and additional benefits in the ecosystem.",
  "Synaptic Governance™": "A decentralized governance system inspired by neural networks, where each token holder's vote contributes to the collective intelligence of the protocol.",
  "Neuro-Dividend™": "A reward system that distributes protocol profits to token holders based on their participation and contribution.",
  "Zyno": "Co-fondateur IA avancé qui accompagne les utilisateurs dans leur parcours d'apprentissage et de création, au-delà d'un simple assistant ou tuteur."
};

export function GlossaryTooltip({ term, children }: GlossaryTooltipProps) {
  const description = glossaryTerms[term as keyof typeof glossaryTerms];

  if (!description) {
    return <>{children}</>;
  }

  return (
    <span className="group relative inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
        <div className="rounded-lg bg-background p-2 text-sm shadow-lg">
          {description}
        </div>
      </div>
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