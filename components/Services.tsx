"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import { 
  Globe, 
  ShoppingCart, 
  Code2, 
  Smartphone, 
  Building2, 
  Server, 
  TrendingUp, 
  LifeBuoy 
} from "lucide-react";

export default function Services() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "websites":
        return <Globe className="w-6 h-6 text-[#c7ff4a]" />;
      case "e-commerce":
        return <ShoppingCart className="w-6 h-6 text-[#c7ff4a]" />;
      case "web-applications":
        return <Code2 className="w-6 h-6 text-[#c7ff4a]" />;
      case "mobile-applications":
        return <Smartphone className="w-6 h-6 text-[#c7ff4a]" />;
      case "crm-business-systems":
        return <Building2 className="w-6 h-6 text-[#c7ff4a]" />;
      case "backend-integrations":
        return <Server className="w-6 h-6 text-[#c7ff4a]" />;
      case "digital-marketing":
        return <TrendingUp className="w-6 h-6 text-[#c7ff4a]" />;
      case "ongoing-development":
        return <LifeBuoy className="w-6 h-6 text-[#c7ff4a]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#c7ff4a]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 border-t border-[#252925]">
      <div className="wrap">
        
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="eyebrow-accent mb-2">Capabilities & Offerings</div>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] tracking-[-0.05em] font-extrabold text-[#f4f5f2] uppercase">
            WHAT I CAN BUILD FOR YOU
          </h2>
        </motion.div>

        {/* 4x2 Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, borderColor: "#3c4339" }}
              className="p-6 sm:p-7 border border-[#252925] rounded-2xl bg-[#101211] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#171a17] border border-[#252925] flex items-center justify-center mb-5 group-hover:border-[#c7ff4a]/40 transition-colors">
                  {getServiceIcon(item.id)}
                </div>
                <h3 className="font-bold text-lg text-[#f4f5f2] mb-2 group-hover:text-[#c7ff4a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#9da39d] text-sm leading-relaxed m-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
