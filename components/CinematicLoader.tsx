"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState(0); // 0: initial, 1: text visible, 2: exit

  useEffect(() => {
    // Phase 1: Show the name after a beat
    const t1 = setTimeout(() => setPhase(1), 300);
    // Phase 2: Start exit sequence
    const t2 = setTimeout(() => setPhase(2), 1600);
    // Phase 3: Remove loader from DOM
    const t3 = setTimeout(() => setIsLoading(false), 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090a0a] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated gradient orbs in background */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-[#c7ff4a]/10 blur-[200px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 1 ? { scale: 1, opacity: 0.6 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-emerald-600/15 blur-[150px] translate-x-40 translate-y-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 1 ? { scale: 1.2, opacity: 0.4 } : {}}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Horizontal line sweep (left) */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#c7ff4a]/60 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={phase >= 1 ? { width: "400px", opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ left: "50%", transform: "translateX(-50%) translateY(-50%)" }}
            />

            {/* Name text with letter-by-letter reveal */}
            <motion.div className="overflow-hidden">
              <motion.h1
                className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-white"
                initial={{ y: "100%", opacity: 0 }}
                animate={phase >= 1 ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[#c7ff4a]">ARAVIND</span>{" "}
                <span className="text-white/80">A S</span>
              </motion.h1>
            </motion.div>

            {/* Subtitle with delayed reveal */}
            <motion.div className="overflow-hidden">
              <motion.p
                className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#9da39d] uppercase"
                initial={{ y: "100%", opacity: 0 }}
                animate={phase >= 1 ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              >
                Software Engineer • Digital Products
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-[2px] bg-[#252925] rounded-full overflow-hidden mt-2"
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-[#c7ff4a] rounded-full"
                initial={{ width: "0%" }}
                animate={phase >= 1 ? { width: "100%" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Cinematic top curtain */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#090a0a] z-20"
            initial={{ y: 0 }}
            animate={phase >= 2 ? { y: "-100%" } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Cinematic bottom curtain */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#090a0a] z-20"
            initial={{ y: 0 }}
            animate={phase >= 2 ? { y: "100%" } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
