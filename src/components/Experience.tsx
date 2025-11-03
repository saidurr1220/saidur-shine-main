import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "MERN Stack Developer",
    organization: "Freelance",
    period: "2022 – Present",
    location: "Remote (USA, UK, Germany)",
    description:
      "Specialized in full-stack MERN applications for international clients. Built scalable web applications with modern JavaScript ecosystem and cloud deployment.",
    achievements: [
      "Delivered 25+ MERN stack applications with 99% uptime",
      "Built real-time applications using Socket.io and WebSocket connections",
      "Integrated payment systems (Stripe, PayPal) and third-party APIs",
      "Achieved 40% faster development cycles using modern tooling and best practices",
    ],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "WordPress Developer",
    organization: "Freelance",
    period: "2021 – 2022",
    location: "Remote (UK & Germany)",
    description:
      "Delivered 30+ WordPress projects for international clients. Specialized in custom theme development, ACF integration, and performance optimization.",
    achievements: [
      "Built custom WordPress themes from scratch with ACF integration",
      "Improved Core Web Vitals scores by average 60%",
      "Managed complete project lifecycle from design to deployment",
      "Mastered Elementor Pro, WooCommerce, and custom post types",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Sc. in Computer Science & Engineering",
    organization: "North South University",
    period: "2017 – 2021",
    location: "Dhaka, Bangladesh",
    description:
      "Comprehensive computer science education covering algorithms, data structures, web technologies, and software engineering principles.",
  },
  {
    type: "course",
    icon: Award,
    title: "Complete Web Development Course",
    organization: "Programming Hero",
    period: "2020",
    description:
      "Intensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built multiple full-stack projects including e-commerce and social media applications.",
  },
  {
    type: "course",
    icon: Award,
    title: "Advanced React & Next.js",
    organization: "Self-Learning",
    period: "2021 – 2022",
    description:
      "Deep dive into React ecosystem including hooks, context, Redux, Next.js, TypeScript, and modern development practices.",
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            3+ years delivering scalable solutions for global clients
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="absolute left-6 md:left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } pl-16 md:pl-0`}
                >
                  <Card className="p-4 sm:p-6 bg-card border-border">
                    <div className="mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium text-sm sm:text-base">
                        {item.organization}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.period} • {item.location}
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    {item.achievements && (
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
