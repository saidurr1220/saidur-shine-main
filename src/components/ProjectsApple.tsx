import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Workflow,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
  LayoutGrid,
  SlidersHorizontal,
  Code2,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projectsData";

const categories = [
  "All Projects",
  "WooCommerce",
  "Booking & Dynamic Pricing",
  "Membership & LMS",
  "Lead CRM & SaaS",
  "Workflow Automation",
];

export function ProjectsApple() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.filterCategory === selectedCategory);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (!isAutoPlaying || viewMode !== "carousel" || filteredProjects.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, viewMode, filteredProjects.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section id="projects" className="py-28 px-4 apple-canvas border-t border-black/[0.04]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Production Case Studies & Visual Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Featured WordPress Case Studies
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Real production builds with live platform previews, engineered for conversion, real-time dynamic pricing, and 100% upgrade safety.
          </p>

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-200/60">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white font-semibold shadow-sm"
                      : "bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-slate-200 shadow-sm text-xs">
              <button
                onClick={() => setViewMode("carousel")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all ${
                  viewMode === "carousel"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <SlidersHorizontal className="w-3 h-3" />
                Showcase
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                Grid
              </button>
            </div>
          </div>
        </motion.div>

        {/* 1. APPLE-STYLE SPLIT SHOWCASE CAROUSEL */}
        {viewMode === "carousel" && currentProject && (
          <div className="relative">
            <div className="relative max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="apple-card p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                      
                      {/* LEFT COLUMN: Project Details & Engineered Architecture (6 Cols) */}
                      <div className="lg:col-span-6 space-y-5">
                        {/* Header Badges & Fixed Counter */}
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                              {currentProject.highlightBadge}
                            </span>
                            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                              {currentProject.location}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              ? {currentProject.filterCategory}
                            </span>
                          </div>

                          {/* Fixed Non-Wrapping Counter */}
                          <div className="whitespace-nowrap inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200/70">
                            <span className="font-bold text-slate-900">{currentIndex + 1}</span>
                            <span className="text-slate-400">of</span>
                            <span className="font-semibold text-slate-900">{filteredProjects.length}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                            {currentProject.title}
                          </h3>
                          <p className="text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 inline-flex items-center gap-1.5 mt-2.5">
                            <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                            {currentProject.architecture}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {currentProject.description}
                        </p>

                        {/* 3 Apple Pillar Cards */}
                        <div className="space-y-2.5">
                          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                              The Challenge
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {currentProject.problem}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                              Engineered Solution
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {currentProject.solution}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Measurable Impact
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {currentProject.impact}
                            </p>
                          </div>
                        </div>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          {Object.entries(currentProject.metrics).map(([key, value]) => (
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
                          {currentProject.url && currentProject.url !== "" ? (
                            <Button
                              size="sm"
                              asChild
                              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 rounded-full shadow-sm h-10 text-xs"
                            >
                              <a
                                href={currentProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-1.5 h-3.5 w-3.5 text-emerald-400" />
                                Visit Live Website
                              </a>
                            </Button>
                          ) : (
                            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Internal System
                            </span>
                          )}

                          {currentProject.workflowSteps && (
                            <button
                              onClick={() =>
                                setActiveWorkflowId(
                                  activeWorkflowId === currentProject.id ? null : currentProject.id
                                )
                              }
                              className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors"
                            >
                              <Workflow className="w-3.5 h-3.5 text-emerald-600" />
                              {activeWorkflowId === currentProject.id ? "Hide Pipeline" : "View Data Flow"}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Apple Glass Browser Mockup (6 Cols) */}
                      <div className="lg:col-span-6">
                        {currentProject.screenshot ? (
                          <div className="relative group">
                            {/* Browser Frame */}
                            <div className="rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-2xl transition-all duration-300 group-hover:border-emerald-500/40">
                              {/* macOS Window Titlebar */}
                              <div className="bg-slate-900/95 backdrop-blur-md px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-[11px] font-mono text-slate-300 border border-slate-700/80 max-w-[220px] truncate">
                                  <Globe className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                  <span className="truncate">
                                    {currentProject.url ? currentProject.url.replace("https://", "") : "internal-portal"}
                                  </span>
                                </div>
                                {currentProject.url && (
                                  <a
                                    href={currentProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors"
                                    title="Open Live Site"
                                  >
                                    <ArrowUpRight className="w-4 h-4" />
                                  </a>
                                )}
                              </div>

                              {/* Screenshot Preview with Smooth Aspect Ratio & Scroll Container */}
                              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                                <img
                                  src={currentProject.screenshot}
                                  alt={`${currentProject.title} live screenshot preview`}
                                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                  loading="lazy"
                                />
                                
                                {/* Overlay badge */}
                                {currentProject.url && (
                                  <a
                                    href={currentProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                  >
                                    <span>Open Live Site</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center space-y-3">
                            <ShieldCheck className="w-10 h-10 text-slate-400 mx-auto" />
                            <h4 className="font-bold text-slate-900 text-sm">Internal Enterprise Platform</h4>
                            <p className="text-xs text-slate-500 max-w-xs mx-auto">
                              Proprietary financial banking workflow and backend approval logic under NDA.
                            </p>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Expandable Architecture Drawer */}
                    {activeWorkflowId === currentProject.id && currentProject.workflowSteps && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-6 pt-6 border-t border-slate-100"
                      >
                        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-emerald-400" /> 4-Step System Architecture & Data Pipeline
                          </p>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {currentProject.workflowSteps.map((wf, idx) => (
                              <div
                                key={idx}
                                className="p-3 rounded-xl bg-white/[0.05] border border-white/10"
                              >
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center mb-1.5">
                                  {idx + 1}
                                </div>
                                <p className="text-xs font-bold text-white mb-0.5">{wf.step}</p>
                                <p className="text-[11px] text-slate-300 leading-relaxed">{wf.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next / Prev Controls & Pagination */}
            <div className="flex items-center justify-between max-w-6xl mx-auto mt-6 px-2">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm"
                  aria-label="Previous Case Study"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm"
                  aria-label="Next Case Study"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-xs text-slate-500 hover:text-slate-900 ml-2"
                >
                  {isAutoPlaying ? "Pause Auto-slide" : "Play Auto-slide"}
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {filteredProjects.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === dotIdx
                        ? "w-6 bg-slate-900"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. GRID VIEW MODE */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="apple-card p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {project.screenshot && (
                    <div className="mb-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-video max-h-56 group">
                      <img
                        src={project.screenshot}
                        alt={project.title}
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
                      {project.location} ? {project.filterCategory}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 mb-3 inline-block">
                    {project.architecture}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium">
                    {Object.values(project.metrics)[0]}
                  </div>

                  {project.url && (
                    <Button size="sm" asChild className="bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full text-xs h-8 px-4">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" /> Live Site
                      </a>
                    </Button>
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
