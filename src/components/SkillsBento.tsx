import React, { useRef, useState, useEffect } from "react";
import {
  Code2,
  Database,
  Cpu,
  Globe,
  ShoppingBag,
  Layers,
  Layout,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

const skills = [
  {
    name: "WordPress & PHP",
    icon: Globe,
    color: "bg-[#21759b]/10 text-[#21759b]",
    items: [
      "Custom plugins (OOP)",
      "Hooks & filters",
      "CPT & taxonomies",
      "ACF Pro",
      "REST API",
    ],
  },
  {
    name: "WooCommerce",
    icon: ShoppingBag,
    color: "bg-[#96588a]/10 text-[#96588a]",
    items: [
      "Custom checkout logic",
      "HPOS-safe CRUD",
      "Template overrides",
      "Store credit & pricing",
    ],
  },
  {
    name: "Full-Stack JavaScript",
    icon: Code2,
    color: "bg-[#f7df1e]/15 text-[#947805]",
    items: [
      "Node.js & TypeScript",
      "React / Next.js",
      "Express",
      "WebSockets",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    color: "bg-[#336791]/15 text-[#244c6d]",
    items: [
      "MySQL (schema design, indexes, WP query optimization)",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    name: "APIs & Integrations",
    icon: Layers,
    color: "bg-[#0284c7]/10 text-[#0284c7]",
    items: [
      "Stripe / PayPal / Bybit APIs",
      "Webhooks",
      "REST & cURL",
      "3rd-party auth",
    ],
  },
  {
    name: "Theme & Frontend",
    icon: Layout,
    color: "bg-[#06b6d4]/15 text-[#0891b2]",
    items: [
      "Tailwind CSS",
      "Modern CSS / SCSS",
      "Responsive UI",
      "Core Web Vitals",
      "Framer Motion",
    ],
  },
  {
    name: "DevOps & Tooling",
    icon: Terminal,
    color: "bg-slate-100 text-slate-700",
    items: [
      "Git / GitHub",
      "Docker & CI/CD",
      "WP-CLI & Composer",
      "npm & Vercel",
    ],
  },
  {
    name: "Security & Performance",
    icon: ShieldCheck,
    color: "bg-[#10b981]/15 text-[#059669]",
    items: [
      "Caching (Redis / Object Cache)",
      "Query optimization",
      "Nonce / sanitized input",
      "Rate limiting",
    ],
  },
  {
    name: "Architecture & Workflow",
    icon: Cpu,
    color: "bg-[#8b5cf6]/15 text-[#7c3aed]",
    items: [
      "Headless WordPress",
      "Microservices",
      "Event-driven logic",
      "Clean OOP patterns",
    ],
  },
];

const marqueeRow1 = [
  "WordPress",
  "WooCommerce",
  "PHP (OOP)",
  "MySQL",
  "Stripe",
  "GTM",
  "GA4",
  "Node.js",
  "TypeScript",
  "React",
  "Laravel",
  "Elementor",
];

const marqueeRow2 = [
  "REST APIs",
  "WebSockets",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "Framer Motion",
  "Core Web Vitals",
  "WP-CLI",
  "ACF Pro",
  "High Availability",
  "PayPal API",
];

function SkillTiltCard({
  skill,
  idx,
}: {
  skill: (typeof skills)[number];
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

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

    rotateX.set(-((y - centerY) / centerY) * 6);
    rotateY.set(((x - centerX) / centerX) * 6);
    setSpotlight({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  const Icon = skill.icon;

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay: idx * 0.05, ease: appleEase }}
        style={
          !isTouch && !shouldReduce
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        className="relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-shadow duration-300 flex flex-col group overflow-hidden"
      >
        {/* Inner spotlight that follows cursor inside card */}
        {!isTouch && !shouldReduce && (
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${
              spotlight.active ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: `radial-gradient(circle 120px at ${spotlight.x}px ${spotlight.y}px, rgba(16, 185, 129, 0.08), transparent 70%)`,
            }}
          />
        )}

        <div className="flex items-center gap-3.5 mb-3.5 relative z-10">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${skill.color} transition-transform duration-300 group-hover:scale-110 shadow-2xs flex-shrink-0`}
          >
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {skill.name}
          </h3>
        </div>

        <ul className="mt-1 space-y-1.5 text-xs text-slate-600 leading-relaxed flex-1 relative z-10">
          {skill.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function SkillsBento() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-[#fbfbfd] border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left Title */}
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block mb-1">
              CORE SKILLS &amp; TECHNOLOGIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              The right stack. Built to last.
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-md md:text-right leading-relaxed">
            A flexible, modern toolkit for building fast, secure, and scalable websites and web applications.
          </p>
        </div>

        {/* 9 Uniform Cards in 3x3 Grid with 3D Tilt & Inner Spotlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, idx) => (
            <SkillTiltCard key={skill.name} skill={skill} idx={idx} />
          ))}
        </div>

        {/* Infinite Tech Marquee Strip Under the Grid (CSS Animation Only) */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 relative">
          {/* Edge Fading Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fbfbfd] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fbfbfd] to-transparent z-10 pointer-events-none" />

          <div className="space-y-3 overflow-hidden group/marquee">
            {/* Row 1 - Left to Right */}
            <div className="flex gap-4 w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-mono font-medium text-slate-700 shadow-2xs hover:border-[#10b981]/50 hover:text-[#087f5b] transition-colors whitespace-nowrap cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Row 2 - Right to Left */}
            <div className="flex gap-4 w-max animate-marquee-reverse group-hover/marquee:[animation-play-state:paused]">
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-mono font-medium text-slate-700 shadow-2xs hover:border-[#10b981]/50 hover:text-[#087f5b] transition-colors whitespace-nowrap cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
