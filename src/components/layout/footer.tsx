"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-10 px-6 sm:px-10 mt-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        
        {/* Left Side */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-bold text-foreground">Aravindhan</h3>
          <p className="text-sm font-medium text-foreground/70 dark:text-muted-foreground flex items-center gap-2">
            🇮🇳 Based in India
          </p>
          <p className="text-xs text-foreground/60 dark:text-white mt-4 md:mt-6">
            © {new Date().getFullYear()} Aravindhan. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-end gap-4 md:gap-3">
          <p className="text-sm text-foreground/60 dark:text-muted-foreground text-left md:text-right max-w-[300px] leading-relaxed">
            Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
          </p>
          
          <div className="flex items-center gap-4 mt-2">
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
