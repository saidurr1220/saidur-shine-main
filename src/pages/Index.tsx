import React, { useEffect } from "react";
import { Navigation3D } from "@/components/Navigation3D";
import { Hero3D } from "@/components/Hero3D";
import { ProjectGrid3D } from "@/components/ProjectGrid3D";
import { About3DSection } from "@/components/About3DSection";
import { Resources3D } from "@/components/Resources3D";
import { Contact3D } from "@/components/Contact3D";
import { Footer3D } from "@/components/Footer3D";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    // Enforce dark OLED studio theme
    const root = document.documentElement;
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-foreground relative selection:bg-primary/30 selection:text-primary">
      <ScrollProgress />
      <Navigation3D />
      <main>
        <Hero3D />
        <ProjectGrid3D />
        <About3DSection />
        <Resources3D />
        <Contact3D />
      </main>
      <Footer3D />
    </div>
  );
};

export default Index;
