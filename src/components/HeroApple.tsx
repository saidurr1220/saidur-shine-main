import React from "react";
import {
  ArrowRight,
  Star,
  Briefcase,
  Layers,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroApple() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 bg-[#0b101b] text-white"
    >
      {/* Background ambient radial neon emerald glow - constrained overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill: Available for client builds & agency roles */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0e2a22] border border-[#10b981]/30 rounded-full text-xs text-[#34d399] font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>Available for client builds &amp; agency roles</span>
            </div>

            {/* Small Name Intro */}
            <p className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
              MD. SAIDUR RAHMAN
            </p>

            {/* Main Punchy Dual-Tone Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.1]">
                Engineering websites.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#10b981] leading-[1.1]">
                Building reliable systems.
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-semibold text-slate-200 tracking-tight">
              Full-Stack WordPress Engineer &amp; System Architect
            </p>

            {/* Bio Paragraph */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-xl">
              I help businesses and agencies plan, build, and scale high-performing websites and custom systems. From WordPress and WooCommerce to bespoke web applications, I focus on clean architecture, reliable performance, and long-term support.
            </p>

            {/* CTAs matching design */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-[#10b981] hover:bg-[#059669] text-slate-950 font-bold px-6 rounded-full shadow-md transition-all h-11 text-xs"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="rounded-full text-slate-200 hover:text-white border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 h-11 px-6 text-xs font-semibold"
              >
                <span>Let's Talk</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Custom Perspective Analytics Dashboard Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Perspective Dashboard Frame */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#111927]/95 border border-white/10 shadow-2xl p-4 sm:p-6 backdrop-blur-md relative">
              {/* Window Top Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#05513a] text-[#34d399] flex items-center justify-center font-bold text-xs font-mono">
                    SR
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">Overview</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  <span>Last 30 days</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </div>
              </div>

              {/* 3 Metrics Cards Row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] text-slate-400 font-medium">Total Revenue</div>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">$12,458</div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 15%</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] text-slate-400 font-medium">Orders</div>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">284</div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 8%</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] text-slate-400 font-medium">Conversion Rate</div>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">3.5%</div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 1.2%</div>
                </div>
              </div>

              {/* Recent Orders Table */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-300 mb-2">Recent Orders</div>
                
                <div className="space-y-1.5 text-[11px] font-mono">
                  {/* Row 1 */}
                  <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                    <span className="col-span-1 text-slate-500">#001</span>
                    <span className="col-span-3 text-white font-sans font-medium truncate">Glen Johnson</span>
                    <span className="col-span-4 text-slate-400 truncate">Custom Website</span>
                    <span className="col-span-2 text-center text-emerald-400 text-[10px] bg-emerald-950/60 border border-emerald-500/30 rounded py-0.5">Completed</span>
                    <span className="col-span-2 text-right font-bold text-white">$1,200</span>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                    <span className="col-span-1 text-slate-500">#002</span>
                    <span className="col-span-3 text-white font-sans font-medium truncate">Christina Mayer</span>
                    <span className="col-span-4 text-slate-400 truncate">WooCommerce Store</span>
                    <span className="col-span-2 text-center text-sky-400 text-[10px] bg-sky-950/60 border border-sky-500/30 rounded py-0.5">Processing</span>
                    <span className="col-span-2 text-right font-bold text-white">$900</span>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                    <span className="col-span-1 text-slate-500">#003</span>
                    <span className="col-span-3 text-white font-sans font-medium truncate">Michael Liu</span>
                    <span className="col-span-4 text-slate-400 truncate">Plugin Development</span>
                    <span className="col-span-2 text-center text-emerald-400 text-[10px] bg-emerald-950/60 border border-emerald-500/30 rounded py-0.5">Completed</span>
                    <span className="col-span-2 text-right font-bold text-white">$1,500</span>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                    <span className="col-span-1 text-slate-500">#004</span>
                    <span className="col-span-3 text-white font-sans font-medium truncate">Sarah Kipu</span>
                    <span className="col-span-4 text-slate-400 truncate">System Integration</span>
                    <span className="col-span-2 text-center text-emerald-400 text-[10px] bg-emerald-950/60 border border-emerald-500/30 rounded py-0.5">Completed</span>
                    <span className="col-span-2 text-right font-bold text-white">$1,320</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-Pillar Experience Bar - Floating Bridge Card */}
        <div className="relative z-20 mt-12 sm:mt-16 -mb-20 sm:-mb-24">
          <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-950/20 border border-slate-200/90">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950">2+ Years</div>
                  <div className="text-xs text-slate-500">Experience</div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-slate-200/80 sm:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-[#087f5b]/20" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950">5.0</div>
                  <div className="text-xs text-slate-500">Client Rating</div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-slate-200/80 sm:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950">WordPress • WooCommerce • Custom Systems</div>
                  <div className="text-xs text-slate-500">Specialized Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
