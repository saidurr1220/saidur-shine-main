import React from "react";
import {
  Code2,
  Database,
  Server,
  Zap,
  Target,
  Shield,
  GraduationCap,
  Globe2,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AboutApple() {
  const pillars = [
    {
      icon: Server,
      title: "Custom Plugin Architecture (OOP)",
      desc: "Developing custom post types, taxonomies, AJAX endpoints, and upgrade-safe hooks that never touch core files.",
    },
    {
      icon: Database,
      title: "WooCommerce Custom Platforms",
      desc: "Engineering complex B2B/B2C purchasing, shared dual-mode inventory, and store credit ledgers.",
    },
    {
      icon: Code2,
      title: "Dynamic Distance Pricing & Booking",
      desc: "Building multi-step instant quotes via Google Distance Matrix API with formula-based dynamic rates.",
    },
    {
      icon: Shield,
      title: "GTM/GA4 Conversion Deduplication",
      desc: "Transaction-ID bound tracking setups that prevent duplicate conversion counts from Stripe checkouts.",
    },
  ];

  return (
    <section id="about" className="py-28 px-4 bg-white border-y border-black/[0.04]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About Me & Agency Delivery
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Full stack WordPress developer with 2+ years of experience building custom, production-grade platforms with high delivery velocity.
          </p>
        </motion.div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Card: Bio & Core Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 apple-card p-7 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                End-to-End Project Ownership
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Currently delivering <span className="font-semibold text-slate-900">10 to 15 client projects per month</span> through a WordPress agency, ranging from quick $20 fixes to full builds worth $2,500+. Shipped 11 projects last month with <span className="font-semibold text-emerald-700">10 rated 5 stars</span>.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Recently transformed <span className="font-semibold text-slate-900">Vault Labs Research</span> into a full laboratory research commerce platform with 20+ custom modules via hooks and filters only &mdash; preserving future core upgrade safety.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-100 text-center">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <div className="text-2xl font-bold text-slate-900">10-15</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Projects / Mo</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl">
                <div className="text-2xl font-bold text-emerald-700">10 ★</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">5-Star Rated</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl">
                <div className="text-2xl font-bold text-slate-900">20+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Custom Modules</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Architectural Strength Pillars */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="apple-card p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1.5">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Clients Card */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="apple-card p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">B.Sc. in Computer Science & Engineering</h4>
              <p className="text-xs text-slate-500">North South University, Dhaka</p>
            </div>
          </div>

          <div className="apple-card p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">International Delivery Experience</h4>
              <p className="text-xs text-slate-500">Clients across US, UK, and Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
