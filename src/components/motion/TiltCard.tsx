import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  useEffect(() => {
    // Check for touch / coarse pointer
    const isTouch = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    if (isTouch || shouldReduce) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt
      const rX = -((y - centerY) / centerY) * maxTilt;
      const rY = ((x - centerX) / centerX) * maxTilt;

      rotateX.set(rX);
      rotateY.set(rY);

      glareX.set((x / rect.width) * 100);
      glareY.set((y / rect.height) * 100);

      // Set CSS variables for spotlight inside card
      cardRef.current.style.setProperty("--x", `${x}px`);
      cardRef.current.style.setProperty("--y", `${y}px`);
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      glareX.set(50);
      glareY.set(50);
    };

    const el = cardRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [maxTilt, shouldReduce, rotateX, rotateY, glareX, glareY]);

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: 1200 }} className="relative">
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative ${className}`}
      >
        {children}
        {glare && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(16, 185, 129, 0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)`,
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}

