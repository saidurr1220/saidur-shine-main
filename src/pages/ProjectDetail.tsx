import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { NavbarApple } from "@/components/NavbarApple";
import { FooterApple } from "@/components/FooterApple";
import { WhatsAppChatButton } from "@/components/WhatsAppChatButton";
import { projectsData } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp, Layers } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";
import { useCountUp } from "@/components/motion/useCountUp";

const METRIC_LABELS: Record<string, string> = {
  leadsRecovered: "Preferred-state leads recovered",
  securityTests: "Staff-role security tests passed",
  bulkEmails: "Bulk emails, no known bounces",
  filesVerified: "Plugin files hash-verified",
  modules: "Custom modules",
  inventory: "Shared inventory",
  compliance: "Compliance COA",
  contract: "Contract value",
  status: "System status",
  margin: "Margin controlled",
  pricing: "Pricing engine",
  tracking: "Conversion tracking",
  payments: "Payment webhooks",
  membership: "Membership tiers",
  aiIntegration: "AI integration",
  dashboard: "Portal modules",
  theme: "Theme architecture",
  auth: "Auth pipelines",
  bugfix: "Core bugfix",
  workflow: "Workflow routing",
  steps: "Onboarding steps",
  efficiency: "Processing time",
};

function MetricTile({ label, value }: { label: string; value: string }) {
  // Only count up pure percentages like 100% or clean numbers without slashes or plus
  const shouldCount = value.endsWith("%") && !value.includes("/");
  const numericMatch = shouldCount ? value.match(/^([0-9\.]+)(.*)$/) : null;
  const isNumeric = !!numericMatch;
  const numValue = isNumeric ? parseFloat(numericMatch[1]) : 0;
  const suffix = isNumeric ? numericMatch[2] : "";
  const decimals = numericMatch && numericMatch[1].includes(".") ? 1 : 0;

  const count = useCountUp(numValue, isNumeric, { duration: 800, decimals });

  const displayLabel = METRIC_LABELS[label] || label.replace(/([A-Z])/g, " $1");

  return (
    <div className="apple-card p-4 text-center">
      <div className="text-xl sm:text-2xl font-black text-slate-950 font-mono tracking-tight">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
        {displayLabel}
      </div>
    </div>
  );
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  // Scroll to top instantly and reset Lenis
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    window.scrollTo(0, 0);

    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { immediate: true });
    }

    // Dynamic SEO title & meta description
    document.title = `${project.title} | Saidur Rahman`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", project.description);
    }
  }, [id, project]);

  // Image scroll parallax (0.85x speed)
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: appleEase }}
      className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] selection:bg-emerald-100 selection:text-emerald-900"
    >
      <NavbarApple />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            asChild
            className="mb-8 rounded-full text-xs text-slate-600 hover:text-slate-900 border border-slate-200 bg-white shadow-sm"
          >
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-slate-600">
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                    {project.location}
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                    {project.filterCategory}
                  </span>
                </div>
              </div>

              {project.url && project.url !== "" && (
                <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full h-10 px-5 shadow-sm">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Website
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Optional Project Hero Screenshot with Scroll Parallax */}
          {(project.image || project.screenshot) && (
            <div
              ref={imageContainerRef}
              className="mb-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 aspect-[16/10] relative"
            >
              <motion.img
                style={!shouldReduce ? { y: imageParallaxY } : undefined}
                src={project.image || project.screenshot}
                alt={project.title}
                className="w-full h-[115%] object-cover object-top -mt-[5%]"
              />
            </div>
          )}

          {/* Production Architecture Card */}
          <div className="apple-card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" /> Production Architecture
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {project.architecture}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid with Count-up */}
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {Object.entries(project.metrics).map(([key, val]) => (
                <MetricTile key={key} label={key} value={val} />
              ))}
            </div>
          )}

          {/* Challenge, Solution, Impact Cards (revealed promptly) */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.45, ease: appleEase }}
              className="apple-card p-6"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <Target className="w-5 h-5 text-rose-600" />
                <h2 className="text-base font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.45, delay: 0.05, ease: appleEase }}
              className="apple-card p-6"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
                <h2 className="text-base font-bold text-slate-900">Engineered Solution</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.45, delay: 0.1, ease: appleEase }}
              className="apple-card p-6"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h2 className="text-base font-bold text-slate-900">Measurable Business Impact</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.impact}
              </p>
            </motion.div>

            {/* Request Flow with sequential steps & drawing connector line */}
            {project.workflowSteps && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05, margin: "0px 0px -5% 0px" }}
                transition={{ duration: 0.45, delay: 0.12, ease: appleEase }}
                className="apple-card p-6 sm:p-8 bg-white border border-slate-200/90 shadow-lg relative overflow-hidden"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/60">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      System Request &amp; Data Flow
                    </h2>
                    <p className="text-xs text-slate-500">
                      Step-by-step production execution and data pipeline
                    </p>
                  </div>
                </div>

                <div className="relative grid gap-3 pt-2">
                  {/* Subtle connecting vertical line on desktop */}
                  <div className="hidden sm:block absolute left-[27px] top-6 bottom-6 w-[2px] bg-emerald-200/60 -z-0" />

                  {project.workflowSteps.map((wf, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.05, margin: "0px 0px -5% 0px" }}
                      transition={{ duration: 0.35, delay: idx * 0.06, ease: appleEase }}
                      className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-3.5 transition-all hover:bg-slate-100/80 hover:border-slate-300 relative z-10"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#087f5b] text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-900 leading-snug">
                          {wf.step.replace(/^\d+\.\s*/, "")}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {wf.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-10 text-center p-8 rounded-3xl apple-card">
            <h3 className="text-xl font-bold mb-1.5 text-slate-900">Interested in similar results?</h3>
            <p className="text-slate-600 text-sm mb-5">
              Let's discuss how I can help design and engineer your custom system or platform.
            </p>
            <Button asChild size="lg" className="bg-[#087f5b] hover:bg-[#066347] text-white font-medium rounded-full shadow-sm">
              <a href="/#contact">{project.ctaText || "Discuss a similar project"}</a>
            </Button>
          </div>
        </div>
      </main>
      <FooterApple />
      <WhatsAppChatButton />
    </motion.div>
  );
};

export default ProjectDetail;
