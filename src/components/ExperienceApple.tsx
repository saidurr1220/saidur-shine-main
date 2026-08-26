import React from "react";
import { Briefcase, GraduationCap, Award, CheckCircle2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const experienceData = [
  {
    icon: Briefcase,
    title: "WordPress Developer",
    company: "FB International BD",
    period: "01/2026 – Present",
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

export function ExperienceApple() {
  return (
    <section id="experience" className="py-28 px-4 bg-white border-t border-black/[0.04]">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Career Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Work Experience & Education
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            High-volume agency delivery track record and computer science foundation.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="apple-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-700">
                        {item.company}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.period} • {item.location}
                      </p>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                    10–15 Projects/Mo
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2.5 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100 mb-5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    Key Delivery Highlights & Impact
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-600 flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono bg-white border border-slate-200 text-slate-700 py-1 px-2.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          <div className="apple-card p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                B.Sc. in Computer Science & Engineering
              </h3>
              <p className="text-sm font-semibold text-emerald-700">
                North South University, Dhaka, Bangladesh
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Foundations in software architecture, database management, algorithms, and web engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
