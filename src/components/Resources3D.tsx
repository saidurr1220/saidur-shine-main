import React from "react";
import { Download, ExternalLink, BookOpen, Sparkles, Box, FileCode, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Resources3D() {
  const freebies = [
    {
      title: "Procedural PBR Metal & Carbon Fiber Kit",
      format: ".blend / .sbsar",
      size: "84 MB",
      desc: "12 fully procedural node groups for Blender Cycles and Substance with customizable scratches, anisotropy, and dust layers.",
      tag: "Free Shaders",
    },
    {
      title: "Hard Surface Sci-Fi Greeble & Bolt Pack",
      format: ".fbx / .obj / .blend",
      size: "145 MB",
      desc: "45 production-ready sub-d kitbash pieces for quick visual detailing on robots, mechs, and weapon concepts.",
      tag: "3D Kitbash",
    },
    {
      title: "Three-Point Studio HDRI & Softbox Rig",
      format: ".exr / .blend",
      size: "62 MB",
      desc: "Studio lighting setup calibrated for photorealistic automotive and consumer electronics product lookdev.",
      tag: "Lighting Rig",
    },
  ];

  const tutorials = [
    {
      title: "Mastering Sub-D Quad Topology in Maya & Blender",
      readTime: "8 min read",
      desc: "Guide to eliminating pinching on curved booleans and preserving crisp chamfers without unnecessary polygon density.",
      link: "#",
    },
    {
      title: "Real-Time Lumen Lighting Setup in Unreal Engine 5.4",
      readTime: "12 min read",
      desc: "Step-by-step breakdown of achieving cinematic contrast, screen-space reflections, and volumetric light shafts.",
      link: "#",
    },
    {
      title: "Baking Clean Normal Maps from ZBrush to Substance",
      readTime: "6 min read",
      desc: "Preventing seam artifacts, skewing on curved surfaces, and cage extrusion calibration best practices.",
      link: "#",
    },
  ];

  return (
    <section id="resources" className="py-24 px-4 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Community & Free 3D Assets</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Free 3D Resources & Tutorials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Free downloadable 3D assets, procedural node setups, and in-depth technique breakdowns to support the 3D creator community.
          </p>
        </div>

        {/* Free 3D Asset Downloads */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Box className="w-5 h-5 text-primary" />
            Free 3D Assets & Shaders
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freebies.map((item, idx) => (
              <Card
                key={idx}
                className="p-6 bg-gray-900/80 backdrop-blur-md border-border/80 hover:border-primary/50 transition-all rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge className="bg-primary/15 text-primary border-primary/30 text-[11px] font-mono">
                      {item.tag}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">{item.size}</span>
                  </div>

                  <h4 className="text-base font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">{item.format}</span>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-mono h-8 rounded-xl shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Download Free
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technique Breakdowns & Articles */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-primary" />
            Technical Tutorials & Pipeline Notes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tut, idx) => (
              <Card
                key={idx}
                className="p-6 bg-gray-900/70 backdrop-blur-md border-border/80 hover:border-primary/50 transition-all rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tut.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2 leading-snug">{tut.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{tut.desc}</p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <a
                    href={tut.link}
                    className="text-xs font-mono text-primary hover:underline flex items-center gap-1 font-semibold"
                  >
                    Read Technique Breakdown <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
