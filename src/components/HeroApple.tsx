import React from "react";
import {
  Mail,
  Download,
  ArrowRight,
  Star,
  Briefcase,
  Layers,
  Lock,
  Cpu,
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
      className="relative min-h-[90vh] flex items-center justify-center pt-32 sm:pt-36 pb-16 px-4 sm:px-6 bg-[#fbfbfd] overflow-hidden"
    >
      {/* Background ambient radial gradients matching the uploaded design */}
      <div className="absolute top-10 left-[-5%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-[-5%] w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill: Available for Client Builds & Agency Roles */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e8f6f0] border border-[#d1ede1] rounded-full text-xs text-[#0f6b4d] font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>Available for Client Builds &amp; Agency Roles</span>
            </div>

            {/* Small Name Intro */}
            <p className="text-sm font-semibold text-slate-800 tracking-tight">
              Md. Saidur Rahman
            </p>

            {/* Main Punchy Dual-Tone Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                Engineering websites.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#087f5b] leading-[1.12]">
                Building reliable systems.
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-semibold text-slate-800 tracking-tight">
              Full-Stack WordPress Engineer &amp; System Architect
            </p>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
              I engineer high-assurance financial trading infrastructure, custom WordPress plugin architectures, scalable WooCommerce platforms, and precision conversion tracking for clients across the US, UK, and Australia.
            </p>

            {/* Aligned CTAs matching design */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold px-6 rounded-xl shadow-xs transition-all h-11 text-xs"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-[#05513a] hover:bg-[#033b2a] text-white font-semibold px-6 rounded-xl shadow-xs h-11 text-xs"
              >
                <Mail className="mr-2 h-3.5 w-3.5" />
                <span>Get in Touch</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl text-slate-700 hover:text-slate-900 border-slate-200 bg-white h-11 px-5 text-xs font-medium shadow-2xs"
              >
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="mr-2 h-3.5 w-3.5 text-[#087f5b]" />
                  <span>Resume PDF</span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Mirror Control Frame with Floating "Built for production" Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* macOS Mirror Control Window */}
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-4 sm:p-5 relative">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-lg bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200/70">
                    <Lock className="w-2.5 h-2.5 text-emerald-600" />
                    <span>mirror-control.live</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e8f6f0] text-[#0f6b4d] border border-[#d1ede1] text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>24/7 LIVE PLATFORM</span>
                </div>
              </div>

              {/* High-Resolution Dashboard Mockup */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-900/10 aspect-[16/10] bg-[#0b0f17]">
                <img
                  src="/screenshots/mirror-control.png"
                  alt="Mirror Control live trading dashboard"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-top block"
                />
              </div>

              {/* Floating "Built for production" Badge anchored at bottom right */}
              <div className="absolute -bottom-5 right-6 sm:right-8 bg-white rounded-2xl p-3 px-4 border border-slate-200/90 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center font-bold">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">Built for production</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Reliable. Scalable. Monitored.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-Pillar Experience & Rating Row beneath Hero */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {/* Pillar 1: 2+ Years Experience */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">2+ Years</div>
              <div className="text-xs text-slate-500">Experience</div>
            </div>
          </div>

          {/* Pillar 2: 5.0 Client Rating */}
          <div className="flex items-center gap-3.5 sm:border-l sm:border-slate-200/60 sm:pl-8">
            <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 fill-[#087f5b]/20" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">5.0</div>
              <div className="text-xs text-slate-500">Client Rating</div>
            </div>
          </div>

          {/* Pillar 3: WordPress • WooCommerce • Custom Systems */}
          <div className="flex items-center gap-3.5 sm:border-l sm:border-slate-200/60 sm:pl-8">
            <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">WordPress - WooCommerce - Custom Systems</div>
              <div className="text-xs text-slate-500">Core Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
