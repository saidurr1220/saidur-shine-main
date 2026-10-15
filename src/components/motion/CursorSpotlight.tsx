import React, { useEffect, useRef, useState } from "react";

export function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Desktop only: check if hover and fine pointer
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Check if mouse is over a dark section
      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      const darkSection = targetEl?.closest("#hero, #projects, #contact, footer, [data-dark='true']");
      setActive(!!darkSection);
    };

    const loop = () => {
      // Lerp for butter-smooth movement
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className={`fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-500 z-30 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}

