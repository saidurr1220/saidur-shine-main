import React from "react";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

export function FooterFresh() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/saidurr1220", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rahmansaidur", label: "LinkedIn" },
    { icon: Mail, href: "mailto:saidurr1256@gmail.com", label: "Email" },
    { icon: Phone, href: "https://wa.me/8801515687002", label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono font-bold text-emerald-700 text-sm">
                SR
              </div>
              <h3 className="text-lg font-bold text-slate-900">Md. Saidur Rahman</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Full Stack WordPress Developer with 2+ years building custom plugin architectures, complex WooCommerce platforms, dynamic distance pricing engines, and GTM/GA4 conversion deduplication.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Delivered 11 projects last month • 10 rated 5★</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-700 mb-4 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Services", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-bold">
              Core Capabilities & Resume
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Custom Plugin Development (OOP) • WooCommerce Hooks & Filters • Distance Matrix Pricing • Stripe Webhooks • Paid Memberships Pro • Tutor LMS • GTM/GA4 Conversion Deduplication • Core Web Vitals
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-emerald-600 hover:text-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-200 shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <a
                href="/Md_Saidur_Rahman_resume.pdf"
                download="Md_Saidur_Rahman_resume.pdf"
                className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                Updated CV
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Md. Saidur Rahman. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <span>Dhaka, Bangladesh</span>
            <span>•</span>
            <a href="mailto:saidurr1256@gmail.com" className="text-emerald-700 hover:underline">
              saidurr1256@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
