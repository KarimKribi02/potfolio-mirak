"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    const mainContainer = document.getElementById("main-container");
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Expérience", href: "#work-experience" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Partenaires", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#050505] text-white border-t border-zinc-800/80 relative overflow-hidden font-sans pt-12 sm:pt-14 pb-8 sm:pb-10">
      {/* Ambient center red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E50914]/5 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* =========================================================================
            TOP BIG CTA BANNER
           ========================================================================= */}
        <div className="w-full pb-8 sm:pb-10 border-b border-zinc-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-semibold text-[#E50914] uppercase tracking-widest block mb-1.5">
              Démarrer une collaboration
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Prêt à donner vie à votre projet<span className="text-[#E50914]">?</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E50914] hover:bg-[#ff2e4d] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(229,9,20,0.5)] rounded-xl whitespace-nowrap cursor-pointer shrink-0 text-center"
          >
            <span>ME CONTACTER</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* =========================================================================
            4-COLUMN STRUCTURED FOOTER GRID (BALANCED EQUAL GAPS)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 sm:mb-14 items-start">
          
          {/* Col 1 (Branding & Bio) */}
          <div className="flex flex-col items-start">
            <a href="#home" className="inline-block mb-4 group">
              <Image
                src="/images/logo1.png"
                alt="Mohamed Karim Logo"
                width={170}
                height={50}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-5">
              Développeur Full Stack spécialisé dans le développement d&apos;applications web modernes, sur mesure et performantes. Basé à Marrakech, Maroc.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible pour de nouveaux projets</span>
            </div>
          </div>

          {/* Col 2 (Navigation Links) */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-[#E50914] transition-colors font-light block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (Direct Contact) */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Contact Direct
            </h3>
            <ul className="space-y-3.5 text-xs text-neutral-300 font-light">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E50914] shrink-0" />
                <a
                  href="mailto:kribimohamedkarim@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  kribimohamedkarim@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E50914] shrink-0" />
                <a
                  href="tel:+212702000215"
                  className="hover:text-white transition-colors"
                >
                  +212 702 000 215
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <span>Marrakech 44000, Maroc</span>
              </li>
            </ul>
          </div>

          {/* Col 4 (Réseaux & Back To Top) */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Réseaux
            </h3>
            
            {/* Social Icons Grid */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <a
                href="https://www.linkedin.com/in/mohamed-karim-kribi-31b30b248/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-300 hover:scale-105 shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/KarimKribi02"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-300 hover:scale-105 shadow-md"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/krm_02/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-300 hover:scale-105 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/karim.kech.94617"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-300 hover:scale-105 shadow-md"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:kribimohamedkarim@gmail.com"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all duration-300 hover:scale-105 shadow-md"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-[#E50914] border border-zinc-800 hover:border-[#E50914] text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md cursor-pointer group"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM BAR: COPYRIGHT & TECH STACK
           ========================================================================= */}
        <div className="w-full pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 font-light">
          <div>
            © 2026 Mohamed Karim Kribi. Tous droits réservés.
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Conçu &amp; Développé avec Next.js &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
