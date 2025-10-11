import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set light theme by default
    const root = window.document.documentElement;
    if (!localStorage.getItem("theme")) {
      root.classList.add("light");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
