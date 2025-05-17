import React from "react";


import HeroSection from "../components/MainLayout/HeroSection";
import Services from "../components/MainLayout/Services/Services";
import WorkSection from "../components/MainLayout/WorkSection/WorkSection";
import Contact from "../components/MainLayout/Contact/Contact";
import Footer from "../components/MainLayout/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col font-clash-display">
        <HeroSection />
        <Services />
        <WorkSection />
        <Contact />
      <Footer />
    </div>
  );
}