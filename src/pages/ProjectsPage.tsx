import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto max-w-6xl px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">My Projects</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            A showcase of real-world WordPress and web development projects delivering measurable results
          </p>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
