import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Md. Saidur Rahman
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            WordPress Developer focused on fast, SEO-friendly sites — also building with Next.js/React
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            2.5+ years delivering custom WP sites, performance & Core Web Vitals, and clean UX
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
              <Button
                size="lg"
                variant="outline"
                asChild
              >
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
