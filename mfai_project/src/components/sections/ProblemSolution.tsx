"use client";

import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Brain, Lock, Award, Bot, Rocket } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      title: "Traditional Learning",
      description: "Current education systems fail to recognize and reward real-world skills and contributions.",
      icon: Brain
    },
    {
      title: "Web3 Barriers",
      description: "Complex technical knowledge and high entry costs prevent many from participating in the Web3 revolution.",
      icon: Lock
    },
    {
      title: "Value Recognition",
      description: "Contributors struggle to get fair recognition and compensation for their skills and work.",
      icon: Award
    }
  ];

  const solutions = [
    {
      title: "Skillchain Mining™",
      description: "Transform your learning journey into on-chain proof and earning opportunities through validated skill acquisition.",
      icon: Brain
    },
    {
      title: "AI Co-Founder™",
      description: "Zyno guides you through the entire process, making Web3 accessible and rewarding for everyone.",
      icon: Bot
    },
    {
      title: "Proof-of-Vision Incubator™",
      description: "Launch your protocol-aligned venture with community support and funding through the Proof-of-Vision™ system.",
      icon: Rocket
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-6">
              The Problem
            </h2>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#9945FF]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#9945FF]">{index + 1}</span>
                  </div>
                  <p className="text-white/80">{problem.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] to-[#9945FF] mb-6">
              The Solution
            </h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#14F195]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#14F195]">{index + 1}</span>
                  </div>
                  <p className="text-white/80">{solution.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
