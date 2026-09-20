"use client";

import { motion } from "framer-motion";
import { TECH_PILLS } from "@/data/services";

export default function About() {
  return (
    <section id="about" className="py-[105px]">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-[70px]">

        {/* Left Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow-accent mb-2">About Aravind A S</div>
          <h2 className="text-4xl sm:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] leading-tight">
            Trustable freelance developer engineering with a product mindset.
          </h2>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#9da39d] text-[18px] leading-relaxed mb-4">
            I'm <strong>Aravind A S</strong>, a trusted freelance software engineer and web development partner based in Sasthamcotta, Kollam, Kerala. Serving clients across Kollam, Pathanamthitta, Trivandrum, and worldwide.
          </p>
          <p className="text-[#9da39d] text-[18px] leading-relaxed mb-8">
            My engineering expertise covers high-performance custom websites, e-commerce platforms (Noorzah, Wishlist), full-stack web applications, REST API backend integrations, and cross-platform React Native mobile applications.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-[10px]">
            {TECH_PILLS.map((pill, idx) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.06, borderColor: "#3c4339", color: "#c7ff4a" }}
                className="border border-[#252925] bg-[#101211] px-[14px] py-[10px] rounded-full text-[#c7ccc5] text-sm font-medium transition-colors cursor-default"
              >
                {pill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
