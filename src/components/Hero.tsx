import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ConstellationNetwork from "@/components/ConstellationNetwork";
import Typewriter from "@/components/Typewriter";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[80svh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* ✨ Constellation background */}
      <ConstellationNetwork
        density={0.00018}
        linkDistance={140}
        maxSpeed={0.35}
        nodeRadius={1.4}
        mouseStrength={0.06}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Md. Saidur Rahman
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            <Typewriter
              texts={[
                "WordPress Developer",
                "Next.js & React Enthusiast",
                "Building High-Performance Sites",
              ]}
            />
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            2.5+ years delivering custom WP sites, performance & Core Web
            Vitals, and clean UX
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="gradient-hero text-white hover:opacity-90 transition-opacity"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
