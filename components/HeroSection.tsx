"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

interface HeroSectionProps {
  onOpenVideoModal?: () => void;
}

export default function HeroSection({ onOpenVideoModal }: HeroSectionProps = {}) {
  const heroRef = useRef<HTMLDivElement>(null);

  // Framer Motion scroll hook for smooth profile image scroll dynamics
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Image scroll transition transform calculations: opacity (1->0), scale (1->0.95), translateY (0->50px)
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const imageTranslateY = useTransform(scrollYProgress, [0, 0.8], [0, 50]);

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative w-full min-h-fit md:min-h-screen h-auto md:h-screen bg-[#080808] text-white flex flex-col justify-center items-center overflow-hidden font-sans selection:bg-[#E50914] selection:text-white px-5 sm:px-8 md:px-12 py-12 md:py-0"
    >
      {/* Background radial vignette & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E50914]/5 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* =========================================================================
          DESKTOP PROFILE IMAGE LAYER (DESKTOP MD+ ONLY)
         ========================================================================= */}
      <motion.div
        style={{
          opacity: imageOpacity,
          scale: imageScale,
          y: imageTranslateY,
        }}
        className="hidden md:block absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-banner1.png"
            alt="Mohamed Karim Kribi Portfolio Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </motion.div>
        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent w-3/5 pointer-events-none" />
      </motion.div>

      {/* =========================================================================
          HERO MAIN CONTENT (STACKED: IMAGE FIRST ON MOBILE, LEFT-ALIGNED ON DESKTOP)
         ========================================================================= */}
      <main className="relative z-10 max-w-6xl mx-auto w-full flex-grow flex flex-col md:flex-row items-center justify-center md:justify-start pt-16 sm:pt-20 md:pt-28 pb-6 pointer-events-auto my-auto">
        
        {/* =========================================================================
            TOP PROFILE IMAGE ON MOBILE (ORDER-1 ON MOBILE, HIDDEN ON DESKTOP)
           ========================================================================= */}
        <div className="block md:hidden order-1 relative w-full max-w-[280px] sm:max-w-[320px] mx-auto overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950 shadow-2xl mb-6">
          <Image
            src="/images/mobile.png"
            alt="Mohamed Karim Kribi"
            width={320}
            height={380}
            priority
            className="w-full h-auto object-cover object-top"
          />
          {/* Subtle bottom gradient to blend into dark background */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        </div>

        {/* =========================================================================
            TEXT CONTENT (ORDER-2 ON MOBILE, ORDER-1 ON DESKTOP)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1 w-full max-w-xl md:max-w-2xl flex flex-col items-center md:items-start text-center md:text-left pl-0 md:pl-6 lg:pl-10"
        >
          {/* Subtitle Tag */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xs md:text-sm font-bold text-[#E50914] tracking-widest uppercase mb-2 md:mb-3"
          >
            Développeur Full Stack &amp; Architecte Web
          </motion.p>

          {/* Main Title Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-3 md:mb-5"
          >
            Mohamed Karim<span className="text-[#E50914]">.</span>
          </motion.h1>

          {/* Paragraph Professional Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xs sm:text-sm text-neutral-300 font-light max-w-sm sm:max-w-md md:max-w-xl mx-auto md:mx-0 leading-relaxed mb-6 md:mb-8"
          >
            Développeur Full Stack passionné par l&apos;ingénierie logicielle et l&apos;architecture web moderne. Fort d&apos;une expérience concrète au sein de l&apos;agence C-Digital et dans la création de plateformes sur mesure (Next.js, NestJS, Laravel, Prisma &amp; SQL), je conçois des solutions digitales haute performance, évolutives et parfaitement optimisées pour l&apos;expérience utilisateur.
          </motion.p>

          {/* Action Button & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full"
          >
            <a
              href="/MOHAMEDKARIM KRIBI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="MOHAMEDKARIM_KRIBI_CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E50914] hover:bg-[#ff2e4d] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(229,9,20,0.5)] rounded-2xl md:rounded-lg cursor-pointer text-center"
            >
              <Download className="w-4 h-4" />
              <span>TÉLÉCHARGER CV</span>
            </a>

            <div className="flex md:hidden items-center justify-center gap-3 pt-1 sm:pt-0">
              <a
                href="https://www.linkedin.com/in/mohamed-karim-kribi-31b30b248/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/KarimKribi02"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all shadow-md"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </main>

      {/* Mobile Footer Copyright (visible on small mobile screens) */}
      <div className="md:hidden text-center py-2 text-[10px] text-neutral-400 z-10">
        @ Mohamed Karim Kribi. 2026
      </div>
    </div>
  );
}
