"use client"

import { useRouter } from "next/navigation"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-20 max-w-5xl mx-auto items-center px-6 md:px-8">
        {/* Left side empty for balance */}
        <div className="flex-1" />
        
        {/* Centered Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
          <Button 
            variant="ghost" 
            onClick={() => router.push("/")}
            className="text-foreground hover:text-foreground font-medium rounded-full px-6 py-2"
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => router.push("/projects")}
            className="text-foreground hover:text-foreground font-medium rounded-full px-6 py-2"
          >
            Projects
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              } else {
                router.push("/#contact")
              }
            }}
            className="text-foreground hover:text-foreground font-medium rounded-full px-6 py-2"
          >
            Contact
          </Button>
        </nav>

        {/* Right side */}
        <div className="flex flex-1 justify-end items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
