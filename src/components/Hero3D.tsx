import React, { useState } from "react";
import { Play, Sparkles, Film, ArrowDown, ExternalLink, Box, Palette, Award, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Hero3DCanvas } from "./Hero3DCanvas";
import { ShowreelModal } from "./ShowreelModal";

export function Hero3D() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const softwareStack = [
    { name: "Blender", color: "text-amber-400 border-amber-400/30 bg-amber-400/10" },
    { name: "ZBrush", color: "text-zinc-200 border-zinc-400/30 bg-zinc-400/10" },
    { name: "Maya", color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10" },
    { name: "Houdini", color: "text-orange-400 border-orange-400/30 bg-orange-400/10" },
    { name: "Unreal Engine 5", color: "text-blue-400 border-blue-400/30 bg-blue-400/10" },
    { name: "Substance 3D", color: "text-rose-400 border-rose-400/30 bg-rose-400/10" },
    { name: "Octane / Redshift", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" },
  ];

  const scrollToWork = () => {
    const workSection = document.getElementById("projects");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4"
      >
        {/* Ambient Dark Studio Background Radial */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-60"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Hero Text & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Availability & Status Pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs font-mono text-primary shadow-sm shadow-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for Freelance & Studio Contracts
                </span>
                <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                  Dhaka ? Worldwide Remote
                </span>
              </div>

              {/* Title & Name Overlay */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]"
                >
                  Md. Saidur Rahman
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-3 flex items-center gap-2 flex-wrap"
                >
                  <span className="text-xl sm:text-2xl font-mono text-muted-foreground">
                    <span className="text-primary font-bold">3D Artist</span> ? Character Modeler ? Motion Designer
                  </span>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                Crafting game-ready 3D characters, photorealistic product visualization, immersive real-time environments, and procedural kinetic motion graphics for commercials, games, and film.
              </motion.p>

              {/* CTAs: Explore Work & Play Showreel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Button
                  size="lg"
                  onClick={() => setIsShowreelOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 rounded-2xl shadow-xl shadow-primary/25 hover:scale-[1.02] transition-transform flex items-center gap-2.5 h-12"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  Play 2025 Showreel
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToWork}
                  className="rounded-2xl border-border hover:border-primary/50 hover:bg-gray-900/60 text-foreground font-medium px-6 h-12 flex items-center gap-2"
                >
                  <Box className="w-4 h-4 text-primary" />
                  Explore 3D Work
                  <ArrowDown className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              {/* Software Tech Stack Badges */}
              <div className="pt-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-primary" />
                  Production Software Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {softwareStack.map((tech) => (
                    <Badge
                      key={tech.name}
                      variant="outline"
                      className={`text-xs font-mono py-1 px-2.5 rounded-lg border ${tech.color}`}
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/70 max-w-lg">
                <div className="p-3 bg-gray-900/70 border border-border/70 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">40+</div>
                  <div className="text-[10px] text-muted-foreground font-mono">3D Assets Delivered</div>
                </div>
                <div className="p-3 bg-gray-900/70 border border-border/70 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">12+</div>
                  <div className="text-[10px] text-muted-foreground font-mono">Commercial Projects</div>
                </div>
                <div className="p-3 bg-gray-900/70 border border-border/70 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">85K+</div>
                  <div className="text-[10px] text-muted-foreground font-mono">ArtStation Views</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Real-time 3D WebGL Viewport */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 h-[480px] lg:h-[620px] relative rounded-3xl overflow-hidden border border-border/90 bg-gray-950/80 shadow-2xl shadow-black/80"
            >
              <Hero3DCanvas />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showreel Cinema Modal */}
      <ShowreelModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />
    </>
  );
}
