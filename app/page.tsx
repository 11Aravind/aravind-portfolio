import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0a] text-[#f4f5f2] relative">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
