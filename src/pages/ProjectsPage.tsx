import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { NavbarApple } from "@/components/NavbarApple";
import { FooterApple } from "@/components/FooterApple";
import { WhatsAppChatButton } from "@/components/WhatsAppChatButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = [
  "All",
  "WordPress",
  "WooCommerce",
  "Custom Systems",
  "FinTech & Trading",
];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "WordPress") return project.category === "WordPress";
    if (selectedFilter === "WooCommerce")
      return project.filterCategory === "WooCommerce";
    if (selectedFilter === "Custom Systems")
      return (
        project.category === "FinTech & Trading" ||
        project.filterCategory === "Workflow Automation" ||
        project.filterCategory === "Lead CRM & SaaS" ||
        project.filterCategory === "Booking & Dynamic Pricing"
      );
    if (selectedFilter === "FinTech & Trading")
      return project.category === "FinTech & Trading";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0b101b] text-white selection:bg-emerald-500/20 selection:text-emerald-300">
      <ScrollProgress />
      <NavbarApple />

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 relative">
        {/* Background ambient radial neon emerald glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-[5%] w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Back to Home Button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              asChild
              className="rounded-full text-xs text-slate-300 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 h-9 px-4 inline-flex items-center gap-2"
            >
              <Link to="/">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>

          {/* Section Header */}
          <div className="space-y-4 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0e2a22] border border-[#10b981]/30 rounded-full text-xs text-[#34d399] font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>PORTFOLIO &amp; PRODUCTION CASE STUDIES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              All Projects &amp; <span className="text-[#10b981]">Custom Systems.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Explore custom WordPress plugins, WooCommerce enterprise engines, dynamic
              pricing &amp; booking algorithms, and low-latency financial systems engineered
              with clean code and reliability.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`text-xs px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                    selectedFilter === category
                      ? "bg-[#10b981] text-slate-950 font-bold shadow-md shadow-emerald-950/20"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {category}
                  {category === "All" && ` (${projectsData.length})`}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#10b981]/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-emerald-950/20"
              >
                {/* Project Screenshot Thumbnail */}
                <div className="relative aspect-[16/10] bg-slate-950/60 overflow-hidden border-b border-white/5">
                  {project.screenshot ? (
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-slate-950">
                      <Layers className="w-8 h-8 text-[#10b981] mb-2 opacity-80" />
                      <span className="text-xs font-mono text-slate-400">
                        {project.architecture}
                      </span>
                    </div>
                  )}

                  {/* Badge Overlay */}
                  {project.highlightBadge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0e2a22]/90 text-[#34d399] border border-[#10b981]/40 backdrop-blur-md shadow-sm">
                        {project.highlightBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono text-[#10b981] font-semibold uppercase">
                        {project.filterCategory}
                      </span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#34d399] transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="bg-[#10b981] hover:bg-[#059669] text-slate-950 font-bold rounded-full text-xs h-9 px-4 shadow-sm inline-flex items-center gap-1.5"
                    >
                      <Link to={`/project/${project.id}`}>
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>

                    {project.url && project.url !== "" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <FooterApple />
      <WhatsAppChatButton />
    </div>
  );
}
