import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Server, Code, Wrench, Database, Cloud, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Middleware Design",
      "Error Handling",
      "OOP & Design Patterns",
    ],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Database & ORM",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Query Optimization",
      "Database Design",
      "Indexing",
      "Transactions",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Frontend & UI",
    icon: Code,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Responsive Design",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Git & GitHub",
      "Vercel",
      "AWS (basics)",
      "CI/CD",
      "Docker (basics)",
      "Linux",
    ],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "API & Integration",
    icon: Shield,
    skills: [
      "RESTful Design",
      "API Documentation",
      "Postman",
      "Validation (Zod)",
      "Rate Limiting",
      "CORS",
    ],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      "VS Code",
      "npm/yarn",
      "ESLint",
      "Prettier",
      "Agile/Scrum",
      "Code Review",
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
            Production-tested technologies for building scalable backend systems
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
            <div className="text-3xl font-bold text-primary mb-2">7+</div>
            <div className="text-sm text-muted-foreground">
              Backend Technologies
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">
              Database Systems
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">DevOps Tools</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
