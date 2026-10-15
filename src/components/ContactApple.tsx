import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

function UpworkIcon({ className = "w-4 h-4" }: { className?: string }) {
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Task 2: Heading Reveal with parent useInView + 1.5s fallback timer
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.15 });
  const [headingForced, setHeadingForced] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeadingForced(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const showHeading = isHeadingInView || headingForced;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText("saidurr1256@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Email Copied",
        description: "saidurr1256@gmail.com copied to clipboard",
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      window.location.href = "mailto:saidurr1256@gmail.com";
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-stretch">
          {/* Left Column: Heading, Contact Cards, Timeline, Availability */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#10b981] uppercase block">
              GET IN TOUCH
            </span>

            {/* Word Reveal Heading with failsafe fallback */}
            <div ref={headingRef} className="space-y-0.5">
              <div className="flex flex-wrap gap-x-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {line1Words.map((word, wIdx) => (
                  <span key={wIdx} className="overflow-hidden inline-block py-0.5">
                    <motion.span
                      initial={{ y: "115%", opacity: 0 }}
                      animate={showHeading ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
                      transition={{ duration: 0.5, delay: wIdx * 0.08, ease: appleEase }}
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
                      animate={showHeading ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.16 + wIdx * 0.08, ease: appleEase }}
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
                      animate={showHeading ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.32 + wIdx * 0.08, ease: appleEase }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Have a project in mind, need WordPress engineering support, or want to discuss a role? Let's talk.
            </p>

            {/* 3 Dark Glass Contact Cards */}
            <div className="space-y-2.5 pt-1">
              {/* 1. Email Card */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#10b981]/40 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 group">
                <a
                  href="mailto:saidurr1256@gmail.com"
                  className="flex items-center gap-3 min-w-0 flex-1"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0e2a22] border border-[#10b981]/30 text-[#34d399] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Email
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#34d399] transition-colors">
                      saidurr1256@gmail.com
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* 2. WhatsApp Card */}
              <a
                href="https://wa.me/8801515687002?text=Hi%20Saidur,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#10b981]/40 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-9 h-9 rounded-lg bg-[#0e2a22] border border-[#10b981]/30 text-[#34d399] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      WhatsApp
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#34d399] transition-colors">
                      +880 1515-687002
                    </div>
                  </div>
                </div>
                <div className="p-2 text-slate-400 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* 3. Upwork Card */}
              <a
                href="https://www.upwork.com/freelancers/~01fe77731f3b62869f"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#10b981]/40 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-9 h-9 rounded-lg bg-[#0e2a22] border border-[#10b981]/30 text-[#34d399] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <UpworkIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Upwork
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#34d399] transition-colors">
                      100% Job Success
                    </div>
                  </div>
                </div>
                <div className="p-2 text-slate-400 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* 3-Step "What happens next" Timeline */}
            <div className="pt-2 space-y-2.5">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                What happens next
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0e2a22] text-[#34d399] border border-[#10b981]/30 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0">
                    1
                  </div>
                  <span>You send the details</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0e2a22] text-[#34d399] border border-[#10b981]/30 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0">
                    2
                  </div>
                  <span>I reply with questions or an estimate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0e2a22] text-[#34d399] border border-[#10b981]/30 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0">
                    3
                  </div>
                  <span>We agree on scope and start</span>
                </div>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0e2a22] border border-[#10b981]/30 rounded-full text-xs text-[#34d399] font-medium pt-1">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping opacity-75" />
              <span>Available for client builds &amp; agency roles</span>
            </div>
          </div>

          {/* Right Column: Dark Form Card */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: appleEase }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0f1724] text-white shadow-2xl border border-white/10 h-full flex flex-col"
            >
              {submitted ? (
                <div className="py-12 my-auto text-center space-y-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">Message Delivered!</h3>
                  <p className="text-xs text-slate-400">
                    Thank you! Saidur will get back to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  {/* Name and Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 text-xs h-11 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 text-xs h-11 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981]"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0f1724] text-xs h-11 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all duration-200"
                    >
                      <option className="bg-[#0f1724] text-slate-200">Select a project type</option>
                      <option className="bg-[#0f1724] text-slate-200">Custom WordPress Plugin</option>
                      <option className="bg-[#0f1724] text-slate-200">WooCommerce E-Commerce Build</option>
                      <option className="bg-[#0f1724] text-slate-200">Dynamic Pricing / Booking Engine</option>
                      <option className="bg-[#0f1724] text-slate-200">Custom Web Application / System</option>
                      <option className="bg-[#0f1724] text-slate-200">Job opportunity / Hiring</option>
                    </select>
                  </div>

                  {/* Project Details Textarea */}
                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Project Details
                    </label>
                    <Textarea
                      placeholder="Tell me about your project, goals, and requirements..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 text-xs leading-relaxed resize-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981] min-h-[140px] lg:min-h-[160px] flex-1"
                    />
                  </div>

                  {/* Full-width Submit Button with Shimmer Sweep & Loading Spinner */}
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="relative w-full rounded-xl bg-[#087f5b] hover:bg-[#066347] text-white font-semibold text-xs h-11 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 overflow-hidden group active:scale-[0.99] cursor-pointer mt-auto"
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

                  {/* Prefer email note */}
                  <p className="pt-2 text-center text-xs text-slate-400">
                    Prefer direct email?{" "}
                    <a
                      href="mailto:saidurr1256@gmail.com"
                      className="text-[#34d399] hover:underline font-medium"
                    >
                      saidurr1256@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
