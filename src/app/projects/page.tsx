import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { projects } from "@/constants/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of my recent projects, including secure platforms, dashboards, and scalable web applications.",
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card cursor-pointer transition-shadow duration-300 hover:shadow-xl",
        project.className
      )}
    >
      {/* Image container filling the bento cell */}
      <div className="relative w-full h-full min-h-[280px] sm:min-h-[300px] md:min-h-[350px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out lg:group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />
        
        {/* Dark gradient overlay - always visible on mobile, hover on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out" />

        {/* Card info — always visible on mobile, hover only on desktop */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-0 lg:translate-y-4 opacity-100 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 ease-out">
          {/* Title */}
          <h2 className="text-white font-bold text-lg sm:text-xl leading-tight">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mt-1">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 4).map((tag, index) => (
              <Badge
                key={tag}
                className={cn(
                  "text-[11px] px-2.5 py-0.5 rounded-full font-semibold transition-colors border-transparent bg-foreground text-background hover:bg-foreground/90",
                  index > 1 ? "hidden sm:inline-flex" : "inline-flex"
                )}
              >
                {tag}
              </Badge>
            ))}
            
            {/* Mobile +N badge (shows when more than 2 tags) */}
            {project.tags.length > 2 && (
              <Badge className="sm:hidden text-[11px] px-2.5 py-0.5 rounded-full font-semibold transition-colors border-transparent bg-muted text-muted-foreground hover:bg-muted/80">
                +{project.tags.length - 2}
              </Badge>
            )}

            {/* Desktop +N badge (shows when more than 4 tags) */}
            {project.tags.length > 4 && (
              <Badge className="hidden sm:inline-flex text-[11px] px-2.5 py-0.5 rounded-full font-semibold transition-colors border-transparent bg-muted text-muted-foreground hover:bg-muted/80">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 sm:px-10 pt-24 sm:pt-28 pb-24 w-full max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">
          Projects
        </h3>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
          Here you will find a selection of projects I have worked on.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:auto-rows-[350px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
