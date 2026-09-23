"use client";

import { motion } from "framer-motion";

export default function BotanicalLeaves() {
  return (
    <>
      {/* Bottom-Left Botanical Animated Leaf */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -25, y: 30 }}
        animate={{
          opacity: [0.75, 0.9, 0.75],
          scale: [1.1, 1.14, 1.08, 1.1],
          rotate: [-14, -8, -17, -14],
          y: [0, -12, 6, 0],
          x: [0, 6, -4, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed -bottom-10 -left-12 z-20 pointer-events-none blur-[2.5px] select-none transform-gpu origin-bottom-left"
      >
        <svg width="240" height="280" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M10 250C20 180 80 120 160 80C140 130 110 190 30 250Z" fill="#15803d" fillOpacity="0.88"/>
          <path d="M40 260C60 190 130 150 200 110C170 160 130 210 60 260Z" fill="#166534" fillOpacity="0.82"/>
          <path d="M0 190C15 140 70 85 135 60C110 100 85 145 20 190Z" fill="#22c55e" fillOpacity="0.65"/>
          <path d="M20 130C35 90 85 45 150 20C130 60 100 100 40 130Z" fill="#15803d" fillOpacity="0.6"/>
        </svg>
      </motion.div>

      {/* Bottom-Right Botanical Animated Leaf */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 25, y: 30 }}
        animate={{
          opacity: [0.7, 0.85, 0.7],
          scale: [1.1, 1.15, 1.07, 1.1],
          rotate: [12, 18, 7, 12],
          y: [0, -14, 5, 0],
          x: [0, -7, 4, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="fixed -bottom-12 -right-10 z-20 pointer-events-none blur-[2.5px] select-none transform-gpu origin-bottom-right"
      >
        <svg width="260" height="300" viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M230 270C210 190 140 130 50 90C80 140 110 200 200 270Z" fill="#166534" fillOpacity="0.88"/>
          <path d="M190 280C170 200 90 160 10 120C50 170 90 220 170 280Z" fill="#15803d" fillOpacity="0.78"/>
          <path d="M220 190C200 135 130 80 60 50C90 95 125 140 200 190Z" fill="#22c55e" fillOpacity="0.7"/>
        </svg>
      </motion.div>
    </>
  );
}

