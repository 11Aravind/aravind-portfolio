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
  ExternalLink,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
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
    const text = encodeURIComponent(`Hi Aravind, I am interested in seeing a live demo & getting pricing for "${productTitle}". Please share details.`);
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
              Production-ready web apps, mobile systems, and POS software. Click any product to request a live demo & pricing via WhatsApp.
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
                whileHover={{ y: -5, scale: 1.005 }}
                onClick={() => handleWhatsAppInquiry(product.title)}
                className={`group rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-lg cursor-pointer ${isComedy
                  ? "bg-gradient-to-b from-amber-50/60 via-white to-amber-50/30 dark:from-[#1d1912] dark:via-[#14120e] dark:to-[#1d1912] border-amber-300/80 dark:border-amber-500/40 hover:border-amber-400"
                  : "bg-white dark:bg-[#121513] border-slate-200/90 dark:border-[#232823] hover:border-emerald-500/60 dark:hover:border-[#c7ff4a]/60"
                  }`}
              >

                <div>

                  {/* Product Visual Screenshot Window */}
                  <div className="h-[200px] p-2 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#161916] dark:to-[#0d0e0d] flex items-center relative overflow-hidden rounded-xl mb-3.5">
                    <div className="w-full h-full border border-slate-200 dark:border-[#303530] rounded-lg bg-white dark:bg-[#131513] overflow-hidden group-hover:border-slate-300 dark:group-hover:border-[#4a5145] transition-colors shadow-sm relative">

                      {/* Browser Window Bar */}
                      <div className="h-[22px] border-b border-slate-200 dark:border-[#2a2e2a] flex items-center justify-between px-2 bg-slate-50 dark:bg-[#131513] z-10 relative">
                        <div className="flex items-center gap-[4px]">
                          <i className="w-[4.5px] h-[4.5px] rounded-full bg-[#ff5f56] inline-block" />
                          <i className="w-[4.5px] h-[4.5px] rounded-full bg-[#ffbd2e] inline-block" />
                          <i className="w-[4.5px] h-[4.5px] rounded-full bg-[#27c93f] inline-block" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          {product.badge && (
                            <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-[#1b2b1b] dark:text-[#c7ff4a] border border-emerald-200/80 dark:border-[#2a402a] uppercase tracking-wider shadow-xs">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Product Screenshot Image */}
                      <div className="h-[calc(100%-22px)] w-full relative overflow-hidden bg-slate-100 dark:bg-[#0e100e]">
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
                  <h3 className={`text-base sm:text-lg font-bold mb-1.5 leading-snug transition-colors ${isComedy
                    ? "text-amber-950 dark:text-amber-100 group-hover:text-amber-600 dark:group-hover:text-amber-300"
                    : "text-slate-900 dark:text-[#f4f5f2] group-hover:text-emerald-600 dark:group-hover:text-[#c7ff4a]"
                    }`}>
                    {product.title}
                  </h3>

                  {/* Concise 2-line Description */}
                  <p className="text-slate-600 dark:text-[#9da39d] text-xs leading-relaxed mb-3.5 line-clamp-2">
                    {product.description}
                  </p>


                </div>

                {/* Single Sleek Action Button: Request for Demo */}
                <div className="pt-3 border-t border-slate-100 dark:border-[#1e231f]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppInquiry(product.title);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm group/btn ${isComedy
                      ? "bg-amber-500 hover:bg-amber-600 text-amber-950 dark:bg-amber-400 dark:hover:bg-amber-300 shadow-amber-500/20"
                      : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-[#c7ff4a] dark:text-[#0a0b0a] dark:hover:bg-[#b5f532]"
                      }`}
                  >
                    <span>Request for Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* COMPREHENSIVE INTERACTIVE DEMO & DETAILS MODAL (DISABLED - DIRECT WHATSAPP REDIRECT ACTIVE) */}
      {/* 
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg">
            ...
          </div>
        )}
      </AnimatePresence>
      */}

    </section>
  );
}
