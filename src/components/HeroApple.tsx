import React from "react";
import {
  Mail,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Star,
  BadgeCheck,
  Globe,
  Activity,
  ArrowUpRight,
  Lock,
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
      className="relative min-h-[92vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 px-4 apple-canvas"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authoritative Personal Headline & Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/90 rounded-full text-xs text-emerald-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold tracking-tight">Available for Client Builds &amp; Agency Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.06]">
                Md. Saidur Rahman
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 font-semibold tracking-tight">
                Full-Stack WordPress Engineer &amp; System Architect
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              2+ years engineering mission-critical trading engines, custom OOP WordPress plugins, scalable WooCommerce platforms, and precision GTM/GA4 conversion tracking for clients across the US, UK, and Australia.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 rounded-full shadow-sm hover:scale-[1.01] transition-all h-12"
              >
                <span>View Case Studies</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 rounded-full shadow-sm h-12"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Get in Touch</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-slate-700 hover:text-slate-900 border-slate-200 bg-white h-12 px-5 shadow-xs"
              >
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="mr-2 h-4 w-4 text-emerald-600" />
                  <span>Resume PDF</span>
                </a>
              </Button>
            </div>

            {/* Authority Metric Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/70">
              <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                <div className="text-lg font-bold text-slate-900">$7,000</div>
                <div className="text-[10px] text-slate-500 font-medium">Top Single Build</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                <div className="text-lg font-bold text-emerald-700 flex items-center justify-center gap-0.5">
                  5.0 <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Upwork Verified</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                <div className="text-lg font-bold text-slate-900">10-15</div>
                <div className="text-[10px] text-slate-500 font-medium">Projects / Mo</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                <div className="text-lg font-bold text-slate-900">B.Sc. CSE</div>
                <div className="text-[10px] text-slate-500 font-medium">North South Univ</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Enterprise Bento Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            {/* 1. Main Card: Flagship $7,000 USD Production Trade Mirror */}
            <div className="apple-card p-5 sm:p-6 bg-white border border-slate-200 shadow-xl space-y-4">
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
                  <span>OPERATIONAL - 24/7 LIVE</span>
                </div>
              </div>

              {/* Live Mirror Control Screenshot Display */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 aspect-[16/9] bg-slate-950 group">
                <img
                  src="/screenshots/mirror-control.png"
                  alt="Mirror Control production trading dashboard"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" /> Bybit UTA to Bitget UTA 1:1 Mirror
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Hedge Mode - Isolated Margin - Durable Multiplier Epochs
                    </p>
                  </div>
                </div>
              </div>

              {/* Telemetry Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-mono font-bold text-slate-900">$538,227 USDT</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Bitget Margin</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-mono font-bold text-emerald-700">1:1 Exact Match</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Position Parity</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-mono font-bold text-slate-900">$7,000 USD</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Contract Value</div>
                </div>
              </div>
            </div>

            {/* 2. Mini-Bento Row: Upwork Social Proof & Verified Client Network */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card A: Upwork 5.0 Star Proof */}
              <div className="apple-card p-4 sm:p-5 bg-white border border-slate-200 shadow-md flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                    100% 5-Star
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-600" /> Upwork Top-Rated History
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    WordPress migration, malware cleanup, and custom plugin architectures with flawless feedback.
                  </p>
                </div>
              </div>

              {/* Card B: Real Global Clients */}
              <div className="apple-card p-4 sm:p-5 bg-white border border-slate-200 shadow-md flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-600" /> Global Client Network
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">US - UK - AU</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-600">
                  <p className="truncate">
                    <span className="font-semibold text-slate-900">Nick</span> (US) - Vault Labs (20+ Modules)
                  </p>
                  <p className="truncate">
                    <span className="font-semibold text-slate-900">Shahbaz</span> (UK) - OnRoute (Distance Pricing)
                  </p>
                  <p className="truncate">
                    <span className="font-semibold text-slate-900">Mr. Parvez</span> (US) - California Union AI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
