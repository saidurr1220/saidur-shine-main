import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Workflow,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Code2,
  Globe,
  ArrowUpRight,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projectsData";

const categories = [
  "All Projects",
  "FinTech & Trading",
  "WooCommerce",
  "Booking & Dynamic Pricing",
  "Membership & LMS",
  "Lead CRM & SaaS",
  "Workflow Automation",
];

export function ProjectsApple() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.filterCategory === selectedCategory);

  // Preload all project screenshots into browser cache
  useEffect(() => {
    projectsData.forEach((p) => {
      if (p.screenshot) {
        const img = new Image();
        img.src = p.screenshot;
      }
    });
  }, []);

  // Separate flagship project (Mirror Control) when "All Projects" is selected
  const isAllCategory = selectedCategory === "All Projects";
  const flagshipProject = isAllCategory ? filteredProjects[0] : null;
  const gridProjects = isAllCategory ? filteredProjects.slice(1) : filteredProjects;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 apple-canvas border-t border-black/[0.04]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured Production Systems
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Real client systems shipped to production across high-assurance crypto trading infrastructure, custom WooCommerce platforms, dynamic booking engines, and conversion pipelines.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const count =
                cat === "All Projects"
                  ? projectsData.length
                  : projectsData.filter((p) => p.filterCategory === cat).length;

              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-sm font-semibold scale-[1.02]"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 1. FLAGSHIP SPOTLIGHT CARD (Mirror Control - 2-Col Hero Bento) */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Visual Dashboard Mockup (7 Cols) */}
              <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between relative group">
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-slate-300 border border-white/10">
                      <Globe className="w-3 h-3 text-emerald-400" />
                      <span>mirror-control.live</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>24/7 LIVE PLATFORM</span>
                  </div>
                </div>

                {/* Dashboard Screenshot */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10] bg-slate-900">
                  <img
                    src={flagshipProject.screenshot}
                    alt={flagshipProject.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Live Operations Telemetry */}
                <div className="grid grid-cols-3 gap-2.5 pt-4 text-center mt-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs sm:text-sm font-mono font-bold text-white">
                      {flagshipProject.metrics.contract}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                      Contract Value
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                      {flagshipProject.metrics.margin}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                      Margin Protected
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs sm:text-sm font-mono font-bold text-slate-200">
                      {flagshipProject.metrics.status}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                      Ops State
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Intel & Actions (5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-200/80 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Flagship Engineering
                    </span>
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      {flagshipProject.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 inline-flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{flagshipProject.architecture}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Challenge & Engineered Solution */}
                  <div className="space-y-2.5 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        The Challenge
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {flagshipProject.problem}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <h4 className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Engineered Solution
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {flagshipProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <Button
                    size="sm"
                    asChild
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs h-10 px-5 shadow-xs"
                  >
                    <Link to={`/project/${flagshipProject.id}`} className="flex items-center gap-1.5 font-semibold">
                      <span>View Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>

                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-2 rounded-full border border-emerald-200/60 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    $7,000 USD Production Delivered
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. RESPONSIVE 2-COLUMN PROJECT GRID (Fast, Clean, No Endless Vertical Stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="apple-card bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Browser Window Mockup Preview */}
                {project.screenshot ? (
                  <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 shadow-xs">
                    {/* Window Titlebar */}
                    <div className="bg-slate-100/90 backdrop-blur-sm px-3.5 py-2 border-b border-slate-200/70 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-0.5 bg-white rounded-md text-[11px] font-mono text-slate-600 border border-slate-200/70 max-w-[200px] truncate">
                        <Globe className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">
                          {project.url
                            ? project.url.replace("https://", "")
                            : project.id === "bybit-bitget-mirror-engine"
                            ? "mirror-control.live"
                            : "internal-system"}
                        </span>
                      </div>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-900 transition-colors"
                          title="Open Live Site"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div className="w-3.5" />
                      )}
                    </div>

                    {/* Screenshot Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center space-y-2 aspect-[16/10] flex flex-col items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-slate-400 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-xs">Internal Platform</h4>
                    <p className="text-[11px] text-slate-500 max-w-xs">
                      Enterprise automation engine under proprietary NDA.
                    </p>
                  </div>
                )}

                {/* Badges */}
                <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-100">
                      {project.highlightBadge}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      {project.location}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.filterCategory}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80 inline-flex items-center gap-1.5 mt-2">
                    <Code2 className="w-3 h-3 text-emerald-600" />
                    <span className="truncate max-w-[280px] sm:max-w-[340px]">{project.architecture}</span>
                  </p>
                </div>

                {/* Concise Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Challenge & Solution Mini-Bento */}
                <div className="space-y-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block mb-0.5">
                      Challenge
                    </span>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50/40 border border-emerald-100/80">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                      Engineered Solution
                    </span>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-2 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <div className="text-xs font-bold text-slate-900 truncate" title={value}>
                        {value}
                      </div>
                      <div className="text-[9px] text-slate-500 capitalize mt-0.5 truncate">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="rounded-full text-xs font-semibold border-slate-200 hover:bg-slate-50 text-slate-700 h-9 px-4"
                >
                  <Link to={`/project/${project.id}`} className="flex items-center gap-1.5">
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>

                {project.url && project.url !== "" ? (
                  <Button
                    size="sm"
                    asChild
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs h-9 px-4 shadow-xs"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                ) : (
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Production Active
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
