"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/services";
import { MessageSquareCode, Compass, Layout, Code2, Rocket, LifeBuoy } from "lucide-react";

export default function Process() {
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01": return <MessageSquareCode className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "02": return <Compass className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "03": return <Layout className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "04": return <Code2 className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "05": return <Rocket className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "06": return <LifeBuoy className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      default: return <Code2 className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2">Development Lifecycle</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            FROM IDEA TO LAUNCH
          </h2>
          <p className="text-slate-600 dark:text-[#9da39d] max-w-2xl text-base sm:text-lg mt-3">
            A transparent, streamlined engineering process where you work directly with one developer from initial discovery to final deployment and support.
          </p>
        </motion.div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-7 border border-slate-200 dark:border-[#252925] hover:border-slate-300 dark:hover:border-[#3c4339] rounded-2xl bg-white dark:bg-[#101211] shadow-sm hover:shadow-md relative overflow-hidden transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-widest text-emerald-700 dark:text-[#c7ff4a] bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] px-3 py-1 rounded-full">
                  {item.step} — {item.title}
                </span>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center">
                  {getStepIcon(item.step)}
                </div>
              </div>

              <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
