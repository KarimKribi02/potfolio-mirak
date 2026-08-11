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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const mainContainer = document.getElementById("main-container");

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const currentScroll = mainContainer ? mainContainer.scrollTop : window.scrollY;

      if (currentScroll < 80) {
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
      setScrolled(scrollY > 30);
      if (scrollY < 80) {
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
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-5 sm:px-8 md:px-12 transition-all duration-300 pointer-events-auto bg-transparent ${
          scrolled ? "py-3 bg-[#080808]/90 backdrop-blur-md border-b border-zinc-800/60" : "py-5"
        } flex items-center justify-between`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Official Logo Image */}
          <a
            href="#home"
            onClick={(e) => handleClickNav(e, "#home", "home")}
            className="group flex items-center gap-2 cursor-pointer z-50"
          >
            <Image
              src="/images/logo1.png"
              alt="Mohamed Karim Logo"
              width={200}
              height={60}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] font-bold tracking-wider text-neutral-300">
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

          {/* Top-Right Phone CTA Highlight (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold tracking-wider text-neutral-300 hover:text-[#E50914] transition-colors pr-2">
            <PhoneCall className="w-3.5 h-3.5 text-[#E50914]" />
            <a href="tel:+212702000215">+212 702 000 215</a>
          </div>

          {/* Mobile Hamburger Drawer Trigger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white z-50 relative focus:outline-none cursor-pointer shadow-lg hover:border-[#E50914] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-[#E50914]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-center items-center px-6 py-20 space-y-3 lg:hidden overflow-y-auto"
          >
            <div className="w-full max-w-sm flex flex-col gap-2.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClickNav(e, item.href, item.id)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-bold tracking-wider transition-all ${
                      isActive
                        ? "bg-[#E50914] text-white shadow-[0_0_25px_rgba(229,9,20,0.4)]"
                        : "text-zinc-300 hover:text-white hover:bg-zinc-900/80 border border-zinc-800/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </a>
                );
              })}

              <a
                href="tel:+212702000215"
                className="mt-3 flex items-center justify-center gap-2 py-4 rounded-2xl bg-zinc-900 border border-[#E50914]/40 text-sm font-bold text-white shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-[#E50914]" />
                <span>+212 702 000 215</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
