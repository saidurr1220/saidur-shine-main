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
  Database,
  Server,
  Braces,
  Check,
  Copy,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    tab: "DistanceMatrixPricing.php",
    language: "php",
    desc: "OnRoute Couriers: Dynamic Pricing (Distance x Service x Vehicle)",
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
    $tier_multiplier = ($service === 'express_same_day') ? 1.45 : 1.0;
    
    $subtotal = ($distance * $base_rates[$vehicle]) * $tier_multiplier;
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

export function HeroDev() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");
  const currentSnippet = codeSnippets[activeTab];

  const statusText = "$ wp plugin verify --production-grade=100% --zero-core-edits=true";

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
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 bg-slate-950"
    >
      {/* Background Radial Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Agency Status Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-400 shadow-sm shadow-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open for Client Builds & Full-time Roles
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                11 Shipped Last Month ? 10 Rated 5?
              </span>
            </div>

            {/* Name & Headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Md. Saidur Rahman
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3"
              >
                <span className="text-xl sm:text-2xl font-mono text-slate-300">
                  <span className="text-emerald-400 font-bold">Full Stack WordPress Developer</span>
                </span>
              </motion.div>
            </div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              2+ years of experience engineering custom, production-grade WordPress platforms. Specializing in custom plugin architecture (OOP), complex WooCommerce engines, dynamic distance-based pricing, and GTM/GA4 conversion deduplication for clients across the US, UK, and Australia.
            </motion.p>

            {/* Key Value Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>20+ custom WooCommerce modules (Vault Labs)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Distance Matrix dynamic pricing engine (OnRoute)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>GTM/GA4 Stripe-aware conversion deduplication</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>B.Sc. in CSE, North South University, Dhaka</span>
              </div>
            </motion.div>

            {/* Location & Direct Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:saidurr1256@gmail.com" className="hover:text-emerald-400 transition-colors">
                  saidurr1256@gmail.com
                </a>
              </div>
              <div className="text-emerald-400 font-mono font-medium">
                +880 1515-687002
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-transform h-12 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Hire Me / Project Inquiry
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="rounded-2xl border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 text-white font-medium px-6 h-12 flex items-center gap-2"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                size="lg"
                variant="ghost"
                asChild
                className="rounded-2xl text-slate-300 hover:text-white hover:bg-slate-900 h-12"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 text-emerald-400" />
                  CV (PDF)
                </a>
              </Button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/saidurr1220"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 text-slate-400 hover:text-emerald-400 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahmansaidur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 text-slate-400 hover:text-emerald-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://saidur-it.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-all flex items-center gap-1.5"
              >
                <span>saidur-it.vercel.app</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Studio & Agency Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Interactive IDE Terminal Window */}
            <div className="bg-slate-950 border border-slate-800/90 rounded-3xl overflow-hidden shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">production_code_preview.sh</span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800/70 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-900/40 overflow-x-auto text-xs font-mono scrollbar-none">
                {codeSnippets.map((s, idx) => (
                  <button
                    key={s.tab}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-2.5 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      activeTab === idx
                        ? "border-emerald-400 text-emerald-400 bg-slate-800/50 font-semibold"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Braces className="w-3 h-3" />
                    {s.tab}
                  </button>
                ))}
              </div>

              {/* Code Editor Window */}
              <div className="p-4 font-mono text-xs overflow-x-auto max-h-64 scrollbar-thin scrollbar-thumb-slate-800">
                <div className="text-slate-500 text-[11px] mb-2 font-sans italic">
                  // {currentSnippet.desc}
                </div>
                <pre className="text-slate-300 leading-relaxed">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Terminal Live Command Footer */}
              <div className="bg-slate-900/80 px-4 py-2.5 border-t border-slate-800 font-mono text-[11px] flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400 truncate">
                  <span>{terminalOutput}</span>
                  <span className="animate-pulse">_</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                  PRODUCTION
                </Badge>
              </div>
            </div>

            {/* Real Agency Delivery Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3.5 text-center hover:border-emerald-500/40 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">10?15</div>
                <div className="text-[11px] text-slate-400 font-mono">Projects / Month</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3.5 text-center hover:border-emerald-500/40 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">11 Shipped</div>
                <div className="text-[11px] text-slate-400 font-mono">10 Rated 5? (Last Mo)</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3.5 text-center hover:border-emerald-500/40 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">$3,000+</div>
                <div className="text-[11px] text-slate-400 font-mono">Solo Value (This Mo)</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3.5 text-center hover:border-emerald-500/40 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">$20 ? $2,500+</div>
                <div className="text-[11px] text-slate-400 font-mono">Scope Range Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
