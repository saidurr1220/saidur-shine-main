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
} from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const strengths = [
    {
      icon: Server,
      title: "Custom Plugin Architecture",
      description:
        "Designing scalable, OOP-based WordPress plugins from scratch — hooks, filters, custom post types, and AJAX-driven interfaces without touching core files",
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
      title: "Integrations & Payments",
      description:
        "Implementing Stripe payment workflows, CRM integrations (Bitrix24, Zoho), Google Maps, and SMTP automation across production sites",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface to-background"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="font-mono text-primary">&lt;</span>
            About Me
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full stack WordPress developer passionate about building custom,
            production-grade platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Full Stack WordPress Developer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Custom Modules
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">
                    Live Platforms
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Fast Learner</h4>
                <p className="text-xs text-muted-foreground">
                  Quickly adapt to new technologies and frameworks
                </p>
              </Card>
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <Target className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Ownership</h4>
                <p className="text-xs text-muted-foreground">
                  End-to-end project responsibility from design to deployment
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Right side - Technical Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                      <strength.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {strength.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Development Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            Development Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Plan & Design</h4>
              <p className="text-sm text-muted-foreground">
                Plugin architecture, database schema, client requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Build & Test</h4>
              <p className="text-sm text-muted-foreground">
                Clean code, error handling, validation, testing
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Deploy & Monitor</h4>
              <p className="text-sm text-muted-foreground">
                Production deployment, monitoring, documentation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
