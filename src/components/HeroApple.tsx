import React, { useState } from "react";
import {
  Mail,
  Download,
  ArrowRight,
  ShieldCheck,
  Code2,
  Check,
  Copy,
  Zap,
  RotateCcw,
  CheckCircle2,
  Route,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function HeroApple() {
  const [activeInspectorTab, setActiveInspectorTab] = useState<"pricing" | "dedup" | "woo" | "code">("pricing");

  // 1. Dynamic Pricing Simulator State (OnRoute Couriers)
  const [distance, setDistance] = useState(38);
  const [vehicle, setVehicle] = useState<"motorcycle" | "van" | "luton">("van");
  const [isExpress, setIsExpress] = useState(false);

  const vehicleRates = {
    motorcycle: { label: "Motorcycle", rate: 1.25 },
    van: { label: "Transit Van", rate: 2.10 },
    luton: { label: "Luton Tail-lift", rate: 3.40 },
  };

  const currentRate = vehicleRates[vehicle].rate;
  const tierMultiplier = isExpress ? 1.45 : 1.0;
  const subtotal = Math.round(distance * currentRate * tierMultiplier * 100) / 100;
  const vat = Math.round(subtotal * 0.20 * 100) / 100;
  const total = Math.round((subtotal + vat) * 100) / 100;

  // 2. Conversion Deduplication Simulator State
  const [trackedTransactions, setTrackedTransactions] = useState<string[]>([]);
  const [dedupStatus, setDedupStatus] = useState<"idle" | "first_pass" | "dedup_blocked">("idle");
  const [currentTxId, setCurrentTxId] = useState("TX-7842");

  const handleSimulateCheckout = () => {
    if (trackedTransactions.includes(currentTxId)) {
      setDedupStatus("dedup_blocked");
    } else {
      setTrackedTransactions((prev) => [...prev, currentTxId]);
      setDedupStatus("first_pass");
    }
  };

  const handleResetDedup = () => {
    const newId = "TX-" + Math.floor(1000 + Math.random() * 9000);
    setCurrentTxId(newId);
    setTrackedTransactions([]);
    setDedupStatus("idle");
  };

  // 3. WooCommerce Dual-Mode & Store Credit State (Vault Labs)
  const [isWholesale, setIsWholesale] = useState(false);
  const [applyStoreCredit, setApplyStoreCredit] = useState(true);
  const qty = isWholesale ? 50 : 1;
  const unitPrice = isWholesale ? 42.0 : 89.0;
  const rawTotal = qty * unitPrice;
  const storeCreditBalance = 150.0;
  const appliedCredit = applyStoreCredit ? Math.min(rawTotal, storeCreditBalance) : 0;
  const finalCartTotal = rawTotal - appliedCredit;

  // 4. Code Snippet Copy State
  const [copied, setCopied] = useState(false);
  const codeSnippet = `<?php
/**
 * OnRoute Couriers: Dynamic Distance Pricing Filter
 * Formula: Distance (mi) x Rate x Tier x VAT
 */
add_filter('onroute_calc_quote', function($distance, $vehicle, $service) {
    $rates = ['motorcycle' => 1.25, 'van' => 2.10, 'luton' => 3.40];
    $multiplier = ($service === 'express_same_day') ? 1.45 : 1.0;
    $subtotal = ($distance * $rates[$vehicle]) * $multiplier;
    return round($subtotal * 1.20, 2); // includes 20% UK VAT
}, 10, 3);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const tabs = [
    { id: "pricing", label: "Pricing Engine", icon: Route },
    { id: "dedup", label: "GTM Dedup", icon: ShieldCheck },
    { id: "woo", label: "Woo Credit", icon: ShoppingCart },
    { id: "code", label: "PHP Code", icon: Code2 },
  ] as const;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-24 px-4 apple-canvas"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs text-emerald-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Open for Client Builds &amp; Agency Roles</span>
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

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              2+ years engineering custom WordPress platforms, object-oriented plugins, WooCommerce architectures, dynamic distance pricing engines, and GTM/GA4 conversion tracking for clients across the US, UK, and Australia.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                asChild
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-7 rounded-full shadow-sm hover:scale-[1.01] transition-all h-12"
              >
                <a href="/Md_Saidur_Rahman_resume.pdf" download="Md_Saidur_Rahman_resume.pdf">
                  <Download className="mr-2 h-4 w-4 text-emerald-400" />
                  Download Updated CV
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
                Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metric Row */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-3 border-t border-slate-200/60">
              <div>
                <span className="font-semibold text-slate-900">11 Shipped</span> Last Month (10 Rated 5-Star)
              </div>
              <span className="hidden sm:inline-block">&#8226;</span>
              <div>
                <span className="font-semibold text-slate-900">10-15</span> Projects / Month
              </div>
              <span className="hidden sm:inline-block">&#8226;</span>
              <div>
                <span className="font-semibold text-slate-900">B.Sc. CSE</span> ? NSU
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive WordPress Production Inspector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="apple-card p-5 sm:p-6 bg-white border border-slate-200 shadow-xl space-y-4">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Live WordPress Production Inspector</h3>
                    <p className="text-[10px] text-slate-400 font-mono">Interact with real backend engineering logic</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px] font-mono text-emerald-700 border-emerald-200 bg-emerald-50">
                  LIVE
                </Badge>
              </div>

              {/* Tab Switcher ? using Lucide icons, no emojis */}
              <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInspectorTab(tab.id)}
                    className={`flex flex-col items-center gap-0.5 py-2 px-1 rounded-lg transition-all text-[10px] font-semibold ${
                      activeInspectorTab === tab.id
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <tab.icon className={`w-3.5 h-3.5 ${activeInspectorTab === tab.id ? "text-emerald-600" : ""}`} />
                    <span className="truncate w-full text-center">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* TAB 1: DYNAMIC PRICING SIMULATOR */}
              {activeInspectorTab === "pricing" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">Road Distance:</span>
                    <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                      {distance} miles
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />

                  <div>
                    <span className="text-xs text-slate-600 font-medium block mb-1.5">Vehicle Class:</span>
                    <div className="grid grid-cols-3 gap-2">
                      {(["motorcycle", "van", "luton"] as const).map((v) => (
                        <button
                          key={v}
                          onClick={() => setVehicle(v)}
                          className={`py-1.5 px-2 rounded-xl text-xs font-medium border transition-all ${
                            vehicle === v
                              ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {vehicleRates[v].label}
                          <span className="block text-[10px] opacity-70 font-mono mt-0.5">
                            GBP{vehicleRates[v].rate}/mi
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      checked={isExpress}
                      onChange={(e) => setIsExpress(e.target.checked)}
                      className="rounded text-emerald-600 h-4 w-4"
                    />
                    Same-Day Express (+45% priority multiplier)
                  </label>

                  {/* Live Output */}
                  <div className="p-3.5 bg-slate-950 text-white rounded-2xl space-y-1.5 shadow-inner text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>{distance}mi x GBP{currentRate} x {tierMultiplier}x:</span>
                      <span className="font-mono text-slate-200">GBP{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>UK VAT (20%):</span>
                      <span className="font-mono text-slate-200">GBP{vat.toFixed(2)}</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-800 flex justify-between font-bold text-sm">
                      <span className="text-emerald-400">Calculated Quote:</span>
                      <span className="font-mono text-emerald-400">GBP{total.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 text-right">Hook: onroute_calc_quote ? 0.3ms</p>
                </div>
              )}

              {/* TAB 2: GTM / STRIPE DEDUPLICATION TESTER */}
              {activeInspectorTab === "dedup" && (
                <div className="space-y-3.5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Simulates a Stripe checkout event with sessionStorage deduplication, protecting Google Ads and GA4 from duplicate conversion counting on page refresh or back-navigation.
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Transaction ID:</span>
                      <span className="font-mono font-bold text-slate-900">{currentTxId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">dedup_lock status:</span>
                      <span className={`font-mono font-semibold ${trackedTransactions.includes(currentTxId) ? "text-rose-600" : "text-emerald-600"}`}>
                        {trackedTransactions.includes(currentTxId) ? "LOCKED" : "READY"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={handleSimulateCheckout}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs h-9 rounded-xl"
                    >
                      Trigger Stripe Checkout Event
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleResetDedup}
                      className="text-xs border-slate-200 h-9 rounded-xl px-3"
                      title="New Transaction ID"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </Button>
                  </div>

                  {dedupStatus === "first_pass" && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Purchase event pushed to dataLayer</p>
                        <p className="text-[11px] text-emerald-700 mt-0.5 font-mono">{currentTxId} tracked ? sessionStorage lock set</p>
                      </div>
                    </div>
                  )}

                  {dedupStatus === "dedup_blocked" && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Duplicate blocked ? ad spend protected</p>
                        <p className="text-[11px] text-rose-700 mt-0.5 font-mono">{currentTxId} already tracked ? Google Ads event suppressed</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: WOOCOMMERCE STORE CREDIT & DUAL-MODE */}
              {activeInspectorTab === "woo" && (
                <div className="space-y-3.5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Vault Labs dual-mode purchasing: toggle between B2C single kit and B2B wholesale, then apply the Store Credit ledger deduction via <span className="font-mono font-semibold text-slate-900">woocommerce_cart_calculate_fees</span>.
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setIsWholesale(false)}
                      className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-left ${
                        !isWholesale ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      B2C Single Kit
                      <span className="block text-[10px] opacity-70 font-mono mt-0.5">$89.00 / kit</span>
                    </button>
                    <button
                      onClick={() => setIsWholesale(true)}
                      className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-left ${
                        isWholesale ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      B2B Wholesale (50pk)
                      <span className="block text-[10px] opacity-70 font-mono mt-0.5">$42.00 / kit</span>
                    </button>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <input
                      type="checkbox"
                      checked={applyStoreCredit}
                      onChange={(e) => setApplyStoreCredit(e.target.checked)}
                      className="rounded text-emerald-600 h-4 w-4"
                    />
                    Apply Store Credit (Balance: $150.00)
                  </label>

                  <div className="p-3.5 bg-slate-950 text-white rounded-2xl space-y-1.5 shadow-inner text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Cart Subtotal ({qty} x ${unitPrice}):</span>
                      <span className="font-mono text-slate-200">${rawTotal.toFixed(2)}</span>
                    </div>
                    {applyStoreCredit && appliedCredit > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Store Credit deducted:</span>
                        <span className="font-mono">-${appliedCredit.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="pt-1.5 border-t border-slate-800 flex justify-between font-bold text-sm">
                      <span className="text-emerald-400">Net Checkout Total:</span>
                      <span className="font-mono text-emerald-400">${finalCartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: PRODUCTION PHP CODE */}
              {activeInspectorTab === "code" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono">DistanceMatrixPricing.php</span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-900 px-2 py-0.5 rounded-md bg-slate-100 font-mono"
                    >
                      {copied ? <><Check className="w-3 h-3 text-emerald-600" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                    </button>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950 text-slate-200 font-mono text-[11px] leading-relaxed max-h-52 overflow-y-auto shadow-inner">
                    <pre className="text-emerald-300">
                      <code>{codeSnippet}</code>
                    </pre>
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 text-center">
                    OOP hook ? 100% upgrade-safe, no core modifications
                  </p>
                </div>
              )}

              {/* Bottom Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-sm font-bold text-slate-900">10 to 15 / Month</div>
                  <div className="text-[10px] text-slate-500">Agency Project Velocity</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-sm font-bold text-emerald-700">10 Rated 5 Stars</div>
                  <div className="text-[10px] text-slate-500">Out of 11 Shipped Last Month</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
