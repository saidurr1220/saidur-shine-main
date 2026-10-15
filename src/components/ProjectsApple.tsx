import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";

const projectCategories = [
  "All",
  "WordPress",
  "E-commerce",
  "Custom Systems",
];

export function ProjectsApple() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Map category filter to projectsData
  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "WordPress") return p.category === "WordPress";
    if (selectedFilter === "E-commerce") return p.filterCategory === "WooCommerce";
    if (selectedFilter === "Custom Systems")
      return (
        p.category === "FinTech & Trading" ||
        p.filterCategory === "Workflow Automation" ||
        p.filterCategory === "Lead CRM & SaaS"
      );
    return true;
  });

  // Featured Project is always Mirror Control (or first filtered project)
  const featured =
    filteredProjects.find((p) => p.id === "bybit-bitget-mirror-engine") ||
    filteredProjects[0];
  const otherProjects = filteredProjects.filter((p) => p.id !== featured?.id);
  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 2);

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
                  onClick={() => {
                    setSelectedFilter(cat);
                    setShowAll(false);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-[#10b981] text-slate-950 shadow-sm"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. TOP FEATURED PROJECT CARD: Real-Time Trade Mirror Engine */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-3xl bg-[#111927] border border-white/10 p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden group hover:border-[#10b981]/30 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Terminal Trading Mockup Frame (58% ratio) */}
              <div className="lg:col-span-7">
                <div className="rounded-xl bg-[#090d16] border border-white/10 overflow-hidden shadow-2xl">
                  {/* Titlebar */}
                  <div className="bg-[#131c2d] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[11px] font-bold text-white tracking-wide">
                        Trade Mirror
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      mirror-control.live
                    </div>
                  </div>

                  {/* Screenshot with fixed ratio */}
                  <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={featured.screenshot || "/screenshots/mirror-control.png"}
                      alt={featured.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover object-top block transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Intel & Meta (42% ratio) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[11px] font-mono font-bold text-[#10b981] tracking-wider uppercase block">
                  CUSTOM SYSTEM
                </span>

                <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-white tracking-tight leading-snug">
                  Mirror Control - Bybit to Bitget Real-Time Trade Mirror &amp; Ops Engine
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Enterprise-grade trade mirroring with real-time syncing, advanced position and risk management, and a clean operations dashboard powering an active $500k+ USDT margin.
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
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                    WebSockets
                  </span>
                </div>

                {/* View Case Study Pill Button matching screenshot */}
                <div className="pt-2">
                  <Button
                    size="sm"
                    asChild
                    className="bg-[#10b981] hover:bg-[#059669] text-slate-950 font-bold rounded-full text-xs h-10 px-5 shadow-sm inline-flex items-center gap-2"
                  >
                    <Link to={`/project/${featured.id}`}>
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. TWO-COLUMN PROJECT CARDS (Clean White Cards with Standardized Aspect Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-900">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 space-y-5 flex flex-col justify-between group transition-all duration-200 hover:shadow-2xl hover:border-slate-300"
            >
              <div className="space-y-4">
                {/* Standardized 16/10 Image Preview */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[16/10]">
                  <img
                    src={project.screenshot || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-[#087f5b] tracking-wider uppercase block mb-1">
                    {project.id === "vault-labs-research"
                      ? "WOOCOMMERCE"
                      : project.id === "onroute-couriers"
                      ? "BOOKING & DYNAMIC PRICING"
                      : project.filterCategory.toUpperCase()}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                    {project.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags (3-4 items) */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-mono text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: View Case Study on left, Live Site on right */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-100 text-xs">
                <Link
                  to={`/project/${project.id}`}
                  className="font-bold text-[#087f5b] hover:text-[#05513a] flex items-center gap-1.5 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors font-medium"
                    title="Open Live Site"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Pill matching screenshot: "View All Projects (7) ↓" */}
        {otherProjects.length > 2 && (
          <div className="mt-12 text-center space-y-3">
            <div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 px-6 py-2.5 rounded-full border border-white/15 transition-all shadow-sm"
              >
                <span>
                  {showAll
                    ? "Show Less Projects"
                    : `View All Projects (${projectsData.length})`}
                </span>
                <ArrowRight
                  className={`w-3.5 h-3.5 transition-transform text-[#10b981] ${
                    showAll ? "-rotate-90" : "rotate-90"
                  }`}
                />
              </button>
            </div>

            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#34d399] transition-colors"
              >
                <span>Or explore dedicated projects gallery page</span>
                <ArrowRight className="w-3 h-3 text-[#10b981]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
