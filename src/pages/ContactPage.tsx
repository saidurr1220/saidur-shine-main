import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto max-w-6xl px-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Let's Work Together</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out and let's discuss how I can help bring your vision to life.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
