"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHO_I_HELP } from "@/data/services";
import { Building2, Rocket, TrendingUp, RefreshCw } from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function WhoIHelp() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const getIcon = (id: string) => {
    switch (id) {
      case "businesses":
        return <Building2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "startups":
        return <Rocket className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "growing-businesses":
        return <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "existing-products":
        return <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      default:
        return <Building2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section ref={sectionRef} className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925] relative overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-500/5 dark:bg-[#c7ff4a]/5 blur-[120px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2">Targeted Solutions</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            BUILT FOR YOUR BUSINESS
          </h2>
        </motion.div>

        <CinematicLineSweep className="mb-10" />

        {/* 4 Category Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {WHO_I_HELP.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 sm:p-7 border border-slate-200 dark:border-[#252925] hover:border-slate-300 dark:hover:border-[#3c4339] rounded-2xl bg-white dark:bg-[#101211] shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center mb-5 group-hover:border-emerald-300 dark:group-hover:border-[#c7ff4a]/40 transition-colors group-hover:scale-110 duration-300">
                  {getIcon(item.id)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-[#f4f5f2] mb-2 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
