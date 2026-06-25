"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center relative z-10 w-full mt-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute h-[300px] w-[500px] bg-red-600/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="h-24 w-24 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 shadow-sm">
          <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Something went wrong
        </h2>
        
        <p className="text-foreground/70 dark:text-muted-foreground max-w-[500px] mb-8 text-lg leading-relaxed">
          An unexpected error has occurred. We've logged the issue, but you can try refreshing the page.
        </p>
        
        <Button 
          onClick={() => reset()} 
          variant="default" 
          className="rounded-xl h-12 px-8 text-[15px] font-semibold w-full sm:w-auto shadow-md bg-red-600 hover:bg-red-700 text-white border-transparent"
        >
          <RefreshCcw className="mr-2 h-5 w-5" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
