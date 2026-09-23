"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/data/services";
import { 
  MessageSquareCode, 
  Compass, 
  Layout, 
  Code2, 
  Rocket, 
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  Zap,
  Sparkles
} from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const getStepIcon = (step: string) => {
    switch (step) {
      case "01": return <MessageSquareCode className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "02": return <Compass className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "03": return <Layout className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "04": return <Code2 className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "05": return <Rocket className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "06": return <LifeBuoy className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      default: return <Code2 className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
    }
  };

  const getDeliverables = (step: string) => {
    switch (step) {
      case "01":
        return [
          "Requirement Mapping & Goals",
          "Scope & Timeline Lock",
          "Direct WhatsApp Channel"
        ];
      case "02":
        return [
          "System Architecture & DB",
          "Tech Stack (React, Node, DB)",
          "Milestones Breakdown"
        ];
      case "03":
        return [
          "UI/UX Figma Wireframes",
          "Design Tokens & Dark Mode",
          "Interactive Prototype Link"
        ];
      case "04":
        return [
          "Clean Full-Stack Sprints",
          "REST APIs & DB Wiring",
          "Responsive Cross-Device"
        ];
      case "05":
        return [
          "QA & Speed Audit",
          "Domain, SSL & AWS Setup",
          "SEO Indexing & Launch"
        ];
      case "06":
        return [
          "24/7 Bug Fixes & Support",
          "Security Backups",
          "Feature Scaling Updates"
        ];
      default:
        return [
          "Milestone Setup",
          "QA & Testing",
          "Cloud Deployment"
        ];
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} id="process" className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925] bg-slate-50/50 dark:bg-[#0b0d0c] relative overflow-hidden">
      
      {/* Ambient Parallax Background Glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-emerald-500/5 dark:bg-[#c7ff4a]/5 blur-[140px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 eyebrow-accent mb-2 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-[#161a16] border border-emerald-200/70 dark:border-[#283226]">
              <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
              <span className="text-xs font-semibold text-emerald-700 dark:text-[#c7ff4a]">
                High-Speed 6-Step Development Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase leading-tight">
              FROM IDEA TO <span className="text-emerald-600 dark:text-[#c7ff4a]">LAUNCH</span>
            </h2>
          </motion.div>

          <p className="text-slate-600 dark:text-[#9da39d] max-w-md text-sm sm:text-base leading-relaxed">
            Transparent end-to-end engineering pipeline. All 6 steps & deliverables visible at a glance.
          </p>
        </div>

        <CinematicLineSweep className="mb-10" />

        {/* COMPACT 3-COLUMN GRID (2 ROWS, 3 CARDS PER ROW) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROCESS_STEPS.map((item, idx) => {
            const deliverables = getDeliverables(item.step);
            const isRowEnd = (idx + 1) % 3 === 0;

            return (
              <motion.div
                key={item.step}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.015 }}
                className="group p-6 rounded-[24px] bg-white dark:bg-[#121513] border border-slate-200/90 dark:border-[#232823] hover:border-emerald-500/60 dark:hover:border-[#c7ff4a]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                
                <div>
                  {/* Step Badge & Icon Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#162218] text-emerald-700 dark:text-[#c7ff4a] border border-emerald-200/80 dark:border-[#253827]">
                        STEP {item.step}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-[#172218] border border-emerald-100 dark:border-[#243625] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shrink-0">
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors leading-tight">
                    {item.step} – {item.title}
                  </h3>

                  {/* Short Summary */}
                  <p className="text-slate-600 dark:text-[#9da39d] text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Key Deliverables Tags */}
                  <div className="space-y-1.5 mb-2">
                    {deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-[#c5cdc4] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                        <span className="line-clamp-1">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Connector Footer */}
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-[#1e231f] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{idx < PROCESS_STEPS.length - 1 ? `Phase 0${idx + 1} of 06` : "Production Live"}</span>
                  {!isRowEnd && idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  )}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
