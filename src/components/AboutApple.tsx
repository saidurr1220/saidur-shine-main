import React, { useRef } from "react";
import {
  Code2,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

export function AboutApple() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the big "01" watermark (moves slower than scroll)
  const watermarkY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

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
    <section
      ref={sectionRef}
      id="about"
      className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 bg-white border-b border-slate-100 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Large 01 Watermark with Parallax */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: appleEase }}
            className="lg:col-span-6 relative"
          >
            {/* Subtle "01" Watermark with scroll parallax */}
            <motion.span
              style={!shouldReduce ? { y: watermarkY } : undefined}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] sm:text-[180px] font-extrabold text-slate-100 select-none pointer-events-none -z-0 opacity-70 font-mono"
              aria-hidden="true"
            >
              01
            </motion.span>

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

              <div className="space-y-3 pt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-lg">
                <p>
                  I'm a Full-Stack WordPress Engineer with <strong className="text-slate-950 font-semibold">2+ years</strong> of experience building custom plugins, WooCommerce platforms, booking engines and subscription systems for clients in the US, UK and Europe. Most of my work is custom logic, not theme setup: hooks and filters, Stripe webhooks, REST API integrations and conversion tracking.
                </p>
                <p>
                  I currently work at <strong className="text-slate-950 font-semibold">FB International BD</strong>, a WordPress development agency, delivering <strong className="text-slate-950 font-semibold">10 to 15 client projects a month</strong>. Last month I shipped 11 projects there and <strong className="text-slate-950 font-semibold">10 were rated 5 stars</strong>. I've also been freelancing on Upwork since 2018 with a <strong className="text-slate-950 font-semibold">100% Job Success</strong> score. Outside WordPress I build Node.js and TypeScript systems, like a real-time trading engine running 24/7 in production.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillars with hover lift, rotating icon, gradient border */}
          <div className="lg:col-span-6 space-y-5">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.12,
                    ease: appleEase,
                  }}
                  whileHover={
                    !shouldReduce
                      ? {
                          y: -4,
                          transition: { duration: 0.2, ease: "easeOut" },
                        }
                      : undefined
                  }
                  className="group relative flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle emerald gradient hover border overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#10b981]/30 transition-colors duration-300" />

                  {/* Number Badge */}
                  <span className="text-xs font-mono font-bold text-[#087f5b] bg-[#e8f6f0] px-2.5 py-1 rounded-lg flex-shrink-0 mt-0.5">
                    {item.num}
                  </span>

                  {/* Icon with subtle hover rotation */}
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8f6f0] group-hover:text-[#087f5b] transition-all duration-300">
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
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
