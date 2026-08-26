import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { NavbarFresh } from "@/components/NavbarFresh";
import { FooterFresh } from "@/components/FooterFresh";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      <NavbarFresh />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Button variant="ghost" asChild className="mb-8 rounded-2xl text-xs font-mono text-slate-600 hover:text-slate-900 border border-slate-200 bg-white shadow-sm">
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-slate-600">
                  <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 font-mono text-xs">
                    {project.location}
                  </Badge>
                  <Badge variant="outline" className="border-slate-200 font-mono text-xs text-slate-700">{project.filterCategory}</Badge>
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-medium">
                    {project.architecture}
                  </span>
                </div>
              </div>

              {project.url && project.url !== "" && (
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl h-11 px-6 shadow-md shadow-emerald-600/20">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Website
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 uppercase tracking-wider mb-2 font-bold">
              <Layers className="w-4 h-4" /> Production Architecture
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {project.architecture}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.problem}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Engineered Solution</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Measurable Business Impact</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.impact}
              </p>
            </Card>

            {/* Request Flow */}
            {project.workflowSteps && (
              <Card className="p-6 sm:p-8 bg-slate-900 text-white border border-slate-800 rounded-3xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  System Request & Data Flow
                </h2>
                <div className="grid gap-3">
                  {project.workflowSteps.map((wf, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{wf.step}</p>
                        <p className="text-xs text-slate-300 mt-0.5">{wf.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Interested in similar results?</h3>
            <p className="text-slate-600 text-sm mb-6">
              Let's discuss how I can help design and engineer your custom WordPress platform.
            </p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md">
              <a href="/#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </main>
      <FooterFresh />
    </div>
  );
};

export default ProjectDetail;
