"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gift, Rocket, Star } from 'lucide-react';
import ParallaxSection from '../ui/ParallaxSection';
import { LazySection } from '../ui/LazySection';

const events = [
  {
    title: 'Private Sale',
    date: 'Q1 2024',
    description: 'Exclusive access for early investors with significant benefits.',
    icon: Star,
    benefits: [
      'Early token access',
      'Exclusive token bonus',
      'Priority staking rewards'
    ]
  },
  {
    title: 'NFT Pass Launch',
    date: 'Q2 2024',
    description: 'Acquire an NFT Pass to unlock exclusive benefits in the ecosystem.',
    icon: Gift,
    benefits: [
      'Protocol access',
      'Exclusive rewards',
      'Enhanced staking benefits'
    ]
  },
  {
    title: 'Protocol Launch',
    date: 'Q3 2024',
    description: 'Full launch of the Cognitive Activation Protocol with all features.',
    icon: Rocket,
    benefits: [
      'Full protocol access',
      'Staking activation',
      'Governance participation'
    ]
  }
];

export default function LaunchEvents() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#181825] via-[#0B0B0F] to-[#1E1E3F] overflow-hidden">
      <div className="container mx-auto px-4">
        <ParallaxSection speed={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
              Launch Events
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join us on our journey to revolutionize skill monetization through blockchain technology
            </p>
          </motion.div>
        </ParallaxSection>

        <LazySection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-background/20 backdrop-blur-sm border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <event.icon className="w-8 h-8 text-[#14F195] mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold gradient-text">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <ul className="space-y-2">
                  {event.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-[#14F195]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </LazySection>
      </div>
    </section>
  );
} 