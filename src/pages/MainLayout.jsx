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
      <div className="min-h-screen py-8 px-4">
        <WorkSection />
      </div>
      <div className="min-h-screen py-8 px-4">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}