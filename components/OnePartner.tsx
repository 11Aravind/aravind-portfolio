"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ONE_PARTNER_POINTS } from "@/data/services";
import { Target, Layers, UserCheck, HeartHandshake } from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function OnePartner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case 1: return <Layers className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case 2: return <UserCheck className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case 3: return <HeartHandshake className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      default: return <Target className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(199,255,74,0.06),transparent_50%)] relative overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/5 dark:bg-[#c7ff4a]/5 blur-[150px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="eyebrow-accent mb-2">The Single Developer Advantage</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            ONE PARTNER. FROM IDEA TO LAUNCH.
          </h2>
          <p className="text-slate-600 dark:text-[#9da39d] text-base sm:text-lg mt-4 leading-relaxed">
            You don't need to coordinate multiple developers for design, development, deployment and future improvements. Work directly with one dedicated engineer throughout the entire project lifecycle.
          </p>
        </motion.div>

        <CinematicLineSweep className="mb-10" />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ONE_PARTNER_POINTS.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-7 border border-slate-200 dark:border-[#252925] hover:border-slate-300 dark:hover:border-[#3c4339] rounded-2xl bg-white dark:bg-[#101211] shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center mb-5 group-hover:border-emerald-300 dark:group-hover:border-[#c7ff4a]/40 transition-colors group-hover:scale-110 duration-300">
                {getIcon(idx)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-[#f4f5f2] mb-2 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
