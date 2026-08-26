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
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export function ProjectsFresh() {
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
    }, 6000);
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
    <section id="projects" className="py-28 px-4 relative overflow-hidden bg-slate-50 border-t border-slate-200/80">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Production Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Featured WordPress Case Studies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore production builds engineered for high conversion, real-time dynamic pricing, and 100% upgrade safety.
          </p>

          {/* Controls Bar: Category Filter & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-200">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white font-semibold shadow-sm"
                      : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-emerald-500/50 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode & Autoplay Switcher */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setViewMode("carousel")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  viewMode === "carousel"
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Interactive Carousel"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Carousel
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  viewMode === "grid"
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Expanded Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Grid
              </button>
            </div>
          </div>
        </motion.div>

        {/* 1. CAROUSEL VIEW MODE */}
        {viewMode === "carousel" && currentProject && (
          <div className="relative">
            <div className="relative max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.97, x: 25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.97, x: -25 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="relative overflow-hidden bg-white border border-slate-200/90 rounded-3xl shadow-xl p-6 sm:p-10">
                    {/* Top Metadata Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap mb-2">
                          <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-xs font-mono font-bold px-3 py-1">
                            {currentProject.highlightBadge}
                          </Badge>
                          <Badge variant="outline" className="text-xs font-mono border-slate-200 text-slate-600">
                            {currentProject.location}
                          </Badge>
                          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200 font-medium">
                            {currentProject.filterCategory}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                          {currentProject.title}
                        </h3>
                      </div>

                      {/* Project Index Pill */}
                      <div className="flex items-center gap-2 self-start sm:self-center font-mono text-xs text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
                        <span className="text-emerald-700 font-bold">{currentIndex + 1}</span>
                        <span>/</span>
                        <span>{filteredProjects.length} Projects</span>
                      </div>
                    </div>

                    {/* Architecture Tag */}
                    <div className="mb-6">
                      <p className="text-xs font-mono text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 inline-flex items-center gap-2 font-medium">
                        <Code2 className="w-4 h-4 text-emerald-600" />
                        <span>{currentProject.architecture}</span>
                      </p>
                    </div>

                    <p className="text-base text-slate-600 leading-relaxed mb-8">
                      {currentProject.description}
                    </p>

                    {/* 3 Core Impact Cards: Challenge, Solution, Impact */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {/* Challenge */}
                      <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                        <h4 className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                          The Challenge
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {currentProject.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                        <h4 className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Engineered Solution
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {currentProject.solution}
                        </p>
                      </div>

                      {/* Measurable Impact */}
                      <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
                        <h4 className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                          Measurable Impact
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {currentProject.impact}
                        </p>
                      </div>
                    </div>

                    {/* Expandable System Architecture Drawer */}
                    {currentProject.workflowSteps && (
                      <div className="mb-8">
                        <button
                          onClick={() =>
                            setActiveWorkflowId(
                              activeWorkflowId === currentProject.id ? null : currentProject.id
                            )
                          }
                          className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-900 transition-all duration-200"
                        >
                          <span className="flex items-center gap-2 text-emerald-700 font-mono font-semibold">
                            <Workflow className="w-4 h-4 text-emerald-600" />
                            {activeWorkflowId === currentProject.id
                              ? "Hide System Architecture"
                              : "Inspect 4-Step System Architecture & Data Pipeline"}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {activeWorkflowId === currentProject.id ? "▲ Collapse" : "▼ Expand Pipeline"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {activeWorkflowId === currentProject.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
                                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Request & Data Pipeline Flow
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                  {currentProject.workflowSteps.map((wf, idx) => (
                                    <div
                                      key={idx}
                                      className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-3"
                                    >
                                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <div className="grid grid-cols-3 gap-3 mb-8 pt-4 border-t border-slate-100">
                      {Object.entries(currentProject.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center"
                        >
                          <div className="text-sm sm:text-base font-bold text-emerald-700 truncate" title={value}>
                            {value}
                          </div>
                          <div className="text-[10px] text-slate-500 capitalize font-mono mt-0.5 truncate">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags & Action Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5">
                        {currentProject.tags.slice(0, 6).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {currentProject.url && currentProject.url !== "" ? (
                        <Button
                          size="lg"
                          asChild
                          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 rounded-xl shadow-md shadow-emerald-600/20 h-11"
                        >
                          <a
                            href={currentProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Live Website
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          disabled
                          className="w-full sm:w-auto opacity-70 text-xs font-mono h-11 rounded-xl bg-slate-100 text-slate-500 border border-slate-200"
                        >
                          <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                          Enterprise System (Internal)
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Next / Prev Controls & Pagination */}
            <div className="flex items-center justify-between max-w-5xl mx-auto mt-6 px-2">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-2xl bg-white border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 shadow-sm"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleNext}
                  className="w-12 h-12 rounded-2xl bg-white border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 shadow-sm"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-xs font-mono text-slate-600 hover:text-slate-900 ml-2 rounded-xl"
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Auto-play ON
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 mr-1" /> Auto-play PAUSED
                    </>
                  )}
                </Button>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {filteredProjects.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === dotIdx
                        ? "w-8 bg-emerald-600 shadow-sm"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. EXPANDED GRID VIEW MODE */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-[11px] font-mono font-semibold">
                      {project.highlightBadge}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] font-mono border-slate-200 text-slate-600">
                      {project.location}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 mb-4 inline-block font-medium">
                    {project.architecture}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{project.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-xs font-mono text-slate-600 font-medium">
                    {Object.values(project.metrics)[0]}
                  </div>

                  {project.url && (
                    <Button size="sm" asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1" /> Visit Site
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
