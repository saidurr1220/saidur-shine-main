import React from "react";
import {
  Code2,
  ShoppingCart,
  Route,
  BarChart3,
  Users2,
  Gauge,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    badge: "OOP Standards",
    title: "Custom Plugin Development",
    desc: "Scalable WordPress plugins engineered from scratch using OOP standards, custom post types, hooks/filters, and AJAX interfaces — 100% upgrade-safe without touching core.",
  },
  {
    icon: ShoppingCart,
    badge: "B2B & B2C",
    title: "WooCommerce Custom Platforms",
    desc: "Custom wholesale/single-kit purchasing engines, store credit ledger systems with checkout redemption, variation compliance document managers, and multi-carrier shipping.",
  },
  {
    icon: Route,
    badge: "Distance Matrix",
    title: "Dynamic Pricing & Booking Engines",
    desc: "Multi-step instant booking systems powered by Google Distance Matrix API with formula-based dynamic rates (Distance x Service Tier x Vehicle Class) and Stripe webhooks.",
  },
  {
    icon: BarChart3,
    badge: "Ad Spend Protection",
    title: "GTM / GA4 Tracking & Deduplication",
    desc: "Enterprise tracking setups with transaction-ID bound deduplication, ensuring cancelled bookings or refreshes never double-count into Google Ads or GA4 analytics.",
  },
  {
    icon: Users2,
    badge: "SaaS-Style",
    title: "Membership Portals & LMS Platforms",
    desc: "Multi-tier membership platforms (Paid Memberships Pro) integrated with Tutor LMS, automated incremental member ID generators, and custom tabbed dashboards.",
  },
  {
    icon: Gauge,
    badge: "Core Web Vitals",
    title: "Performance & Database Optimization",
    desc: "Fixing SQL bottlenecks with indexed hash lookup tables, eliminating email dispatch timeouts with asynchronous background workers, and LiteSpeed cache tuning.",
  },
];

export function ServicesApple() {
  return (
    <section id="services" className="py-28 px-4 bg-white border-t border-black/[0.04]">
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
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Specialized Development Services
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From single-feature custom plugins to multi-thousand dollar production platforms with full ownership.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="h-full"
            >
              <div className="apple-card p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-slate-800" />
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-2 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
