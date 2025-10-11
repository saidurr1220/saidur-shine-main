import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Passionate WordPress developer with a focus on performance, SEO, and clean user experiences
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild className="gradient-hero">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Full CV
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 px-4 bg-surface">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi! I'm Saidur, a WordPress developer based in Dhaka, Bangladesh. Over the past 2.5 years, I've had the privilege of working with clients from the UK and Germany, helping them build and optimize their digital presence.
                </p>
                <p>
                  My journey into web development started during my Computer Science studies at North South University. What began as curiosity about how websites work quickly evolved into a passion for creating fast, accessible, and SEO-friendly web experiences.
                </p>
                <p>
                  I specialize in WordPress development, but I'm equally comfortable working with modern frameworks like React and Next.js. My approach combines technical expertise with a deep understanding of business goals — because great websites aren't just about code, they're about delivering results.
                </p>
                <p>
                  When I'm not coding, I'm learning new technologies, contributing to open-source projects, or helping fellow developers in online communities.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Core Strengths</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Custom WordPress Development",
                    "Performance Optimization",
                    "Technical SEO & Core Web Vitals",
                    "Responsive Design",
                    "Client Communication",
                    "Problem Solving",
                    "Clean Code Practices",
                    "Continuous Learning",
                  ].map((strength) => (
                    <li key={strength} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </section>

        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default About;
