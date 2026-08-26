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
  Sliders,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "WordPress Development",
    icon: Server,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accent: "text-blue-400",
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
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-400",
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
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accent: "text-cyan-400",
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
    color: "from-purple-500/20 via-pink-500/10 to-transparent",
    accent: "text-purple-400",
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
    color: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accent: "text-indigo-400",
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
    color: "from-teal-500/20 via-emerald-500/10 to-transparent",
    accent: "text-teal-400",
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
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accent: "text-amber-400",
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
    color: "from-rose-500/20 via-orange-500/10 to-transparent",
    accent: "text-rose-400",
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

export function SkillsMatrix() {
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
    <section
      id="skills"
      className="py-24 px-4 bg-slate-950/90 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Technical Capabilities</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Core Skills & Technical Matrix
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
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
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className={`relative bg-gradient-to-br ${category.color} bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-800 shadow-sm group-hover:scale-105 transition-transform">
                    <category.icon className={`w-6 h-6 ${category.accent}`} />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-mono bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-300 transition-colors py-1 px-2.5 rounded-lg"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{category.skills.length} competencies</span>
                <span className="text-emerald-400 font-semibold">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl font-extrabold text-emerald-400 mb-1">100%</div>
            <div className="text-xs text-slate-400 font-mono">Upgrade-Safe Hooks & Filters</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl font-extrabold text-emerald-400 mb-1">GTM/GA4</div>
            <div className="text-xs text-slate-400 font-mono">Deduplicated Ad Tracking</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl font-extrabold text-emerald-400 mb-1">10?15</div>
            <div className="text-xs text-slate-400 font-mono">Monthly Shipped Builds</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl font-extrabold text-emerald-400 mb-1">B.Sc. CSE</div>
            <div className="text-xs text-slate-400 font-mono">North South University</div>
          </div>
        </div>
      </div>
    </section>
  );
}
