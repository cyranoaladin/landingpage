import React from "react";
import { Cog, Lightbulb, Rocket, Scale, ShieldCheck, LucideIcon } from "lucide-react";

export const DIAGRAM_SIZE = 650;
export const ORBIT_CENTER = DIAGRAM_SIZE / 2;
export const RADIUS = 180; // Réduit de 250 à 180 pour correspondre au dessin
export const angleOffset = -Math.PI / 2; // Bas du cercle

export interface StepConfig {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const stepsData: StepConfig[] = [
  {
    title: "Learn",
    description: "Acquire foundational knowledge and skills.",
    icon: Lightbulb,
    color: "#FFD166", // Jaune
  },
  {
    title: "Build",
    description: "Create and contribute to projects.",
    icon: Cog,
    color: "#14F195", // Vert
  },
  {
    title: "Prove",
    description: 'Earn Proof-of-Skill Tokens™.',
    icon: ShieldCheck,
    color: "#19AFFF", // Bleu
  },
  {
    title: "Activate",
    description: "Convert skills to on-chain capital.",
    icon: Rocket,
    color: "#FF6B95", // Rose
  },
  {
    title: "Scale",
    description: "Grow your impact and network.",
    icon: Scale,
    color: "#9945FF", // Violet
  },
];

export const NAVIGATION_LINKS = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Équipe', href: '/team' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Proof-of-Skill Economics', href: '/proof-of-skill-economics' },
  { name: 'FAQ', href: '/faq' },
];

