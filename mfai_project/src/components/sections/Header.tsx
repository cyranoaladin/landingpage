"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, BookOpen, FileText } from "lucide-react";
import { ProprietaryTerm } from "../ui/ProprietaryTerm";

const navigation = [
  { name: "Protocol", href: "#protocol" },
  { name: "Mining", href: "#skillchain-mining" },
  { name: "Skill Tokens", href: "#proof-of-skill-tokens" },
  { name: "Governance", href: "#synaptic-governance" },
  { name: "Dividends", href: "#neuro-dividends" },
  { name: "Sale", href: "#private-sale" }
];

const resources = [
  { name: "Whitepaper", href: "/whitepaper.pdf", icon: FileText },
  { name: "Learn More", href: "/learn", icon: BookOpen }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-[#0B0B0F]/80 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-12 h-12">
              <img 
                src="/images/logo_mfai.png" 
                alt="MFAI Logo" 
                className="w-full h-full rounded-xl shadow-lg group-hover:scale-105 group-hover:shadow-[0_0_32px_#14F19599] transition-all duration-300" 
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-radial from-[#14F19533] to-transparent blur-xl opacity-60 -z-10" />
            </div>
            <span className="ml-2 text-2xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] drop-shadow-[0_0_8px_#14F19544]">
              MFAI
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-[#14F195] font-medium transition-colors relative group px-2 py-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#9945FF] to-[#14F195] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            {/* Dropdown Resources */}
            <div className="relative">
              <button
                className="text-white/70 hover:text-[#14F195] font-medium px-2 py-1 flex items-center gap-1 group transition-colors"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                Resources
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-[#181825] rounded-xl shadow-xl border border-white/10 overflow-hidden z-50"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    {resources.map((resource, idx) => (
                      <a
                        key={resource.name}
                        href={resource.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-white/80"
                      >
                        <resource.icon className="w-5 h-5 text-[#14F195]" />
                        <span>{resource.name}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a
              href="#early-access"
              className="group bg-gradient-to-r from-[#9945FF] to-[#14F195] px-7 py-2 text-base font-semibold text-white rounded-full shadow-lg hover:shadow-[0_0_32px_#14F19599] transition-all duration-300 flex items-center gap-2 ml-4"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t border-white/10 bg-[#181825]/95 rounded-xl shadow-xl"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-white/70 hover:text-[#14F195] transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="border-t border-white/10 my-2" />
                <div className="px-4 py-2">
                  <div className="text-white/60 mb-2">Resources</div>
                  {resources.map((resource, idx) => (
                    <a
                      key={resource.name}
                      href={resource.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-colors text-white/80"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <resource.icon className="w-5 h-5 text-[#14F195]" />
                      <span>{resource.name}</span>
                    </a>
                  ))}
                </div>
                <motion.a
                  href="#early-access"
                  className="bg-gradient-to-r from-[#9945FF] to-[#14F195] px-6 py-3 text-base font-semibold text-white rounded-full shadow-lg mt-4 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Early Access
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 