"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#252925]">
      <div className="wrap">
        
        {/* Large Final CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#252925] rounded-3xl p-6 sm:p-12 md:p-16 bg-[#101211] relative overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(199,255,74,0.14),transparent_40%)] shadow-2xl"
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

      </div>
    </section>
  );
}
