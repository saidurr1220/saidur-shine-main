import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { projects } from "@/components/Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp, Layers } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-foreground">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                  <Badge className="bg-primary/10 text-primary border-primary/30">
                    {project.location}
                  </Badge>
                  <Badge variant="outline">{project.category}</Badge>
                  <span className="text-xs font-mono text-primary/80">
                    {project.architecture}
                  </span>
                </div>
              </div>

              {project.url && project.url !== "#" && (
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-primary/15 via-card to-card border border-border p-8 mb-8 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" /> Production Architecture
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {project.architecture}
            </h3>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sm:p-8 bg-card border-border rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-card border-border rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">The Challenge</h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {project.problem}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-card border-border rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">The Engineered Solution</h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-card border-border rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Measurable Business Impact</h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {project.impact}
              </p>
            </Card>

            {project.workflowSteps && (
              <Card className="p-6 sm:p-8 bg-card border-border rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" />
                  System Request & Data Flow
                </h2>
                <div className="grid gap-3">
                  {project.workflowSteps.map((wf, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-surface/70 border border-border/70 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{wf.step}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{wf.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Interested in similar results?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Let&apos;s discuss how I can help design and engineer your WordPress platform
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
