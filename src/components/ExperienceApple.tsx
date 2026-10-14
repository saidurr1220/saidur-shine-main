import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

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

        {/* Clean Timeline List matching design */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {/* Item 1: WordPress Developer */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-950">
                  WordPress Developer
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Building custom WordPress websites, WooCommerce stores, and web solutions for clients and agencies.
                </p>
              </div>
            </div>

            <div className="sm:self-center">
              <span className="text-xs font-semibold text-[#087f5b] bg-[#e8f6f0] border border-[#d1ede1] px-3.5 py-1.5 rounded-full whitespace-nowrap">
                Professional Experience
              </span>
            </div>
          </div>

          {/* Item 2: Education */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-950">
                  B.Sc. in Computer Science &amp; Engineering
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  North South University
                </p>
              </div>
            </div>

            <div className="sm:self-center">
              <span className="text-xs font-semibold text-[#0284c7] bg-[#f0f9ff] border border-[#bae6fd] px-3.5 py-1.5 rounded-full whitespace-nowrap">
                Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
