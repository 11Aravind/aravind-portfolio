"use client";

import { motion } from "framer-motion";
import { Project, SelectedReference } from "@/data/projects";

interface HeroProjectCardProps {
  project: Project;
}

export function HeroProjectCard({ project }: HeroProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 bg-[#101211] border border-[#252925] rounded-[26px] overflow-hidden hover:border-[#3c4339] transition-colors duration-500 shadow-2xl group"
    >
      {/* Visual Shot Column */}
      <div className="lg:col-span-7 min-h-[380px] sm:min-h-[460px] bg-gradient-to-br from-[#171a17] via-[#121412] to-[#0d0e0d] p-6 sm:p-8 flex items-center relative overflow-hidden">
        
        {/* Subtle Inner Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c7ff4a]/5 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#c7ff4a]/10 transition-colors duration-700" />

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full border border-[#303530] rounded-[15px] overflow-hidden shadow-2xl bg-[#151715] relative z-10"
        >
          {/* Top Browser Bar */}
          <div className="h-[34px] border-b border-[#2a2e2a] flex items-center justify-between px-3 bg-[#131513]">
            <div className="flex items-center gap-[6px]">
              <i className="w-[7px] h-[7px] rounded-full bg-[#ff5f56] inline-block" />
              <i className="w-[7px] h-[7px] rounded-full bg-[#ffbd2e] inline-block" />
              <i className="w-[7px] h-[7px] rounded-full bg-[#27c93f] inline-block" />
            </div>
            <span className="font-mono text-[10px] text-[#737970] truncate max-w-[180px]">
              noorzah.com
            </span>
            <div className="w-8" />
          </div>

          {/* Fake Store Visual Content */}
          <div className="h-[280px] sm:h-[350px] p-6 sm:p-[38px] bg-gradient-to-r from-[#1a1f19] to-[#111311] flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c7ff4a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c7ff4a]"></span>
                </span>
                <small className="text-[#aab0a7] font-mono text-xs tracking-wider uppercase">
                  {project.locationContext}
                </small>
              </div>

              <h3 className="text-3xl sm:text-[46px] leading-[0.95] tracking-[-0.05em] font-bold text-[#f4f5f2] mb-4">
                Curated fashion.<br />Made to shop.
              </h3>
            </div>

            <div>
              <span className="inline-block border border-[#4a5145] rounded-full px-3.5 py-1.5 text-[#c7ff4a] text-xs font-mono font-semibold bg-[#101211]/80 backdrop-blur-sm">
                {project.visualSub || "E-COMMERCE PLATFORM"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copy Details Column */}
      <div className="lg:col-span-5 p-8 sm:p-[48px] flex flex-col justify-center bg-[#101211]">
        <div className="text-[#c7ff4a] text-xs uppercase tracking-[0.13em] font-bold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c7ff4a]" />
          <span>{project.tag || "Featured project · E-commerce"}</span>
        </div>

        <h3 className="text-3xl sm:text-[42px] tracking-[-0.05em] font-bold text-[#f4f5f2] mb-4 group-hover:text-[#c7ff4a] transition-colors duration-300">
          {project.name}
        </h3>

        <p className="text-[#9da39d] text-base leading-relaxed mb-4">
          {project.description}
        </p>

        <p className="text-[#737970] text-sm leading-relaxed mb-6">
          Designed around a clean shopping experience and responsive customer journey.
        </p>

        <motion.a
          whileHover={{ x: 4 }}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f4f5f2] font-bold hover:text-[#c7ff4a] transition-colors inline-flex items-center gap-1.5 text-base"
        >
          <span>View live store</span>
          <span>↗</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export function StandardProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="bg-[#101211] border border-[#252925] rounded-[22px] overflow-hidden transition-all duration-300 hover:border-[#3c4339] hover:shadow-xl group flex flex-col justify-between"
    >
      <div>
        {/* Card Visual Header */}
        <div className="h-[220px] p-[20px] bg-gradient-to-br from-[#161916] to-[#0d0e0d] flex items-center relative overflow-hidden">
          <div className="w-full h-full border border-[#303530] rounded-[12px] bg-[#131513] p-6 flex flex-col justify-between group-hover:border-[#4a5145] transition-colors">
            <small className="text-[#aab0a7] font-mono text-[11px] tracking-wider uppercase block">
              {project.locationContext}
            </small>
            <h4 className="text-2xl sm:text-[30px] leading-[1.0] tracking-[-0.04em] font-bold text-[#f4f5f2] whitespace-pre-line group-hover:text-[#c7ff4a] transition-colors">
              {project.visualTitle}
            </h4>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-[25px]">
          <h3 className="text-2xl font-bold text-[#f4f5f2] mb-1 group-hover:text-[#c7ff4a] transition-colors">
            {project.name}
          </h3>
          <p className="text-[#9da39d] text-sm mb-4">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-[25px] pb-[25px]">
        <motion.a
          whileHover={{ x: 3 }}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#aab0a7] font-mono hover:text-[#c7ff4a] transition-colors inline-flex items-center gap-1"
        >
          <span>View live project</span>
          <span>↗</span>
        </motion.a>
      </div>
    </motion.article>
  );
}

export function ReferenceCard({ reference, index = 0 }: { reference: SelectedReference; index?: number }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, borderColor: "#3c4339" }}
      href={reference.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-[#252925] p-[20px] rounded-[17px] bg-[#0d0f0e] hover:bg-[#121513] transition-all block group"
    >
      <strong className="block text-[#f4f5f2] group-hover:text-[#c7ff4a] transition-colors text-base font-bold mb-1">
        {reference.name} ↗
      </strong>
      <span className="text-[#9da39d] text-[13px] block">
        {reference.category}
      </span>
    </motion.a>
  );
}
