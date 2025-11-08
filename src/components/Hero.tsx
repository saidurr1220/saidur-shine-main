import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Terminal,
  Database,
  Server,
  Code2,
  Braces,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ConstellationNetwork from "@/components/ConstellationNetwork";
import { useEffect, useState } from "react";

export function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "$ npm run build:career --target=backend-engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { icon: Server, label: "Node.js", color: "text-green-500" },
    { icon: Database, label: "PostgreSQL", color: "text-blue-500" },
    { icon: Braces, label: "Express", color: "text-gray-400" },
    { icon: Code2, label: "React", color: "text-cyan-500" },
    { icon: Database, label: "MongoDB", color: "text-emerald-500" },
    { icon: GitBranch, label: "REST APIs", color: "text-orange-500" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      <ConstellationNetwork
        density={0.00018}
        linkDistance={140}
        maxSpeed={0.35}
        nodeRadius={1.4}
        mouseStrength={0.06}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-400 ml-2">terminal</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">
                  {terminalText}
                  <span className="animate-pulse">|</span>
                </div>
                <div className="text-gray-400 text-xs space-y-1">
                  <div>✓ Building fullstack applications...</div>
                  <div>✓ Optimizing database queries...</div>
                  <div>✓ Designing RESTful APIs...</div>
                  <div className="text-green-400">✓ Ready for production!</div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-3 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-all"
                >
                  <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color}`} />
                  <p className="text-xs font-medium">{tech.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-4"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary mb-4">
                  <Terminal className="inline w-4 h-4 mr-1" />
                  Backend Engineer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Md. Saidur Rahman
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono"
              >
                <span className="text-primary">const</span> role ={" "}
                <span className="text-green-400">"MERN Stack Developer"</span>;
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-base text-muted-foreground mb-6 leading-relaxed"
              >
                Fullstack engineer specializing in scalable backend systems.
                Built production-grade applications with Node.js, Express,
                PostgreSQL, and MongoDB. Experienced in REST API design,
                database optimization, and deploying cloud-native solutions.
              </motion.p>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-2 mb-6"
              >
                {[
                  "Built fullstack VAT Dashboard with PostgreSQL & Drizzle ORM",
                  "Designed RESTful APIs serving 1000+ daily requests",
                  "Optimized database queries reducing load time by 60%",
                ].map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>saidurr1256@gmail.com</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>

              <Button size="lg" variant="ghost" asChild>
                <a
                  href="https://github.com/saidur1529"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button size="lg" variant="ghost" asChild>
                <a
                  href="https://www.linkedin.com/in/rahmansaidur/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
