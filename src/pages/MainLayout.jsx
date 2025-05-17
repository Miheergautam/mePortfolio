import React from "react";

import HeroSection from "../components/MainLayout/HeroSection";
import Services from "../components/MainLayout/Services/Services";
import WorkSection from "../components/MainLayout/WorkSection/WorkSection";
import Contact from "../components/MainLayout/Contact/Contact";
import Footer from "../components/MainLayout/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col space-y-32 font-clash-display">
      <HeroSection />
      <hr className="border-t border-neutral-700 my-10 mx-auto w-11/12" />
      <Services />
      <hr className="border-t border-neutral-700 my-10 mx-auto w-11/12" />
      <WorkSection />
      <hr className="border-t border-neutral-700 my-10 mx-auto w-11/12" />
      <Contact />

      <Footer />
    </div>
  );
}
