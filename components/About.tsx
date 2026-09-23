"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, User } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.95, 1, 1]);

  const capabilities = [
    "Websites",
    "E-commerce",
    "Web Applications",
    "Mobile Applications",
    "Billing Software Development",
    "CRM / Business Systems",
    "APIs & Backend",
    "Ongoing Development"
  ];

  const capContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.4 },
    },
  };

  const capItemVariants = {
    hidden: { opacity: 0, x: -15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: cardScale }}
          className="border border-slate-200 dark:border-[#252925] rounded-3xl p-6 sm:p-10 md:p-12 bg-white dark:bg-[#101211] shadow-xl shadow-slate-200/50 dark:shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="eyebrow-accent mb-3 flex items-center gap-2"
          >
            <User className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a]" />
            <span>Behind The Code</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase tracking-tight mb-6"
          >
            ABOUT ARAVIND
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-600 dark:text-[#9da39d] text-lg sm:text-xl leading-relaxed mb-8 font-medium"
          >
            Freelance software engineer based in Kerala, working with businesses and entrepreneurs to build modern digital products.
          </motion.p>

          <div className="border-t border-slate-200 dark:border-[#252925] pt-6">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xs font-mono font-bold text-emerald-600 dark:text-[#c7ff4a] uppercase tracking-wider mb-4"
            >
              Core Technical Capabilities
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              variants={capContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {capabilities.map((cap) => (
                <motion.div
                  key={cap}
                  variants={capItemVariants}
                  className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-[#f4f5f2]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                  <span>{cap}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
