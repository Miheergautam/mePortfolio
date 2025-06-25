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
    <div className="flex flex-col font-clash-display min-h-screen bg-neutral-900">
      <TopBar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
