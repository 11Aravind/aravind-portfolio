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
      
      {/* Background Organic Green Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] -right-[60px] sm:-right-[100px] top-[40px] bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(199,255,74,0.18),transparent_65%)] blur-[35px] pointer-events-none"
      />

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

        {/* Right Column: Person Image & Floating Tech Skill Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]"
        >
          {/* Organic Background Blob Behind Image */}
          <div className="absolute w-[280px] xs:w-[340px] sm:w-[420px] h-[280px] xs:h-[340px] sm:h-[420px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent dark:from-[#c7ff4a]/20 dark:via-[#c7ff4a]/5 blur-2xl pointer-events-none" />

          {/* Person Image Container */}
          <div className="relative z-20 w-[260px] xs:w-[320px] sm:w-[380px] h-[360px] xs:h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-emerald-500/30 dark:border-[#c7ff4a]/30 shadow-2xl shadow-emerald-500/10 dark:shadow-[#c7ff4a]/10 bg-slate-100 dark:bg-[#101211]">
            <Image
              src="/aravind.jpg"
              alt="Aravind A S - Freelance Web & Mobile Developer"
              fill
              priority
              className="object-cover object-top filter contrast-[1.05]"
            />
            {/* Soft Overlay Gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* FLOATING TECH BADGES (Matching current.png layout with Green accents!) */}
          
          {/* 1. React Badge (Top Left) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 left-0 sm:-left-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-[#101211]/90 border border-slate-200 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
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
            className="absolute top-36 -left-2 sm:-left-8 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-[#101211]/90 border border-slate-200 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">React Native</span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#9da39d]">Mobile Apps</span>
            </div>
          </motion.div>

          {/* 3. Node.js Badge (Top Right) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-4 -right-2 sm:-right-8 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-[#101211]/90 border border-slate-200 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
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
            className="absolute top-40 -right-4 sm:-right-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-[#101211]/90 border border-slate-200 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
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
            className="absolute bottom-6 right-0 sm:-right-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-[#101211]/90 border border-slate-200 dark:border-[#252925] shadow-xl backdrop-blur-md flex items-center gap-2.5"
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

