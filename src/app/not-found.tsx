"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center relative z-10 w-full mt-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute h-[300px] w-[500px] bg-purple-600/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[150px] sm:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/5 dark:from-white dark:to-white/5 leading-none mb-4 select-none">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Page not found
        </h2>
        <p className="text-foreground/70 dark:text-muted-foreground max-w-[500px] mb-8 text-lg leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button onClick={() => router.push("/")} variant="default" className="rounded-xl h-12 px-8 text-[15px] font-semibold w-full sm:w-auto shadow-md">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Button>
          <Button onClick={() => router.push("/projects")} variant="outline" className="rounded-xl h-12 px-8 text-[15px] font-semibold border-border/50 bg-background/50 backdrop-blur-sm w-full sm:w-auto shadow-sm">
            <Compass className="mr-2 h-5 w-5" />
            Explore Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
