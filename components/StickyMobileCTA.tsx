"use client";

import { MessageSquare, ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  const whatsappUrl = "https://wa.me/918848310248?text=Hi%20Aravind,%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#090a0a]/95 backdrop-blur-lg border-t border-[#252925] p-3 px-4 flex items-center gap-3 shadow-2xl">
      <a
        href="#contact"
        className="flex-1 py-3 px-4 rounded-full bg-[#c7ff4a] text-[#111111] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#c7ff4a]/10 hover:opacity-90 transition-opacity"
      >
        <span>Start a Project</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="py-3 px-4 rounded-full bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0 shadow-lg shadow-[#25D366]/20 hover:bg-[#20bd5a] transition-all"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
        <span className="relative flex h-2 w-2 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </a>
    </div>
  );
}
