"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: "Whitepaper",
    description: "Download our comprehensive technical documentation to understand the MFAI protocol in detail.",
    icon: FileText,
    href: "/whitepaper.pdf",
    buttonText: "Download PDF"
  },
  {
    title: "Learn More",
    description: "Explore our ecosystem and discover how MFAI is revolutionizing the future of work and value creation.",
    icon: BookOpen,
    href: "/learn",
    buttonText: "Start Learning"
  }
];

export default function Resources() {
  return (
    <section className="py-24 px-4 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">
            Resources
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Access our comprehensive resources to learn more about the MFAI ecosystem and how to get started.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-[#181825] rounded-2xl p-8 border border-white/10 hover:border-[#14F195]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#14F195]/10 rounded-xl">
                  <resource.icon className="w-6 h-6 text-[#14F195]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-white/60 mb-6">{resource.description}</p>
                  <a
                    href={resource.href}
                    className="inline-flex items-center gap-2 text-[#14F195] hover:text-[#9945FF] transition-colors"
                  >
                    {resource.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 