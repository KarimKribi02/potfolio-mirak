"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ArrowRight, Sparkles, Download, Code2, Palette } from "lucide-react";

interface HeroProps {
  onOpenVideoModal: () => void;
}

export default function Hero({ onOpenVideoModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0d0d0d] via-[#121212] to-[#0d0d0d]"
    >
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e50914]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#ff2e4d]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-6 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2e4d] animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-[#ff2e4d]" />
            <span>Designer & Full-Stack Web Developer</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff2e4d]">Reda</span>
            <br />
            Crafting Digital <span className="text-[#ff2e4d] drop-shadow-[0_0_25px_rgba(229,9,20,0.5)]">Excellence</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed mb-8"
          >
            I build high-end dark web applications, intuitive mobile products, and luxury digital experiences with Next.js, TypeScript, and Framer Motion. Based in Marrakech, Morocco.
          </motion.p>

          {/* Quick Skill Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300">
              <Code2 className="w-3.5 h-3.5 text-[#ff2e4d]" />
              <span>Full-Stack Engineering</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300">
              <Palette className="w-3.5 h-3.5 text-[#ff2e4d]" />
              <span>UI/UX Architecture</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#e50914] text-white font-semibold text-sm hover:bg-[#ff2e4d] shadow-[0_0_30px_rgba(229,9,20,0.4)] transition-all duration-300 hover:scale-105"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 font-semibold text-sm hover:text-white hover:border-[#e50914] transition-all duration-300 hover:scale-105"
            >
              <span>Let&apos;s Talk</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Portrait & Interactive Media Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
            
            {/* High Quality Portrait Image */}
            <Image
              src="/images/hero-portrait.png"
              alt="Reda Khatib - Senior Developer"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
            />

            {/* Dark Blend Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/50 via-transparent to-[#0d0d0d]/50" />
            <div className="absolute inset-0 border-2 border-[#e50914]/20 rounded-3xl group-hover:border-[#e50914]/60 transition-colors pointer-events-none" />

            {/* Interactive Play Button for Video Showreel Modal */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenVideoModal}
                  className="w-12 h-12 rounded-xl bg-[#e50914] text-white flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:bg-[#ff2e4d] hover:scale-110 transition-all duration-300 group/btn"
                  aria-label="Play Reel"
                >
                  <Play className="w-5 h-5 fill-current translate-x-0.5" />
                </button>
                <div>
                  <h2 className="text-sm font-bold text-white">Watch Showreel</h2>
                  <p className="text-xs text-neutral-400">2026 Interactive Reel (1:45)</p>
                </div>
              </div>

              <div className="w-2.5 h-2.5 rounded-full bg-[#ff2e4d] animate-ping" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
