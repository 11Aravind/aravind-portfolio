"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoIHelp from "@/components/WhoIHelp";
import Services from "@/components/Services";
import Process from "@/components/Process";
import OnePartner from "@/components/OnePartner";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import TrustProof from "@/components/TrustProof";
import LeadQualification from "@/components/LeadQualification";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090a0a] dark:text-[#f4f5f2] relative selection:bg-emerald-500 selection:text-white dark:selection:bg-[#c7ff4a] dark:selection:text-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <WhoIHelp />
      <Process />
      <OnePartner />
      <Projects />
      <CaseStudy />
      <TrustProof />
      <LeadQualification />
      <ContactForm />
      <About />
      <TechStack />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </main>
  );
}
