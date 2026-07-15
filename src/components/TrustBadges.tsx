import { Gauge, Search, Smartphone, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  { icon: Gauge, label: "Performance", description: "Fast load times" },
  { icon: Search, label: "SEO", description: "Search optimized" },
  { icon: Smartphone, label: "Responsive", description: "Mobile-first" },
  { icon: Wrench, label: "Maintenance", description: "Ongoing support" },
];

export function TrustBadges() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <Card
              key={badge.label}
              className="p-6 text-center bg-card hover:bg-surface-hover transition-colors border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <badge.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">{badge.label}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
