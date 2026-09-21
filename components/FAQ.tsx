"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/data/services";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="eyebrow-accent mb-2 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-slate-200 dark:border-[#252925] rounded-2xl bg-white dark:bg-[#101211] overflow-hidden transition-colors hover:border-slate-300 dark:hover:border-[#3c4339] shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 dark:text-[#f4f5f2] hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 dark:text-[#c7ff4a] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-[#9da39d] text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-[#252925]/50 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
