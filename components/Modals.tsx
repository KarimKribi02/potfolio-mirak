"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, CheckCircle2, Calendar, Clock, Play } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { ProjectItem } from "./Projects";
import { ArticleItem } from "./Blog";

interface ModalsProps {
  videoModalOpen: boolean;
  onCloseVideoModal: () => void;
  selectedProject: ProjectItem | null;
  onCloseProjectModal: () => void;
  resumeModalOpen: boolean;
  onCloseResumeModal: () => void;
  selectedArticle?: ArticleItem | null;
  onCloseArticleModal?: () => void;
}

export default function Modals({
  videoModalOpen,
  onCloseVideoModal,
  selectedProject,
  onCloseProjectModal,
  resumeModalOpen,
  onCloseResumeModal,
  selectedArticle = null,
  onCloseArticleModal = () => {},
}: ModalsProps) {
  return (
    <>
      {/* 1. Video Showreel Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-[#ff2e4d]" />
                  <h3 className="text-lg font-bold text-white">Reda Khatib - 2026 Interactive Showreel</h3>
                </div>
                <button
                  onClick={onCloseVideoModal}
                  className="p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-neutral-950 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-[#e50914] text-white flex items-center justify-center shadow-[0_0_40px_rgba(229,9,20,0.8)] mb-6 animate-pulse">
                  <Play className="w-8 h-8 fill-current translate-x-1" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2">Showreel Demo Player</h4>
                <p className="text-xs text-neutral-400 max-w-md mb-6">
                  Interactive showreel highlighting custom Next.js web applications, Framer Motion transitions, and dark theme UI components.
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={onCloseVideoModal}
                    className="px-6 py-2.5 rounded-full bg-[#e50914] text-white font-bold text-xs uppercase"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="relative w-full max-w-3xl rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl my-8"
            >
              <div className="relative aspect-[16/9] bg-neutral-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                
                <button
                  onClick={onCloseProjectModal}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-neutral-700 hover:bg-[#e50914] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#e50914]/20 border border-[#e50914]/40 text-xs font-bold text-[#ff2e4d]">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">Key Features & Architecture</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedProject.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-950/60 p-3 rounded-xl border border-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-[#ff2e4d] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-800">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-neutral-950 text-xs font-mono text-neutral-400 border border-neutral-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-neutral-300 hover:text-white hover:border-[#e50914] transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#ff2e4d] text-xs font-bold text-white shadow-lg transition-all"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Resume Download / Viewer Modal */}
      <AnimatePresence>
        {resumeModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl bg-neutral-900 border border-neutral-800 p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800 mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white">Reda Khatib - Resume</h3>
                  <p className="text-xs text-neutral-400">Senior Designer & Full-Stack Developer (2026 Edition)</p>
                </div>
                <button
                  onClick={onCloseResumeModal}
                  className="p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-8 text-xs text-neutral-300 leading-relaxed">
                <p>
                  <strong className="text-white">Summary:</strong> Senior Full-Stack Engineer with 5+ years of experience architecting high-performance Next.js web applications, responsive dark UI systems, and API microservices.
                </p>
                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                  <p><strong className="text-[#ff2e4d]">Core Skills:</strong> Next.js 14, TypeScript, React, Tailwind CSS, Framer Motion, Node.js, GraphQL, PostgreSQL, Docker, AWS.</p>
                  <p><strong className="text-[#ff2e4d]">Location:</strong> Marrakech, Morocco (Open to Remote Worldwide & On-Site Roles)</p>
                  <p><strong className="text-[#ff2e4d]">Languages:</strong> English (Fluent), French (Fluent), Arabic (Native)</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-neutral-800">
                <button
                  onClick={onCloseResumeModal}
                  className="px-5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-neutral-400 hover:text-white"
                >
                  Close
                </button>
                <a
                  href="/MOHAMEDKARIM KRIBI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="MOHAMEDKARIM_KRIBI_CV.pdf"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#ff2e4d] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="relative w-full max-w-3xl rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-10 shadow-2xl my-8"
            >
              <button
                onClick={onCloseArticleModal}
                className="absolute top-6 right-6 p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 text-xs text-neutral-400 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#e50914]/20 text-[#ff2e4d] font-bold">
                  {selectedArticle.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-6">{selectedArticle.title}</h2>

              <div className="prose prose-invert max-w-none text-neutral-300 text-sm leading-relaxed space-y-4 whitespace-pre-line border-t border-neutral-800 pt-6">
                {selectedArticle.fullContent}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-end">
                <button
                  onClick={onCloseArticleModal}
                  className="px-6 py-2.5 rounded-xl bg-[#e50914] text-white font-bold text-xs uppercase"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
