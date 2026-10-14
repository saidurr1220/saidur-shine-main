import React from "react";
import {
  Mail,
  Download,
  ArrowRight,
  Star,
  Activity,
  Lock,
  ShieldCheck,
  CheckCircle2,
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 apple-canvas overflow-hidden"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authoritative Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs text-emerald-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold tracking-tight">Available for Client Builds &amp; Agency Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Md. Saidur Rahman
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-700 font-semibold tracking-tight">
                Full-Stack WordPress Engineer &amp; System Architect
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              2+ years engineering high-assurance financial trading infrastructure, custom WordPress plugin architectures (OOP), scalable WooCommerce platforms, and precision conversion tracking for clients across the US, UK, and Australia.
            </p>

            {/* CTAs - Perfectly Aligned Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 rounded-full shadow-xs hover:scale-[1.01] transition-all h-11 text-xs"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 rounded-full shadow-xs h-11 text-xs"
              >
                <Mail className="mr-2 h-3.5 w-3.5" />
                <span>Get in Touch</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-slate-700 hover:text-slate-900 border-slate-200 bg-white h-11 px-5 text-xs font-medium shadow-2xs"
              >
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="mr-2 h-3.5 w-3.5 text-emerald-600" />
                  <span>Resume PDF</span>
                </a>
              </Button>
            </div>

            {/* Clean Inline Stats Strip (Unified Single Card) */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
              <div className="pt-2 sm:pt-0">
                <div className="text-xl font-bold text-slate-900">$7,000</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Top Single Build</div>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-3">
                <div className="text-xl font-bold text-emerald-700 flex items-center justify-center gap-1">
                  5.0 <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Upwork 100% 5-Star</div>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-3">
                <div className="text-xl font-bold text-slate-900">10-15</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Projects / Month</div>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-3">
                <div className="text-xl font-bold text-slate-900">B.Sc. CSE</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">North South Univ</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Single Unified Flagship Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-3"
          >
            {/* Flagship Production Window */}
            <div className="apple-card p-5 sm:p-6 bg-white border border-slate-200/90 shadow-xl space-y-4">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200/70">
                    <Lock className="w-2.5 h-2.5 text-emerald-600" />
                    <span>mirror-control.live</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[10px] font-semibold">
                  <Activity className="w-3 h-3 text-emerald-600 animate-pulse" />
                  <span>24/7 LIVE PLATFORM</span>
                </div>
              </div>

              {/* High-Res Dashboard Screenshot */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] bg-slate-950 group">
                <img
                  src="/screenshots/mirror-control.png"
                  alt="Mirror Control production trading dashboard"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Integrated Telemetry Bar */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-mono font-bold text-slate-900">$538k+ USDT</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Bitget Margin</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-mono font-bold text-emerald-700">1:1 Strict Parity</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Position Match</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-mono font-bold text-slate-900">$7,000 USD</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Contract Value</div>
                </div>
              </div>
            </div>

            {/* Clean Client Trust Note */}
            <p className="text-center text-xs text-slate-500 font-medium">
              Trusted by international founders: <span className="text-slate-800 font-semibold">Vault Labs</span> (US) • <span className="text-slate-800 font-semibold">OnRoute Couriers</span> (UK) • <span className="text-slate-800 font-semibold">California Landlords Union</span> (US)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
