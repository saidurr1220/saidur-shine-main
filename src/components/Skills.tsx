import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "WordPress",
    skills: [
      { name: "Elementor", level: 95 },
      { name: "Divi", level: 90 },
      { name: "ACF", level: 92 },
      { name: "Custom Post Types", level: 88 },
      { name: "Theme Customization", level: 93 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "jQuery", level: 85 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "PHP", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "Git/GitHub", level: 88 },
      { name: "Chrome DevTools", level: 90 },
    ],
  },
  {
    title: "Performance & SEO",
    skills: [
      { name: "Core Web Vitals", level: 92 },
      { name: "Technical SEO", level: 90 },
      { name: "Accessibility", level: 85 },
      { name: "Speed Optimization", level: 93 },
    ],
  },
];

const additionalSkills = [
  "WooCommerce",
  "Elementor Pro",
  "Advanced Custom Fields",
  "Yoast SEO",
  "WP Rocket",
  "cPanel",
  "Postman",
  "VS Code",
  "Figma",
  "Photoshop",
  "Site Migration",
  "Backup & Security",
];

export function Skills() {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills honed through real client projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {additionalSkills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm animate-fade-in-up"
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
