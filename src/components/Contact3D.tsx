import React, { useState } from "react";
import { Mail, Send, Download, Sparkles, MessageSquare, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function Contact3D() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "3D Character Modeling",
    budget: "$3,000 ? $5,000",
    timeline: "2 ? 4 Weeks",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socials = [
    { name: "ArtStation", handle: "artstation.com/saidurr", url: "https://www.artstation.com", color: "text-blue-400" },
    { name: "Behance", handle: "behance.net/saidurrahman", url: "https://www.behance.net", color: "text-cyan-400" },
    { name: "Instagram", handle: "@saidur.3d", url: "https://www.instagram.com", color: "text-rose-400" },
    { name: "Discord", handle: "saidur_3d#0001", url: "https://discord.com", color: "text-indigo-400" },
    { name: "LinkedIn", handle: "linkedin.com/in/rahmansaidur", url: "https://www.linkedin.com/in/rahmansaidur", color: "text-blue-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Commission Inquiry Dispatched!",
        description: "Thank you for reaching out. Saidur will respond with project quote within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        projectType: "3D Character Modeling",
        budget: "$3,000 ? $5,000",
        timeline: "2 ? 4 Weeks",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-950/90 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commission Desk & Direct Inquiries</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Commission a 3D Project
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Need a high-fidelity 3D character, commercial product animation, or real-time game environment? Let's discuss scope, polygon budgets, and delivery timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Socials & Commission Status */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Commission Status Card */}
            <Card className="p-6 bg-gray-900/85 backdrop-blur-md border-border/80 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <h3 className="text-base font-bold text-foreground">Commission Status: OPEN</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Currently booking commercial lookdev, character commissions, and motion design projects for 2025/2026.
              </p>

              <div className="flex items-center gap-3 p-3 bg-gray-950/80 rounded-2xl border border-border/70 text-xs font-mono">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:saidurr1256@gmail.com" className="text-foreground hover:text-primary transition-colors truncate">
                  saidurr1256@gmail.com
                </a>
              </div>
            </Card>

            {/* Social Channels & Portfolios */}
            <Card className="p-6 bg-gray-900/85 backdrop-blur-md border-border/80 rounded-3xl shadow-lg">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" />
                3D Portfolios & Community
              </h4>

              <div className="space-y-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-gray-950/70 border border-border/60 hover:border-primary/50 transition-all flex items-center justify-between text-xs group"
                  >
                    <span className={`font-bold ${s.color}`}>{s.name}</span>
                    <span className="font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      {s.handle} ?
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Rate Sheet Download */}
            <Card className="p-5 bg-gradient-to-br from-primary/10 via-gray-900/80 to-gray-900 border border-primary/30 rounded-3xl flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-foreground">2025 Rate Sheet & Specs</h4>
                <p className="text-[11px] text-muted-foreground font-mono">Commercial 3D Day Rates & Deliverables</p>
              </div>
              <Button size="sm" variant="outline" className="border-primary/40 text-primary hover:bg-primary/20 text-xs font-mono">
                <Download className="w-3.5 h-3.5 mr-1" /> PDF
              </Button>
            </Card>
          </div>

          {/* Right Column: Interactive 3D Scope Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-gray-900/90 backdrop-blur-md border-border/90 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-2">Initiate 3D Project Inquiry</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Fill in your project specifications to receive a technical quote and estimated turnaround.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Your Name / Studio
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova / Voxel VFX"
                      required
                      className="bg-gray-950 border-border/80 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Work Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@studio.com"
                      required
                      className="bg-gray-950 border-border/80 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      3D Deliverable
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full h-10 px-3 py-1 text-xs font-mono rounded-xl border border-border/80 bg-gray-950 text-foreground focus:ring-1 focus:ring-primary"
                    >
                      <option value="3D Character Modeling">3D Character Modeling</option>
                      <option value="Product Visualization">Product Visualization</option>
                      <option value="Environment Art">Environment Art</option>
                      <option value="Motion Graphics & VFX">Motion Graphics & VFX</option>
                      <option value="Hard-Surface Props">Hard-Surface Props</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-10 px-3 py-1 text-xs font-mono rounded-xl border border-border/80 bg-gray-950 text-foreground focus:ring-1 focus:ring-primary"
                    >
                      <option value="$1,500 ? $3,000">$1,500 ? $3,000</option>
                      <option value="$3,000 ? $5,000">$3,000 ? $5,000</option>
                      <option value="$5,000 ? $10,000">$5,000 ? $10,000</option>
                      <option value="$10,000+">$10,000+ (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-10 px-3 py-1 text-xs font-mono rounded-xl border border-border/80 bg-gray-950 text-foreground focus:ring-1 focus:ring-primary"
                    >
                      <option value="1 ? 2 Weeks">1 ? 2 Weeks (Rush)</option>
                      <option value="2 ? 4 Weeks">2 ? 4 Weeks</option>
                      <option value="1 ? 2 Months">1 ? 2 Months</option>
                      <option value="Ongoing Studio Contract">Ongoing Studio Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5">
                    Project Brief & Polygon / Engine Requirements
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your concept, target game engine (UE5 / Unity), polycount constraints, and required map resolutions..."
                    rows={4}
                    required
                    className="bg-gray-950 border-border/80 rounded-xl text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-2xl shadow-lg shadow-primary/20 transition-all h-12"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Transmitting Brief..." : "Submit 3D Project Brief"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
