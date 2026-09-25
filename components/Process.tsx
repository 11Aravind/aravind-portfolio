"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/data/services";
import {
  MessageSquareCode,
  Compass,
  Layout,
  Code2,
  Rocket,
  LifeBuoy,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

/* ─── Icon Mapper ───────────────────────────────────────────────── */
const STEP_ICONS: Record<string, React.ElementType> = {
  "01": MessageSquareCode,
  "02": Compass,
  "03": Layout,
  "04": Code2,
  "05": Rocket,
  "06": LifeBuoy,
};

/* ─── Deliverables per step ─────────────────────────────────────── */
const DELIVERABLES: Record<string, string[]> = {
  "01": [
    "Requirement Mapping & Goals",
    "Scope & Timeline Lock",
    "Direct WhatsApp Channel",
  ],
  "02": [
    "System Architecture & DB",
    "Tech Stack (React, Node, DB)",
    "Milestones Breakdown",
  ],
  "03": [
    "UI/UX Figma Wireframes",
    "Design Tokens & Dark Mode",
    "Interactive Prototype Link",
  ],
  "04": [
    "Clean Full-Stack Sprints",
    "REST APIs & DB Wiring",
    "Responsive Cross-Device",
  ],
  "05": [
    "QA & Speed Audit",
    "Domain, SSL & AWS Setup",
    "SEO Indexing & Launch",
  ],
  "06": [
    "24/7 Bug Fixes & Support",
    "Security Backups",
    "Feature Scaling Updates",
  ],
};

/* ─── Single Timeline Card ──────────────────────────────────────── */
function TimelineCard({
  step,
  title,
  description,
  index,
  total,
}: {
  step: string;
  title: string;
  description: string;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const isLast = index === total - 1;
  const Icon = STEP_ICONS[step] || Code2;
  const deliverables = DELIVERABLES[step] || [];

  return (
    <div
      ref={cardRef}
      className={`relative flex items-start gap-0 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* ── Card Content ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 15 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`w-full md:w-[calc(50%-24px)] ${
          isLeft ? "md:pr-0" : "md:pl-0"
        }`}
      >
        <div className="group relative p-5 sm:p-5.5 rounded-[22px] bg-white dark:bg-[#121513] border border-slate-200/90 dark:border-[#232823] hover:border-emerald-500/50 dark:hover:border-[#c7ff4a]/40 shadow-sm hover:shadow-xl transition-colors duration-300">

          {/* Subtle top-left accent line */}
          <div className="absolute top-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r from-emerald-500/60 via-emerald-400/30 to-transparent dark:from-[#c7ff4a]/60 dark:via-[#c7ff4a]/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Step badge + Icon */}
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10.5px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#162218] text-emerald-700 dark:text-[#c7ff4a] border border-emerald-200/80 dark:border-[#253827] uppercase tracking-wider">
              Step {step}
            </span>
            <div className="w-8.5 h-8.5 rounded-xl bg-emerald-50 dark:bg-[#172218] border border-emerald-100 dark:border-[#243625] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Icon className="w-[17px] h-[17px] text-emerald-600 dark:text-[#c7ff4a]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-[#9da39d] text-[12.5px] leading-relaxed mb-3">
            {description}
          </p>

          {/* Deliverables */}
          <div className="space-y-1">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.35 + i * 0.08, ease: "easeOut" }}
                className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-[#c5cdc4] font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                <span>{d}</span>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-2 mt-3 border-t border-slate-100 dark:border-[#1e231f] text-[10.5px] font-mono text-slate-400 dark:text-[#707870]">
            {isLast ? "🚀 Production Live" : `Phase 0${index + 1} of 06`}
          </div>
        </div>
      </motion.div>

      {/* ── Center Spine (Desktop) ───────────────────── */}
      <div className="hidden md:flex flex-col items-center w-[48px] shrink-0 relative">
        {/* Glowing Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-10 flex items-center justify-center pt-4"
        >
          {/* Outer glow ring */}
          <div className="absolute w-11 h-11 rounded-full bg-emerald-500/10 dark:bg-[#c7ff4a]/10 animate-pulse pointer-events-none" />
          {/* Node circle */}
          <div className="w-9 h-9 rounded-full bg-white dark:bg-[#121513] border-[2.5px] border-emerald-500 dark:border-[#c7ff4a] flex items-center justify-center shadow-lg shadow-emerald-500/20 dark:shadow-[#c7ff4a]/15 relative z-10">
            <span className="text-[10.5px] font-mono font-extrabold text-emerald-700 dark:text-[#c7ff4a]">
              {step}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Spacer for the opposite side on desktop */}
      <div className="hidden md:block w-[calc(50%-24px)]" />
    </div>
  );
}

/* ─── Mobile Timeline Card (separate for clean mobile layout) ───── */
function MobileTimelineCard({
  step,
  title,
  description,
  index,
  total,
}: {
  step: string;
  title: string;
  description: string;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const isLast = index === total - 1;
  const Icon = STEP_ICONS[step] || Code2;
  const deliverables = DELIVERABLES[step] || [];

  return (
    <div ref={cardRef} className="relative flex items-start gap-0">
      {/* Left Spine Node */}
      <div className="flex flex-col items-center w-[36px] shrink-0 relative pt-3">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-10"
        >
          <div className="absolute w-9 h-9 -left-1 -top-1 rounded-full bg-emerald-500/10 dark:bg-[#c7ff4a]/10 animate-pulse pointer-events-none" />
          <div className="w-7 h-7 rounded-full bg-white dark:bg-[#121513] border-[2px] border-emerald-500 dark:border-[#c7ff4a] flex items-center justify-center shadow-md relative z-10">
            <span className="text-[8.5px] font-mono font-extrabold text-emerald-700 dark:text-[#c7ff4a]">
              {step}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
        className="flex-1 pb-4"
      >
        <div className="group p-4 rounded-[18px] bg-white dark:bg-[#121513] border border-slate-200/90 dark:border-[#232823] hover:border-emerald-500/50 dark:hover:border-[#c7ff4a]/40 shadow-sm transition-colors duration-300">

          <div className="flex items-center justify-between mb-2">
            <span className="text-[9.5px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#162218] text-emerald-700 dark:text-[#c7ff4a] border border-emerald-200/80 dark:border-[#253827] uppercase tracking-wider">
              Step {step}
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-[#172218] border border-emerald-100 dark:border-[#243625] flex items-center justify-center">
              <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
            </div>
          </div>

          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-[#9da39d] text-[11.5px] leading-relaxed mb-2.5">
            {description}
          </p>

          <div className="space-y-0.5">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.06, ease: "easeOut" }}
                className="flex items-center gap-1.5 text-[10px] text-slate-700 dark:text-[#c5cdc4] font-medium"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                <span>{d}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-[#1e231f] text-[9.5px] font-mono text-slate-400 dark:text-[#707870]">
            {isLast ? "🚀 Production Live" : `Phase 0${index + 1} of 06`}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN PROCESS COMPONENT — Cinematic Timeline
   ═══════════════════════════════════════════════════════════════════ */
export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-12 sm:py-16 border-t border-slate-200 dark:border-[#252925] bg-slate-50/50 dark:bg-[#0b0d0c] relative overflow-hidden"
    >
      {/* Ambient Parallax Background Glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-emerald-500/5 dark:bg-[#c7ff4a]/5 blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/3 dark:bg-[#c7ff4a]/3 blur-[120px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        {/* ── Section Header ──────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 eyebrow-accent mb-2 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-[#161a16] border border-emerald-200/70 dark:border-[#283226]">
              <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
              <span className="text-xs font-semibold text-emerald-700 dark:text-[#c7ff4a]">
                High-Speed 6-Step Development Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase leading-tight">
              FROM IDEA TO{" "}
              <span className="text-emerald-600 dark:text-[#c7ff4a]">LAUNCH</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-slate-600 dark:text-[#9da39d] max-w-md text-sm sm:text-base leading-relaxed"
          >
            Transparent end-to-end engineering pipeline. All 6 steps &
            deliverables visible at a glance.
          </motion.p>
        </div>

        <CinematicLineSweep className="mb-8" />

        {/* ── Desktop Timeline (alternating with continuous connected center line) ──────────── */}
        <div className="hidden md:block relative">
          {/* Continuous Unbroken Central Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[2.5px] -translate-x-1/2 bg-slate-200 dark:bg-[#1e251f] z-0 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full origin-top bg-gradient-to-b from-emerald-500 via-emerald-400 to-teal-400 dark:from-[#c7ff4a] dark:via-[#8eff6b] dark:to-emerald-400 shadow-[0_0_12px_rgba(199,255,74,0.6)]"
            />
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            {PROCESS_STEPS.map((item, idx) => (
              <TimelineCard
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                index={idx}
                total={PROCESS_STEPS.length}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile Timeline (with continuous left line) ────────────── */}
        <div className="block md:hidden relative">
          {/* Continuous Unbroken Mobile Left Line */}
          <div className="absolute left-[17px] top-3 bottom-4 w-[2px] bg-slate-200 dark:bg-[#1e251f] z-0 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full origin-top bg-gradient-to-b from-emerald-500 via-emerald-400 to-teal-400 dark:from-[#c7ff4a] dark:via-[#8eff6b] dark:to-emerald-400 shadow-[0_0_10px_rgba(199,255,74,0.5)]"
            />
          </div>

          <div className="flex flex-col gap-3 relative z-10">
            {PROCESS_STEPS.map((item, idx) => (
              <MobileTimelineCard
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                index={idx}
                total={PROCESS_STEPS.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
