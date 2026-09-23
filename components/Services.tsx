"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/data/services";
import { 
  Globe, 
  ShoppingCart, 
  Code2, 
  Smartphone, 
  Building2, 
  Server, 
  TrendingUp, 
  LifeBuoy 
} from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "websites":
        return <Globe className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "e-commerce":
        return <ShoppingCart className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "web-applications":
        return <Code2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "mobile-applications":
        return <Smartphone className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "crm-business-systems":
        return <Building2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "backend-integrations":
        return <Server className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "digital-marketing":
        return <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "ongoing-development":
        return <LifeBuoy className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      default:
        return <Code2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925] relative overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/5 dark:bg-[#c7ff4a]/5 blur-[100px] pointer-events-none"
      />

      <div className="wrap relative z-10">
        
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2">Capabilities & Offerings</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            WHAT I CAN BUILD FOR YOU
          </h2>
        </motion.div>

        <CinematicLineSweep className="mb-10" />

        {/* 4x2 Visual Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 sm:p-7 border border-slate-200 dark:border-[#252925] hover:border-slate-300 dark:hover:border-[#3c4339] rounded-2xl bg-white dark:bg-[#101211] shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center mb-5 group-hover:border-emerald-300 dark:group-hover:border-[#c7ff4a]/40 transition-colors group-hover:scale-110 duration-300">
                  {getServiceIcon(item.id)}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-[#f4f5f2] mb-2 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed m-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
