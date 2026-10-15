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

const recentWork = [
  {
    name: "Mirror Control",
    desc: "Node.js trading engine",
    status: "Live 24/7",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
  {
    name: "Vault Labs Research",
    desc: "WooCommerce platform",
    status: "Live",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
  {
    name: "WeldingLeads",
    desc: "Subscription CRM plugin",
    status: "Live",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
  {
    name: "OnRoute Couriers",
    desc: "Booking & pricing plugin",
    status: "Live",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
];

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
      className="relative pt-24 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 bg-[#0b101b] text-white"
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
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Pill: Available for client builds & agency roles */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-[#0e2a22] border border-[#10b981]/30 rounded-full text-[11px] sm:text-xs text-[#34d399] font-medium shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0" />
              <span className="truncate">Available for client builds &amp; agency roles</span>
            </div>

            {/* Small Name Intro */}
            <p className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
              MD. SAIDUR RAHMAN
            </p>

            {/* Main Punchy Dual-Tone Headline */}
            <div className="space-y-0.5 sm:space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
                Engineering websites.
              </h1>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#10b981] leading-[1.15] sm:leading-[1.1]">
                Building reliable systems.
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-sm sm:text-lg font-semibold text-slate-200 tracking-tight">
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

          {/* Right Column: Delivery snapshot Frame */}
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
                  <span className="text-xs font-bold text-white tracking-wide">Delivery snapshot</span>
                </div>

                <div className="flex items-center px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium">
                  <span>Last month</span>
                </div>
              </div>

              {/* 3 Metrics Cards Row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate">Projects delivered</div>
                  <div className="text-base sm:text-xl font-bold text-white mt-1">11</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate">5-star ratings</div>
                  <div className="text-base sm:text-xl font-bold text-white mt-1">10</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate">Projects per month</div>
                  <div className="text-base sm:text-xl font-bold text-white mt-1">10-15</div>
                </div>
              </div>

              {/* Recent Work Table */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-300 mb-2">Recent work</div>
                
                {/* Mobile View (< sm) */}
                <div className="sm:hidden space-y-2">
                  {recentWork.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-white font-sans font-medium text-xs truncate">{item.name}</div>
                        <div className="text-slate-400 text-[10px] font-sans truncate">{item.desc}</div>
                      </div>
                      <span className={`text-[10px] px-2.5 py-0.5 rounded font-mono border ${item.statusStyle} flex-shrink-0`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Desktop View (sm+) */}
                <div className="hidden sm:block space-y-1.5 text-[11px]">
                  {recentWork.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300"
                    >
                      <span className="col-span-5 text-white font-sans font-medium truncate">{item.name}</span>
                      <span className="col-span-4 text-slate-400 truncate">{item.desc}</span>
                      <div className="col-span-3 text-right">
                        <span className={`inline-block text-[10px] px-2.5 py-0.5 rounded font-mono border ${item.statusStyle}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-Pillar Experience Bar - Floating Bridge Card */}
        <div className="relative z-20 mt-10 sm:mt-16 -mb-16 sm:-mb-24">
          <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-950/20 border border-slate-200/90">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 items-center">
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
                  <div className="text-xs text-slate-500">Fiverr Rating</div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-slate-200/80 sm:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-950 leading-snug">
                    WordPress • WooCommerce • Custom Systems
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Specialized Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
