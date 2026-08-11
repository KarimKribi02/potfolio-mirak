"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Mohamed Karim a su transformer notre vision pour AANDILIK en une plateforme fluide, rapide et parfaitement architecturée. Son professionnalisme et sa maîtrise de Next.js et NestJS ont fait toute la différence.",
    author: "Nizar Benlahsar",
    role: "Fondateur & CEO, AANDILIK",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Un développeur Full Stack d'une grande rigueur. Sa capacité à concevoir des architectures web complexes tout en garantissant des performances optimales est impressionnante. Travailler avec lui chez C-Digital est un vrai plaisir.",
    author: "Hicham Mhammedi",
    role: "Directeur Technique, Cdigital",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Le site web de Morocco-Loco dépasse nos attentes en termes de design, de vitesse et d'expérience utilisateur. Mohamed Karim comprend parfaitement les enjeux d'une plateforme touristique moderne.",
    author: "Hicham Mhammedi",
    role: "Co-fondateur, Morocco-Loco",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Une excellente expérience de collaboration pour le développement du site UPES Énergie. Le travail est propre, bien structuré et livré dans les délais. Je recommande vivement son expertise.",
    author: "Taoufik Kosker",
    role: "Chef de Projet, UPES Énergie",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Le site web du Tacosito a considérablement amélioré notre visibilité et simplifié les commandes de nos clients. Interface intuitive, moderne et parfaitement optimisée sur mobile.",
    author: "Yassine Rouimi",
    role: "Gérant, Le Tacosito",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "Mohamed Karim est un développeur passionné, orienté solution et très à l'écoute des besoins du client. Sa maîtrise technique et sa créativité sont des atouts majeurs pour tout projet web d'envergure.",
    author: "Khadija Filali",
    role: "Consultante Digital & UI/UX",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  // Keyboard navigation
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

  const current = testimonialsData[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen bg-[#080808] text-white flex items-center justify-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-30 contrast-125 transition-all duration-700 pointer-events-none"
        style={{ backgroundImage: "url('/images/testimonials-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/75 to-[#080808]/95 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Main Content Grid Container */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-12 pt-32 pb-20 sm:pt-36 sm:pb-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* =========================================================================
            LEFT COLUMN: Oversized Crimson Quotes & Title
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          {/* Oversized Crimson Red Quote Icon Marks */}
          <div className="flex gap-2.5 mb-8">
            <div className="w-6 h-12 bg-[#E50914] rounded-t-sm shadow-[0_0_15px_#E50914]" />
            <div className="w-6 h-12 bg-[#E50914] rounded-t-sm shadow-[0_0_15px_#E50914]" />
          </div>

          {/* Main Section Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
            Avis &amp; Témoignages
            <br />
            <span className="text-[#E50914]">Clients</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md leading-relaxed mb-8">
            Ce que disent mes clients et partenaires au sujet de nos collaborations.
          </p>

          {/* Slide Progress Counter */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-white font-bold text-base">0{currentIndex + 1}</span>
            <span>/</span>
            <span>0{testimonialsData.length}</span>
          </div>
        </motion.div>

        {/* =========================================================================
            RIGHT COLUMN: Interactive Testimonial Slider Card
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center items-start lg:pl-4"
        >
          <div className="relative w-full rounded-2xl bg-neutral-950/70 border border-neutral-800/80 p-8 sm:p-10 backdrop-blur-md shadow-2xl">
            
            <Quote className="w-14 h-14 text-[#E50914]/15 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col items-start"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(current.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E50914] text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.5)]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg font-light text-neutral-200 leading-relaxed mb-8 italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Author Name & Role */}
                <div className="border-t border-neutral-800/80 pt-6 w-full flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {current.author}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E50914] font-medium mt-0.5">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls and Indicators */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-900">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                      currentIndex === idx
                        ? "w-8 h-2 bg-[#E50914] shadow-[0_0_10px_#E50914]"
                        : "w-2 h-2 bg-neutral-700 hover:bg-neutral-500"
                    }`}
                    aria-label={`Aller au témoignage ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Square Outline Navigation Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-300 focus:outline-none cursor-pointer shadow-md"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-300 focus:outline-none cursor-pointer shadow-md"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
