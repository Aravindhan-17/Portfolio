import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* Grid background matching theme */}
      <div className="absolute inset-0 pointer-events-none z-50 hidden dark:block dark:bg-grid-white [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] opacity-20 dark:opacity-100" />

      <Navbar />

      <main className="flex-1 flex flex-col relative z-10">
        <HeroSection />
      </main>
    </div>
  );
}
