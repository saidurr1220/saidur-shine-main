import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceApple() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left Title */}
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block mb-1">
              EXPERIENCE &amp; EDUCATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Experience meets engineering.
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-md md:text-right leading-relaxed">
            A blend of professional experience and formal education that shapes how I build, solve, and collaborate.
          </p>
        </div>

        {/* Clean Timeline List */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {/* Item 1: FB International BD */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                <Briefcase className="w-5 h-5 text-slate-700" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-slate-950">
                    WordPress Developer
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    at FB International BD
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Building custom plugins (OOP), WooCommerce platforms, dynamic pricing engines, Stripe webhooks, REST APIs. Delivering 10-15 client projects a month.
                </p>
              </div>
            </div>

            <div className="sm:self-start flex-shrink-0">
              <span className="text-xs font-mono font-semibold text-[#087f5b] bg-[#e8f6f0] border border-[#d1ede1] px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
                Jan 2026 - Present
              </span>
            </div>
          </div>

          {/* Item 2: Freelance Developer, Upwork & Fiverr */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                <Briefcase className="w-5 h-5 text-slate-700" />
              </div>
              <div className="space-y-1 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-slate-950">
                    Freelance Developer
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    at Upwork &amp; Fiverr
                  </span>
                  <span className="text-xs text-slate-400 font-mono">• Remote</span>
                </div>

                <ul className="pt-1.5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                    <span>100% Job Success and 5.0 rating on Upwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                    <span>Delivered a $7,000 milestone contract on Fiverr: a real-time Bybit to Bitget trade mirroring engine (Node.js, TypeScript, PostgreSQL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                    <span>WordPress security work, including malware removal for an agency that manages 200+ client sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                    <span>Custom WordPress and WooCommerce builds, bug fixes and migrations for US, UK and European clients</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sm:self-start flex-shrink-0">
              <span className="text-xs font-mono font-semibold text-[#0284c7] bg-[#f0f9ff] border border-[#bae6fd] px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
                2018 - Present
              </span>
            </div>
          </div>

          {/* Item 3: North South University */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                <GraduationCap className="w-5 h-5 text-slate-700" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-slate-950">
                    B.Sc. in Computer Science &amp; Engineering
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    at North South University
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Focus on software engineering, database systems, object-oriented programming, and computer architecture.
                </p>
              </div>
            </div>

            <div className="sm:self-start flex-shrink-0">
              <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
                2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
