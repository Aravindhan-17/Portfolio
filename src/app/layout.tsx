import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-one-ruddy-94.vercel.app"),
  title: {
    default: "Aravindhan | Software Developer",
    template: "%s | Aravindhan",
  },
  description: "Portfolio of Aravindhan, a Software Developer specializing in modern web applications, frontend experiences, and backend workflows.",
  openGraph: {
    title: "Aravindhan | Software Developer",
    description: "Portfolio of Aravindhan, a Software Developer specializing in modern web applications, frontend experiences, and backend workflows.",
    url: "https://portfolio-one-ruddy-94.vercel.app",
    siteName: "Aravindhan Portfolio",
    type: "website",
    images: [
      {
        url: "/images/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aravindhan - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravindhan | Software Developer",
    description: "Portfolio of Aravindhan, a Software Developer specializing in modern web applications, frontend experiences, and backend workflows.",
    images: ["/images/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
            <div className="absolute inset-0 pointer-events-none z-50 hidden dark:block dark:bg-grid-white [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] opacity-20 dark:opacity-100" />
            
            <Navbar />
            
            <main className="flex-1 flex flex-col relative z-10">
              {children}
            </main>
            
            <Footer />
          </div>
          <Toaster />
          <Analytics />
          <SpeedInsights/>
        </ThemeProvider>
      </body>
    </html>
  );
}
