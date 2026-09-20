"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, Phone, ArrowRight } from "lucide-react";

interface ContactFormProps {
  initialProjectType?: string;
}

export default function ContactForm({ initialProjectType = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "Website",
    projectStage: "Just an idea",
    budget: "₹50K–₹1L",
    message: ""
  });

  useEffect(() => {
    if (initialProjectType) {
      setFormData(prev => ({
        ...prev,
        projectType: initialProjectType
      }));
    }
  }, [initialProjectType]);

  const projectTypeOptions = [
    "Website",
    "E-commerce",
    "Mobile App",
    "Web Application",
    "CRM / Business System",
    "Existing Product",
    "Other"
  ];

  const projectStageOptions = [
    "Just an idea",
    "Planning",
    "Already have a design",
    "Existing product",
    "Need improvements"
  ];

  const budgetOptions = [
    "Under ₹50K",
    "₹50K–₹1L",
    "₹1L–₹3L",
    "₹3L+"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo) return;

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} by ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact (Email/WhatsApp): ${formData.contactInfo}\nProject Type: ${formData.projectType}\nProject Stage: ${formData.projectStage}\nEstimated Budget: ${formData.budget}\n\nProject Details:\n${formData.message}`
    );

    window.open(`mailto:aravindas247@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#252925]">
      <div className="wrap">
        
        {/* Large Final CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#252925] rounded-3xl p-6 sm:p-12 md:p-16 bg-[#101211] relative overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(199,255,74,0.14),transparent_40%)] shadow-2xl mb-16"
        >
          <div className="eyebrow-accent mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c7ff4a] animate-pulse shrink-0" />
            <span>Direct Lead Channel</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-[-0.05em] leading-tight font-extrabold text-[#f4f5f2] uppercase mb-4">
            HAVE SOMETHING TO BUILD?
          </h2>

          <p className="text-[#9da39d] max-w-2xl text-base sm:text-xl leading-relaxed mb-8 font-medium">
            Let's turn your idea into a working digital product. Reach out directly via WhatsApp, Call, or Email.
          </p>

          {/* Quick Direct Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-4xl">
            <a
              href="mailto:aravindas247@gmail.com"
              className="p-4 rounded-2xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#101211] border border-[#252925] flex items-center justify-center text-[#c7ff4a] shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
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
              className="p-4 rounded-2xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#101211] border border-[#252925] flex items-center justify-center text-[#c7ff4a] shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#9da39d] block uppercase">WhatsApp</span>
                <span className="text-xs font-bold text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors block">
                  +91 8848310248
                </span>
              </div>
            </a>

            <a
              href="tel:918129365304"
              className="p-4 rounded-2xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#101211] border border-[#252925] flex items-center justify-center text-[#c7ff4a] shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#9da39d] block uppercase">Direct Call</span>
                <span className="text-xs font-bold text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors block">
                  +91 8129365304
                </span>
              </div>
            </a>
          </div>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/918848310248?text=Hi%20Aravind,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-[#25D366]/20"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp →</span>
            </a>

            <a
              href="mailto:aravindas247@gmail.com"
              className="px-7 py-3.5 rounded-full border border-[#343933] text-[#f4f5f2] font-bold text-xs uppercase tracking-wider hover:border-[#555c54] hover:bg-white/[0.04] transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#c7ff4a]" />
              <span>Email →</span>
            </a>
          </div>
        </motion.div>

        {/* Project Inquiry Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-[#252925] rounded-3xl p-6 sm:p-10 md:p-12 bg-[#101211] max-w-4xl mx-auto shadow-2xl"
        >
          <div className="mb-8">
            <div className="eyebrow-accent mb-2">Project Inquiry Form</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f4f5f2] uppercase tracking-tight">
              START YOUR PROJECT
            </h2>
            <p className="text-[#9da39d] text-base mt-2">
              Tell me a little about what you're building. I'll get back to you to discuss the project and next steps.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-2xl bg-white/5 border border-[#343933] text-[#c7ff4a] flex items-center gap-3 text-base font-semibold"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <span>Your mail client has been opened with your inquiry! I will review your requirements and reply shortly.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#c7ff4a] uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] placeholder-[#737970] focus:outline-none focus:border-[#c7ff4a] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#c7ff4a] uppercase mb-2">
                    Email / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="email@domain.com or +91..."
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] placeholder-[#737970] focus:outline-none focus:border-[#c7ff4a] text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: What do you want to build? */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#c7ff4a] uppercase mb-2">
                  What do you want to build? *
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypeOptions.map((option) => {
                    const isSelected = formData.projectType === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: option })}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                          isSelected
                            ? "bg-[#c7ff4a] text-[#111111] border-[#c7ff4a] font-bold"
                            : "bg-[#090a0a] text-[#9da39d] border-[#252925] hover:border-[#3c4339] hover:text-white"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Project Stage & Estimated Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#c7ff4a] uppercase mb-2">
                    Project Stage *
                  </label>
                  <select
                    value={formData.projectStage}
                    onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] focus:outline-none focus:border-[#c7ff4a] text-sm transition-colors"
                  >
                    {projectStageOptions.map((stage) => (
                      <option key={stage} value={stage} className="bg-[#090a0a] text-[#f4f5f2]">
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#c7ff4a] uppercase mb-2">
                    Estimated Budget *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] focus:outline-none focus:border-[#c7ff4a] text-sm transition-colors"
                  >
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget} className="bg-[#090a0a] text-[#f4f5f2]">
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Details Textarea */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#c7ff4a] uppercase mb-2">
                  Project Details / Goals
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project, key requirements, or target timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090a0a] border border-[#252925] text-[#f4f5f2] placeholder-[#737970] focus:outline-none focus:border-[#c7ff4a] text-sm resize-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c7ff4a] text-[#111111] font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-lg shadow-[#c7ff4a]/15"
              >
                <span>Send Project Inquiry</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </motion.button>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
}
