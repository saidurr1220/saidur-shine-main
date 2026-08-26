import React, { useState, useEffect } from "react";
import {
  Star,
  CheckCircle2,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const reviewsData = [
  {
    id: "direct-1",
    category: "direct",
    client: "Nick",
    role: "Founder & Operations Lead",
    company: "Vault Labs Research",
    location: "United States",
    platform: "Direct Client",
    project: "20+ WooCommerce Custom Modules & Store Credit Ledger",
    date: "2026",
    rating: 5,
    quote:
      "Transformed WooCommerce into a full laboratory research commerce platform. Built 20+ custom modules via hooks and filters only - keeping core 100% upgrade-safe. Dual-mode wholesale inventory and store credit checkout work seamlessly.",
    endorsements: ["WooCommerce Hooks", "Store Credit Ledger", "COA Management", "100% Upgrade-Safe"],
    badge: "Vault Labs Research",
  },
  {
    id: "direct-2",
    category: "direct",
    client: "Shahbaz",
    role: "Managing Director",
    company: "OnRoute Couriers Ltd",
    location: "United Kingdom",
    platform: "Direct Client",
    project: "Google Distance Matrix Dynamic Pricing & Stripe",
    date: "2026",
    rating: 5,
    quote:
      "Saidur built our multi-step courier quote calculator and Stripe checkout from scratch. The dynamic pricing formula is fast (0.3ms), and the GTM conversion tracking with deduplication solved our ad spend reporting completely.",
    endorsements: ["Distance Matrix API", "Stripe Webhooks", "GTM/GA4 Deduplication"],
    badge: "OnRoute Couriers",
  },
  {
    id: "direct-3",
    category: "direct",
    client: "Mr. Parvez Manzuri",
    role: "Executive Lead",
    company: "California Landlords Union",
    location: "United States",
    platform: "Direct Client",
    project: "SaaS Member Dashboard & Union AI Assistant",
    date: "2026",
    rating: 5,
    quote:
      "Saidur engineered our complete 6-module SaaS member dashboard and integrated the custom Union AI Assistant for landlord legal assistance. Shipped with precision under a strict live launch deadline.",
    endorsements: ["Union AI Assistant", "SaaS Member Dashboard", "3-Tier PMPro"],
    badge: "California Landlords Union",
  },
  {
    id: "direct-4",
    category: "direct",
    client: "Kody",
    role: "Founder & Product Lead",
    company: "Welding Leads",
    location: "United States",
    platform: "Direct Client",
    project: "SaaS Lead CRM & Database Indexing Optimization",
    date: "2026",
    rating: 5,
    quote:
      "Resolved our database query performance bottleneck by engineering an indexed SQL lookup table (10x faster) and built our subscription CRM logic from scratch. Deep WordPress expertise and fast turnaround.",
    endorsements: ["MySQL Indexing Fix", "Custom CRM Logic", "10x Query Speed"],
    badge: "Welding Leads",
  },
  {
    id: "upwork-1",
    category: "upwork",
    client: "Upwork Verified Client",
    role: "Website Owner",
    company: "WordPress Migration",
    location: "United States",
    platform: "Upwork Verified",
    project: "WordPress Backup & Migration",
    date: "Aug 2026",
    rating: 5,
    quote:
      "I was being given the run around trying to migrate a WordPress website. MD Saidur managed to do this and get the website functioning in a few hours. Reliable, committed to quality, and a clear communicator.",
    endorsements: ["WordPress Migration", "Reliable", "Committed to Quality", "Clear Communicator"],
    badge: "5.0 Upwork Contract",
  },
  {
    id: "upwork-2",
    category: "upwork",
    client: "Upwork Verified Client",
    role: "Business Client",
    company: "Security & Site Protection",
    location: "United Kingdom",
    platform: "Upwork Verified",
    project: "WordPress Security & Malware Removal",
    date: "Nov 2025",
    rating: 5,
    quote:
      "Md Saidur delivered an excellent service from start to finish. My website had been affected by malware and he handled the entire cleanup with real expertise. Accountable for outcomes and solution oriented.",
    endorsements: ["Malware Removal", "Solution Oriented", "Accountable for Outcomes"],
    badge: "5.0 Upwork Contract",
  },
  {
    id: "upwork-3",
    category: "upwork",
    client: "Upwork Verified Client",
    role: "Long-Term Client",
    company: "Maintenance & Architecture",
    location: "United Kingdom",
    platform: "Upwork Verified",
    project: "Ongoing WordPress Architecture & Maintenance",
    date: "Long-term Client",
    rating: 5,
    quote:
      "Great guy, used MD now for a long time and he is always quick to respond and happy to help in every way. Can't recommend him enough!",
    endorsements: ["Clear Communicator", "Collaborative", "Fast Response"],
    badge: "5.0 Upwork Contract",
  },
  {
    id: "upwork-4",
    category: "upwork",
    client: "Upwork Verified Client",
    role: "Business Owner",
    company: "WordPress Bug Fixes",
    location: "United States",
    platform: "Upwork Verified",
    project: "WordPress Bug Fixes & Architecture",
    date: "Contract Completed",
    rating: 5,
    quote:
      "One of a kind. Very persistent and driven to result. I'm more than satisfied with his work. Thank you!",
    endorsements: ["Driven to Results", "Detail Oriented", "Committed to Quality"],
    badge: "5.0 Upwork Contract",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -30 : 30,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

export function TestimonialsApple() {
  const [activeFilter, setActiveFilter] = useState<"all" | "direct" | "upwork">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredReviews = reviewsData.filter((r) => {
    if (activeFilter === "all") return true;
    return r.category === activeFilter;
  });

  const totalSlides = Math.ceil(filteredReviews.length / 2);

  useEffect(() => {
    setCurrentIndex(0);
    setDirection(1);
  }, [activeFilter]);

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 8500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalSlides]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentPair = [
    filteredReviews[currentIndex * 2],
    filteredReviews[currentIndex * 2 + 1],
  ].filter(Boolean);

  return (
    <section id="testimonials" className="py-28 px-4 bg-white border-t border-black/[0.04]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Client Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            What Clients &amp; Agencies Say
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Real 5.0-star verified client feedback across Upwork contracts and production platforms (Nick, Shahbaz, Mr. Parvez Manzuri, Kody).
          </p>

          {/* Social Proof Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1">
                <span>5.0</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">100% Upwork Rating</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-xl font-bold text-emerald-700">10 of 11</div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">5-Star Rated Last Month</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-xl font-bold text-slate-900">Top Rated</div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">Clear Communicator</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-xl font-bold text-slate-900">100%</div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">Upgrade-Safe Code</div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-slate-900 text-white shadow-sm font-semibold"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              All Reviews ({reviewsData.length})
            </button>

            <button
              onClick={() => setActiveFilter("direct")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                activeFilter === "direct"
                  ? "bg-slate-900 text-white shadow-sm font-semibold"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Platform Clients</span>
              <span className="text-[10px] opacity-75">(Nick, Shahbaz, Parvez, Kody)</span>
            </button>

            <button
              onClick={() => setActiveFilter("upwork")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === "upwork"
                  ? "bg-slate-900 text-white shadow-sm font-semibold"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Upwork Verified (5.0 Stars)</span>
            </button>
          </div>
        </motion.div>

        {/* REVIEWS SLIDER */}
        <div className="relative max-w-5xl mx-auto">
          <div className="min-h-[360px] flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${activeFilter}-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
              >
                {currentPair.map((item) => (
                  <div
                    key={item.id}
                    className="apple-card p-6 sm:p-8 flex flex-col justify-between h-full space-y-5 bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Top Rating & Project Badge */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-0.5">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <span className="px-3 py-0.5 bg-slate-100 text-slate-700 rounded-full text-[11px] font-mono font-medium">
                          {item.badge}
                        </span>
                      </div>

                      {/* Project Tag */}
                      <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/80 inline-block">
                        {item.project}
                      </p>

                      {/* Quote */}
                      <p className="text-sm text-slate-700 leading-relaxed italic">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Clean, Non-Wrapping Responsive Client Footer */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        {/* Client Name & Role */}
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5 truncate">
                            <span>{item.client}</span>
                            {item.category === "upwork" && (
                              <BadgeCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" title="Verified Upwork Client" />
                            )}
                          </h3>
                          <p className="text-xs text-slate-500 truncate mt-0.5">
                            <span>{item.role}</span>
                            {item.company && <span> - {item.company}</span>}
                          </p>
                        </div>

                        {/* Location Pill without any ? */}
                        <div className="flex-shrink-0">
                          <span className="whitespace-nowrap inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/80">
                            <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                            <span>{item.location}</span>
                            <span className="text-slate-300">/</span>
                            <span className="text-slate-400 text-[10px]">{item.date}</span>
                          </span>
                        </div>
                      </div>

                      {/* Endorsement Tags */}
                      {item.endorsements && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.endorsements.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 px-2">
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm"
                aria-label="Previous Reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm"
                aria-label="Next Reviews"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-xs text-slate-500 hover:text-slate-900 ml-2"
              >
                {isAutoPlaying ? "Pause Auto-slide" : "Play Auto-slide"}
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-1.5">
              {[...Array(totalSlides)].map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > currentIndex ? 1 : -1);
                    setCurrentIndex(dotIdx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx
                      ? "w-6 bg-slate-900"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
