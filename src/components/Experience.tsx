import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    period: "January 2021 – June 2023",
    location: "Remote",
    description: "Delivered 15+ WordPress projects for international clients (UK & Germany). Specialized in custom theme development, performance optimization, and technical SEO.",
    achievements: [
      "Improved Core Web Vitals scores by average 50%",
      "Managed full project lifecycle from requirements to deployment",
      "Maintained 5-star client satisfaction rating",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Sc. in Computer Science & Engineering",
    organization: "North South University",
    period: "2017 – 2021",
    location: "Dhaka, Bangladesh",
    description: "Comprehensive computer science education covering algorithms, data structures, web technologies, and software engineering principles.",
  },
  {
    type: "course",
    icon: Award,
    title: "Complete Web Development Course",
    organization: "Programming Hero",
    period: "2020",
    description: "Intensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built multiple full-stack projects.",
  },
  {
    type: "course",
    icon: Award,
    title: "WordPress & Freelancing Masterclass",
    organization: "Shikhbe Shobai",
    period: "2020",
    description: "Comprehensive WordPress development training including theme customization, plugin development, and freelancing best practices.",
  },
];

export function Experience() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                  <Card className="p-6 bg-card border-border">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.period} • {item.location}
                      </p>
                    </div>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    {item.achievements && (
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
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
