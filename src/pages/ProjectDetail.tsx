import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { projects } from "@/components/Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Badge>{project.location}</Badge>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
              </div>
              <Button asChild className="gradient-hero">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="aspect-video bg-muted rounded-lg mb-12 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Challenge */}
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>
              <p className="text-muted-foreground">{project.problem}</p>
            </Card>

            {/* Solution */}
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">The Solution</h2>
              </div>
              <p className="text-muted-foreground">{project.solution}</p>
            </Card>

            {/* Impact */}
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">The Impact</h2>
              </div>
              <p className="text-muted-foreground">{project.impact}</p>
            </Card>

            {/* Key Deliverables */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Key Deliverables</h2>
              <ul className="space-y-3">
                {[
                  "Custom WordPress theme/plugin development",
                  "Responsive design across all devices",
                  "Performance optimization and caching",
                  "SEO implementation and technical optimization",
                  "Testing and quality assurance",
                  "Deployment and post-launch support",
                ].map((deliverable) => (
                  <li key={deliverable} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in similar results?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help with your project
            </p>
            <Button asChild size="lg" className="gradient-hero">
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
