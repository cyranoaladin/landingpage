"use client";

import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { AnimatedCard } from '../ui/AnimatedCard';
import { AnimatedIcon } from '../ui/AnimatedIcon';
import { Twitter, BookOpen, LucideIcon } from 'lucide-react';
import DiscordLogo from '../icons/DiscordLogo';

interface SocialLink {
  icon: LucideIcon;
  title: string;
  description: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow us for the latest updates and announcements",
    url: "https://twitter.com/mfai"
  },
  {
    icon: DiscordLogo,
    title: "Discord",
    description: "Join our community and connect with other members",
    url: "https://discord.gg/mfai"
  },
  {
    icon: BookOpen,
    title: "Medium",
    description: "Read our latest articles and insights",
    url: "https://medium.com/mfai"
  }
];

export default function CommunitySection() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            Join Our Community
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Connect with us on social media and stay updated with the latest news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <AnimatedCard
              key={link.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#14F195]/50 transition-all duration-300"
              delay={0.1 * index}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 mb-4">
                  <AnimatedIcon
                    icon={link.icon}
                    size={32}
                    color="#14F195"
                    hoverColor="#9945FF"
                    delay={0.1 * (index + 1)}
                    aria-label={`${link.title} icon`}
                  />
                </div>
                <h3 className="font-orbitron text-xl mt-2 mb-2">{link.title}</h3>
                <p className="font-poppins text-sm text-zinc-400">{link.description}</p>
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 