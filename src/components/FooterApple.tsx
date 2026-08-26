import React from "react";
import { Github, Linkedin, Mail, Phone, Download, Globe } from "lucide-react";

export function FooterApple() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm">
              SR
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Md. Saidur Rahman</h3>
              <p className="text-xs text-slate-500">Full Stack WordPress Developer - Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Responsive Action Pills (Never Breaks Words) */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 text-xs">
            <a
              href="mailto:saidurr1256@gmail.com"
              className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5 font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>saidurr1256@gmail.com</span>
            </a>

            <a
              href="https://wa.me/8801515687002"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>+880 1515-687002</span>
            </a>

            <a
              href="/Md_Saidur_Rahman_resume.pdf"
              download="Md_Saidur_Rahman_resume.pdf"
              className="whitespace-nowrap px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 font-semibold shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Copyright & Social Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Md. Saidur Rahman. All rights reserved.</p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/saidurr1220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>

            <span className="text-slate-300">/</span>

            <a
              href="https://www.linkedin.com/in/rahmansaidur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>

            <span className="text-slate-300">/</span>

            <a
              href="https://saidur-it.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
