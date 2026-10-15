import { NavbarApple } from "@/components/NavbarApple";
import { FooterApple } from "@/components/FooterApple";
import { WhatsAppChatButton } from "@/components/WhatsAppChatButton";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b101b] text-white selection:bg-emerald-500/20 selection:text-emerald-300">
      <ScrollProgress />
      <NavbarApple />
      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground">Resume / Curriculum Vitae</h1>
              <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                Md. Saidur Rahman - Full Stack WordPress Developer with 2+ years of production experience
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 rounded-xl">
                <a href="/resume.pdf" download="Md_Saidur_Rahman_WordPress_Developer_CV.pdf">
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
      <FooterApple />
      <WhatsAppChatButton />
    </div>
  );
};

export default Resume;
