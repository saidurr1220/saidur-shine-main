import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-primary">
      <ScrollProgress />
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-28 pb-16">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground">Resume / Curriculum Vitae</h1>
              <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                Md. Saidur Rahman ? Full Stack WordPress Developer with 2+ years of production experience
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 rounded-xl">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Copy
                </a>
              </Button>
            </div>

            <div className="bg-card/90 backdrop-blur-md border border-border rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="/resume.pdf"
                className="w-full h-[85vh] min-h-[650px]"
                title="Resume PDF"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
