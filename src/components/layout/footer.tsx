"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-10 px-6 sm:px-10 mt-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        
        {/* Left Side */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[17px] font-bold text-foreground">Aravindhan</h3>
          <p className="text-[14px] font-medium text-foreground/70 dark:text-muted-foreground flex items-center gap-2">
            🇮🇳 Based in India
          </p>
          <p className="text-[13px] text-foreground/60 dark:text-muted-foreground mt-4 md:mt-6">
            © {new Date().getFullYear()} Aravindhan. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-end gap-4 md:gap-3">
          <p className="text-[13.5px] text-foreground/60 dark:text-muted-foreground text-left md:text-right max-w-[300px] leading-relaxed">
            Website Designed in Figma. Built with Next.js, Typescript and Tailwind CSS.
          </p>
          
          <div className="flex items-center gap-4 mt-2">
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <FaGithub className="w-[18px] h-[18px]" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Mail className="w-[18px] h-[18px]" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <FaLinkedin className="w-[18px] h-[18px]" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <FaTwitter className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
