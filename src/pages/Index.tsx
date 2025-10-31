import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";

import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // ✅ Default LIGHT theme (Tailwind darkMode: "class")
    const root = document.documentElement;
    const t = localStorage.getItem("theme");
    if (!t) {
      root.classList.remove("dark"); // default light
      localStorage.setItem("theme", "light");
    } else if (t === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
