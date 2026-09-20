"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Code2, 
  Building2, 
  Wrench, 
  TrendingUp, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

interface LeadQualificationProps {
  onSelectProjectType?: (projectType: string) => void;
}

export default function LeadQualification({ onSelectProjectType }: LeadQualificationProps) {
  const options = [
    { label: "Website", icon: <Globe className="w-5 h-5 text-[#c7ff4a]" />, description: "Modern, responsive business website" },
    { label: "E-commerce", icon: <ShoppingCart className="w-5 h-5 text-[#c7ff4a]" />, description: "Online store & shopping experience" },
    { label: "Mobile App", icon: <Smartphone className="w-5 h-5 text-[#c7ff4a]" />, description: "Cross-platform iOS & Android app" },
    { label: "Web Application", icon: <Code2 className="w-5 h-5 text-[#c7ff4a]" />, description: "Custom web app, portal, or platform" },
    { label: "CRM / Business System", icon: <Building2 className="w-5 h-5 text-[#c7ff4a]" />, description: "CRM, admin panel, or internal tools" },
    { label: "Existing Product Improvement", icon: <Wrench className="w-5 h-5 text-[#c7ff4a]" />, description: "Redesign, performance, or new features" },
    { label: "Digital Marketing", icon: <TrendingUp className="w-5 h-5 text-[#c7ff4a]" />, description: "High-converting landing pages & growth" },
    { label: "Not Sure Yet", icon: <HelpCircle className="w-5 h-5 text-[#c7ff4a]" />, description: "Discuss ideas & explore possibilities" },
  ];

  const handleSelect = (label: string) => {
    if (onSelectProjectType) {
      onSelectProjectType(label);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[#252925] bg-[radial-gradient(ellipse_at_bottom,rgba(199,255,74,0.06),transparent_60%)]">
      <div className="wrap">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="eyebrow-accent mb-2">Interactive Project Selector</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] uppercase">
            WHAT ARE YOU LOOKING TO BUILD?
          </h2>
          <p className="text-[#9da39d] max-w-xl mx-auto text-base sm:text-lg mt-3">
            Select your project type below to pre-fill your project inquiry and get a fast response.
          </p>
        </motion.div>

        {/* 8 Selectable Option Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {options.map((option, idx) => (
            <motion.button
              key={option.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, borderColor: "#c7ff4a", backgroundColor: "#151715" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(option.label)}
              className="p-5 border border-[#252925] rounded-2xl bg-[#101211] text-left transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#171a17] border border-[#252925] flex items-center justify-center mb-4 group-hover:border-[#c7ff4a]/40 transition-colors">
                  {option.icon}
                </div>
                <h3 className="text-base font-bold text-[#f4f5f2] mb-1 group-hover:text-[#c7ff4a] transition-colors flex items-center justify-between">
                  <span>{option.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#737970] group-hover:text-[#c7ff4a] group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-[#9da39d] text-xs leading-relaxed">
                  {option.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
