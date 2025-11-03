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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Terminal-like intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Terminal Header */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 ml-2 text-xs sm:text-sm">
                  saidur@portfolio:~$
                </span>
              </div>
              <div className="space-y-2 text-green-400 min-w-0">
                <div>$ whoami</div>
                <div className="text-white break-words">Md. Saidur Rahman</div>
                <div>$ cat skills.txt</div>
                <div className="text-white break-words">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>
                <div>$ ls experience/</div>
                <div className="text-blue-400 break-words text-xs sm:text-sm">
                  wordpress_4years/ mern_stack/ ui_ux_design/
                </div>
                <div>$ cat contact.json</div>
                <div className="text-green-400 break-words text-xs sm:text-sm">
                  {"{"}"email": "saidurr1256@gmail.com", "phone": "+880 1515-687002"{"}"}
                </div>
                <div>$ cat stats.json</div>
                <div className="text-yellow-400 break-words text-xs sm:text-sm">
                  {"{"}"projects": 100+, "clients": 25+, "experience": "4+ years"
                  {"}"}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="professional-card rounded-lg p-2 sm:p-4 text-center subtle-hover"
              >
                <div className="text-lg sm:text-2xl font-bold professional-accent">
                  4+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="professional-card rounded-lg p-2 sm:p-4 text-center subtle-hover"
              >
                <div className="text-lg sm:text-2xl font-bold professional-accent">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Projects Done
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="professional-card rounded-lg p-2 sm:p-4 text-center subtle-hover"
              >
                <div className="text-lg sm:text-2xl font-bold professional-accent">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Past Clients
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="text-foreground">
                  Saidur Rahman
                </span>
              </motion.h1>              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6"
              >
                Full Stack Developer & UI/UX Designer specializing in{" "}
                <span className="professional-accent">MERN Stack</span> &
                <span className="professional-accent"> WordPress</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed"
              >
                4+ years building scalable web applications with React, Node.js,
                MongoDB, and WordPress. Expert in UI/UX design with Figma and Adobe tools. 
                Delivered 100+ projects for international clients.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-8"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">saidurr1256@gmail.com</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="professional-button w-full sm:w-auto"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Open to Full-time Roles
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download Resume
                </a>
              </Button>

              <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="flex-1 sm:flex-none"
                >
                  <a
                    href="https://github.com/saidur1529"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    GitHub
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="flex-1 sm:flex-none"
                >
                  <a
                    href="https://www.linkedin.com/in/rahmansaidur/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
