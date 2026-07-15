import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Server, Code, Wrench, Database, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "WordPress & CMS",
    icon: Server,
    skills: [
      "Custom Theme Development",
      "Plugin Architecture (OOP)",
      "WooCommerce Customization",
      "Elementor Pro",
      "Custom Post Types",
      "Hooks, Filters & AJAX",
    ],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["PHP", "MySQL", "REST API Integration"],
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "JavaScript (ES6+)",
      "jQuery",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Integrations & Payments",
    icon: Shield,
    skills: [
      "Stripe",
      "Paid Memberships Pro",
      "Tutor LMS",
      "Bitrix24 / Zoho CRM",
      "Google Maps API",
      "SMTP / Email Automation",
    ],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "FTP / SFTP",
      "LiteSpeed Cache",
      "ATUM Inventory",
      "Claude AI",
      "GitHub Copilot",
      "Cursor",
      "Hostinger / cPanel",
    ],
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
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
            Technical Stack
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-tested technologies for building custom WordPress platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-gradient-to-br ${category.color} backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-card/80 flex items-center justify-center border border-primary/20">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-card/80 hover:bg-card transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">
              Custom WordPress Modules
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">
              Payment & CRM Integrations
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Tools & Workflow</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
