"use client";

import { motion } from "framer-motion";
import { Project, SelectedReference } from "@/data/projects";
import { ExternalLink } from "lucide-react";

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
      className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-[#101211] border border-slate-200 dark:border-[#252925] rounded-3xl overflow-hidden hover:border-slate-300 dark:hover:border-[#3c4339] transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-2xl group"
    >
      {/* Visual Shot Column */}
      <div className="lg:col-span-7 min-h-[360px] sm:min-h-[420px] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-[#171a17] dark:via-[#121412] dark:to-[#0d0e0d] p-4 sm:p-6 flex items-center relative overflow-hidden">
        
        {/* Inner Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 dark:bg-[#c7ff4a]/5 rounded-full blur-[90px] pointer-events-none group-hover:bg-emerald-500/15 dark:group-hover:bg-[#c7ff4a]/10 transition-colors duration-700" />

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full border border-slate-200 dark:border-[#303530] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-[#151715] relative z-10"
        >
          {/* Top Browser Bar */}
          <div className="h-[34px] border-b border-slate-200 dark:border-[#2a2e2a] flex items-center justify-between px-3 bg-slate-100 dark:bg-[#131513]">
            <div className="flex items-center gap-[6px]">
              <i className="w-[7px] h-[7px] rounded-full bg-[#ff5f56] inline-block" />
              <i className="w-[7px] h-[7px] rounded-full bg-[#ffbd2e] inline-block" />
              <i className="w-[7px] h-[7px] rounded-full bg-[#27c93f] inline-block" />
            </div>
            <span className="font-mono text-[10px] text-slate-500 dark:text-[#737970] truncate max-w-[180px]">
              noorzah.com
            </span>
            <div className="w-8" />
          </div>

          {/* Store Visual Screenshot Content */}
          <div className="h-[250px] sm:h-[320px] relative overflow-hidden bg-slate-100 dark:bg-[#0d0e0d]">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="h-full p-6 sm:p-8 bg-gradient-to-r from-emerald-900 to-slate-900 dark:from-[#1a1f19] dark:to-[#111311] text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c7ff4a] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c7ff4a]"></span>
                    </span>
                    <small className="text-emerald-200 dark:text-[#aab0a7] font-mono text-xs tracking-wider uppercase">
                      {project.locationContext}
                    </small>
                  </div>
                  <h3 className="text-2xl sm:text-4xl leading-[0.98] tracking-[-0.05em] font-bold text-white mb-3">
                    Curated fashion.<br />Made to shop.
                  </h3>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Copy Details Column */}
      <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-center bg-white dark:bg-[#101211]">
        <div className="text-emerald-600 dark:text-[#c7ff4a] text-xs uppercase tracking-[0.13em] font-bold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#c7ff4a]" />
          <span>{project.tag || "Featured project · E-commerce"}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl tracking-[-0.05em] font-bold text-slate-900 dark:text-[#f4f5f2] mb-3 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
          {project.name}
        </h3>

        <p className="text-slate-600 dark:text-[#9da39d] text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <motion.a
          whileHover={{ x: 4 }}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-[#c7ff4a] dark:text-[#111111] font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 w-fit shadow-md shadow-emerald-600/20 dark:shadow-[#c7ff4a]/10 transition-all"
        >
          <span>View Live Project</span>
          <ExternalLink className="w-4 h-4" />
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
      className="bg-white dark:bg-[#101211] border border-slate-200 dark:border-[#252925] rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-[#3c4339] shadow-sm hover:shadow-xl group flex flex-col justify-between"
    >
      <div>
        {/* Card Visual Header with Real Screenshot */}
        <div className="h-[210px] p-3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#161916] dark:to-[#0d0e0d] flex items-center relative overflow-hidden">
          <div className="w-full h-full border border-slate-200 dark:border-[#303530] rounded-xl bg-white dark:bg-[#131513] overflow-hidden group-hover:border-slate-300 dark:group-hover:border-[#4a5145] transition-colors shadow-sm relative">
            {/* Minimal Browser Header */}
            <div className="h-[24px] border-b border-slate-200 dark:border-[#2a2e2a] flex items-center justify-between px-2.5 bg-slate-50 dark:bg-[#131513] z-10 relative">
              <div className="flex items-center gap-[4px]">
                <i className="w-[5px] h-[5px] rounded-full bg-[#ff5f56] inline-block" />
                <i className="w-[5px] h-[5px] rounded-full bg-[#ffbd2e] inline-block" />
                <i className="w-[5px] h-[5px] rounded-full bg-[#27c93f] inline-block" />
              </div>
              <small className="text-slate-400 dark:text-[#aab0a7] font-mono text-[9px] tracking-wider uppercase truncate max-w-[140px]">
                {project.locationContext}
              </small>
            </div>

            {/* Image or Visual Fallback */}
            <div className="h-[calc(100%-24px)] w-full relative overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="p-4 flex flex-col justify-between h-full">
                  <h4 className="text-xl leading-[1.0] tracking-[-0.04em] font-bold text-slate-900 dark:text-[#f4f5f2] whitespace-pre-line group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                    {project.visualTitle}
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <span className="text-xs font-mono text-emerald-600 dark:text-[#c7ff4a] uppercase font-semibold block mb-1">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-[#f4f5f2] mb-2 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
            {project.name}
          </h3>
          <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono font-bold text-slate-900 dark:text-[#f4f5f2] group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors inline-flex items-center gap-1.5"
        >
          <span>View Project</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
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
      whileHover={{ y: -4 }}
      href={reference.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-slate-200 dark:border-[#252925] p-5 rounded-2xl bg-white dark:bg-[#0d0f0e] hover:bg-slate-50 dark:hover:bg-[#121513] hover:border-slate-300 dark:hover:border-[#3c4339] shadow-sm hover:shadow-md transition-all block group"
    >
      <div className="flex items-center justify-between mb-1">
        <strong className="text-slate-900 dark:text-[#f4f5f2] group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors text-base font-bold">
          {reference.name}
        </strong>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-[#737970] group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors" />
      </div>
      <span className="text-slate-500 dark:text-[#9da39d] text-xs block">
        {reference.category}
      </span>
    </motion.a>
  );
}
