import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Lock,
  ChevronDown,
  Layers,
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
      return p.category === "FinTech & Trading" || p.filterCategory === "Workflow Automation" || p.filterCategory === "Lead CRM & SaaS";
    return true;
  });

  // Featured Project is always Mirror Control (or first filtered project)
  const featured = filteredProjects.find((p) => p.id === "bybit-bitget-mirror-engine") || filteredProjects[0];
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
        {featured && (
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
                      src={featured.screenshot || "/screenshots/mirror-control.png"}
                      alt={featured.title}
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
                  {featured.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featured.description}
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
                    to={`/project/${featured.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#10b981] hover:text-[#34d399] transition-colors group/link"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. TWO-COLUMN PROJECT CARDS (All projects rendered smoothly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-900">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 space-y-4 flex flex-col justify-between group transition-all hover:shadow-2xl hover:border-slate-300"
            >
              <div className="space-y-4">
                {/* Image Preview */}
                {project.screenshot ? (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[16/10]">
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 aspect-[16/10] flex flex-col items-center justify-center text-center">
                    <Layers className="w-8 h-8 text-slate-400 mb-2" />
                    <span className="text-xs font-bold text-slate-700">Internal Enterprise Platform</span>
                    <span className="text-[10px] text-slate-400 mt-1">Proprietary Automation Workflow</span>
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-mono font-bold text-[#087f5b] tracking-wider uppercase block mb-1">
                    {project.filterCategory.toUpperCase()}
                  </span>
                  <h4 className="text-xl font-bold text-slate-950 leading-snug">
                    {project.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <Link
                  to={`/project/${project.id}`}
                  className="text-xs font-bold text-[#087f5b] hover:text-[#05513a] flex items-center gap-1.5"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
                      title="Open Live Site"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <Link
                    to={`/project/${project.id}`}
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#087f5b] group-hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects / Toggle More Projects button */}
        {otherProjects.length > 2 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white/15 px-6 py-3 rounded-full border border-white/15 transition-all shadow-sm"
            >
              <span>{showAll ? "Show Less Projects" : `View All Projects (${projectsData.length})`}</span>
              <ArrowRight className={`w-4 h-4 transition-transform text-[#10b981] ${showAll ? "-rotate-90" : "rotate-90"}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
