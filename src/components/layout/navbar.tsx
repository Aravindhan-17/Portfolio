"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href === "/#contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(href);
  };

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container relative flex h-16 sm:h-20 max-w-4xl mx-auto items-center px-4 sm:px-6 md:px-8">
        {/* Left side Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-foreground"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-sm font-black">
              A
            </span>
            Aravindhan.dev
          </Link>
        </div>

        {/* Centered Navigation — desktop only */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              onClick={() => handleNav(link.href)}
              className="text-foreground hover:text-foreground font-medium rounded-full px-6 py-2"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex flex-1 justify-end items-center gap-2">
          <ModeToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-foreground/10 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 px-4 pb-6 pt-2 shadow-xl">
          <nav className="flex flex-col gap-2 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="w-full text-center px-4 py-3 rounded-xl text-foreground font-semibold hover:bg-foreground/5 transition-all text-lg tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
