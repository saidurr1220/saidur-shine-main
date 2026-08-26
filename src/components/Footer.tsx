import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/saidurr1220", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rahmansaidur",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:saidurr1256@gmail.com", label: "Email" },
  { icon: Phone, href: "https://wa.me/8801515687002", label: "WhatsApp" },
];

const footerNavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Resume / CV", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/60 backdrop-blur-xl py-14 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-mono font-bold text-primary text-sm">
                SR
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Md. Saidur Rahman
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Full Stack WordPress Developer with 2+ years building custom plugin architectures, WooCommerce platforms, dynamic pricing engines, and GTM/GA4 conversion deduplication.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Delivered 11 projects last month ? 10 rated 5?</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4 text-xs font-mono uppercase tracking-wider text-primary">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-semibold text-xs font-mono uppercase tracking-wider text-primary">
              Core Capabilities
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Custom Plugin Development (OOP) ? WooCommerce Hooks & Filters ? Distance Matrix Pricing ? Stripe Webhooks ? Paid Memberships Pro ? Tutor LMS ? GTM/GA4 Dedup ? Core Web Vitals
            </p>
            <div className="flex gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-surface hover:bg-primary hover:text-primary-foreground border border-border flex items-center justify-center transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>? {new Date().getFullYear()} Md. Saidur Rahman. Built with modern React & Framer Motion.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Dhaka, Bangladesh</span>
            <span>?</span>
            <a href="mailto:saidurr1256@gmail.com" className="hover:text-primary transition-colors">
              saidurr1256@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
