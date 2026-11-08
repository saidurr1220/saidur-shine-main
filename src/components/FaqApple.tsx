import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { appleEase } from "@/lib/motion";

const faqs = [
  {
    q: "Can you work on my existing WordPress site?",
    a: "Yes. A lot of my work is on live sites: new features, bug fixes, plugin conflicts, migrations, backup restores and malware cleanup. I start by reviewing the current setup so changes fit what's already there.",
  },
  {
    q: "Do you build custom plugins, or just configure existing ones?",
    a: "Custom is my focus. Recent builds include a courier booking engine with dynamic pricing, a referral commission system with partner dashboards and PDF reports, a subscription CRM and an AI reading engine on the OpenAI API.",
  },
  {
    q: "Will my live site break while you work?",
    a: "I build and test on a staging copy first, then move changes to production once you've reviewed them, and I verify everything again after launch.",
  },
  {
    q: "Do you work with agencies?",
    a: "Yes. I currently deliver client projects inside a WordPress agency, and I'm open to agency partnerships as well as direct client builds.",
  },
  {
    q: "Which time zones do you work with?",
    a: "I'm based in Dhaka, Bangladesh (GMT+6) and work with clients in the US, UK and Europe. We agree on update times that suit your schedule.",
  },
  {
    q: "How do we get started?",
    a: "Send a short message through the form below, WhatsApp or email with what you need and any links. I'll reply with questions or a plan.",
  },
];

export function FaqApple() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="lg:col-span-4"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#087f5b] uppercase block mb-1">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Questions clients ask first.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Something else on your mind? Ask me directly in the contact form.
          </p>
        </motion.div>

        <div className="lg:col-span-8">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((item, idx) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: appleEase }}
              >
                <AccordionItem
                  value={`item-${idx}`}
                  className="rounded-2xl border border-slate-200/80 bg-[#fbfbfd] px-5 data-[state=open]:border-[#10b981]/40 data-[state=open]:bg-[#f4fbf8] transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-slate-950 hover:no-underline py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
