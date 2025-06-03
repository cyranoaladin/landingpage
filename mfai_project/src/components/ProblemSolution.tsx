"use client";

import { AnimatedSection } from './ui/AnimatedSection';

export default function ProblemSolution() {
  return (
    <AnimatedSection className="relative min-h-screen z-10 bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-12">
            You don’t follow courses.<br className="hidden md:inline" /> You follow your <span className="text-[#14F195]">Activation Loop</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-[#9945FF]/30 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl">
              <span className="text-[#9945FF] text-4xl mb-4" role="img" aria-label="Lightning">⚡</span>
              <p className="text-white/80 text-center font-semibold text-lg">Not a <span className="line-through text-[#FF6B6B]">Course Platform</span></p>
              <p className="text-[#14F195] text-center font-bold text-xl mt-2">An Activation Engine</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-[#9945FF]/30 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl">
              <span className="text-[#9945FF] text-4xl mb-4" role="img" aria-label="Tools">🛠️</span>
              <p className="text-white/80 text-center font-semibold text-lg">Not <span className="line-through text-[#FF6B6B]">users</span></p>
              <p className="text-[#14F195] text-center font-bold text-xl mt-2">Builders</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-[#9945FF]/30 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl">
              <span className="text-[#9945FF] text-4xl mb-4" role="img" aria-label="Graduation cap">🎓</span>
              <p className="text-white/80 text-center font-semibold text-lg">Not <span className="line-through text-[#FF6B6B]">certifications</span></p>
              <p className="text-[#14F195] text-center font-bold text-xl mt-2">Skill-based Proof NFTs</p>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
} 