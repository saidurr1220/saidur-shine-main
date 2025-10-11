import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-transform duration-700 ease-out"
        style={{
          left: position.x,
          top: position.y,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
