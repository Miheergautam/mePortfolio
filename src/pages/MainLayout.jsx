import React from "react";

import HeroSection from "../components/MainLayout/HeroSection";
import Services from "../components/MainLayout/Services/Services";
import WorkSection from "../components/MainLayout/WorkSection/WorkSection";
import Contact from "../components/MainLayout/Contact/Contact";
import Footer from "../components/MainLayout/Footer/Footer";
import TopBar from "../components/MainLayout/TopBar/TopBar";

export default function MainLayout() {
  return (
    <div className="flex flex-col font-clash-display min-h-screen bg-neutral-900">
      <TopBar />
      <HeroSection />
      <Services />
      <WorkSection />
      <Contact />
      <Footer />
    </div>
  );
}
