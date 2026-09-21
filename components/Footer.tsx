"use client";

export default function Footer() {
  return (
    <footer className="wrap py-10 text-slate-500 dark:text-[#737970] border-t border-slate-200 dark:border-[#252925] text-xs flex flex-col md:flex-row items-center justify-between gap-4 pb-20 md:pb-10">
      <div>
        <div className="font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-[#f4f5f2] mb-1">
          ARAVIND A S · FREELANCE SOFTWARE ENGINEER
        </div>
        <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-[#9da39d]">
          <a href="mailto:aravindas247@gmail.com" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            aravindas247@gmail.com
          </a>
          <span>•</span>
          <a href="https://wa.me/918848310248" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-[#c7ff4a] transition-colors">
            +91 8848310248
          </a>
        </div>
      </div>

      <div className="font-mono text-slate-500 dark:text-[#737970]">
        © {new Date().getFullYear()} Aravind A S. All rights reserved.
      </div>
    </footer>
  );
}
