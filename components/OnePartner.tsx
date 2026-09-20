"use client";

import { motion } from "framer-motion";
import { ONE_PARTNER_POINTS } from "@/data/services";
import { Target, Layers, UserCheck, HeartHandshake } from "lucide-react";

export default function OnePartner() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target className="w-6 h-6 text-[#c7ff4a]" />;
      case 1: return <Layers className="w-6 h-6 text-[#c7ff4a]" />;
      case 2: return <UserCheck className="w-6 h-6 text-[#c7ff4a]" />;
      case 3: return <HeartHandshake className="w-6 h-6 text-[#c7ff4a]" />;
      default: return <Target className="w-6 h-6 text-[#c7ff4a]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[#252925] bg-[radial-gradient(ellipse_at_top,rgba(199,255,74,0.06),transparent_50%)]">
      <div className="wrap">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="eyebrow-accent mb-2">The Single Developer Advantage</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] uppercase">
            ONE PARTNER. FROM IDEA TO LAUNCH.
          </h2>
          <p className="text-[#9da39d] text-base sm:text-lg mt-4 leading-relaxed">
            You don't need to coordinate multiple developers for design, development, deployment and future improvements. Work directly with one dedicated engineer throughout the entire project lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ONE_PARTNER_POINTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: "#3c4339" }}
              className="p-7 border border-[#252925] rounded-2xl bg-[#101211] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#171a17] border border-[#252925] flex items-center justify-center mb-5 group-hover:border-[#c7ff4a]/40 transition-colors">
                {getIcon(idx)}
              </div>
              <h3 className="text-lg font-bold text-[#f4f5f2] mb-2 group-hover:text-[#c7ff4a] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#9da39d] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
