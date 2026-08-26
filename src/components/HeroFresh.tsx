import React, { useState, useEffect } from "react";
import {
  Mail,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  Code2,
  Braces,
  Check,
  Copy,
  Sparkles,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    tab: "DistanceMatrixPricing.php",
    language: "php",
    desc: "OnRoute Couriers: Dynamic Pricing Engine (Distance x Service Tier x Vehicle Class)",
    code: `<?php
/**
 * OnRoute Couriers Dynamic Pricing Engine
 * Formula: Distance (mi) x Service Tier x Vehicle Rate + Surcharges
 */
add_filter('onroute_calc_quote', function($distance, $vehicle, $service) {
    $base_rates = [ 
        'motorcycle' => 1.25, 
        'van'        => 2.10, 
        'luton'      => 3.40 
    ];
    $multiplier = ($service === 'express_same_day') ? 1.45 : 1.0;
    
    $subtotal = ($distance * $base_rates[$vehicle]) * $multiplier;
    $vat_total = $subtotal * 0.20;
    
    return round($subtotal + $vat_total, 2);
}, 10, 3);`,
  },
  {
    tab: "GTM_Deduplication.js",
    language: "javascript",
    desc: "Stripe-Aware Conversion Deduplication (Prevents Double Counts)",
    code: `// GTM Purchase Event with Transaction Deduplication
function pushPurchaseEvent(bookingId, transactionTotal, currency) {
    const dedupeKey = 'tx_tracked_' + bookingId;
    if (sessionStorage.getItem(dedupeKey)) return; // Prevent duplicate firing
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'purchase',
        ecommerce: {
            transaction_id: bookingId,
            value: parseFloat(transactionTotal),
            currency: currency || 'GBP',
            items: [{ item_name: 'Courier Booking Service', quantity: 1 }]
        }
    });
    sessionStorage.setItem(dedupeKey, 'true');
}`,
  },
  {
    tab: "AsyncEmailDispatcher.php",
    language: "php",
    desc: "LaBeng: Non-Blocking WP-Cron Asynchronous Email Worker",
    code: `<?php
// Eliminates synchronous SMTP timeouts via WP-Cron queue
add_action('labeng_booking_confirmed', function($booking_id) {
    if (!wp_next_scheduled('labeng_dispatch_async_email', [$booking_id])) {
        wp_schedule_single_event(
            time() + 2, 
            'labeng_dispatch_async_email', 
            [$booking_id]
        );
    }
});`,
  },
  {
    tab: "WooStoreCreditLedger.php",
    language: "php",
    desc: "Vault Labs: WooCommerce Store Credit Checkout Ledger",
    code: `<?php
// Custom Store Credit redemption at WooCommerce checkout
add_action('woocommerce_cart_calculate_fees', function($cart) {
    if (is_admin() && !defined('DOING_AJAX')) return;
    $user_id = get_current_user_id();
    $credit_balance = (float) get_user_meta($user_id, '_vault_store_credit', true);
    
    if ($credit_balance > 0 && WC()->session->get('use_vault_credit')) {
        $discount = min($cart->get_subtotal(), $credit_balance);
        $cart->add_fee(__('Store Credit Applied', 'vault-labs'), -$discount);
    }
});`,
  },
];

export function HeroFresh() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");
  const currentSnippet = codeSnippets[activeTab];

  const statusText = "$ wp plugin verify --production-grade=100% --upgrade-safe=true";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= statusText.length) {
        setTerminalOutput(statusText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, []);

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
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-4 fresh-hero-bg"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bio & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Agency Status Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs font-mono text-emerald-800 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                Open for Client Builds & Full-time Roles
              </span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                11 Shipped Last Month • 10 Rated 5★
              </span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Md. Saidur Rahman
              </h1>

              <div className="mt-3">
                <span className="text-xl sm:text-2xl font-mono text-slate-700">
                  <span className="text-emerald-700 font-bold">Full Stack WordPress Developer</span>
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              2+ years of experience building custom, production-grade WordPress platforms. Specializing in custom plugin development (OOP), membership systems, booking engines, WooCommerce solutions, and conversion tracking for clients across the US, UK, and Australia.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>20+ custom WooCommerce modules (Vault Labs)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Distance Matrix dynamic pricing engine (OnRoute)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>GTM/GA4 Stripe-aware conversion deduplication</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>B.Sc. in CSE, North South University, Dhaka</span>
              </div>
            </div>

            {/* Location & Direct Info */}
            <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-600" />
                <a href="mailto:saidurr1256@gmail.com" className="hover:text-emerald-700 transition-colors font-medium">
                  saidurr1256@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-600" />
                <a href="https://wa.me/8801515687002" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-mono font-semibold hover:underline">
                  +880 1515-687002
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-3">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 rounded-2xl shadow-lg shadow-emerald-600/20 hover:scale-[1.02] transition-transform h-12 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Hire Me / Project Inquiry
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-2xl border-slate-300 hover:border-emerald-600 hover:bg-emerald-50/50 bg-white text-slate-800 font-medium px-6 h-12 flex items-center gap-2 shadow-sm"
              >
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="mr-1.5 h-4 w-4 text-emerald-600" />
                  Download CV (PDF)
                </a>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                onClick={scrollToProjects}
                className="rounded-2xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 h-12"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/saidurr1220"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 text-slate-600 hover:text-emerald-600 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahmansaidur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 text-slate-600 hover:text-emerald-600 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://saidur-it.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 text-xs font-mono text-slate-700 hover:text-emerald-700 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>saidur-it.vercel.app</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Light Code Studio & Delivery KPI Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Clean Light Code Studio Window */}
            <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl">
              {/* Window Header */}
              <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-600 ml-2 font-medium">architecture_workbench.php</span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-xl bg-white border border-slate-200 shadow-sm transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
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
              <div className="flex border-b border-slate-200 bg-slate-50/50 overflow-x-auto text-xs font-mono scrollbar-none">
                {codeSnippets.map((s, idx) => (
                  <button
                    key={s.tab}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-2.5 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      activeTab === idx
                        ? "border-emerald-600 text-emerald-700 bg-white font-semibold shadow-sm"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <Braces className="w-3 h-3" />
                    {s.tab}
                  </button>
                ))}
              </div>

              {/* Code Snippet Editor */}
              <div className="p-4 font-mono text-xs overflow-x-auto max-h-64 scrollbar-thin scrollbar-thumb-slate-300 bg-slate-950 text-slate-200">
                <div className="text-slate-400 text-[11px] mb-2 font-sans italic">
                  // {currentSnippet.desc}
                </div>
                <pre className="text-emerald-300 leading-relaxed">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Terminal Typewriter Line */}
              <div className="bg-slate-900 px-4 py-2.5 font-mono text-[11px] flex items-center justify-between text-slate-300">
                <div className="flex items-center gap-1.5 text-emerald-400 truncate">
                  <span>{terminalOutput}</span>
                  <span className="animate-pulse">_</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
                  PRODUCTION
                </Badge>
              </div>
            </div>

            {/* Real Agency Delivery Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="fresh-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-extrabold text-emerald-700">10–15</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5 font-medium">Projects / Month</div>
              </div>
              <div className="fresh-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-extrabold text-emerald-700">11 Shipped</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5 font-medium">10 Rated 5★ (Last Mo)</div>
              </div>
              <div className="fresh-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-extrabold text-emerald-700">$3,000+</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5 font-medium">Solo Value (This Mo)</div>
              </div>
              <div className="fresh-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-extrabold text-emerald-700">$20 – $2,500+</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5 font-medium">Scope Range Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
