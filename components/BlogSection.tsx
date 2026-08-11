"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ArticleItem } from "./Blog";

export interface BlogPost {
  id: number;
  title: string;
  category?: string;
  date?: string;
  imageUrl: string;
  slug: string;
  snippet?: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "Building High-Performance Next.js 14 Web Applications",
    category: "Engineering",
    date: "July 24, 2026",
    imageUrl: "/images/blog-1.png",
    slug: "nextjs-performance-2026",
    snippet: "Exploring React Server Components, Streaming SSR, and sub-500ms loads.",
  },
  {
    id: 2,
    title: "Mastering Dark UI/UX Design & Glassmorphism",
    category: "Design System",
    date: "June 18, 2026",
    imageUrl: "/images/blog-2.png",
    slug: "dark-ui-ux-glassmorphism",
    snippet: "Principles of pitch dark backgrounds, contrast hierarchy, and neon red accents.",
  },
  {
    id: 3,
    title: "3W Academy & Digital Tech Ecosystem in Morocco",
    category: "Community",
    date: "May 10, 2026",
    imageUrl: "/images/blog-3.png",
    slug: "digital-tech-ecosystem",
    snippet: "Empowering developers and designers across North Africa through hands-on bootcamps.",
  },
];

interface BlogSectionProps {
  onSelectArticle?: (article: ArticleItem) => void;
}

export default function BlogSection({ onSelectArticle }: BlogSectionProps) {
  return (
    <section
      id="blog"
      className="relative w-full min-h-screen bg-[#080808] text-white pt-32 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-12 flex flex-col justify-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-16 sm:mb-20"
        >
          Actualités Récentes
        </motion.h2>

        {/* 3-Column Vertical News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {blogPostsData.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => {
                if (onSelectArticle) {
                  onSelectArticle({
                    id: post.slug,
                    title: post.title,
                    category: post.category || "News",
                    date: post.date || "2026",
                    readTime: "5 min read",
                    snippet: post.snippet || post.title,
                    fullContent: `# ${post.title}\n\n${post.snippet}\n\nDetailed case study and article write-up...`,
                    image: post.imageUrl,
                  });
                }
              }}
              className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer border border-neutral-800/80 bg-neutral-950 shadow-2xl transition-all duration-500 hover:border-[#E50914]/60"
            >
              {/* Background Cover Image with Hover Zoom */}
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                priority={index === 0}
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                
                {/* Category Pill Tag (Top Left) */}
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 text-[10px] font-bold text-neutral-300 uppercase tracking-widest group-hover:text-[#ff2e4d] group-hover:border-[#E50914] transition-colors">
                    {post.category}
                  </span>

                  {/* Arrow Icon Indicator */}
                  <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 flex items-center justify-center text-white group-hover:bg-[#E50914] group-hover:border-[#E50914] group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Snippet (Bottom) */}
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 mb-2 block tracking-wider">
                    {post.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ff2e4d] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
