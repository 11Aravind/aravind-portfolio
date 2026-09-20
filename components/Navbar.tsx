"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#090a0a]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="wrap flex items-center justify-between h-[74px]">
        {/* Logo */}
        <a href="#" className="font-extrabold tracking-tight text-white text-lg hover:text-[#c7ff4a] transition-colors">
          ARAVIND A S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[30px] text-[#b9beb8] text-sm font-medium">
          <a href="#work" className="hover:text-[#c7ff4a] transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-[#c7ff4a] transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-[#c7ff4a] transition-colors">
            Process
          </a>
          <a href="#about" className="hover:text-[#c7ff4a] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#c7ff4a] transition-colors">
            Contact
          </a>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#c7ff4a] text-[#111111] font-bold rounded-full text-xs uppercase tracking-wider hover:opacity-90 transition-all inline-flex items-center gap-1.5 shadow-md shadow-[#c7ff4a]/10"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-[#b9beb8] hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0a] border-b border-[#252925] px-6 py-5 flex flex-col gap-4">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#b9beb8] hover:text-[#c7ff4a] py-1"
          >
            Work
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#b9beb8] hover:text-[#c7ff4a] py-1"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#b9beb8] hover:text-[#c7ff4a] py-1"
          >
            Process
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#b9beb8] hover:text-[#c7ff4a] py-1"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#b9beb8] hover:text-[#c7ff4a] py-1"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 bg-[#c7ff4a] text-[#111111] font-extrabold rounded-full text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}
