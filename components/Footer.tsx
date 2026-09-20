"use client";

export default function Footer() {
  return (
    <footer className="wrap py-10 text-[#737970] border-t border-[#252925] text-[13px] flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div className="font-mono uppercase tracking-wider font-semibold text-[#f4f5f2] mb-1">
          ARAVIND A S · SOFTWARE ENGINEER
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#9da39d]">
          <a href="mailto:aravindas247@gmail.com" className="hover:text-[#c7ff4a] transition-colors">
            aravindas247@gmail.com
          </a>
          <span>•</span>
          <a href="https://wa.me/918848310248" target="_blank" rel="noopener noreferrer" className="hover:text-[#c7ff4a] transition-colors">
            +91 8848310248
          </a>
          <span>•</span>
          <a href="tel:918129365304" className="hover:text-[#c7ff4a] transition-colors">
            +91 8129365304
          </a>
        </div>
      </div>

      <div className="font-mono text-xs text-[#737970]">
        © {new Date().getFullYear()} Aravind A S
      </div>
    </footer>
  );
}
