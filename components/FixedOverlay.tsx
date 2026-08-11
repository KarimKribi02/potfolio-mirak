"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, PhoneCall, Home, User, FolderGit2, Briefcase, MessageSquare, Building2, Send, ChevronRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

const navItems = [
  { name: "ACCUEIL", href: "#home", id: "home", icon: Home },
  { name: "À PROPOS", href: "#about", id: "about", icon: User },
  { name: "PROJETS", href: "#projects", id: "projects", icon: FolderGit2 },
  { name: "EXPÉRIENCE", href: "#work-experience", id: "work-experience", icon: Briefcase },
  { name: "TÉMOIGNAGES", href: "#testimonials", id: "testimonials", icon: MessageSquare },
  { name: "PARTENAIRES", href: "#partners", id: "partners", icon: Building2 },
  { name: "CONTACT", href: "#contact", id: "contact", icon: Send },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/mohamed-karim-kribi-31b30b248/",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/KarimKribi02",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/krm_02/",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/karim.kech.94617",
  },
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
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-12 transition-all duration-300 pointer-events-auto bg-[#080808]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-neutral-900/60 md:border-transparent ${
          scrolled ? "py-3 md:py-4" : "py-3.5 md:py-5"
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
              width={180}
              height={55}
              priority
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
          className="lg:hidden p-2 text-neutral-200 hover:text-white rounded-lg bg-neutral-900/60 border border-neutral-800/80 focus:outline-none cursor-pointer"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#E50914]" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[110] bg-[#080808]/98 backdrop-blur-2xl pt-20 pb-8 px-5 flex flex-col justify-between pointer-events-auto shadow-2xl overflow-y-auto"
          >
            {/* Header top bar inside drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-white tracking-tight">MK<span className="text-[#E50914]">.</span></span>
                <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Navigation</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-[#E50914]" />
              </button>
            </div>

            {/* Navigation Bento List */}
            <div className="flex flex-col gap-2 my-auto py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      handleClickNav(e, item.href, item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                      isActive
                        ? "bg-[#E50914]/15 border-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.2)]"
                        : "bg-neutral-900/60 border-neutral-800/80 text-neutral-300 hover:bg-neutral-900 hover:border-neutral-700 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? "bg-[#E50914] text-white" : "bg-neutral-800 text-neutral-400"}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold tracking-wider">{item.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-[#E50914] translate-x-0.5" : "text-neutral-500"}`} />
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer Inside Drawer */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-col items-center gap-4">
              <a
                href="tel:+212702000215"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-semibold text-white hover:border-[#E50914] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#E50914]" />
                <span>+212 702 000 215</span>
              </a>

              {/* Mobile Drawer Social Links */}
              <div className="flex items-center gap-3 text-neutral-400">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-[#E50914] hover:bg-[#E50914] transition-all shadow-md"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
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
                className="p-1 text-neutral-400 hover:text-[#E50914] hover:scale-110 transition-all duration-300"
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
