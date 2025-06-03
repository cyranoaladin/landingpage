"use client";

import Link from "next/link";
import { Brain, Flame, Scroll, Lock, Rocket, Unlock, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedText } from "../ui/AnimatedText";
import { AnimatedCard } from "../ui/AnimatedCard";
import { AnimatedProgress } from "../ui/AnimatedProgress";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const cards = [
  {
    icon: Brain,
    title: "Synaptic Governance™ Early Access",
    text: "Get early rights to vote, propose, and co-govern the future of the protocol."
  },
  {
    icon: Flame,
    title: "Up to +20% Bonus",
    text: "Unlock bonus $MFAI based on your Proof Pass™ level. (Army +5%, Admiral +10%, Alpha +20%)"
  },
  {
    icon: Scroll,
    title: "Guaranteed Whitelist",
    text: "Phase 1 of the Public Activation Round™ is reserved for early buyers & pass holders."
  },
  {
    icon: Lock,
    title: "Locked-in Price",
    text: "This is the lowest price before the $MFAI token hits the market (Raydium, Jupiter)."
  },
  {
    icon: Rocket,
    title: "Proof-of-Vision Incubator™ Priority",
    text: "Get priority access to incubate, pitch, and fund your Synaptic Governance™-backed ventures."
  },
  {
    icon: Unlock,
    title: "Cognitive Lock™ Ready",
    text: "Be eligible for staking rewards, protocol activation, and contributor boosts."
  }
];

const benefits = [
  {
    title: "Early Access",
    text: "Get first access to Skillchain Mining™ and the Proof-of-Vision Incubator™."
  },
  {
    title: "Neuro-Dividends™",
    text: "Be eligible for Neuro-Dividends™, protocol activation, and contributor boosts."
  },
  {
    title: "Synaptic Governance™",
    text: "Participate in early Synaptic Governance™ decisions and shape the protocol's future."
  }
];

export default function PrivateSale() {
  const totalRaise = 1000000;
  const currentRaise = 350000;
  const remainingSpots = 500;

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white relative overflow-hidden">
      <AnimatedBackground pattern="waves" opacity={0.1} speed={0.3} />
      
      <div className="container mx-auto px-4">
        <AnimatedSection
          direction="up"
          distance={50}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 drop-shadow-[0_0_16px_#14F19566]">
            <AnimatedText
              text="Private Sale"
              className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent"
              delay={0.2}
            />
          </h2>
          <p className="text-lg md:text-xl font-poppins text-white/80 max-w-2xl mx-auto">
            Join the Cognitive Activation Protocol™ private sale and become an early supporter
            of the future of decentralized learning and building.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mb-16">
          <AnimatedSection
            direction="up"
            distance={30}
            delay={0.4}
            className="bg-[#16161D]/50 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div className="flex-1">
                <h3 className="font-orbitron text-2xl mb-2">Activation Round Progress</h3>
                <div className="flex items-center gap-4">
                  <AnimatedCounter
                    value={currentRaise}
                    prefix="$"
                    suffix=" raised"
                  />
                  <span className="text-zinc-400">of</span>
                  <AnimatedCounter
                    value={totalRaise}
                    prefix="$"
                    suffix=" goal"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-orbitron text-2xl mb-2">Remaining Spots</h3>
                <AnimatedCounter
                  value={remainingSpots}
                  suffix=" spots left"
                />
              </div>
            </div>
            <AnimatedProgress
              value={(currentRaise / totalRaise) * 100}
              className="h-4 rounded-full bg-[#16161D]"
            />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {cards.map((card, index) => (
            <AnimatedCard
              key={card.title}
              className="bg-[#16161D] rounded-xl p-6 shadow-xl hover:shadow-[0_0_40px_#14F19599] transition-all"
              delay={0.1 * index}
              hoverScale={1.05}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 mb-4">
                  <AnimatedIcon
                    icon={card.icon}
                    size={32}
                    color="#14F195"
                    hoverColor="#9945FF"
                    delay={0.1 * (index + 1)}
                  />
                </div>
                <h3 className="font-orbitron text-xl mt-2 mb-2">{card.title}</h3>
                <p className="font-poppins text-sm text-zinc-400">{card.text}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedSection
          direction="up"
          distance={30}
          delay={0.8}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#activation-round"
              className="group inline-flex items-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-105 hover:shadow-[0_0_24px_#14F19599] transition-all"
            >
              Join the Private Sale
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#proof-pass"
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white bg-[#16161D] hover:scale-105 hover:shadow-[0_0_24px_#14F19599] transition-all"
            >
              Learn About Proof Pass
            </Link>
          </div>
          <p className="text-sm text-zinc-400 mt-4">
            The private sale will be conducted in multiple phases. Early participants
            will receive additional benefits and bonuses.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
} 