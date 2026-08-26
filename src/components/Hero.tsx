import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Database,
  Server,
  Code2,
  Braces,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ConstellationNetwork from "@/components/ConstellationNetwork";
import { useEffect, useState } from "react";

const codeSnippets = [
  {
    tab: "PricingEngine.php",
    language: "php",
    desc: "Dynamic Courier Pricing (Distance Matrix)",
    code: `<?php
/**
 * OnRoute Couriers Dynamic Pricing Engine
 * Formula: Distance (mi) x Service Tier x Vehicle Rate
 */
add_filter('onroute_calc_quote', function($distance, $vehicle, $service) {
    $base_rates = [ 'motorcycle' => 1.25, 'van' => 2.10, 'luton' => 3.40 ];
    $multiplier = ($service === 'express_same_day') ? 1.45 : 1.0;
    
    $subtotal = ($distance * $base_rates[$vehicle]) * $multiplier;
    $vat_total = $subtotal * 0.20;
    
    return round($subtotal + $vat_total, 2);
}, 10, 3);`,
  },
  {
    tab: "GTM_Deduplication.js",
    language: "javascript",
    desc: "Stripe-Aware Conversion Deduplication",
    code: `// GTM Purchase Event with Transaction Deduplication
function pushPurchaseEvent(bookingId, transactionTotal, currency) {
    const dedupeKey = 'tx_tracked_' + bookingId;
    if (sessionStorage.getItem(dedupeKey)) return; // Prevent double firing
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'purchase',
        ecommerce: {
            transaction_id: bookingId,
            value: transactionTotal,
            currency: currency || 'GBP',
            items: [{ item_name: 'Courier Booking Service', quantity: 1 }]
        }
    });
    sessionStorage.setItem(dedupeKey, 'true');
}`,
  },
  {
    tab: "AsyncEmailQueue.php",
    language: "php",
    desc: "LaBeng Non-Blocking Booking Dispatcher",
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
    tab: "StoreCreditLedger.php",
    language: "php",
    desc: "Vault Labs WooCommerce Credit Ledger",
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

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");
  const currentSnippet = codeSnippets[activeTab];

  const fullStatus = "$ wp plugin activate --target=production --verified=100%";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullStatus.length) {
        setTerminalOutput(fullStatus.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { icon: Code2, label: "WordPress Core", color: "text-blue-500" },
    { icon: Braces, label: "PHP (OOP)", color: "text-indigo-400" },
    { icon: Server, label: "WooCommerce", color: "text-purple-500" },
    { icon: Database, label: "MySQL Indexing", color: "text-orange-500" },
    { icon: GitBranch, label: "JavaScript ES6+", color: "text-yellow-400" },
    { icon: Code2, label: "Elementor Pro", color: "text-cyan-400" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      <ConstellationNetwork
        density={0.00018}
        linkDistance={140}
        maxSpeed={0.35}
        nodeRadius={1.4}
        mouseStrength={0.06}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-mono text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open for Agency Builds & Full-time Roles
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground">
                11 Shipped Last Month ? 10 Rated 5?
              </span>
            </div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
              >
                Md. Saidur Rahman
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 flex items-center gap-2"
              >
                <span className="text-xl sm:text-2xl font-mono text-muted-foreground">
                  <span className="text-primary font-semibold">const</span> developer ={" "}
                  <span className="text-emerald-400 font-bold">
                    &quot;Full Stack WordPress Developer&quot;
                  </span>
                  ;
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Full Stack WordPress Developer with 2+ years of experience engineering custom
              plugin architectures, bespoke themes, WooCommerce platforms, dynamic pricing engines,
              and GTM/GA4 conversion deduplication for clients across the US, UK, and Australia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>20+ Custom WooCommerce modules (Vault Labs)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Distance Matrix pricing engine (OnRoute)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>GTM/GA4 deduplication & production audit</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>B.Sc. in CSE, North South University</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:saidurr1256@gmail.com" className="hover:text-primary transition-colors">
                  saidurr1256@gmail.com
                </a>
              </div>
              <div className="text-primary font-mono font-medium">
                +880 1515-687002
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 rounded-xl px-6"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch / Hire Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-border hover:border-primary/50 hover:bg-card/60"
                onClick={scrollToProjects}
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="ghost" asChild className="rounded-xl">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  CV (PDF)
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/saidurr1220"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-card/80 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahmansaidur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-card/80 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://saidur-it.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-card/80 border border-border hover:border-primary text-xs font-mono text-muted-foreground hover:text-primary transition-all flex items-center gap-1.5"
              >
                <span>saidur-it.vercel.app</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-gray-950/95 backdrop-blur-xl border border-border/80 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gray-900/90 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-gray-400 ml-2">production_code_preview.sh</span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-white px-2 py-1 rounded bg-gray-800/60 transition-colors"
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

              <div className="flex border-b border-gray-800 bg-gray-900/40 overflow-x-auto text-xs font-mono">
                {codeSnippets.map((s, idx) => (
                  <button
                    key={s.tab}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      activeTab === idx
                        ? "border-primary text-primary bg-gray-800/50 font-semibold"
                        : "border-transparent text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <Braces className="w-3 h-3" />
                    {s.tab}
                  </button>
                ))}
              </div>

              <div className="p-4 font-mono text-xs overflow-x-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-700">
                <div className="text-gray-500 text-[11px] mb-2 font-sans italic">
                  // {currentSnippet.desc}
                </div>
                <pre className="text-gray-300 leading-relaxed">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              <div className="bg-gray-900/80 px-4 py-2.5 border-t border-gray-800 font-mono text-[11px] flex items-center justify-between text-gray-400">
                <div className="flex items-center gap-1.5 text-emerald-400 truncate">
                  <span>{terminalOutput}</span>
                  <span className="animate-pulse">_</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                  LIVE WP AGY
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card/80 backdrop-blur-sm border border-border/80 rounded-xl p-3.5 text-center hover:border-primary/50 transition-all">
                <div className="text-xl sm:text-2xl font-bold text-primary">10-15</div>
                <div className="text-[11px] text-muted-foreground">Client Projects / Mo</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border/80 rounded-xl p-3.5 text-center hover:border-primary/50 transition-all">
                <div className="text-xl sm:text-2xl font-bold text-primary">11 Shipped</div>
                <div className="text-[11px] text-muted-foreground">10 Rated 5? Last Mo</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border/80 rounded-xl p-3.5 text-center hover:border-primary/50 transition-all">
                <div className="text-xl sm:text-2xl font-bold text-primary">$3,000+</div>
                <div className="text-[11px] text-muted-foreground">Solo Value (This Mo)</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border/80 rounded-xl p-3.5 text-center hover:border-primary/50 transition-all">
                <div className="text-xl sm:text-2xl font-bold text-primary">$20 - $2,500+</div>
                <div className="text-[11px] text-muted-foreground">Project Scope Range</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-2 text-center text-[11px] font-medium flex items-center justify-center gap-1.5 hover:border-primary/40 transition-colors"
                >
                  <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                  <span className="truncate">{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
