import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projectCategories = [
  "All",
  "WordPress",
  "E-commerce",
  "Custom Systems",
];

export function ProjectsApple() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#0b101b] text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header: Dark Header matching design */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#10b981] uppercase block mb-1">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected work.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#10b981] text-slate-950 font-bold shadow-sm"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. TOP FEATURED PROJECT CARD: Dark Real-Time Trade Mirror Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[#111927] border border-white/10 p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Terminal Trading Mockup Frame */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#090d16] border border-white/10 overflow-hidden shadow-2xl">
                <div className="bg-[#131c2d] px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[11px] text-white">Trade Mirror</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">mirror-control.live</div>
                </div>

                <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src="/screenshots/mirror-control.png"
                    alt="Mirror Control Trading Engine"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
              </div>
            </div>

            {/* Right: Intel & Meta */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#10b981] tracking-wider uppercase block">
                CUSTOM SYSTEM
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Real-Time Trade Mirror Engine
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A high-performance trade mirroring platform with real-time data processing, automated execution, and advanced risk management.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                  Node.js
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                  TypeScript
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                  PostgreSQL
                </span>
              </div>

              {/* View Case Study CTA */}
              <div className="pt-2">
                <Link
                  to="/project/bybit-bitget-mirror-engine"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#10b981] hover:text-[#34d399] transition-colors group/link"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. TWO-COLUMN PROJECT CARDS (White/Clean style matching design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-900">
          {/* Card 1: WordPress Platform / Vault Labs */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              {/* Image Preview with browser frame */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[16/10]">
                <img
                  src="/screenshots/vault-labs.png"
                  alt="Laboratory Commerce Platform"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-[#087f5b] tracking-wider uppercase block mb-1">
                  WORDPRESS PLATFORM
                </span>
                <h4 className="text-xl font-bold text-slate-950 leading-snug">
                  Laboratory Research Commerce Platform
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A custom WordPress and WooCommerce platform with 20+ bespoke modules, wholesale pricing, and automated store credit redemption.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <Link
                to="/project/vault-labs-research"
                className="text-xs font-bold text-[#087f5b] hover:text-[#05513a] flex items-center gap-1.5"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#087f5b] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: WooCommerce Website / OnRoute Couriers */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              {/* Image Preview with browser frame */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[16/10]">
                <img
                  src="/screenshots/onroute.png"
                  alt="Industrial Dynamic Pricing Engine"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-[#087f5b] tracking-wider uppercase block mb-1">
                  WOOCOMMERCE WEBSITE
                </span>
                <h4 className="text-xl font-bold text-slate-950 leading-snug">
                  Dynamic Logistics &amp; Booking Store
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A professional e-commerce platform with real-time distance calculations, Stripe webhooks, and streamlined order booking.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <Link
                to="/project/onroute-couriers"
                className="text-xs font-bold text-[#087f5b] hover:text-[#05513a] flex items-center gap-1.5"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#087f5b] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
