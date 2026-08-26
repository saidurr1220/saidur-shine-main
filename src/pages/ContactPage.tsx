import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useEffect } from "react";

const ContactPage = () => {
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
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
