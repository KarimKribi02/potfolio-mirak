"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="relative w-full min-h-screen bg-[#080808] text-white pt-32 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-12 flex flex-col justify-between items-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/5 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* =========================================================================
          DYNAMIC BACKGROUND MEDIA LAYER (VIDEO PREVIEW OR WATERMARK FALLBACK)
         ========================================================================= */}
      <AnimatePresence mode="wait">
        {currentProject.videoBg ? (
          <motion.div
            key={`video-${currentProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          >
            {/* Background Video Player */}
            <video
              key={currentProject.videoBg}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover z-0 opacity-70"
              src={currentProject.videoBg}
            >
              <source src={currentProject.videoBg} type="video/mp4" />
            </video>

            {/* Light, subtle dark overlay so the video is clearly visible */}
            <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
          </motion.div>
        ) : (
          <motion.div
            key={`watermark-${currentProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex flex-col items-center justify-center opacity-[0.07]"
          >
            {/* Large Central Emblem Circle / Badge */}
            <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full border-[12px] border-white flex items-center justify-center relative">
              {/* Inner Monogram Mark */}
              <span className="text-9xl sm:text-[160px] font-black text-white tracking-tighter">
                {currentProject.title.slice(0, 2)}
              </span>
            </div>

            {/* Large Watermark Text */}
            <span className="text-7xl sm:text-9xl font-black tracking-widest text-white mt-4 uppercase">
              {currentProject.watermarkText || currentProject.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer Top */}
      <div className="w-full h-8" />

      {/* =========================================================================
          MAIN CAROUSEL CONTAINER (CENTER ALIGNED)
         ========================================================================= */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex-grow flex items-center justify-center">
        
        {/* Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 p-3 text-neutral-300 hover:text-white hover:scale-125 transition-all duration-300 focus:outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] cursor-pointer"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
        </button>

        {/* Right Navigation Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 sm:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 p-3 text-neutral-300 hover:text-white hover:scale-125 transition-all duration-300 focus:outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] cursor-pointer"
          aria-label="Next Project"
        >
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
        </button>

        {/* Animated Slide Content */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentProject.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex flex-col items-start text-left px-8 sm:px-16 w-full drop-shadow-lg"
          >
            {/* Category Tag */}
            {currentProject.category && (
              <span className="text-xs font-semibold text-[#E50914] tracking-widest uppercase mb-2 drop-shadow-md">
                {currentProject.category}
              </span>
            )}

            {/* Project Title with Red Dot */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase leading-none mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              {currentProject.title}
              <span className="text-[#E50914] inline-block ml-1">.</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-200 font-normal max-w-xl leading-relaxed mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {currentProject.description}
            </p>

            {/* Tech Badges */}
            {currentProject.tech && (
              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-[10.5px] text-neutral-200 font-mono shadow-md"
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
              className="inline-flex items-center justify-center bg-[#E50914] text-white font-bold px-8 py-3.5 rounded-none uppercase tracking-wider text-sm transition-transform duration-300 hover:scale-105 hover:bg-[#c00710] shadow-[0_0_25px_rgba(229,9,20,0.6)] cursor-pointer"
            >
              VOIR LE PROJET
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================================
          PAGINATION DOTS INDICATOR (BOTTOM)
         ========================================================================= */}
      <div className="relative z-10 flex items-center justify-center gap-3 pt-12 pb-4">
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
