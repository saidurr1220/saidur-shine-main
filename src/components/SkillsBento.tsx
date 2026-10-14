import React from "react";
import {
  Code2,
  Database,
  Cpu,
  Globe,
  LineChart,
  ShoppingBag,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "WordPress & PHP",
    icon: Globe,
    color: "bg-[#21759b]/10 text-[#21759b]",
  },
  {
    name: "WooCommerce",
    icon: ShoppingBag,
    color: "bg-[#96588a]/10 text-[#96588a]",
  },
  {
    name: "JavaScript & TypeScript",
    icon: Code2,
    color: "bg-[#f7df1e]/15 text-[#947805]",
  },
  {
    name: "Node.js & Express",
    icon: Cpu,
    color: "bg-[#339933]/15 text-[#227222]",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "bg-[#336791]/15 text-[#244c6d]",
  },
  {
    name: "APIs & Integrations",
    icon: Layers,
    color: "bg-[#0284c7]/10 text-[#0284c7]",
  },
  {
    name: "Performance & Tracking",
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

        {/* 7 Uniform Grid Cards matching design */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all text-center flex flex-col items-center justify-center space-y-3 min-h-[120px] group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${skill.color} transition-transform duration-200 group-hover:scale-105 shadow-2xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-tight block">
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
