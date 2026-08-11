"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  logoText?: string;
  logoUrl?: string;
  period: string;
  duration?: string;
  description: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 1,
    role: "Développeur Full Stack",
    company: "C-DIGITAL",
    logoUrl: "/images/cdigitallogo.png",
    logoText: "C-DIGITAL",
    period: "2025 – Présent",
    duration: "En poste",
    description:
      "Conception et développement d'applications web sur mesure, choix des architectures techniques, et optimisation des bases de données.",
  },
  {
    id: 2,
    role: "Licence en Développement Logiciel",
    company: "UPM - Université Privée de Marrakech",
    logoUrl: "/images/upm.png",
    logoText: "UPM MARRAKECH",
    period: "2025 – 2026",
    duration: "1 an",
    description:
      "Formation supérieure spécialisée en ingénierie logicielle et développement d'architectures web avancées.",
  },
  {
    id: 3,
    role: "Technicien Spécialisé en Développement Digital (Full Stack)",
    company: "ISTA NTIC SYBA",
    logoUrl: "/images/ofpptlogo.png",
    logoText: "ISTA NTIC",
    period: "2023 – 2025",
    duration: "2 ans",
    description:
      "Maîtrise approfondie des technologies front-end et back-end modernes, intégration d'APIs et gestion de bases de données.",
  },
];

interface WorkExperienceProps {
  onOpenResumeModal?: () => void;
}

export default function WorkExperienceSection({ onOpenResumeModal }: WorkExperienceProps) {
  const handleDownloadResume = () => {
    if (onOpenResumeModal) {
      onOpenResumeModal();
    } else {
      alert("Téléchargement du CV de Mohamed Karim (Reda)...");
    }
  };

  return (
    <section
      id="work-experience"
      className="relative w-full min-h-screen bg-[#080808] text-white pt-32 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-12 flex flex-col justify-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Subtle radial background glow */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#E50914]/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* =========================================================================
            TOP HEADER BAR WITH DOWNLOAD RESUME BUTTON
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Expérience Professionnelle
          </h2>

          <a
            href="/MOHAMEDKARIM KRIBI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="MOHAMEDKARIM_KRIBI_CV.pdf"
            className="flex items-center gap-2.5 px-7 py-3 bg-[#E50914] hover:bg-[#ff2e4d] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer"
          >
            <span>TÉLÉCHARGER CV</span>
          </a>
        </motion.div>

        {/* =========================================================================
            STRUCTURED EXPERIENCE ROWS GRID
           ========================================================================= */}
        <div className="space-y-0">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="py-10 border-b border-neutral-800/60 last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-neutral-950/40 px-4 -mx-4 rounded-xl transition-colors duration-300"
            >
              {/* Col 1: Logo Badge (3 cols) */}
              <div className="md:col-span-3 flex items-center">
                <div className="w-44 sm:w-48 h-20 sm:h-22 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-sm flex items-center justify-center p-3 relative overflow-hidden transition-all duration-300 group-hover:border-[#E50914] group-hover:bg-neutral-800/80 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.25)] shadow-lg">
                  {exp.logoUrl ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={exp.logoUrl}
                        alt={exp.company}
                        width={180}
                        height={80}
                        className="w-full h-full object-contain filter brightness-110 contrast-105 transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                      />
                    </div>
                  ) : (
                    <span className="font-black text-sm tracking-widest text-neutral-300 group-hover:text-white uppercase text-center leading-none">
                      {exp.logoText || exp.company}
                    </span>
                  )}
                </div>
              </div>

              {/* Col 2: Role & Period (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-center">
                <div className="text-[11px] sm:text-xs font-mono text-neutral-400 mb-1 tracking-wide">
                  {exp.period} {exp.duration ? `· ${exp.duration}` : ""}
                </div>
                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider group-hover:text-[#E50914] transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs text-neutral-400 font-semibold mt-0.5">{exp.company}</span>
              </div>

              {/* Col 3: Responsibilities Description (5 cols) */}
              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
