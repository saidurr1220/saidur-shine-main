import React, { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

export function ExperienceApple() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100 relative overflow-hidden"
    >
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

        {/* Timeline Container with self-drawing line on desktop */}
        <div className="relative max-w-5xl mx-auto pl-0 md:pl-12">
          {/* Vertical self-drawing timeline line mathematically centered on dots */}
          <div className="hidden md:block absolute left-[22px] -translate-x-1/2 top-[47px] bottom-[47px] w-[2px] bg-slate-200">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-[#10b981] via-[#087f5b] to-[#05513a]"
            />
          </div>

          <div className="space-y-6">
            {/* Item 1: FB International BD */}
            <div className="relative">
              {/* Timeline popping dot on line */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="hidden md:flex absolute -left-[36px] top-[37px] w-5 h-5 rounded-full bg-white border-2 border-[#10b981] items-center justify-center shadow-xs z-10"
              >
                <div className="w-2 h-2 rounded-full bg-[#10b981]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: appleEase }}
                className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                    <Briefcase className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-slate-950">
                        WordPress Developer
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">
                        at FB International BD
                      </span>
                    </div>

                    <ul className="pt-1.5 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                        <span>Deliver 10 to 15 client projects a month for the agency's international clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                        <span>Build custom plugins (OOP), WooCommerce platforms, dynamic pricing engines, Stripe webhooks and REST API integrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                        <span>Delivered a $7,000 milestone project for an agency client: a real-time Bybit to Bitget trade mirroring engine (Node.js, TypeScript, PostgreSQL)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sm:self-start flex-shrink-0">
                  <span className="text-xs font-mono font-semibold text-[#087f5b] bg-[#e8f6f0] border border-[#d1ede1] px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
                    Jan 2026 - Present
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Item 2: Freelance Developer, Upwork */}
            <div className="relative">
              {/* Timeline popping dot on line */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="hidden md:flex absolute -left-[36px] top-[37px] w-5 h-5 rounded-full bg-white border-2 border-[#0284c7] items-center justify-center shadow-xs z-10"
              >
                <div className="w-2 h-2 rounded-full bg-[#0284c7]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1, ease: appleEase }}
                className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 hover:shadow-xs transition-all"
              >
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
                        at Upwork
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
                        <span>WordPress security work, including malware removal for an agency that manages 200+ client sites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-2" />
                        <span>WordPress builds, bug fixes, site migrations and backup restores for international clients</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sm:self-start flex-shrink-0">
                  <span className="text-xs font-mono font-semibold text-[#0284c7] bg-[#f0f9ff] border border-[#bae6fd] px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
                    2018 - Present
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Item 3: North South University */}
            <div className="relative">
              {/* Timeline popping dot on line */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="hidden md:flex absolute -left-[36px] top-[37px] w-5 h-5 rounded-full bg-white border-2 border-purple-500 items-center justify-center shadow-xs z-10"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2, ease: appleEase }}
                className="p-5 sm:p-6 rounded-2xl bg-[#fbfbfd] border border-slate-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 hover:shadow-xs transition-all"
              >
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
                  </div>
                </div>

                <div className="sm:self-start flex-shrink-0">
                  <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
                    2021
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
