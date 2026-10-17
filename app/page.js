"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  About,
  Contact,
  Experience,
  Hero,
  Process,
  ServiceStrip,
  SiteFooter,
  SiteHeader,
  Work,
} from "./components/portfolio/PortfolioSections";

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from(".hero-animate", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        delay: 0.12,
      });

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f5f0] text-[#20211e]">
      <SiteHeader />
      <Hero />
      <ServiceStrip />
      <About />
      <Work />
      <Process />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  );
}
