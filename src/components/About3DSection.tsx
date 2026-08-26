import React from "react";
import {
  Cpu,
  Monitor,
  HardDrive,
  Layers,
  Sparkles,
  Box,
  Palette,
  CheckCircle2,
  Workflow,
  Download,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function About3DSection() {
  const softwareProficiency = [
    { name: "Blender (Cycles & Eevee)", level: 95, category: "Modeling, Shading & Geometry Nodes" },
    { name: "ZBrush", level: 90, category: "High-Poly Organic & Hard-Surface Sculpting" },
    { name: "Maya", level: 88, category: "Retopology, UVs, Rigging & Animation" },
    { name: "Substance 3D Painter & Designer", level: 92, category: "PBR Material Authoring & Baking" },
    { name: "Unreal Engine 5 (Lumen / Nanite)", level: 85, category: "Real-time Lookdev & Sequencer" },
    { name: "Houdini", level: 80, category: "Procedural Simulations & Vellum FX" },
    { name: "Cinema 4D & Redshift / Octane", level: 86, category: "Motion Design & Product Visualization" },
    { name: "Marvelous Designer", level: 84, category: "Cloth Pattern Construction & Dynamics" },
  ];

  const hardwareSpecs = [
    { label: "Processor (CPU)", value: "AMD Ryzen 9 7950X (16 Cores, 32 Threads @ 5.7GHz)" },
    { label: "Graphics Card (GPU)", value: "NVIDIA GeForce RTX 4090 (24GB GDDR6X VRAM)" },
    { label: "Memory (RAM)", value: "128GB Corsair Vengeance DDR5-6000MHz" },
    { label: "Storage", value: "4TB Samsung 990 Pro PCIe 4.0 NVMe SSD" },
    { label: "Displays", value: "Dual ASUS ProArt 32-inch 4K HDR (100% sRGB / 98% DCI-P3)" },
    { label: "Drawing Tablet", value: "Wacom Cintiq Pro 27 4K Touch & Pro Pen 3" },
  ];

  const pipelineSteps = [
    { step: "01", title: "Concept & Moodboard", desc: "Silhouette exploration, visual references, and anatomy/mechanical research." },
    { step: "02", title: "Blockout & Proportions", desc: "Establishing primary masses, silhouette readability, and scale in 3D." },
    { step: "03", title: "High-Poly Sculpting", desc: "ZBrush organic detail sculpts, Marvelous cloth folds, and sub-d hard surfaces." },
    { step: "04", title: "Retopology & UVs", desc: "Deformation-optimized all-quad edge loops and non-distorted UDIM unwrapping." },
    { step: "05", title: "PBR Texturing & Baking", desc: "Normal/Curvature/AO map baking, procedural smart materials, and weathering." },
    { step: "06", title: "Rigging & Skinning", desc: "Anatomical bone hierarchies, IK/FK switchers, and corrective blendshapes." },
    { step: "07", title: "Lighting & Scene Staging", desc: "Three-point studio lighting, HDRIs, rim kickers, and volumetric depth." },
    { step: "08", title: "Rendering & Compositing", desc: "Multi-pass EXR rendering (Diffuse, Spec, Cryptomatte) and ACES color grading." },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-950/80 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artist Background & Technical Rig</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            About the 3D Artist & Studio Rig
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Bridging technical precision and artistic direction across character modeling, game asset optimization, and photorealistic lookdev.
          </p>
        </div>

        {/* Top Grid: Artist Bio & Workstation Rig */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Bio Column */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="p-6 sm:p-8 bg-gray-900/80 backdrop-blur-md border-border/80 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                <Box className="w-6 h-6 text-primary" />
                Md. Saidur Rahman
              </h3>
              <p className="text-sm font-mono text-primary mb-4">
                3D Artist ? Character Modeler ? Lookdev & Motion Designer
              </p>
              
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  I specialize in designing and engineering high-fidelity 3D characters, hard-surface props, and immersive real-time environments for video games, VFX, commercials, and virtual production.
                </p>
                <p>
                  With a solid foundation in computer science and digital sculpting, I obsess over clean topology, realistic PBR material response, and studio-grade cinematic lighting.
                </p>
                <p>
                  Whether sculpting 45-million polygon digital sculpts in ZBrush, creating game-ready LODs, or building procedural Vellum particle simulations in Houdini, I deliver production assets ready for engine integration.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-border/70 text-center">
                <div className="p-3 bg-gray-950/80 rounded-xl border border-border/60">
                  <div className="text-2xl font-bold text-primary">4+ Years</div>
                  <div className="text-[11px] text-muted-foreground font-mono">3D Experience</div>
                </div>
                <div className="p-3 bg-gray-950/80 rounded-xl border border-border/60">
                  <div className="text-2xl font-bold text-primary">40+ Assets</div>
                  <div className="text-[11px] text-muted-foreground font-mono">Shipped to Engine</div>
                </div>
                <div className="p-3 bg-gray-950/80 rounded-xl border border-border/60 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-[11px] text-muted-foreground font-mono">Sub-D Clean Topology</div>
                </div>
              </div>
            </Card>

            {/* Currently Exploring Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-gray-900/80 to-gray-900/90 border border-primary/30 rounded-3xl">
              <h4 className="text-sm font-mono uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Currently Researching & Exploring (2025/2026)
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>3D Gaussian Splatting & Neural Radiance Field integration into Blender/UE5</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unreal Engine 5.5 Nanite Skeletal Meshes and Substrate Materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Procedural Geometry Nodes workflows for dynamic cinematic environments</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Workstation Hardware Specs (Crucial for 3D Artists!) */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="p-6 sm:p-8 bg-gray-900/80 backdrop-blur-md border-border/80 rounded-3xl shadow-lg">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Production Workstation Hardware</h3>
                    <p className="text-xs text-muted-foreground font-mono">High-throughput GPU rendering & simulation rig</p>
                  </div>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[10px] font-mono">
                  RTX 4090 24GB
                </Badge>
              </div>

              <div className="space-y-3">
                {hardwareSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3 rounded-xl bg-gray-950/80 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                  >
                    <span className="font-mono text-muted-foreground font-semibold">{spec.label}</span>
                    <span className="text-foreground font-medium font-mono text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/70 text-xs text-muted-foreground flex items-center justify-between">
                <span>Color Managed with ACEScg Workflow</span>
                <span className="text-emerald-400 font-mono">Zero Bottleneck Render Speed</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Software Proficiency Matrix */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Palette className="w-5 h-5 text-primary" />
            Software Proficiency Matrix
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softwareProficiency.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-2xl bg-gray-900/70 border border-border/80 flex flex-col justify-between gap-2"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-foreground">{tool.name}</span>
                  <span className="font-mono text-primary font-bold">{tool.level}%</span>
                </div>

                <div className="w-full h-2 bg-gray-950 rounded-full overflow-hidden border border-border/50">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>

                <p className="text-[11px] text-muted-foreground font-mono">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8-Step 3D Production Pipeline */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
            <Workflow className="w-5 h-5 text-primary" />
            8-Step Production Pipeline
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-gray-900/60 border border-border/70 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-mono text-sm font-bold flex items-center justify-center mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-1.5">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
