// Navbar.tsx - Enhanced component
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ProprietaryTerm } from '../ui/ProprietaryTerm';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AnimatedSection className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0F]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-orbitron text-white">
            MFAI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white/60 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#proof-of-skill-economics" className="text-white/60 hover:text-white transition-colors">
              <ProprietaryTerm term="Proof-of-Skill Tokens™" /> Economics
            </Link>
            <Link href="#roadmap" className="text-white/60 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="#contact" className="text-white/60 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="text-white/60 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#proof-of-skill-economics" className="text-white/60 hover:text-white transition-colors">
                <ProprietaryTerm term="Proof-of-Skill Tokens™" /> Economics
              </Link>
              <Link href="#roadmap" className="text-white/60 hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="#contact" className="text-white/60 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
