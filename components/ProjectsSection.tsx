"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  watermarkText?: string;
  videoBg?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Morocco Loco",
    category: "Full Stack Platform",
    description:
      "Plateforme touristique premium dédiée à la découverte du Maroc, proposant des expériences authentiques, des excursions, des transferts privés et des services de conciergerie.",
    tech: ["Laravel", "Next.js", "MySQL", "Tailwind CSS"],
    link: "https://morocco-loco.com/",
    videoBg:
      "https://res.cloudinary.com/digfptrqs/video/upload/v1786445955/morocco-loco_jbjlkc.mp4",
  },
  {
    id: 2,
    title: "AANDILIK",
    category: "Full Stack Web App",
    description:
      "Plateforme digitale sur mesure dédiée à la location de matériel de chantier au Maroc.",
    tech: ["Next.js", "NestJS", "MySQL", "TypeORM", "Tailwind CSS"],
    link: "https://aandilik.com/",
    videoBg:
      "https://res.cloudinary.com/digfptrqs/video/upload/v1786445095/aandilik_2_guialx.mp4",
  },
  {
    id: 3,
    title: "Cdigital",
    category: "Digital Agency Website",
    description:
      "Site web moderne et premium pour une agence digitale, conçu pour présenter ses services, ses projets et son expertise à travers une expérience immersive.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://cdigital.ma/",
    videoBg:
      "https://res.cloudinary.com/digfptrqs/video/upload/v1786447100/cdigitalvidio_ij9cro.mp4",
  },
  {
    id: 4,
    title: "UPES Energie",
    category: "Website Energy & Sustainability",
    description:
      "Site web professionnel dédié aux solutions énergétiques, conçu pour présenter les services, l’expertise et les engagements de l’entreprise.",
    tech: ["Next.js", "NestJS", "MySQL", "Tailwind CSS"],
    link: "https://upesenergie.com/",
    videoBg:
      "https://res.cloudinary.com/digfptrqs/video/upload/v1786447473/UPES_Energie_w5j1iv.mp4",
  },
  {
    id: 5,
    title: "Mol Trottinette",
    category: "E-Commerce Platform",
    description:
      "Plateforme e-commerce dédiée aux trottinettes électriques et solutions de mobilité urbaine, avec une interface moderne et intuitive.",
    tech: ["Next.js", "NestJS", "MySQL", "Tailwind CSS"],
    link: "https://moltrottinette.com/",
    videoBg:
      "https://res.cloudinary.com/digfptrqs/video/upload/v1786447669/Moltroutinette_q98wbw.mp4",
  },
  {
    id: 6,
    title: "Le Tacosito",
    category: "Restaurant Website",
    description:
      "Site web moderne pour un restaurant, permettant de découvrir le menu, les produits et les offres, avec une expérience adaptée à la commande en ligne.",
    tech: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    link: "https://letacosito.com/",
    videoBg:
      "https://res.cloudinary.com/digfptrqs/video/upload/v1786447914/letacosito_ficml5.mp4",
  },
  {
    id: 7,
    title: "Mahtaaj",
    category: "Marketplace Services",
    description:
      "Plateforme de référence au Maroc qui connecte les particuliers avec des prestataires de services à domicile fiables et qualifiés.",
    tech: ["Next.js", "NestJS", "MySQL", "Tailwind CSS"],
    link: "https://mahtaaj.com/",
    videoBg:
      "https://res.cloudinary.com/digfptrqs/video/upload/v1786448307/mahtaaj_mrfrl6.mp4",
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProject = projectsData[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#080808] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 px-6 sm:px-12 flex flex-col justify-between items-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/5 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* =========================================================================
          DYNAMIC BACKGROUND MEDIA LAYER (DESKTOP ONLY)
         ========================================================================= */}
      <AnimatePresence mode="wait">
        {currentProject.videoBg ? (
          <motion.div
            key={`video-${currentProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden"
          >
            {/* Desktop-Only High-Performance Video Player */}
            <video
              key={currentProject.videoBg}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover z-0 opacity-60"
              src={currentProject.videoBg}
            >
              <source src={currentProject.videoBg} type="video/mp4" />
            </video>

            {/* Contrast Overlay */}
            <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
          </motion.div>
        ) : (
          <motion.div
            key={`watermark-${currentProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex-col items-center justify-center opacity-[0.07]"
          >
            <div className="w-64 h-64 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full border-[8px] sm:border-[12px] border-white flex items-center justify-center relative">
              <span className="text-7xl sm:text-[160px] font-black text-white tracking-tighter">
                {currentProject.title.slice(0, 2)}
              </span>
            </div>
            <span className="text-5xl sm:text-9xl font-black tracking-widest text-white mt-4 uppercase">
              {currentProject.watermarkText || currentProject.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          1. MOBILE VIEW: APP SHOWCASE CARD WITH VIDEO FRAME (BLOCK MD:HIDDEN)
         ========================================================================= */}
      <div className="block md:hidden w-full max-w-md mx-auto z-10 relative">
        {/* Section Header with Navigation Arrows */}
        <div className="flex items-center justify-between mb-3.5 px-1">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-[2px] bg-[#E50914]" />
            <h2 className="text-lg font-extrabold text-white tracking-wide">
              Mes Projets
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center hover:bg-[#E50914] transition-colors"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center hover:bg-[#E50914] transition-colors"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Showcase Card */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`mobile-card-${currentProject.id}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-[#0d0d0d] border border-zinc-800/80 rounded-3xl p-4 sm:p-5 shadow-2xl flex flex-col gap-3"
          >
            {/* Embedded Video Cadre Frame */}
            {currentProject.videoBg ? (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800/80 bg-black shadow-inner">
                <video
                  key={`video-mobile-${currentProject.id}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  src={currentProject.videoBg}
                >
                  <source src={currentProject.videoBg} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 flex items-center justify-center">
                <span className="text-3xl font-black text-white/20 uppercase tracking-widest">
                  {currentProject.title}
                </span>
              </div>
            )}

            {/* Content Details */}
            <div className="pt-1">
              <span className="text-[10.5px] font-bold text-[#E50914] tracking-wider uppercase block mb-1">
                {currentProject.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">
                {currentProject.title}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-3 mb-3 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {currentProject.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10.5px] px-2.5 py-1 rounded-xl font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Full-width Crimson Action Button */}
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E50914] hover:bg-[#c00710] text-white font-bold py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-95 text-xs sm:text-sm shadow-lg shadow-red-950/40"
              >
                <span>Voir le projet</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {projectsData.map((project, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={`mobile-dot-${project.id}`}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 h-2 bg-[#E50914] shadow-[0_0_8px_#E50914]"
                    : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Projet ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VIEW: CINEMATIC CAROUSEL (HIDDEN MD:FLEX)
         ========================================================================= */}
      <div className="hidden md:flex relative z-10 max-w-4xl w-full mx-auto flex-grow items-center justify-center">
        
        {/* Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          className="absolute -left-8 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-30 w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-[#E50914] hover:border-[#E50914] hover:scale-110 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] transition-all duration-300 focus:outline-none cursor-pointer shadow-2xl"
          aria-label="Projet précédent"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Right Navigation Arrow */}
        <button
          onClick={nextSlide}
          className="absolute -right-8 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-30 w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-[#E50914] hover:border-[#E50914] hover:scale-110 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] transition-all duration-300 focus:outline-none cursor-pointer shadow-2xl"
          aria-label="Projet suivant"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Animated Slide Content (Desktop) */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentProject.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex flex-col items-start text-left px-12 md:px-16 w-full drop-shadow-lg"
          >
            {/* Category Tag */}
            {currentProject.category && (
              <span className="text-xs font-semibold text-[#E50914] tracking-widest uppercase mb-2 block drop-shadow-md">
                {currentProject.category}
              </span>
            )}

            {/* Project Title with Red Dot */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              {currentProject.title}
              <span className="text-[#E50914] inline-block ml-1">.</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-neutral-200 font-normal max-w-xl leading-relaxed mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {currentProject.description}
            </p>

            {/* Tech Badges */}
            {currentProject.tech && (
              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-neutral-900 border border-neutral-700/80 text-[10.5px] text-neutral-200 font-mono rounded-md shadow-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* VOIR LE PROJET Solid Crimson Direct Link Button */}
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E50914] text-white font-extrabold px-8 py-3.5 rounded-xl uppercase tracking-wider text-sm transition-transform duration-300 hover:scale-105 hover:bg-[#c00710] shadow-[0_0_25px_rgba(229,9,20,0.6)] cursor-pointer"
            >
              <span>VOIR LE PROJET</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================================
          DESKTOP PAGINATION DOTS INDICATOR (BOTTOM)
         ========================================================================= */}
      <div className="hidden md:flex relative z-10 items-center justify-center gap-3 pt-12 pb-4">
        {projectsData.map((project, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={project.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive
                  ? "w-3 h-3 bg-[#E50914] shadow-[0_0_12px_#E50914] scale-110"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          );
        })}
      </div>

    </section>
  );
}
