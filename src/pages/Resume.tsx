import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume / CV</h1>
            <p className="text-muted-foreground mb-6">
              View my complete professional resume below
            </p>
            <Button size="lg" asChild className="gradient-hero">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="/resume.pdf"
              className="w-full h-[80vh] min-h-[600px]"
              title="Resume PDF"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
