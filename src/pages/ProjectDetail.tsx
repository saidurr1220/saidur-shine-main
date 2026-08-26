import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { NavbarUnique } from "@/components/NavbarUnique";
import { FooterUnique } from "@/components/FooterUnique";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp, Layers } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-[#060813] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      <NavbarUnique />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Button variant="ghost" asChild className="mb-8 rounded-2xl text-xs font-mono text-slate-400 hover:text-white border border-white/10 bg-white/[0.03]">
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-slate-400">
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono text-xs">
                    {project.location}
                  </Badge>
                  <Badge variant="outline" className="border-white/10 font-mono text-xs text-slate-300">{project.filterCategory}</Badge>
                  <span className="text-xs font-mono text-emerald-400/90 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {project.architecture}
                  </span>
                </div>
              </div>

              {project.url && project.url !== "" && (
                <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl h-11 px-6 shadow-xl shadow-emerald-500/20">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Website
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-8 mb-8 shimmer-border">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" /> Production Architecture
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.architecture}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">The Challenge</h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.problem}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">Engineered Solution</h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">Measurable Business Impact</h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.impact}
              </p>
            </Card>

            {/* Request Flow */}
            {project.workflowSteps && (
              <Card className="p-6 sm:p-8 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  System Request & Data Flow
                </h2>
                <div className="grid gap-3">
                  {project.workflowSteps.map((wf, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-white/5 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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

          <div className="mt-12 text-center p-8 rounded-3xl bg-slate-900/90 border border-white/10">
            <h3 className="text-2xl font-bold mb-2 text-white">Interested in similar results?</h3>
            <p className="text-slate-400 text-sm mb-6">
              Let's discuss how I can help design and engineer your custom WordPress platform.
            </p>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl">
              <a href="/#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </main>
      <FooterUnique />
    </div>
  );
};

export default ProjectDetail;
