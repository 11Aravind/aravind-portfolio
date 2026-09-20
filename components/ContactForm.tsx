"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, Phone } from "lucide-react";

export default function ContactForm() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo || !formData.message) return;

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contactInfo}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:aravindas247@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-[105px]">
      <div className="wrap">
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#252925] rounded-[20px] sm:rounded-[28px] p-6 sm:p-[65px] bg-[#101211] relative overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(199,255,74,0.14),transparent_35%)] shadow-2xl"
        >
          <div className="eyebrow-accent mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c7ff4a] animate-pulse shrink-0" />
            <span>Let's build</span>
          </div>
          
          <h2 className="text-[clamp(32px,6vw,72px)] tracking-[-0.05em] sm:tracking-[-0.06em] leading-tight font-extrabold text-[#f4f5f2] mb-4">
            Have an idea worth building?
          </h2>

          <p className="text-[#9da39d] max-w-[550px] text-base sm:text-lg leading-relaxed mb-6">
            Let's turn it into a fast, modern and reliable digital product. Reach out directly via WhatsApp, Call, or Email.
          </p>

          {/* Formatted Contact Details Info Cards - Fully Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-3xl">
            <a
              href="mailto:aravindas247@gmail.com"
              className="p-3.5 rounded-xl sm:rounded-2xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#101211] border border-[#252925] flex items-center justify-center text-[#c7ff4a] shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#9da39d] block uppercase">Email</span>
                <span className="text-xs font-bold text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors truncate block">
                  aravindas247@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/918848310248?text=Hi%20Aravind,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl sm:rounded-2xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#101211] border border-[#252925] flex items-center justify-center text-[#c7ff4a] shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#9da39d] block uppercase">WhatsApp / Call</span>
                <span className="text-xs font-bold text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors block">
                  +91 8848310248
                </span>
              </div>
            </a>

            <a
              href="tel:918129365304"
              className="p-3.5 rounded-xl sm:rounded-2xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#101211] border border-[#252925] flex items-center justify-center text-[#c7ff4a] shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#9da39d] block uppercase">Direct Phone</span>
                <span className="text-xs font-bold text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors block">
                  +91 8129365304
                </span>
              </div>
            </a>
          </div>

          {/* Action CTAs - Responsive Stack */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:aravindas247@gmail.com"
              className="w-full sm:w-auto text-center px-[22px] py-[14px] rounded-full bg-[#c7ff4a] text-[#111111] border border-[#c7ff4a] font-[650] text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-lg shadow-[#c7ff4a]/10"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>Email me ↗</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/918848310248?text=Hi%20Aravind,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-[22px] py-[14px] rounded-full border border-[#343933] text-[#f4f5f2] font-[650] text-sm hover:border-[#555c54] hover:bg-white/[0.04] transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#c7ff4a]" />
              <span>WhatsApp ↗</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowInquiryForm(!showInquiryForm)}
              className="w-full sm:w-auto text-center px-[22px] py-[14px] rounded-full border border-[#343933] text-[#9da39d] font-[650] text-sm hover:text-white hover:border-[#555c54] transition-all"
            >
              {showInquiryForm ? "Hide Form ↑" : "Quick Message Form ↓"}
            </motion.button>
          </div>

          {/* Optional Quick Message Form */}
          <AnimatePresence>
            {showInquiryForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-8 pt-8 border-t border-[#252925] max-w-xl">
                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-4 rounded-xl bg-white/5 border border-[#343933] text-[#c7ff4a] flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Mail client opened with your inquiry for aravindas247@gmail.com! Thank you.</span>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] placeholder-[#737970] focus:outline-none focus:border-[#c7ff4a] text-sm transition-colors"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Email / Phone *"
                          value={formData.contactInfo}
                          onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] placeholder-[#737970] focus:outline-none focus:border-[#c7ff4a] text-sm transition-colors"
                        />
                      </div>
                      <textarea
                        rows={3}
                        required
                        placeholder="Project Brief / Goals *"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] placeholder-[#737970] focus:outline-none focus:border-[#c7ff4a] text-sm resize-none transition-colors"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#c7ff4a] text-[#111111] font-bold text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-lg shadow-[#c7ff4a]/10"
                      >
                        <Send className="w-4 h-4 text-black" />
                        <span>Send Message</span>
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
