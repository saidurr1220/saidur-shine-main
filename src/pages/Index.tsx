import React, { useEffect } from "react";
import { NavbarApple } from "@/components/NavbarApple";
import { HeroApple } from "@/components/HeroApple";
import { AboutApple } from "@/components/AboutApple";
import { SkillsBento } from "@/components/SkillsBento";
import { ServicesApple } from "@/components/ServicesApple";
import { ProjectsApple } from "@/components/ProjectsApple";
import { TestimonialsApple } from "@/components/TestimonialsApple";
import { ExperienceApple } from "@/components/ExperienceApple";
import { ContactApple } from "@/components/ContactApple";
import { FooterApple } from "@/components/FooterApple";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppChatButton } from "@/components/WhatsAppChatButton";

const Index = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const lenis = (window as any).__lenis;
          if (lenis && typeof lenis.scrollTo === "function") {
            lenis.scrollTo(el, { offset: -70 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] relative selection:bg-emerald-100 selection:text-emerald-900">
      <ScrollProgress />
      <NavbarApple />
      <main>
        <HeroApple />
        <AboutApple />
        <SkillsBento />
        <ServicesApple />
        <ProjectsApple />
        <TestimonialsApple />
        <ExperienceApple />
        <ContactApple />
      </main>
      <FooterApple />
      <WhatsAppChatButton />
    </div>
  );
};

export default Index;
