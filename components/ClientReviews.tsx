"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CLIENT_REVIEWS } from "@/data/projects";
import { 
  Star, 
  MapPin, 
  BadgeCheck, 
  Building2,
  Quote,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function ClientReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Helper for generating stylized client avatar initials
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} id="reviews" className="py-20 sm:py-28 border-t border-slate-200 dark:border-[#252925] bg-slate-50/50 dark:bg-[#0b0d0c] relative overflow-hidden">
      
      {/* Background Ambient Glow Orbs */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 eyebrow-accent mb-3 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-[#161a16] border border-emerald-200/70 dark:border-[#283226]">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
              <span className="text-xs font-semibold text-emerald-700 dark:text-[#c7ff4a]">
                Verified Client Testimonials
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-[-0.04em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase leading-tight">
              WHAT CLIENTS SAY <span className="text-emerald-600 dark:text-[#c7ff4a]">ABOUT MY WORK</span>
            </h2>
            
            <p className="text-slate-600 dark:text-[#9da39d] max-w-xl text-base sm:text-lg mt-3">
              Real feedback from business owners, retail brands, and startup founders I collaborate with.
            </p>
          </motion.div>

          {/* Rating Summary Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.45, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-[#121513] border border-slate-200 dark:border-[#252925] shadow-sm self-start md:self-auto"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-[#c7ff4a] dark:text-[#c7ff4a]" />
              ))}
            </div>
            <div className="text-xs font-mono font-bold text-slate-800 dark:text-white border-l border-slate-200 dark:border-[#252925] pl-3">
              5.0 Rating • 100% Client Satisfaction
            </div>
          </motion.div>
        </div>

        <CinematicLineSweep className="mb-10" />

        {/* 3-COLUMN REVIEWS GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CLIENT_REVIEWS.map((review, idx) => {
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={review.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative pt-5 flex flex-col group"
              >
                {/* 3D Floating Client Avatar Badge */}
                <div className="absolute top-0 left-7 z-20 w-12 h-12 rounded-2xl bg-slate-900 text-white dark:bg-[#c7ff4a] dark:text-[#0a0b0a] font-extrabold text-sm flex items-center justify-center shadow-lg border-2 border-white dark:border-[#0b0d0c] group-hover:scale-110 transition-transform duration-300">
                  {getInitials(review.clientName)}
                </div>

                {/* Card Main Body */}
                <div className={`flex-1 rounded-[28px] p-6 sm:p-7 pt-10 border transition-colors duration-300 flex flex-col justify-between relative overflow-hidden shadow-sm group-hover:shadow-2xl ${
                  isFeatured
                    ? "bg-white dark:bg-[#121513] border-emerald-500/80 dark:border-[#c7ff4a]/70 shadow-emerald-500/10 dark:shadow-[#c7ff4a]/10"
                    : "bg-white dark:bg-[#121513] border-slate-200/90 dark:border-[#232823] hover:border-emerald-500/60 dark:hover:border-[#c7ff4a]/60"
                }`}>
                  
                  {/* Decorative Background Quote Icon */}
                  <Quote className="absolute top-4 right-5 w-16 h-16 text-slate-100 dark:text-[#181d19] pointer-events-none stroke-[1]" />

                  <div>
                    {/* Client Name & Role Row */}
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-extrabold text-slate-900 dark:text-[#f4f5f2] text-base leading-tight group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                          {review.clientName}
                        </h3>
                        <span className="text-xs font-mono font-medium text-slate-500 dark:text-[#889088] block mt-0.5">
                          {review.role}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-[#172218] text-emerald-700 dark:text-[#c7ff4a] border border-emerald-200/80 dark:border-[#253626] shrink-0 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    </div>

                    {/* 5-Star Rating Bar */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400 dark:fill-[#c7ff4a] dark:text-[#c7ff4a]"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-slate-600 dark:text-[#c5cdc4] text-xs sm:text-sm leading-relaxed italic mb-6">
                      "{review.reviewText}"
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-4 border-t border-slate-100 dark:border-[#1e231f] flex items-center justify-between gap-2 text-[11.5px] font-mono text-slate-500 dark:text-[#889088]">
                    <div className="flex items-center gap-1.5 truncate">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">{review.projectName}</span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 text-slate-400 dark:text-[#707870]">
                      <MapPin className="w-3 h-3 text-emerald-600 dark:text-[#c7ff4a]" />
                      <span>{review.location}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
