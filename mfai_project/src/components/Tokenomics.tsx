"use client";

import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { AnimatedSection } from './ui/AnimatedSection';

interface TokenomicsData {
  title: string;
  value: number;
  color: string;
}

const tokenomicsData: TokenomicsData[] = [
  { title: 'Private Sale', value: 6.6, color: '#9945FF' },
  { title: 'Presale', value: 30, color: '#14F195' },
  { title: 'Liquidity Pool at TGE', value: 15, color: '#19AFFF' },
  { title: 'Liquidity for Future CEX', value: 20, color: '#FFD93D' },
  { title: 'Airdrop', value: 2, color: '#FF6B6B' },
  { title: 'Reserve', value: 6.4, color: '#4ECDC4' },
  { title: 'Marketing and Advisors', value: 10, color: '#6C5CE7' },
  { title: 'Team', value: 10, color: '#FFB347' }
];

export default function Tokenomics() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            Tokenomics & $MFAI Loop
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-2 font-manrope">
            The $MFAI Loop: Earn, Stake, Govern, Build. Repeat. <br />
            $MFAI powers the protocol: rewards, governance, access, and builder incentives.
          </p>
          <p className="text-white/50 text-sm max-w-xl mx-auto mb-4">
            Total Supply: <span className="text-[#14F195] font-bold">1,000,000,000 MFAI</span>
          </p>
          <div className="flex justify-center mb-4">
            <a
              href="https://explorer.solana.com/address/REPLACE_WITH_SPL_CONTRACT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black font-bold shadow-lg hover:scale-105 hover:from-[#14F195] hover:to-[#9945FF] transition-transform duration-200"
            >
              View $MFAI on Solana Explorer
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <PieChart
                data={tokenomicsData}
                lineWidth={60}
                paddingAngle={2}
                rounded
                animate
                animationDuration={1000}
                label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
                labelStyle={{
                  fontSize: '8px',
                  fontFamily: 'sans-serif',
                  fill: '#fff'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#14F195]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
                <p className="text-white/60 mt-2">{item.value}%</p>
              </div>
            ))}
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between font-bold text-white/80">
              <span>Total</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 