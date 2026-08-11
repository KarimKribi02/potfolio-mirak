"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "ACCUEIL", href: "#home", id: "home" },
  { label: "À PROPOS", href: "#about", id: "about" },
  { label: "PROJETS", href: "#projects", id: "projects" },
  { label: "EXPÉRIENCE", href: "#work-experience", id: "work-experience" },
  { label: "TÉMOIGNAGES", href: "#testimonials", id: "testimonials" },
  { label: "PARTENAIRES", href: "#partners", id: "partners" },
  { label: "CONTACT", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-12 transition-all duration-300 pointer-events-auto bg-transparent ${
        scrolled ? "py-4" : "py-5"
      } flex items-center justify-between`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Official Logo Image */}
        <a
          href="#home"
          onClick={(e) => handleClickNav(e, "#home", "home")}
          className="group flex items-center gap-2 cursor-pointer"
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
                key={item.label}
                href={item.href}
                onClick={(e) => handleClickNav(e, item.href, item.id)}
                className={`relative py-1 transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-[#E50914]"
                    : "text-neutral-300 hover:text-[#E50914]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E50914]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Top-Right Phone CTA Highlight */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold tracking-wider text-neutral-300 hover:text-[#E50914] transition-colors pr-2 sm:pr-4">
          <PhoneCall className="w-3.5 h-3.5 text-[#E50914]" />
          <a href="tel:+212702000215">+212 702 000 215</a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-0 right-0 z-[110] bg-[#080808]/95 backdrop-blur-xl border-b border-neutral-800 p-6 flex flex-col gap-4 text-center text-xs font-bold tracking-widest pointer-events-auto"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleClickNav(e, item.href, item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#e50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>
                );
              })}

              <a
                href="tel:+212702000215"
                className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 border border-[#e50914]/50 text-sm font-semibold text-white shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-[#ff2e4d]" />
                <span>Appeler : +212 702 000 215</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
