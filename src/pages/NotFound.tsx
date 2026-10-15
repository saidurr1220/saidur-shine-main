import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarApple } from "@/components/NavbarApple";
import { FooterApple } from "@/components/FooterApple";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b101b] text-white selection:bg-emerald-500/20 selection:text-emerald-300">
      <NavbarApple />
      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-16">
        <div className="text-center max-w-md">
          <h1 className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Page Not Found</h2>
          <p className="text-slate-400 mb-8 text-sm">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
            <Button asChild className="bg-[#087f5b] hover:bg-[#066347] text-white">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <FooterApple />
    </div>
  );
};

export default NotFound;
