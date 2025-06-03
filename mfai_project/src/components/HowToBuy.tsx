"use client";

import { Wallet, Coins, ArrowLeftRight, Star } from "lucide-react";
import Link from "next/link";

export default function HowToBuy() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0B0F] to-[#181825] text-white text-center">
      <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 drop-shadow-[0_0_16px_#14F19566]" style={{ textShadow: "0 0 16px #9945FF44, 0 0 8px #14F19544" }}>
        How to Join the Activation Round
      </h2>
      <p className="text-lg md:text-xl font-poppins text-white/80 max-w-3xl mx-auto mb-10">
        $MFAI isn't live on the market yet — we're in the <strong>Private Activation Round</strong> phase. Here's how you can join now and be ready for what's next.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-[#16161D] rounded-xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center">
          <Wallet className="w-10 h-10 mx-auto text-[#14F195]" />
          <h3 className="font-orbitron text-xl mt-4 mb-2">1. Get a Wallet</h3>
          <p className="font-poppins text-sm text-zinc-400">
            Download a Solana wallet like <strong>Phantom</strong> or <strong>Backpack</strong> to store your future $MFAI.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://phantom.app" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#14F195] hover:underline">
              Download Phantom
            </a>
            <a href="https://backpack.app" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#14F195] hover:underline">
              Download Backpack
            </a>
          </div>
        </div>
        {/* Step 2 */}
        <div className="bg-[#16161D] rounded-xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center">
          <Coins className="w-10 h-10 mx-auto text-[#14F195]" />
          <h3 className="font-orbitron text-xl mt-4 mb-2">2. Join the Private Activation Round</h3>
          <p className="font-poppins text-sm text-zinc-400">
            Secure your allocation before the TGE. Lock your role, earn bonus rewards, and activate your Proof Pass™ benefits.
          </p>
          <Link href="#activation-round" className="inline-block mt-4 text-sm font-semibold text-[#14F195] hover:underline">
            Join Now
          </Link>
        </div>
        {/* Step 3 */}
        <div className="bg-[#16161D] rounded-xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center">
          <ArrowLeftRight className="w-10 h-10 mx-auto text-[#14F195]" />
          <h3 className="font-orbitron text-xl mt-4 mb-2">3. After the TGE</h3>
          <p className="font-poppins text-sm text-zinc-400">
            Once the Token Generation Event is live, you'll be able to trade $MFAI on <strong>Raydium</strong>, <strong>Jupiter</strong>, and other Solana DEXs.
          </p>
          <span className="text-xs text-zinc-500 italic block mt-2">
            Available only after the presale ends.
          </span>
        </div>
      </div>
      <div className="mt-12 bg-[#11111A] border border-[#14F195]/30 rounded-lg px-6 py-5 inline-block max-w-xl mx-auto shadow-xl py-2" style={{ lineHeight: 1.7 }}>
        <p className="text-sm font-poppins text-white/80">
          <span className="inline-flex items-center mr-2"><Star className="w-4 h-4 text-[#14F195] mr-1" />🎖️</span>
          <strong>Hold a Proof Pass™?</strong><br />
          You're whitelisted for early access and earn up to <span className="text-[#14F195] font-semibold">+20% bonus</span> in the Private Activation Round.<br />
          Your pass is your on-chain proof of early activation.
        </p>
      </div>
      <div className="mt-10">
        <Link href="#activation-round" className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:scale-105 transition">
          Join the Activation Round
        </Link>
        <p className="text-xs text-zinc-500 mt-2">
          Want to prepare for listing? <Link href="https://raydium.io/" className="text-[#14F195] underline">Visit Raydium</Link> or <Link href="https://discord.gg/mfai" className="text-[#14F195] underline">join our Discord</Link>.
        </p>
      </div>
    </section>
  );
} 