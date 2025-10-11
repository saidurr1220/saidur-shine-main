import { Blocks, Code, Gauge, Settings, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Blocks,
    title: "WordPress Customization",
    description: "Elementor, Divi, ACF, Custom Post Types — tailored to your brand and workflow",
  },
  {
    icon: Settings,
    title: "Theme & Plugin Development",
    description: "Custom theme tweaks, plugin modifications, and seamless API integrations",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description: "Core Web Vitals optimization, Technical SEO, speed improvements for better rankings",
  },
  {
    icon: Wrench,
    title: "Site Maintenance",
    description: "Migrations, updates, backups, domain/hosting setup — worry-free support",
  },
  {
    icon: Code,
    title: "React/Next.js Development",
    description: "Modern landing pages and small web applications with cutting-edge frameworks",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Fast, reliable delivery without compromising quality or attention to detail",
  },
];

export function Services() {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack web solutions from WordPress customization to modern React applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 bg-card hover:bg-surface-hover transition-all border-border group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
