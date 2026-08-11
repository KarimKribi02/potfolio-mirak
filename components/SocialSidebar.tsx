"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "./SocialIcons";

const socialLinks = [
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { name: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { name: "Email", icon: Mail, href: "mailto:contact@redakhatib.dev" },
];

export default function SocialSidebar() {
  return (
    <aside className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center gap-5"
      >
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-[#e50914] transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5 transition-colors group-hover:text-[#ff2e4d]" />
              
              {/* Tooltip */}
              <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
                {social.name}
              </span>
            </a>
          );
        })}
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 90 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="w-[2px] bg-gradient-to-b from-[#e50914] via-neutral-800 to-transparent"
      />
    </aside>
  );
}
