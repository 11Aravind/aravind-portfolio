"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECT, GRID_PROJECTS, SELECTED_REFERENCES } from "@/data/projects";
import { HeroProjectCard, StandardProjectCard, ReferenceCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="py-[105px]">
      <div className="wrap">
        
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-[38px] gap-5"
        >
          <div>
            <div className="eyebrow-accent mb-2">Selected work</div>
            <h2 className="text-4xl sm:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] leading-tight">
              Real products.<br />Real interfaces.
            </h2>
          </div>
          <p className="text-[#9da39d] max-w-[450px] text-base leading-relaxed">
            A selection of e-commerce and digital experiences. The work below is presented with a focus on product experience and responsive design.
          </p>
        </motion.div>

        {/* Featured Project */}
        <HeroProjectCard project={FEATURED_PROJECT} />

        <div className="h-[18px]" />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {GRID_PROJECTS.map((project, idx) => (
            <StandardProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Selected References Sub-section */}
        <div className="mt-[70px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5"
          >
            <div>
              <div className="eyebrow-accent mb-2">Selected references</div>
              <h2 className="text-3xl sm:text-[42px] tracking-[-0.05em] font-extrabold text-[#f4f5f2]">
                More stores to explore.
              </h2>
            </div>
            <p className="text-[#9da39d] max-w-[450px] text-sm leading-relaxed">
              These links are shown separately from my featured work so the portfolio does not imply ownership or authorship without confirmation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[12px]">
            {SELECTED_REFERENCES.map((ref, idx) => (
              <ReferenceCard key={ref.id} reference={ref} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
