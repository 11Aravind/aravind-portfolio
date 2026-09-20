"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User } from "lucide-react";

export default function About() {
  const capabilities = [
    "Websites",
    "E-commerce",
    "Web Applications",
    "Mobile Applications",
    "Billing Software Development",
    "CRM / Business Systems",
    "APIs & Backend",
    "Ongoing Development"
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[#252925]">
      <div className="wrap max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-[#252925] rounded-3xl p-6 sm:p-10 md:p-12 bg-[#101211] shadow-2xl"
        >
          <div className="eyebrow-accent mb-3 flex items-center gap-2">
            <User className="w-4 h-4 text-[#c7ff4a]" />
            <span>Behind The Code</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f4f5f2] uppercase tracking-tight mb-6">
            ABOUT ARAVIND
          </h2>

          <p className="text-[#9da39d] text-lg sm:text-xl leading-relaxed mb-8 font-medium">
            Freelance software engineer based in Kerala, working with businesses and entrepreneurs to build modern digital products.
          </p>

          <div className="border-t border-[#252925] pt-6">
            <h3 className="text-xs font-mono font-bold text-[#c7ff4a] uppercase tracking-wider mb-4">
              Core Technical Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2.5 text-sm font-semibold text-[#f4f5f2]">
                  <CheckCircle2 className="w-4 h-4 text-[#c7ff4a] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
