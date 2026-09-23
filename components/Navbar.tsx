"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial document class or user preference
    if (typeof window !== "undefined") {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 bg-white/90 dark:bg-[#090a0a]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.06] transition-colors duration-300 mb-[18px]"
    >
      <div className="wrap flex items-center justify-between h-[74px]">
        {/* Logo */}
        <a href="#" className="font-extrabold tracking-tight text-slate-900 dark:text-white text-lg hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
          ARAVIND A S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[30px] text-slate-600 dark:text-[#b9beb8] text-sm font-medium">
          <a href="#work" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            Work
          </a>
          <a href="#products" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            Products
          </a>
          <a href="#services" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            Services
          </a>
          <a href="#reviews" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            Reviews
          </a>
          <a href="#process" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            Process
          </a>
          <a href="#about" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            Contact
          </a>
        </div>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full border border-slate-200 dark:border-[#252925] bg-slate-100 dark:bg-[#141714] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#1e221e] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#c7ff4a]" /> : <Moon className="w-4 h-4 text-emerald-600" />}
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-[#c7ff4a] dark:hover:opacity-90 dark:text-[#111111] font-bold rounded-full text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shadow-md shadow-emerald-600/10 dark:shadow-[#c7ff4a]/10"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-slate-200 dark:border-[#252925] bg-slate-100 dark:bg-[#141714] text-slate-700 dark:text-slate-300"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#c7ff4a]" /> : <Moon className="w-4 h-4 text-emerald-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-700 dark:text-[#b9beb8] hover:text-slate-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#090a0a] border-b border-slate-200 dark:border-[#252925] px-6 py-5 flex flex-col gap-4">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-700 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] py-1"
          >
            Work
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-700 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] py-1"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-700 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] py-1"
          >
            Process
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-700 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] py-1"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-700 dark:text-[#b9beb8] hover:text-emerald-600 dark:hover:text-[#c7ff4a] py-1"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 bg-emerald-600 text-white dark:bg-[#c7ff4a] dark:text-[#111111] font-extrabold rounded-full text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </motion.nav>
  );
}
