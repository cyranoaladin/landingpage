"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import XLogo from "./icons/XLogo";
import DiscordLogo from "./icons/DiscordLogo";
import MediumIconLogo from "./icons/MediumIconLogo";
import { Send, Instagram, Mail, Megaphone, LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  "aria-label"?: string;
}

interface SocialLink {
  name: string;
  icon: (props: IconProps) => JSX.Element;
  text: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "X (Twitter)",
    icon: (props: IconProps) => <XLogo {...props} aria-label="X (Twitter) logo" />,
    text: "Follow us on X",
    href: "https://x.com/MoneyFactoryAI",
  },
  {
    name: "Telegram",
    icon: (props: IconProps) => <Send {...props} aria-label="Telegram logo" />,
    text: "Join our Telegram",
    href: "https://t.me/MoneyFacoryAI_Portal",
  },
  {
    name: "Discord",
    icon: (props: IconProps) => <DiscordLogo {...props} aria-label="Discord logo" />,
    text: "Join our Discord",
    href: "https://discord.gg/mfai",
  },
  {
    name: "Instagram",
    icon: (props: IconProps) => <Instagram {...props} aria-label="Instagram logo" />,
    text: "Follow us on Instagram",
    href: "https://www.instagram.com/moneyfactoryai/",
  },
  {
    name: "Medium",
    icon: (props: IconProps) => <MediumIconLogo {...props} className="w-8 h-8 text-[#14F195]" aria-label="Medium logo" />,
    text: "Read us on Medium",
    href: "https://medium.com/@moneyfactoryai",
  },
  {
    name: "Newsletter",
    icon: (props: IconProps) => <Mail {...props} aria-label="Newsletter logo" />,
    text: "Subscribe to our Newsletter",
    href: "#newsletter",
  },
];

export default function CommunitySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0F] to-[#1C1C22]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,241,149,0.05),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-4 drop-shadow-[0_0_16px_#14F19566]">
            Activate the Collective — Join the MFAI Community
          </h2>
          <p className="text-white/70 font-poppins max-w-2xl mx-auto text-lg">
            MFAI is not just a platform: it's a decentralized, community-driven protocol where every voice matters. Join our official channels, share, propose, co-create. Here, the community is the engine of the Cognitive Activation Protocol™.
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-[#181825]/80 border border-white/10 rounded-2xl text-center transition-all duration-300 hover:border-[#14F195] hover:shadow-[0_0_32px_#14F19544] group"
              >
                <div className="flex flex-col items-center justify-center">
                  {link.icon({ className: "w-8 h-8 text-[#14F195] group-hover:text-[#14F195] transition-all" })}
                  <span className="font-orbitron text-lg text-white mb-1">{link.name}</span>
                  <span className="font-poppins text-white/70 text-sm">{link.text}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Ambassador CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="#ambassador"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white rounded-xl font-orbitron text-lg hover:scale-105 hover:shadow-[0_0_32px_#14F19599] transition-all"
          >
            <Megaphone className="w-6 h-6" />
            <span>Become an Ambassador</span>
          </Link>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 italic font-poppins text-lg">
            Let's activate the future of Web3 learning — together.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 