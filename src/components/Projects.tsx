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
    id: "vat-dashboard",
    title: "VAT Dashboard - Fullstack MERN Application",
    location: "Production",
    category: "Backend",
    description:
      "Enterprise-grade business management system with comprehensive backend architecture",
    problem:
      "Business needed centralized platform for tracking products, sales, VAT calculations, and generating automated reports with real-time data processing",
    solution:
      "Architected fullstack application with Node.js/Express backend, PostgreSQL database on Neon, Drizzle ORM for type-safe queries. Implemented RESTful APIs with JWT authentication, input validation (Zod), comprehensive error handling, and automated report generation",
    impact:
      "Streamlined business operations by 85%, reduced manual data entry by 90%, improved decision-making with real-time insights. Handles 1000+ daily API requests with 99.9% uptime",
    architecture: "Node.js + Express + PostgreSQL + Drizzle ORM + React",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "REST APIs",
      "JWT",
      "React",
      "Neon DB",
    ],
    url: "https://vat-dashboard.vercel.app/",
    github: "",
    metrics: {
      apis: "15+ endpoints",
      database: "10K+ records",
      uptime: "99.9%",
    },
  },
  {
    id: "sukoon",
    title: "Sukoon - AI-Powered Mental Wellness Platform",
    location: "Personal Project",
    category: "Fullstack",
    description:
      "AI-integrated platform with complex API integrations and state management",
    problem:
      "Need for accessible mental health support with AI-powered features and seamless third-party API integration",
    solution:
      "Developed fullstack platform integrating multiple AI APIs (Hume API for chatbot, Gemini API for dream analysis). Implemented Redux for complex state management, RESTful API consumption, and responsive UI with React and Tailwind CSS",
    impact:
      "Provides 24/7 mental health support with AI-powered insights. Successfully integrated 3+ third-party APIs with error handling and rate limiting",
    architecture: "React + Redux + REST APIs + AI Integration",
    tags: [
      "React.js",
      "Redux",
      "REST APIs",
      "Hume API",
      "Gemini API",
      "Tailwind CSS",
      "API Integration",
    ],
    url: "https://sukoon-flax.vercel.app",
    github: "https://github.com/saidurr1220/sukoon",
    metrics: {
      apis: "3+ integrations",
      features: "5+ modules",
      performance: "95+ Lighthouse",
    },
  },
  {
    id: "rest-api-template",
    title: "Express REST API Boilerplate",
    location: "Open Source",
    category: "Backend",
    description: "Production-ready Express.js API template with best practices",
    problem:
      "Need for standardized backend architecture with authentication, validation, and error handling",
    solution:
      "Built comprehensive Express.js boilerplate with JWT authentication, Zod validation, centralized error handling, rate limiting, CORS configuration, and MongoDB integration. Includes API documentation and testing setup",
    impact:
      "Accelerates backend development by 70%. Used as foundation for multiple production projects",
    architecture: "Node.js + Express + MongoDB + JWT + Zod",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Zod",
      "REST APIs",
      "Middleware",
    ],
    url: "#",
    github: "#",
    metrics: {
      endpoints: "20+ routes",
      middleware: "10+ custom",
      security: "OWASP compliant",
    },
  },
  {
    id: "ecommerce-api",
    title: "E-commerce Backend API",
    location: "Client Project",
    category: "Backend",
    description: "Scalable e-commerce backend with payment integration",
    problem:
      "Client needed robust backend for e-commerce platform with inventory management and payment processing",
    solution:
      "Designed RESTful API with Node.js/Express, PostgreSQL for data persistence, Stripe integration for payments, JWT authentication, and real-time inventory tracking. Implemented caching strategies and query optimization",
    impact:
      "Handles 5K+ daily transactions, 60% faster response times through optimization, 99.8% payment success rate",
    architecture: "Node.js + Express + PostgreSQL + Stripe + Redis",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "REST APIs",
      "Payment Gateway",
    ],
    url: "#",
    github: "",
    metrics: {
      transactions: "5K+ daily",
      response: "<200ms avg",
      uptime: "99.8%",
    },
  },
  {
    id: "dipmyryde",
    title: "DipMyRyde.com - WordPress Backend",
    location: "UK Client",
    category: "WordPress",
    description: "Custom WordPress backend with booking system integration",
    problem:
      "Needed streamlined booking system with automated pricing and service management",
    solution:
      "Built custom WooCommerce backend with booking integration, automated pricing logic, custom post types, and REST API endpoints for frontend consumption",
    impact: "40% increase in online bookings, reduced admin workload by 50%",
    architecture: "WordPress + WooCommerce + Custom APIs",
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "MySQL",
      "REST APIs",
      "Booking System",
    ],
    url: "https://dipmyryde.com",
    github: "",
    metrics: {
      bookings: "500+ monthly",
      automation: "80% automated",
      performance: "90+ PageSpeed",
    },
  },
  {
    id: "supermicro",
    title: "Supermicro-ti.de - Performance Optimization",
    location: "Germany Client",
    category: "WordPress",
    description: "Database optimization and performance enhancement",
    problem:
      "Complex product catalog with slow load times and poor database performance",
    solution:
      "Optimized database queries, implemented caching strategies, custom indexing, lazy loading, and CDN integration. Refactored custom taxonomy structure",
    impact:
      "60% faster page loads, 40% reduction in server load, improved Core Web Vitals scores",
    architecture: "WordPress + MySQL + Caching + CDN",
    tags: [
      "WordPress",
      "MySQL",
      "Performance",
      "Caching",
      "Query Optimization",
    ],
    url: "https://supermicro-ti.de",
    github: "",
    metrics: {
      speedup: "60% faster",
      queries: "50% reduced",
      score: "95+ PageSpeed",
    },
  },
];

const categories = ["All", "Backend", "Fullstack", "WordPress"];

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
            Backend systems and fullstack applications with measurable business
            impact
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
