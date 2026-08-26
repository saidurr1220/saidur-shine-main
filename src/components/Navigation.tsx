import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/", section: "home" },
  { name: "About", path: "/", section: "about" },
  { name: "Skills", path: "/", section: "skills" },
  { name: "Services", path: "/", section: "services" },
  { name: "Projects", path: "/", section: "projects" },
  { name: "Experience", path: "/", section: "experience" },
  { name: "Contact", path: "/", section: "contact" },
];

export function Navigation() {
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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, section?: string) => {
    if (section && location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/85 backdrop-blur-xl border-b border-border/80 shadow-md shadow-black/5 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-12">
          <Link
            to="/"
            className="flex items-center gap-2 group text-foreground hover:text-primary transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center font-mono font-bold text-primary text-sm group-hover:scale-105 transition-transform">
              SR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Md. Saidur Rahman
              </span>
              <span className="text-[10px] font-mono text-muted-foreground -mt-0.5">
                Full Stack WordPress Dev
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-surface/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === "/" && activeSection === link.section;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              size="sm"
              variant="outline"
              asChild
              className="rounded-full text-xs font-mono border-border hover:border-primary/50"
            >
              <a href="/resume.pdf" download>
                <Download className="w-3.5 h-3.5 mr-1 text-primary" />
                CV
              </a>
            </Button>
            <Button
              size="sm"
              className="rounded-full text-xs bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm shadow-primary/20"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Hire Me
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-xl border border-border/60"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl border border-border/90 bg-card/95 backdrop-blur-xl shadow-xl space-y-2">
            <div className="flex items-center gap-2 px-2 py-1.5 mb-2 rounded-lg bg-primary/10 text-[11px] font-mono text-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Client Projects</span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.section)}
                className="block py-2.5 px-3 text-sm font-medium transition-colors hover:text-primary hover:bg-surface rounded-xl text-foreground"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 border-t border-border flex gap-2">
              <Button size="sm" variant="outline" asChild className="flex-1 text-xs">
                <a href="/resume.pdf" download>
                  <Download className="w-3.5 h-3.5 mr-1 text-primary" /> Download CV
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 text-xs bg-primary hover:bg-primary/90"
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
