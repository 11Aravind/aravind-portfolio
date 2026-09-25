"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PRODUCTS_LIST, ProductItem } from "@/data/products";
import { 
  Package, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Send,
  X,
  Smartphone,
  ShieldCheck,
  UtensilsCrossed,
  MapPin,
  Barcode,
  Coffee,
  ArrowRight,
  Laptop,
  Layers,
  Cpu,
  Zap,
  Activity,
  Check
} from "lucide-react";
import { CinematicLineSweep } from "./CinematicEffects";

export default function ProductsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.97, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"overview" | "modules" | "specs" | "inquire">("overview");
  const [inquirySuccess, setInquirySuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const renderProductIcon = (iconName: string) => {
    switch (iconName) {
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case "Barcode":
        return <Barcode className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "Coffee":
        return <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Package className="w-5 h-5 text-emerald-600 dark:text-[#c7ff4a]" />;
    }
  };

  const handleOpenDemoModal = (product: ProductItem, initialTab: "overview" | "inquire" = "overview") => {
    setSelectedProduct(product);
    setActiveModalTab(initialTab);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: `Hi Aravind, I am interested in seeing a live demo & getting pricing for "${product.title}". Please share details.`
    });
    setInquirySuccess(false);
  };

  const handleWhatsAppInquiry = (productTitle: string) => {
    const text = encodeURIComponent(`Hi Aravind, I would like to inquire about your product "${productTitle}". Please share live demo & pricing options.`);
    window.open(`https://wa.me/918848310248?text=${text}`, "_blank");
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setInquirySuccess(false);
    }, 2800);
  };

  return (
    <section ref={sectionRef} id="products" className="py-20 sm:py-28 border-t border-slate-200 dark:border-[#252925] bg-slate-50/50 dark:bg-[#0b0d0c] relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <motion.div style={{ y: bgY }} className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-[140px] pointer-events-none" />
      <motion.div style={{ y: bgY }} className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 dark:bg-[#c7ff4a]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="wrap relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 eyebrow-accent mb-3 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-[#161a16] border border-emerald-200/70 dark:border-[#283226]">
              <Package className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c7ff4a]" />
              <span className="text-xs font-semibold text-emerald-700 dark:text-[#c7ff4a]">
                Ready-to-Deploy Software Products
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-[-0.04em] font-extrabold text-slate-900 dark:text-[#f4f5f2] uppercase leading-tight">
              PRODUCTS & <span className="text-emerald-600 dark:text-[#c7ff4a]">SOLUTIONS</span>
            </h2>
            
            <p className="text-slate-600 dark:text-[#9da39d] max-w-xl text-base sm:text-lg mt-3">
              Production-ready web apps, mobile systems, and POS software. Click any product to explore interactive live demos & details.
            </p>
          </motion.div>
        </div>

        <CinematicLineSweep className="mb-10" />

        {/* CLEAN 3-COLUMN 1-ROW PRODUCT SHOWCASE GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 pt-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PRODUCTS_LIST.map((product) => {
            const isComedy = product.isComedy;

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group rounded-[28px] p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl ${
                  isComedy
                    ? "bg-gradient-to-b from-amber-50/60 via-white to-amber-50/30 dark:from-[#1d1912] dark:via-[#14120e] dark:to-[#1d1912] border-amber-300/80 dark:border-amber-500/40 hover:border-amber-400"
                    : "bg-white dark:bg-[#121513] border-slate-200/90 dark:border-[#232823] hover:border-emerald-500/60 dark:hover:border-[#c7ff4a]/60"
                }`}
              >
                
                <div>
                  {/* Header Row: Icon + Category + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-sm ${
                        isComedy
                          ? "bg-amber-100 border-amber-200 dark:bg-[#282218] dark:border-amber-800/60"
                          : "bg-emerald-50 border-emerald-100 dark:bg-[#162218] dark:border-[#253626]"
                      }`}>
                        {renderProductIcon(product.iconName)}
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                          isComedy ? "text-amber-700 dark:text-amber-400" : "text-emerald-700 dark:text-[#c7ff4a]"
                        }`}>
                          {product.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-[#8d958d] block mt-0.5">
                          {product.tag}
                        </span>
                      </div>
                    </div>

                    {product.badge && (
                      <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border shrink-0 ${
                        isComedy
                          ? "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                          : "bg-slate-100 dark:bg-[#1c221c] text-slate-800 dark:text-[#c7ff4a] border-slate-200 dark:border-[#2b352b]"
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Visual Screenshot Window */}
                  <div className="h-[200px] p-2.5 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#161916] dark:to-[#0d0e0d] flex items-center relative overflow-hidden rounded-2xl mb-5">
                    <div className="w-full h-full border border-slate-200 dark:border-[#303530] rounded-xl bg-white dark:bg-[#131513] overflow-hidden group-hover:border-slate-300 dark:group-hover:border-[#4a5145] transition-colors shadow-sm relative">
                      
                      {/* Browser Window Bar */}
                      <div className="h-[24px] border-b border-slate-200 dark:border-[#2a2e2a] flex items-center justify-between px-2.5 bg-slate-50 dark:bg-[#131513] z-10 relative">
                        <div className="flex items-center gap-[4px]">
                          <i className="w-[5px] h-[5px] rounded-full bg-[#ff5f56] inline-block" />
                          <i className="w-[5px] h-[5px] rounded-full bg-[#ffbd2e] inline-block" />
                          <i className="w-[5px] h-[5px] rounded-full bg-[#27c93f] inline-block" />
                        </div>
                        <small className="text-slate-400 dark:text-[#aab0a7] font-mono text-[9px] tracking-wider uppercase truncate max-w-[140px]">
                          {product.appUrl || "live.app"}
                        </small>
                      </div>

                      {/* Product Screenshot Image */}
                      <div className="h-[calc(100%-24px)] w-full relative overflow-hidden bg-slate-100 dark:bg-[#0e100e]">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="p-4 flex items-center justify-center h-full text-xs font-mono text-slate-400">
                            System Preview Ready
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Clean Title */}
                  <h3 className={`text-xl font-bold mb-2.5 leading-snug transition-colors ${
                    isComedy
                      ? "text-amber-950 dark:text-amber-100 group-hover:text-amber-600 dark:group-hover:text-amber-300"
                      : "text-slate-900 dark:text-[#f4f5f2] group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a]"
                  }`}>
                    {product.title}
                  </h3>

                  {/* Concise 2-line Description */}
                  <p className="text-slate-600 dark:text-[#9da39d] text-sm leading-relaxed mb-5 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Tech / Feature Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10.5px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#181d19] border border-slate-200/70 dark:border-[#252d25] text-slate-700 dark:text-[#a0a8a0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clean Bottom Action Row: View Details & Demo (Primary) + WhatsApp (Secondary) */}
                <div className="pt-4 border-t border-slate-100 dark:border-[#1e231f] flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenDemoModal(product, "overview")}
                    className={`flex-1 py-3 px-5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm group/btn ${
                      isComedy
                        ? "bg-amber-500 hover:bg-amber-600 text-amber-950 dark:bg-amber-400 dark:hover:bg-amber-300 shadow-amber-500/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-[#c7ff4a] dark:text-[#0a0b0a] dark:hover:bg-[#b5f532]"
                    }`}
                  >
                    <span>View Details & Demo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppInquiry(product.title)}
                    className="p-3 rounded-2xl bg-emerald-50 dark:bg-[#161c16] text-emerald-700 dark:text-[#c7ff4a] border border-emerald-200/80 dark:border-[#233222] hover:bg-emerald-100 dark:hover:bg-[#1b251b] transition-all flex items-center justify-center shrink-0"
                    title="Inquire on WhatsApp"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a]" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* COMPREHENSIVE INTERACTIVE DEMO & DETAILS MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="w-full max-w-2xl rounded-3xl bg-white dark:bg-[#121513] border border-slate-200 dark:border-[#252925] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-br ${selectedProduct.accentGradient} border-b border-slate-200 dark:border-[#202721] relative`}>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/80 dark:bg-[#191d1a]/80 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#191d1a] border border-slate-200 dark:border-[#282f29] flex items-center justify-center shadow-md">
                    {renderProductIcon(selectedProduct.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#c7ff4a] uppercase tracking-wider block">
                      {selectedProduct.category} • {selectedProduct.modelType}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {selectedProduct.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Navigation Tabs */}
                <div className="flex items-center gap-2 mt-5 pt-3 border-t border-slate-200/50 dark:border-white/10 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setActiveModalTab("overview")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeModalTab === "overview"
                        ? "bg-slate-900 text-white dark:bg-[#c7ff4a] dark:text-black shadow-sm"
                        : "bg-white/80 dark:bg-[#181d19] text-slate-700 dark:text-[#a0a8a0] hover:bg-white dark:hover:bg-[#202721]"
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Demo Overview</span>
                  </button>

                  <button
                    onClick={() => setActiveModalTab("modules")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeModalTab === "modules"
                        ? "bg-slate-900 text-white dark:bg-[#c7ff4a] dark:text-black shadow-sm"
                        : "bg-white/80 dark:bg-[#181d19] text-slate-700 dark:text-[#a0a8a0] hover:bg-white dark:hover:bg-[#202721]"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Key Modules</span>
                  </button>

                  <button
                    onClick={() => setActiveModalTab("specs")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeModalTab === "specs"
                        ? "bg-slate-900 text-white dark:bg-[#c7ff4a] dark:text-black shadow-sm"
                        : "bg-white/80 dark:bg-[#181d19] text-slate-700 dark:text-[#a0a8a0] hover:bg-white dark:hover:bg-[#202721]"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Specs & Stack</span>
                  </button>

                  <button
                    onClick={() => setActiveModalTab("inquire")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeModalTab === "inquire"
                        ? "bg-emerald-600 text-white dark:bg-[#c7ff4a] dark:text-black shadow-sm"
                        : "bg-emerald-50 dark:bg-[#1a251b] text-emerald-700 dark:text-[#c7ff4a] border border-emerald-200 dark:border-[#253526]"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire / Quote</span>
                  </button>
                </div>

              </div>

              {/* Modal Body Content */}
              <div className="p-6 overflow-y-auto flex-1 text-slate-700 dark:text-[#c0c8c0]">
                
                {/* TAB 1: OVERVIEW */}
                {activeModalTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide font-mono">
                        Product Architecture & Overview
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-[#a0a8a0]">
                        {selectedProduct.demoDetails.overview}
                      </p>
                    </div>

                    {/* Metrics stat pills */}
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.metrics.map((m, mIdx) => (
                        <span key={mIdx} className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-[#172418] border border-emerald-200/80 dark:border-[#243825] text-emerald-800 dark:text-[#c7ff4a]">
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Simulated Screen Preview Canvas */}
                    <div className="rounded-2xl border border-slate-200 dark:border-[#282f29] bg-slate-950 p-5 text-white shadow-xl relative overflow-hidden">
                      <div className="flex items-center justify-between text-xs text-slate-400 pb-3 mb-4 border-b border-slate-800 font-mono">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span>Simulated System Dashboard</span>
                        </div>
                        <span className="text-emerald-400 font-bold">● ONLINE DEMO READY</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[10px] uppercase font-mono">System Model</span>
                          <span className="font-bold text-emerald-400 block mt-0.5">{selectedProduct.modelType}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[10px] uppercase font-mono">Deployment</span>
                          <span className="font-bold text-white block mt-0.5">Cloud SaaS / On-Premise</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Want a live 1-on-1 walkthrough?</span>
                        <button
                          onClick={() => handleWhatsAppInquiry(selectedProduct.title)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Request Walkthrough</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wide font-mono">
                        Included Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProduct.features.map((f, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-[#161a17] border border-slate-200/80 dark:border-[#232823] flex items-center gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#c7ff4a] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: MODULES */}
                {activeModalTab === "modules" && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide font-mono">
                      Sub-Modules & Workflows
                    </h4>
                    {selectedProduct.demoDetails.modules.map((mod, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#161a17] border border-slate-200 dark:border-[#232823] flex items-start gap-3">
                        <div className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-[#1c291c] text-emerald-700 dark:text-[#c7ff4a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-xs font-semibold leading-relaxed text-slate-800 dark:text-slate-200">
                            {mod}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB 3: SPECS */}
                {activeModalTab === "specs" && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide font-mono">
                      Technical Specs & Integrations
                    </h4>
                    {selectedProduct.demoDetails.specs.map((spec, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#161a17] border border-slate-200 dark:border-[#232823] text-xs font-mono text-slate-700 dark:text-[#c0c8c0] flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}

                    <div className="pt-3">
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-2">Technologies Used</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.techStack.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#1e241f] border border-slate-200 dark:border-[#2c372d] text-xs font-mono font-bold text-slate-800 dark:text-[#c7ff4a]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: INQUIRE FORM */}
                {activeModalTab === "inquire" && (
                  <div>
                    {inquirySuccess ? (
                      <div className="py-10 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-[#182618] text-emerald-600 dark:text-[#c7ff4a] flex items-center justify-center mb-4">
                          <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          Inquiry Received!
                        </h3>
                        <p className="text-slate-600 dark:text-[#9da39d] text-sm max-w-sm">
                          Thank you for inquiring about <strong>{selectedProduct.title}</strong>. I will get back to you with custom demo options & pricing right away!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitInquiry} className="space-y-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-600 dark:text-[#9da39d] uppercase mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe / Business Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#161a17] border border-slate-200 dark:border-[#252b25] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-[#c7ff4a]"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono text-slate-600 dark:text-[#9da39d] uppercase mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="you@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#161a17] border border-slate-200 dark:border-[#252b25] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-[#c7ff4a]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono text-slate-600 dark:text-[#9da39d] uppercase mb-1">
                              WhatsApp / Phone
                            </label>
                            <input
                              type="tel"
                              placeholder="+91 Mobile number"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#161a17] border border-slate-200 dark:border-[#252b25] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-[#c7ff4a]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-600 dark:text-[#9da39d] uppercase mb-1">
                            Inquiry Message
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#161a17] border border-slate-200 dark:border-[#252b25] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-[#c7ff4a]"
                          />
                        </div>

                        <div className="pt-2 flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => handleWhatsAppInquiry(selectedProduct.title)}
                            className="px-4 py-3 rounded-xl bg-emerald-50 dark:bg-[#161c16] text-emerald-700 dark:text-[#c7ff4a] border border-emerald-200 dark:border-[#253323] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-100 transition-all"
                          >
                            <Smartphone className="w-4 h-4" />
                            <span>WhatsApp</span>
                          </button>

                          <button
                            type="submit"
                            className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 text-white dark:bg-[#c7ff4a] dark:text-[#0a0b0a] font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 dark:hover:bg-[#b5f532] transition-all flex items-center justify-center gap-2 shadow-md"
                          >
                            <Send className="w-4 h-4" />
                            <span>Submit Product Inquiry</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}

              </div>

              {/* Modal Footer Bar */}
              <div className="p-4 bg-slate-50 dark:bg-[#101311] border-t border-slate-200 dark:border-[#202721] flex items-center justify-between text-xs text-slate-500 dark:text-[#889088]">
                <span>Customization & White-label options</span>
                <button
                  onClick={() => handleWhatsAppInquiry(selectedProduct.title)}
                  className="font-bold text-emerald-600 dark:text-[#c7ff4a] hover:underline flex items-center gap-1"
                >
                  <span>Fast WhatsApp Response (&lt; 15 mins)</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
