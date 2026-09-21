"use client";

import { motion } from "framer-motion";
import { CLIENT_REVIEWS } from "@/data/projects";
import { Star, Quote, MapPin, CheckCircle2 } from "lucide-react";

export default function ClientReviews() {
  // Duplicate array for seamless infinite loop animation
  const duplicatedReviews = [...CLIENT_REVIEWS, ...CLIENT_REVIEWS];

  return (
    <section id="reviews" className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925] overflow-hidden">
      <div className="wrap mb-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2 flex items-center gap-2 justify-center md:justify-start">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a]" />
            <span>Client Feedback & Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            WHAT CLIENTS SAY ABOUT MY WORK
          </h2>
        </motion.div>

      </div>

      {/* Single Line Animated Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Subtle Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 dark:from-[#090a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 dark:from-[#090a0a] to-transparent z-10 pointer-events-none" />

        {/* Infinite Sliding Motion Container */}
        <motion.div
          className="flex gap-5 sm:gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {duplicatedReviews.map((review, idx) => (
            <motion.div
              key={`${review.id}-${idx}`}
              whileHover={{ scale: 1.02, y: -4 }}
              className="w-[300px] xs:w-[360px] sm:w-[420px] p-6 sm:p-7 border border-slate-200 dark:border-[#252925] hover:border-slate-300 dark:hover:border-[#3c4339] rounded-2xl bg-white dark:bg-[#101211] shadow-sm hover:shadow-md transition-all flex flex-col justify-between shrink-0 relative overflow-hidden group"
            >
              {/* Background Accent Glow */}
              <div className="absolute -right-10 -top-10 w-28 h-28 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-[#c7ff4a] dark:text-[#c7ff4a]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 dark:text-[#252925] group-hover:text-emerald-500/40 dark:group-hover:text-[#c7ff4a]/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 dark:text-[#f4f5f2] text-sm leading-relaxed italic mb-5 line-clamp-4">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-[#252925] flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-[#f4f5f2] text-sm group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                    {review.clientName}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-[#9da39d] block truncate max-w-[180px] sm:max-w-[220px]">
                    {review.projectName}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-[#737970] font-mono shrink-0">
                  <MapPin className="w-3 h-3 text-emerald-600 dark:text-[#c7ff4a]" />
                  <span>{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
