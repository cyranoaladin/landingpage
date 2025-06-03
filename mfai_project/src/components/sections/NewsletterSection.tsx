"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    // TODO: Connect to your backend or Web3 form processor
  };

  const benefits = [
    "Early access to Skillchain Mining™",
    "Priority access to Proof-of-Vision Incubator™",
    "VIP updates before public TGE & Neuro-Dividends™ programs",
    "Exclusive insights from the AI Co-Founder™"
  ];

  const newsletterContent = {
    title: "Stay Updated",
    subtitle: "Join the Cognitive Activation Protocol™ Community",
    description: "Get the latest updates on Skillchain Mining™, Proof-of-Skill Tokens™, Synaptic Governance™, and Neuro-Dividends™.",
    placeholder: "Enter your email",
    button: "Subscribe",
    success: "Welcome to the MFAI community!",
    error: "Something went wrong. Please try again."
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto p-8 rounded-2xl border border-white/10 bg-[#0F0F14] shadow-xl text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron text-white mb-4">
            Be First to Activate the Future
          </h2>
          <p className="text-white/70 mb-6 text-base md:text-lg">
            Join our early list and unlock exclusive benefits powered by Zyno AI — your cognitive launch assistant.
          </p>

          {/* Incentives */}
          <ul className="text-sm text-[#14F195] font-medium space-y-2 mb-6">
            <li className="flex items-center justify-center gap-2">
              <Gift className="w-5 h-5 text-[#14F195]" />
              Priority access to Zyno AI during Private Activation
            </li>
            <li className="flex items-center justify-center gap-2">
              <Gift className="w-5 h-5 text-[#14F195]" />
              Eligibility for Proof Pass™ draws & protocol rewards
            </li>
            <li className="flex items-center justify-center gap-2">
              <Gift className="w-5 h-5 text-[#14F195]" />
              VIP updates before public TGE & airdrop programs
            </li>
          </ul>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <input
                type="email"
                placeholder="Your email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="rounded-full px-5 py-3 bg-white text-black placeholder:text-gray-600 focus:outline-none w-full sm:w-auto"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 focus:outline-none"
              >
                → Join Now
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-[#14F195] font-semibold"
            >
              You're activated! Zyno will reach out soon.
            </motion.div>
          )}

          {error && <div className="mt-3 text-red-500 text-sm">{error}</div>}
        </motion.div>
      </div>
    </section>
  );
}
