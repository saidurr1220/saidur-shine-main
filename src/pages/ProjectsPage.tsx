import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-primary">
      <ScrollProgress />
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16">
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
