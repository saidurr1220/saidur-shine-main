import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Play, Menu, X, Box, ExternalLink, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShowreelModal } from "./ShowreelModal";

export function Navigation3D() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", path: "/#projects" },
    { name: "About & Rig", path: "/#about" },
    { name: "Free Assets", path: "/#resources" },
    { name: "Commissions", path: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/90 backdrop-blur-xl border-b border-border/80 py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-cyan-500 flex items-center justify-center font-mono font-black text-gray-950 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                3D
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Md. Saidur Rahman
                </span>
                <span className="text-[10px] font-mono text-muted-foreground -mt-0.5">
                  3D Artist & Animator
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-gray-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-border/80 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-gray-800/60 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsShowreelOpen(true)}
                className="rounded-full text-xs font-mono border-primary/40 text-primary hover:bg-primary/10 h-9 px-4 flex items-center gap-1.5"
              >
                <Play className="w-3 h-3 fill-current" />
                Showreel
              </Button>

              <a
                href="https://www.artstation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono px-3.5 py-2 rounded-full bg-gray-900 border border-border/80 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all flex items-center gap-1"
              >
                ArtStation <ExternalLink className="w-3 h-3" />
              </a>

              <Button
                size="sm"
                asChild
                className="rounded-full text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm shadow-primary/20 h-9 px-4"
              >
                <a href="/#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsShowreelOpen(true)}
                className="rounded-full text-xs font-mono border-primary/40 text-primary h-8 px-3"
              >
                <Play className="w-3 h-3 fill-current mr-1" /> Reel
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-xl border border-border/60"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden mt-3 p-4 rounded-3xl bg-gray-950/95 border border-border/90 backdrop-blur-2xl shadow-2xl space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-3.5 text-sm font-medium text-foreground hover:text-primary hover:bg-gray-900 rounded-2xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-border flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false);
                    setIsShowreelOpen(true);
                  }}
                  className="flex-1 text-xs font-mono border-primary/40 text-primary"
                >
                  <Play className="w-3.5 h-3.5 mr-1 fill-current" /> Play Reel
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="flex-1 text-xs bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="/#contact" onClick={() => setIsOpen(false)}>
                    Commission
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Showreel Modal */}
      <ShowreelModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />
    </>
  );
}
