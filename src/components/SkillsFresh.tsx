import React, { useState } from "react";
import {
  Server,
  Database,
  Shield,
  Layout,
  BarChart3,
  Zap,
  Sparkles,
  Bot,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "WordPress Development",
    icon: Server,
    color: "bg-blue-50/60 border-blue-200",
    accent: "text-blue-600",
    skills: [
      "Custom Themes & Bespoke Builds",
      "Child Theme Architecture",
      "Plugin Development (OOP Standards)",
      "WooCommerce Engineering",
      "Hooks & Filters (Zero Core Edits)",
      "AJAX & WP REST API",
      "Custom Post Types (CPT)",
      "Taxonomies & Metadata",
      "Advanced Custom Fields (ACF Pro)",
    ],
  },
  {
    title: "Analytics & Tracking",
    icon: BarChart3,
    color: "bg-emerald-50/60 border-emerald-200",
    accent: "text-emerald-600",
    skills: [
      "Google Tag Manager (GTM)",
      "GA4 E-Commerce Events",
      "Google Ads Conversion Tracking",
      "Conversion Deduplication (Stripe-Aware)",
      "Transaction ID Verification",
      "Production Tracking Audits",
      "Google Search Console",
    ],
  },
  {
    title: "Page Builders & UI",
    icon: Layout,
    color: "bg-cyan-50/60 border-cyan-200",
    accent: "text-cyan-600",
    skills: [
      "Elementor Pro",
      "Gutenberg Block Editor",
      "Divi Builder",
      "WPBakery Page Builder",
      "Figma to WordPress Pixel-Perfect",
      "Mobile-First Responsive Layouts",
    ],
  },
  {
    title: "Integrations & Gateways",
    icon: Shield,
    color: "bg-purple-50/60 border-purple-200",
    accent: "text-purple-600",
    skills: [
      "Stripe Payment Gateway & Webhooks",
      "Google Maps & Distance Matrix API",
      "Paid Memberships Pro (PMPro)",
      "Tutor LMS & LearnDash",
      "Fluent Forms Pro & Gravity Forms",
      "Bitrix24 CRM REST API",
      "Zoho CRM Integration",
      "SMTP & Async Email Pipelines",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "bg-indigo-50/60 border-indigo-200",
    accent: "text-indigo-600",
    skills: [
      "PHP (OOP & Functional)",
      "MySQL Database Indexing",
      "Query Optimization (Eliminating Slow LIKEs)",
      "Laravel Framework",
      "Filament Admin Panels",
      "RESTful API Development",
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "bg-teal-50/60 border-teal-200",
    accent: "text-teal-600",
    skills: [
      "HTML5 & Semantic Markup",
      "CSS3 & SCSS Preprocessing",
      "JavaScript (ES6+)",
      "jQuery & Vanilla DOM",
      "Tailwind CSS",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Performance & SEO",
    icon: Zap,
    color: "bg-amber-50/60 border-amber-200",
    accent: "text-amber-600",
    skills: [
      "Core Web Vitals (LCP, CLS, INP)",
      "LiteSpeed Cache & Redis Tuning",
      "Image & Asset Optimization",
      "PageSpeed 90+ Optimization",
      "Schema Markup & JSON-LD",
      "XML Sitemaps & Canonical URLs",
      "301 Redirect Rules",
    ],
  },
  {
    title: "Workflow & AI Tools",
    icon: Bot,
    color: "bg-rose-50/60 border-rose-200",
    accent: "text-rose-600",
    skills: [
      "Claude Code & Claude 3.7",
      "Cursor & GitHub Copilot",
      "Git & GitHub Version Control",
      "Staging Environments",
      "FTP / FileZilla / SSH",
      "Hostinger, cPanel & LiteSpeed",
    ],
  },
];

export function SkillsFresh() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", "WordPress", "Analytics", "Backend", "Integrations", "AI & Workflow"];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "WordPress") return cat.title.includes("WordPress") || cat.title.includes("Page");
    if (activeFilter === "Analytics") return cat.title.includes("Analytics") || cat.title.includes("SEO");
    if (activeFilter === "Backend") return cat.title.includes("Backend") || cat.title.includes("Frontend");
    if (activeFilter === "Integrations") return cat.title.includes("Integrations");
    if (activeFilter === "AI & Workflow") return cat.title.includes("Workflow");
    return true;
  });

  return (
    <section id="skills" className="py-28 px-4 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Comprehensive Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Core Skills & Technical Matrix
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Production-tested technologies across custom WordPress development, conversion tracking, database optimization, and modern AI engineering workflows.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterTabs.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-emerald-500/50 shadow-sm"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="h-full"
            >
              <div className="fresh-card rounded-3xl p-6 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200 shadow-sm group-hover:scale-105 transition-transform">
                      <category.icon className={`w-6 h-6 ${category.accent}`} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-mono bg-slate-50 hover:bg-emerald-50 border border-slate-200 text-slate-700 hover:text-emerald-800 transition-colors py-1 px-2.5 rounded-lg"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-emerald-700 font-semibold">Production Ready</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="fresh-card p-5 rounded-2xl text-center">
            <div className="text-3xl font-extrabold text-emerald-700 mb-1">100%</div>
            <div className="text-xs text-slate-600 font-mono font-medium">Upgrade-Safe Hooks & Filters</div>
          </div>
          <div className="fresh-card p-5 rounded-2xl text-center">
            <div className="text-3xl font-extrabold text-emerald-700 mb-1">GTM/GA4</div>
            <div className="text-xs text-slate-600 font-mono font-medium">Deduplicated Ad Tracking</div>
          </div>
          <div className="fresh-card p-5 rounded-2xl text-center">
            <div className="text-3xl font-extrabold text-emerald-700 mb-1">10–15</div>
            <div className="text-xs text-slate-600 font-mono font-medium">Monthly Shipped Builds</div>
          </div>
          <div className="fresh-card p-5 rounded-2xl text-center">
            <div className="text-3xl font-extrabold text-emerald-700 mb-1">B.Sc. CSE</div>
            <div className="text-xs text-slate-600 font-mono font-medium">North South University</div>
          </div>
        </div>
      </div>
    </section>
  );
}
