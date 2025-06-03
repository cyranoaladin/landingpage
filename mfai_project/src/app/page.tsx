"use client";

import React from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/sections/Features";
import RoadmapSection from "@/components/sections/Roadmap";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProprietaryTerm } from "@/components/ui/ProprietaryTerm";
import ActivationStack from '@/components/Experience';
import ProblemSolution from '@/components/ProblemSolution';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ProofOfSkillEconomics from '@/components/sections/ProofOfSkillEconomics';
import TokenUtility from '@/components/TokenUtility';
import HowToBuy from '@/components/sections/HowToBuy';
import MembershipPasses from '@/components/MembershipPasses';
import HowItWorks from '@/components/sections/HowItWorks';
import PrivateSale from '@/components/sections/PrivateSale';
import BackersAndPartners from '@/components/sections/BackersAndPartners';
import SynapticGovernanceSection from '@/components/sections/SynapticGovernance';
import FAQSection from '@/components/sections/FAQSection';
import CommunitySection from '@/components/sections/CommunitySection';
import TeamSection from '@/components/sections/TeamSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <RoadmapSection />
        <ActivationStack />
        <ProblemSolution />
        <ComparisonSection />
        <ProofOfSkillEconomics />
        <TokenUtility />
        <HowToBuy />
        <MembershipPasses />
        <HowItWorks />
        <PrivateSale />
        <BackersAndPartners />
        <SynapticGovernanceSection />
        <FAQSection />
        <CommunitySection />
        <TeamSection />
        <NewsletterSection />
        <Footer />
      </div>
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-8">
            Join the <ProprietaryTerm term="Cognitive Activation Protocol™" />
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12">
            Be part of the future of skill development and project creation. 
            Transform your expertise into <ProprietaryTerm term="Proof-of-Skill Tokens™" /> 
            and build your <ProprietaryTerm term="Protocol-aligned Venture" />.
          </p>
          <button className="bg-gradient-to-r from-[#9945FF] to-[#14F195] px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:scale-105 transition-all">
            Activate Early Access
          </button>
        </div>
      </AnimatedSection>
    </main>
  );
} 