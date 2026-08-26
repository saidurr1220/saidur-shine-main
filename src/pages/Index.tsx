import React, { useEffect } from "react";
import { NavigationDev } from "@/components/NavigationDev";
import { HeroDev } from "@/components/HeroDev";
import { AboutDev } from "@/components/AboutDev";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ServicesDev } from "@/components/ServicesDev";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ExperienceDev } from "@/components/ExperienceDev";
import { ContactDev } from "@/components/ContactDev";
import { FooterDev } from "@/components/FooterDev";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    // Default dark theme
    const root = document.documentElement;
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-emerald-500/30 selection:text-emerald-300">
      <ScrollProgress />
      <NavigationDev />
      <main>
        <HeroDev />
        <AboutDev />
        <SkillsMatrix />
        <ServicesDev />
        <ProjectsShowcase />
        <ExperienceDev />
        <ContactDev />
      </main>
      <FooterDev />
    </div>
  );
};

export default Index;
