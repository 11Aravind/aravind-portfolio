"use client";

import { motion } from "framer-motion";
import { CLIENT_REVIEWS } from "@/data/projects";
import { Star, Quote, MapPin, CheckCircle2 } from "lucide-react";

export default function ClientReviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2 flex items-center gap-2 justify-center md:justify-start">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a]" />
            <span>Client Feedback & Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            WHAT CLIENTS SAY ABOUT MY WORK
          </h2>
        </motion.div>

        {/* 2x2 Grid of Client Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="p-7 sm:p-8 border border-slate-200 dark:border-[#252925] hover:border-slate-300 dark:hover:border-[#3c4339] rounded-2xl bg-white dark:bg-[#101211] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Background Accent Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-[#c7ff4a] dark:text-[#c7ff4a]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 dark:text-[#252925] group-hover:text-emerald-500/30 dark:group-hover:text-[#c7ff4a]/30 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 dark:text-[#f4f5f2] text-sm sm:text-base leading-relaxed italic mb-6">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-[#252925] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-[#f4f5f2] text-base group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                    {review.clientName}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-[#9da39d]">
                    {review.projectName}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#737970] font-mono shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
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
