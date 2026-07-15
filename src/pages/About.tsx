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
        <section className="py-12 sm:py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Full Stack WordPress Developer with 2+ years building custom,
              production-grade WordPress platforms and WooCommerce systems
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
        <section className="py-12 sm:py-16 px-4 bg-surface">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-4 sm:p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Hi! I'm Saidur, a Full Stack WordPress Developer based in
                  Dhaka, Bangladesh. Over the past 2+ years, I've specialized
                  in building custom, production-grade WordPress platforms
                  &mdash; from custom plugin architecture and WooCommerce
                  engineering to membership systems and booking platforms.
                </p>
                <p>
                  My journey started during my Computer Science studies at North
                  South University. What began as learning HTML and CSS evolved
                  into mastering WordPress development with PHP, MySQL, and
                  JavaScript. I've delivered production platforms for clients
                  across the US, UK, and Germany, owning projects end-to-end
                  from architecture through deployment.
                </p>
                <p>
                  I specialize in custom plugin architecture built on OOP
                  principles, WooCommerce customization without touching core,
                  and third-party integrations &mdash; Stripe payments, CRM
                  systems like Bitrix24 and Zoho, Google Maps, and SMTP email
                  automation. My WordPress expertise spans custom theme
                  development, Elementor Pro, and membership/LMS platforms.
                </p>
                <p>
                  I also have experience working with AI tools and LLMs for code
                  generation, debugging, and project development. I've
                  collaborated with AI assistants like Claude, GitHub Copilot,
                  and Cursor to accelerate development workflows and improve
                  code quality. When I'm not coding, I'm exploring new
                  WordPress ecosystem tools and staying updated with the
                  latest developments in web development and AI-assisted
                  programming.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  Core Strengths
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Custom WordPress Plugin Development",
                    "WooCommerce Customization",
                    "PHP (OOP) & MySQL",
                    "Membership & Booking Systems",
                    "Payment Integration (Stripe)",
                    "cPanel & Domain Management",
                    "Performance & SEO Optimization",
                    "AI-Assisted Development",
                  ].map((strength) => (
                    <li
                      key={strength}
                      className="flex items-center text-sm sm:text-base"
                    >
                      <span className="text-primary mr-2 flex-shrink-0">✓</span>
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
