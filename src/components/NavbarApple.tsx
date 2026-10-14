import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Projects", section: "projects" },
  { name: "Services", section: "services" },
  { name: "About", section: "about" },
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
          ? "bg-[#fbfbfd]/90 backdrop-blur-md border-b border-black/[0.04] py-3.5 shadow-2xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo Brand: Rounded square SR with emerald dot + Bold Name */}
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
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-sm">
                SR
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981] border-2 border-white"></span>
              </span>
            </div>
            <span className="text-base font-bold text-slate-900 tracking-tight">
              Md. Saidur Rahman
            </span>
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link.section)}
                className="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
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
              className="rounded-full text-xs font-semibold bg-[#05513a] hover:bg-[#033b2a] text-white shadow-xs h-10 px-5 flex items-center gap-2"
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

            <div className="pt-2 border-t border-slate-100">
              <Button
                size="sm"
                className="w-full text-xs font-semibold bg-[#05513a] hover:bg-[#033b2a] text-white rounded-full h-10 flex items-center justify-center gap-2"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
