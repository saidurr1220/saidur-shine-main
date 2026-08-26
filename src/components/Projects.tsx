import { useState } from "react";
import {
  ExternalLink,
  FileText,
  Workflow,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface ProjectType {
  id: string;
  title: string;
  location: string;
  category: string;
  filterCategory: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  architecture: string;
  tags: string[];
  url: string;
  github: string;
  metrics: Record<string, string>;
  workflowSteps?: { step: string; detail: string }[];
  highlightBadge?: string;
}

export const projects: ProjectType[] = [
  {
    id: "vault-labs-research",
    title: "Vault Labs Research - Laboratory Research Commerce Platform",
    location: "US Client",
    category: "WordPress",
    filterCategory: "WooCommerce",
    highlightBadge: "20+ Custom Modules",
    description:
      "Custom laboratory research product management platform built on WooCommerce",
    problem:
      "Standard WooCommerce couldn't support wholesale/single-kit purchasing, store credit, or per-variation compliance documentation for laboratory research products",
    solution:
      "Transformed WooCommerce into a full platform with 20+ custom modules without modifying core, including a dual-mode purchasing system (Wholesale + Single Kit) with shared inventory, a production Store Credit platform with admin ledger and checkout redemption, variation-based COA/documentation management, and a configurable multi-carrier shipping engine",
    impact:
      "Enabled complex B2B/B2C purchasing flows and compliance documentation at scale while keeping WooCommerce upgrade-safe",
    architecture: "WordPress + WooCommerce + PHP + ACF Pro + WP REST API",
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "MySQL",
      "AJAX",
      "ACF Pro",
      "WP REST API",
      "ATUM Inventory",
      "LiteSpeed Cache",
    ],
    url: "https://vaultlabsresearch.net",
    github: "",
    metrics: {
      modules: "20+ custom",
      inventory: "Shared, dual-mode",
      docs: "Variation-based COA",
    },
    workflowSteps: [
      { step: "1. Core Isolation", detail: "Hooks & filters only ? zero core modifications for 100% upgrade safety" },
      { step: "2. Dual-Mode Cart", detail: "Wholesale & single-kit dynamic unit pricing with shared SKU inventory" },
      { step: "3. Store Credit Ledger", detail: "Admin ledger & checkout redemption engine with automated balance checks" },
      { step: "4. COA Engine", detail: "Per-variation compliance PDF generation & gated buyer download pipeline" },
    ],
  },
  {
    id: "on-route-couriers",
    title: "On Route Couriers - Custom Booking & Pricing Platform",
    location: "UK Client",
    category: "WordPress",
    filterCategory: "Booking & Pricing",
    highlightBadge: "GTM / Stripe Dedup",
    description:
      "Multi-step courier booking platform with dynamic pricing, Stripe checkout, and full conversion tracking",
    problem:
      "Needed a booking-to-checkout flow with real-time formula-based pricing, reliable payment handling, and accurate marketing conversion data without double-counting cancelled bookings",
    solution:
      "Built a multi-step booking and instant-quote system from quote generation through confirmation, with a dynamic pricing engine (Distance x Service x Vehicle) via Google Distance Matrix. Integrated Stripe Checkout with webhook-based payment status handling, VAT calculation, and promo logic. Implemented GTM, GA4, and Google Ads conversion tracking with Stripe-aware deduplication using transaction identifiers, so cancelled bookings never appear as purchases. Audited the production tracking setup end to end: trigger validation, duplicate-tracking checks, GTM versioning, and rollback preparation.",
    impact:
      "Delivered a reliable quote-to-checkout flow with accurate, deduplicated conversion tracking the client can trust for ad spend decisions",
    architecture: "WordPress + PHP + Custom Plugin + GTM/GA4",
    tags: [
      "WordPress",
      "PHP",
      "Google Maps API",
      "Stripe",
      "GTM",
      "GA4",
      "Google Ads",
      "Custom Plugin Development",
    ],
    url: "https://www.onroutecouriers.com",
    github: "",
    metrics: {
      pricing: "Dynamic engine",
      tracking: "GTM/GA4 + dedup",
      payments: "Stripe checkout",
    },
    workflowSteps: [
      { step: "1. Route Calculation", detail: "Google Distance Matrix API calculates precise road distance & drive time" },
      { step: "2. Dynamic Pricing Engine", detail: "Formula applied: Distance x Service Tier x Vehicle Class + Surcharges" },
      { step: "3. Stripe Webhooks", detail: "Asynchronous webhook verification for instant booking confirmation" },
      { step: "4. Conversion Dedup", detail: "Transaction-ID bound GTM/GA4/Google Ads tracking preventing duplicate ad metrics" },
    ],
  },
  {
    id: "california-landlords-union",
    title: "California Landlords Union - Membership Portal & LMS",
    location: "US Client",
    category: "WordPress",
    filterCategory: "Membership & LMS",
    highlightBadge: "3-Tier Membership & LMS",
    description:
      "SaaS-style member dashboard with tiered membership, LMS, and automated onboarding",
    problem:
      "Took over a partially-built membership platform under a live launch deadline with broken registration and a misconfigured payment gateway",
    solution:
      "Fixed critical launch blockers, then built a fully custom SaaS-style member dashboard (Astra child theme) with tabbed navigation across 6 modules. Integrated a 3-tier Paid Memberships Pro system with Tutor LMS and Fluent Forms, plus a custom auto-generated Member ID system via PHP hooks and tier-based SLA messaging",
    impact:
      "Shipped on a live launch deadline with a fully functional 3-tier membership and LMS experience",
    architecture: "WordPress + Elementor Pro + PHP + Paid Memberships Pro",
    tags: [
      "WordPress",
      "Elementor Pro",
      "PHP",
      "Paid Memberships Pro",
      "Tutor LMS",
      "Fluent Forms",
      "Stripe",
      "Custom Child Theme",
    ],
    url: "https://californialandlordsunion.com",
    github: "",
    metrics: {
      tiers: "3-tier membership",
      modules: "6 dashboard modules",
      launch: "Live deadline met",
    },
    workflowSteps: [
      { step: "1. Triage & Recovery", detail: "Resolved registration blockers and Stripe sandbox-to-live credentials" },
      { step: "2. Custom Child Theme", detail: "Engineered tabbed SaaS dashboard UI with Astra child theme architecture" },
      { step: "3. Tutor LMS Hook", detail: "Tier-based course access restrictions synced with PMPro member levels" },
      { step: "4. Auto Member IDs", detail: "Unique incremental alphanumeric member ID generated on user registration" },
    ],
  },
  {
    id: "labeng",
    title: "LaBeng - Local Business Discovery & Booking Platform",
    location: "UK Client",
    category: "WordPress",
    filterCategory: "Booking & Pricing",
    highlightBadge: "Async Email Pipeline",
    description:
      "Fully custom WordPress theme with dual authentication and appointment booking",
    problem:
      "Needed a custom-built discovery and booking platform with separate customer/business flows and reliable, fast registration",
    solution:
      "Built a fully custom WordPress theme from scratch (no page builders) with dual customer/business authentication systems, a responsive appointment booking system with dynamic availability, and a mobile-first booking calendar. Diagnosed and eliminated a registration timeout bug by redesigning synchronous email processing into an asynchronous workflow",
    impact:
      "Eliminated registration timeouts and delivered a reliable, mobile-first booking experience",
    architecture: "WordPress + PHP + MySQL + JavaScript (jQuery)",
    tags: [
      "WordPress",
      "PHP",
      "MySQL",
      "JavaScript (jQuery)",
      "AJAX",
      "Google Workspace SMTP",
      "LiteSpeed Cache",
    ],
    url: "https://labeng.co.uk",
    github: "",
    metrics: {
      theme: "Fully custom",
      auth: "Dual customer/business",
      bugfix: "Async email pipeline",
    },
    workflowSteps: [
      { step: "1. Custom Architecture", detail: "Clean bespoke theme coded from scratch without heavy page builder bloat" },
      { step: "2. Dual Role Auth", detail: "Separate registration & portal pipelines for clients vs service businesses" },
      { step: "3. Async Mail Queue", detail: "Decoupled SMTP email delivery from HTTP response to prevent timeouts" },
      { step: "4. Dynamic Booking", detail: "Real-time calendar slot calculation based on provider working hours" },
    ],
  },
  {
    id: "welding-leads",
    title: "Welding Leads - SaaS Lead CRM System",
    location: "US Client",
    category: "WordPress",
    filterCategory: "Lead CRM & SaaS",
    highlightBadge: "Indexed Lookup Fix",
    description:
      "Subscription-based lead distribution CRM built from scratch on WordPress",
    problem:
      "Needed a subscription-based lead distribution system with role-based dashboards and fair, weighted lead assignment",
    solution:
      "Designed and built a subscription-based lead distribution CRM from scratch with role-based user/admin dashboards, tiered pricing, and weighted lead distribution logic. Resolved a production performance issue caused by inefficient LIKE queries by engineering an indexed lookup table",
    impact:
      "Fixed a production performance bottleneck and shipped a reliable, tiered lead distribution system",
    architecture: "WordPress + PHP (OOP) + MySQL + Custom Plugin",
    tags: [
      "WordPress",
      "PHP (OOP)",
      "MySQL",
      "JavaScript",
      "Custom Plugin Architecture",
    ],
    url: "https://www.weldingleads.com",
    github: "",
    metrics: {
      dashboards: "Role-based",
      pricing: "Tiered",
      perf: "Indexed lookup fix",
    },
    workflowSteps: [
      { step: "1. Lead Intake API", detail: "Sanitized webhook intake parsing high-volume lead parameters" },
      { step: "2. Weighted Distribution", detail: "Algorithmic assignment engine balancing lead count by contractor tier" },
      { step: "3. Indexed Lookup Fix", detail: "Replaced slow SQL LIKE queries with indexed hash map table (10x faster)" },
      { step: "4. Contractor Portal", detail: "Real-time lead inbox with instant SMS/Email notification delivery" },
    ],
  },
  {
    id: "financial-application-automation",
    title: "Financial Application Automation System",
    location: "US Client",
    category: "WordPress",
    filterCategory: "Automation & Forms",
    highlightBadge: "-70% Intake Time",
    description:
      "Multi-step financial onboarding platform with automated bank routing and approval tracking",
    problem:
      "Manual financial application workflows caused slow turnaround times, routing errors, and lack of applicant status transparency",
    solution:
      "Engineered an automated multi-step application system with conditional branching, secure bank routing verification, automated email notifications, and administrative approval pipelines",
    impact:
      "Streamlined applicant intake, reduced manual processing time by over 70%, and eliminated routing errors",
    architecture: "WordPress + PHP + Fluent Forms Pro + REST API",
    tags: [
      "WordPress",
      "PHP",
      "Fluent Forms Pro",
      "REST API",
      "Bank Routing API",
      "Workflow Automation",
    ],
    url: "#",
    github: "",
    metrics: {
      workflow: "Automated routing",
      steps: "Multi-stage onboarding",
      speed: "-70% processing time",
    },
    workflowSteps: [
      { step: "1. Multi-Step Form", detail: "Dynamic conditional fields adapting based on applicant business structure" },
      { step: "2. Routing Verification", detail: "Instant bank routing number validation via financial REST API" },
      { step: "3. Document Uploads", detail: "Secure encrypted PDF and tax document upload pipeline" },
      { step: "4. Approval Tracking", detail: "Multi-stage admin workflow status with automated client email triggers" },
    ],
  },
];

const filterCategories = [
  "All",
  "WooCommerce",
  "Booking & Pricing",
  "Membership & LMS",
  "Lead CRM & SaaS",
  "Automation & Forms",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeWorkflowId, setActiveWorkflowId] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === selectedCategory || p.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface/80 to-background relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Production Systems</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            <span className="font-mono text-primary">&lt;</span>
            Featured Production Projects
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Custom WordPress plugins, bespoke themes, WooCommerce platforms, and dynamic pricing engines built for scale and business impact
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterCategories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 border-primary"
                    : "bg-card/60 backdrop-blur-sm border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isWorkflowOpen = activeWorkflowId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="h-full"
                >
                  <Card className="group relative overflow-hidden bg-card/85 backdrop-blur-md border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between h-full rounded-2xl">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                      <div className="p-6 border-b border-border/60 bg-gradient-to-br from-primary/5 via-card/50 to-transparent">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap mb-2">
                              {project.highlightBadge && (
                                <Badge className="bg-primary/15 text-primary border-primary/30 text-[11px] font-mono px-2 py-0.5">
                                  {project.highlightBadge}
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-[11px] text-muted-foreground">
                                {project.location}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs font-mono text-primary/80 bg-primary/5 px-2.5 py-1.5 rounded-md border border-primary/15 mb-3 inline-block">
                          {project.architecture}
                        </p>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="space-y-3">
                          <div className="rounded-xl bg-destructive/5 border border-destructive/15 p-3.5">
                            <h4 className="text-xs font-semibold text-destructive mb-1 uppercase tracking-wider flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                              The Challenge
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          <div className="rounded-xl bg-primary/5 border border-primary/15 p-3.5">
                            <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Engineered Solution
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {project.solution}
                            </p>
                          </div>

                          <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-3.5">
                            <h4 className="text-xs font-semibold text-emerald-500 mb-1 uppercase tracking-wider flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                              Measurable Impact
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {project.impact}
                            </p>
                          </div>
                        </div>

                        {project.workflowSteps && (
                          <div className="pt-2">
                            <button
                              onClick={() =>
                                setActiveWorkflowId(
                                  isWorkflowOpen ? null : project.id
                                )
                              }
                              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-surface hover:bg-surface-hover border border-border text-xs font-medium text-foreground transition-all duration-200"
                            >
                              <span className="flex items-center gap-2 text-primary font-semibold">
                                <Workflow className="w-3.5 h-3.5" />
                                {isWorkflowOpen ? "Hide System Flow" : "Inspect System Architecture & Flow"}
                              </span>
                              <span className="text-[11px] text-muted-foreground font-mono">
                                {isWorkflowOpen ? "? Collapse" : "? Expand (4 Steps)"}
                              </span>
                            </button>

                            <AnimatePresence>
                              {isWorkflowOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-3 space-y-2 bg-card/90 rounded-xl p-3.5 border border-primary/20">
                                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                                      <Layers className="w-3 h-3 text-primary" /> Request & Data Pipeline
                                    </p>
                                    <div className="grid gap-2">
                                      {project.workflowSteps.map((wf, idx) => (
                                        <div
                                          key={idx}
                                          className="text-xs rounded-lg p-2.5 bg-background/80 border border-border/80 flex items-start gap-2"
                                        >
                                          <div className="w-5 h-5 rounded-full bg-primary/10 text-primary font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                            {idx + 1}
                                          </div>
                                          <div>
                                            <span className="font-semibold text-foreground">
                                              {wf.step}:
                                            </span>{" "}
                                            <span className="text-muted-foreground">
                                              {wf.detail}
                                            </span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}

                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/70">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="text-center bg-surface/80 rounded-xl p-2.5 border border-border/50"
                            >
                              <div className="text-xs sm:text-sm font-bold text-primary truncate" title={value}>
                                {value}
                              </div>
                              <div className="text-[10px] text-muted-foreground capitalize truncate">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-[11px] bg-background/60 border-border/70 text-foreground/80 hover:border-primary/40 transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-border/50 mt-4 flex gap-2">
                      {project.url && project.url !== "#" ? (
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm shadow-primary/20"
                        >
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Website
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          size="sm"
                          disabled
                          className="flex-1 opacity-70 text-xs"
                        >
                          <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                          Enterprise System (Internal)
                        </Button>
                      )}

                      {project.github && project.github !== "#" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            Repository
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
