import React, { useState } from "react";
import {
  Server,
  Database,
  Shield,
  Layout,
  BarChart3,
  Zap,
  Sparkles,
  Bot,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function SkillsBento() {
  return (
    <section id="skills" className="py-28 px-4 apple-canvas">
      <div className="container mx-auto max-w-6xl">
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
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Core Skills & Engineering Stack
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Production-tested technologies across custom WordPress development, conversion tracking, database optimization, and modern AI workflows.
          </p>
        </motion.div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Bento 1: Large Featured Card - WordPress Core & OOP Plugins (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 , ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-7 apple-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">WordPress Development</h3>
                  <p className="text-xs text-slate-500">Custom Themes, Child Themes & OOP Plugins</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Expertise in object-oriented plugin architecture, hooks & filters (zero core edits), Custom Post Types, taxonomies, AJAX interfaces, WP REST API, and ACF Pro.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {["Custom Themes", "Plugin Development (OOP)", "WooCommerce", "Hooks & Filters", "AJAX", "WP REST API", "ACF Pro", "Custom Post Types"].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200/60">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento 2: Analytics & Conversion Deduplication (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 , ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-5 apple-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Analytics & Tracking</h3>
                  <p className="text-xs text-slate-500">Stripe-Aware Conversion Dedup</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Google Tag Manager (GTM), GA4 e-commerce events, Google Ads conversion tracking, and transaction-ID deduplication preventing double counts.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {["GTM", "GA4 Ecommerce", "Google Ads Tracking", "Conversion Deduplication", "Search Console"].map((t) => (
                <span key={t} className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200/60">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento 3: Integrations & Payment Gateways (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.15 , ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-4 apple-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Integrations & APIs</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Stripe Payments & Webhooks, Google Distance Matrix API, Paid Memberships Pro, Tutor LMS, Fluent Forms, Bitrix24 & Zoho CRMs.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
              {["Stripe Webhooks", "Distance Matrix", "PMPro", "Tutor LMS", "Zoho CRM"].map((t) => (
                <span key={t} className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento 4: Backend PHP, MySQL & Laravel (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 , ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-4 apple-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Backend & Database</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                PHP (OOP), MySQL Database Indexing, Query Optimization (fixing slow LIKE queries with lookup tables), Laravel, and Filament.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
              {["PHP (OOP)", "MySQL Indexing", "Query Optimization", "Laravel", "Filament"].map((t) => (
                <span key={t} className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento 5: Performance, Page Builders & AI Workflows (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.25 , ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-4 apple-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Speed & AI Workflows</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Core Web Vitals, LiteSpeed Cache tuning, Elementor Pro, Gutenberg, Git/GitHub, Claude Code, Cursor & Copilot.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
              {["Core Web Vitals", "LiteSpeed", "Elementor Pro", "Claude Code", "Cursor"].map((t) => (
                <span key={t} className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
