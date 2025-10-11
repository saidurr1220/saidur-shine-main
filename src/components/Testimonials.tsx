import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Williams",
    role: "Business Owner",
    company: "DipMyRyde UK",
    content: "Saidur delivered exactly what we needed — a smooth booking system and a beautifully optimized site. Our online bookings increased significantly!",
    rating: 5,
    initials: "JW",
  },
  {
    name: "Michael Schmidt",
    role: "IT Manager",
    company: "Supermicro Germany",
    content: "Outstanding work on our product catalog. The site is now lightning fast and our Core Web Vitals scores have never been better.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Nick Quinton",
    role: "Consultant",
    company: "NickQuinton.com",
    content: "Professional, responsive, and highly skilled. Saidur transformed my online presence and the results speak for themselves.",
    rating: 5,
    initials: "NQ",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-6 bg-card border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
