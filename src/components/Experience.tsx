import { Briefcase, GraduationCap, Award, CheckCircle2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experienceData = [
  {
    type: "work",
    icon: Briefcase,
    title: "WordPress Developer",
    company: "FB International BD",
    period: "01/2026 ? Present",
    location: "Dhaka, Bangladesh (US / UK / Australia Clients)",
    description:
      "Deliver 10 to 15 client projects per month across a wide range of scope, from $20 bug fixes to $2,500+ full-stack WordPress builds. Own the entire lifecycle: planning, development, testing, client communication, and deployment.",
    achievements: [
      "Delivered 11 projects last month with 10 rated 5 stars, consistently ahead of monthly targets and generating $3,000+ solo value",
      "Build custom WordPress plugins from scratch for booking systems, CRM integrations, WooCommerce workflows, and subscription platforms",
      "Integrate Stripe payments, Google Distance Matrix API, Zoho / Bitrix24 CRMs, and asynchronous SMTP email pipelines",
      "Implement GTM, GA4, and Google Ads conversion tracking with transaction-aware deduplication and production rollback preparation",
      "Conduct production QA, database query indexing, Core Web Vitals optimization, and LiteSpeed cache tuning",
    ],
    techStack: [
      "WordPress Core",
      "PHP (OOP)",
      "WooCommerce",
      "MySQL",
      "GTM / GA4",
      "Stripe API",
      "Google Maps API",
      "Elementor Pro",
      "Claude Code",
    ],
  },
];

const educationData = [
  {
    icon: GraduationCap,
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "North South University",
    location: "Dhaka, Bangladesh",
    period: "Graduated",
    description:
      "Comprehensive curriculum in software architecture, database management, algorithms, and web technologies that form the backbone of solid, upgrade-safe WordPress engineering.",
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-br from-background via-surface/80 to-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            <span className="font-mono text-primary">&lt;</span>
            Work Experience & Education
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            High-volume agency delivery track record and computer science foundation
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 sm:p-8 bg-card/85 backdrop-blur-md border-border/90 hover:border-primary/50 transition-all duration-300 shadow-sm rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/80">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary">
                        {item.company}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5">
                        {item.period} ? {item.location}
                      </p>
                    </div>
                  </div>

                  <Badge className="self-start sm:self-center bg-emerald-500/10 text-emerald-500 border-emerald-500/30 text-xs px-3 py-1 font-mono">
                    10-15 Projects/Mo Velocity
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-surface border border-border/70 text-foreground py-1 px-2.5 rounded-md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 bg-surface/70 rounded-xl p-5 border border-border/60">
                  <h4 className="font-semibold text-sm flex items-center gap-2 text-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    Key Delivery Highlights & Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 sm:p-8 bg-card/85 backdrop-blur-md border-border/90 hover:border-primary/50 transition-all duration-300 shadow-sm rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {edu.description}
                    </p>
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
