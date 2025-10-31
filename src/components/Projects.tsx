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
    id: "mern-ecommerce",
    title: "MERN E-commerce Platform",
    location: "USA Client",
    category: "MERN Stack",
    description: "Full-stack e-commerce platform with advanced features",
    problem:
      "Client needed scalable e-commerce solution with real-time inventory management",
    solution:
      "Built complete MERN stack application with JWT authentication, Stripe payments, admin dashboard, and real-time notifications",
    impact: "Increased sales by 150%, reduced cart abandonment by 40%",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "JWT"],
    url: "https://github.com/saidur1529",
    image: "/images/portfolio/mern-vat-system.webp",
  },
  {
    id: "business-dashboard",
    title: "Business Analytics Dashboard",
    location: "Bangladesh Client",
    category: "MERN Stack",
    description:
      "Comprehensive business management system with real-time analytics and reporting",
    problem:
      "Business needed centralized platform for tracking products, sales, VAT calculations, and generating automated reports",
    solution:
      "Built full-stack MERN dashboard with MongoDB for data management, Express.js REST APIs, React frontend with interactive charts, and automated report generation",
    impact:
      "Streamlined business operations by 85%, reduced manual data entry by 90%, improved decision-making with real-time insights",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Chart.js",
      "PDF Reports",
      "Real-time Analytics",
    ],
    url: "https://vat-dashboard.vercel.app/",
    image: "/images/portfolio/vat-dashboard-live.webp",
  },
  {
    id: "dipmyryde",
    title: "DipMyRyde.com",
    location: "UK",
    category: "WordPress",
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
    category: "WordPress",
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
    id: "nextjs-ecommerce",
    title: "Next.js E-commerce Platform",
    location: "Personal",
    category: "E-commerce",
    description: "Modern e-commerce platform with Stripe integration",
    problem: "Create scalable e-commerce solution with modern tech stack",
    solution:
      "Built with Next.js 14, TypeScript, Prisma, PostgreSQL, and Stripe",
    impact: "Fast, SEO-friendly e-commerce with excellent performance",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    url: "#",
    image: "/images/portfolio/nextjs-ecommerce.webp",
  },
  {
    id: "react-dashboard",
    title: "React Admin Dashboard",
    location: "Client Project",
    category: "Dashboard",
    description: "Comprehensive admin dashboard with data visualization",
    problem: "Client needed modern dashboard for business analytics",
    solution:
      "Built responsive dashboard with React, Chart.js, and real-time data",
    impact: "Improved decision-making with real-time insights",
    tags: ["React", "Chart.js", "Dashboard", "Analytics", "Real-time"],
    url: "#",
    image: "/images/portfolio/react-dashboard.webp",
  },
];

const categories = [
  "All",
  "MERN Stack",
  "WordPress",
  "E-commerce",
  "Dashboard",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Production applications built for international clients with
            measurable business impact
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group h-full">
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
                      <Button
                        size="sm"
                        asChild
                        className="w-full gradient-hero"
                      >
                        <Link to={`/projects/${project.id}`}>
                          <FileText className="mr-2 h-4 w-4" />
                          Case Study
                        </Link>
                      </Button>
                    </motion.div>
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
