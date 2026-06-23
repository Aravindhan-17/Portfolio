"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe, AtSign, Library } from "lucide-react"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative flex flex-col items-center justify-center pt-24 pb-24 px-6 z-10 min-h-[85vh]">
      {/* Glow Effect Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute h-[500px] w-[700px] bg-purple-500/40 dark:bg-purple-600/30 blur-[120px] rounded-full" />
        <div className="absolute h-[400px] w-[600px] bg-blue-400/50 dark:bg-blue-600/30 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4" />
        <div className="absolute h-[450px] w-[650px] bg-rose-400/50 dark:bg-pink-600/30 blur-[120px] rounded-full -translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="z-10 flex flex-col items-start text-left">
        {/* Top Row: Avatar + Headings */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8 w-full">
          {/* Profile Avatar Placeholder */}
          <div className="relative h-24 w-24 md:h-[130px] md:w-[130px] rounded-full border-[3px] border-background overflow-hidden bg-muted shadow-xl flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-5xl">
              👨🏻‍💻
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-1">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-foreground leading-none">
              Hey, I'm <span className="text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-[#ae85ef] dark:to-[#2e1065]">Aravindhan</span>✨
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-none">
              A <span className="text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-[#ae85ef] dark:to-[#2e1065]">Software Developer</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-[1.1rem] md:text-lg text-foreground mb-10 leading-relaxed tracking-wide">
          A <span className="font-bold">fullstack developer</span> with solid foundations in <span className="font-bold">design</span>.<br className="hidden md:block" />
          passionate about crafting seamless user experiences I thrive at the intersection<br className="hidden md:block" />
          of creativity and functionality.
        </p>

        {/* Buttons and Social Links */}
        <div className="flex flex-wrap items-center gap-4">
          <Button 
            variant="outline" 
            className="rounded-xl h-11 px-5 sm:px-6 border-border/50 dark:border-white/10 bg-background/50 dark:bg-black/50 hover:bg-accent/50 dark:hover:bg-white/5 text-foreground dark:text-white backdrop-blur-md font-medium text-[15px] transition-all shadow-sm"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              } else {
                router.push("/#contact")
              }
            }}
          >
            <AtSign className="mr-2 h-[18px] w-[18px]" strokeWidth={2.5} /> Contact Me
          </Button>
          <Button 
            variant="outline" 
            className="rounded-xl h-11 px-5 sm:px-6 border-border/50 dark:border-white/10 bg-background/50 dark:bg-black/50 hover:bg-accent/50 dark:hover:bg-white/5 text-foreground dark:text-white backdrop-blur-md font-medium text-[15px] transition-all shadow-sm"
            onClick={() => router.push("/projects")}
          >
            <Library className="mr-2 h-[18px] w-[18px]" strokeWidth={2.5} /> View Projects
          </Button>
          
          <div className="h-5 w-px bg-border/60 dark:bg-white mx-2 hidden sm:block" />
          
          <div className="flex items-center gap-6 sm:pl-2">
            <Link href="#" className="text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors text-sm font-bold">GitHub</Link>
            <Link href="#" className="text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors"><Globe className="h-4 w-4 stroke-[2.5px]" /></Link>
            <Link href="#" className="text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors text-sm font-bold">LinkedIn</Link>
            <Link href="#" className="text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors flex items-center justify-center font-bold font-mono text-base leading-none">X</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
