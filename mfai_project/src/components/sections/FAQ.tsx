"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedText } from "../ui/AnimatedText";

const faqs = [
  {
    question: "What is Money Factory AI?",
    answer: "MFAI is the first Cognitive Activation Protocol™ — a Web3-native, AI-powered system that transforms skills, proof, and contributions into capital and governance."
  },
  {
    question: "How does the protocol work?",
    answer: "The protocol uses AI-powered guidance and validation to help Sovereign Builders learn, build, and scale their projects. It provides on-chain proof of skills and contributions."
  },
  {
    question: "What are the benefits of holding $MFAI tokens?",
    answer: "$MFAI tokens provide access to various protocol features including Synaptic Governance™ rights, Neuro-Dividends™, and priority access to new features. Token holders can also participate in the protocol's decision-making process."
  },
  {
    question: "Is the protocol secure?",
    answer: "Yes, we've implemented multiple security measures and undergone audits by leading security firms. We prioritize the safety of our Sovereign Builders' assets and continuously work to maintain the highest security standards."
  },
  {
    question: "How does the Cognitive Lock™ mechanism work?",
    answer: "The Cognitive Lock™ mechanism allows Sovereign Builders to lock their $MFAI tokens to earn Neuro-Dividends™ and unlock additional protocol benefits. The longer you lock, the higher your rewards and benefits become."
  },
  {
    question: "What is the total supply of $MFAI tokens?",
    answer: "The total supply of $MFAI tokens is 1 billion. The distribution is carefully planned to ensure long-term sustainability and growth of the protocol."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white relative overflow-hidden">
      <AnimatedBackground pattern="dots" opacity={0.1} speed={0.3} />
      
      <div className="container mx-auto px-4">
        <AnimatedSection
          direction="up"
          distance={50}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 drop-shadow-[0_0_16px_#14F19566]">
            <AnimatedText
              text="Frequently Asked Questions"
              className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent"
              delay={0.2}
            />
          </h2>
          <p className="text-lg md:text-xl font-poppins text-white/80 max-w-2xl mx-auto">
            Find answers to the most common questions about the Cognitive Activation Protocol™
            and the $MFAI token.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              distance={20}
              delay={0.1 * index}
            >
              <div className="mb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-[#16161D] rounded-xl hover:bg-[#1a1a24] transition-all"
                >
                  <span className="font-orbitron text-lg text-left">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#14F195]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-[#16161D]/50 backdrop-blur-sm rounded-b-xl border-t border-white/10">
                        <p className="text-zinc-400 font-poppins">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          direction="up"
          distance={30}
          delay={0.8}
          className="mt-16 text-center"
        >
          <div className="bg-[#16161D]/50 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto border border-white/10">
            <h3 className="font-orbitron text-2xl mb-4">Still Have Questions?</h3>
            <p className="text-zinc-400 font-poppins text-sm leading-relaxed">
              Join our community on Discord or Telegram to get your questions answered
              by our team and community members.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 