"use client";

import { motion } from "framer-motion";
import { NOORZAH_CASE_STUDY } from "@/data/projects";
import { ExternalLink, ShoppingBag, CheckCircle2, Layers, UserCheck } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="py-16 sm:py-24 border-t border-[#252925]">
      <div className="wrap">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="eyebrow-accent mb-2">Featured Project Case Study</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] uppercase">
            PRODUCTION DEPLOYMENT CASE STUDY
          </h2>
        </motion.div>

        {/* Case Study Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#252925] bg-[#101211] rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#252925]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#171a17] border border-[#252925] flex items-center justify-center text-[#c7ff4a]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#c7ff4a] uppercase font-bold tracking-wider block">
                  {NOORZAH_CASE_STUDY.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f4f5f2]">
                  {NOORZAH_CASE_STUDY.projectName}
                </h3>
              </div>
            </div>

            <a
              href={NOORZAH_CASE_STUDY.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171a17] border border-[#343933] hover:border-[#c7ff4a] text-sm font-bold text-[#f4f5f2] hover:text-[#c7ff4a] transition-all w-fit"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Grid Layout for Case Study Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Challenge Card */}
            <div className="p-6 rounded-2xl bg-[#090a0a] border border-[#252925]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c7ff4a] uppercase font-bold mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-[#9da39d] text-sm sm:text-base leading-relaxed">
                {NOORZAH_CASE_STUDY.challenge}
              </p>
            </div>

            {/* What I Built Card */}
            <div className="p-6 rounded-2xl bg-[#090a0a] border border-[#252925]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c7ff4a] uppercase font-bold mb-3">
                <Layers className="w-4 h-4" />
                <span>What I Built</span>
              </div>
              <p className="text-[#9da39d] text-sm sm:text-base leading-relaxed">
                {NOORZAH_CASE_STUDY.whatIBuilt}
              </p>
            </div>

            {/* My Role Card */}
            <div className="p-6 rounded-2xl bg-[#090a0a] border border-[#252925]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c7ff4a] uppercase font-bold mb-3">
                <UserCheck className="w-4 h-4" />
                <span>My Direct Role</span>
              </div>
              <p className="text-[#9da39d] text-sm sm:text-base leading-relaxed">
                {NOORZAH_CASE_STUDY.myRole}
              </p>
            </div>

          </div>

          {/* Bottom Banner */}
          <div className="mt-8 pt-6 border-t border-[#252925] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737970]">
            <span>Location Context: {NOORZAH_CASE_STUDY.locationContext}</span>
            <span className="text-[#c7ff4a]">Verified Production Client Website</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
