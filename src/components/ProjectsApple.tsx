import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { appleEase } from "@/lib/motion";

const projectCategories = [
  "All",
  "WordPress",
  "E-commerce",
  "Custom Systems",
];

const ProjectGridCard = React.forwardRef<HTMLDivElement, { project: ProjectItem }>(
  ({ project }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const rotateX = useSpring(useMotionValue(0), { stiffness: 260, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 260, damping: 20 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) or (pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-((y - centerY) / centerY) * 5);
    rotateY.set(((x - centerX) / centerX) * 5);
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: appleEase }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={
          !isTouch && !shouldReduce
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 space-y-5 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:border-slate-300 relative"
      >
        {/* Glare overlay on hover */}
        {!isTouch && !shouldReduce && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(16, 185, 129, 0.08) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 70%)`,
            }}
          />
        )}

        <div className="space-y-4 relative z-10">
          {/* Standardized 16/10 Image Preview with subtle zoom on hover */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[16/10]">
            <img
              src={project.screenshot || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={375}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>

          <div>
            <span className="text-[10px] font-mono font-bold text-[#087f5b] tracking-wider uppercase block mb-1">
              {project.id === "vault-labs-research"
                ? "WOOCOMMERCE"
                : project.id === "onroute-couriers"
                ? "BOOKING & DYNAMIC PRICING"
                : project.filterCategory.toUpperCase()}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
              {project.title}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Tags (3-4 items) with stagger lift on hover */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.tags.slice(0, 4).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-mono text-slate-700 transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{ transitionDelay: `${tIdx * 30}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-3 flex items-center justify-between border-t border-slate-100 text-xs relative z-10">
          <Link
            to={`/project/${project.id}`}
            className="font-bold text-[#087f5b] hover:text-[#05513a] flex items-center gap-1.5 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors font-medium"
              title="Open Live Site"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
});
ProjectGridCard.displayName = "ProjectGridCard";

export function ProjectsApple() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) or (pointer: coarse)").matches);
  }, []);

  // Scroll-linked 3D entrance for featured card (Mirror Control)
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "center center"],
  });

  const featuredRotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const featuredScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  // Map category filter to projectsData
  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "WordPress") {
      return (
        p.category === "WordPress" ||
        p.tags.includes("WordPress") ||
        p.tags.includes("WooCommerce")
      );
    }
    if (selectedFilter === "E-commerce") {
      return (
        p.filterCategory === "WooCommerce" ||
        p.category === "E-commerce" ||
        p.tags.includes("WooCommerce")
      );
    }
    if (selectedFilter === "Custom Systems") {
      return (
        p.category === "FinTech & Trading" ||
        p.filterCategory === "Workflow Automation" ||
        p.filterCategory === "Lead CRM & SaaS" ||
        p.filterCategory === "Custom Systems" ||
        p.id === "xo-sweden-boat-configurator"
      );
    }
    return true;
  });

  // Trade Mirror is featured hero ONLY if it matches the active filter (All or Custom Systems)
  const isTradeMirrorFeatured = filteredProjects.some(
    (p) => p.id === "bybit-bitget-mirror-engine"
  );
  const featured = isTradeMirrorFeatured
    ? filteredProjects.find((p) => p.id === "bybit-bitget-mirror-engine")
    : null;

  const otherProjects = featured
    ? filteredProjects.filter((p) => p.id !== featured.id)
    : filteredProjects;

  // In "All" view with Trade Mirror on top, show first 4 other projects (or all if showAll)
  // When filtering by specific category (WordPress, E-commerce, Custom Systems), show all matching projects directly
  const displayedProjects =
    showAll || selectedFilter !== "All"
      ? otherProjects
      : otherProjects.slice(0, 4);

  return (
    <section id="projects" data-dark="true" className="py-24 px-4 sm:px-6 bg-[#0b101b] text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#10b981] uppercase block mb-1">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected work.
            </h2>
          </div>

          {/* Filter Pills with horizontal scroll on mobile to prevent multi-line wrap glitch */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 overflow-x-auto no-scrollbar max-w-full">
            {projectCategories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedFilter(cat);
                    setShowAll(false);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? "text-slate-950 font-bold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filterPill"
                      className="absolute inset-0 rounded-full bg-[#10b981] shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. TOP FEATURED PROJECT CARD with Scroll-Linked 3D Entrance */}
        {featured && (
          <div ref={featuredRef} style={{ perspective: 1200 }}>
            <motion.div
              style={
                !isTouch && !shouldReduce
                  ? {
                      rotateX: featuredRotateX,
                      scale: featuredScale,
                      transformStyle: "preserve-3d",
                    }
                  : undefined
              }
              initial={{ opacity: isTouch ? 1 : 0, y: isTouch ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.45, ease: appleEase }}
              className="rounded-2xl sm:rounded-3xl bg-[#111927] border border-white/10 p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden group hover:border-[#10b981]/30 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Terminal Trading Mockup Frame (58% ratio) */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl bg-[#090d16] border border-white/10 overflow-hidden shadow-2xl">
                    {/* Titlebar */}
                    <div className="bg-[#131c2d] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[11px] font-bold text-white tracking-wide">
                          Trade Mirror
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        mirror-control.live
                      </div>
                    </div>

                    {/* Screenshot with fixed ratio */}
                    <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={featured.screenshot || "/screenshots/mirror-control.png"}
                        alt={featured.title}
                        width={800}
                        height={500}
                        loading="lazy"
                        className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Intel & Meta (42% ratio) */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[11px] font-mono font-bold text-[#10b981] tracking-wider uppercase block">
                    CUSTOM SYSTEM
                  </span>

                  <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-white tracking-tight leading-snug">
                    Mirror Control - Bybit to Bitget Real-Time Trade Mirror &amp; Ops Engine
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Enterprise-grade trade mirroring with real-time syncing, advanced position and risk management, and a clean operations dashboard powering an active $500k+ USDT margin.
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                      Node.js
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                      WebSockets
                    </span>
                  </div>

                  {/* View Case Study Pill Button */}
                  <div className="pt-2">
                    <Button
                      size="sm"
                      asChild
                      className="bg-[#10b981] hover:bg-[#059669] text-slate-950 font-bold rounded-full text-xs h-10 px-5 shadow-sm inline-flex items-center gap-2"
                    >
                      <Link to={`/project/${featured.id}`}>
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 2. TWO-COLUMN PROJECT CARDS with AnimatePresence & layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-900">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <ProjectGridCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Pill with smooth layout animation */}
        {selectedFilter === "All" && otherProjects.length > 4 && (
          <motion.div layout className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 px-6 py-2.5 rounded-full border border-white/15 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>
                {showAll
                  ? "Show Less Projects"
                  : `View All Projects (${projectsData.length})`}
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-transform text-[#10b981] ${
                  showAll ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
