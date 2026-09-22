"use client";

import { motion } from "framer-motion";
import { CLIENT_REVIEWS } from "@/data/projects";
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  BadgeCheck, 
  Building2 
} from "lucide-react";

export default function ClientReviews() {
  // Helper for generating stylized client avatar initials
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 border-t border-slate-200 dark:border-[#252925] bg-slate-50/40 dark:bg-[#0b0d0c] relative overflow-hidden">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="wrap relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 eyebrow-accent mb-3 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-[#161a16] border border-emerald-200/70 dark:border-[#283226]">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
              <span className="text-xs font-semibold text-emerald-700 dark:text-[#c7ff4a]">
                Verified Client Feedback
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.04em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase leading-tight">
              WHAT CLIENTS SAY <span className="text-emerald-600 dark:text-[#c7ff4a]">ABOUT MY WORK</span>
            </h2>
            
            <p className="text-slate-600 dark:text-[#9da39d] max-w-xl text-base sm:text-lg mt-3">
              Real testimonials from business owners, boutique brands, and startup founders I've collaborated with.
            </p>
          </motion.div>

          {/* Rating Summary Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#121513] border border-slate-200 dark:border-[#252925] shadow-sm self-start md:self-auto"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-[#c7ff4a] dark:text-[#c7ff4a]" />
              ))}
            </div>
            <div className="text-xs font-mono font-bold text-slate-800 dark:text-white border-l border-slate-200 dark:border-[#252925] pl-3">
              5.0 / 5.0 Rating • 100% Satisfaction
            </div>
          </motion.div>
        </div>

        {/* 2-Column Responsive Grid (Contained inside main wrap container) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {CLIENT_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl border transition-all duration-300 bg-white dark:bg-[#121513] border-slate-200 dark:border-[#232823] hover:border-emerald-500/50 dark:hover:border-[#c7ff4a]/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-[#c7ff4a]/5 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Accent Gradient Border highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 dark:via-[#c7ff4a] to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Background Ambient Glow on Hover */}
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-emerald-500/10 dark:bg-[#c7ff4a]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div>
                {/* Header: Avatar Initials + Star Rating + Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initials Circle */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 dark:from-[#c7ff4a] dark:to-emerald-500 text-slate-900 font-extrabold text-sm flex items-center justify-center shadow-md shadow-emerald-500/20 dark:shadow-[#c7ff4a]/20 shrink-0">
                      {getInitials(review.clientName)}
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-[#f4f5f2] text-sm sm:text-base group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors flex items-center gap-1.5">
                        {review.clientName}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                      </h3>
                      <span className="text-xs font-medium text-slate-500 dark:text-[#909890] block">
                        {review.role}
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-[#181c19] border border-slate-200 dark:border-[#272d27] flex items-center justify-center text-slate-400 dark:text-[#555e55] group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] group-hover:border-emerald-300 dark:group-hover:border-[#384635] transition-all">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Rating Stars Bar */}
                <div className="flex items-center gap-1.5 mb-4 bg-emerald-50/60 dark:bg-[#161c16] px-3 py-1.5 rounded-lg w-max border border-emerald-100 dark:border-[#232f22]">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400 dark:fill-[#c7ff4a] dark:text-[#c7ff4a]"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 dark:text-[#c7ff4a] ml-1">
                    5.0 Verified Review
                  </span>
                </div>

                {/* Review Quote Text */}
                <p className="text-slate-700 dark:text-[#e1e4df] text-sm sm:text-[15px] leading-relaxed italic mb-6">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Client Info & Project Tag Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-[#212621] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-[#9da39d] truncate">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs truncate font-medium">
                    {review.projectName}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-[#7d857d] font-mono shrink-0 bg-slate-100 dark:bg-[#171b18] px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-[#242b24]">
                  <MapPin className="w-3 h-3 text-emerald-600 dark:text-[#c7ff4a]" />
                  <span>{review.location}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


