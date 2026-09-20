"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Layers, Building2, LifeBuoy } from "lucide-react";

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

  const capabilityCards = [
    {
      title: "Build From Scratch",
      subtitle: "Idea → Launch",
      icon: <Sparkles className="w-4 h-4 text-[#c7ff4a]" />
    },
    {
      title: "Web & Mobile",
      subtitle: "Websites & React Native",
      icon: <Layers className="w-4 h-4 text-[#c7ff4a]" />
    },
    {
      title: "CRM & Systems",
      subtitle: "Dashboards & Tools",
      icon: <Building2 className="w-4 h-4 text-[#c7ff4a]" />
    },
    {
      title: "Ongoing Support",
      subtitle: "Updates & Features",
      icon: <LifeBuoy className="w-4 h-4 text-[#c7ff4a]" />
    }
  ];

  return (
    <section className="hero wrap min-h-[80vh] sm:min-h-[85vh] flex flex-col justify-center relative overflow-hidden pt-10 pb-10 sm:pt-20 sm:pb-14">
      
      {/* Cinematic Ambient Glow Background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.22, 0.15],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[280px] sm:w-[520px] h-[280px] sm:h-[520px] -right-[60px] sm:-right-[120px] top-[10px] bg-[radial-gradient(circle,rgba(199,255,74,0.16),transparent_65%)] blur-[20px] sm:blur-[25px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[960px]"
      >
        
        {/* Eyebrow Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 bg-[#141714] border border-[#252925] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold text-[#c7ff4a] tracking-wider uppercase shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c7ff4a] shrink-0" />
            <span className="truncate">FREELANCE SOFTWARE ENGINEER · KERALA · WORLDWIDE</span>
          </div>
        </motion.div>

        {/* Core Positioning Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.08] sm:leading-[1.0] tracking-[-0.04em] sm:tracking-[-0.05em] font-extrabold text-[#f4f5f2] uppercase mb-4 sm:mb-6"
        >
          I BUILD DIGITAL PRODUCTS FROM IDEA TO LAUNCH.
        </motion.h1>

        {/* Supporting Message */}
        <motion.p
          variants={itemVariants}
          className="max-w-[640px] text-[#9da39d] text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium"
        >
          Websites, e-commerce, mobile apps, CRM, business systems and custom software — with development and ongoing support.
        </motion.p>

        {/* Refined Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-[#c7ff4a] text-[#111111] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#c7ff4a]/15 hover:shadow-[#c7ff4a]/25 transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full border border-[#343933] text-[#f4f5f2] bg-white/[0.02] font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:border-[#555c54] hover:bg-white/[0.06] transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>View My Work</span>
            <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
          </motion.a>
        </motion.div>

        {/* Compact 2x2 or 4x1 Visual Capability Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-6">
          {capabilityCards.map((card) => (
            <div
              key={card.title}
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#101211]/90 border border-[#252925] hover:border-[#3c4339] backdrop-blur-md transition-all flex flex-col justify-between"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#171a17] border border-[#252925] flex items-center justify-center mb-2 sm:mb-2.5">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#f4f5f2] mb-0.5 truncate">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#9da39d] leading-tight truncate">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Compact Trust / Proof Strip */}
        <motion.div
          variants={itemVariants}
          className="border-t border-[#252925] pt-4 flex flex-wrap items-center justify-between gap-2.5 text-[11px] sm:text-xs font-mono text-[#9da39d]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c7ff4a] animate-pulse" />
            <span className="text-[#f4f5f2] font-semibold uppercase">Verified Work:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#9da39d]">
            <span>Production Projects</span>
            <span>•</span>
            <span>E-commerce</span>
            <span>•</span>
            <span>Web Apps</span>
            <span>•</span>
            <span>Mobile Apps</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
