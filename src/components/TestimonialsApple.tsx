import React, { useState, useEffect } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Star,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";
import { reviews, ReviewItem } from "@/data/reviews";

type PlatformFilter = "All" | "Upwork" | "Fiverr";

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
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedFilter, setSelectedFilter] = useState<PlatformFilter>("All");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const shouldReduce = useReducedMotion();

  // Responsive items per page: 1 on mobile (<768), 2 on tablet (<1024), 3 on desktop (>=1024)
  useEffect(() => {
    const updateItems = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setItemsPerPage(1);
      } else if (w < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Filter tabs: show tab only if it has at least 1 review
  const hasUpwork = reviews.some((r) => r.platform === "Upwork");
  const hasFiverr = reviews.some((r) => r.platform === "Fiverr (agency)");

  const filterTabs: { id: PlatformFilter; label: string }[] = [
    { id: "All", label: "All" },
    ...(hasUpwork ? [{ id: "Upwork" as const, label: "Upwork" }] : []),
    ...(hasFiverr ? [{ id: "Fiverr" as const, label: "Fiverr" }] : []),
  ];

  const filteredReviews = reviews.filter((r) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Upwork") return r.platform === "Upwork";
    if (selectedFilter === "Fiverr") return r.platform === "Fiverr (agency)";
    return true;
  });

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);
  const currentPage = Math.min(
    Math.floor(index / itemsPerPage),
    Math.max(0, totalPages - 1)
  );

  const prevReview = () => {
    setUserInteracted(true);
    setDirection(-1);
    setIndex((prev) =>
      prev === 0
        ? Math.max(0, (totalPages - 1) * itemsPerPage)
        : Math.max(0, prev - itemsPerPage)
    );
  };

  const nextReview = () => {
    setUserInteracted(true);
    setDirection(1);
    setIndex((prev) =>
      prev >= (totalPages - 1) * itemsPerPage ? 0 : prev + itemsPerPage
    );
  };

  const handleDragEnd = (_e: any, { offset }: { offset: { x: number } }) => {
    if (totalPages <= 1) return;
    setUserInteracted(true);
    if (offset.x < -40) {
      nextReview();
    } else if (offset.x > 40) {
      prevReview();
    }
  };

  const toggleExpanded = (id: string) => {
    setUserInteracted(true);
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Autoplay every 6s: pauses on hover, stops on user interaction, disabled for reduced motion
  useEffect(() => {
    if (shouldReduce || userInteracted || isPaused || totalPages <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) =>
        prev >= (totalPages - 1) * itemsPerPage ? 0 : prev + itemsPerPage
      );
    }, 6000);
    return () => clearInterval(timer);
  }, [shouldReduce, userInteracted, isPaused, totalPages, itemsPerPage]);

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-[#fbfbfd] border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
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

        {/* Optional platform filter tabs: show only if more than 1 tab available */}
        {filterTabs.length > 1 && (
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200/80 w-fit mb-8">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedFilter(tab.id);
                    setIndex(0);
                    setUserInteracted(true);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isActive ? "text-slate-950 font-bold" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="reviewFilterPill"
                      className="absolute inset-0 rounded-full bg-white shadow-xs border border-slate-200/60"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Reviews Slider with AnimatePresence, 3D rotateY, and touch swipe */}
        <div
          style={{ perspective: 1200 }}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${selectedFilter}-${index}-${itemsPerPage}`}
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
              className={`grid grid-cols-1 ${
                itemsPerPage === 1
                  ? "grid-cols-1 max-w-lg mx-auto"
                  : itemsPerPage === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              } gap-6 sm:gap-8 cursor-grab active:cursor-grabbing items-stretch`}
            >
              {filteredReviews
                .slice(index, index + itemsPerPage)
                .map((rev: ReviewItem) => {
                  const isExpanded = !!expandedIds[rev.id];
                  const badgeText =
                    rev.platform === "Upwork"
                      ? `${rev.rating.toFixed(1)} Upwork review`
                      : `${rev.rating.toFixed(1)} Fiverr review`;

                  return (
                    <div
                      key={rev.id}
                      className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 h-full relative overflow-hidden group"
                    >
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between gap-3">
                          {/* Quote icon */}
                          <Quote className="w-8 h-8 fill-emerald-500/15 text-emerald-600 stroke-[1.5] transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                          <div className="flex items-center gap-1.5 flex-wrap justify-end">
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, sIdx) => (
                                <Star
                                  key={sIdx}
                                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>
                            <span className="text-[11px] font-semibold text-slate-500 ml-1 whitespace-nowrap">
                              {badgeText}
                            </span>
                          </div>
                        </div>

                        {/* Quote body clamped to 6 lines with Read More toggle */}
                        <div className="relative">
                          <p
                            className={`text-sm text-slate-700 leading-relaxed font-normal ${
                              isExpanded ? "" : "line-clamp-6"
                            }`}
                          >
                            "{rev.quote}"
                          </p>
                          {rev.quote.length > 200 && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpanded(rev.id);
                              }}
                              className="inline-block text-xs font-semibold text-[#087f5b] hover:text-[#066347] transition-colors mt-2 focus:outline-hidden cursor-pointer"
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Client Attribution Meta */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          <User className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-slate-950 truncate">
                            {rev.name}
                          </h4>
                          <p className="text-xs text-slate-500 leading-normal">
                            Client &bull; {rev.country}
                            {rev.project ? ` \u2022 ${rev.project}` : ""}
                            {rev.platform === "Fiverr (agency)"
                              ? " (via FB International BD)"
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons & Dots: hidden if there is only 1 page */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs active:scale-95 cursor-pointer"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {[...Array(totalPages)].map((_, pageIdx) => (
                  <button
                    key={pageIdx}
                    onClick={() => {
                      setUserInteracted(true);
                      setDirection(pageIdx > currentPage ? 1 : -1);
                      setIndex(pageIdx * itemsPerPage);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentPage === pageIdx ? "w-6 bg-[#087f5b]" : "w-2 bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${pageIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs active:scale-95 cursor-pointer"
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
