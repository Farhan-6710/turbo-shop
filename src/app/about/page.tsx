"use client"

import AboutSection from "@/components/about/AboutSection";
import ScrollToTop from "@/components/extras/ScrollToTop";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import usePreLoaderAnimation from "@/lib/usePreLoaderAnimation";
import React from "react";

const Page: React.FC = () => {
  usePreLoaderAnimation();

  return (
    <div className="bg-whiteOne dark:bg-blackTwo">
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <AboutSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Page;
