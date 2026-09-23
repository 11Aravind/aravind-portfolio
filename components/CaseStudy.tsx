"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NOORZAH_CASE_STUDY } from "@/data/projects";
import { ExternalLink, ShoppingBag, CheckCircle2, Layers, UserCheck } from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function CaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.96, 1, 1]);

  const specContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const specCardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925] relative overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-20 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/5 dark:bg-[#c7ff4a]/5 blur-[140px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="eyebrow-accent mb-2">Featured Project Case Study</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            PRODUCTION DEPLOYMENT CASE STUDY
          </h2>
        </motion.div>

        <CinematicLineSweep className="mb-10" />

        {/* Case Study Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: cardScale }}
          className="border border-slate-200 dark:border-[#252925] bg-white dark:bg-[#101211] rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200 dark:border-[#252925]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center text-emerald-600 dark:text-[#c7ff4a]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-600 dark:text-[#c7ff4a] uppercase font-bold tracking-wider block">
                  {NOORZAH_CASE_STUDY.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f4f5f2]">
                  {NOORZAH_CASE_STUDY.projectName}
                </h3>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={NOORZAH_CASE_STUDY.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-[#171a17] dark:border dark:border-[#343933] dark:hover:border-[#c7ff4a] dark:text-[#f4f5f2] dark:hover:text-[#c7ff4a] text-sm font-bold shadow-md shadow-emerald-600/10 transition-all w-fit"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Grid Layout for Case Study Specs */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={specContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            {/* Challenge Card */}
            <motion.div variants={specCardVariants} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#090a0a] border border-slate-200 dark:border-[#252925] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-[#c7ff4a] uppercase font-bold mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-slate-600 dark:text-[#9da39d] text-sm sm:text-base leading-relaxed">
                {NOORZAH_CASE_STUDY.challenge}
              </p>
            </motion.div>

            {/* What I Built Card */}
            <motion.div variants={specCardVariants} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#090a0a] border border-slate-200 dark:border-[#252925] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-[#c7ff4a] uppercase font-bold mb-3">
                <Layers className="w-4 h-4" />
                <span>What I Built</span>
              </div>
              <p className="text-slate-600 dark:text-[#9da39d] text-sm sm:text-base leading-relaxed">
                {NOORZAH_CASE_STUDY.whatIBuilt}
              </p>
            </motion.div>

            {/* My Role Card */}
            <motion.div variants={specCardVariants} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#090a0a] border border-slate-200 dark:border-[#252925] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-[#c7ff4a] uppercase font-bold mb-3">
                <UserCheck className="w-4 h-4" />
                <span>My Direct Role</span>
              </div>
              <p className="text-slate-600 dark:text-[#9da39d] text-sm sm:text-base leading-relaxed">
                {NOORZAH_CASE_STUDY.myRole}
              </p>
            </motion.div>

          </motion.div>

          {/* Bottom Banner */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#252925] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-[#737970]">
            <span>Location Context: {NOORZAH_CASE_STUDY.locationContext}</span>
            <span className="text-emerald-600 dark:text-[#c7ff4a] font-semibold">Verified Production Client Website</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
