"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillItem {
  title: string;
  percentage: number;
}

const skillsData: SkillItem[] = [
  {
    title: "DÉVELOPPEMENT WEB (NEXT.JS & REACT.JS)",
    percentage: 95,
  },
  {
    title: "ARCHITECTURE BACK-END (NESTJS & NODE.JS)",
    percentage: 90,
  },
  {
    title: "DÉVELOPPEMENT LARAVEL & PHP",
    percentage: 85,
  },
  {
    title: "DESIGN UI/UX & TAILWIND CSS",
    percentage: 95,
  },
  {
    title: "BASES DE DONNÉES (SQL, POSTGRESQL, MONGODB)",
    percentage: 85,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#080808] text-white pt-32 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-12 flex items-center justify-center font-sans overflow-hidden border-t border-neutral-900/60"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[#E50914]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* =========================================================================
            LEFT COLUMN: Years of Experience Box
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-none border border-neutral-800/80 bg-neutral-950/40 p-8 sm:p-10 flex flex-col justify-between items-center text-center shadow-2xl backdrop-blur-xs group hover:border-neutral-700 transition-colors">
            
            {/* Massive Stat Text */}
            <div className="flex-1 flex items-center justify-center pt-4">
              <span className="text-8xl sm:text-9xl font-extrabold tracking-tighter text-white leading-none flex items-baseline">
                2+
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#E50914] ml-1 inline-block shadow-[0_0_15px_#E50914]" />
              </span>
            </div>

            {/* Label Stack (French) */}
            <div className="text-sm sm:text-base font-semibold tracking-wide text-neutral-200 leading-snug mb-6">
              <div>Ans</div>
              <div>D&apos;expérience</div>
              <div>Professionnelle</div>
            </div>

            {/* Small decorative horizontal line inside box */}
            <div className="w-16 h-[1px] bg-neutral-800 group-hover:bg-[#E50914] transition-colors" />

          </div>
        </motion.div>

        {/* =========================================================================
            RIGHT COLUMN: Great Experience & Progress Bars
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Grande Expérience
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-400 font-light mb-12 tracking-wide max-w-xl leading-relaxed">
            Je développe professionnellement depuis plus de 2 ans.
          </p>

          {/* Progress Bars List */}
          <div className="space-y-8">
            {skillsData.map((skill, index) => (
              <div key={skill.title} className="space-y-3">
                
                {/* Header row: Skill Title & Percentage */}
                <div className="flex justify-between items-center text-[11px] sm:text-xs font-bold tracking-wider">
                  <span className="text-white uppercase">{skill.title}</span>
                  <span className="text-neutral-300 font-mono">{skill.percentage}%</span>
                </div>

                {/* Sleek Progress Bar Track & Crimson Fill */}
                <div className="w-full h-[2px] bg-neutral-800/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                    className="h-full bg-[#E50914] shadow-[0_0_12px_#E50914]"
                  />
                </div>

              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
