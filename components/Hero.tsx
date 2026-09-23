"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Code2,
  Smartphone,
  Server,
  Database,
  Cpu,
  Globe,
  ChevronDown
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for background orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="hero wrap min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-16 sm:pt-24 pb-12 sm:pb-20"
    >

      {/* Soft Decorative Background Circles with Parallax */}
      <motion.div
        style={{ y: orbY1 }}
        className="absolute w-[540px] h-[540px] sm:w-[780px] sm:h-[780px] rounded-full bg-emerald-100/60 dark:bg-[#0f1d15] -right-[145px] top-[45px] pointer-events-none z-0 cinematic-glow-pulse"
      />
      <motion.div
        style={{ y: orbY2 }}
        className="absolute w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] rounded-full bg-emerald-50/80 dark:bg-[#122219] left-[390px] -bottom-[475px] pointer-events-none z-0"
      />

      {/* Ambient shimmer line */}
      <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 dark:via-[#c7ff4a]/15 to-transparent pointer-events-none z-0 cinematic-shimmer" />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10"
      >

        {/* Left Column: Typography, Copy & Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-3">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-slate-500 dark:text-[#9da39d] uppercase block">
              HELLO, I'M
            </span>
          </motion.div>

          {/* Main Name & Title with cinematic reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.04em] leading-[1.05] text-slate-900 dark:text-[#f4f5f2] mb-3"
          >
            Aravind A S
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.03em] leading-tight">
              <span className="text-emerald-600 dark:text-[#c7ff4a]">React & Full-Stack</span>{" "}
              <span className="text-slate-800 dark:text-slate-200">Developer</span>
            </h2>
          </motion.div>

          {/* Paragraph Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-[620px] text-slate-600 dark:text-[#a0a8a0] text-base sm:text-lg leading-relaxed mb-8 font-normal"
          >
            I build digital products from idea to launch — <strong className="text-slate-900 dark:text-white font-semibold">websites, e-commerce, mobile apps, CRM, business systems, and custom software</strong> — with full-stack development and ongoing support.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#work"
              className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-[#c7ff4a] dark:hover:bg-[#b5f532] dark:text-[#111111] font-bold text-sm tracking-wide shadow-lg shadow-slate-900/10 dark:shadow-[#c7ff4a]/20 transition-all inline-flex items-center gap-2 group"
            >
              <ExternalLink className="w-4 h-4 text-white dark:text-black" />
              <span>View Portfolio</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-[#343933] text-slate-800 dark:text-[#f4f5f2] bg-white/80 dark:bg-white/[0.03] hover:border-emerald-600 dark:hover:border-[#c7ff4a] hover:text-emerald-600 dark:hover:text-[#c7ff4a] font-bold text-sm tracking-wide shadow-sm transition-all inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Start a Project / Hire</span>
            </motion.a>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <a
              href="https://github.com/11Aravind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-[#252925] bg-white dark:bg-[#101211] flex items-center justify-center text-slate-600 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] hover:border-emerald-600 dark:hover:border-[#c7ff4a] transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="linkedin.com/in/aravind-as"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-[#252925] bg-white dark:bg-[#101211] flex items-center justify-center text-slate-600 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] hover:border-emerald-600 dark:hover:border-[#c7ff4a] transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:aravindas247@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-[#252925] bg-white dark:bg-[#101211] flex items-center justify-center text-slate-600 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] hover:border-emerald-600 dark:hover:border-[#c7ff4a] transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Footer Meta / Location */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs font-mono text-slate-500 dark:text-[#737970] pt-4 border-t border-slate-200 dark:border-[#252925]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">Sasthamcotta, Kollam, Kerala</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span className="tracking-widest uppercase text-[11px]">CODE / BUILD / IMPROVE</span>
          </motion.div>
        </motion.div>

        {/* Right Column: Person Image with Organic Animated Backdrop Blob & Levitating Tech Language Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px] select-none"
        >
          {/* Organic Pulsing Background Mint/Emerald Blob */}
          <motion.div
            animate={{
              scale: [1, 1.05, 0.98, 1],
              rotate: [0, 5, -4, 0],
              borderRadius: [
                "45% 55% 60% 40% / 50% 45% 55% 50%",
                "55% 45% 50% 50% / 45% 55% 45% 55%",
                "40% 60% 55% 45% / 55% 40% 60% 45%",
                "45% 55% 60% 40% / 50% 45% 55% 50%",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[310px] h-[350px] xs:w-[370px] xs:h-[410px] sm:w-[440px] sm:h-[490px] bg-gradient-to-tr from-emerald-200/60 via-emerald-100/70 to-teal-100/60 dark:from-[#0f2d1f]/80 dark:via-[#133525]/70 dark:to-[#0a1e15]/70 blur-2xl pointer-events-none z-0 shadow-2xl shadow-emerald-500/15"
          />

          {/* Transparent Person Image with Levitation/Breathing Animation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-[280px] xs:w-[340px] sm:w-[420px] h-[400px] xs:h-[460px] sm:h-[540px] group"
          >
            <Image
              src="/aravidh-without-bg.png"
              alt="Aravind A S - Freelance Web & Mobile Developer"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 420px"
              className="object-contain object-bottom filter contrast-[1.05] drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </motion.div>

          {/* SURROUNDING ANIMATED TECH LANGUAGE BADGES */}

          {/* 1. React Badge (Top Left) */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 4, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="absolute top-2 left-0 sm:-left-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/90 dark:border-[#252925] shadow-xl backdrop-blur-xl flex items-center gap-2.5 transition-shadow hover:shadow-emerald-500/20"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-50 dark:bg-[#122329] border border-cyan-100 dark:border-[#1a3842] flex items-center justify-center text-cyan-500 dark:text-cyan-400 font-bold shadow-inner">
              <Globe className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">React.js</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Frontend UI</span>
            </div>
          </motion.div>

          {/* 2. React Native Badge (Middle Left) */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              x: [0, -5, 0],
              rotate: [0, -2, 2, 0],
            }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            whileHover={{ scale: 1.1, y: 5 }}
            className="absolute top-36 -left-3 sm:-left-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/90 dark:border-[#252925] shadow-xl backdrop-blur-xl flex items-center gap-2.5 transition-shadow hover:shadow-emerald-500/20"
          >
            <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-[#11212c] border border-sky-100 dark:border-[#193245] flex items-center justify-center text-sky-600 dark:text-sky-400">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">React Native</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Mobile Apps</span>
            </div>
          </motion.div>

          {/* 3. Node.js Badge (Top Right) */}
          <motion.div
            animate={{
              y: [0, -9, 0],
              x: [0, -4, 0],
              rotate: [0, -2.5, 1.5, 0],
            }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="absolute -top-2 -right-2 sm:-right-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/90 dark:border-[#252925] shadow-xl backdrop-blur-xl flex items-center gap-2.5 transition-shadow hover:shadow-emerald-500/20"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-[#17261a] border border-emerald-100 dark:border-[#213b26] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Node.js</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Backend API</span>
            </div>
          </motion.div>

          {/* 4. MongoDB Badge (Middle Right) */}
          <motion.div
            animate={{
              y: [0, 9, 0],
              x: [0, 5, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            whileHover={{ scale: 1.1, y: 5 }}
            className="absolute top-44 -right-4 sm:-right-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/90 dark:border-[#252925] shadow-xl backdrop-blur-xl flex items-center gap-2.5 transition-shadow hover:shadow-emerald-500/20"
          >
            <div className="w-8 h-8 rounded-xl bg-green-50 dark:bg-[#162719] border border-green-100 dark:border-[#223d26] flex items-center justify-center text-green-600 dark:text-green-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">MongoDB</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Database</span>
            </div>
          </motion.div>

          {/* 5. Express Badge (Bottom Right) */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, -3, 0],
              rotate: [0, -1.5, 2, 0],
            }}
            transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            whileHover={{ scale: 1.1, y: -4 }}
            className="absolute bottom-6 right-0 sm:-right-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/90 dark:border-[#252925] shadow-xl backdrop-blur-xl flex items-center gap-2.5 transition-shadow hover:shadow-emerald-500/20"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-[#191b1a] border border-slate-200 dark:border-[#2a2d2b] flex items-center justify-center text-slate-800 dark:text-slate-200">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Express.js</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">REST Server</span>
            </div>
          </motion.div>

          {/* 6. TypeScript / Next.js Badge (Bottom Left) */}
          <motion.div
            animate={{
              y: [0, -7, 0],
              x: [0, 4, 0],
              rotate: [0, 2, -1.5, 0],
            }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            whileHover={{ scale: 1.1, y: -4 }}
            className="absolute bottom-4 left-0 sm:-left-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/90 dark:border-[#252925] shadow-xl backdrop-blur-xl flex items-center gap-2.5 transition-shadow hover:shadow-emerald-500/20"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-[#121f2d] border border-blue-100 dark:border-[#1b3147] flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">TypeScript</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Full-Stack</span>
            </div>
          </motion.div>

        </motion.div>

      </motion.div>

      {/* Cinematic Scroll-Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono text-slate-400 dark:text-[#737970] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a] cinematic-scroll-indicator" />
      </motion.div>
    </section>
  );
}
