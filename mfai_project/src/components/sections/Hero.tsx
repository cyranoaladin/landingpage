"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedText } from "../ui/AnimatedText";

export default function HeroSection() {
  return (
    <AnimatedSection className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22] overflow-hidden">
      {/* Glow animé derrière le logo */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-radial from-[#14F19566] to-transparent rounded-full blur-2xl opacity-70 animate-pulse z-0" />
      {/* Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center py-24 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3 mb-6 relative">
          <img src="./images/logo_mfai.png" alt="MFAI Logo" className="w-16 h-16 drop-shadow-[0_0_32px_#14F19599]" />
        </div>
        {/* Badge */}
        <span className="mb-4 px-4 py-1.5 rounded-full bg-[#14F195]/10 text-[#14F195] text-xs font-semibold uppercase tracking-widest shadow-md">
          AI-powered Web3 Protocol
        </span>
        {/* Titre animé */}
        <h1 className="text-4xl sm:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#19AFFF] to-[#14F195] mb-6 animate-gradient-x drop-shadow-[0_0_24px_#14F19544] leading-tight">
          <AnimatedText text="Activate Your Skills. Own Your Future." />
        </h1>
        {/* Sous-titre */}
        <h2 className="text-lg sm:text-2xl font-poppins text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transform your expertise into <span className="text-[#14F195] font-semibold">real value</span> with the first AI-native protocol for builders.
        </h2>
        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button className="bg-gradient-to-r from-[#9945FF] to-[#14F195] px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-[0_0_32px_#14F19599] hover:scale-105 transition-all flex items-center gap-2">
            Activate Early Access <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-[#14F195] text-[#14F195] hover:bg-[#14F195]/10 px-8 py-4 text-lg rounded-full flex items-center gap-2">
            Learn More <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        {/* Powered by Solana */}
        <div className="mt-8 flex justify-center items-center gap-3 text-white/50 text-sm">
          <span>Powered by</span>
          <img src="./images/solana.svg" alt="Solana Logo" className="w-6 h-6" />
          <span>Solana Blockchain</span>
        </div>
      </div>
    </AnimatedSection>
  );
}