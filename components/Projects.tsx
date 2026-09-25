"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FEATURED_PROJECT, GRID_PROJECTS } from "@/data/projects";
import { HeroProjectCard, StandardProjectCard } from "./ProjectCard";
import { CinematicLineSweep } from "./CinematicEffects";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="work" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-20 left-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 dark:bg-[#c7ff4a]/5 blur-[130px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5"
        >
          <div>
            <div className="eyebrow-accent mb-2">Portfolio Proof</div>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
              REAL PRODUCTS. REAL WORK.
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-600 dark:text-[#9da39d] max-w-[450px] text-base leading-relaxed"
          >
            Featured production projects, e-commerce storefronts, and digital applications built for real clients.
          </motion.p>
        </motion.div>

        <CinematicLineSweep className="mb-10" />

        {/* Featured Project */}
        <HeroProjectCard project={FEATURED_PROJECT} />

        <div className="h-6 sm:h-8" />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GRID_PROJECTS.map((project, idx) => (
            <StandardProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
