import React from "react";

export function FooterApple() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070b13] text-white pt-12 pb-16 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/[0.08]">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-white flex items-center justify-center font-mono font-bold text-xs">
              SR
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Md. Saidur Rahman</h3>
              <p className="text-[11px] text-slate-400">Full-Stack WordPress Engineer</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="https://wa.me/8801515687002?text=Hi%20Saidur,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#25D366]/80 font-medium transition-colors"
            >
              WhatsApp
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-slate-500 font-mono">
            &copy; {currentYear} Md. Saidur Rahman. All rights reserved.
          </p>
        </div>

        {/* Big Watermark SAIDUR RAHMAN matching design */}
        <div className="pt-10 text-center select-none pointer-events-none">
          <span className="text-[44px] sm:text-[76px] lg:text-[110px] font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-white/[0.04] uppercase font-mono block leading-none">
            SAIDUR RAHMAN
          </span>
        </div>
      </div>
    </footer>
  );
}
