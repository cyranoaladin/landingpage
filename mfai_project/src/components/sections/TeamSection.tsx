"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const contributors = [
  {
    name: "Alaeddine BEN RHOUMA",
    role: "Protocol Strategist\n(Co-initiator)",
    avatar: "/images/team/benrhouma.jpg",
    link: "https://www.linkedin.com/in/alaeddine-ben-rhouma/",
    icon: Linkedin,
    badges: ["🛠 Sovereign Builder™", "🧬 Contributor"],
  },
  {
    name: "Pierre Caillabet",
    role: "Narrative & Activation Designer\n(Co-initiator)",
    avatar: "/images/team/pierre.jpeg",
    link: "https://www.linkedin.com/in/pierre-caillabet-7068293/",
    icon: Linkedin,
    badges: ["🧠 Strategist"],
  },
  {
    name: "Alaeddine Hamdi",
    role: "Learning & Ecosystem Connector\n(Co-initiator)",
    avatar: "/images/team/hamdi.png",
    link: "https://www.linkedin.com/in/alaeddine-hamdi-59180813a/",
    icon: Linkedin,
    badges: ["🧭 Mentor", "🧬 Contributor"],
  },
  {
    name: "Kamel BEN RHOUMA",
    role: "Protocol Hacker\n(Tech-native builder – 13 y.o.)",
    avatar: "/images/team/kamel.jpeg",
    link: "https://x.com/TreizeB_",
    icon: Twitter,
    badges: ["�� Sovereign Builder™"],
  },
  {
    name: "Sébastien Rodriguez",
    role: "Creative Designer & Visual Architect",
    avatar: "/images/team/sebastien.png",
    link: "https://x.com/R_Sebastien_13",
    icon: Twitter,
    badges: ["🧬 Contributor"],
  },
  {
    name: "Zyno AI",
    role: "AI Co-Founder™\nCognitive Launch Assistant",
    avatar: "/images/team/zyno.jpg",
    link: "https://mfai.app",
    icon: Linkedin,
    badges: ["🤖 Autonomous Agent", "🧠 Strategist"],
  },
];

const advisors = [
  {
    name: "Hassen Ghrabi",
    role: "Blockchain Academic Advisor\n(Fulbright Scholar)",
    avatar: "/images/team/gharbi.jpeg",
    link: "https://www.linkedin.com/in/hassen-gharbi-55a362162/",
    icon: Linkedin,
    badges: ["🧭 Mentor"],
  },
  {
    name: "Mehdi Chourib",
    role: "Cybersecurity & Compliance Advisor\n(CEO @ T-Scop)",
    avatar: "/images/team/chourib.jpeg",
    link: "https://www.linkedin.com/in/mehdi-chourib/",
    icon: Linkedin,
    badges: ["🧭 Mentor"],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 px-4 bg-[#0B0B0F] text-center overflow-hidden">
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl lg:text-5xl font-orbitron mb-2 text-white">
          Meet the Collective Behind MFAI
        </motion.h2>
        <motion.p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
          MFAI isn't led by executives. It's built by provers, mentors, and protocol contributors — where activation defines leadership.
        </motion.p>

        {/* Core Contributors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {contributors.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-[#181825]/80 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#9945FF]/20 hover:border-[#14F195]/40 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#9945FF]/40 group-hover:border-[#14F195] shadow-xl mb-6">
                <Image src={member.avatar} alt={member.name} width={180} height={180} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold font-orbitron mb-2 text-white">{member.name}</h3>
              <p className="text-sm text-white/70 whitespace-pre-line mb-4">{member.role}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {member.badges.map((badge, idx) => (
                  <span key={idx} className="bg-[#14F195]/10 text-[#14F195] text-xs px-2 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#14F195]"
              >
                <member.icon className="w-5 h-5" />
                <span className="underline underline-offset-2">Profile</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <div className="w-full bg-[#0B0B0F]/90 border border-[#14F195]/10 rounded-2xl py-10 px-4 mb-12">
          <h4 className="text-2xl font-bold font-orbitron mb-8 text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">
            Protocol Advisors
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {advisors.map((advisor, i) => (
              <motion.div
                key={advisor.name}
                className="bg-[#181825]/80 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#14F195]/20 hover:border-[#9945FF]/40 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#14F195]/40 group-hover:border-[#9945FF] shadow-xl mb-6">
                  <Image src={advisor.avatar} alt={advisor.name} width={160} height={160} className="object-cover w-full h-full" />
                </div>
                <h5 className="text-lg font-bold font-orbitron mb-2 text-white">{advisor.name}</h5>
                <p className="text-sm text-white/70 whitespace-pre-line mb-4">{advisor.role}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {advisor.badges.map((badge, idx) => (
                    <span key={idx} className="bg-[#9945FF]/10 text-[#9945FF] text-xs px-2 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                <a
                  href={advisor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-[#9945FF]"
                >
                  <advisor.icon className="w-5 h-5" />
                  <span className="underline underline-offset-2">Profile</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mt-8">
          At MFAI, leadership isn't assigned — it's activated. <br />
          The Synaptic Governance™ allocates roles, votes on missions, and scales the protocol — together.
        </motion.p>
      </motion.div>
    </section>
  );
}
