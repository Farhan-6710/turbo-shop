"use client"

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import HeroSection from "@/components/hero/HeroSection";
import PopularProductsSection from "@/components/popularProducts/PopularProductsSection";
import ContactUsSection from "@/components/contactUs/ContactUsSection";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import { useEffect } from "react";

const Page: React.FC = () => {

  
  useEffect(() => {
    // Save the current scroll position before starting the animation
    const body = document.querySelector("body");
    const scrollPosition = window.scrollY;

    // Add transition animation class
    body?.classList.add("page-transition");

    // Remove the transition class after the animation completes (500ms)
    const timer = setTimeout(() => {
      // Remove transition class
      body?.classList.remove("page-transition");

      // Restore the scroll position after the transition
      window.scrollTo(0, scrollPosition);
    }, 500); // Match this delay with the transition duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-whiteOne dark:bg-blackOne">
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <HeroSection />
      <PopularProductsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Page;
