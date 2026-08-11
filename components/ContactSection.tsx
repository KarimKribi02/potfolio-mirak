"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#080808] text-white pt-32 pb-20 sm:pt-36 sm:pb-24 px-6 sm:px-12 flex items-center justify-center font-sans overflow-hidden border-t border-neutral-900/60 selection:bg-[#E50914] selection:text-white"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-25 contrast-125 transition-all duration-700 pointer-events-none"
        style={{ backgroundImage: "url('/images/contact-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/80 to-[#080808]/95 pointer-events-none" />

      {/* Content Container Grid */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-12 py-24 sm:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* =========================================================================
            LEFT COLUMN: Direct Contact Details & Address
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Contact
          </h2>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-sm leading-relaxed mb-12">
            Bien que les signaux de fumée fonctionnent, il existe des moyens plus simples de me contacter.
          </p>

          {/* Address Details */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider leading-snug">
              Dr Lamcalla No 43 Syba
              <br />
              Marrakech 44000, Maroc
            </h3>
          </div>

          {/* Phone Number */}
          <a
            href="tel:+212702000215"
            className="text-2xl sm:text-3xl font-extrabold text-white hover:text-[#E50914] transition-colors mb-4 tracking-tight"
          >
            +212 702 000 215
          </a>

          {/* Email Address */}
          <a
            href="mailto:kribimohamedkarim@gmail.com"
            className="text-xs sm:text-sm text-neutral-400 font-mono hover:text-white transition-colors"
          >
            kribimohamedkarim@gmail.com
          </a>
        </motion.div>

        {/* =========================================================================
            RIGHT COLUMN: Minimalist Underline Input Form
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Form Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-10">
            Prenons un café et discutons de votre projet{" "}
            <span className="text-[#E50914]">ensemble.</span>
          </h3>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 rounded-lg bg-[#E50914]/20 border border-[#E50914] text-white text-xs font-semibold flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#E50914] shrink-0" />
              <span>Merci ! Votre message a été envoyé avec succès. Mohamed Karim vous recontactera très rapidement.</span>
            </motion.div>
          )}

          {/* Underline Input Form */}
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Field 1: Your Name */}
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre Nom"
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-[#E50914] transition-colors"
              />
            </div>

            {/* Field 2: Your Email */}
            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Votre Email"
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-[#E50914] transition-colors"
              />
            </div>

            {/* Field 3: Your Subject */}
            <div>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Sujet"
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-[#E50914] transition-colors"
              />
            </div>

            {/* Field 4: Message */}
            <div>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Votre Message..."
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-[#E50914] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-[#E50914] hover:bg-[#ff2e4d] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(229,9,20,0.5)] disabled:opacity-50"
              >
                {loading ? "ENVOI EN COURS..." : "ENVOYER"}
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
