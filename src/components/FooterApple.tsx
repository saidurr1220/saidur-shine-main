import React, { useRef, useState, useEffect } from "react";
import { Github, Mail, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

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
  const footerRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [dhakaTime, setDhakaTime] = useState("");

  // Live local time in Dhaka, Bangladesh (Asia/Dhaka)
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setDhakaTime(formatter.format(new Date()));
      } catch {
        setDhakaTime("");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText("saidurr1256@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } else {
      window.location.href = "mailto:saidurr1256@gmail.com";
    }
  };

  const handleScrollToTop = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const saidurLetters = "SAIDUR".split("");
  const rahmanLetters = "RAHMAN".split("");
  const fullWatermark = "SAIDUR RAHMAN".split("");

  return (
    <footer
      ref={footerRef}
      data-dark="true"
      className="bg-[#070b13] text-white pt-12 pb-6 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Row 1: Brand (Left), Page Nav (Center), Socials (Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          {/* Left: Brand Block */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-white flex items-center justify-center font-mono font-bold text-xs shadow-2xs flex-shrink-0 transition-transform duration-200 hover:scale-105">
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

          {/* Right: Icon-only Social Buttons with Tooltips + Copy Email */}
          <div className="flex items-center gap-2.5">
            {/* GitHub */}
            <div className="relative group">
              <a
                href="https://github.com/saidurr1220"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#10b981]/40 flex items-center justify-center text-slate-400 hover:text-[#10b981] hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 border border-white/10 text-[10px] text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md z-30">
                GitHub
              </div>
            </div>

            {/* Upwork */}
            <div className="relative group">
              <a
                href="https://www.upwork.com/freelancers/~01fe77731f3b62869f"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#10b981]/40 flex items-center justify-center text-slate-400 hover:text-[#10b981] hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Upwork profile"
              >
                <UpworkIcon className="w-3.5 h-3.5" />
              </a>
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 border border-white/10 text-[10px] text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md z-30">
                Upwork profile
              </div>
            </div>

            {/* Email with 1-click copy */}
            <div className="relative group">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#10b981]/40 flex items-center justify-center text-slate-400 hover:text-[#10b981] hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                aria-label="Copy email address saidurr1256@gmail.com"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Mail className="w-4 h-4" />
                )}
              </button>
              <div
                className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 border text-[10px] rounded-md transition-opacity whitespace-nowrap shadow-md z-30 ${
                  copied
                    ? "opacity-100 border-emerald-500/50 text-emerald-300"
                    : "opacity-0 group-hover:opacity-100 border-white/10 text-white"
                }`}
              >
                {copied ? "Copied!" : "Email me"}
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/[0.08] my-2" />

        {/* Row 2: Copyright, Availability, Dhaka Time & Back to Top */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 font-mono">
          <p className="text-center lg:text-left">
            &copy; {currentYear} Md. Saidur Rahman. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3 text-slate-400 text-xs">
            {/* Pulsing Availability */}
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span
                className={`w-2 h-2 rounded-full bg-emerald-400 ${
                  !shouldReduce ? "animate-pulse" : ""
                }`}
              />
              <span className="font-medium text-slate-300">Available for agency roles</span>
            </span>

            <span className="hidden md:inline text-slate-600">·</span>

            {/* Dhaka Live Time */}
            <span className="text-slate-400">
              Dhaka, Bangladesh <span className="hidden md:inline">·</span>{" "}
              <span className="text-slate-300 font-mono">
                {dhakaTime || "Live"}
              </span>
            </span>

            <span className="hidden md:inline text-slate-600">·</span>

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1 group whitespace-nowrap cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                ↑
              </span>
            </button>
          </div>
        </div>

        {/* Big Watermark: Fluid and completely fit, never clipped */}
        {/* Desktop Single Line (sm+) */}
        <div className="hidden sm:block pt-8 pb-1 text-center select-none pointer-events-none overflow-hidden max-w-full">
          <div
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 7.5rem)" }}
            className="inline-flex justify-center font-extrabold tracking-[0.1em] text-white/[0.04] uppercase font-mono leading-none whitespace-nowrap"
          >
            {fullWatermark.map((char, cIdx) => (
              <motion.span
                key={cIdx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: cIdx * 0.02,
                  ease: appleEase,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Mobile 2-Line Stack (< sm) */}
        <div className="sm:hidden pt-6 pb-1 text-center select-none pointer-events-none overflow-hidden space-y-1">
          {/* SAIDUR */}
          <div
            style={{ fontSize: "clamp(2.25rem, 13vw, 3.5rem)" }}
            className="flex justify-center font-extrabold tracking-[0.12em] text-white/[0.04] uppercase font-mono leading-none"
          >
            {saidurLetters.map((char, cIdx) => (
              <motion.span
                key={`s-${cIdx}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: cIdx * 0.02,
                  ease: appleEase,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* RAHMAN */}
          <div
            style={{ fontSize: "clamp(2.25rem, 13vw, 3.5rem)" }}
            className="flex justify-center font-extrabold tracking-[0.12em] text-white/[0.04] uppercase font-mono leading-none"
          >
            {rahmanLetters.map((char, cIdx) => (
              <motion.span
                key={`r-${cIdx}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: 0.12 + cIdx * 0.02,
                  ease: appleEase,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
