import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { NavbarApple } from "@/components/NavbarApple";
import { FooterApple } from "@/components/FooterApple";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp, Layers } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] selection:bg-emerald-100 selection:text-emerald-900">
      <NavbarApple />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-8 rounded-full text-xs text-slate-600 hover:text-slate-900 border border-slate-200 bg-white shadow-sm">
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          <div className="mb-10">
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
                  <span className="text-xs font-mono text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                    {project.architecture}
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

          <div className="space-y-4">
            <div className="apple-card p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <Target className="w-5 h-5 text-rose-600" />
                <h2 className="text-base font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="apple-card p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
                <h2 className="text-base font-bold text-slate-900">Engineered Solution</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="apple-card p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h2 className="text-base font-bold text-slate-900">Measurable Business Impact</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.impact}
              </p>
            </div>

            {/* Request Flow */}
            {project.workflowSteps && (
              <div className="apple-card p-6 bg-slate-900 text-white">
                <h2 className="text-base font-bold mb-3 text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  System Request & Data Flow
                </h2>
                <div className="grid gap-2.5">
                  {project.workflowSteps.map((wf, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white mb-0.5">{wf.step}</p>
                        <p className="text-xs text-slate-300 leading-relaxed">{wf.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 text-center p-8 rounded-3xl apple-card">
            <h3 className="text-xl font-bold mb-1.5 text-slate-900">Interested in similar results?</h3>
            <p className="text-slate-600 text-sm mb-5">
              Let's discuss how I can help design and engineer your custom WordPress platform.
            </p>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full shadow-sm">
              <a href="/#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </main>
      <FooterApple />
    </div>
  );
};

export default ProjectDetail;
