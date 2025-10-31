import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ConstellationNetwork from "@/components/ConstellationNetwork";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "MERN Stack Developer & WordPress Expert";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* ✨ Constellation background */}
      <ConstellationNetwork
        density={0.00018}
        linkDistance={140}
        maxSpeed={0.35}
        nodeRadius={1.4}
        mouseStrength={0.06}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal-like intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Terminal Header */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 ml-2">saidur@portfolio:~$</span>
              </div>
              <div className="space-y-2 text-green-400">
                <div>$ whoami</div>
                <div className="text-white">Md. Saidur Rahman</div>
                <div>$ cat skills.txt</div>
                <div className="text-white">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>
                <div>$ ls experience/</div>
                <div className="text-blue-400">
                  wordpress_3years/ mern_stack/ remote_clients/
                </div>
                <div>$ cat stats.json</div>
                <div className="text-yellow-400">
                  {"{"}"projects": 50+, "clients": 15+, "experience": "3+ years"
                  {"}"}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Done
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Remote Clients
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Saidur Rahman
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-6"
              >
                Full Stack Developer specializing in{" "}
                <span className="text-primary font-semibold">MERN Stack</span> &
                <span className="text-primary font-semibold"> WordPress</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-muted-foreground mb-8 leading-relaxed"
              >
                3+ years building scalable web applications with React, Node.js,
                MongoDB, and WordPress. Delivered 50+ projects for international
                clients across UK, Germany, and USA.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>saidurr156@gmail.com</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Work Together
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
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
