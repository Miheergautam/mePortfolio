import React, { useEffect } from "react";

import HeroSection from "../components/MainLayout/HeroSection";
import Services from "../components/MainLayout/Services/Services";
import WorkSection from "../components/MainLayout/WorkSection/WorkSection";
import Contact from "../components/MainLayout/Contact/Contact";
import Footer from "../components/MainLayout/Footer/Footer";
import TopBar from "../components/MainLayout/TopBar/TopBar";

import { gtagEvent } from "../utils/analytics";

// Utility to observe when sections enter view
const useTrackSectionView = (id, label) => {
  useEffect(() => {
    const section = document.getElementById(id);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gtagEvent("section_view", { section: label });
          observer.unobserve(entry.target); // track once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [id, label]);
};

export default function MainLayout() {
  useTrackSectionView("hero", "Hero");
  useTrackSectionView("services", "Services");
  useTrackSectionView("work", "Work");
  useTrackSectionView("contact", "Contact");
  useTrackSectionView("footer", "Footer");

  return (
    <div className="flex flex-col font-clash-display min-h-screen bg-neutral-900 text-cust-light scroll-smooth overflow-x-hidden">
      {/* Top Navigation Bar */}
      <TopBar />

      {/* Responsive Sections */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <section id="hero" className="py-12 sm:py-16 md:py-24">
          <HeroSection />
        </section>

        <section id="services" className="py-12 sm:py-16 md:py-24">
          <Services />
        </section>

        <section id="work" className="py-12 sm:py-16 md:py-24">
          <WorkSection />
        </section>

        <section id="contact" className="py-12 sm:py-16 md:py-24">
          <Contact />
        </section>

        <section id="footer" className="pt-12 sm:pt-16 md:pt-20 pb-4">
          <Footer />
        </section>
      </main>
    </div>
  );
}
