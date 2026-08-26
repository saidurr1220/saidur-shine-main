import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Phone, Globe, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export function ContactApple() {
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
    <section id="contact" className="py-28 px-4 apple-canvas border-t border-black/[0.04]">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Let's Build Together
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Need a custom WordPress plugin, complex WooCommerce platform, dynamic distance pricing integration, or high-volume agency support?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="apple-card p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                Contact Information
              </h3>

              <div className="space-y-3 text-sm">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">Email Address</p>
                    <a href="mailto:saidurr1256@gmail.com" className="font-semibold text-slate-900 hover:text-emerald-700">
                      saidurr1256@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">WhatsApp & Phone</p>
                    <a href="https://wa.me/8801515687002" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-emerald-700">
                      +880 1515-687002
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">Location</p>
                    <p className="font-semibold text-slate-900">Dhaka, Bangladesh (Global Remote)</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex gap-2">
                <a
                  href="https://github.com/saidurr1220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-center text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rahmansaidur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-center text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Turnaround Guarantee */}
            <div className="apple-card p-5 flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-0.5">Agency Turnaround Guarantee</span>
                Fast turnaround within 24–48 hours for scoped tasks. 10 to 15 projects delivered monthly with 100% upgrade safety.
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="apple-card p-6 sm:p-8">
              <h3 className="text-lg font-bold mb-1 text-slate-900">
                Send Project Details
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Fill in your project requirements to receive an architectural estimate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Name / Organization
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      required
                      className="bg-slate-50 border-slate-200 rounded-xl text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Work Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      required
                      className="bg-slate-50 border-slate-200 rounded-xl text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Project Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full h-10 px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="Custom WordPress Plugin">Custom WordPress Plugin Development (OOP)</option>
                    <option value="WooCommerce Custom Platform">WooCommerce Custom Platform / B2B Wholesale</option>
                    <option value="Booking & Dynamic Pricing">Booking & Dynamic Pricing Engine (Distance Matrix)</option>
                    <option value="GTM / Conversion Tracking Audit">GTM / GA4 Tracking & Conversion Deduplication</option>
                    <option value="Membership & LMS Portal">Membership & LMS Portal (PMPro / Tutor LMS)</option>
                    <option value="Full Stack Agency Partnership">Full-Stack WordPress Agency Role / Contract</option>
                    <option value="Other">Other Custom Work</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Requirements & Goals
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements, timeline, and current WordPress setup..."
                    rows={4}
                    required
                    className="bg-slate-50 border-slate-200 rounded-xl text-sm text-slate-900 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-full shadow-sm transition-all h-11"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
