import React from "react";
import {
  Code2,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export function AboutApple() {
  const steps = [
    {
      num: "01",
      icon: Code2,
      title: "Clean architecture",
      desc: "Well-structured, maintainable code that's built for performance and scalability.",
    },
    {
      num: "02",
      icon: MessageSquare,
      title: "Reliable communication",
      desc: "Clear updates, realistic timelines, and a proactive approach throughout the project.",
    },
    {
      num: "03",
      icon: Users,
      title: "Ongoing support",
      desc: "Continued assistance after launch to keep your website running smoothly.",
    },
  ];

  return (
    <section id="about" className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 bg-white border-b border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Large 01 Watermark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Subtle "01" Watermark */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] sm:text-[180px] font-extrabold text-slate-100 select-none pointer-events-none -z-0 opacity-70"
              aria-hidden="true"
            >
              01
            </span>

            <div className="relative z-10 space-y-4">
              <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block">
                ABOUT ME
              </span>

              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                  A development partner. From idea to{" "}
                  <span className="text-[#087f5b]">impact.</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg pt-2">
                I'm a Full-Stack WordPress Engineer who helps clients and agencies turn ideas into reliable, high-performing websites and web systems. I care about clean code, clear communication, and long-term value.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillars with 01, 02, 03 Badges */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all"
                >
                  {/* Number Badge */}
                  <span className="text-xs font-mono font-bold text-[#087f5b] bg-[#e8f6f0] px-2.5 py-1 rounded-lg flex-shrink-0 mt-0.5">
                    {item.num}
                  </span>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Text */}
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
