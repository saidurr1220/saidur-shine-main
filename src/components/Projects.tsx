import { useState } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const projects = [
  {
    id: "dipmyryde",
    title: "DipMyRyde.com",
    location: "UK",
    category: "E-commerce",
    description: "Complete shop & booking flow for automotive dipping services",
    problem:
      "Needed streamlined booking system for dip packages with pricing calculator",
    solution:
      "Built custom WooCommerce shop with booking integration, automated pricing, and service selection",
    impact: "40% increase in online bookings, improved customer experience",
    tags: ["WordPress", "WooCommerce", "Booking System", "SEO"],
    url: "https://dipmyryde.com",
    image: "/images/portfolio/dipmyryde.webp",
  },
  {
    id: "supermicro",
    title: "Supermicro-ti.de",
    location: "Germany",
    category: "B2B",
    description: "Product catalog with dynamic pricing for tech hardware",
    problem:
      "Complex product catalog needed better organization and faster load times",
    solution:
      "Optimized database queries, implemented lazy loading, custom product taxonomy",
    impact: "60% faster page loads, improved Core Web Vitals scores",
    tags: ["WordPress", "Performance", "Custom Taxonomy", "Speed Optimization"],
    url: "https://supermicro-ti.de",
    image: "/images/portfolio/supermicro-it-de.png",
  },

  {
    id: "gallery-1",
    title: "E‑commerce Landing",
    location: "—",
    category: "E-commerce",
    description: "Clean storefront hero + product highlights",
    problem: "Showcase layout for product-first brand",
    solution: "Responsive grid, subtle motion, optimized images",
    impact: "Improved engagement on mobile",
    tags: ["Landing", "UI/UX", "Responsive"],
    url: "#",
    image: "/images/portfolio/portfolio-1.webp",
  },
  {
    id: "gallery-2",
    title: "B2B Services",
    location: "—",
    category: "B2B",
    description: "Service-first section layout",
    problem: "Communicate offering quickly",
    solution: "Benefit-first cards, clear CTAs",
    impact: "Higher lead conversions",
    tags: ["B2B", "Cards", "CTA"],
    url: "#",
    image: "/images/portfolio/portfolio-2.webp",
  },
  {
    id: "gallery-3",
    title: "Portfolio Grid",
    location: "—",
    category: "Portfolio",
    description: "Minimal gallery with hover previews",
    problem: "Show case studies compactly",
    solution: "Filterable categories, lazy images",
    impact: "Faster browsing",
    tags: ["Gallery", "Performance"],
    url: "#",
    image: "/images/portfolio/portfolio-3.webp",
  },
  {
    id: "gallery-4",
    title: "Product Highlight",
    location: "—",
    category: "E-commerce",
    description: "Feature module with large imagery",
    problem: "Focus attention on key product",
    solution: "Hero block, semantic content",
    impact: "Better CTR",
    tags: ["Hero", "Copywriting"],
    url: "#",
    image: "/images/portfolio/portfolio-4.webp",
  },
];

const categories = ["All", "E-commerce", "B2B", "Portfolio"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Real-world solutions delivering measurable results for international
            clients
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "gradient-hero" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="relative overflow-hidden bg-muted"
                style={{ aspectRatio: "16/10" }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="secondary">{project.location}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="sm" asChild className="w-full gradient-hero">
                      <Link to={`/projects/${project.id}`}>
                        <FileText className="mr-2 h-4 w-4" />
                        Case Study
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
