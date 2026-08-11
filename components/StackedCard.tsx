"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackedCardProps {
  id?: string;
  children: React.ReactNode;
  index: number;
  totalCards: number;
  className?: string;
}

export default function StackedCard({
  id,
  children,
  index,
  totalCards,
  className = "",
}: StackedCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Map scroll progress of this card's scroll track (0 to 1 as next card peels up over it)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === totalCards - 1;

  // Scale down the card underneath as next card slides up over it (1 -> 0.9)
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isLast ? 1 : 0.9]
  );

  // Subtle upward translation for subtle 3D card deck depth effect
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isLast ? "0%" : "-4%"]
  );

  // Darkening overlay opacity (0 -> 0.6) to create depth contrast
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isLast ? 0 : 0.6]
  );

  // Dynamic top corner rounding as section is covered by upcoming card deck
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", isLast ? "0px" : "28px"]
  );

  // Increasing z-index so upcoming sections slide smoothly OVER previous sections
  const zIndex = (index + 1) * 10;

  return (
    <div
      ref={containerRef}
      id={id}
      className="relative h-screen w-full snap-start"
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ zIndex }}
      >
        <motion.div
          style={{
            scale,
            y,
            borderRadius,
            willChange: "transform",
          }}
          className={`relative w-full h-full bg-[#080808] overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.95)] border-t border-white/10 ${className}`}
        >
          {/* Main Section Content Wrapper */}
          <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
            {children}
          </div>

          {/* GPU-Accelerated Darkening Overlay for underlying card */}
          {!isLast && (
            <motion.div
              style={{ opacity: darkOverlayOpacity }}
              className="absolute inset-0 bg-black pointer-events-none z-50 transition-opacity"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
