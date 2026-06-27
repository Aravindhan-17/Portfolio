

import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

export function ExperienceSection() {
  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "Auth & RBAC",
    "Unit Testing",
    "Performance Optimization",
  ];

  return (
    <section id="experience" className="relative w-full py-20 px-6 sm:px-10 z-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute h-[250px] w-[350px] bg-purple-500/10 dark:bg-purple-600/5 blur-[90px] rounded-full translate-x-1/3" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-foreground/70 dark:text-muted-foreground max-w-2xl text-[15px] sm:text-base">
            My career timeline showing roles, key achievements, and the technical ecosystems I&apos;ve worked in.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-border/60 dark:border-white/10 ml-3 sm:ml-6 pl-8 sm:pl-10 py-2 space-y-12">
          
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-4 w-[18px] h-[18px] rounded-full bg-background border-[3px] border-foreground dark:border-[#c084fc] flex items-center justify-center shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground dark:bg-[#c084fc]" />
          </div>

          {/* Main Experience Card */}
          <div className="group relative flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 sm:p-8 rounded-2xl border border-border dark:border-white/20 bg-background/50 dark:bg-[#0a0a0a] backdrop-blur-sm transition-colors hover:bg-accent/10 dark:hover:bg-white/[0.02]">
            
            {/* Left Column: Role & Company Info */}
            <div className="lg:w-[30%] flex-shrink-0 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-foreground dark:text-[#c084fc]">
                <Briefcase className="w-5 h-5" strokeWidth={2} />
                <span className="text-[13px] font-bold tracking-wider uppercase">Current Role</span>
              </div>
              
              <div>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight transition-colors duration-300">
                  Software Developer
                </h3>
                
                <a 
                  href="https://hattussa.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 mt-1.5 text-foreground/90 font-semibold text-[15px] hover:underline transition-all duration-200"
                >
                  <Building2 className="w-4 h-4 text-foreground/55" strokeWidth={2} />
                  <span>Hattussa IT Solutions</span>
                </a>
              </div>

              {/* Metadata tags */}
              <div className="flex flex-col gap-2 mt-2 text-[14px] text-foreground/70 dark:text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-foreground/45" strokeWidth={2} />
                  <span>Apr 2024 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-foreground/45" strokeWidth={2} />
                  <span>Puducherry, India</span>
                </div>
              </div>
            </div>

            {/* Right Column: Description & Technologies */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              <div>
                <p className="text-[15px] sm:text-[15.5px] text-foreground/80 dark:text-muted-foreground/90 leading-relaxed font-medium">
                  Built scalable full-stack applications using React, TypeScript, Node.js, Express, MongoDB, and MySQL. Worked on event management, booking, messaging, and admin platforms with REST API integration, authentication, role-based access control, reusable frontend modules, testing, and performance optimization.
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-md text-[13px] font-semibold tracking-tight border border-border/60 dark:border-white/5 bg-black/[0.03] dark:bg-zinc-900/40 text-foreground/80 dark:text-muted-foreground hover:bg-accent/50 dark:hover:bg-white/10 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
