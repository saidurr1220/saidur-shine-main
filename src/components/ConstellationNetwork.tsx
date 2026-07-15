import { useEffect, useRef } from "react";

type Props = {
  density?: number;        // প্রতি পিক্সেলের ঘনত্ব (স্টারের সংখ্যা)
  linkDistance?: number;   // কত দূরে লাইন জোড়া লাগবে (px)
  maxSpeed?: number;       // পার্টিকলের সর্বোচ্চ গতি
  nodeRadius?: number;     // ডট সাইজ
  mouseStrength?: number;  // মাউসে রিপেল স্ট্রেংথ
  className?: string;
};

type Particle = { x: number; y: number; vx: number; vy: number };

export default function ConstellationNetwork({
  density = 0.00018,
  linkDistance = 140,
  maxSpeed = 0.35,
  nodeRadius = 1.4,
  mouseStrength = 0.06,
  className = "absolute inset-0 w-full h-full opacity-70 pointer-events-none",
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    let W = 0,
      H = 0,
      raf = 0;
    let last = performance.now();

    let particles: Particle[] = [];
    let mx = 0,
      my = 0,
      hasPointer = false;

    const isDark = () => document.documentElement.classList.contains("dark");

    const makeParticle = (): Particle => {
      const a = Math.random() * Math.PI * 2;
      const s = Math.random() * maxSpeed * 0.6 + maxSpeed * 0.4;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
      };
    };

    function resize() {
      const r = canvas.getBoundingClientRect();
      W = Math.floor(r.width);
      H = Math.floor(r.height);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(70, Math.floor(W * H * density));
      particles = Array.from({ length: count }, makeParticle);
    }

    function step() {
      const now = performance.now();
      const dt = Math.min(50, now - last); // ms clamp
      last = now;

      ctx.clearRect(0, 0, W, H);

      const dark = isDark();
      const nodeColor = dark ? "rgba(255,255,255,0.85)" : "rgba(17,24,39,0.85)";
      const [lr, lg, lb] = dark ? [255, 255, 255] : [17, 24, 39];

      // update
      for (const p of particles) {
        if (hasPointer) {
          const dx = p.x - mx,
            dy = p.y - my;
          const r = 110;
          const d2 = dx * dx + dy * dy;
          if (d2 < r * r) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / r) * mouseStrength;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        p.x += p.vx * (dt / 16.7);
        p.y += p.vy * (dt / 16.7);
        p.vx *= 0.999;
        p.vy *= 0.999;

        // wrap
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
      }

      // lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDistance * linkDistance) {
            const alpha = 1 - Math.sqrt(d2) / linkDistance;
            ctx.strokeStyle = `rgba(${lr},${lg},${lb},${0.28 * alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      ctx.fillStyle = nodeColor;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      hasPointer = true;
    }

    function onTouch(e: TouchEvent) {
      if (!e.touches.length) return;
      const t = e.touches[0];
      const r = canvas.getBoundingClientRect();
      mx = t.clientX - r.left;
      my = t.clientY - r.top;
      hasPointer = true;
    }

    function onLeave() {
      hasPointer = false;
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [density, linkDistance, maxSpeed, nodeRadius, mouseStrength]);

  return <canvas ref={ref} className={className} />;
}
