"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Smile, CheckCircle2, Cpu, Layers } from "lucide-react";

const stats = [
  { icon: Award, number: "5+", label: "Years Experience", description: "Delivering high-end web & mobile applications" },
  { icon: Briefcase, number: "50+", label: "Projects Completed", description: "Across e-commerce, SaaS & fintech" },
  { icon: Smile, number: "99%", label: "Client Satisfaction", description: "Worldwide client trust & repeat engagements" },
];

const skills = [
  { name: "Web Development (Next.js / React)", level: 98, category: "Frontend" },
  { name: "UI/UX Design & Prototyping", level: 92, category: "Design" },
  { name: "Backend API Systems (Node / Python)", level: 90, category: "Backend" },
  { name: "State Management & Performance", level: 95, category: "Architecture" },
];

const techStack = [
  "Next.js 14+", "TypeScript", "React Native", "Tailwind CSS", "Framer Motion",
  "Node.js", "GraphQL", "PostgreSQL", "Docker", "AWS", "Figma", "REST APIs"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#e50914]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#ff2e4d] mb-4 uppercase tracking-widest"
          >
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Driven by Passion, Defined by <span className="text-[#ff2e4d]">Quality</span>
          </motion.h2>
        </div>

        {/* Big Numerical Stat Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md hover:border-[#e50914]/50 hover:shadow-[0_0_30px_rgba(229,9,20,0.15)] transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-[#ff2e4d] group-hover:bg-[#e50914] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-[#ff2e4d] transition-colors">
                    {stat.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{stat.label}</h3>
                <p className="text-xs text-neutral-400">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Two Column Grid: Bio & Skill Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-[#ff2e4d]" />
                <span>Crafting High-End Software Solutions</span>
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                I am a Senior Designer and Full-Stack Web Developer based in Marrakech, Morocco. Over the past 5+ years, I have specialized in building robust modern web platforms, elegant user interfaces, and fast API microservices for clients around the globe.
              </p>
              <div className="space-y-3">
                {[
                  "Clean, maintainable, modular TypeScript architecture",
                  "Pixel-perfect responsive dark mode UI & smooth animations",
                  "SEO optimized, lightning-fast Core Web Vitals"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff2e4d] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Cloud */}
            <div className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/60">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ff2e4d]" />
                <span>Core Tech Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 hover:border-[#e50914] hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skill Progress Bars Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Technical Proficiency</h3>
            <p className="text-xs text-neutral-400 mb-4">Measured through real-world production experience & project performance.</p>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-neutral-200">{skill.name}</span>
                    <span className="text-[#ff2e4d] font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-neutral-800 overflow-hidden p-0.5 border border-neutral-700/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#e50914] to-[#ff2e4d] shadow-[0_0_12px_rgba(229,9,20,0.6)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
