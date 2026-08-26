import React, { useEffect } from "react";
import { NavbarApple } from "@/components/NavbarApple";
import { HeroApple } from "@/components/HeroApple";
import { AboutApple } from "@/components/AboutApple";
import { SkillsBento } from "@/components/SkillsBento";
import { ServicesApple } from "@/components/ServicesApple";
import { ProjectsApple } from "@/components/ProjectsApple";
import { ExperienceApple } from "@/components/ExperienceApple";
import { ContactApple } from "@/components/ContactApple";
import { FooterApple } from "@/components/FooterApple";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
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
        <ExperienceApple />
        <ContactApple />
      </main>
      <FooterApple />
    </div>
  );
};

export default Index;
