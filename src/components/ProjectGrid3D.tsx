import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Eye,
  Box,
  Cpu,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { projects3d, Project3D } from "@/data/projects3d";

const categories = [
  "All Work",
  "Character Design",
  "Environment Art",
  "Product Visualization",
  "Motion Graphics",
  "Personal Projects",
];

export function ProjectGrid3D() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [cardLookdevMode, setCardLookdevMode] = useState<Record<string, "lit" | "clay" | "wireframe">>({});

  const filteredProjects =
    activeCategory === "All Work"
      ? projects3d
      : projects3d.filter((p) => p.category === activeCategory);

  const toggleCardMode = (projectId: string, mode: "lit" | "clay" | "wireframe", e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCardLookdevMode((prev) => ({ ...prev, [projectId]: mode }));
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated 3D & Animation Portfolio</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Featured 3D Projects & Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            High-poly sculpting, quad topology, PBR texturing, real-time environment assembly, and kinetic motion simulations.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 font-semibold"
                    : "bg-gray-900/80 border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const currentMode = cardLookdevMode[project.id] || "lit";
              const currentImage =
                currentMode === "wireframe"
                  ? project.wireframeImage
                  : currentMode === "clay"
                  ? project.clayImage
                  : project.heroImage;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link
                    to={`/project/${project.id}`}
                    className="block group h-full"
                    onMouseEnter={() => setHoveredProjectId(project.id)}
                    onMouseLeave={() => setHoveredProjectId(null)}
                  >
                    <Card className="h-full bg-gray-900/75 backdrop-blur-md border-border/80 hover:border-primary/60 transition-all duration-300 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group">
                      <div>
                        {/* Image Thumbnail Container with Interactive Lookdev Switcher */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
                          <img
                            src={currentImage}
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />

                          {/* Polycount & Category Top Tags */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                            <Badge className="bg-gray-950/80 backdrop-blur-md border-border/80 text-foreground text-[11px] font-mono">
                              {project.category}
                            </Badge>
                            <Badge className="bg-primary/20 backdrop-blur-md border-primary/40 text-primary text-[11px] font-mono font-bold">
                              {project.highlightStat}
                            </Badge>
                          </div>

                          {/* Quick Lookdev Switcher on Card (Lit / Clay / Wire) */}
                          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 bg-gray-950/85 backdrop-blur-md p-1 rounded-xl border border-border/70">
                            <button
                              onClick={(e) => toggleCardMode(project.id, "lit", e)}
                              className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-colors ${
                                currentMode === "lit"
                                  ? "bg-primary text-primary-foreground font-bold"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                              title="Full Lit Render"
                            >
                              Lit
                            </button>
                            <button
                              onClick={(e) => toggleCardMode(project.id, "clay", e)}
                              className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-colors ${
                                currentMode === "clay"
                                  ? "bg-primary text-primary-foreground font-bold"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                              title="Clay Neutral Sculpt"
                            >
                              Clay
                            </button>
                            <button
                              onClick={(e) => toggleCardMode(project.id, "wireframe", e)}
                              className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-colors ${
                                currentMode === "wireframe"
                                  ? "bg-primary text-primary-foreground font-bold"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                              title="Wireframe Mesh"
                            >
                              Wire
                            </button>
                          </div>

                          {/* View Case Study Hover Prompt */}
                          <div className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight mb-2 flex items-start justify-between gap-2">
                            <span>{project.title}</span>
                          </h3>

                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                            {project.summary}
                          </p>

                          {/* Software Icons Badges */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.software.map((s) => (
                              <span
                                key={s.name}
                                className="text-[11px] font-mono bg-gray-950/80 text-muted-foreground px-2 py-0.5 rounded-md border border-border/70"
                              >
                                {s.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Info */}
                      <div className="px-6 py-3.5 border-t border-border/60 bg-gray-950/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
                        <span>{project.polycount}</span>
                        <span className="text-primary group-hover:underline flex items-center gap-1 font-semibold">
                          Inspect 3D Breakdown ?
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
