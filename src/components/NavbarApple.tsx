import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", section: "about" },
  { name: "Services", section: "services" },
  { name: "Projects", section: "projects" },
  { name: "Reviews", section: "testimonials" },
  { name: "Experience", section: "experience" },
  { name: "Contact", section: "contact" },
];

export function NavbarApple() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = ["contact", "experience", "testimonials", "projects", "services", "about"];
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
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
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-xs"
          : "bg-white/50 backdrop-blur-md border-b border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Title */}
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
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-600 transition-colors shadow-sm">
                SR
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                Md. Saidur Rahman
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-1">
                Full-Stack &amp; WordPress Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;

              return (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 font-semibold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="rounded-full text-xs font-medium border-slate-200/90 hover:bg-slate-50 text-slate-700 h-9 px-4 shadow-2xs"
            >
              <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                <Download className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                Resume PDF
              </a>
            </Button>

            <Button
              size="sm"
              onClick={(e) => handleNavClick(e, "contact")}
              className="rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-xs h-9 px-4"
            >
              <span>Get in Touch</span>
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link.section)}
                className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex-1 text-xs font-medium border-slate-200 text-slate-700 rounded-full h-9"
              >
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Resume
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-full h-9"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
