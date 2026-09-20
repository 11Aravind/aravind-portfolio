"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECT, GRID_PROJECTS, SELECTED_REFERENCES } from "@/data/projects";
import { HeroProjectCard, StandardProjectCard, ReferenceCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="wrap">
        
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5"
        >
          <div>
            <div className="eyebrow-accent mb-2">Portfolio Proof</div>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] uppercase">
              REAL PRODUCTS. REAL WORK.
            </h2>
          </div>
          <p className="text-[#9da39d] max-w-[450px] text-base leading-relaxed">
            Featured production projects, e-commerce storefronts, and digital applications built for real clients.
          </p>
        </motion.div>

        {/* Featured Project */}
        <HeroProjectCard project={FEATURED_PROJECT} />

        <div className="h-6 sm:h-8" />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GRID_PROJECTS.map((project, idx) => (
            <StandardProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Selected References Sub-section */}
        <div className="mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5"
          >
            <div>
              <div className="eyebrow-accent mb-2">More Work</div>
              <h3 className="text-2xl sm:text-3xl tracking-[-0.05em] font-extrabold text-[#f4f5f2]">
                Explore Additional Stores & Sites
              </h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SELECTED_REFERENCES.map((ref, idx) => (
              <ReferenceCard key={ref.id} reference={ref} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
