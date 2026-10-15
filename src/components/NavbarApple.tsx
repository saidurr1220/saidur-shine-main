import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "@/components/motion/Magnetic";

const navLinks = [
  { name: "About", section: "about" },
  { name: "Services", section: "services" },
  { name: "Projects", section: "projects" },
  { name: "Experience", section: "experience" },
  { name: "Reviews", section: "testimonials" },
  { name: "Contact", section: "contact" },
];

export function NavbarApple() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);

      // Hide on fast scroll down past 150px, show on scroll up
      if (currentScrollY > 150 && currentScrollY - lastScrollY > 10) {
        setHidden(true);
      } else if (lastScrollY - currentScrollY > 5 || currentScrollY <= 150) {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with IntersectionObserver and bottom threshold
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = ["about", "services", "projects", "experience", "testimonials", "contact"];
    const observers: IntersectionObserver[] = [];

    const handleBottomCheck = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleBottomCheck, { passive: true });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Only update if not already pinned to contact at bottom of page
            if (window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 60) {
              setActiveSection(id);
            }
          }
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleBottomCheck);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/#${section}`;
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(element, { offset: -70 });
      } else {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-[#0b101b]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 sm:py-3.5 shadow-xl shadow-black/20"
          : "bg-[#0b101b] py-4 sm:py-5 border-b border-white/[0.05]"
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
                if ((window as any).__lenis) {
                  (window as any).__lenis.scrollTo(0);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-white/10 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
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

          {/* Desktop Navigation Links with sliding layoutId active pill */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && !shouldReduceMotion && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              CV
            </a>
          </nav>

          {/* Desktop Primary CTA: Let's Talk button wrapped in Magnetic */}
          <div className="hidden md:flex items-center">
            <Magnetic strength={6}>
              <Button
                size="sm"
                onClick={(e) => handleNavClick(e, "contact")}
                className="rounded-full text-xs font-semibold bg-[#05513a] hover:bg-[#033b2a] text-white border border-[#10b981]/40 shadow-sm h-9 px-5 flex items-center gap-2"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Magnetic>
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

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800 rounded-xl transition-colors"
            >
              CV (PDF)
            </a>

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
