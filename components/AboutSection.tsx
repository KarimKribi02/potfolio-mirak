"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code2, Smartphone, Layout, Database, Server } from "lucide-react";

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

const mobileServices = [
  { title: "Développement Web (Next.js & React)", icon: Code2, desc: "Applications web ultra-rapides & SSR" },
  { title: "Architecture Back-End (NestJS & Node)", icon: Server, desc: "APIs REST, microservices & sécurité" },
  { title: "Développement Laravel & PHP", icon: Smartphone, desc: "Systèmes SaaS & gestion métier" },
  { title: "UI/UX Design & Tailwind CSS", icon: Layout, desc: "Interfaces modernes & haute conversion" },
  { title: "Bases de Données & Cloud", icon: Database, desc: "PostgreSQL, MySQL, Prisma & Docker" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-fit md:min-h-screen bg-[#080808] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 flex items-center justify-center font-sans overflow-hidden border-t border-neutral-900/60"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[#E50914]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* =========================================================================
            DESKTOP VIEW (SPLIT GRID)
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
          {/* LEFT COLUMN: Years of Experience Box */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="col-span-5 flex justify-start"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-none border border-neutral-800/80 bg-neutral-950/40 p-10 flex flex-col justify-between items-center text-center shadow-2xl backdrop-blur-xs group hover:border-neutral-700 transition-colors">
              <div className="flex-1 flex items-center justify-center pt-4">
                <span className="text-9xl font-extrabold tracking-tighter text-white leading-none flex items-baseline">
                  2+
                  <span className="w-5 h-5 rounded-full bg-[#E50914] ml-1 inline-block shadow-[0_0_15px_#E50914]" />
                </span>
              </div>
              <div className="text-base font-semibold tracking-wide text-neutral-200 leading-snug mb-6">
                <div>Ans</div>
                <div>D&apos;expérience</div>
                <div>Professionnelle</div>
              </div>
              <div className="w-16 h-[1px] bg-neutral-800 group-hover:bg-[#E50914] transition-colors" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Great Experience & Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
              Grande Expérience
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mb-12 tracking-wide max-w-xl leading-relaxed">
              Je développe professionnellement depuis plus de 2 ans.
            </p>

            <div className="space-y-8">
              {skillsData.map((skill, index) => (
                <div key={skill.title} className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold tracking-wider">
                    <span className="text-white uppercase">{skill.title}</span>
                    <span className="text-neutral-300 font-mono">{skill.percentage}%</span>
                  </div>
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

        {/* =========================================================================
            MOBILE BENTO VIEW (CLEAN CARD STACK)
           ========================================================================= */}
        <div className="block lg:hidden space-y-5">
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-bold text-[#E50914] uppercase tracking-widest block mb-1">
              À Propos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Expertise &amp; Savoir-Faire<span className="text-[#E50914]">.</span>
            </h2>
          </div>

          {/* Stats Bento Card */}
          <div className="rounded-2xl bg-[#0d0d0d] border border-zinc-800/80 p-5 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-black text-white tracking-tight leading-none">
                2+
              </span>
              <div className="text-xs font-semibold text-neutral-300 leading-tight">
                <div>Ans d&apos;expérience</div>
                <div className="text-[#E50914] font-bold">Professionnelle</div>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-semibold">
              Actif
            </div>
          </div>

          {/* Services List Bento Cards */}
          <div className="space-y-3">
            {mobileServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="rounded-2xl bg-[#0d0d0d] border border-zinc-800/80 p-4 shadow-md flex items-center justify-between gap-3 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E50914] shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white tracking-wide leading-snug">
                        {srv.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#E50914] shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
