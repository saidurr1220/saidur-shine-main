import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Phone, Globe, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
    subtext: "WordPress plugins & repositories",
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

export function ContactFresh() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom WordPress Plugin",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Saidur will respond within 24 hours.",
      });
      setFormData({ name: "", email: "", projectType: "Custom WordPress Plugin", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-28 px-4 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Communication & Scoping</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Let's Build Together
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Need a custom WordPress plugin, complex WooCommerce engine, dynamic pricing integration, or high-volume agency support? Let's talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                Direct Channels
              </h3>
              <div className="grid gap-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-all flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-mono text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                          {item.value}
                        </p>
                      )}
                      <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Turnaround Guarantee Card */}
            <Card className="p-5 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">
                    Agency Delivery Guarantee
                  </span>
                  Average turnaround under 24-48 hours for scoped tasks. 10 to 15 projects successfully delivered per month with 100% upgrade safety.
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out your project requirements below to receive a proposed architecture and timeline.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                      Your Name / Company
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="bg-slate-50 border-slate-200 rounded-xl text-sm text-slate-900 focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                      Work Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      required
                      className="bg-slate-50 border-slate-200 rounded-xl text-sm text-slate-900 focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                    Project Scope / Requirement
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full h-10 px-3 py-2 text-xs font-mono rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  >
                    <option value="Custom WordPress Plugin">Custom WordPress Plugin Development (OOP)</option>
                    <option value="WooCommerce Custom Platform">WooCommerce Custom Engine / B2B Wholesale</option>
                    <option value="Booking & Dynamic Pricing">Booking & Dynamic Pricing Engine (Distance Matrix)</option>
                    <option value="GTM / Conversion Tracking Audit">GTM / GA4 Tracking & Conversion Deduplication</option>
                    <option value="Membership & LMS Portal">Membership & LMS Portal (PMPro / Tutor LMS)</option>
                    <option value="Full Stack Agency Partnership">Full-Stack WordPress Agency Role / Contract</option>
                    <option value="Other">Other Custom Work</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 font-medium">
                    Project Details & Goals
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your platform requirements, timeline, and current WordPress setup..."
                    rows={4}
                    required
                    className="bg-slate-50 border-slate-200 rounded-xl text-sm text-slate-900 resize-none focus:border-emerald-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all h-12"
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
