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
      className="relative w-full min-h-fit md:min-h-screen bg-[#080808] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 flex flex-col justify-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#E50914]/5 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Partenaires <span className="text-[#E50914]">&amp; Clients</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2 sm:mt-3 max-w-xl leading-relaxed">
            Entreprises et plateformes qui nous font confiance pour leurs solutions digitales.
          </p>
        </div>

        {/* 6-Logo Large Grid (3 cols on desktop, 2 cols on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 md:gap-10 items-center justify-items-center">
          {partnersData.map((partner) => {
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
              <div
                key={partner.id}
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
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
