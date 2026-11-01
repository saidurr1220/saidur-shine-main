import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MotionConfig, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Index from "./pages/Index";

// Secondary routes load on demand to keep the homepage bundle small
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-[#fbfbfd]" />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cv" element={<Resume />} />
        {/* CATCH-ALL ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    window.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CursorSpotlight />
        <SmoothScrollProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </SmoothScrollProvider>
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export default App;
