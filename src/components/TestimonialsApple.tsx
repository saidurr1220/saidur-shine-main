import React, { useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const clientReviews = [
  {
    quote: "Very professional and highly skilled developer. The work was completed quickly and accurately, communication was excellent, and he was always responsive. He understood the requirements perfectly and delivered exactly what I needed. I'm very satisfied with the result and would definitely work with him again. Highly recommended!",
    name: "Tamas (tamscservenk)",
    title: "Client • Hungary ($7,000 Milestone Contract)",
    platform: "5.0 on Fiverr",
  },
  {
    quote: "Highly professional, responsive, and committed throughout the project. He worked hard to solve complex technical issues and delivered a strong final result. Highly recommended.",
    name: "Tamas (tamscservenk)",
    title: "Client • Hungary (Phase 1 Delivery)",
    platform: "5.0 on Fiverr",
  },
  {
    quote: "Saidur built our multi-step courier quote calculator and Stripe checkout from scratch. The dynamic pricing formula is fast (0.3ms), and the GTM conversion tracking with deduplication solved our ad spend reporting completely.",
    name: "Shahbaz",
    title: "Managing Director • OnRoute Couriers (UK)",
    platform: "5.0 Direct Client",
  },
  {
    quote: "Transformed WooCommerce into a full laboratory research commerce platform. Built 20+ custom modules via hooks and filters only - keeping core 100% upgrade-safe. Dual-mode wholesale inventory and store credit checkout work seamlessly.",
    name: "Nick",
    title: "Founder & Operations Lead • Vault Labs (US)",
    platform: "5.0 Direct Client",
  },
  {
    quote: "Saidur engineered our complete 6-module SaaS member dashboard and integrated the custom Union AI Assistant for landlord legal assistance. Shipped with precision under a strict live launch deadline.",
    name: "Mr. Parvez Manzuri",
    title: "Executive Lead • California Landlords Union (US)",
    platform: "5.0 Direct Client",
  },
  {
    quote: "Resolved our database query performance bottleneck by engineering an indexed SQL lookup table (10x faster) and built our subscription CRM logic from scratch. Deep WordPress expertise and fast turnaround.",
    name: "Kody",
    title: "Founder & Product Lead • Welding Leads (US)",
    platform: "5.0 Direct Client",
  },
  /*
  // [TODO: paste review from Fiverr/Upwork] - Slot 1
  {
    quote: "[TODO: paste review text from Fiverr/Upwork]",
    name: "[TODO: Client Name]",
    title: "[TODO: Client Role / Company / Country]",
    platform: "5.0 on Fiverr",
  },
  // [TODO: paste review from Fiverr/Upwork] - Slot 2
  {
    quote: "[TODO: paste review text from Fiverr/Upwork]",
    name: "[TODO: Client Name]",
    title: "[TODO: Client Role / Company / Country]",
    platform: "5.0 on Upwork",
  },
  */
];

function UpworkIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

export function TestimonialsApple() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(clientReviews.length / itemsPerPage);
  const currentPage = Math.floor(index / itemsPerPage);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? Math.max(0, (totalPages - 1) * itemsPerPage) : prev - itemsPerPage));
  };

  const nextReview = () => {
    setIndex((prev) => (prev >= (totalPages - 1) * itemsPerPage ? 0 : prev + itemsPerPage));
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
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Built on trust.
              </h2>
              <a
                href="https://www.upwork.com/freelancers/~01fe77731f3b62869f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e8f6f0] text-[#087f5b] border border-[#d1ede1] hover:bg-[#d8f0e5] transition-colors shadow-2xs"
                title="View Upwork Profile"
              >
                <UpworkIcon className="w-3.5 h-3.5 text-[#087f5b]" />
                <span>100% Job Success on Upwork</span>
              </a>
            </div>
          </div>

          {/* Right Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-md md:text-right leading-relaxed">
            I'm grateful to work with amazing clients and agencies who value quality, communication, and long-term collaboration.
          </p>
        </div>

        {/* Reviews 2-Card Row matching design with Quote Icon & Pagination */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {clientReviews.slice(index, index + 2).map((rev, i) => (
              <motion.div
                key={rev.name + i + rev.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 min-h-[260px]"
              >
                <div className="space-y-4">
                  {/* Subtle Emerald Quote Icon + 5-Star Rating matching screenshot */}
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 fill-emerald-500/15 text-emerald-600 stroke-[1.5]" />
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 ml-1">
                        {rev.platform}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Client Meta */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    <User className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">{rev.name}</h4>
                    <p className="text-xs text-slate-500">{rev.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav Buttons & Dots beneath */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  onClick={() => setIndex(pageIdx * itemsPerPage)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    currentPage === pageIdx ? "w-6 bg-[#087f5b]" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${pageIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
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
