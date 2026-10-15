import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Github, Mail, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

// [TODO: LinkedIn URL] - Set to your profile URL when ready (e.g. "https://linkedin.com/in/saidur")
const LINKEDIN_URL = "";

function UpworkIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

export function ContactApple() {
  const { toast } = useToast();
  const shouldReduce = useReducedMotion();

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

  const line1Words = ["Let's", "build"];
  const line2Words = ["something"];
  const line3Words = ["exceptional."];

  return (
    <section id="contact" data-dark="true" className="py-24 px-4 sm:px-6 bg-[#0b101b] text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading with Word Reveal & Availability Pill */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#10b981] uppercase block">
              GET IN TOUCH
            </span>

            {/* Word Reveal Heading */}
            <div className="space-y-0.5">
              <div className="flex flex-wrap gap-x-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {line1Words.map((word, wIdx) => (
                  <span key={wIdx} className="overflow-hidden inline-block py-0.5">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: wIdx * 0.08, ease: appleEase }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {line2Words.map((word, wIdx) => (
                  <span key={wIdx} className="overflow-hidden inline-block py-0.5">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: 0.16 + wIdx * 0.08, ease: appleEase }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10b981] tracking-tight leading-tight">
                {line3Words.map((word, wIdx) => (
                  <span key={wIdx} className="overflow-hidden inline-block py-0.5">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: 0.32 + wIdx * 0.08, ease: appleEase }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-2">
              I'm currently available for client builds and agency roles. Feel free to reach out to discuss your project, ask a question, or just say hello.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0e2a22] border border-[#10b981]/30 rounded-full text-xs text-[#34d399] font-medium pt-1">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping opacity-75" />
              <span>Available for client builds &amp; agency roles</span>
            </div>
          </div>

          {/* Right Column: Clean White Form Card with Animated Focus Rings & Shimmer Button */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: appleEase }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white text-slate-900 shadow-2xl border border-white/10"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </motion.div>
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
                      <label className="text-xs font-semibold text-slate-700 block transition-transform duration-200">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border-slate-200 bg-slate-50 text-xs h-11 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 block transition-transform duration-200">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border-slate-200 bg-slate-50 text-xs h-11 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981]"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 text-xs h-11 px-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all duration-200"
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
                      className="rounded-xl border-slate-200 bg-slate-50 text-xs leading-relaxed resize-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981]"
                    />
                  </div>

                  {/* Full-width Submit Button with Shimmer Sweep & Loading Spinner State */}
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="relative w-full rounded-xl bg-[#087f5b] hover:bg-[#066347] text-white font-semibold text-xs h-11 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 overflow-hidden group active:scale-[0.99]"
                  >
                    {/* Shimmer sweep effect */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  {/* Direct Channels: WhatsApp, Email, GitHub, Upwork */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-600">
                    <a
                      href="https://wa.me/8801515687002?text=Hi%20Saidur,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#087f5b] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#087f5b]" />
                      <span>WhatsApp</span>
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="mailto:saidurr1256@gmail.com"
                      className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#087f5b] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#087f5b]" />
                      <span>saidurr1256@gmail.com</span>
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="https://github.com/saidurr1220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#087f5b] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-[#087f5b]" />
                      <span>GitHub</span>
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="https://www.upwork.com/freelancers/~01fe77731f3b62869f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#087f5b] transition-colors"
                    >
                      <UpworkIcon className="w-3.5 h-3.5 text-[#087f5b]" />
                      <span>Upwork</span>
                    </a>
                    {LINKEDIN_URL && (
                      <>
                        <span className="text-slate-300">|</span>
                        <a
                          href={LINKEDIN_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-[#087f5b] transition-colors"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-[#087f5b]" />
                          <span>LinkedIn</span>
                        </a>
                      </>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
