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
      title: "Backend Architecture",
      description:
        "Designing scalable REST APIs with Node.js/Express, implementing authentication, validation, and error handling patterns",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Expertise in PostgreSQL and MongoDB schema design, query optimization, indexing strategies, and ORM implementation",
    },
    {
      icon: Code2,
      title: "Fullstack Development",
      description:
        "Building end-to-end applications with React frontend consuming RESTful backends, state management with Redux",
    },
    {
      icon: Shield,
      title: "Security & Best Practices",
      description:
        "Implementing JWT authentication, input validation, rate limiting, CORS, and following OWASP security guidelines",
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
            Backend engineer passionate about building scalable,
            production-ready systems
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
                Backend Engineer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fullstack developer specializing in{" "}
                  <span className="text-primary font-semibold">
                    backend systems
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold">API design</span>
                  . 4+ years of experience building production applications with
                  Node.js, Express, PostgreSQL, and MongoDB.
                </p>
                <p>
                  Recently architected and deployed a fullstack{" "}
                  <span className="text-primary font-semibold">
                    VAT Dashboard
                  </span>{" "}
                  using PostgreSQL/Neon with Drizzle ORM, handling 1000+ daily
                  API requests with 99.9% uptime.
                </p>
                <p>
                  Strong focus on{" "}
                  <span className="text-primary font-semibold">
                    code quality
                  </span>
                  , comprehensive documentation, RESTful API design, database
                  optimization, and production deployment best practices.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    APIs Built
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">
                    DB Records
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
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
                Database schema, API endpoints, authentication flow
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
