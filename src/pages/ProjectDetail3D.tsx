import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Box, Sparkles, Layers, Eye, Film, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Navigation3D } from "@/components/Navigation3D";
import { Footer3D } from "@/components/Footer3D";
import { TurntableViewer3D } from "@/components/TurntableViewer3D";
import { projects3d, Project3D } from "@/data/projects3d";

const ProjectDetail3D = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects3d.find((p) => p.id === id) || projects3d[0];
  const [activeLookdevShader, setActiveLookdevShader] = useState<"lit" | "clay" | "wireframe">("lit");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentDisplayImage =
    activeLookdevShader === "wireframe"
      ? project.wireframeImage
      : activeLookdevShader === "clay"
      ? project.clayImage
      : project.heroImage;

  return (
    <div className="min-h-screen bg-gray-950 text-foreground selection:bg-primary/30 selection:text-primary">
      <Navigation3D />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button & Breadcrumbs */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Button variant="ghost" asChild className="rounded-xl text-xs font-mono text-muted-foreground hover:text-foreground">
              <Link to="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to 3D Showcase
              </Link>
            </Button>
            <Badge className="bg-primary/10 text-primary border-primary/30 text-xs font-mono">
              {project.category} ? {project.year}
            </Badge>
          </div>

          {/* Project Title Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.summary}
            </p>

            {/* Meta Tags: Client, Roles, Software */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 p-5 rounded-3xl bg-gray-900/80 border border-border/80">
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase block mb-1">Client / Purpose</span>
                <span className="text-sm font-semibold text-foreground">{project.client || "Personal Lookdev Showcase"}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase block mb-1">Polycount & Mesh</span>
                <span className="text-sm font-mono text-primary font-bold">{project.polycount}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase block mb-1">Texture Maps</span>
                <span className="text-sm font-mono text-foreground">{project.textures}</span>
              </div>
            </div>

            {/* Software Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.software.map((s) => (
                <Badge key={s.name} variant="outline" className="text-xs font-mono border-border/80 bg-gray-950 py-1 px-3">
                  {s.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Lookdev Interactive Shader Viewport (Lit vs Clay vs Wireframe) */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Multi-Pass Lookdev Inspector
              </h3>

              {/* Lookdev Mode Switcher */}
              <div className="flex items-center gap-1.5 bg-gray-900 p-1 rounded-xl border border-border/80">
                <button
                  onClick={() => setActiveLookdevShader("lit")}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    activeLookdevShader === "lit"
                      ? "bg-primary text-primary-foreground font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Full PBR Lit
                </button>
                <button
                  onClick={() => setActiveLookdevShader("clay")}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    activeLookdevShader === "clay"
                      ? "bg-primary text-primary-foreground font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Clay Sculpt
                </button>
                <button
                  onClick={() => setActiveLookdevShader("wireframe")}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    activeLookdevShader === "wireframe"
                      ? "bg-primary text-primary-foreground font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Wireframe Topology
                </button>
              </div>
            </div>

            {/* Lookdev Display Screen */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-border/80 bg-gray-950 shadow-2xl">
              <img
                src={currentDisplayImage}
                alt={`${project.title} - ${activeLookdevShader}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-gray-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono text-primary border border-border/70">
                Active Pass: {activeLookdevShader.toUpperCase()} SHADER ? 4K RENDER
              </div>
            </div>
          </div>

          {/* Interactive 3D Turntable Component */}
          <div className="mb-14">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Box className="w-5 h-5 text-primary" />
              Real-time WebGL 3D Turntable
            </h3>
            <TurntableViewer3D
              modelType={project.id.includes("watch") ? "watch" : project.id.includes("samurai") ? "samurai" : "default"}
              title={`${project.title} - Real-time 3D Mesh Inspection`}
            />
          </div>

          {/* Project Overview & Roles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-8 space-y-6">
              <Card className="p-6 sm:p-8 bg-gray-900/80 backdrop-blur-md border-border/80 rounded-3xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Project Overview & Technical Approach</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <h4 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">Concept & Moodboard Intent</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.conceptText}
                </p>
              </Card>
            </div>

            <div className="md:col-span-4 space-y-6">
              <Card className="p-6 bg-gray-900/80 backdrop-blur-md border-border/80 rounded-3xl">
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-4">Artist Responsibilities</h4>
                <ul className="space-y-2.5">
                  {project.roles.map((role) => (
                    <li key={role} className="text-xs sm:text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Work in Progress Shots (Clay, Wireframe, Lighting tests) */}
          <div className="mb-14">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Work in Progress & Pipeline Stages
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.wipShots.map((wip, idx) => (
                <Card key={idx} className="overflow-hidden bg-gray-900/70 border-border/80 rounded-3xl group">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-950 relative">
                    <img
                      src={wip.image}
                      alt={wip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-gray-950/80 text-primary text-[10px] font-mono uppercase">
                      {wip.type}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm font-bold text-foreground mb-1">{wip.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{wip.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Final Renders Gallery (Multiple Angles) */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Final 4K Production Renders
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.finalRenders.map((render, idx) => (
                <Card key={idx} className="overflow-hidden bg-gray-900/70 border-border/80 rounded-3xl group">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-950 relative">
                    <img
                      src={render.image}
                      alt={render.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between text-xs">
                    <span className="font-bold text-foreground">{render.title}</span>
                    <span className="text-[11px] font-mono text-muted-foreground">{render.angle}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/15 via-gray-900/90 to-gray-950 border border-primary/30 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              Commission Similar 3D Assets or Lookdev
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6">
              Available for game-ready character sculpting, product visualization, and cinematic environment lookdev.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-2xl shadow-xl">
              <a href="/#contact">Initiate Project Inquiry</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer3D />
    </div>
  );
};

export default ProjectDetail3D;
