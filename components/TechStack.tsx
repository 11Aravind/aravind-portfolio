"use client";

import { motion } from "framer-motion";
import { TECH_PILLS } from "@/data/services";
import { Cpu } from "lucide-react";

export default function TechStack() {
  return (
    <section className="py-16 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap text-center max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {TECH_PILLS.map((pill, idx) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ scale: 1.05 }}
              className="border border-slate-200 dark:border-[#252925] bg-white dark:bg-[#101211] hover:border-emerald-500 dark:hover:border-[#3c4339] text-slate-700 dark:text-[#c7ccc5] hover:text-emerald-600 dark:hover:text-[#c7ff4a] px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium shadow-sm transition-all cursor-default"
            >
              {pill}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
}
