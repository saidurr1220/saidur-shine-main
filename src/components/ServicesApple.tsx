import React from "react";
import {
  Globe,
  ShoppingCart,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const serviceList = [
  {
    num: "01",
    title: "WordPress Development",
    icon: Globe,
    desc: "Custom themes, plugin development, and high-performance websites tailored to your business needs.",
  },
  {
    num: "02",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    desc: "WooCommerce stores with custom features, payment integrations, and a seamless shopping experience.",
  },
  {
    num: "03",
    title: "Custom Platforms & Integrations",
    icon: Layers,
    desc: "Bespoke web applications, API integrations, and custom systems to streamline your workflow.",
  },
];

export function ServicesApple() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left Title */}
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block mb-1">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Built around your business.
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-md md:text-right leading-relaxed">
            From marketing websites to complex web applications, I deliver solutions tailored to your goals.
          </p>
        </div>

        {/* 3 Horizontal Service Cards with Soft Mint Hover State */}
        <div className="space-y-4">
          {serviceList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-6 rounded-2xl bg-[#f8fbf9] hover:bg-[#eff8f4] border border-[#d1ede1]/70 hover:border-[#10b981]/50 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200 group cursor-default"
              >
                {/* Left: Number + Icon + Title */}
                <div className="flex items-center gap-4 md:w-1/3">
                  <span className="text-xs font-mono font-bold text-[#087f5b] bg-white px-2.5 py-1 rounded-lg border border-[#d1ede1] shadow-2xs">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#d1ede1] text-[#087f5b] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                </div>

                {/* Center: Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed md:w-1/2">
                  {item.desc}
                </p>

                {/* Right: Circular Arrow Button */}
                <div className="flex justify-end md:w-12">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#d1ede1] text-slate-600 group-hover:text-[#087f5b] group-hover:border-[#087f5b] flex items-center justify-center transition-all duration-200 shadow-2xs">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
