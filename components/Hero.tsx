"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowDown, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const featuredWorkTeasers = [
    { name: "Noorzah", type: "E-Commerce Store", url: "https://noorzah.com/", badge: "Featured Hero" },
    { name: "Wishlist by Praveena", type: "Fashion Store", url: "https://wishlistbypraveena.vercel.app/" },
    { name: "NC Brand Fashion", type: "Storefront", url: "https://www.ncbrandfashion.com" },
    { name: "Aoba", type: "Web App", url: "https://11aravind.github.io/Aoba/" },
  ];

  return (
    <section className="hero wrap min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-24 pb-12 sm:pt-36 sm:pb-20">
      
      {/* Cinematic Ambient Glow Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[300px] sm:w-[580px] h-[300px] sm:h-[580px] -right-[80px] sm:-right-[160px] top-[20px] bg-[radial-gradient(circle,rgba(199,255,74,0.18),transparent_68%)] blur-[20px] sm:blur-[25px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1020px]"
      >
        
        {/* Eyebrow with SEO Keywords */}
        <motion.div variants={itemVariants} className="inline-block mb-4 sm:mb-5">
          <div className="text-[#c7ff4a] text-[11px] sm:text-[13px] font-bold tracking-[0.08em] sm:tracking-[0.14em] uppercase flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c7ff4a] shrink-0" />
              <span className="leading-snug">Trustable Freelance Developer · Kerala (Kollam & Pathanamthitta)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[#737970]">•</span>
              <span className="text-[#f4f5f2] bg-[#101211] border border-[#252925] px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono w-fit">
                Live Production Work Below ↓
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[32px] xs:text-[38px] sm:text-[clamp(44px,7.5vw,96px)] leading-[1.18] sm:leading-[0.96] tracking-[-0.04em] sm:tracking-[-0.06em] font-extrabold text-[#f4f5f2] mb-6 sm:mb-8"
        >
          Top-rated web development & mobile app developer in Kerala.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="max-w-[680px] text-[#9da39d] text-[15px] sm:text-[20px] leading-[1.65] sm:leading-relaxed mb-8 sm:mb-10"
        >
          Helping businesses in Kollam, Pathanamthitta, and across Kerala build high-converting custom websites, e-commerce platforms, and cross-platform mobile apps.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-4 mb-12 sm:mb-16">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="w-full sm:w-auto text-center px-[24px] py-[15px] rounded-full bg-[#c7ff4a] text-[#111111] border border-[#c7ff4a] font-[650] text-sm shadow-lg shadow-[#c7ff4a]/10 hover:shadow-[#c7ff4a]/20 transition-all inline-flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Explore Live Work</span>
            <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="w-full sm:w-auto text-center px-[24px] py-[15px] rounded-full border border-[#343933] text-[#f4f5f2] font-[650] text-sm hover:border-[#555c54] hover:bg-white/[0.04] transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>Start a project / Hire</span>
            <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
          </motion.a>
        </motion.div>

        {/* WORK FIRST SPOTLIGHT BAR - Fully Mobile Responsive Grid */}
        <motion.div
          variants={itemVariants}
          className="border border-[#252925] bg-[#101211]/90 rounded-[20px] p-4 sm:p-6 backdrop-blur-md shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 pb-3.5 border-b border-[#252925]">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#c7ff4a] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c7ff4a] animate-ping shrink-0" />
              <span>Selected Work Spotlight (Kerala Client Projects)</span>
            </div>
            <span className="text-[11px] sm:text-[12px] text-[#9da39d] font-mono">
              Live Production Sites
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3">
            {featuredWorkTeasers.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.name} - ${item.type} project by Aravind A S`}
                className="group p-3 sm:p-3.5 rounded-xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] hover:bg-[#151715] transition-all flex items-center sm:flex-col justify-between"
              >
                <div className="flex items-center justify-between w-full gap-1 mb-0 sm:mb-1.5">
                  <span className="text-[10px] font-mono text-[#c7ff4a] uppercase truncate">
                    {item.type}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#737970] group-hover:text-[#c7ff4a] transition-colors shrink-0" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors truncate w-full">
                  {item.name}
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
