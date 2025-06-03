"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#181825] bg-[#0B0B0F] py-10 px-4 text-white text-sm font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Bloc gauche : infos légales */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-white/80">
            © {new Date().getFullYear()} Money Factory AI — All rights reserved.
          </p>
          <p className="text-white/50">
            Money Factory AI LLC · Web3 Education & Activation Protocol<br />
            Registered in Wyoming, USA — Entity ID: <span className="text-white">2024-001465968</span>
          </p>
        </div>

        {/* Bloc droit : philosophie & contact */}
        <div className="text-center md:text-right space-y-2">
          <p className="text-white/60 italic">
            There is no CEO. Only activated contributors.
          </p>
          <p className="text-white/80">
            <a
              href="mailto:contact@mfai.app"
              className="underline hover:text-[#14F195] transition duration-300"
            >
              contact@mfai.app
            </a>
          </p>
        </div>
      </div>

      {/* Disclaimer final (en petit) */}
      <div className="mt-8 text-center text-xs text-white/40 space-y-1">
  <p>
    Money Factory AI is a next-generation protocol combining gamified learning, AI-driven entrepreneurship, and decentralized governance.
  </p>
  <p>
    Nothing on this site constitutes financial advice.
  </p>
</div>

    </footer>
  );
}
