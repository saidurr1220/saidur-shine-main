import React from "react";
import { X, Play, Film, Clock, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  if (!isOpen) return null;

  const featuredProjects = [
    { time: "0:00", title: "Kage Cyber Samurai - ZBrush Sculpt & Armor Lookdev", category: "Character" },
    { time: "0:24", title: "Sector 7 Neon Alleyway - Unreal Engine 5 Lumen Lighting", category: "Environment" },
    { time: "0:48", title: "Aero Chrono Timepiece - Redshift Sub-D Macro Shots", category: "Product Viz" },
    { time: "1:12", title: "Quantum Nexus - Houdini Vellum Particle FX", category: "Motion FX" },
    { time: "1:35", title: "Deep Abyss Diorama - Subsurface Scattering Study", category: "Lookdev" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-gray-950/95 border border-border/90 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/80 bg-gray-900/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <span>2025 ? 2026 3D Animation & VFX Showreel</span>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[10px] font-mono">
                    4K 60FPS
                  </Badge>
                </h3>
                <p className="text-xs text-muted-foreground font-mono">
                  Character Sculpting ? Real-time Environments ? Product Lookdev ? Houdini FX
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-900 border border-border/80 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Close Showreel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Screen */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
            {/* Embedded Responsive High-Def Video Player */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1&rel=0&loop=1"
              title="3D Artist Showreel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Chapters & Featured Breakdown Footer */}
          <div className="p-6 bg-gray-900/40 border-t border-border/80 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Featured Projects & Timestamp Index
              </h4>
              <span className="text-[11px] font-mono text-muted-foreground">Total Duration: 2m 04s</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {featuredProjects.map((p, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-gray-950/80 border border-border/60 hover:border-primary/50 transition-all flex items-start gap-2.5 group"
                >
                  <span className="text-xs font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5">
                    {p.time}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {p.title}
                    </p>
                    <span className="text-[10px] text-muted-foreground font-mono">{p.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
