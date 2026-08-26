import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Services", section: "services" },
  { name: "Projects", section: "projects" },
  { name: "Experience", section: "experience" },
  { name: "Contact", section: "contact" },
];

export function NavbarFresh() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = ["contact", "experience", "projects", "services", "skills", "about", "home"];
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 220) {
              setActiveSection(sec);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/#home" onClick={(e) => handleNavClick(e, "home")} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center font-mono font-extrabold text-emerald-600 text-sm group-hover:scale-105 transition-transform">
              SR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                Md. Saidur Rahman
              </span>
              <span className="text-[11px] font-mono text-slate-500 -mt-0.5">
                Full Stack WordPress Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;

              return (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-600 text-white font-semibold shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="rounded-full text-xs font-mono border-slate-200 hover:border-emerald-500/50 bg-white text-slate-700 hover:text-emerald-700 h-9 px-4 shadow-sm"
            >
              <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                <Download className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                Download CV
              </a>
            </Button>

            <Button
              size="sm"
              onClick={(e) => handleNavClick(e, "contact")}
              className="rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 h-9 px-5"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-slate-200 text-slate-700 bg-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-2">
            <div className="flex items-center gap-2 px-3 py-1.5 mb-2 rounded-xl bg-emerald-50 text-[11px] font-mono text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Client Projects</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link.section)}
                className="block py-2.5 px-3.5 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <Button size="sm" variant="outline" asChild className="flex-1 text-xs font-mono border-slate-200 text-slate-700">
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="w-3.5 h-3.5 mr-1 text-emerald-600" /> CV (PDF)
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
