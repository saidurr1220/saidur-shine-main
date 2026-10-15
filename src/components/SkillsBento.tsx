import React from "react";
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
import { motion } from "framer-motion";

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

export function SkillsBento() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-[#fbfbfd] border-b border-slate-100">
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

        {/* 9 Uniform Cards in 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex flex-col group"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${skill.color} transition-transform duration-200 group-hover:scale-105 shadow-2xs flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {skill.name}
                  </h3>
                </div>

                <ul className="mt-1 space-y-1.5 text-xs text-slate-600 leading-relaxed flex-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087f5b] flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
