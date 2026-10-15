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
  useMotionValue,
  useSpring,
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
  const cardParallaxRotateX = useTransform(scrollYProgress, [0, 1], [0, 6]);

  // 3D Card Tilt (H2)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-((y - centerY) / centerY) * 8);
    rotateY.set(((x - centerX) / centerX) * 8);
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleCardMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlarePos({ x: 50, y: 50 });
  };

  // Count up stats - only 100% counts up (Task 5)
  const countJobSuccess = useCountUp(100, isInView, { duration: 900 });

  const scrollToContact = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo("#contact", { offset: -70 });
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo("#projects", { offset: -70 });
    } else {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Word reveal words (H1)
  const line1Words = ["Engineering", "websites."];
  const line2Words = ["Building", "reliable", "systems."];

  return (
    <section
      ref={heroRef}
      id="home"
      data-dark="true"
      className="relative z-10 pt-24 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 bg-[#0b101b] text-white"
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
            <div className="space-y-1">
              {/* Line 1: White words */}
              <div className="flex flex-wrap gap-x-3 text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
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
              </div>

              {/* Line 2: Emerald words (comes in last) */}
              <div className="flex flex-wrap gap-x-3 text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#10b981] leading-[1.12]">
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
              </div>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.45, ease: appleEase }}
              className="text-sm sm:text-lg font-semibold text-slate-200 tracking-tight"
            >
              Full-Stack WordPress Engineer &amp; System Architect
            </motion.p>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.55, ease: appleEase }}
              className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-xl"
            >
              I help businesses and agencies plan, build, and scale high-performing websites and custom systems. From WordPress and WooCommerce to bespoke web applications, I focus on clean architecture, reliable performance, and long-term support.
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
          </motion.div>

          {/* Right Column: 3D "Track record" card (H2 + H3) */}
          <div style={{ perspective: 1200 }} className="lg:col-span-6 relative">
            <motion.div
              ref={cardRef}
              style={
                !shouldReduce
                  ? {
                      y: cardParallaxY,
                      rotateX: isTouch ? undefined : rotateX,
                      rotateY: isTouch ? undefined : rotateY,
                      transformStyle: "preserve-3d",
                    }
                  : undefined
              }
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={
                isTouch && !shouldReduce
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: [0, -6, 0],
                      transition: {
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      },
                    }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.55, delay: 0.15, ease: appleEase }}
              className="rounded-2xl sm:rounded-3xl bg-[#111927]/95 border border-white/10 shadow-2xl p-4 sm:p-6 backdrop-blur-md relative overflow-hidden group"
            >
              {/* Moving glare highlight overlay (H2) */}
              {!isTouch && !shouldReduce && (
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30"
                  style={{
                    background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, 0.15) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)`,
                  }}
                />
              )}

              {/* Window Top Controls (translateZ: 40px) */}
              <div
                style={{ transform: "translateZ(40px)" }}
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

              {/* 3 Metrics Cards Row (translateZ: 30px) */}
              <div
                style={{ transform: "translateZ(30px)" }}
                className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 relative z-10"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-tight">
                    Projects per month
                  </div>
                  <div className="text-base sm:text-xl font-bold text-white mt-1 font-mono">
                    10-15
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-tight">
                    Freelancing since
                  </div>
                  <div className="text-base sm:text-xl font-bold text-white mt-1 font-mono">
                    2018
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-tight">
                    Upwork Job Success
                  </div>
                  <div className="text-base sm:text-xl font-bold text-white mt-1 font-mono">
                    {countJobSuccess}%
                  </div>
                </div>
              </div>

              {/* Recent Work Table (translateZ: 20px) */}
              <div
                style={{ transform: "translateZ(20px)" }}
                className="space-y-2 relative z-10"
              >
                <div className="text-xs font-bold text-slate-300 mb-2">Recent work</div>

                {/* Mobile View (< sm) */}
                <div className="sm:hidden space-y-2">
                  {recentWork.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-white font-sans font-medium text-xs truncate">
                          {item.name}
                        </div>
                        <div className="text-slate-400 text-[10px] font-sans truncate">
                          {item.desc}
                        </div>
                      </div>
                      <span
                        className={`text-[10px] px-2.5 py-0.5 rounded font-mono border ${item.statusStyle} flex-shrink-0`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Desktop View (sm+) */}
                <div className="hidden sm:block space-y-1.5 text-[11px]">
                  {recentWork.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="col-span-5 text-white font-sans font-medium truncate">
                        {item.name}
                      </span>
                      <span className="col-span-4 text-slate-400 truncate">
                        {item.desc}
                      </span>
                      <div className="col-span-3 text-right">
                        <span
                          className={`inline-block text-[10px] px-2.5 py-0.5 rounded font-mono border ${item.statusStyle}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3-Pillar Experience Bar - Floating Bridge Card with Count-up (H4) */}
        <div className="relative z-20 mt-10 sm:mt-16 -mb-16 sm:-mb-24">
          <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-950/20 border border-slate-200/90">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 items-center">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-slate-950">
                    2+ Years
                  </div>
                  <div className="text-xs text-slate-500">Experience</div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-slate-200/80 sm:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-[#087f5b]/20" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-slate-950">
                    5.0
                  </div>
                  <div className="text-xs text-slate-500">Upwork rating</div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3.5 sm:border-l sm:border-slate-200/80 sm:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f0] text-[#087f5b] flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-slate-950 whitespace-nowrap">
                    WordPress & WooCommerce
                  </div>
                  <div className="text-xs text-slate-500">
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
