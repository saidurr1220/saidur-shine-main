import React from "react";
import { Briefcase, GraduationCap, Award, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      "Delivered 11 projects last month with 10 rated 5 stars, consistently ahead of monthly targets and generating $3,000+ solo project value",
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
      "Comprehensive curriculum in software architecture, database management, algorithms, and web engineering that form the backbone of solid, upgrade-safe WordPress development.",
  },
];

export function ExperienceDev() {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-slate-950 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Work Experience & Education
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            High-volume agency delivery track record and computer science foundation.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-slate-900/85 backdrop-blur-xl border-slate-800 rounded-3xl shadow-xl hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 text-slate-950">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400">
                      {item.company}
                    </p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {item.period} ? {item.location}
                    </p>
                  </div>
                </div>

                <Badge className="self-start sm:self-center bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-xs px-3.5 py-1.5 font-mono">
                  10?15 Projects/Mo Velocity
                </Badge>
              </div>

              <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300 py-1 px-2.5 rounded-lg"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements Highlight */}
              <div className="space-y-3 bg-slate-950/80 rounded-2xl p-5 border border-slate-800">
                <h4 className="font-bold text-sm flex items-center gap-2 text-white">
                  <Award className="w-4 h-4 text-emerald-400" />
                  Key Delivery Highlights & Impact
                </h4>
                <ul className="space-y-2.5">
                  {item.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}

          {/* Education */}
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-slate-900/85 backdrop-blur-xl border-slate-800 rounded-3xl shadow-xl hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <edu.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-400">
                    {edu.institution}, {edu.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
