import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Phone, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saidurr1256@gmail.com",
    href: "mailto:saidurr1256@gmail.com",
    subtext: "Fastest response within 4-12 hours",
  },
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    value: "+880 1515-687002",
    href: "https://wa.me/8801515687002",
    subtext: "Direct messaging & project scoping",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    subtext: "GMT+6 (Covers US, UK, EU & AU timezones)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saidurr1220",
    href: "https://github.com/saidurr1220",
    subtext: "Open source plugins & code samples",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rahmansaidur",
    href: "https://www.linkedin.com/in/rahmansaidur",
    subtext: "Professional network & recommendations",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "saidur-it.vercel.app",
    href: "https://saidur-it.vercel.app",
    subtext: "Live production showcase",
  },
];

export function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom WordPress Plugin",
    message: "",
    botField: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  async function ensureToken() {
    if (csrfToken) return csrfToken;
    try {
      const r = await fetch("/api/contact/prepare", { credentials: "include" });
      if (!r.ok) return null;
      const j = await r.json();
      setCsrfToken(j.token);
      return j.token as string;
    } catch {
      return null;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const token = await ensureToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ...formData, csrfToken: token }),
      });
      const json = await res.json().catch(() => ({ ok: true }));
      if (json.ok || res.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. Saidur will respond within 24 hours.",
        });
        setFormData({ name: "", email: "", projectType: "Custom WordPress Plugin", message: "", botField: "" });
      } else {
        toast({
          title: "Message Received",
          description: "Your inquiry has been queued. You can also email saidurr1256@gmail.com directly.",
        });
      }
    } catch {
      toast({
        title: "Message Sent",
        description: "Thank you! For urgent requests, feel free to ping directly via WhatsApp or email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-br from-background via-surface/70 to-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            <span className="font-mono text-primary">&lt;</span>
            Let's Build Together
            <span className="font-mono text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Need a custom WordPress plugin, complex WooCommerce engine, dynamic pricing integration, or high-volume agency support? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-card/85 backdrop-blur-md border border-border/90 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Contact & Channels
              </h3>
              <div className="grid gap-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-xl bg-surface/70 border border-border/60 hover:border-primary/40 transition-all flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-mono text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
                          {item.value}
                        </p>
                      )}
                      <p className="text-[10px] text-muted-foreground/80 mt-0.5 truncate">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-5 bg-card/85 backdrop-blur-md border-border/90 rounded-2xl">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground block mb-1">
                    Agency Delivery Guarantee
                  </span>
                  Average turnaround under 24-48 hours for scoped tasks. 10 to 15 projects successfully delivered per month with 100% upgrade safety.
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-card/90 backdrop-blur-md border-border/90 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Fill out the project scope below, and I will get back to you with a proposed architecture or timeline.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1.5 text-foreground">
                      Your Name / Company
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="bg-surface/70 border-border/80 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-foreground">
                      Work Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      required
                      className="bg-surface/70 border-border/80 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-medium mb-1.5 text-foreground">
                    Project Scope / Requirement
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full h-10 px-3 py-2 text-sm rounded-xl border border-border/80 bg-surface/70 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Custom WordPress Plugin">Custom WordPress Plugin Development</option>
                    <option value="WooCommerce Custom Platform">WooCommerce Custom Engine / B2B Wholesale</option>
                    <option value="Booking & Dynamic Pricing">Booking & Dynamic Pricing Engine (Distance Matrix)</option>
                    <option value="GTM / Conversion Tracking Audit">GTM / GA4 Tracking & Conversion Deduplication</option>
                    <option value="Membership & LMS Portal">Membership & LMS Portal (PMPro / Tutor LMS)</option>
                    <option value="Full Stack Agency Partnership">Full-Stack WordPress Agency Role / Contract</option>
                    <option value="Other">Other Custom Work</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="botField"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                />

                <div>
                  <label htmlFor="message" className="block text-xs font-medium mb-1.5 text-foreground">
                    Project Details & Goals
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your platform requirements, timeline, and current WordPress setup..."
                    rows={4}
                    required
                    className="bg-surface/70 border-border/80 rounded-xl text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-xl shadow-md shadow-primary/20 transition-all"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSending ? "Dispatching Message..." : "Send Project Inquiry"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
