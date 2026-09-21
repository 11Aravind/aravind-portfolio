"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, ShoppingCart, Code2, RefreshCw } from "lucide-react";

export default function TrustProof() {
  const proofItems = [
    {
      icon: <Globe className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />,
      title: "Production Websites",
      description: "Custom business websites engineered for speed, mobile responsiveness, and client conversion."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />,
      title: "E-commerce Projects",
      description: "Live fashion and retail online storefronts handling real product catalogs and customer shopping flows."
    },
    {
      icon: <Code2 className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />,
      title: "Custom Web Applications",
      description: "Responsive web apps, backend APIs, and React Native mobile applications built end-to-end."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-[#c7ff4a]" />,
      title: "Ongoing Development",
      description: "Long-term engineering partnerships providing updates, new features, and technical maintenance."
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#252925]">
      <div className="wrap">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2 flex items-center gap-2 justify-center md:justify-start">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a]" />
            <span>Verified Work & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase">
            TRUST BUILT THROUGH REAL WORK
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proofItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 border border-slate-200 dark:border-[#252925] rounded-2xl bg-white dark:bg-[#101211] hover:border-slate-300 dark:hover:border-[#3c4339] shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#171a17] border border-emerald-100 dark:border-[#252925] flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-[#f4f5f2] mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
