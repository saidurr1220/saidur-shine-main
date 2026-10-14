import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projectCategories = [
  "All Projects",
  "WordPress",
  "E-commerce",
  "Custom Systems",
];

export function ProjectsApple() {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#fbfbfd] border-t border-slate-200/60">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header matching uploaded design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left Title */}
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block mb-2">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Built with purpose.
            </h2>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#087f5b] tracking-tight leading-tight">
              Engineered to perform.
            </h2>
          </div>

          {/* Right Subtitle & Category Filter Buttons */}
          <div className="space-y-4 md:text-right max-w-md">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              A selection of projects that showcase real-world problem solving with WordPress, WooCommerce, and custom systems.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center md:justify-end gap-2">
              {projectCategories.map((cat) => {
                const isActive = selectedFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#05513a] text-white font-semibold shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 1. TOP FEATURED PROJECT CARD: Real-Time Trade Mirror Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[#f4f6f8] border border-slate-200/80 p-6 sm:p-10 mb-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Browser Mockup with Mirror Control */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl overflow-hidden">
                {/* Browser Titlebar */}
                <div className="bg-[#1e293b]/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-900/60 text-[11px] font-mono text-slate-400 border border-slate-700/50">
                    <Lock className="w-2.5 h-2.5 text-emerald-400" />
                    <span>mirror-control.live</span>
                  </div>
                  <div className="w-4" />
                </div>

                {/* Screenshot */}
                <div className="aspect-[16/10] bg-[#0b0f17] overflow-hidden">
                  <img
                    src="/screenshots/mirror-control.png"
                    alt="Mirror Control production dashboard"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Project Intel & CTA */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-mono font-bold text-[#087f5b] tracking-wider uppercase block">
                01 / FEATURED PROJECT
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                Real-Time Trade Mirror Engine
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Bybit to Bitget UTA trade mirroring with a custom monitoring dashboard.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Node.js
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  TypeScript
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  PostgreSQL
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold text-xs h-11 px-6 shadow-sm"
                >
                  <Link to="/project/bybit-bitget-mirror-engine" className="flex items-center gap-2">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. TWO-COLUMN GRID BELOW FEATURED PROJECT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: WordPress Architecture / Vault Labs */}
          <div className="space-y-4">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden p-3 group">
              {/* Browser mockup header */}
              <div className="bg-slate-50 px-3 py-2 border-b border-slate-100 rounded-t-xl flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white text-[10px] font-mono text-slate-500 border border-slate-200/60">
                  <Lock className="w-2.5 h-2.5 text-slate-400" />
                  <span>Project preview</span>
                </div>
                <div className="w-3" />
              </div>

              {/* Image Frame */}
              <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden">
                <img
                  src="/screenshots/vault-labs.png"
                  alt="Vault Labs Research Laboratory Platform"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/project/vault-labs-research"
                className="group flex items-center gap-2 text-base sm:text-lg font-bold text-slate-950 hover:text-[#087f5b] transition-colors"
              >
                <span>WordPress Platform &amp; Custom Modules</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                Project preview
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transformed WooCommerce into a full laboratory platform with 20+ custom modules, dual-mode wholesale inventory, and store credit ledger.
            </p>
          </div>

          {/* Card 2: WooCommerce Store / OnRoute Couriers */}
          <div className="space-y-4">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden p-3 group">
              {/* Browser mockup header */}
              <div className="bg-slate-50 px-3 py-2 border-b border-slate-100 rounded-t-xl flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white text-[10px] font-mono text-slate-500 border border-slate-200/60">
                  <Lock className="w-2.5 h-2.5 text-slate-400" />
                  <span>Project preview</span>
                </div>
                <div className="w-3" />
              </div>

              {/* Image Frame */}
              <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden">
                <img
                  src="/screenshots/onroute.png"
                  alt="OnRoute Couriers dynamic pricing engine"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/project/onroute-couriers"
                className="group flex items-center gap-2 text-base sm:text-lg font-bold text-slate-950 hover:text-[#087f5b] transition-colors"
              >
                <span>WooCommerce Dynamic Booking Store</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                Project preview
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Google Distance Matrix dynamic pricing calculations with Stripe checkout integration and GA4 deduplicated conversion tracking.
            </p>
          </div>
        </div>

        {/* View All Projects Link at bottom */}
        <div className="mt-12 text-center">
          <Link
            to="/project/bybit-bitget-mirror-engine"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-[#087f5b] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#087f5b]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
