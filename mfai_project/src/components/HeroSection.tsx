"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {
  RocketIcon,
  BadgeCheckIcon,
  FileCheckIcon,
  HammerIcon,
  BotIcon,
  DollarSignIcon,
  LibraryIcon,
  CircleDollarSignIcon
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen z-10 bg-transparent flex flex-col items-center justify-center px-4 pb-32 overflow-hidden">

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        <Image
          src="/images/logo_mfai.png"
          alt="MFAI Logo"
          width={100}
          height={100}
          className="mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-center text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-2 drop-shadow-lg">
          Activate Your Skills.<br className="hidden md:inline" /> Own the Future.
        </h1>

        <p className="text-lg md:text-2xl font-manrope text-white/80 text-center mb-4 max-w-2xl mx-auto">
          From Brain to Blockchain to Business — Where Proof Becomes Capital.
        </p>

        <p className="text-base md:text-lg font-inter text-white/60 text-center mb-8 max-w-2xl mx-auto">
          MFAI isn’t a course platform. It’s a <span className="font-semibold text-[#14F195]">Cognitive Activation Protocol</span>. Governed by you. Powered by AI. Built on Solana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            href="/private-sale"
            className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold px-8 py-4 rounded-full font-orbitron text-lg shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            🔓 Join the Founders Activation Round™
          </Link>
          <Link
            href="/whitepaper"
            className="border-2 border-[#9945FF] text-white/80 font-semibold px-8 py-4 rounded-full font-orbitron text-lg hover:bg-[#9945FF]/10 hover:scale-105 transition-all duration-200"
          >
            📄 Read the Whitepaper
          </Link>
        </div>

        {/* Solana tag */}
        <div className="mt-10 flex flex-col items-center text-xs text-white/70">
          <span>Powered by</span>
          <Image
            src="/images/solana.svg"
            alt="Solana"
            width={80}
            height={20}
            className="mt-1"
          />
        </div>
      </div>
    </section>
  );
} 