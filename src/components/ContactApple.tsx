import React, { useState } from "react";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/saidurr1256@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Portfolio Inquiry] ${formData.projectType} from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _captcha: "false",
        }),
      });

      const data = await res.json();
      if ((res.ok && data.success === "true") || res.status === 200) {
        setSubmitted(true);
        toast({
          title: "Inquiry Sent Successfully!",
          description: "Your message has been delivered to saidurr1256@gmail.com",
        });
      } else {
        throw new Error("Direct dispatch failed");
      }
    } catch (err) {
      setSubmitted(true);
      window.location.href = `mailto:saidurr1256@gmail.com?subject=Project Inquiry&body=${encodeURIComponent(
        formData.message
      )}`;
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#0b101b] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Availability Pill */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#10b981] uppercase block">
              GET IN TOUCH
            </span>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's build something
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10b981] tracking-tight leading-tight">
                exceptional.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-2">
              I'm currently available for client builds and agency roles. Feel free to reach out to discuss your project, ask a question, or just say hello.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0e2a22] border border-[#10b981]/30 rounded-full text-xs text-[#34d399] font-medium pt-1">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>Available for client builds &amp; agency roles</span>
            </div>
          </div>

          {/* Right Column: Clean White Form Card matching design */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white text-slate-900 shadow-2xl border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">Message Delivered!</h3>
                  <p className="text-xs text-slate-600">
                    Thank you! Saidur will get back to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 block">Name</label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border-slate-200 bg-slate-50 text-xs h-10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 block">Email</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border-slate-200 bg-slate-50 text-xs h-10"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 text-xs h-10 px-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#10b981]"
                    >
                      <option>Select a project type</option>
                      <option>Custom WordPress Plugin</option>
                      <option>WooCommerce E-Commerce Build</option>
                      <option>Dynamic Pricing / Booking Engine</option>
                      <option>Custom Web Application / System</option>
                    </select>
                  </div>

                  {/* Project Details Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">Project Details</label>
                    <Textarea
                      placeholder="Tell me about your project, goals, and requirements..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-slate-200 bg-slate-50 text-xs leading-relaxed resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full rounded-xl bg-[#087f5b] hover:bg-[#066347] text-white font-semibold text-xs h-11 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{isSending ? "Sending..." : "Send Inquiry"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
