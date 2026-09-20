"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowDown, ShieldCheck, ChevronRight } from "lucide-react";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const featuredWorkTeasers = [
    { name: "Noorzah", type: "E-Commerce", desc: "Fashion Store • Kollam", url: "https://noorzah.com/", badge: "Featured" },
    { name: "Wishlist by Praveena", type: "Boutique", desc: "Apparel Shopping", url: "https://wishlistbypraveena.vercel.app/" },
    { name: "NC Brand Fashion", type: "Storefront", desc: "Brand E-Commerce", url: "https://www.ncbrandfashion.com" },
    { name: "Aoba", type: "Web App", desc: "Modern UI", url: "https://11aravind.github.io/Aoba/" },
  ];

  return (
    <section className="hero wrap min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-24 pb-12 sm:pt-36 sm:pb-20">
      
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[280px] sm:w-[580px] h-[280px] sm:h-[580px] -right-[60px] sm:-right-[160px] top-[20px] bg-[radial-gradient(circle,rgba(199,255,74,0.18),transparent_68%)] blur-[20px] sm:blur-[25px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1020px]"
      >
        
        {/* Eyebrow - Clean & Spacious */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101211] border border-[#252925] text-[#c7ff4a] text-[11px] sm:text-[13px] font-semibold tracking-wider uppercase flex-wrap">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c7ff4a] shrink-0" />
            <span>Freelance Web & Mobile Developer</span>
            <span className="text-[#737970]">•</span>
            <span className="text-[#f4f5f2] font-mono text-[10px] sm:text-[11px]">
              Kerala (Kollam & Pathanamthitta)
            </span>
          </div>
        </motion.div>

        {/* Main Headline - Spacious line-height & responsive font size */}
        <motion.h1
          variants={itemVariants}
          className="text-[30px] xs:text-[36px] sm:text-[clamp(44px,7vw,92px)] leading-[1.15] sm:leading-[0.98] tracking-[-0.03em] sm:tracking-[-0.06em] font-extrabold text-[#f4f5f2] mb-5 sm:mb-6"
        >
          Top-rated web development & mobile app developer in Kerala.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="max-w-[680px] text-[#9da39d] text-[15px] sm:text-[19px] leading-[1.65] sm:leading-relaxed mb-6 sm:mb-8"
        >
          Helping businesses in Kollam, Pathanamthitta, and across Kerala build high-converting custom websites, e-commerce platforms, and cross-platform mobile apps.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-12">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="w-full sm:w-auto text-center px-6 py-3.5 sm:px-[22px] sm:py-[14px] rounded-full bg-[#c7ff4a] text-[#111111] border border-[#c7ff4a] font-[650] text-sm shadow-lg shadow-[#c7ff4a]/10 hover:shadow-[#c7ff4a]/20 transition-all inline-flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Explore Live Work</span>
            <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="w-full sm:w-auto text-center px-6 py-3.5 sm:px-[22px] sm:py-[14px] rounded-full border border-[#343933] text-[#f4f5f2] font-[650] text-sm hover:border-[#555c54] hover:bg-white/[0.04] transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>Start a project / Hire</span>
            <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
          </motion.a>
        </motion.div>

        {/* WORK SPOTLIGHT CAROUSEL - Swipeable Left to Right on Mobile */}
        <motion.div
          variants={itemVariants}
          className="border border-[#252925] bg-[#101211]/90 rounded-[20px] p-4 sm:p-5 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#252925]">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#c7ff4a] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c7ff4a] animate-ping shrink-0" />
              <span>Client Work Spotlight</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#9da39d] font-mono">
              <span className="sm:hidden">Swipe Left / Right ➔</span>
              <span className="hidden sm:inline">Click to Visit Live Sites</span>
            </div>
          </div>

          {/* Horizontal Scroll Container for Mobile */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 sm:pb-0 sm:grid sm:grid-cols-4 scrollbar-none">
            {featuredWorkTeasers.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.name} - ${item.type} project by Aravind A S`}
                className="snap-start shrink-0 w-[220px] sm:w-auto group p-3.5 sm:p-3 rounded-xl bg-[#090a0a] border border-[#252925] hover:border-[#3c4339] hover:bg-[#151715] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-1 mb-2 sm:mb-1">
                  <span className="text-[10px] font-mono text-[#c7ff4a] uppercase truncate font-semibold">
                    {item.type}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#737970] group-hover:text-[#c7ff4a] transition-colors shrink-0" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#9da39d] font-mono truncate mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
