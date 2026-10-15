import { useEffect, useState, useRef } from "react";

interface UseCountUpOptions {
  duration?: number; // ms
  decimals?: number;
}

export function useCountUp(
  target: number,
  isVisible: boolean,
  options: UseCountUpOptions = {}
): number {
  const { duration = 1200, decimals = 0 } = options;
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    let frameId: number;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = easedProgress * target;

      setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, target, duration, decimals]);

  return value;
}

