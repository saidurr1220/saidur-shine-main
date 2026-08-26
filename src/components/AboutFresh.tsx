import React from "react";
import {
  Code2,
  Database,
  Server,
  Zap,
  Target,
  GitBranch,
  Shield,
  GraduationCap,
  Globe2,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AboutFresh() {
  const strengths = [
    {
      icon: Server,
      title: "Custom Plugin Architecture (OOP)",
      description:
        "Designing scalable, object-oriented WordPress plugins from scratch — custom post types, custom taxonomies, AJAX endpoints, and upgrade-safe hooks without touching core files.",
    },
    {
      icon: Database,
      title: "WooCommerce Engineering",
      description:
        "Building complex purchasing flows, shared dual-mode inventories, store credit ledgers, and checkout fee logic on top of WooCommerce for B2B/B2C platforms.",
    },
    {
      icon: Code2,
      title: "Membership & Booking Engines",
      description:
        "Building end-to-end membership portals (Paid Memberships Pro + Tutor LMS) and appointment booking engines with real-time distance-based pricing via Google Distance Matrix API.",
    },
    {
      icon: Shield,
      title: "Conversion Tracking & Integrations",
      description:
        "Implementing Stripe payments with webhook handlers, CRM pipelines (Bitrix24, Zoho), and GTM/GA4/Google Ads tracking with Stripe-aware conversion deduplication.",
    },
  ];

  return (
    <section id="about" className="py-28 px-4 bg-white relative overflow-hidden border-y border-slate-200/80">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Engineering & Delivery Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            About Me & Agency Delivery
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Full stack WordPress developer with 2+ years of experience building custom, production-grade platforms with high delivery velocity.
          </p>
        </motion.div>

        {/* Top Grid: Bio Card & Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <Card className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <Code2 className="w-6 h-6 text-emerald-600" />
                Full Stack WordPress Developer
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Full Stack WordPress Developer with 2+ years of experience building custom, production-grade WordPress platforms. Experienced in{" "}
                  <span className="text-emerald-700 font-semibold">custom plugin development (OOP)</span>, membership systems, booking engines, WooCommerce solutions, CRM integrations, and business automation tools.
                </p>
                <p>
                  Recently transformed{" "}
                  <span className="text-emerald-700 font-semibold">Vault Labs Research</span> into a full laboratory research commerce platform, building 20+ custom modules including a dual-mode purchasing system and a production Store Credit platform &mdash; all without modifying WooCommerce core.
                </p>
                <p>
                  Strong focus on{" "}
                  <span className="text-emerald-700 font-semibold">end-to-end ownership</span>, from architecture, planning, and development through client communication, QA, deployment, and post-launch support.
                </p>
                <p>
                  Currently delivering{" "}
                  <span className="text-emerald-700 font-semibold">10 to 15 client projects per month</span> through a WordPress development agency, with 11 projects shipped last month and{" "}
                  <span className="text-emerald-700 font-semibold">10 rated 5 stars</span>. Project scope ranges from quick $20 fixes to full $2,500+ builds.
                </p>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-200 text-center">
                <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">10-15</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">Projects / Mo</div>
                </div>
                <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">10 ★</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">5-Star Rated</div>
                </div>
                <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">20+</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">Custom Modules</div>
                </div>
                <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">2+</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">Years Exp</div>
                </div>
              </div>
            </Card>

            {/* Education & Clients Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3.5 shadow-sm">
                <div className="p-3 rounded-xl bg-emerald-100/70 text-emerald-700 flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">B.Sc. in CSE</h4>
                  <p className="text-xs text-slate-600">North South University, Dhaka</p>
                  <p className="text-[11px] text-emerald-700 font-mono mt-1 font-medium">Computer Science & Engineering</p>
                </div>
              </Card>

              <Card className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3.5 shadow-sm">
                <div className="p-3 rounded-xl bg-cyan-100/70 text-cyan-700 flex-shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Global Clients</h4>
                  <p className="text-xs text-slate-600">US, UK, Australia, Germany</p>
                  <p className="text-[11px] text-cyan-700 font-mono mt-1 font-medium">100% On-Time Delivery</p>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Right Column: 4 Architectural Strength Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-4 flex flex-col justify-between"
          >
            {strengths.map((strength) => (
              <Card
                key={strength.title}
                className="p-6 bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 rounded-3xl shadow-sm hover:shadow-md group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-600 group-hover:scale-105 transition-transform">
                    <strength.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                      {strength.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-1">
              <Card className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <Zap className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="font-bold text-sm text-slate-900 mb-1">High Velocity</h4>
                <p className="text-xs text-slate-600">
                  10 to 15 projects shipped monthly with strict QA & rollback plans
                </p>
              </Card>

              <Card className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <Target className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="font-bold text-sm text-slate-900 mb-1">Full Ownership</h4>
                <p className="text-xs text-slate-600">
                  End-to-end responsibility: scoping, architecture, code, and deployment
                </p>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* 3-Step Production Engineering Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            <GitBranch className="w-5 h-5 text-emerald-600" />
            End-to-End Engineering Methodology
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-700 font-mono font-bold text-lg">01</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Architecture & Scoping</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Database indexing, OOP hook structure, payment & distance API scoping, and client requirement specs.
              </p>
            </div>

            <div className="text-center p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-700 font-mono font-bold text-lg">02</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Build, Async QA & Dedup</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean hooks & filters, non-blocking asynchronous email queues, transaction-safe conversion deduplication.
              </p>
            </div>

            <div className="text-center p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-700 font-mono font-bold text-lg">03</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Deploy, Speed & Staging</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero-downtime staging deployment, LiteSpeed cache tuning, Core Web Vitals optimization, and client handoff.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
