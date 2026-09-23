"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoIHelp from "@/components/WhoIHelp";
import Services from "@/components/Services";
import Process from "@/components/Process";
import OnePartner from "@/components/OnePartner";
import Projects from "@/components/Projects";
import ProductsShowcase from "@/components/ProductsShowcase";
import CaseStudy from "@/components/CaseStudy";
import ClientReviews from "@/components/ClientReviews";
import TrustProof from "@/components/TrustProof";
import LeadQualification from "@/components/LeadQualification";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import BotanicalLeaves from "@/components/BotanicalLeaves";
import CinematicLoader from "@/components/CinematicLoader";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      {/* Cinematic film-style page loader */}
      <CinematicLoader />
      
      {/* Ambient cursor glow (desktop only) */}
      <CursorGlow />

      <main className="cinematic-grain min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090a0a] dark:text-[#f4f5f2] relative selection:bg-emerald-500 selection:text-white dark:selection:bg-[#c7ff4a] dark:selection:text-black transition-colors duration-300">
        <Navbar />
        <Hero />
        
        {/* 1. WHAT I CAN BUILD FOR YOU + WHAT ARE YOU LOOKING TO BUILD? */}
        <Services />
        {/* <WhoIHelp /> */}

        {/* 2. PRODUCTS & SOLUTIONS */}
        <ProductsShowcase />

        {/* 3. REAL PRODUCTS. REAL WORK & EXPLORE ADDITIONAL STORES & SITES */}
        <Projects />

        {/* 4. ONE PARTNER. FROM IDEA TO LAUNCH. */}
        <OnePartner />

        {/* 5. FROM IDEA TO LAUNCH (ANIMATED FLOWCHART) */}
        <Process />

        {/* 6. WHAT CLIENTS SAY ABOUT MY WORK */}
        <ClientReviews />
        <TrustProof />

        {/* 7. ABOUT ARAVIND */}
        <About />

        {/* 8. TECHNOLOGY STACK */}
        <TechStack />

        {/* 9. HAVE SOMETHING TO BUILD? / CONTACT & FAQ */}
        <LeadQualification />
        <ContactForm />
        <FAQ />
        <Footer />

        {/* Floating overlays & utilities */}
        <WhatsAppButton />
        <StickyMobileCTA />
        <BotanicalLeaves />
      </main>
    </>
  );
}
