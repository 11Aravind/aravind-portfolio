"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

// ─── Cinematic Section Wrapper ──────────────────────────────────────
// Wraps any section with parallax + scroll-driven reveal effects
interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  parallaxIntensity?: number; // 0 to 50 (px of parallax movement)
  revealType?: "fade-up" | "fade-blur" | "slide-left" | "slide-right" | "scale-up" | "curtain";
  delay?: number;
}

export function CinematicSection({
  children,
  className = "",
  parallaxIntensity = 30,
  revealType = "fade-up",
  delay = 0,
}: CinematicSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxIntensity, -parallaxIntensity]
  );

  const getVariants = () => {
    switch (revealType) {
      case "fade-blur":
        return {
          hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: 80 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale-up":
        return {
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 },
        };
      case "curtain":
        return {
          hidden: { opacity: 0, y: 60, scale: 0.96 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      default: // fade-up
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y: parallaxY }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─── Cinematic Text Reveal ──────────────────────────────────────────
// Animates text word-by-word or character-by-character
interface TextRevealProps {
  text: string;
  className?: string;
  mode?: "word" | "char";
  staggerDelay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function CinematicTextReveal({
  text,
  className = "",
  mode = "word",
  staggerDelay = 0.04,
  tag: Tag = "div",
}: TextRevealProps) {
  const units = mode === "word" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -40,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={`${className} flex flex-wrap`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: "600px" }}
    >
      {units.map((unit, i) => (
        <motion.span
          key={`${unit}-${i}`}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {unit}
          {mode === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.div>
  );
}

// ─── Cinematic Counter ──────────────────────────────────────────────
// Animate a number counting up from 0
interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function CinematicCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: CounterProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// ─── Floating Parallax Element ──────────────────────────────────────
// Creates a floating element with scroll-based parallax
interface FloatingParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function FloatingParallax({
  children,
  speed = 0.5,
  className = "",
}: FloatingParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// ─── Stagger Grid Container ─────────────────────────────────────────
// Stagger children cards with cinematic entrance
interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function CinematicStaggerGrid({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerGridProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Grid Item ──────────────────────────────────────────────
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function CinematicStaggerItem({
  children,
  className = "",
}: StaggerItemProps) {
  const item = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

// ─── Horizontal Line Sweep ──────────────────────────────────────────
// A decorative animated horizontal line
interface LineSweepProps {
  className?: string;
}

export function CinematicLineSweep({ className = "" }: LineSweepProps) {
  return (
    <motion.div
      className={`h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 dark:via-[#c7ff4a]/40 to-transparent ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "center" }}
    />
  );
}
