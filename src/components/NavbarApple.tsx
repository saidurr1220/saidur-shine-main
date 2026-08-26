import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Services", section: "services" },
  { name: "Case Studies", section: "projects" },
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
        const sections = ["contact", "experience", "projects", "services", "skills", "about"];
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
          ? "bg-white/80 backdrop-blur-2xl border-b border-black/[0.06] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-600 transition-colors shadow-sm">
              SR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-900">
                Md. Saidur Rahman
              </span>
              <span className="text-[11px] text-slate-500 font-normal -mt-0.5">
                Full Stack WordPress Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-black/[0.03] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/[0.04]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;

              return (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 font-semibold shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="rounded-full text-xs font-medium border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 h-9 px-4 shadow-sm"
            >
              <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                <Download className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                Resume PDF
              </a>
            </Button>

            <Button
              size="sm"
              onClick={(e) => handleNavClick(e, "contact")}
              className="rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-sm h-9 px-5"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-2xl border border-black/[0.06] text-slate-700 bg-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-3xl bg-white border border-black/[0.08] shadow-2xl space-y-2">
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
              <Button size="sm" variant="outline" asChild className="flex-1 text-xs font-medium border-slate-200 text-slate-700 rounded-full">
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Resume PDF
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-full"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
