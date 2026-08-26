import React, { useEffect } from "react";
import { NavbarUnique } from "@/components/NavbarUnique";
import { HeroUnique } from "@/components/HeroUnique";
import { AboutUnique } from "@/components/AboutUnique";
import { SkillsRadar } from "@/components/SkillsRadar";
import { ServicesUnique } from "@/components/ServicesUnique";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { ExperienceUnique } from "@/components/ExperienceUnique";
import { ContactUnique } from "@/components/ContactUnique";
import { FooterUnique } from "@/components/FooterUnique";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#060813] text-slate-100 relative selection:bg-emerald-500/30 selection:text-emerald-300">
      <ScrollProgress />
      <NavbarUnique />
      <main>
        <HeroUnique />
        <AboutUnique />
        <SkillsRadar />
        <ServicesUnique />
        <ProjectCarousel />
        <ExperienceUnique />
        <ContactUnique />
      </main>
      <FooterUnique />
    </div>
  );
};

export default Index;
