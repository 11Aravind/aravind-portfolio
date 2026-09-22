"use client";

import { motion } from "framer-motion";
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
  Globe
} from "lucide-react";
import Image from "next/image";

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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="hero wrap min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20">

      {/* Soft Decorative Background Circles (Matching hero-fixed.html) */}
      <div className="absolute w-[540px] h-[540px] sm:w-[780px] sm:h-[780px] rounded-full bg-emerald-100/60 dark:bg-[#0f1d15] -right-[145px] top-[45px] pointer-events-none z-0" />
      <div className="absolute w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] rounded-full bg-emerald-50/80 dark:bg-[#122219] left-[390px] -bottom-[475px] pointer-events-none z-0" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

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

          {/* Main Name & Title */}
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
            className="max-w-[580px] text-slate-600 dark:text-[#9da39d] text-base sm:text-lg leading-relaxed mb-8 font-normal"
          >
            I build modern and responsive web & mobile applications using <strong className="text-slate-900 dark:text-white font-semibold">React, React Native and Node.js</strong>, turning ideas into production-ready products.
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-[#252925] bg-white dark:bg-[#101211] flex items-center justify-center text-slate-600 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] hover:border-emerald-600 dark:hover:border-[#c7ff4a] transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
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

        {/* Right Column: Person Image without border box + Soft Background Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[560px]"
        >
          {/* Transparent Person Image (NO BORDER BOX!) */}
          <div className="relative z-20 w-[280px] xs:w-[340px] sm:w-[420px] h-[400px] xs:h-[460px] sm:h-[540px]">
            <Image
              src="/aravidh-without-bg.png"
              alt="Aravind A S - Freelance Web & Mobile Developer"
              fill
              priority
              className="object-contain object-bottom filter contrast-[1.05] drop-shadow-2xl"
            />
          </div>

          {/* FLOATING TECH BADGES */}
          
          {/* 1. React Badge (Top Left) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-0 sm:-left-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/80 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">React</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Frontend</span>
            </div>
          </motion.div>

          {/* 2. React Native Badge (Middle Left) */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-40 -left-2 sm:-left-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/80 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">React Native</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Mobile Apps</span>
            </div>
          </motion.div>

          {/* 3. Node.js Badge (Top Right - Positioned clearly beside spark rays) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-0 -right-4 sm:-right-12 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/80 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Node.js</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Backend API</span>
            </div>
          </motion.div>

          {/* 4. MongoDB Badge (Middle Right) */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-44 -right-4 sm:-right-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/80 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">MongoDB</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Database</span>
            </div>
          </motion.div>

          {/* 5. Express Badge (Bottom Right) */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 right-0 sm:-right-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#101211]/95 border border-slate-200/80 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Express.js</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">REST Server</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
