import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Workflow,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
  LayoutGrid,
  LayoutList,
  Code2,
  Globe,
  ArrowUpRight,
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
  const [viewMode, setViewMode] = useState<"stacked" | "grid">("stacked");
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

  return (
    <section id="projects" className="py-28 px-4 apple-canvas border-t border-black/[0.04]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineered Case Studies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Real client systems shipped to production across crypto financial infrastructure, custom WooCommerce platforms, dynamic distance booking engines, and conversion analytics.
          </p>

          {/* Category Filter Pills & View Toggle */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-sm font-semibold"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-slate-200 shadow-xs flex-shrink-0">
              <button
                onClick={() => setViewMode("stacked")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === "stacked"
                    ? "bg-slate-900 text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Stacked Showcase View"
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Showcase</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-slate-900 text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Compact Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 1. STACKED VERTICAL SHOWCASE (Zero CLS - Natural Scrolling) */}
        {viewMode === "stacked" && (
          <div className="space-y-12">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="apple-card p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* LEFT COLUMN: Project Details (6 Cols) */}
                  <div className="lg:col-span-6 space-y-4">
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                          {project.highlightBadge}
                        </span>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                          {project.location}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          • {project.filterCategory}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{idx + 1} of {filteredProjects.length}
                      </span>
                    </div>

                    {/* Title & Architecture */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 inline-flex items-center gap-1.5 mt-2.5">
                        <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                        {project.architecture}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* 3 Apple Pillar Cards */}
                    <div className="space-y-2.5 pt-1">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          The Challenge
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Engineered Solution
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Measurable Impact
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="p-2 bg-slate-50 rounded-xl text-center border border-slate-100"
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

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
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
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </Button>
                      ) : (
                        <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60 flex items-center gap-1.5 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Active Production Platform
                        </span>
                      )}

                      {project.workflowSteps && (
                        <button
                          onClick={() =>
                            setActiveWorkflowId(
                              activeWorkflowId === project.id ? null : project.id
                            )
                          }
                          className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                          <Workflow className="w-3.5 h-3.5 text-emerald-600" />
                          {activeWorkflowId === project.id ? "Hide Pipeline" : "View Data Flow"}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: macOS Safari Browser Mockup (6 Cols) */}
                  <div className="lg:col-span-6">
                    {project.screenshot ? (
                      <div className="relative group">
                        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                          {/* macOS Window Titlebar */}
                          <div className="bg-slate-100/90 backdrop-blur-sm px-4 py-2.5 border-b border-slate-200/80 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-0.5 bg-white rounded-lg text-[11px] font-mono text-slate-600 border border-slate-200/80 max-w-[240px] truncate shadow-xs">
                              <Globe className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                              <span className="truncate">
                                {project.url ? project.url.replace("https://", "") : (project.id === "bybit-bitget-mirror-engine" ? "mirror-control.live" : "internal-system")}
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
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            ) : (
                              <div className="w-4" />
                            )}
                          </div>

                          {/* Screenshot Preview */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                            <img
                              src={project.screenshot}
                              alt={`${project.title} live screenshot preview`}
                              width={800}
                              height={500}
                              className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                              >
                                <span>Open Live Site</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center space-y-3">
                        <ShieldCheck className="w-10 h-10 text-slate-400 mx-auto" />
                        <h4 className="font-bold text-slate-900 text-sm">Internal Enterprise Platform</h4>
                        <p className="text-xs text-slate-500 max-w-sm mx-auto">
                          Proprietary internal architecture and private enterprise automation systems are under NDA.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expandable Data Pipeline Workflow */}
                {activeWorkflowId === project.id && project.workflowSteps && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-6 border-t border-slate-100"
                  >
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      Production Pipeline &amp; Data Flow
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {project.workflowSteps.map((wf, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center font-mono">
                              {sIdx + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-900 truncate">
                              {wf.step}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            {wf.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* 2. COMPACT GRID VIEW (Optional Fast Scanning) */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="apple-card p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  {project.screenshot && (
                    <div className="mb-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-video max-h-56 group">
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                      {project.highlightBadge}
                    </span>
                    <span className="text-xs text-slate-500">
                      {project.location} • {project.filterCategory}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{project.title}</h3>
                  <p className="text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 mb-3 inline-block">
                    {project.architecture}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium">
                    {Object.values(project.metrics)[0]}
                  </div>

                  {project.url && project.url !== "" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="rounded-full text-xs font-medium border-slate-200 bg-white"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1" /> Live Site
                      </a>
                    </Button>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                      Production Active
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
