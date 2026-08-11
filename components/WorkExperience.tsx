"use client";

import { motion } from "framer-motion";
import { Download, Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface WorkExperienceProps {
  onOpenResumeModal: () => void;
}

const experiences = [
  {
    role: "Senior Full-Stack Developer & Frontend Lead",
    company: "Apex Global Tech",
    location: "Remote / Marrakech",
    period: "2023 - Present",
    description: "Leading frontend architecture and Next.js digital transformation for international client web apps.",
    achievements: [
      "Engineered micro-frontend platform reducing initial load time by 62%",
      "Mentored team of 6 engineers on TypeScript and Framer Motion animation systems",
      "Integrated CI/CD deployment pipelines on Vercel & AWS Cloud"
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"]
  },
  {
    role: "Full-Stack Web Engineer",
    company: "Mirak Web Solutions",
    location: "Marrakech, Morocco",
    period: "2021 - 2023",
    description: "Architected e-commerce systems, custom SaaS applications, and responsive dark UI portals.",
    achievements: [
      "Built custom headless Shopify e-commerce engine powering $2M+ annual sales",
      "Designed dark mode glassmorphism UI system adopted across 12 product lines",
      "Optimized SQL & Redis database query latency down to under 30ms"
    ],
    tech: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "Redux"]
  },
  {
    role: "UI/UX Designer & Web Developer",
    company: "Nexus Digital Agency",
    location: "Casablanca, Morocco",
    period: "2019 - 2021",
    description: "Created wireframes, high-fidelity prototypes, and responsive marketing web apps for luxury brands.",
    achievements: [
      "Designed over 30 client brand identities and landing pages with 99% approval rating",
      "Pioneered interactive 3D web experiences using Three.js and Framer Motion"
    ],
    tech: ["Figma", "JavaScript", "HTML5/CSS3", "WordPress", "Webflow"]
  }
];

export default function WorkExperience({ onOpenResumeModal }: WorkExperienceProps) {
  return (
    <section id="work-experience" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Download Resume CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#ff2e4d] mb-4 uppercase tracking-widest inline-block"
            >
              Career History
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              Work <span className="text-[#ff2e4d]">Experience</span>
            </motion.h2>
          </div>

          {/* Download Resume Red CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#e50914] hover:bg-[#ff2e4d] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(229,9,20,0.4)] transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-800/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-neutral-900 border-2 border-[#e50914] group-hover:border-[#ff2e4d] group-hover:scale-125 group-hover:bg-[#e50914] transition-all shadow-[0_0_15px_rgba(229,9,20,0.6)]" />

              {/* Experience Card */}
              <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md hover:border-[#e50914]/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff2e4d] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 mt-1">
                      <span className="flex items-center gap-1.5 text-neutral-300 font-semibold">
                        <Building2 className="w-3.5 h-3.5 text-[#ff2e4d]" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-[#ff2e4d]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-neutral-400">
                      <CheckCircle2 className="w-4 h-4 text-[#ff2e4d] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
