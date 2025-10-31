import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/saidur1529", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rahmansaidur/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:saidurr156@gmail.com", label: "Email" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Md. Saidur Rahman
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              WordPress Developer focused on fast, SEO-friendly sites with 2.5+
              years experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface hover:bg-surface-hover flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Md. Saidur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
