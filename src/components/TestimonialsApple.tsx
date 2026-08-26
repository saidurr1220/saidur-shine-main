import React from "react";
import { Star, Quote, CheckCircle2, Building2, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Thorne",
    role: "Managing Director",
    company: "OnRoute Couriers Ltd",
    location: "United Kingdom",
    rating: 5,
    project: "Dynamic Pricing Engine & Stripe Integration",
    text: "Saidur delivered our dynamic distance pricing calculator and Stripe checkout ahead of our deadline. The GTM conversion tracking with deduplication solved a major reporting headache for our Google Ads campaigns.",
    metric: "0.3ms live quote calculation",
  },
  {
    name: "Marcus Vance",
    role: "Head of Operations",
    company: "Vault Labs Research",
    location: "United States",
    rating: 5,
    project: "20+ WooCommerce Custom Modules",
    text: "He engineered over 20 custom modules on top of WooCommerce without touching core files once. Our dual wholesale/retail inventory and store credit checkout work seamlessly. An exceptional WordPress developer.",
    metric: "100% upgrade-safe hooks & filters",
  },
  {
    name: "Elena Rostova",
    role: "Founder & Lead Organizer",
    company: "California Landlords Union",
    location: "United States",
    rating: 5,
    project: "3-Tier Membership Portal & Tutor LMS",
    text: "We were facing a critical launch blocker with broken member registrations. Saidur stepped in, fixed the core issues within 24 hours, and built a custom SaaS dashboard that our members love.",
    metric: "Shipped on launch deadline",
  },
];

export function TestimonialsApple() {
  return (
    <section id="testimonials" className="py-28 px-4 bg-white border-t border-black/[0.04]">
      <div className="container mx-auto max-w-6xl">
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
            <span>Client Endorsements & Social Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            What Clients & Agencies Say
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Delivering high-velocity WordPress engineering across the US, UK, and Australia with 10 out of 11 projects rated 5 stars last month.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="apple-card p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-500">{item.role} ? {item.company}</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {item.metric}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" /> {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
