"use client";

export default function BotanicalLeaves() {
  return (
    <>
      {/* Bottom-Left Botanical Leaf */}
      <div className="fixed -bottom-10 -left-12 z-20 pointer-events-none blur-[3px] opacity-75 sm:opacity-85 transition-transform duration-700 select-none -rotate-12 scale-110">
        <svg width="220" height="260" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 250C20 180 80 120 160 80C140 130 110 190 30 250Z" fill="#15803d" fillOpacity="0.85"/>
          <path d="M40 260C60 190 130 150 200 110C170 160 130 210 60 260Z" fill="#166534" fillOpacity="0.8"/>
          <path d="M0 190C15 140 70 85 135 60C110 100 85 145 20 190Z" fill="#22c55e" fillOpacity="0.6"/>
          <path d="M20 130C35 90 85 45 150 20C130 60 100 100 40 130Z" fill="#15803d" fillOpacity="0.55"/>
        </svg>
      </div>

      {/* Bottom-Right Botanical Leaf */}
      <div className="fixed -bottom-12 -right-10 z-20 pointer-events-none blur-[3px] opacity-70 sm:opacity-80 select-none rotate-12 scale-110">
        <svg width="240" height="280" viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M230 270C210 190 140 130 50 90C80 140 110 200 200 270Z" fill="#166534" fillOpacity="0.85"/>
          <path d="M190 280C170 200 90 160 10 120C50 170 90 220 170 280Z" fill="#15803d" fillOpacity="0.75"/>
          <path d="M220 190C200 135 130 80 60 50C90 95 125 140 200 190Z" fill="#22c55e" fillOpacity="0.65"/>
        </svg>
      </div>
    </>
  );
}
