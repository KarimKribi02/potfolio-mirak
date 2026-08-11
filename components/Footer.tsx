"use client";

import Image from "next/image";
import { ChevronUp, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-neutral-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Official Logo */}
        <a href="#home" className="flex items-center gap-2.5 mb-6 group">
          <Image
            src="/images/logo1.png"
            alt="Reda Logo"
            width={220}
            height={70}
            priority
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <p className="text-xs text-neutral-400 max-w-md text-center mb-8 leading-relaxed">
          Développeur Full Stack spécialisé dans le développement d&apos;applications web modernes et performantes. Basé à Marrakech, Maroc.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-neutral-400 mb-10">
          <a href="#home" className="hover:text-[#E50914] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#E50914] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#E50914] transition-colors">Projects</a>
          <a href="#work-experience" className="hover:text-[#E50914] transition-colors">Work Experience</a>
          <a href="#testimonials" className="hover:text-[#E50914] transition-colors">Testimonials</a>
          <a href="#partners" className="hover:text-[#E50914] transition-colors">Partners</a>
          <a href="#blog" className="hover:text-[#E50914] transition-colors">Blog</a>
          <a href="#contact" className="hover:text-[#E50914] transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#e50914] hover:bg-[#e50914] transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#e50914] hover:bg-[#e50914] transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#e50914] hover:bg-[#e50914] transition-all"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:kribimohamedkarim@gmail.com"
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#e50914] hover:bg-[#e50914] transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="w-full pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Mohamed Karim (Reda). All rights reserved.</span>
          </div>

          {/* Smooth Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#e50914] transition-all group"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-[#ff2e4d]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
