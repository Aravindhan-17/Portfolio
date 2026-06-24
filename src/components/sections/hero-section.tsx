"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AtSign, Library, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative flex flex-col items-center justify-center px-6 sm:px-10 pt-32 sm:pt-40 md:pt-44 pb-16 z-10 min-h-screen">
      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
        }}
      />


      {/* Glow Effect Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 translate-y-32">
        <div className="absolute h-[400px] w-[600px] bg-purple-600/40 dark:bg-purple-600/30 blur-[140px] rounded-full" />
        <div className="absolute h-[350px] w-[500px] bg-blue-500/40 dark:bg-blue-600/30 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute h-[350px] w-[500px] bg-orange-500/40 dark:bg-orange-600/30 blur-[140px] rounded-full -translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="z-10 w-full max-w-3xl flex flex-col items-start">
        {/* Avatar + Headings Row */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 mb-7 md:mb-8 w-full">
          {/* Profile Avatar */}
          <div className="relative h-24 w-24 md:h-[130px] md:w-[130px] rounded-full border-[3px] border-background overflow-hidden bg-muted shadow-xl flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-5xl">
              👨🏻‍💻
            </div>
          </div>

          {/* Headings */}
          <div className="flex flex-col items-start justify-center gap-1 text-left w-full overflow-visible">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] whitespace-nowrap">
              Hey, I&apos;m{" "}
              <span className="text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-[#ae85ef] dark:to-[#2e1065]">
                Aravindhan
              </span>
              <span
                className="inline-block ml-2 lg:-translate-y-1"
                style={{ WebkitTextFillColor: "initial", color: "initial" }}
              >
                ✨
              </span>
            </h1>
            <h2 className="text-[2rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] whitespace-nowrap">
              A{" "}
              <span className="text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-[#ae85ef] dark:to-[#2e1065]">
                Software Developer
              </span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="w-full max-w-xl md:max-w-2xl text-[0.95rem] sm:text-base md:text-lg text-foreground/70 dark:text-muted-foreground mb-8 md:mb-10 leading-relaxed font-medium text-left">
          I&apos;m a{" "}
          <span className="font-bold text-foreground">Software Developer</span>{" "}
          focused on building{" "}
          <span className="font-bold text-foreground">
            clean, scalable, and reliable digital products
          </span>
          . I work across{" "}
          <span className="font-bold text-foreground">
            frontend and backend development
          </span>
          , creating user-friendly interfaces,{" "}
          <span className="font-bold text-foreground">secure APIs</span>, and{" "}
          <span className="font-bold text-foreground">
            performance-focused applications
          </span>{" "}
          that solve real business problems.
        </p>

        {/* Buttons + Social Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Button
              variant="default"
              className="w-full sm:w-auto rounded-md h-11 px-6 bg-foreground text-background hover:bg-foreground/90 font-semibold text-[15px] transition-all shadow-md"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-[18px] w-[18px]" strokeWidth={2.5} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-md h-11 px-6 border-border/50 dark:border-white/10 bg-background/50 dark:bg-black/50 hover:bg-accent/50 dark:hover:bg-white/5 text-foreground dark:text-white backdrop-blur-md font-medium text-[15px] transition-all shadow-sm"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                else router.push("/#contact");
              }}
            >
              <AtSign className="mr-2 h-[18px] w-[18px]" strokeWidth={2.5} />
              Contact Me
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-md h-11 px-6 border-border/50 dark:border-white/10 bg-background/50 dark:bg-black/50 hover:bg-accent/50 dark:hover:bg-white/5 text-foreground dark:text-white backdrop-blur-md font-medium text-[15px] transition-all shadow-sm"
              onClick={() => router.push("/projects")}
            >
              <Library className="mr-2 h-[18px] w-[18px]" strokeWidth={2.5} />
              View Projects
            </Button>
          </div>

          {/* Separator + Social Icons */}
          <div className="flex items-center gap-4 mt-1 sm:mt-0">
            <Separator
              orientation="vertical"
              className="h-6 hidden sm:block bg-black dark:bg-white !self-center my-auto"
            />
            <div className="flex items-center gap-5">
              <Link
                href="#"
                className="text-foreground/60 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/60 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
