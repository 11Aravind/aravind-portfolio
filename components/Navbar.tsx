"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#090a0a]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="wrap flex items-center justify-between h-[74px]">
        {/* Logo */}
        <a href="#" className="font-extrabold tracking-tight text-white text-lg">
          ARAVIND A S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[30px] text-[#b9beb8] text-sm font-normal">
          <a href="#work" className="hover:text-[#f4f5f2] transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-[#f4f5f2] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#f4f5f2] transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-[#f4f5f2] transition-colors">
            Contact
          </a>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-4 py-2 border border-[#343933] rounded-full text-sm font-medium text-[#f4f5f2] hover:border-[#555c54] transition-colors"
          >
            Let's talk ↗
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
        <div className="md:hidden bg-[#090a0a] border-b border-[#252925] px-6 py-4 flex flex-col gap-3">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#b9beb8] hover:text-white py-1"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#b9beb8] hover:text-white py-1"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#b9beb8] hover:text-white py-1"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#b9beb8] hover:text-white py-1"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 border border-[#343933] rounded-full text-sm font-medium text-[#f4f5f2]"
          >
            Let's talk ↗
          </a>
        </div>
      )}
    </nav>
  );
}
