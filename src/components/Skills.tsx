import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "MERN Stack",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "React", level: 95 },
      { name: "Node.js", level: 88 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript ES6+", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 98 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Design & UI/UX",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe Photoshop", level: 88 },
      { name: "Adobe Illustrator", level: 85 },
      { name: "UI/UX Design", level: 87 },
    ],
  },
  {
    title: "WordPress & CMS",
    skills: [
      { name: "Custom Themes", level: 95 },
      { name: "Elementor Pro", level: 98 },
      { name: "WooCommerce", level: 92 },
      { name: "ACF & CPT", level: 90 },
    ],
  },
];

const additionalSkills = [
  "Socket.io",
  "Mongoose ODM",
  "JWT Authentication",
  "Stripe Integration",
  "PayPal Integration",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "Bootstrap 5",
  "SCSS/SASS",
  "REST APIs",
  "Git/GitHub",
  "VS Code",
  "Postman",
  "cPanel/Hosting",
  "Adobe XD",
  "InDesign",
  "Video Editing",
  "SEO Optimization",
  "Digital Marketing",
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technologies and design tools used in 100+ production projects across web development and UI/UX design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {additionalSkills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs sm:text-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
