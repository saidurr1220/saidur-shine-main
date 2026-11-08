import React, { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  Briefcase,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useCountUp } from "@/components/motion/useCountUp";
import { Magnetic } from "@/components/motion/Magnetic";
import { appleEase } from "@/lib/motion";

const recentWork = [
  {
    name: "Mirror Control",
    desc: "Node.js trading engine",
    status: "Live 24/7",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
  {
    name: "Vault Labs Research",
    desc: "WooCommerce platform",
    status: "Live",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
  {
    name: "WeldingLeads",
    desc: "Subscription CRM plugin",
    status: "Live",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
  {
    name: "OnRoute Couriers",
    desc: "Booking & pricing plugin",
    status: "Live",
    statusStyle: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
  },
];

function LiveDot() {
  return (
    <span className="relative flex w-1.5 h-1.5" aria-hidden="true">
      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:animate-none" />
      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
    </span>
  );
}

export function HeroApple() {
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) or (pointer: coarse)").matches);
  }, []);

  // Scroll parallax exit (H3)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textParallaxY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Card glare follows the cursor. No 3D tilt: perspective/translateZ makes Chrome
  // rasterize the card text, which renders it blurry.
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleCardMouseLeave = () => {
    setGlarePos({ x: 50, y: 50 });
  };

  // Count up stats - only 100% counts up (Task 5)
  const countJobSuccess = useCountUp(100, isInView, { duration: 900 });
  const countDeliverables = useCountUp(59, isInView, { duration: 1100 });

  const scrollToContact = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo("#contact", { offset: -70 });
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo("#projects", { offset: -70 });
    } else {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Word reveal words (H1)
  const line1Words = ["Custom", "WordPress,"];
  const line2Words = ["built", "to", "fit."];

  return (
    <section
      ref={heroRef}
      id="home"
      data-dark="true"
      className="relative z-10 pt-24 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 bg-[#0b101b] text-white border-b border-white/5"
    >
      {/* Background: Drifting emerald gradient blob & faint grid (H5) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated drifting blob */}
        <div
          className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-10 left-[10%] w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[120px]"
        />

        {/* Faint Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (H1 Headline text reveal + parallax exit) */}
          <motion.div
            style={!shouldReduce ? { y: textParallaxY } : undefined}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Pill: Available for client builds & agency roles */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: appleEase }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-[#0e2a22] border border-[#10b981]/30 rounded-full text-[11px] sm:text-xs text-[#34d399] font-medium shadow-sm max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0 animate-ping opacity-75" />
              <span className="truncate">Available for client builds &amp; agency roles</span>
            </motion.div>

            {/* Small Name Intro */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: appleEase }}
              className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase"
            >
              MD. SAIDUR RAHMAN
            </motion.p>

            {/* Main Punchy Dual-Tone Headline with Word Mask Reveal (H1) */}
            <h1 className="space-y-1">
              <span className="sr-only">Md. Saidur Rahman, Full-Stack WordPress Engineer: </span>
              {/* Line 1: White words */}
              <span className="flex flex-wrap gap-x-3 text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
                {line1Words.map((word, wIdx) => (
                  <span key={wIdx} className="overflow-hidden inline-block py-0.5">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.08 + wIdx * 0.06,
                        ease: appleEase,
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>

              {/* Line 2: Emerald words (comes in last) */}
              <span className="flex flex-wrap gap-x-3 text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#10b981] leading-[1.12]">
                {line2Words.map((word, wIdx) => (
                  <span key={wIdx} className="overflow-hidden inline-block py-0.5">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.22 + wIdx * 0.06,
                        ease: appleEase,
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.45, ease: appleEase }}
              className="text-sm sm:text-lg font-semibold text-slate-200 tracking-tight"
            >
              Plugins, WooCommerce &amp; integrations for agencies and growing businesses
            </motion.p>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.55, ease: appleEase }}
              className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-xl"
            >
              When an off-the-shelf plugin can't do the job, I build it: booking and pricing engines, payment flows, member portals and AI features, tested on staging before they go live.
            </motion.p>

            {/* CTAs with Magnetic Effect (H6) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.65, ease: appleEase }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Magnetic strength={8}>
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="bg-[#10b981] hover:bg-[#059669] text-slate-950 font-bold px-6 rounded-full shadow-md transition-all h-11 text-xs"
                >
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Magnetic>

              <Magnetic strength={8}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="rounded-full text-slate-200 hover:text-white border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 h-11 px-6 text-xs font-semibold"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Magnetic>
            </motion.div>

            {/* Proof next to the CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.75, ease: appleEase }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300"
            >
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                33 of 34 client reviews are 5-star
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span>Clients in the US, UK &amp; Europe</span>
            </motion.div>
          </motion.div>

          {/* Right Column: "Track record" card */}
          <div className="lg:col-span-6 relative">
            <motion.div
              ref={cardRef}
              style={!shouldReduce ? { y: cardParallaxY } : undefined}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              initial={{ opacity: 0, y: 12 }}
              animate={
                isTouch && !shouldReduce
                  ? {
                      opacity: 1,
                      y: [0, -6, 0],
                      transition: {
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      },
                    }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.55, delay: 0.15, ease: appleEase }}
              className="rounded-2xl sm:rounded-3xl bg-white/10 shadow-2xl p-4 sm:p-6 relative overflow-hidden group"
            >
              {/* Rotating emerald light that traces the card border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[75%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,rgba(16,185,129,0.9)_320deg,transparent_360deg)] animate-[spin_7s_linear_infinite] motion-reduce:animate-none"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-px rounded-[15px] sm:rounded-[23px] bg-[#111927]"
              />

              {/* Moving glare highlight overlay (H2) */}
              {!isTouch && !shouldReduce && (
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30"
                  style={{
                    background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, 0.15) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)`,
                  }}
                />
              )}

              {/* Window Top Controls */}
              <div
                className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5 relative z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#05513a] text-[#34d399] flex items-center justify-center font-bold text-xs font-mono shadow-sm">
                    SR
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Track record
                  </span>
                </div>
              </div>

              {/* 3 Metrics Cards Row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 relative z-10">
                {[
                  { value: `${countDeliverables}`, label: "Projects delivered", caption: "FB International, 2026" },
                  { value: "#1", label: "All-time top performer", caption: "of 17 agency developers", highlight: true },
                  { value: `${countJobSuccess}%`, label: "Upwork Job Success", caption: "Freelancing since 2018" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 + idx * 0.12, ease: appleEase }}
                    className={`relative overflow-hidden p-2.5 sm:p-3 rounded-xl border transition-colors duration-300 hover:border-emerald-400/40 ${
                      stat.highlight ? "bg-emerald-500/[0.08] border-emerald-400/25" : "bg-white/[0.04] border-white/5"
                    }`}
                  >
                    {stat.highlight && !shouldReduce && (
                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-emerald-300/15 to-transparent skew-x-[-20deg]"
                        animate={{ x: ["0%", "400%"] }}
                        transition={{ duration: 1.6, delay: 1.4, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut" }}
                      />
                    )}
                    <div
                      className={`relative text-base sm:text-2xl font-bold font-mono leading-none ${
                        stat.highlight ? "text-[#34d399]" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="relative text-[11px] sm:text-xs text-white font-semibold leading-tight mt-2">
                      {stat.label}
                    </div>
                    <div className="relative text-[10px] sm:text-[11px] text-slate-300 leading-tight mt-0.5">
                      {stat.caption}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Work Table */}
              <div
                className="space-y-2 relative z-10"
              >
                <div className="text-xs font-bold text-slate-200 mb-2">Recent work</div>

                {/* Mobile View (< sm) */}
                <div className="sm:hidden space-y-2">
                  {recentWork.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + idx * 0.08, ease: appleEase }}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-white font-sans font-medium text-xs truncate">
                          {item.name}
                        </div>
                        <div className="text-slate-300 text-[11px] font-sans truncate">
                          {item.desc}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded font-mono border ${item.statusStyle} flex-shrink-0`}
                      >
                        <LiveDot />
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Desktop View (sm+) */}
                <div className="hidden sm:block space-y-1.5 text-[11px]">
                  {recentWork.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + idx * 0.08, ease: appleEase }}
                      className="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="col-span-5 text-white font-sans font-medium truncate">
                        {item.name}
                      </span>
                      <span className="col-span-4 text-slate-300 truncate">
                        {item.desc}
                      </span>
                      <div className="col-span-3 text-right">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded font-mono border ${item.statusStyle}`}
                        >
                          <LiveDot />
                          {item.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3-Pillar Experience Bar - Cohesive Dark Luxury Theme inside Hero */}
        <div className="relative z-20 mt-12 sm:mt-16 mb-0">
          <div className="bg-[#111927]/90 backdrop-blur-md text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 items-center">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    #1 all-time
                  </div>
                  <div className="text-xs text-slate-400">FB International leaderboard</div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-white/10 sm:pl-8 border-t border-white/5 pt-4 sm:pt-0 sm:border-t-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-[#10b981]/20" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    5.0
                  </div>
                  <div className="text-xs text-slate-400">Upwork rating</div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-white/10 sm:pl-8 border-t border-white/5 pt-4 sm:pt-0 sm:border-t-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white whitespace-nowrap">
                    WordPress & WooCommerce
                  </div>
                  <div className="text-xs text-slate-400">
                    Custom plugins & systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
