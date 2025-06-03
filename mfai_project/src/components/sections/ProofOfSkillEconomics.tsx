"use client";

import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Search } from 'lucide-react';
import { ProprietaryTerm } from '../ui/ProprietaryTerm';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

interface ProofOfSkillData {
  title: string;
  value: number;
  color: string;
}

const proofOfSkillData: ProofOfSkillData[] = [
  { title: 'Private Sale', value: 20, color: '#9945FF' },
  { title: 'Public Sale', value: 10, color: '#14F195' },
  { title: 'Team', value: 15, color: '#FF6B6B' },
  { title: 'Ecosystem', value: 25, color: '#4ECDC4' },
  { title: 'Marketing', value: 10, color: '#FFD93D' },
  { title: 'Liquidity', value: 20, color: '#6C5CE7' }
];

export default function ProofOfSkillEconomicsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return proofOfSkillData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const chartData = {
    labels: filteredData.map(item => item.title),
    datasets: [
      {
        data: filteredData.map(item => item.value),
        backgroundColor: filteredData.map(item => item.color),
        borderColor: 'transparent',
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    }
  };

  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] mb-4">
            <ProprietaryTerm term="Proof-of-Skill Tokens™" /> Economics
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Total Supply: 1,000,000,000 MFAI
          </p>
          
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#14F195]/50 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredData.map((item, index) => (
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
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 