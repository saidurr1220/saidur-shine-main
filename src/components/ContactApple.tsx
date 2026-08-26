import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Phone, Globe, Clock, Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Construct direct mailto link to guarantee delivery to saidurr1256@gmail.com
    const subject = encodeURIComponent(`[Project Inquiry: ${formData.projectType}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Saidur,

Name: ${formData.name}
Email: ${formData.email}
Scope: ${formData.projectType}

Message:
${formData.message}

--
Sent from your portfolio contact desk.`
    );
    
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      
      // Open direct mail client as fallback guarantee
      window.open(`mailto:saidurr1256@gmail.com?subject=${subject}&body=${body}`, "_blank");

      toast({
        title: "Inquiry Prepared Successfully!",
        description: "Your mail client has been opened. Saidur will respond within 4-12 hours.",
      });
    }, 600);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Saidur, I found your portfolio and would like to discuss a WordPress project (${formData.projectType || "Custom Development"}). My name is ${formData.name || "a client"}.`
    );
    window.open(`https://wa.me/8801515687002?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-28 px-4 apple-canvas border-t border-black/[0.04]">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 , ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Communication & Fast Turnaround</span>
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
                Direct Channels
              </h3>

              <div className="space-y-3 text-sm">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">Direct Email</p>
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
                    <p className="text-[11px] text-slate-500">WhatsApp & Phone (Instant)</p>
                    <a href="https://wa.me/8801515687002" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-emerald-700 font-mono">
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
                    <p className="font-semibold text-slate-900">Dhaka, Bangladesh (US/UK/AU Remote)</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat Button */}
              <button
                type="button"
                onClick={openWhatsAppDirect}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Chat on WhatsApp (+880 1515-687002)
              </button>

              <div className="pt-2 border-t border-slate-100 flex gap-2">
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
                Fast turnaround within 24 to 48 hours for scoped tasks. 10 to 15 projects delivered monthly with 100% upgrade safety.
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

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-base">Thank You! Your Inquiry is Prepared</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your message draft has been queued for Saidur at <span className="font-semibold text-slate-900">saidurr1256@gmail.com</span>. You can also message directly on WhatsApp for immediate priority.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <Button
                      size="sm"
                      onClick={openWhatsAppDirect}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1" /> Open WhatsApp
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="rounded-full text-xs"
                    >
                      Send Another
                    </Button>
                  </div>
                </div>
              ) : (
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
                    {isSending ? "Preparing Email..." : "Send Project Inquiry"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
