import {
  Code2,
  ShoppingCart,
  Route,
  BarChart3,
  Users2,
  Gauge,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Code2,
    badge: "OOP Architecture",
    title: "Custom Plugin Development",
    description:
      "Scalable WordPress plugins engineered from scratch using OOP standards, custom post types, hooks/filters, and AJAX interfaces ? 100% upgrade-safe without touching core.",
    tags: ["Custom Post Types", "Hooks & Filters", "AJAX", "WP REST API"],
  },
  {
    icon: ShoppingCart,
    badge: "B2B & B2C",
    title: "WooCommerce Custom Platforms",
    description:
      "Custom wholesale/single-kit purchasing engines, store credit ledger systems with checkout redemption, variation compliance document managers, and multi-carrier shipping.",
    tags: ["Store Credit", "Dual-Mode Cart", "COA Docs", "ATUM Inventory"],
  },
  {
    icon: Route,
    badge: "Real-Time Formula",
    title: "Dynamic Pricing & Booking Engines",
    description:
      "Multi-step instant booking systems powered by Google Distance Matrix API with formula-based dynamic rates (Distance x Service Tier x Vehicle Class) and Stripe webhooks.",
    tags: ["Google Distance Matrix", "Stripe Webhooks", "Instant Quotes"],
  },
  {
    icon: BarChart3,
    badge: "Ad Spend Protection",
    title: "GTM / GA4 Tracking & Deduplication",
    description:
      "Enterprise tracking setups with transaction-ID bound deduplication, ensuring cancelled bookings or refreshes never double-count into Google Ads or GA4 analytics.",
    tags: ["GTM Deduplication", "GA4 Ecommerce", "Google Ads", "Tracking Audits"],
  },
  {
    icon: Users2,
    badge: "SaaS-Style Portals",
    title: "Membership Portals & LMS Platforms",
    description:
      "Multi-tier membership platforms (Paid Memberships Pro) integrated with Tutor LMS, automated incremental member ID generators, and custom tabbed dashboards.",
    tags: ["PMPro 3-Tier", "Tutor LMS", "Astra Child Themes", "Fluent Forms"],
  },
  {
    icon: Gauge,
    badge: "Core Web Vitals",
    title: "Performance & Database Optimization",
    description:
      "Fixing SQL bottlenecks with indexed hash lookup tables, eliminating email dispatch timeouts with asynchronous background workers, and LiteSpeed cache tuning.",
    tags: ["Indexed SQL Fix", "Async Mail Queues", "LiteSpeed", "90+ PageSpeed"],
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface/70 to-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored WordPress Engineering</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            <span className="font-mono text-primary">&lt;</span>
            Specialized Development Services
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            From single-feature custom plugins to multi-thousand dollar production platforms with full ownership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <Card className="p-6 sm:p-7 bg-card/85 backdrop-blur-md border-border/90 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono border-primary/30 text-primary bg-primary/5">
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-muted-foreground bg-surface/90 px-2 py-0.5 rounded-md border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
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
