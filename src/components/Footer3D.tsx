import React from "react";
import { Box, Mail, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer3D() {
  const links = [
    { name: "ArtStation", url: "https://www.artstation.com" },
    { name: "Behance", url: "https://www.behance.net" },
    { name: "Instagram", url: "https://www.instagram.com" },
    { name: "Discord", url: "https://discord.com" },
    { name: "GitHub", url: "https://github.com/saidurr1220" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rahmansaidur" },
  ];

  return (
    <footer className="border-t border-border/80 bg-gray-950 py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center font-mono font-bold text-gray-950 text-sm">
                3D
              </div>
              <h3 className="text-lg font-bold text-foreground">Md. Saidur Rahman</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              3D Artist, Character Modeler & Motion Designer specializing in sub-d hard surfaces, clean quad topology, PBR material lookdev, and real-time Unreal Engine rendering.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Studio & Freelance Contracts</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-primary mb-4 font-bold">
              3D Portfolios & Socials
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.name} <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
              Production Capabilities
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              ZBrush Organic Sculpting ? Maya Quad Retopology ? Blender Cycles & Eevee ? Substance 3D PBR Texturing ? Unreal Engine 5 Lumen Lighting ? Houdini Vellum FX ? Cinema 4D Redshift / Octane Lookdev
            </p>
            <div className="pt-2 text-xs font-mono text-muted-foreground">
              Direct Contact: <a href="mailto:saidurr1256@gmail.com" className="text-primary hover:underline">saidurr1256@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <p>? {new Date().getFullYear()} Md. Saidur Rahman. Built with Three.js & Framer Motion.</p>
          <div className="flex items-center gap-4">
            <span>Dhaka, Bangladesh</span>
            <span>?</span>
            <span>Rendered in 4K HDR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
