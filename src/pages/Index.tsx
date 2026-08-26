import React, { useEffect } from "react";
import { NavbarFresh } from "@/components/NavbarFresh";
import { HeroFresh } from "@/components/HeroFresh";
import { AboutFresh } from "@/components/AboutFresh";
import { SkillsFresh } from "@/components/SkillsFresh";
import { ServicesFresh } from "@/components/ServicesFresh";
import { ProjectsFresh } from "@/components/ProjectsFresh";
import { ExperienceFresh } from "@/components/ExperienceFresh";
import { ContactFresh } from "@/components/ContactFresh";
import { FooterFresh } from "@/components/FooterFresh";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    // Remove dark class to ensure fresh, clean, high-contrast light mode
    const root = document.documentElement;
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-emerald-100 selection:text-emerald-900">
      <ScrollProgress />
      <NavbarFresh />
      <main>
        <HeroFresh />
        <AboutFresh />
        <SkillsFresh />
        <ServicesFresh />
        <ProjectsFresh />
        <ExperienceFresh />
        <ContactFresh />
      </main>
      <FooterFresh />
    </div>
  );
};

export default Index;
