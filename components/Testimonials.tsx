"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Reda delivered our Next.js e-commerce platform ahead of schedule with flawless dark mode UI and sub-second page performance. His eye for high-end design detail is exceptional.",
    author: "Marcello Rossi",
    role: "CEO & Founder",
    company: "Aura Luxury Apparel",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Working with Reda was a breeze. He translated our complex AI analytics backend into an intuitively gorgeous, dark-themed dashboard that our clients absolutely love.",
    author: "Elena Rostova",
    role: "Head of Product",
    company: "Vortex Analytics Cloud",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "The quality of code, Framer Motion transitions, and TypeScript structure Reda produces is world-class. Truly one of the top senior full-stack developers in Morocco.",
    author: "Tariq Al-Mansoor",
    role: "Technical Director",
    company: "Nexus Digital Agency",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e50914]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#ff2e4d] mb-4 uppercase tracking-widest"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            What Clients & <span className="text-[#ff2e4d]">Partners Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Quote Slider Card */}
        <div className="relative rounded-3xl bg-neutral-900/80 border border-neutral-800 p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-black/80">
          <Quote className="w-16 h-16 text-[#e50914]/20 absolute top-8 left-8 -z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ff2e4d] text-[#ff2e4d]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-2xl font-medium text-neutral-200 leading-relaxed max-w-3xl mb-10 italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#e50914] shadow-[0_0_15px_rgba(229,9,20,0.5)]"
                />
                <div className="text-left">
                  <h3 className="text-base font-bold text-white">{current.author}</h3>
                  <p className="text-xs text-[#ff2e4d] font-semibold">{current.role}</p>
                  <p className="text-xs text-neutral-400">{current.company}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Control Buttons & Indicators */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-neutral-800/80">
            
            {/* Page Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.8)]"
                      : "w-2.5 bg-neutral-800 hover:bg-neutral-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#e50914] hover:bg-[#e50914] transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#e50914] hover:bg-[#e50914] transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
