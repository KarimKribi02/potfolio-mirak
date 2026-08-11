"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

export interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  logoUrl: string;
  description: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 1,
    period: "2025 – Présent • En poste",
    role: "DÉVELOPPEUR FULL STACK",
    company: "C-DIGITAL",
    logoUrl: "/images/cdigitallogo.png",
    description:
      "Conception et développement d'applications web sur mesure, choix des architectures techniques, et optimisation des bases de données.",
  },
  {
    id: 2,
    period: "2025 – 2026 • 1 an",
    role: "LICENCE EN DÉVELOPPEMENT LOGICIEL",
    company: "UPM – Université Privée de Marrakech",
    logoUrl: "/images/upm.png",
    description:
      "Formation supérieure spécialisée en ingénierie logicielle et développement d'architectures web avancées.",
  },
  {
    id: 3,
    period: "2023 – 2025 • 2 ans",
    role: "TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT DIGITAL (FULL STACK)",
    company: "ISTA NTIC SYBA",
    logoUrl: "/images/ofpptlogo.png",
    description:
      "Maîtrise approfondie des technologies front-end et back-end modernes, intégration d'APIs et gestion de bases de données.",
  },
];

interface WorkExperienceProps {
  onOpenResumeModal?: () => void;
}

export default function WorkExperienceSection({ onOpenResumeModal }: WorkExperienceProps = {}) {
  return (
    <section
      id="work-experience"
      className="relative w-full min-h-screen bg-[#080808] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 px-5 sm:px-8 md:px-12 flex flex-col justify-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#E50914]/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* =========================================================================
            HEADER: TITLE & CTA DOWNLOAD CV BUTTON
           ========================================================================= */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
            Expérience<br className="block sm:hidden" /> Professionnelle
          </h2>

          <a
            href="/MOHAMEDKARIM KRIBI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="MOHAMEDKARIM_KRIBI_CV.pdf"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#E50914] hover:bg-[#c00710] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-[#E50914]/20 rounded-xl cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>TÉLÉCHARGER CV</span>
          </a>
        </div>

        {/* =========================================================================
            VERTICAL TIMELINE WRAPPER WITH GLOWING NODES
           ========================================================================= */}
        <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-4 pl-6 sm:pl-8 md:pl-10 space-y-6 sm:space-y-8">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="relative group"
            >
              {/* Glowing Red Dot Node attached to vertical timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-6 sm:top-7 w-3.5 h-3.5 bg-[#E50914] rounded-full ring-4 ring-[#080808] shadow-[0_0_12px_#E50914] z-10" />

              {/* Main Bento Card Box */}
              <div className="rounded-2xl bg-[#0d0d0d] border border-zinc-800/80 p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:border-zinc-700 transition-all shadow-xl">
                
                {/* Logo Container Box (Large & Prominent) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-zinc-950 border border-zinc-800/90 flex items-center justify-center p-2.5 sm:p-3 shrink-0 shadow-lg group-hover:border-zinc-700 transition-colors">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={exp.logoUrl}
                      alt={exp.company}
                      width={150}
                      height={150}
                      className="w-full h-full object-contain filter brightness-110 contrast-105 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-col flex-1">
                  {/* Period & Duration */}
                  <div className="text-xs font-mono text-zinc-400 mb-1.5 tracking-wide">
                    {exp.period}
                  </div>

                  {/* Role Title */}
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wide mb-1 leading-snug group-hover:text-[#E50914] transition-colors">
                    {exp.role}
                  </h3>

                  {/* Company Name */}
                  <span className="text-xs sm:text-sm font-semibold text-zinc-400 mb-2.5">
                    {exp.company}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
