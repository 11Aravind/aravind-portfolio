"use client";

import { motion } from "framer-motion";
import { WHO_I_HELP } from "@/data/services";
import { Building2, Rocket, TrendingUp, RefreshCw } from "lucide-react";

export default function WhoIHelp() {
  const getIcon = (id: string) => {
    switch (id) {
      case "businesses":
        return <Building2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "startups":
        return <Rocket className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "growing-businesses":
        return <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "existing-products":
        return <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
      default:
        return <Building2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2">Targeted Solutions</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            BUILT FOR YOUR BUSINESS
          </h2>
        </motion.div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHO_I_HELP.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 border border-slate-200 dark:border-[#252925] hover:border-slate-300 dark:hover:border-[#3c4339] rounded-2xl bg-white dark:bg-[#101211] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center mb-5 group-hover:border-emerald-300 dark:group-hover:border-[#c7ff4a]/40 transition-colors">
                  {getIcon(item.id)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-[#f4f5f2] mb-2 group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
