import { useEffect, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type FormState = {
  name: string;
  email: string;
  message: string;
  botField: string;
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saidurr156@gmail.com",
    href: "mailto:saidurr156@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saidur1529",
    href: "https://github.com/saidur1529",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rahmansaidur",
    href: "https://www.linkedin.com/in/rahmansaidur/",
  },
];

/** API hook: prepare → csrfToken, submit → /api/contact */
function useContactApi() {
  const [csrfToken, setCsrfToken] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/contact/prepare", {
          credentials: "include",
        });
        if (!r.ok) {
          console.error("prepare failed", r.status, await r.text());
          return;
        }
        const j = await r.json();
        if (j?.token) setCsrfToken(j.token);
      } catch (e) {
        console.error("prepare error:", e);
      }
    })();
  }, []);

  async function send(payload: {
    name: string;
    email: string;
    message: string;
    botField?: string;
  }) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ ...payload, csrfToken }),
    });
    return res.json();
  }

  return { csrfToken, send };
}

export function Contact() {
  const { toast } = useToast();
  const { csrfToken, send } = useContactApi();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    botField: "", // honeypot
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 🚫 আর mailto নেই
    setIsSending(true);
    try {
      const json = await send(formData);
      if (json?.ok) {
        toast({ title: "Thanks!", description: "Your message has been sent." });
        setFormData({ name: "", email: "", message: "", botField: "" });
      } else {
        toast({
          title: "Failed",
          description: json?.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a reliable WordPress developer or need help with your
            web project? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card
                    key={item.label}
                    className="p-4 bg-card border-border animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Quick Response Time</h4>
              <p className="text-muted-foreground mb-2">
                I typically respond within 24 hours on weekdays.
              </p>
              <p className="text-muted-foreground">
                Available for freelance projects, consultations, and long-term
                collaborations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Honeypot anti-bot (hidden) */}
                <input
                  type="text"
                  name="botField"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.botField}
                  onChange={(e) =>
                    setFormData({ ...formData, botField: e.target.value })
                  }
                  className="hidden"
                />

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending || !csrfToken}
                  className="w-full gradient-hero"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
