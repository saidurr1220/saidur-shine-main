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
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#10b981] uppercase block mb-3">
                Curriculum Vitae
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white tracking-tight">Resume / Curriculum Vitae</h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
                Md. Saidur Rahman - Full Stack WordPress Developer with 2+ years of production experience
              </p>
              <Button size="lg" asChild className="rounded-xl bg-[#087f5b] hover:bg-[#066347] text-white font-semibold text-sm h-11 px-6 shadow-lg shadow-emerald-950/40 transition-all duration-200">
                <a href="/resume.pdf" download="Md_Saidur_Rahman_WordPress_Developer_CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF Copy
                </a>
              </Button>
            </div>

            <div className="bg-[#0f1724] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
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
