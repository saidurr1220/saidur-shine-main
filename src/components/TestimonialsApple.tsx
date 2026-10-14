import React, { useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const clientReviews = [
  {
    quote: "Very professional and highly skilled developer. The work was completed quickly and accurately, communication was excellent, and he was always responsive. He understood the requirements perfectly and delivered exactly what I needed. I'm very satisfied with the result and would definitely work with him again. Highly recommended!",
    name: "Tamas (tamscservenk)",
    title: "Client • Hungary ($7,000 Milestone Contract)",
    platform: "Fiverr 5.0 ★",
  },
  {
    quote: "Highly professional, responsive, and committed throughout the project. He worked hard to solve complex technical issues and delivered a strong final result. Highly recommended.",
    name: "Tamas (tamscservenk)",
    title: "Client • Hungary (Phase 1 Delivery)",
    platform: "Fiverr 5.0 ★",
  },
  {
    quote: "Saidur built our multi-step courier quote calculator and Stripe checkout from scratch. The dynamic pricing formula is fast (0.3ms), and the GTM conversion tracking with deduplication solved our ad spend reporting completely.",
    name: "Shahbaz",
    title: "Managing Director • OnRoute Couriers (UK)",
    platform: "Direct Client 5.0 ★",
  },
  {
    quote: "Transformed WooCommerce into a full laboratory research commerce platform. Built 20+ custom modules via hooks and filters only - keeping core 100% upgrade-safe. Dual-mode wholesale inventory and store credit checkout work seamlessly.",
    name: "Nick",
    title: "Founder & Operations Lead • Vault Labs (US)",
    platform: "Direct Client 5.0 ★",
  },
  {
    quote: "Saidur engineered our complete 6-module SaaS member dashboard and integrated the custom Union AI Assistant for landlord legal assistance. Shipped with precision under a strict live launch deadline.",
    name: "Mr. Parvez Manzuri",
    title: "Executive Lead • California Landlords Union (US)",
    platform: "Direct Client 5.0 ★",
  },
  {
    quote: "Resolved our database query performance bottleneck by engineering an indexed SQL lookup table (10x faster) and built our subscription CRM logic from scratch. Deep WordPress expertise and fast turnaround.",
    name: "Kody",
    title: "Founder & Product Lead • Welding Leads (US)",
    platform: "Direct Client 5.0 ★",
  },
];

export function TestimonialsApple() {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? Math.max(0, clientReviews.length - 2) : prev - 2));
  };

  const nextReview = () => {
    setIndex((prev) => (prev >= clientReviews.length - 2 ? 0 : prev + 2));
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-[#fbfbfd] border-b border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left Title */}
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block mb-1">
              CLIENT REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Built on trust.
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-md md:text-right leading-relaxed">
            I'm grateful to work with amazing clients and agencies who value quality, communication, and long-term collaboration.
          </p>
        </div>

        {/* Reviews 2-Card Row matching design with Quote Icon & Pagination */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientReviews.slice(index, index + 2).map((rev, i) => (
              <motion.div
                key={rev.name + i + rev.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Subtle Turquoise Quote Icon + 5-Star Rating */}
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 fill-emerald-500/20 text-emerald-500" />
                    <div className="flex items-center gap-1 bg-[#e8f6f0] px-2.5 py-1 rounded-full border border-[#d1ede1]">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-[#087f5b] ml-1">{rev.platform}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Client Meta */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav Buttons & Dots beneath */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {[0, 2, 4].map((stepIdx) => (
                <button
                  key={stepIdx}
                  onClick={() => setIndex(stepIdx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === stepIdx ? "w-6 bg-[#087f5b]" : "bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${stepIdx / 2 + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
