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
  Play,
  Pause,
  Code2,
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
    }, 7000);
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
            <span>Featured Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            WordPress Production Case Studies
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Real client platforms engineered for high conversion, real-time dynamic pricing, and 100% upgrade safety.
          </p>

          {/* Controls Bar: Clean Category Pills & Mode Switcher */}
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
                Carousel
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

        {/* 1. CAROUSEL VIEW MODE */}
        {viewMode === "carousel" && currentProject && (
          <div className="relative">
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="apple-card p-6 sm:p-9 bg-white border border-slate-200">
                    {/* Top Metadata Header with Responsive Counter */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                            {currentProject.highlightBadge}
                          </span>
                          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                            {currentProject.location}
                          </span>
                          <span className="text-xs text-slate-500">
                            • {currentProject.filterCategory}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                          {currentProject.title}
                        </h3>
                      </div>

                      {/* FIXED NON-WRAPPING PROJECT COUNTER */}
                      <div className="flex-shrink-0 self-start sm:self-center">
                        <div className="whitespace-nowrap inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200/70">
                          <span className="font-bold text-slate-900">{currentIndex + 1}</span>
                          <span className="text-slate-400">of</span>
                          <span className="font-semibold text-slate-900">{filteredProjects.length}</span>
                          <span className="text-slate-500 text-[11px] ml-0.5">Projects</span>
                        </div>
                      </div>
                    </div>

                    {/* Architecture Tag */}
                    <div className="mb-5">
                      <span className="text-xs font-mono text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 inline-flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                        {currentProject.architecture}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {currentProject.description}
                    </p>

                    {/* 3 Refined Apple Case Study Columns (Subtle Tints) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
                      {/* Challenge */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          The Challenge
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {currentProject.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Engineered Solution
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {currentProject.solution}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Measurable Impact
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {currentProject.impact}
                        </p>
                      </div>
                    </div>

                    {/* System Flow Drawer */}
                    {currentProject.workflowSteps && (
                      <div className="mb-6">
                        <button
                          onClick={() =>
                            setActiveWorkflowId(
                              activeWorkflowId === currentProject.id ? null : currentProject.id
                            )
                          }
                          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 transition-colors"
                        >
                          <span className="flex items-center gap-2 text-slate-900 font-semibold">
                            <Workflow className="w-4 h-4 text-emerald-600" />
                            {activeWorkflowId === currentProject.id
                              ? "Hide System Architecture"
                              : "Inspect 4-Step System Architecture & Data Pipeline"}
                          </span>
                          <span className="text-slate-500 font-mono text-[11px]">
                            {activeWorkflowId === currentProject.id ? "▲ Close" : "▼ View"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {activeWorkflowId === currentProject.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 p-4 rounded-2xl bg-slate-900 text-white space-y-2.5">
                                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Data & Request Pipeline
                                </p>
                                <div className="grid sm:grid-cols-2 gap-2.5">
                                  {currentProject.workflowSteps.map((wf, idx) => (
                                    <div
                                      key={idx}
                                      className="p-3 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-2.5"
                                    >
                                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {idx + 1}
                                      </div>
                                      <div>
                                        <p className="text-xs font-bold text-white mb-0.5">{wf.step}</p>
                                        <p className="text-xs text-slate-300 leading-relaxed">{wf.detail}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-3 mb-6 pt-4 border-t border-slate-100">
                      {Object.entries(currentProject.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="p-2.5 bg-slate-50 rounded-xl text-center border border-slate-100"
                        >
                          <div className="text-xs sm:text-sm font-bold text-slate-900 truncate" title={value}>
                            {value}
                          </div>
                          <div className="text-[10px] text-slate-500 capitalize mt-0.5 truncate">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1">
                        {currentProject.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {currentProject.url && currentProject.url !== "" ? (
                        <Button
                          size="sm"
                          asChild
                          className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 rounded-full shadow-sm h-9 text-xs"
                        >
                          <a
                            href={currentProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Visit Live Website
                          </a>
                        </Button>
                      ) : (
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Internal Platform
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next / Prev Controls & Pagination */}
            <div className="flex items-center justify-between max-w-4xl mx-auto mt-5 px-2">
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
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                      {project.highlightBadge}
                    </span>
                    <span className="text-xs text-slate-500">
                      {project.location} • {project.filterCategory}
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
