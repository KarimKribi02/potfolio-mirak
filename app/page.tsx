"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FixedOverlay from "@/components/FixedOverlay";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import { ProjectItem } from "@/components/Projects";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const revealSections = [
    {
      id: "about",
      component: <AboutSection />,
    },
    {
      id: "projects",
      component: <ProjectsSection />,
    },
    {
      id: "work-experience",
      component: (
        <WorkExperienceSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      ),
    },
    {
      id: "testimonials",
      component: <TestimonialsSection />,
    },
    {
      id: "partners",
      component: <PartnersSection />,
    },
    {
      id: "contact",
      component: (
        <>
          <ContactSection />
          <Footer />
        </>
      ),
    },
  ];

  return (
    <main
      id="main-container"
      className="relative h-screen overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth bg-[#080808] text-white selection:bg-[#E50914] selection:text-white overflow-x-hidden"
    >
      {/* 1. Fixed UI Overlay Frame (Navbar, Social Sidebar, Scroll Line, Copyright) */}
      <FixedOverlay />

      {/* 2. Hero Section (Snap Section 1) */}
      <div className="md:snap-start md:snap-always w-full min-h-fit md:min-h-screen relative">
        <HeroSection onOpenVideoModal={() => setVideoModalOpen(true)} />
      </div>

      {/* 3. Sections Container (Dynamic Height on Mobile, Snap on Desktop) */}
      {revealSections.map((sec) => (
        <div
          key={sec.id}
          className="md:snap-start md:snap-always w-full min-h-fit md:min-h-screen flex flex-col justify-center relative opacity-100"
        >
          {sec.component}
        </div>
      ))}

      {/* Interactive Modals Container */}
      <Modals
        videoModalOpen={videoModalOpen}
        onCloseVideoModal={() => setVideoModalOpen(false)}
        selectedProject={selectedProject}
        onCloseProjectModal={() => setSelectedProject(null)}
        resumeModalOpen={resumeModalOpen}
        onCloseResumeModal={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
