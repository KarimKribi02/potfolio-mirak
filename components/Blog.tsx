"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  snippet: string;
  fullContent: string;
  image: string;
}

export const blogArticles: ArticleItem[] = [
  {
    id: "nextjs-performance-2026",
    title: "Building High-Performance Next.js 14 Web Applications",
    category: "Engineering",
    date: "July 24, 2026",
    readTime: "6 min read",
    snippet: "Exploring React Server Components, Streaming SSR, Edge Caching, and image optimizations for sub-500ms loads.",
    fullContent: `
# Building High-Performance Next.js 14 Web Applications

In modern web development, speed is the single most critical factor influencing user retention, conversions, and SEO ranking. In this article, we break down core techniques used at senior engineering levels:

### 1. React Server Components (RSC) & Zero-Bundle Impact
RSCs allow server-side logic to run directly without shipping extra JavaScript to the browser. By leveraging Server Components for data fetching and heavy computational tasks, client bundles remain lean.

### 2. Streaming SSR with Suspense
Instead of waiting for the full HTML response, Next.js App Router streams fallback skeletons and populates components asynchronously, delivering instant visual feedback.

### 3. Edge Caching & Incremental Static Regeneration (ISR)
With ISR, static pages update dynamically in the background without needing a full rebuild, combining static speed with dynamic freshness.
    `,
    image: "/images/blog-1.png",
  },
  {
    id: "dark-ui-ux-glassmorphism",
    title: "Mastering Dark UI/UX Design & Glassmorphism Aesthetics",
    category: "Design System",
    date: "June 18, 2026",
    readTime: "5 min read",
    snippet: "Principles of pure pitch dark backgrounds, contrast hierarchy, glowing crimson accents, and subtle glassmorphism.",
    fullContent: `
# Mastering Dark UI/UX Design & Glassmorphism Aesthetics

Dark mode is no longer an optional toggle — it's the gold standard for high-end digital agency portfolios, developer tools, and luxury products.

### 1. Color Hierarchy & Pitch Dark (#0d0d0d)
Pure dark aesthetics rely on controlled contrast ratios. Using true pitch black (#0d0d0d) for background canvas paired with subtle gray surfaces (#121212 and #18181b) creates depth without overwhelming eye strain.

### 2. Strategic Neon Accents (#e50914)
Vibrant crimson red accents draw immediate visual focus to key primary actions, call-to-actions, and active navigation indicators.

### 3. Backdrop Blur & Glassmorphism
Combining transparent dark background tints with backdrop-blur-md creates a sense of tactile materials layering over glowing light backgrounds.
    `,
    image: "/images/blog-2.png",
  },
];

interface BlogProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export default function Blog({ onSelectArticle }: BlogProps) {
  return (
    <section id="blog" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#ff2e4d] mb-4 uppercase tracking-widest"
          >
            Insights & Articles
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Recent News & <span className="text-[#ff2e4d]">Case Studies</span>
          </motion.h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer rounded-3xl bg-neutral-900/70 border border-neutral-800/80 overflow-hidden backdrop-blur-md hover:border-[#e50914]/50 hover:shadow-[0_0_35px_rgba(229,9,20,0.2)] transition-all duration-500 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-950">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[10px] font-bold text-[#ff2e4d] tracking-wider uppercase">
                  {article.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#ff2e4d]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff2e4d] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-[#ff2e4d] group-hover:translate-x-2 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
