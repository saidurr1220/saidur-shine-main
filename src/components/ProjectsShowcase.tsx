import React, { useState } from "react";
import {
  ExternalLink,
  Workflow,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
  ArrowRight,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projectsData";

const filterCategories = [
  "All Projects",
  "WooCommerce",
  "Booking & Dynamic Pricing",
  "Membership & LMS",
  "Lead CRM & SaaS",
  "Workflow Automation",
];

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.filterCategory === selectedCategory);

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-slate-950 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Production Case Studies</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured WordPress Production Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Custom plugins, bespoke themes, WooCommerce platforms, and dynamic pricing engines built for scale, performance, and business impact.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterCategories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/25 border-emerald-400"
                    : "bg-slate-900/80 border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-white"
                }`}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isWorkflowOpen = activeWorkflowId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="h-full"
                >
                  <Card className="group relative overflow-hidden bg-slate-900/85 backdrop-blur-xl border-slate-800/90 hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 flex flex-col justify-between h-full rounded-3xl">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                      {/* Header info */}
                      <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-gradient-to-br from-emerald-500/5 via-slate-900/50 to-transparent">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap mb-2.5">
                              {project.highlightBadge && (
                                <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-[11px] font-mono px-2.5 py-0.5 font-semibold">
                                  {project.highlightBadge}
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-[11px] font-mono text-slate-400 border-slate-800">
                                {project.location}
                              </Badge>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight leading-snug">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs font-mono text-emerald-400/90 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 mb-3 inline-block">
                          {project.architecture}
                        </p>

                        <p className="text-sm text-slate-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Problem, Solution, Impact Details */}
                      <div className="p-6 sm:p-7 space-y-4">
                        <div className="space-y-3">
                          {/* The Challenge */}
                          <div className="rounded-2xl bg-rose-500/5 border border-rose-500/15 p-4">
                            <h4 className="text-xs font-bold text-rose-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                              The Challenge
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          {/* Engineered Solution */}
                          <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/15 p-4">
                            <h4 className="text-xs font-bold text-emerald-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              Engineered Solution
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                              {project.solution}
                            </p>
                          </div>

                          {/* Measurable Impact */}
                          <div className="rounded-2xl bg-teal-500/5 border border-teal-500/15 p-4">
                            <h4 className="text-xs font-bold text-teal-300 mb-1.5 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                              Measurable Impact
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                              {project.impact}
                            </p>
                          </div>
                        </div>

                        {/* Interactive System Flow Expandable Drawer */}
                        {project.workflowSteps && (
                          <div className="pt-2">
                            <button
                              onClick={() =>
                                setActiveWorkflowId(
                                  isWorkflowOpen ? null : project.id
                                )
                              }
                              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-xs font-medium text-white transition-all duration-200"
                            >
                              <span className="flex items-center gap-2 text-emerald-400 font-semibold font-mono">
                                <Workflow className="w-3.5 h-3.5" />
                                {isWorkflowOpen ? "Hide System Flow" : "Inspect System Architecture & Request Pipeline"}
                              </span>
                              <span className="text-[11px] text-slate-400 font-mono">
                                {isWorkflowOpen ? "? Collapse" : "? Expand (4 Steps)"}
                              </span>
                            </button>

                            <AnimatePresence>
                              {isWorkflowOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-3 space-y-2.5 bg-slate-950 p-4 rounded-2xl border border-emerald-500/25">
                                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                                      Data & Request Lifecycle
                                    </p>
                                    <div className="grid gap-2">
                                      {project.workflowSteps.map((wf, idx) => (
                                        <div
                                          key={idx}
                                          className="text-xs rounded-xl p-3 bg-slate-900/90 border border-slate-800 flex items-start gap-2.5"
                                        >
                                          <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                            {idx + 1}
                                          </div>
                                          <div>
                                            <span className="font-semibold text-white">
                                              {wf.step}:
                                            </span>{" "}
                                            <span className="text-slate-300">
                                              {wf.detail}
                                            </span>
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

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-slate-800">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="text-center bg-slate-950/80 rounded-2xl p-2.5 border border-slate-800/80"
                            >
                              <div className="text-xs sm:text-sm font-bold text-emerald-400 truncate" title={value}>
                                {value}
                              </div>
                              <div className="text-[10px] text-slate-400 capitalize truncate font-mono">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tag Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-[11px] font-mono bg-slate-950/80 border-slate-800 text-slate-300 hover:border-emerald-500/40 transition-colors py-0.5 px-2"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80 mt-4 flex gap-2">
                      {project.url && project.url !== "" ? (
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20 h-10 rounded-xl"
                        >
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Website
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          size="sm"
                          disabled
                          className="flex-1 opacity-70 text-xs h-10 rounded-xl bg-slate-800 text-slate-400"
                        >
                          <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                          Enterprise System (Internal)
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
