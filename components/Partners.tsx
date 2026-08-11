"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Globe, Terminal, Cpu, Database, Zap } from "lucide-react";

const partners = [
  { name: "Vercel Enterprise", logo: Zap, tag: "Deployment Platform" },
  { name: "Shopify Headless", logo: Globe, tag: "E-Commerce Architecture" },
  { name: "Stripe Payments", logo: ShieldCheck, tag: "Financial Tech" },
  { name: "AWS Cloud", logo: Cpu, tag: "Cloud Infrastructure" },
  { name: "PostgreSQL Global", logo: Database, tag: "Database Systems" },
  { name: "OpenAI Platform", logo: Terminal, tag: "AI Integration" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#ff2e4d] mb-4 uppercase tracking-widest"
          >
            Trusted Stack & Ecosystem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Partners & Ecosystem <span className="text-[#ff2e4d]">Platforms</span>
          </motion.h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.logo;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col items-center justify-center gap-3 text-center grayscale hover:grayscale-0 hover:border-[#e50914] hover:bg-neutral-900/90 hover:shadow-[0_0_25px_rgba(229,9,20,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#ff2e4d] group-hover:border-[#e50914]/60 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold text-neutral-300 group-hover:text-white transition-colors">
                  {partner.name}
                </h3>
                <span className="text-[10px] text-neutral-500 group-hover:text-neutral-400">
                  {partner.tag}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
