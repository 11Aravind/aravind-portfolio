"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 850;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 150);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="blurred-circular-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-white/60 dark:bg-[#090a0a]/65 backdrop-blur-xl text-slate-900 dark:text-[#f4f5f2] flex flex-col items-center justify-center select-none overflow-hidden transition-colors duration-300"
        >
          {/* Ambient Subtle Background Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-[#c7ff4a]/10 blur-[130px] pointer-events-none" />

          {/* Center Content Box */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            
            {/* Clean Circular Ring Loader (No Center Dot) */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Outer Circular Track */}
              <div className="absolute inset-0 rounded-full border-[2.5px] border-slate-300/70 dark:border-[#222823]" />
              
              {/* Spinning Circular Ring Arc */}
              <div className="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-emerald-600 dark:border-t-[#c7ff4a] border-r-emerald-600/40 dark:border-r-[#c7ff4a]/40 animate-spin" />
            </div>

            {/* Monogram Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-xs font-extrabold tracking-[0.25em] text-slate-900 dark:text-white uppercase font-mono">
                ARAVIND A S
              </span>
            </motion.div>

            {/* Percentage Counter Badge */}
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-emerald-700 dark:text-[#c7ff4a] bg-white/80 dark:bg-[#151916]/90 px-3 py-1 rounded-full border border-slate-300/70 dark:border-[#283229] shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#c7ff4a] animate-ping" />
              <span>{String(progress).padStart(2, "0")}%</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
