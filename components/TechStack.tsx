"use client";

import { motion } from "framer-motion";
import { TECH_PILLS } from "@/data/services";
import { Cpu } from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap text-center max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="eyebrow-accent mb-2 flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a]" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase tracking-tight">
            TECHNOLOGY STACK
          </h2>
          <p className="text-slate-600 dark:text-[#9da39d] text-sm mt-2 max-w-lg mx-auto">
            Modern, battle-tested frameworks and databases chosen for stability, performance, and scale.
          </p>
        </motion.div>

        <CinematicLineSweep className="mb-8" />

        <motion.div
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TECH_PILLS.map((pill) => (
            <motion.span
              key={pill}
              variants={pillVariants}
              whileHover={{ y: -2 }}
              className="border border-slate-200 dark:border-[#252925] bg-white dark:bg-[#101211] hover:border-emerald-500 dark:hover:border-[#3c4339] text-slate-700 dark:text-[#c7ccc5] hover:text-emerald-600 dark:hover:text-[#c7ff4a] px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium shadow-sm hover:shadow-md transition-colors duration-300 cursor-default"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
