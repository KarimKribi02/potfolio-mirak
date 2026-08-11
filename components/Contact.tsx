"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, Sparkles, Clock } from "lucide-react";

export default function Contact() {
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
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#e50914]/15 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#ff2e4d] mb-4 uppercase tracking-widest"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let&apos;s Work <span className="text-[#ff2e4d]">Together</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-xs text-neutral-400 mb-8 leading-relaxed">
                Have a new project idea, custom web application request, or want to discuss full-time opportunities? Feel free to reach out directly.
              </p>

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#ff2e4d] group-hover:border-[#e50914] group-hover:bg-[#e50914] group-hover:text-white transition-all shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Location</h4>
                    <p className="text-sm font-semibold text-white">Marrakech, Morocco</p>
                  </div>
                </div>

                {/* Email */}
                <a href="mailto:contact@redakhatib.dev" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#ff2e4d] group-hover:border-[#e50914] group-hover:bg-[#e50914] group-hover:text-white transition-all shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Email Address</h4>
                    <p className="text-sm font-semibold text-white group-hover:text-[#ff2e4d] transition-colors">contact@redakhatib.dev</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+212600000000" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#ff2e4d] group-hover:border-[#e50914] group-hover:bg-[#e50914] group-hover:text-white transition-all shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Direct Phone</h4>
                    <p className="text-sm font-semibold text-white group-hover:text-[#ff2e4d] transition-colors">+212 600-000000</p>
                  </div>
                </a>

              </div>
            </div>

            {/* Availability Status Badge Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#ff2e4d]" />
                  <div className="absolute inset-0 rounded-full bg-[#ff2e4d] animate-ping" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Current Availability</h4>
                  <p className="text-[11px] text-neutral-400">Accepting Q3/Q4 Web Projects & Roles</p>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-[#ff2e4d]" />
            </div>

          </motion.div>

          {/* Right Column: Clean Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-[#e50914]/20 border border-[#e50914] text-white text-xs font-semibold flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ff2e4d] shrink-0" />
                <span>Thank you! Your message has been sent successfully. Reda will get back to you within 24 hours.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Consultation"
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project scope, timeline, and goals..."
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#e50914] hover:bg-[#ff2e4d] text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(229,9,20,0.5)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 hover:scale-[1.01]"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
