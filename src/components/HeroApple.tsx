import React, { useState, useEffect } from "react";
import {
  Mail,
  Download,
  ArrowRight,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  Code2,
  Check,
  Copy,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const snippets = [
  {
    title: "DistanceMatrixPricing.php",
    badge: "Dynamic Rate Engine",
    code: `add_filter('onroute_calc_quote', function($distance, $vehicle, $service) {
    $rates = ['motorcycle' => 1.25, 'van' => 2.10, 'luton' => 3.40];
    $multiplier = ($service === 'express_same_day') ? 1.45 : 1.0;
    $subtotal = ($distance * $rates[$vehicle]) * $multiplier;
    return round($subtotal * 1.20, 2); // Includes VAT
}, 10, 3);`,
  },
  {
    title: "GTM_Deduplication.js",
    badge: "Tracking Protection",
    code: `function pushPurchaseEvent(bookingId, total, currency) {
    const key = 'tx_tracked_' + bookingId;
    if (sessionStorage.getItem(key)) return; // Prevent double-count
    window.dataLayer.push({
        event: 'purchase',
        ecommerce: { transaction_id: bookingId, value: parseFloat(total) }
    });
    sessionStorage.setItem(key, 'true');
}`,
  },
  {
    title: "AsyncEmailWorker.php",
    badge: "Zero-Timeout Queue",
    code: `add_action('labeng_booking_confirmed', function($booking_id) {
    if (!wp_next_scheduled('labeng_async_mail', [$booking_id])) {
        wp_schedule_single_event(time() + 2, 'labeng_async_mail', [$booking_id]);
    }
});`,
  },
];

export function HeroApple() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-24 px-4 apple-canvas"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clean Apple Typography & Direct CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs text-emerald-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Open for Client Builds & Agency Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
                Md. Saidur Rahman
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-medium tracking-tight">
                Full Stack WordPress Developer
              </p>
            </div>

            {/* One Clean, Breathable Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              2+ years engineering custom WordPress platforms, object-oriented plugins, WooCommerce architectures, dynamic distance pricing engines, and GTM/GA4 conversion tracking for clients across the US, UK, and Australia.
            </p>

            {/* 2 Clean Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                asChild
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-7 rounded-full shadow-sm hover:scale-[1.01] transition-all h-12"
              >
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="mr-2 h-4 w-4 text-emerald-400" />
                  Download Updated CV (PDF)
                </a>
              </Button>

              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 rounded-full shadow-sm h-12"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>

              <button
                onClick={scrollToProjects}
                className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors px-3 py-2 flex items-center gap-1"
              >
                Explore Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Subtle Metric Pill Line */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-3 border-t border-slate-200/60 font-normal">
              <div>
                <span className="font-semibold text-slate-900">11 Shipped</span> Last Month (10 Rated 5★)
              </div>
              <div className="hidden sm:inline-block">•</div>
              <div>
                <span className="font-semibold text-slate-900">10-15</span> Monthly Project Velocity
              </div>
              <div className="hidden sm:inline-block">•</div>
              <div>
                <span className="font-semibold text-slate-900">B.Sc. CSE</span> North South University
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sleek Apple Bento Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="apple-card p-6 sm:p-7 space-y-5 bg-white border border-slate-200/80">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    PHP
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-900">WordPress Architecture Workbench</h3>
                    <p className="text-[10px] text-slate-500 font-mono">Clean Hooks & Filters • Zero Core Edits</p>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-900 px-2.5 py-1 rounded-full bg-slate-100 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Snippet Tabs */}
              <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-[11px]">
                {snippets.map((s, idx) => (
                  <button
                    key={s.title}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                      activeTab === idx
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {s.title.split(".")[0]}
                  </button>
                ))}
              </div>

              {/* Code Box */}
              <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner">
                <div className="text-emerald-400 text-[10px] mb-1.5 font-sans">
                  // {currentSnippet.badge}
                </div>
                <pre className="text-slate-300">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Agency Velocity Highlights */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-xl font-bold text-slate-900">$3,000+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Solo Project Value This Mo</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-xl font-bold text-slate-900">$20 - $2,500+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Delivered Scope Range</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
