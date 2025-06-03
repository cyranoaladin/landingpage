"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Rocket, Coins, Users } from 'lucide-react';

export default function BuilderMindset() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#181825]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#14F195]"
        >
          Build. Monetize. Govern.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white/5 border border-[#9945FF]/20 rounded-xl p-8 flex flex-col gap-4 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="w-7 h-7 text-[#14F195]" />
              <span className="font-bold text-white text-lg">MFAI is designed for tomorrow's entrepreneurs</span>
            </div>
            <p className="text-white/70 font-poppins">
              Every <span className="text-[#14F195] font-semibold">Activator</span> becomes a <span className="text-[#9945FF] font-semibold">co-builder</span> of an incubated project.
            </p>
            <p className="text-white/70 font-poppins">
              Your business is your proof, your asset is your tokenized skill.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 border border-[#14F195]/20 rounded-xl p-8 flex flex-col gap-4 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <Bot className="w-7 h-7 text-[#9945FF]" />
              <span className="font-bold text-white text-lg">Zyno, your AI co-founder</span>
            </div>
            <p className="text-white/70 font-poppins">
              Zyno AI guides you as a strategic partner, from activation to launch.
            </p>
            <p className="text-white/70 font-poppins">
              Monetize your skills, govern what you build, and grow with the community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
