"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

export const partnersData: Partner[] = [
  {
    id: 1,
    name: "Morocco Loco",
    logoUrl: "/images/morocco loco.png",
    websiteUrl: "https://morocco-loco.com/",
  },
  {
    id: 2,
    name: "AANDILIK",
    logoUrl: "/images/Aandiliklogo.png",
    websiteUrl: "https://aandilik.com/",
  },
  {
    id: 3,
    name: "Cdigital",
    logoUrl: "/images/cdigitallogo.png",
    websiteUrl: "https://cdigital.ma/",
  },
  {
    id: 4,
    name: "UPES Energie",
    logoUrl: "/images/upes.png",
    websiteUrl: "https://upesenergie.com/",
  },
  {
    id: 5,
    name: "Le Tacosito",
    logoUrl: "/images/le tocasito logo.png",
    websiteUrl: "https://letacosito.com/",
  },
  {
    id: 6,
    name: "Mahtaaj",
    logoUrl: "/images/mahtaajlogo.png",
    websiteUrl: "https://mahtaaj.com/",
  },
];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative w-full min-h-screen bg-[#080808] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-8 md:px-12 flex flex-col justify-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#E50914]/5 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Partenaires <span className="text-[#E50914]">&amp; Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm text-neutral-400 font-light mt-2 sm:mt-3 max-w-xl leading-relaxed"
          >
            Entreprises et plateformes qui nous font confiance pour leurs solutions digitales.
          </motion.p>
        </div>

        {/* 6-Logo Large Grid (3 cols on desktop, 2 cols on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 md:gap-10 items-center justify-items-center">
          {partnersData.map((partner, index) => {
            const CardContent = (
              <div className="w-full h-full flex items-center justify-center p-3.5 sm:p-5 relative">
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  width={240}
                  height={110}
                  className="w-full h-full object-contain filter brightness-105 contrast-110 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
                />
              </div>
            );

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="w-full max-w-[320px] h-28 sm:h-36 md:h-40 rounded-xl sm:rounded-2xl bg-neutral-900/80 border border-neutral-800/90 backdrop-blur-md flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:border-[#E50914]/60 hover:bg-neutral-800 hover:shadow-[0_0_35px_rgba(229,9,20,0.25)] hover:scale-105 group shadow-xl cursor-pointer"
              >
                {partner.websiteUrl ? (
                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                    aria-label={`Visiter le site de ${partner.name}`}
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
