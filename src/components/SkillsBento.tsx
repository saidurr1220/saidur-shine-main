import React from "react";
import {
  Layers,
  Code2,
  Database,
  Cpu,
  Globe,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "WordPress & PHP",
    tag: "WordPress & PHP",
    icon: Globe,
    color: "bg-[#21759b]/10 text-[#21759b]",
  },
  {
    name: "WooCommerce",
    tag: "WooCommerce",
    icon: Layers,
    color: "bg-[#96588a]/10 text-[#96588a]",
  },
  {
    name: "JavaScript & TypeScript",
    tag: "JS & TypeScript",
    icon: Code2,
    color: "bg-[#f7df1e]/15 text-[#947805]",
  },
  {
    name: "Node.js & Express",
    tag: "Node.js & Express",
    icon: Cpu,
    color: "bg-[#339933]/15 text-[#227222]",
  },
  {
    name: "PostgreSQL",
    tag: "PostgreSQL",
    icon: Database,
    color: "bg-[#336791]/15 text-[#244c6d]",
  },
  {
    name: "APIs & Integrations",
    tag: "APIs & Integrations",
    icon: Layers,
    color: "bg-[#0284c7]/10 text-[#0284c7]",
  },
  {
    name: "Performance & Tracking",
    tag: "Performance & Tracking",
    icon: LineChart,
    color: "bg-[#10b981]/15 text-[#059669]",
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

        {/* Horizontal Stack Badges Grid matching design */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${skill.color} transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
