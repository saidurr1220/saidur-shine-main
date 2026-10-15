import React from "react";
import { Github, Mail } from "lucide-react";

function UpworkIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

export function FooterApple() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070b13] text-white pt-12 pb-14 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Row 1: Brand (Left), Page Nav (Center), Socials (Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          {/* Left: Brand Block */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-white flex items-center justify-center font-mono font-bold text-xs shadow-2xs flex-shrink-0">
              SR
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-snug">Md. Saidur Rahman</h3>
              <p className="text-[11px] text-slate-400 whitespace-nowrap">
                Full-Stack WordPress Engineer
              </p>
            </div>
          </div>

          {/* Center: Page Nav on ONE line on desktop, wrapping cleanly on mobile */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              CV
            </a>
          </nav>

          {/* Right: Icon-only Social Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/saidurr1220"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-[#10b981] transition-all"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01fe77731f3b62869f"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-[#10b981] transition-all"
              aria-label="Upwork profile"
              title="Upwork"
            >
              <UpworkIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:saidurr1256@gmail.com"
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-[#10b981] transition-all"
              aria-label="Send email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/[0.08] my-2" />

        {/* Row 2: Copyright & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-slate-500 font-mono">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Md. Saidur Rahman. All rights reserved.
          </p>
          <span className="text-center sm:text-right text-slate-500">
            Dhaka, Bangladesh
          </span>
        </div>

        {/* Big Watermark SAIDUR RAHMAN */}
        <div className="pt-10 text-center select-none pointer-events-none">
          <span className="text-[44px] sm:text-[76px] lg:text-[110px] font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-white/[0.04] uppercase font-mono block leading-none">
            SAIDUR RAHMAN
          </span>
        </div>
      </div>
    </footer>
  );
}
