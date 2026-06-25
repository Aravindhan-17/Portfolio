"use client";

import { z } from "zod";

import { useState, type SubmitEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "Message is required" }).min(10, { message: "Message must be at least 10 characters" }),
});

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: "", email: "", message: "" });
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] || "",
        email: fieldErrors.email?.[0] || "",
        message: fieldErrors.message?.[0] || "",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll be in touch soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error(result);
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 px-6 sm:px-10 z-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Contact Card Container */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm bg-background">
          
          {/* SVG Background Layer */}
          <div className="absolute inset-0 bg-[url('/images/contact-bg.svg')] bg-cover sm:bg-contain md:bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none z-0" />
          
          {/* Glow Effect Background */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
            <div className="absolute h-[400px] w-[600px] bg-purple-600/40 dark:bg-purple-600/30 blur-[140px] rounded-full" />
            <div className="absolute h-[350px] w-[500px] bg-blue-500/40 dark:bg-blue-600/30 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="absolute h-[350px] w-[500px] bg-orange-500/40 dark:bg-orange-600/30 blur-[140px] rounded-full -translate-x-1/3 -translate-y-1/3" />
          </div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] z-0 mix-blend-overlay" />
          
          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-10 items-center">
            
            {/* Left Side: Typography */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#ae85ef] dark:to-[#c084fc] leading-[1.2]">
                Bringing your ideas to life. <br />
                Let's turn your vision into reality
              </h2>
              <p className="text-foreground/70 dark:text-white/90 text-[15px] sm:text-base font-medium max-w-md">
                Have a project in mind or just want to chat? Let's connect!
              </p>
            </div>

            {/* Right Side: Floating Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-none rounded-2xl p-5 sm:p-6 flex flex-col gap-4">
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[14px] font-semibold text-foreground/90">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Your Name"
                    className={`w-full bg-background/50 dark:bg-background/50 border ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'border-black/15 dark:border-white/10'} rounded-xl px-4 py-2.5 h-auto text-[15px] focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white transition-colors placeholder:text-muted-foreground/60`}
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-0.5">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[14px] font-semibold text-foreground/90">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="contact@example.com"
                    className={`w-full bg-background/50 dark:bg-background/50 border ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-black/15 dark:border-white/10'} rounded-xl px-4 py-2.5 h-auto text-[15px] focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white transition-colors placeholder:text-muted-foreground/60`}
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-0.5">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[14px] font-semibold text-foreground/90">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Your message here..."
                    rows={3}
                    className={`w-full bg-background/50 dark:bg-background/50 border ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : 'border-black/15 dark:border-white/10'} rounded-xl px-4 py-3 text-[15px] focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white transition-colors placeholder:text-muted-foreground/60 resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 mt-0.5">{errors.message}</span>}
                </div>

                <div className="flex justify-end mt-2">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    variant="default" 
                    className="rounded-xl h-11 px-8 bg-foreground text-background hover:bg-foreground/90 font-semibold text-[15px] transition-all shadow-md w-full sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
