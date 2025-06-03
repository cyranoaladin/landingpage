"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, FileText } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is Money Factory AI?",
    answer:
      "MFAI is the first Cognitive Activation Protocol™ — a Web3-native, AI-powered system that transforms skills, proof, and contributions into capital and governance." 
  },
  {
    question: "How is MFAI different from a platform or a DAO?",
    answer:
      "We’re not a platform. We’re not a DAO. We are a protocol — one that activates on-chain proof of contribution, learning, and project building through a dynamic activation loop."
  },
  {
    question: "What is a Proof Pass™?",
    answer:
      "It’s your early access key to the protocol — a limited-edition digital card that proves you’re a first believer. It unlocks bonuses, exclusive access, private mentoring, and lifetime protocol privileges."
  },
  {
    question: "What is Skillchain Mining™?",
    answer:
      "It’s the process of acquiring monetizable skills via Zyno AI and earning Proof-of-Skill Tokens™ that serve as on-chain credentials. Think of it as cognitive staking."
  },
  {
    question: "How does Synaptic Governance™ work?",
    answer:
      "Governance is earned through contribution. Your tokens and reputation grant you the right to vote, propose, and co-own the evolution of the protocol."
  },
  {
    question: "Is the token live?",
    answer:
      "$MFAI is not live yet. We're currently in the Private Activation Round. The public presale will follow before the Token Generation Event (TGE)."
  },
  {
    question: "What is the Proof-of-Vision Incubator™?",
    answer:
      "It’s our on-chain launch zone where projects validated by the community and Zyno get support, funding, and strategic exposure."
  },
  {
    question: "Do I need crypto experience to use MFAI?",
    answer:
      "No. Zyno guides you like an AI Co-Founder. We’ve designed the onboarding to be seamless, especially for Web2 builders."
  },
  {
    question: "What blockchain is MFAI built on?",
    answer:
      "Solana — for its scalability, speed, low fees, and native integration with Web3 tools like Phantom, Jupiter, and Raydium."
  },
  {
    question: "What is Zyno?",
    answer:
      "Zyno is your AI Co-Founder. It tracks your growth, recommends paths, helps design your token strategy, and prepares you for DAO participation."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#181825]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,241,149,0.05),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron text-white mb-2">
            Questions? Let’s Activate Clarity.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover how MFAI turns learning, building and proving into real capital. If you're unsure about the terminology — start here.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0B0B0F]/50 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 px-6 flex items-center justify-between text-left hover:text-[#14F195] transition-colors duration-300"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
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
                    <div className="py-4 px-6 text-white/80 border-t border-white/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-white/70 italic">
            Still curious? Ask Zyno or explore the whitepaper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:contact@mfai.app"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B0B0F] text-white hover:bg-[#14F195]/10 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
            <Link
              href="#whitepaper"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white hover:shadow-lg hover:shadow-[#14F195]/20 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              Read Whitepaper
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
