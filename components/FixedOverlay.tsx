"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import { LinkedinIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";

const navItems = [
  { name: "ACCUEIL", href: "#home", id: "home" },
  { name: "À PROPOS", href: "#about", id: "about" },
  { name: "PROJETS", href: "#projects", id: "projects" },
  { name: "EXPÉRIENCE", href: "#work-experience", id: "work-experience" },
  { name: "TÉMOIGNAGES", href: "#testimonials", id: "testimonials" },
  { name: "PARTENAIRES", href: "#partners", id: "partners" },
  { name: "CONTACT", href: "#contact", id: "contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { name: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
];

export default function FixedOverlay() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic IntersectionObserver for active section tracking across viewport
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "work-experience",
      "testimonials",
      "partners",
      "contact",
    ];

    const mainContainer = document.getElementById("main-container");

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const currentScroll = mainContainer ? mainContainer.scrollTop : window.scrollY;

      if (currentScroll < 100) {
        setActiveSection("home");
        return;
      }

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        let highest = visibleEntries[0];
        for (let i = 1; i < visibleEntries.length; i++) {
          if (visibleEntries[i].intersectionRatio > highest.intersectionRatio) {
            highest = visibleEntries[i];
          }
        }
        if (highest?.target?.id) {
          setActiveSection(highest.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: mainContainer || null,
      rootMargin: "-20% 0px -30% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;
      setScrolled(scrollY > 40);
      if (scrollY < 100) {
        setActiveSection("home");
      }
    };

    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* =========================================================================
          1. 100% PURE TRANSPARENT FIXED NAVBAR (NO BG COLOR & NO BORDER LINE)
         ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-12 transition-all duration-300 pointer-events-auto bg-transparent ${
          scrolled ? "py-4" : "py-5"
        } flex items-center justify-between`}
      >
        {/* Group Logo + Navigation Links */}
        <div className="flex items-center gap-6 xl:gap-10">
          {/* Logo Image */}
          <a
            href="#home"
            onClick={(e) => handleClickNav(e, "#home", "home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Image
              src="/images/logo1.png"
              alt="Mohamed Karim Logo"
              width={220}
              height={70}
              priority
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-[10.5px] font-bold tracking-wider text-neutral-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleClickNav(e, item.href, item.id)}
                  className={`relative py-1 transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-[#E50914]"
                      : "text-neutral-300 hover:text-[#E50914]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E50914]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Phone Highlight */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold tracking-wider text-neutral-300 hover:text-[#E50914] transition-colors pr-2 sm:pr-4">
          <PhoneCall className="w-3.5 h-3.5 text-[#E50914]" />
          <a href="tel:+212702000215">+212 702 000 215</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-20 left-0 right-0 z-[110] bg-[#080808]/95 backdrop-blur-xl border-b border-neutral-800 p-6 flex flex-col gap-4 text-center text-xs font-bold tracking-widest pointer-events-auto"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  handleClickNav(e, item.href, item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 transition-colors ${
                  activeSection === item.id
                    ? "text-[#E50914]"
                    : "text-neutral-400 hover:text-[#E50914]"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-800 text-neutral-300 flex items-center justify-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#E50914]" />
              <a href="tel:+212702000215">+212 702 000 215</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          2. FIXED SIDEBAR ELEMENTS (SOCIAL ICONS + COPYRIGHT & SCROLL LINE)
         ========================================================================= */}
      <aside className="hidden md:flex fixed left-8 top-0 bottom-0 z-50 flex-col items-center justify-between py-6 pointer-events-none">
        {/* Top Vertical Line */}
        <div className="flex flex-col items-center pt-24 pb-4">
          <div className="w-[1px] h-28 sm:h-36 bg-white/20" />
        </div>

        {/* Center Social Links */}
        <div className="flex flex-col items-center gap-6 text-neutral-400 my-auto pointer-events-auto">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Bottom Vertical Line & Fixed Copyright */}
        <div className="flex flex-col items-center pt-4 pb-2">
          <div className="w-[1px] h-28 sm:h-36 bg-white/20 mb-4" />
          <div className="text-[10.5px] text-neutral-400 font-medium tracking-tight whitespace-nowrap pointer-events-auto">
            @ Mohamed Karim Kribi. 2026
          </div>
        </div>
      </aside>

      {/* Right Scroll Indicator */}
      <aside className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center h-48 w-[2px] bg-neutral-800/80 rounded-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full h-12 bg-[#E50914] shadow-[0_0_10px_#E50914]"
        />
      </aside>
    </div>
  );
}
