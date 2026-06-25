"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-24 px-6 sm:px-10 max-w-[1400px] mx-auto flex flex-col justify-center">
      <div className="w-full flex flex-col gap-8">
        {/* Back Button */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-muted/50 group-hover:bg-muted flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            Back to Projects
          </Link>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-center relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Left Column - Image Slider */}
        <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col lg:sticky lg:top-32">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#1a1a1a] dark:bg-[#111111] rounded-2xl overflow-hidden group border border-white/5 shadow-2xl">
            {project.sliderImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out p-4 sm:p-8 ${
                  index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            {project.sliderImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Dots */}
            {project.sliderImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {project.sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-purple-500 w-4"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Project Info */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col pt-2 lg:pt-0 lg:max-h-[80vh] lg:overflow-y-auto lg:pr-6 pb-12 custom-scrollbar">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="space-y-10">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                
                {project.caseStudy?.overview || project.description}
              </p>
            </section>

            {/* My Role */}
            
            {project.caseStudy?.role && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  My Role
                </h2>
                <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                  
                  {project.caseStudy.role}
                </p>
              </section>
            )}

            {/* Key Features */}
            
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3 text-muted-foreground text-[15px] sm:text-base">
                  
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technical Highlights */}
            
            {project.caseStudy?.technicalHighlights && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Technical Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground text-[15px] sm:text-base">
                  
                  {project.caseStudy.technicalHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenge & Solution */}
            
            {project.caseStudy?.challengeSolution && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Challenge & Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base whitespace-pre-line">
                  
                  {project.caseStudy.challengeSolution}
                </p>
              </section>
            )}

            {/* Divider */}
            <div className="h-px w-full bg-border/60" />

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 gap-2.5 custom-scrollbar w-full max-w-[calc(100vw-3rem)] sm:max-w-none">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="shrink-0 text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors border-transparent"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Confidentiality Note */}
            
            {project.caseStudy?.confidentialityNote && (
              <section className="bg-muted/50 p-5 rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Confidentiality Note
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  
                  {project.caseStudy.confidentialityNote}
                </p>
              </section>
            )}

            {/* Action Buttons / Badges */}
            <section className="pt-4 flex gap-4">
              
              {project.isPrivate && (
                <div className="inline-flex items-center justify-center rounded-full bg-muted border border-border/60 text-muted-foreground text-sm font-medium h-11 px-6 gap-2 cursor-not-allowed">
                  Private Project
                </div>
              )}
              
              {!project.isPrivate && project.liveUrl !== "#" && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-transparent border border-border/60 hover:bg-muted text-foreground text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-11 px-6 gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Project
                </Link>
              )}
            </section>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
