import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
      setShowTopBtn(latest > 0.12);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 origin-left z-50 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
        style={{ scaleX }}
      />

      {/* Floating Circular Back-to-Top Button */}
      {showTopBtn && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 text-foreground shadow-2xl hover:border-emerald-400 hover:shadow-emerald-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Circular SVG Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="18"
                className="stroke-slate-800"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r="18"
                className="stroke-emerald-400 transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={113}
                strokeDashoffset={113 - (113 * scrollPercentage) / 100}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <ArrowUp className="w-4 h-4 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </>
  );
}
