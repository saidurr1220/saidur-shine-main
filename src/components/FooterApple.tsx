import React from "react";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

export function FooterApple() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs">
              SR
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Md. Saidur Rahman</h3>
              <p className="text-xs text-slate-500">Full Stack WordPress Developer • Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="mailto:saidurr1256@gmail.com" className="hover:text-slate-900">
              saidurr1256@gmail.com
            </a>
            <span>•</span>
            <a href="https://wa.me/8801515687002" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 font-mono">
              +880 1515-687002
            </a>
            <span>•</span>
            <a
              href="/Md_Saidur_Rahman_resume.pdf"
              download="Md_Saidur_Rahman_resume.pdf"
              className="font-semibold text-emerald-700 hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> Updated CV
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Md. Saidur Rahman. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="https://github.com/saidurr1220" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rahmansaidur" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">
              LinkedIn
            </a>
            <a href="https://saidur-it.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
