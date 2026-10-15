import React, { useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Star,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

const clientReviews = [
  {
    quote: "Very professional and highly skilled developer. The work was completed quickly and accurately, communication was excellent, and he was always responsive. He understood the requirements perfectly and delivered exactly what I needed. I'm very satisfied with the result and would definitely work with him again. Highly recommended!",
    name: "Tamas (tamscservenk)",
    title: "Client • Hungary • $7,000 milestone project (via FB International BD)",
    platform: "5.0 Fiverr review",
  },
  {
    quote: "Highly professional, responsive, and committed throughout the project. He worked hard to solve complex technical issues and delivered a strong final result. Highly recommended.",
    name: "Tamas (tamscservenk)",
    title: "Client • Hungary • Phase 1 delivery (via FB International BD)",
    platform: "5.0 Fiverr review",
  },
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
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduce = useReducedMotion();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(clientReviews.length / itemsPerPage);
  const currentPage = Math.floor(index / itemsPerPage);

  const prevReview = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? Math.max(0, (totalPages - 1) * itemsPerPage) : Math.max(0, prev - itemsPerPage)
    );
  };

  const nextReview = () => {
    setDirection(1);
    setIndex((prev) =>
      prev >= (totalPages - 1) * itemsPerPage ? 0 : prev + itemsPerPage
    );
  };

  const handleDragEnd = (_e: any, { offset }: { offset: { x: number } }) => {
    if (totalPages <= 1) return;
    if (offset.x < -40) {
      nextReview();
    } else if (offset.x > 40) {
      prevReview();
    }
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-[#fbfbfd] border-b border-slate-100 overflow-hidden">
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

        {/* Reviews 2-Card Row with AnimatePresence, 3D rotateY, and touch swipe */}
        <div style={{ perspective: 1200 }} className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={
                !shouldReduce
                  ? {
                      opacity: 0,
                      rotateY: direction > 0 ? 8 : -8,
                      x: direction > 0 ? 30 : -30,
                    }
                  : { opacity: 0 }
              }
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={
                !shouldReduce
                  ? {
                      opacity: 0,
                      rotateY: direction > 0 ? -8 : 8,
                      x: direction > 0 ? -30 : 30,
                    }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.45, ease: appleEase }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
            >
              {clientReviews.slice(index, index + itemsPerPage).map((rev, i) => (
                <div
                  key={rev.name + i + rev.title}
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 min-h-[260px] relative overflow-hidden group"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      {/* Big subtle parallax quote mark */}
                      <Quote className="w-8 h-8 fill-emerald-500/15 text-emerald-600 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
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
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <User className="w-4 h-4 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">{rev.name}</h4>
                      <p className="text-xs text-slate-500">{rev.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons & Dots beneath - hidden when all reviews fit on one page */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs active:scale-95"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {[...Array(totalPages)].map((_, pageIdx) => (
                  <button
                    key={pageIdx}
                    onClick={() => {
                      setDirection(pageIdx > currentPage ? 1 : -1);
                      setIndex(pageIdx * itemsPerPage);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPage === pageIdx ? "w-6 bg-[#087f5b]" : "w-2 bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${pageIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs active:scale-95"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
