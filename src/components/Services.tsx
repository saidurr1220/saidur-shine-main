import { Blocks, Code, Gauge, Settings, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Code,
    title: "MERN Stack Development",
    description:
      "Full-stack applications with MongoDB, Express.js, React, and Node.js - complete end-to-end solutions",
  },
  {
    icon: Settings,
    title: "Real-time Applications",
    description:
      "Socket.io integration for live chat, notifications, collaborative tools, and real-time data updates",
  },
  {
    icon: Blocks,
    title: "WordPress Solutions",
    description:
      "Custom themes, ACF integration, Elementor Pro customization, and WooCommerce e-commerce platforms",
  },
  {
    icon: Gauge,
    title: "Database & Backend",
    description:
      "PostgreSQL, MongoDB, REST APIs, authentication, and server-side development",
  },
  {
    icon: Wrench,
    title: "DevOps & Deployment",
    description:
      "AWS services, cPanel hosting, domain management, Git workflows, and CI/CD",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Core Web Vitals, SEO optimization, speed improvements, and modern best practices",
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack development services for modern web applications
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-4 sm:p-6 professional-card group h-full">
                <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
