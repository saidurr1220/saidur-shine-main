import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About as AboutComponent } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-primary">
      <ScrollProgress />
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">
          <AboutComponent />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
