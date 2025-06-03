"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

const faqs = [
  {
    question: "What is Money Factory AI?",
    answer: "Money Factory AI is a protocol that connects learning, building, and funding in the Web3 space. It helps entrepreneurs prove their skills and get funding through on-chain validation."
  },
  {
    question: "How does the protocol work?",
    answer: "The protocol uses AI-powered guidance and validation to help users learn, build, and scale their projects. It provides on-chain proof of skills and contributions."
  },
  {
    question: "What are the benefits of holding MFAI tokens?",
    answer: "MFAI token holders can participate in governance, earn staking rewards, and get access to exclusive features and benefits in the ecosystem."
  },
  {
    question: "How can I participate in the private sale?",
    answer: "You can participate in the private sale by purchasing a Proof Pass™, which gives you access to the early token sale and additional benefits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Find answers to common questions about Money Factory AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-[#16161D] rounded-lg hover:bg-[#1E1E3F] transition-all"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-orbitron text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  id={`faq-panel-${index}`}
                  className="mt-2 px-4 pb-4 text-white/80 text-left"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 