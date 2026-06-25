"use client";

import { Code2, Layers, FlaskConical, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const cards = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "I build clean, responsive, and scalable user interfaces using modern frontend technologies.",
    items: [
      "React.js & TypeScript",
      "Next.js Applications",
      "Reusable Components",
      "State Management",
      "Responsive UI Development",
      "API Integration",
    ],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "I develop complete web applications with frontend, backend, database, and secure API workflows.",
    items: [
      "Node.js & Express.js",
      "RESTful API Development",
      "MongoDB & MySQL",
      "Authentication & Authorization",
      "Role-Based Access Control",
      "File Uploads & Validations",
    ],
  },
  {
    icon: FlaskConical,
    title: "Testing & Optimization",
    description:
      "I improve application quality, performance, and reliability through testing and production-ready practices.",
    items: [
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "Vitest, Jest & Playwright",
      "Performance Optimization",
      "Bug Fixing & Debugging",
    ],
  },
];

export function SkillsSection() {
  const router = useRouter();

  return (
    <section id="skills" className="relative w-full py-20 px-6 sm:px-10 z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Building Digital Experiences
          </h2>
          <p className="text-foreground/70 dark:text-muted-foreground max-w-2xl text-[15px] sm:text-base">
            I specialize in creating stunning user interfaces and developing
            high-quality applications that stand out.
          </p>
        </div>

        {/* Desktop: 3-col grid — hidden on tablet, shown on lg+ */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mb-5">
          {cards.map(({ icon: Icon, title, description, items }) => (
            <div
              key={title}
              className="flex flex-col p-6 rounded-2xl border border-border dark:border-white/20 bg-background/50 dark:bg-[#0a0a0a] backdrop-blur-sm transition-colors hover:bg-accent/10 dark:hover:bg-white/[0.02]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-foreground dark:text-[#c084fc]">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="text-[14px] text-foreground/70 dark:text-muted-foreground mb-6 leading-relaxed">
                {description}
              </p>
              <ul className="space-y-2.5 mt-auto">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-[7px] flex-shrink-0" />
                    <span className="text-[14px] font-medium text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tablet: 1-col stacked cards, each horizontal — shown between sm and lg */}
        <div className="lg:hidden flex flex-col gap-5 mb-5">
          {cards.map(({ icon: Icon, title, description, items }) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-border dark:border-white/20 bg-background/50 dark:bg-[#0a0a0a] backdrop-blur-sm transition-colors hover:bg-accent/10 dark:hover:bg-white/[0.02]"
            >
              {/* Left: icon + title + description */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-foreground dark:text-[#c084fc]">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-[14px] text-foreground/70 dark:text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Right: bullet list */}
              <ul className="flex-1 min-w-0 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2.5 sm:gap-y-2.5 content-start">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-[7px] flex-shrink-0" />
                    <span className="text-[14px] font-medium text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-start sm:justify-end mt-2">
          <Button
            variant="outline"
            onClick={() => router.push("/projects")}
            className="rounded-md h-11 px-5 border-border/50 dark:border-white/10 bg-background/50 dark:bg-black/50 hover:bg-accent/50 dark:hover:bg-white/5 text-foreground dark:text-white backdrop-blur-md font-medium text-[14px] transition-all shadow-sm cursor-pointer"
          >
            <LayoutGrid className="mr-2 h-4 w-4 text-foreground/70 dark:text-muted-foreground" />
            View My Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
