"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github } from "lucide-react";
import DiscordLogo from "../icons/DiscordLogo";
import { ProprietaryTerm } from "../ui/ProprietaryTerm";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "Protocol", href: "#protocol" },
    { name: "Features", href: "#features" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Community", href: "#community" }
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/mfai",
      icon: Twitter
    },
    {
      name: "Discord",
      href: "https://discord.gg/mfai",
      icon: DiscordLogo
    },
    {
      name: "GitHub",
      href: "https://github.com/mfai",
      icon: Github
    }
  ]
};

const footerLinks = {
  protocol: [
    { name: "Skillchain Mining™", href: "#skillchain-mining" },
    { name: "Proof-of-Skill Tokens™", href: "#proof-of-skill-tokens" },
    { name: "Synaptic Governance™", href: "#synaptic-governance" },
    { name: "Neuro-Dividends™", href: "#neuro-dividends" }
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Whitepaper", href: "#whitepaper" },
    { name: "Blog", href: "#blog" },
    { name: "Support", href: "#support" }
  ],
  community: [
    { name: "Discord", href: "https://discord.gg/mfai" },
    { name: "Twitter", href: "https://twitter.com/MoneyFactoryAI" },
    { name: "Telegram", href: "https://t.me/MoneyFactoryAI" },
    { name: "GitHub", href: "https://github.com/MoneyFactoryAI" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/images/logo_mfai.png" alt="MFAI Logo" className="w-10 h-10" />
              <span className="ml-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">
                <ProprietaryTerm term="Money Factory AI" />
              </span>
            </div>
            <p className="text-white/60 mb-4">
              Transforming skills into <ProprietaryTerm term="Proof-of-Skill Tokens™" /> through the 
              <ProprietaryTerm term="Cognitive Activation Protocol™" />.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors flex items-center"
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} <ProprietaryTerm term="Money Factory AI" />. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm">
            The <ProprietaryTerm term="Cognitive Activation Protocol™" /> is not financial advice. 
            Always do your own research before participating in any protocol activities.
          </p>
        </div>
      </div>
    </footer>
  );
} 