"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Eye, Sparkles } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Web Apps" | "E-Commerce" | "UI/UX & Mobile";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "luxury-ecommerce",
    title: "Aura Luxury E-Commerce",
    category: "E-Commerce",
    description: "High-performance luxury apparel store with stripe checkout, dark mode & instant search.",
    longDescription: "A full-stack Next.js 14 e-commerce platform designed for high-end fashion brands. Features micro-animations, headless Shopify integration, real-time inventory management, multi-currency support, and optimized sub-second page loads.",
    image: "/images/project-ecommerce.png",
    tags: ["Next.js 14", "Stripe", "Tailwind CSS", "Zustand"],
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/example/aura-ecommerce",
    features: [
      "Headless CMS integration with Instant Search",
      "Custom dark glassmorphic checkout experience",
      "Stripe 3D Secure 2.0 payment processing",
      "Animated product quick-view modal"
    ]
  },
  {
    id: "saas-analytics",
    title: "Vortex Cloud AI Analytics",
    category: "Web Apps",
    description: "Enterprise SaaS dashboard with real-time AI metrics, interactive graphs, and team permissions.",
    longDescription: "An AI-powered web dashboard built for cloud telemetry and infrastructure monitoring. Displays live WebSocket data, dynamic chart filtering, role-based user management, and automated export reports.",
    image: "/images/project-saas.png",
    tags: ["TypeScript", "Next.js", "Recharts", "Node.js"],
    liveUrl: "https://example.com/vortex",
    githubUrl: "https://github.com/example/vortex-analytics",
    features: [
      "Real-time WebSocket data stream visualizer",
      "Custom chart dark mode theme with neon highlights",
      "Multi-tenant team workspace permissions",
      "Sub-second data aggregation engine"
    ]
  },
  {
    id: "mobile-fitness",
    title: "Apex Fitness Mobile App",
    category: "UI/UX & Mobile",
    description: "Sleek dark theme mobile app UI for workout tracking, health analytics, and personal training.",
    longDescription: "A cross-platform React Native workout companion app featuring dark OLED UI, haptic feedback integration, offline workout logging, and sync with Apple Health & Google Fit.",
    image: "/images/project-mobile.png",
    tags: ["React Native", "Expo", "Framer Motion", "Figma"],
    liveUrl: "https://example.com/apex-mobile",
    githubUrl: "https://github.com/example/apex-fitness",
    features: [
      "OLED pitch dark color scheme with glowing accents",
      "Interactive 3D body heatmaps for muscle targeting",
      "Offline sync with local SQLite database",
      "Seamless wearable device connectivity"
    ]
  }
];

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Web Apps", "E-Commerce", "UI/UX & Mobile"];

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#e50914]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#ff2e4d] mb-4 uppercase tracking-widest"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-[#ff2e4d]">Projects</span> & Works
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#e50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.5)] scale-105"
                  : "bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-neutral-900/70 border border-neutral-800/80 overflow-hidden backdrop-blur-md hover:border-[#e50914]/50 hover:shadow-[0_0_35px_rgba(229,9,20,0.2)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Thumbnail Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-80" />
                  
                  {/* Category Pill Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[10px] font-bold text-[#ff2e4d] tracking-wider uppercase">
                    {project.category}
                  </span>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-[#0d0d0d]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="p-3 rounded-full bg-[#e50914] text-white shadow-lg hover:bg-[#ff2e4d] hover:scale-110 transition-all"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:border-[#e50914] hover:scale-110 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff2e4d] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Action Button */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[10px] text-neutral-400 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-white group-hover:border-[#e50914] group-hover:bg-[#e50914] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>See Project Details</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
