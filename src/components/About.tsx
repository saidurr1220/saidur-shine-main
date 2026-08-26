import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Code2,
  Database,
  Server,
  Zap,
  Target,
  GitBranch,
  Shield,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const strengths = [
    {
      icon: Server,
      title: "Custom Plugin Architecture",
      description:
        "Designing scalable, OOP-based WordPress plugins from scratch ? hooks, filters, custom post types, and AJAX-driven interfaces without touching core files",
    },
    {
      icon: Database,
      title: "WooCommerce Engineering",
      description:
        "Building custom purchasing flows, inventory systems, and checkout logic on top of WooCommerce for complex product catalogs and B2B/B2C workflows",
    },
    {
      icon: Code2,
      title: "Membership & Booking Systems",
      description:
        "Building end-to-end membership portals, LMS integrations, and appointment booking engines with dynamic pricing and availability",
    },
    {
      icon: Shield,
      title: "Integrations & Tracking",
      description:
        "Implementing Stripe payments + webhooks, CRM integrations (Bitrix24, Zoho), Google Maps Distance Matrix, and GTM/GA4 conversion deduplication",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface to-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <span>Engineering & Delivery Track Record</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            <span className="font-mono text-primary">&lt;</span>
            About Me & Agency Delivery
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Full stack WordPress developer passionate about building custom,
            production-grade platforms with high delivery velocity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 flex flex-col justify-between"
          >
            <div className="bg-card/85 backdrop-blur-md border border-border/90 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2.5 text-foreground">
                <Code2 className="w-6 h-6 text-primary" />
                Full Stack WordPress Developer
              </h3>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Full stack WordPress developer specializing in{" "}
                  <span className="text-primary font-semibold">
                    custom plugin architecture
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold">
                    WooCommerce engineering
                  </span>
                  . 2+ years of experience building custom, production-grade
                  WordPress platforms with PHP, MySQL, and JavaScript.
                </p>
                <p>
                  Recently transformed{" "}
                  <span className="text-primary font-semibold">
                    Vault Labs Research
                  </span>{" "}
                  into a full laboratory research commerce platform, building
                  20+ custom modules including a dual-mode purchasing system
                  and a production Store Credit platform &mdash; all without
                  modifying WooCommerce core.
                </p>
                <p>
                  Strong focus on{" "}
                  <span className="text-primary font-semibold">
                    end-to-end ownership
                  </span>
                  , from architecture and development through client
                  communication, QA, and deployment &mdash; including
                  membership systems, booking engines, and CRM integrations.
                </p>
                <p>
                  Currently delivering{" "}
                  <span className="text-primary font-semibold">
                    10 to 15 client projects per month
                  </span>{" "}
                  through a WordPress development agency, with 11 projects shipped
                  last month and{" "}
                  <span className="text-primary font-semibold">
                    10 rated 5 stars
                  </span>
                  . Project scope ranges from quick $20 fixes to full $2,000+ builds.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-border/80 text-center">
                <div className="bg-surface/80 rounded-xl p-3 border border-border/50">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">10-15</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Projects / Month</div>
                </div>
                <div className="bg-surface/80 rounded-xl p-3 border border-border/50">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">10 ?</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">5-Star Rated (Last Mo)</div>
                </div>
                <div className="bg-surface/80 rounded-xl p-3 border border-border/50">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">20+</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Custom Modules</div>
                </div>
                <div className="bg-surface/80 rounded-xl p-3 border border-border/50">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">2+</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Years Exp</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 bg-card/85 backdrop-blur-md border-border/90 hover:border-primary/50 transition-all rounded-xl flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">B.Sc. in CSE</h4>
                  <p className="text-xs text-muted-foreground">North South University, Dhaka</p>
                  <p className="text-[11px] text-primary/80 mt-1 font-mono">Computer Science & Engineering</p>
                </div>
              </Card>

              <Card className="p-5 bg-card/85 backdrop-blur-md border-border/90 hover:border-primary/50 transition-all rounded-xl flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">International Clients</h4>
                  <p className="text-xs text-muted-foreground">US, UK, Australia, Germany</p>
                  <p className="text-[11px] text-emerald-500/90 mt-1 font-mono">100% On-Time Delivery</p>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 flex flex-col justify-between"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 bg-card/85 backdrop-blur-md border-border/90 hover:border-primary/50 transition-all duration-300 group rounded-2xl shadow-sm hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 transition-all border border-primary/20">
                      <strength.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold mb-1.5 text-foreground group-hover:text-primary transition-colors">
                        {strength.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-2">
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all rounded-xl">
                <Zap className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">High Velocity</h4>
                <p className="text-xs text-muted-foreground">
                  10 to 15 projects shipped each month with strict QA & rollback plans
                </p>
              </Card>
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all rounded-xl">
                <Target className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">Full Ownership</h4>
                <p className="text-xs text-muted-foreground">
                  End-to-end responsibility: scoping, architecture, code, and deployment
                </p>
              </Card>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-card/75 backdrop-blur-md border border-border/80 rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold mb-8 text-center flex items-center justify-center gap-2 text-foreground">
            <GitBranch className="w-5 h-5 text-primary" />
            End-to-End Engineering Methodology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-surface/60 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-mono font-bold text-lg">01</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Architecture & Scoping</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Database indexing, OOP hook structure, payment & distance API scoping, and client requirement specs
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-surface/60 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-mono font-bold text-lg">02</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Build, Async QA & Dedup</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Clean hooks & filters, non-blocking asynchronous email queues, transaction-safe conversion deduplication
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-surface/60 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-mono font-bold text-lg">03</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Deploy, Speed & Staging</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Zero-downtime staging deployment, LiteSpeed cache tuning, Core Web Vitals optimization, and client handoff
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
