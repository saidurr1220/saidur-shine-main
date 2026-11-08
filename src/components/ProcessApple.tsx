import React from "react";
import { MessageSquare, ClipboardList, FlaskConical, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    icon: MessageSquare,
    desc: "We talk through the goal, the users and what the current site can't do. I ask questions until the scope is clear.",
  },
  {
    num: "02",
    title: "Plan & quote",
    icon: ClipboardList,
    desc: "You get a written plan: what I'll build, how it fits your stack, the milestones and the price. No surprises later.",
  },
  {
    num: "03",
    title: "Build on staging",
    icon: FlaskConical,
    desc: "I build in a separate staging copy with regular progress updates, so you can review real work before anything touches live.",
  },
  {
    num: "04",
    title: "Launch & support",
    icon: Rocket,
    desc: "We go live together, I verify everything in production, and I stay available for fixes and the next round of features.",
  },
];

export function ProcessApple() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="process" className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block mb-1">
              HOW I WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              A clear path from idea to launch.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md md:text-right leading-relaxed">
            Four steps, the same on every project, so you always know what happens next.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Connector line that draws across the steps on desktop */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: appleEase }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute left-[12%] right-[12%] top-[46px] h-[2px] bg-gradient-to-r from-[#10b981] via-[#087f5b] to-[#10b981]"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: appleEase }}
                whileHover={!shouldReduce ? { y: -4, transition: { duration: 0.2 } } : undefined}
                className="relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#10b981]/40 transition-[box-shadow,border-color] duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#e8f6f0] border border-[#d1ede1] text-[#087f5b] flex items-center justify-center group-hover:bg-[#087f5b] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-slate-100 group-hover:text-[#d1ede1] transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-1.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
