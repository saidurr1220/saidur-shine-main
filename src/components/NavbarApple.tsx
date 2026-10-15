import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", section: "about" },
  { name: "Services", section: "services" },
  { name: "Projects", section: "projects" },
  { name: "Reviews", section: "testimonials" },
  { name: "Contact", section: "contact" },
];

export function NavbarApple() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/#${section}`;
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b101b]/90 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-lg"
          : "bg-[#0b101b] py-5 border-b border-white/[0.05]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo Brand: Rounded square SR + Name & Subtitle */}
          <a
            href="/#home"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-sm">
              SR
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight leading-none truncate">
                Md. Saidur Rahman
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-1 truncate">
                Full-Stack WordPress Engineer
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link.section)}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA: Let's Talk button */}
          <div className="hidden md:flex items-center">
            <Button
              size="sm"
              onClick={(e) => handleNavClick(e, "contact")}
              className="rounded-full text-xs font-semibold bg-[#05513a] hover:bg-[#033b2a] text-white border border-[#10b981]/40 shadow-sm h-9 px-5 flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-white/10 text-slate-200 bg-slate-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-3xl bg-[#0f172a] border border-white/10 shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link.section)}
                className="block py-2 px-3 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <Button
                size="sm"
                className="w-full text-xs font-semibold bg-[#05513a] hover:bg-[#033b2a] text-white rounded-full h-10 flex items-center justify-center gap-2"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>

              <a
                href="https://wa.me/8801515687002?text=Hi%20Saidur,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-xs font-semibold bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 rounded-full h-10 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
