import { Briefcase, Code2, Database, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "WordPress Developer",
    period: "01/2026 – Present",
    location: "FB International BD, Dhaka, Bangladesh",
    description:
      "Specialized in building custom WordPress plugins and WooCommerce systems. Focus on plugin architecture, membership/booking platforms, and third-party integrations.",
    achievements: [
      "Built custom WordPress plugins for booking, CRM, WooCommerce, and subscription-based workflows",
      "Developed Elementor-based multi-page websites from Figma designs to live deployment",
      "Integrated Stripe, Google Maps, Zoho CRM, and SMTP email automation across production sites",
      "Optimized Core Web Vitals and page load speed across multiple production client sites",
      "Managed full project lifecycle: scoping, development, client communication, post-launch support",
    ],
    techStack: [
      "WordPress",
      "PHP",
      "WooCommerce",
      "MySQL",
      "JavaScript",
      "Elementor Pro",
      "Stripe",
      "Zoho CRM",
    ],
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface to-background"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="font-mono text-primary">&lt;</span>
            Work Experience
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building production-grade WordPress platforms and WooCommerce systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-6 md:ml-16 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        {item.period} • {item.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1 font-bold">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block transform -translate-x-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all">
            <Server className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-foreground mb-1">6+</div>
            <div className="text-sm text-muted-foreground">Live Platforms</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all">
            <Database className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-foreground mb-1">20+</div>
            <div className="text-sm text-muted-foreground">
              Custom Modules Built
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all">
            <Code2 className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-foreground mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
