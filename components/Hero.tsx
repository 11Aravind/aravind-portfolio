"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, ShieldCheck, Sparkles, Layers, Building2, LifeBuoy } from "lucide-react";

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

  const capabilityCards = [
    {
      title: "Build From Scratch",
      subtitle: "Idea → Planning → Design → Development → Launch",
      icon: <Sparkles className="w-5 h-5 text-[#c7ff4a]" />
    },
    {
      title: "Web & Mobile",
      subtitle: "Websites, web apps and mobile applications",
      icon: <Layers className="w-5 h-5 text-[#c7ff4a]" />
    },
    {
      title: "CRM & Business Systems",
      subtitle: "CRM, dashboards, admin panels and custom tools",
      icon: <Building2 className="w-5 h-5 text-[#c7ff4a]" />
    },
    {
      title: "Ongoing Support",
      subtitle: "Improvements, new features, maintenance & dev",
      icon: <LifeBuoy className="w-5 h-5 text-[#c7ff4a]" />
    }
  ];

  return (
    <section className="hero wrap min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-16 pb-12 sm:pt-28 sm:pb-16">
      
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
        className="relative z-10 max-w-[1040px]"
      >
        
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="inline-block mb-4 sm:mb-5">
          <div className="text-[#c7ff4a] text-xs sm:text-[13px] font-mono font-bold tracking-[0.14em] uppercase flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c7ff4a] shrink-0" />
            <span>FREELANCE SOFTWARE ENGINEER · KERALA · WORLDWIDE</span>
          </div>
        </motion.div>

        {/* Core Positioning Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl xs:text-4xl sm:text-[clamp(44px,6.8vw,88px)] leading-[1.1] sm:leading-[0.98] tracking-[-0.04em] sm:tracking-[-0.05em] font-extrabold text-[#f4f5f2] uppercase mb-6 sm:mb-8"
        >
          I BUILD DIGITAL PRODUCTS FROM IDEA TO LAUNCH.
        </motion.h1>

        {/* Supporting Message */}
        <motion.p
          variants={itemVariants}
          className="max-w-[720px] text-[#9da39d] text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 font-medium"
        >
          Websites, e-commerce, mobile apps, CRM, business systems and custom software — with development and ongoing support.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-14">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#c7ff4a] text-[#111111] font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#c7ff4a]/15 hover:shadow-[#c7ff4a]/25 transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="w-full sm:w-auto text-center px-8 py-4 rounded-full border border-[#343933] text-[#f4f5f2] font-extrabold text-sm uppercase tracking-wider hover:border-[#555c54] hover:bg-white/[0.04] transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>View My Work</span>
            <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
          </motion.a>
        </motion.div>

        {/* Compact Visual Capability Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {capabilityCards.map((card) => (
            <div
              key={card.title}
              className="p-4 sm:p-5 rounded-2xl bg-[#101211]/90 border border-[#252925] hover:border-[#3c4339] backdrop-blur-md transition-all flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-[#171a17] border border-[#252925] flex items-center justify-center mb-3">
                {card.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f4f5f2] mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-[#9da39d] leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Compact Trust / Proof Strip */}
        <motion.div
          variants={itemVariants}
          className="border-t border-[#252925] pt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#9da39d]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c7ff4a] animate-pulse" />
            <span className="text-[#f4f5f2] font-semibold uppercase">Verified Work:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[#9da39d]">
            <span>Production Projects</span>
            <span>•</span>
            <span>E-commerce</span>
            <span>•</span>
            <span>Web Apps</span>
            <span>•</span>
            <span>Mobile Development</span>
            <span>•</span>
            <span>Ongoing Support</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
