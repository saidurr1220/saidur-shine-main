import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Server,
  Database,
  Shield,
  Layout,
  BarChart3,
  Zap,
  Sparkles,
  Bot,
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "WordPress Development",
    icon: Server,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accent: "text-blue-500",
    skills: [
      "Custom Plugin Development (OOP)",
      "Custom Themes & Child Themes",
      "WooCommerce Architecture",
      "Hooks & Filters (Upgrade Safe)",
      "AJAX & WP REST API",
      "Custom Post Types (CPT)",
      "Taxonomies & Metadata",
      "Advanced Custom Fields (ACF Pro)",
    ],
  },
  {
    title: "Analytics & Tracking",
    icon: BarChart3,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-500",
    skills: [
      "Google Tag Manager (GTM)",
      "GA4 E-Commerce Events",
      "Google Ads Conversion Tracking",
      "Conversion Deduplication",
      "Transaction ID Verification",
      "Production Tracking Audits",
      "Google Search Console",
    ],
  },
  {
    title: "Page Builders & UI",
    icon: Layout,
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accent: "text-cyan-400",
    skills: [
      "Elementor Pro",
      "Gutenberg Block Editor",
      "Divi Builder",
      "WPBakery",
      "Figma to WordPress Pixel-Perfect",
      "Responsive Layouts",
    ],
  },
  {
    title: "Integrations & Gateways",
    icon: Shield,
    color: "from-purple-500/20 via-pink-500/10 to-transparent",
    accent: "text-purple-400",
    skills: [
      "Stripe Gateway & Webhooks",
      "Google Maps & Distance Matrix API",
      "Paid Memberships Pro (PMPro)",
      "Tutor LMS & LearnDash",
      "Fluent Forms Pro & Gravity Forms",
      "Bitrix24 CRM REST API",
      "Zoho CRM Integration",
      "SMTP & Async Email Pipelines",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accent: "text-indigo-400",
    skills: [
      "PHP (OOP & Functional)",
      "MySQL Database Indexing",
      "Query Optimization (No slow LIKE)",
      "Laravel Framework",
      "Filament Admin Panels",
      "RESTful API Development",
    ],
  },
  {
    title: "Frontend & Performance",
    icon: Zap,
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accent: "text-amber-400",
    skills: [
      "JavaScript (ES6+)",
      "jQuery & Vanilla JS",
      "HTML5 & CSS3 / SCSS",
      "Core Web Vitals (LCP / CLS / INP)",
      "LiteSpeed Cache Tuning",
      "Image & Asset Optimization",
      "Schema Markup & SEO Sitemaps",
    ],
  },
  {
    title: "AI Tools & Dev Workflow",
    icon: Bot,
    color: "from-rose-500/20 via-orange-500/10 to-transparent",
    accent: "text-rose-400",
    skills: [
      "Claude Code & Claude 3.7",
      "Cursor & GitHub Copilot",
      "Git & GitHub Workflow",
      "Staging Environments",
      "FTP / FileZilla / SSH",
      "Hostinger & cPanel",
    ],
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "WordPress", "Analytics", "Backend", "Integrations", "AI & Workflow"];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "WordPress") return cat.title.includes("WordPress") || cat.title.includes("Page");
    if (activeFilter === "Analytics") return cat.title.includes("Analytics");
    if (activeFilter === "Backend") return cat.title.includes("Backend") || cat.title.includes("Frontend");
    if (activeFilter === "Integrations") return cat.title.includes("Integrations");
    if (activeFilter === "AI & Workflow") return cat.title.includes("AI");
    return true;
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface/60 to-background relative overflow-hidden"
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
            <span>Comprehensive Technical Capabilities</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            <span className="font-mono text-primary">&lt;</span>
            Technical Stack & Expertise
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Production-tested technologies across custom WordPress development, conversion tracking, database optimization, and modern AI engineering workflows
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card/70 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="h-full"
            >
              <div
                className={`relative bg-gradient-to-br ${category.color} bg-card/85 backdrop-blur-md border border-border/80 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group h-full flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-card/90 flex items-center justify-center border border-border/80 shadow-sm group-hover:scale-105 transition-transform">
                      <category.icon className={`w-6 h-6 ${category.accent}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-background/80 hover:bg-card border border-border/60 text-foreground/90 transition-colors py-1 px-2.5 rounded-lg"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                  <span>{category.skills.length} core competencies</span>
                  <span className="text-emerald-400 font-semibold">Production Ready</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-card/75 backdrop-blur-sm border border-border/80 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">100%</div>
            <div className="text-xs text-muted-foreground">Upgrade-Safe Hooks & Filters</div>
          </div>
          <div className="bg-card/75 backdrop-blur-sm border border-border/80 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">GTM/GA4</div>
            <div className="text-xs text-muted-foreground">Deduplicated Ad Spend Tracking</div>
          </div>
          <div className="bg-card/75 backdrop-blur-sm border border-border/80 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">10-15</div>
            <div className="text-xs text-muted-foreground">Monthly Shipped Builds</div>
          </div>
          <div className="bg-card/75 backdrop-blur-sm border border-border/80 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">B.Sc. CSE</div>
            <div className="text-xs text-muted-foreground">North South University</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
