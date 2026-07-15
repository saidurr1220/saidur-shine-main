import { useState } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const projects = [
  {
    id: "vault-labs-research",
    title: "Vault Labs Research - Laboratory Research Commerce Platform",
    location: "US Client",
    category: "WordPress",
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
  },
  {
    id: "california-landlords-union",
    title: "California Landlords Union - Membership Portal & LMS",
    location: "US Client",
    category: "WordPress",
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
  },
  {
    id: "labeng",
    title: "LaBeng - Local Business Discovery & Booking Platform",
    location: "UK Client",
    category: "WordPress",
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
  },
  {
    id: "chineke-foods",
    title: "Chineke Foods - Custom Brand & Wholesale Platform",
    location: "UK Client",
    category: "WordPress",
    description:
      "Custom-built brand site for a farm stand and wholesale butcher business",
    problem:
      "Needed a fully custom brand presence with wholesale enquiry handling, CRM integration, and strong local SEO",
    solution:
      "Designed and built a fully custom WordPress theme from scratch. Prepared Bitrix24 CRM integration via REST API and webhooks for wholesale enquiry workflows. Integrated Google Maps, WhatsApp click-to-chat, and Brevo email marketing; optimized for Core Web Vitals and SEO",
    impact:
      "Streamlined wholesale enquiry handling and improved local discoverability with optimized Core Web Vitals",
    architecture: "WordPress + PHP + HTML5 + CSS3 + JavaScript",
    tags: [
      "WordPress",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Bitrix24 CRM",
      "REST API",
      "Brevo",
    ],
    url: "https://chinekefoods.com",
    github: "",
    metrics: {
      theme: "Fully custom",
      crm: "Bitrix24 via REST",
      seo: "Core Web Vitals optimized",
    },
  },
  {
    id: "welding-leads",
    title: "Welding Leads - SaaS Lead CRM System",
    location: "US Client",
    category: "WordPress",
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
  },
  {
    id: "on-route-couriers",
    title: "On Route Couriers - Custom Booking & Pricing Platform",
    location: "UK Client",
    category: "WordPress",
    description:
      "Custom booking plugin with a dynamic pricing engine and Stripe checkout",
    problem:
      "Needed a booking system with real-time, formula-based pricing across distance, service type, and vehicle class",
    solution:
      "Built a custom booking plugin from scratch with a dynamic pricing engine (Distance x Service x Vehicle). Integrated Google Maps API and Stripe payment workflow with an admin order management dashboard",
    impact:
      "Delivered accurate, real-time quote-to-checkout flow with full admin order visibility",
    architecture: "WordPress + PHP + Custom Plugin",
    tags: [
      "WordPress",
      "PHP",
      "Google Maps API",
      "Stripe",
      "Custom Plugin Development",
    ],
    url: "https://www.onroutecouriers.com",
    github: "",
    metrics: {
      pricing: "Dynamic engine",
      payments: "Stripe checkout",
      admin: "Order dashboard",
    },
  },
];

const categories = ["All", "WordPress"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface to-background"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="font-mono text-primary">&lt;</span>
            Production Projects
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Custom WordPress platforms and WooCommerce systems with measurable
            business impact
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm ${
                  selectedCategory === cat ? "bg-primary" : ""
                }`}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all group h-full">
                {/* Header */}
                <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-muted-foreground">
                        {project.architecture}
                      </p>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Problem & Solution */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                        Impact
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center bg-muted/30 rounded p-2"
                      >
                        <div className="text-sm font-bold text-primary">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-3">
                    {project.url !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && project.github !== "#" && (
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
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
