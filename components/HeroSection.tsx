"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

  // Ultra-smooth cinematic cubic-bezier easing curve tuple
  const transitionEase = [0.16, 1, 0.3, 1] as const;

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative w-full min-h-screen bg-[#080808] text-white flex flex-col justify-between overflow-hidden font-sans selection:bg-[#E50914] selection:text-white"
    >
      {/* Background radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E50914]/5 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* =========================================================================
          HERO PROFILE IMAGE LAYER (EXTRA-SLOW 2.8S CINEMATIC ENTRANCE ZOOM)
         ========================================================================= */}
      <motion.div
        style={{
          opacity: imageOpacity,
          scale: imageScale,
          y: imageTranslateY,
        }}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden"
      >
        {/* Synchronized Extra-Slow Entrance Zoom (1.12 -> 1 over 2.8s) */}
        <motion.div
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 2.8,
            ease: transitionEase,
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-banner1.png"
            alt="Mohamed Karim Kribi Portfolio Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right-bottom md:object-right"
          />
        </motion.div>
        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent w-full md:w-3/5 pointer-events-none" />
      </motion.div>

      {/* =========================================================================
          HERO MAIN CONTENT SPLIT GRID (SYNCHRONIZED EXTRA-SLOW ENTRANCE)
         ========================================================================= */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-32 pb-12 pointer-events-auto">
        {/* Left Column Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2.2, ease: transitionEase }}
          className="lg:col-span-7 xl:col-span-6 flex flex-col items-start pt-6 lg:pt-0 pl-0 md:pl-12 lg:pl-16"
        >
          {/* Subtitle Tag */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1.6, ease: transitionEase }}
            className="text-xs sm:text-sm font-semibold text-[#E50914] tracking-widest uppercase mb-3"
          >
            Développeur Full Stack &amp; Architecte Web
          </motion.p>

          {/* Main Title Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.55, duration: 1.7, ease: transitionEase }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none mb-6 whitespace-nowrap"
          >
            Mohamed Karim<span className="text-[#E50914]">.</span>
          </motion.h1>

          {/* Paragraph Professional Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1.8, ease: transitionEase }}
            className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl leading-relaxed"
          >
            Développeur Full Stack passionné par l&apos;ingénierie logicielle et l&apos;architecture web moderne. Fort d&apos;une expérience concrète au sein de l&apos;agence C-Digital et dans la création de plateformes sur mesure (Next.js, NestJS, Laravel, Prisma &amp; SQL), je conçois des solutions digitales haute performance, évolutives et parfaitement optimisées pour l&apos;expérience utilisateur.
          </motion.p>
        </motion.div>
      </main>

      {/* Mobile Footer Copyright (visible on small mobile screens) */}
      <div className="md:hidden text-center py-4 text-[10px] text-neutral-400 z-10">
        @ Mohamed Karim Kribi. 2026
      </div>
    </div>
  );
}
