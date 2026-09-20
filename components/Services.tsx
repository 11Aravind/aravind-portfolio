"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-[105px]">
      <div className="wrap">
        
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-[38px]"
        >
          <div className="eyebrow-accent mb-2">What I build</div>
          <h2 className="text-4xl sm:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] leading-tight">
            From first idea<br />to launch.
          </h2>
        </motion.div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
          {SERVICES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, borderColor: "#3c4339" }}
              className="p-[28px] border border-[#252925] rounded-[18px] bg-[#101211] transition-all group"
            >
              <b className="font-bold text-[18px] text-[#f4f5f2] block mb-2 group-hover:text-[#c7ff4a] transition-colors">
                {item.title}
              </b>
              <p className="text-[#9da39d] text-[14px] leading-relaxed m-0">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
