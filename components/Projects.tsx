"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECT, GRID_PROJECTS, SELECTED_REFERENCES } from "@/data/projects";
import { HeroProjectCard, StandardProjectCard, ReferenceCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="py-16 sm:py-[105px]">
      <div className="wrap">
        
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-[38px] gap-4 sm:gap-5"
        >
          <div>
            <div className="eyebrow-accent mb-2">Selected work</div>
            <h2 className="text-3xl sm:text-[46px] tracking-[-0.04em] sm:tracking-[-0.05em] font-extrabold text-[#f4f5f2] leading-tight">
              Real products.<br className="hidden sm:inline" /> Real interfaces.
            </h2>
          </div>
          <p className="text-[#9da39d] max-w-[450px] text-sm sm:text-base leading-relaxed">
            A selection of e-commerce and digital experiences. The work below is presented with a focus on product experience and responsive design.
          </p>
        </motion.div>

        {/* Featured Project */}
        <HeroProjectCard project={FEATURED_PROJECT} />

        <div className="h-4 sm:h-[18px]" />

        {/* 3-Column Grid / Swipeable Carousel on Mobile */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#f4f5f2] tracking-tight">
              Client E-Commerce & Web Platforms
            </h3>
            <span className="text-xs font-mono text-[#9da39d] sm:hidden">
              Swipe Left/Right ➔
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-[18px] scrollbar-none">
            {GRID_PROJECTS.map((project, idx) => (
              <div key={project.id} className="snap-start shrink-0 w-[85%] max-w-[320px] sm:w-auto">
                <StandardProjectCard project={project} index={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Selected References Sub-section */}
        <div className="mt-12 sm:mt-[70px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-5"
          >
            <div>
              <div className="eyebrow-accent mb-2">Selected references</div>
              <h2 className="text-2xl sm:text-[42px] tracking-[-0.04em] sm:tracking-[-0.05em] font-extrabold text-[#f4f5f2]">
                More stores to explore.
              </h2>
            </div>
            <p className="text-[#9da39d] max-w-[450px] text-xs sm:text-sm leading-relaxed">
              These links are shown separately from my featured work so the portfolio does not imply ownership or authorship without confirmation.
            </p>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-[12px] scrollbar-none">
            {SELECTED_REFERENCES.map((ref, idx) => (
              <div key={ref.id} className="snap-start shrink-0 w-[200px] sm:w-auto">
                <ReferenceCard reference={ref} index={idx} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
